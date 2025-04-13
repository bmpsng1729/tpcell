const department = require("../models/department");
const user = require("../models/User");
const placedStudent=require("../models/placedStudent");

exports.createDepartment = async (req, res) => {
  try {
    console.log("hello bhai");
    const { deptName, facultyInchargeEmail } = req.body;

    if (!deptName || !facultyInchargeEmail) {
      console.log("Either department name or faculty incharge is not provided");
      return res.status(400).json({
        message: "Dear admin, you have not provided all details. Please fill and try again.",
        success: false,
      });
    }

    // Check if department already exists
    console.log("hello bhai2");
    const isDeptExist = await department.find({ deptName: deptName });
    if (isDeptExist.length !== 0) {
      console.log("Department already exists");
      return res.status(400).json({
        message: "Department already exists",
        success: false,
      });
    }

    // Find entry of faculty advisor from the User
    const inchargeId = await user.findOne({ email: facultyInchargeEmail });
    if (!inchargeId) {
      console.log("Faculty has not registered. Please register the faculty as an admin first.");
      return res.status(400).json({
        message: "Faculty has not registered. Please register the faculty as an admin first.",
        success: false,
      });
    }

    // Create department
    const createdDept = await department.create({
      deptName: deptName,
      facultyInChargeId: inchargeId._id,
      facultyInchargeEmail: facultyInchargeEmail,
      students: []
    });

    console.log("Department is created successfully");
    return res.status(201).json({
      message: "Congratulations! You have created one department successfully",
      success: true,
    });
  } catch (err) {
    console.log("There is an error in creating the department", err);
    return res.status(500).json({
      message: "There is an error in department creation",
      success: false,
    });
  }
};


exports.averagePackageBranchwise=async(req,res)=>{
    try{

       const batch= new Date().getFullYear()-3; // baad me isko 4 kar denna 
       // chai ,av data hm isi ka daale hai isliye
       console.log(batch)
       const result = await department.aggregate([
        {
          $lookup: {
            from: "users",
            localField: "students",
            foreignField: "_id",
            as: "studentInfo"
          }
        },
        {
          $unwind: {
            path: "$studentInfo",
            preserveNullAndEmptyArrays: true
          }
        },
        {
          $lookup: {
            from: "placedstudents",
            localField: "studentInfo._id",
            foreignField: "id",
            as: "placementInfo"
          }
        },
        {
          $unwind: {
            path: "$placementInfo",
            preserveNullAndEmptyArrays: true
          }
        },
        {
          $match: {
            "studentInfo.batch":batch // pass batch from request
          }
        },
        {
          $group: {
            _id: "$deptName",
            averageCTC: {
              $avg: {
                $cond: [{ $ifNull: ["$placementInfo.ctc", false] }, "$placementInfo.ctc", null]
              }
            },
            minCTC: {
              $min: {
                $cond: [{ $ifNull: ["$placementInfo.ctc", false] }, "$placementInfo.ctc", null]
              }
            },
            maxCTC: {
              $max: {
                $cond: [{ $ifNull: ["$placementInfo.ctc", false] }, "$placementInfo.ctc", null]
              }
            },
            totalPlacements: {
              $sum: {
                $cond: [{ $ifNull: ["$placementInfo.ctc", false] }, 1, 0]
              }
            }
          }
        },
        {
          $project: {
            _id: 0,
            department: "$_id",
            averageCTC: { $round: ["$averageCTC", 2] },
            minCTC: { $round: ["$minCTC", 2] },
            maxCTC: { $round: ["$maxCTC", 2] },
            totalPlacements: 1
          }
        }
      ]);
      
      
      
 if(result.length===0){
    console.log("error in finding avg branchwise",result);
   
        return res.status(400).json({
            message:"error in fetching all student some error inside controller "
        })
 }


 return res.status(200).json({
    message:"successfully fetch avg branchwise placements",
    success:true,
    result:result
 })


    }catch(err){
        console.log("err in  fetching avg branchwise placements");
        return res.status(400).json({
            message:"error in fetching all student "
        })
    }
}

exports.placementPercentageBranchwise=async(req,res)=>{
  try{
        // find the branch
        // find the data from the db
        const batch=new Date().getFullYear()-3;
       const response=await user.aggregate([
        {
          $match: {
            batch: batch,
            accountType:"student"
          }
        },
        {
          $group: {
            _id: "$branch",
            total: { $sum: 1 },
            placed: {
              $sum: {
                $cond: [{ $eq: ["$isplaced", true] }, 1, 0]
              }
            }
          }
        },
        {
          $project: {
            _id: 0,
            branch: "$_id",
            placed: 1,
            total: 1
          }
        }
      ]);
   if(response.length===0){
    return res.status(400).json({
      message:"there is no student of any branch in this batch",
      success:false
    });
   }
  return res.status(200).json({
    message:"branchwise percentage done successfully",
    success:true,
    response
  })
  

  }catch(err){
console.log("there is an error in finding the all branchwise percentage",err);
return res.status(400).json({
   message:"there is an error in api of finding branchwise data",
   success:false,
});
  }
}
