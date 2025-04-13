const  User  = require("../models/User");
const placedStudent=require("../models/placedStudent");
const companyModel=require("../models/Company");


exports.markPlaced=async(req,res)=>{
    try{  // find the details  from the  req body
         const {email,company,description,role,placementType,ctc}=req.body;
              if(!email || !company || !ctc){
                console.log("all required details are not entered");
                return res.status(400).json({
                    success:false,
                    message:"you have the all required details,"
                });
              }
        //find the student,update the isPlaced and return the updated values
         const user=await User.findOneAndUpdate(
            {email:email,accountType:"student"},
             {$set:{isplaced:true}},
            {new:true,returnDocument:"after"}
         )
         if(!user){
            console.log("you have not entered a valid user email,or student has not registered into the placement website");
            return res.status.json({
                message:"user not  exist. probably you have entered a invalid emai or user has not registered to the placement website ye ",
                success:false
            });
         }
  // check the company is exist or not if exist store the object id of user into companies details
         const companyDetails = await companyModel.findOneAndUpdate(
            { name: company }, // match on 'name', not 'companyName'
            { $addToSet: { placedStudents: user._id } }, // avoid duplicates
            { new: true }
          );
          
          if (!companyDetails) {
            return res.status(400).json({
              message: "Please register the company first in the DB",
              success: false,
            });
          }
          

         // check if already marked placed or not
          const checkMarkPlaced=await placedStudent.findOne({id:user._id});
          if(checkMarkPlaced){
            console.log("user is alredy marked places");
            return res.status(400).json({
                message:"user is already marked placed",
                success:false,
            });
          }
         
        // insert the object id into the placed student table
               const placedMarkDetails=await placedStudent.create(
                {
                    id:user._id,
                    ctc:ctc,
                    placementType:placementType,
                    role:role,
                    company:company,
                    description:description,

                }
               );
               console.log("placed mark student placement details-",placedMarkDetails)
               
        // check into the company table the particular company exist or not ,if not then show a message to the coordinator that add the  company-do later
            
        // return a successfull message  to the 
         return res.status(200).json({
            message:"student mark placed successfully",
            success:true,
            placedMarkDetails:placedMarkDetails,
         });
    }
    catch(err){
        console.log("there is an error in marking placed:error-",err);
        return res.status(400).json({
            message:"there is an error in marking placed to student",
            success:false,
        })
    }
};

exports.showAllPlacedStudentBatchwise=async(req,res)=>{
    try{     const {batch}=parseInt(req.query.batch,10)-3||2022;
             // you have to verify that user is a admin
              // take all users from the 
              if(!batch){
                console.log("please provide batch");
                return res.status(400).json({
                    message:"please provide batch",
                    success:false,
                })
              }
              const allStudent = await placedStudent.aggregate([
                {
                    $lookup: {
                        from: "users", // Ensure correct collection name
                        localField: "id",
                        foreignField: "_id",
                        as: "placedStudentDetails"
                    }
                },
                { $unwind: "$placedStudentDetails" },
                {
                    $match: { 
                        "placedStudentDetails.batch": req.body.batch, 
                        "placedStudentDetails.branch": req.body.branch
                    }
                },
                {
                    $project: {
                        "placedStudentDetails.name": 1,
                        "placedStudentDetails.batch": 1,
                        "placedStudentDetails.branch": 1,
                        "ctc": 1,  // Ensure these fields exist in placedStudent
                        "role": 1,
                        "placementType": 1
                    }
                }
            ]);
            
            
              if(!allStudent){
                console.log("there is an error in db call to return all placed student of specific batch");
                return res.status(501).json({
                    message:"facing internal server error,can't find the data",
                    success:false,
                });
              }
              console.log("all the placed student of particular year and branch",allStudent);
              return res.status(200).json({
                message:"got all  placed student of the given branch",
                success:true,
                allusers:allStudent,
                studentCount:allStudent.length
              });


    } catch(err){
        console.log("there is an error in showing all placed student-",err);
        return res.status(400).json({
            message:"There is problem in showing all placed student",
            success:false
        });
    }
}

exports.topPackageStudents = async (req, res) => {
    try {
        // Extract query params
        console.log("batch from query",req.query.batch);
  const batch= parseInt(req.query.batch )|| new Date().getFullYear()-3;
        //const topStudentsCount = parseInt(req.query.topStudentsCount, 10);

        const topStudentsCount=parseInt(req.query.topStudentsCount, 10) || 10

        console.log("Year:", batch);
        console.log("Count:", topStudentsCount);

        // Validate input
        if (!batch || !topStudentsCount) {
            console.log("Missing batch or topStudentsCount");
            return res.status(400).json({
                message: "Missing batch year or number of students",
                success: false,
            });
        }

        // Fetch top students
        const allStudent = await placedStudent.aggregate([
            {
                $lookup: {
                    from: "users", // Correct collection name
                    localField: "id",
                    foreignField: "_id",
                    as: "placedStudentDetails"
                }
            },
            { $unwind: "$placedStudentDetails" },
            { $match: { "placedStudentDetails.batch": batch } },
            { $sort: { "ctc": -1 } },
            { $limit: topStudentsCount ||20 },
            {
                $project: {
                    "placedStudentDetails.name": 1,
                    "placedStudentDetails.batch": 1,
                    "placedStudentDetails.branch": 1,
                    "ctc": 1,
                    "role": 1,
                    "placementType": 1
                }
            }
        ]);

        // Check if students were found
        if (!allStudent || allStudent.length === 0) {
            console.log("No students found for this batch");
            return res.status(404).json({
                message: `no student found for${batch}`,
                success: false
            });
        }

        return res.status(200).json({
            message: "Successfully fetched top placed students",
            success: true,
            allStudent
        });
    } catch (err) {
        console.error("Error fetching top students:", err);
        return res.status(500).json({
            message: "Something went wrong while fetching top students",
            success: false,
        });
    }
};

exports.totalPlacedStudent=async(req,res)=>{
    try{ 
        // we have to show all the student placed in current 4th year
            const year=parseInt(req.query.year,10);
            console.log("year->",year);

            const batch=year-3;
            const allStudent=await User.find({isplaced:true,batch:batch});
            if(allStudent.length===0){
                return res.status(400).json({
                    message:"error in finding all placed student,or no any student placed till now",
                    success:false,
                });
            }
        
            return res.status(200).json({
                message: "All placed students fetched successfully",
                success: true,
                allStudent: allStudent,
                studentCount:allStudent.length
            });
    }
    catch(err){
         console.log("there is an error in the finding the total placed student");
         return res.status(400).json({
            message:"there is an error in the finding the total placed student",
            success:false,
         });
    }
}

// exports.totalStudent=async(req,res)=>{
//     try{
//              const year=parseInt(req.query.year,10);
//              const batch=year-4;
//         const allStudent= await User.find({accountType:"student",batch:batch});
//         if(allStudent.length===0){
//             console.log("its seems like no student found the database")
//             return res.status(400).json({
//                 message:"its seems like there is no user in the database",
//                 success:false
//             });
//         }
//         console.log("all student->",allStudent.length);
//         // return a successfull message
//         return res.status(200).json({
//             message:"all student fetched successfully",
//             success:true,
//             allStudent:allStudent,
           
//         })
//     }
//     catch(err){
//        console.log("there is an error in finding the total student");
//        return res.status(400).json({
//         message:"There is an error in finding the ",
//         success:false
//        })
//     }
// }

exports.averagePackageYearwise=async(req,res)=>{
    try{
        //finding batch from the query parameter
        //find all student of the batch and find average
        //return the successfull result
        const batch=parseInt(req.query.batch,10)|| new Date().getFullYear()-3;
        console.log(batch);
        const avgPlacement = await placedStudent.aggregate([
            {
              $lookup: {
                from: "users", // name of the User collection (auto-lowercased & pluralized)
                localField: "id",
                foreignField: "_id",
                as: "userData"
              }
            },
            {
              $unwind: "$userData"
            },
            {
              $match: {
                "userData.batch": batch,
                "userData.accountType": "student"
              }
            },
            {
              $group: {
                _id: null,
                averageCTC: { $avg: "$ctc" }
              }
            }
          ]);
          
         console.log("average placement");
         
         if(avgPlacement.length===0){
            return res.status(401).json({
                message:"no data found for average placement",
                success:false
            });
         }
         return res.status(200).json({
            message:"data fetched sucesssfully",
            success:true,
            avgCTC:Number(avgPlacement[0].averageCTC.toFixed(2)),
         })
          

    }catch(err){
        return res.status(401).json({
            message:"there is error in finding the average placement",
            success:false
        })
    }
}

exports.pieChartViewData=async(req,res)=>{
    try{
        const batch=new Date().getFullYear()-3;
        // now get the data from the db

const data = await placedStudent.aggregate([
  //  LEFT JOIN with User collection
  {
    $lookup: {
      from: "users", // collection name (lowercase plural usually)
      localField: "id", // field in placedStudent
      foreignField: "_id", // field in User
      as: "userData"
    }
  },
  // 🧹 Flatten the joined data (userData[0])
  { $unwind: "$userData" },

  //  Filter by batch
  {
    $match: {
      "userData.batch": batch
    }
  },

  //  Bucket by CTC
  {
    $bucket: {
      groupBy: "$ctc",
      boundaries: [0, 10, 20, 30, 1000],
      default: "Unknown",
      output: {
        count: { $sum: 1 },
        // students: {
        //   $push: {
        //     name: "$userData.name",
        //     email: "$userData.email",
        //     branch: "$userData.branch",
        //     ctc: "$ctc",
        //     company: "$company",
        //     role: "$role"
        //   }
        // }
      }
    }
  }
]);
if(data.length===0){
    return res.status(400).json({
        message:"no data found for the batch",
        success:false
    });
}
// process the data
const processedData=[
    data[0].count,data[1].count,data[2].count,data[3].count
];
console.log(processedData);
 // return a successfull message
 return res.status(200).json({
    message:"data fetched successfully",
    success:true,
    processedData
 })
    }
    catch(err){
        console.log("there is an error in finding the pie-chart details",err);

        return res.status(400).json({
            message:"there is an error in finding pie-chart data",
            success:false
        });
    }
}


