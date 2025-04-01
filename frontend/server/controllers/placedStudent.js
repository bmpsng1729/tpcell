const  User  = require("../models/User");
const placedStudent=require("../models/placedStudent");


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
            {email:email},
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

         console.log("user from db->",user);

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
    try{     const {batch}=req.body;
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
                allusers:allStudent
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
        const batch = parseInt(req.query.batch, 10);
        //const topStudentsCount = parseInt(req.query.topStudentsCount, 10);

        const topStudentsCount=parseInt(req.query.topStudentsCount, 10) || 20

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
                message: "No students found for the given batch",
                success: false
            });
        }

        console.log("Top placed students:", allStudent);

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
            const year=req.params.year || 2022;
            const allStudent=await placedStudent.find({})
    }
    catch(err){
        
    }
}
