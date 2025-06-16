const  User  = require("../models/User");
const placedStudent=require("../models/placedStudent");
const mailSender=require("../utils/mailSender");
exports.totalStudent=async(req,res)=>{
    try{
            //  const year=parseInt(req.query.year,10);
            const year=new Date().getFullYear();
             const batch=year-4;  // bas checking ke liye
        const allStudent= await User.find({accountType:"student",batch:batch});
        if(allStudent.length===0){
            console.log("its seems like no student found the database")
            return res.status(400).json({
                message:"its seems like there is no user in the database",
                success:false,
                year,
                batch
            });
        }
        // console.log("all student->",allStudent);
        // return a successfull message
        return res.status(200).json({
            message:"all student fetched successfully",
            success:true,
            allStudent:allStudent,
            studentCount:allStudent.length
        })
    }
    catch(err){
       console.log("there is an error in finding the total student");
       return res.status(400).json({
        message:"There is an error in finding the ",
        success:false
       })
    }
}
         // isko banana hai
//it will return all the student greater than a provided student
exports.cgpaBasedStudent=async(req,res)=>{
    console.log(req.params);
     const minCgpa=parseInt(req.query.cgpa,10);
  
    
    try{
        const students = await User.find({ cgpa: { $gte: minCgpa },accountType:"student" },) // Filter students with CGPA ≥ minCgpa
        .sort({ cgpa: -1 }); // Sort in descending order of CGPA

         if(students.length===0){
            console.log("there is an error in cgpa based student api");
            return res.status(400).json({
                message:"it seeems like you have provided a invalid cgpa,try again",

            })
         }
         console.log("cgpa based student",students);
         // return a succesfull result
         return res.status(200).json({
            message:"cgpa based student fetched successfully",
            success:true,
            students:students
         })
    } catch(err){
        console.log("there is an error cgpa based api");
        return res.status(500).json({
            message:"error in cgpa based api handler",
            success:false
        })
    }
}
// yaha par branch req.query me bhejna hai aur oa link v.... and oa link ko sucure karne ka sochna hai
exports.sendOaLink = async (req, res) => {
    try {
        // Parse CGPA from query
        const cgpa = parseFloat(req.query.cgpa); // Better to use parseFloat for decimal CGPAs
        const branch = ["cse"]; // You can make this dynamic later (from req.query or req.body)

        console.log("cgpa", cgpa);

        const batch = new Date().getFullYear() - 3;
        console.log("batch", batch);

        if (!cgpa || !branch || isNaN(cgpa)) {
            console.log("admin has not provided cgpa or branch to send the OA link");
            return res.status(400).json({
                message: "admin has not provided valid cgpa or branch to send the OA link",
                success: false,
            });
        }

        // Query DB to get emails
        const students = await User.find(
            {
                accountType: "student",
                cgpa: { $gte: cgpa },
                batch: batch,
                branch: { $in: branch },
                isplaced: false,
            },
            {
                email: 1,
                _id: 0,
            }
        );

        console.log("emails found:", students);

        if (students.length === 0) {
            return res.status(404).json({
                message: "No student found within this CGPA and branch",
                success: false,
            });
        }

        // Send emails (await mailSender if it's async)
        for (const student of students) {
            await mailSender(
                student.email,
                 "OA Link",
                  "abye hmm biempi , email sending check karne ke liye mail kar rrhe hai",);
        }

        return res.status(200).json({
            success: true,
            message: "Emails sent successfully",
        });

    } catch (err) {
        console.error("Sending OA link controller has some issues:", err);
        return res.status(500).json({
            message: "There is an issue in sending the OA links to the students",
            success: false,
        });
    }
};


exports.annualReport = async (req, res) => {
  try {
    const currentBatch = new Date().getFullYear()-4;

    // Step 1: Get all students from the current batch
    const students = await User.find({
      accountType: "student",
      batch: currentBatch
    });

    // Step 2: Get all placed students and map them by user ID
    const placements = await placedStudent.find().populate("id");

    const placementMap = new Map();
    for (const placement of placements) {
      const user = placement.id;
      if (user && user.batch === currentBatch && user.accountType === "student") {
        placementMap.set(user._id.toString(), placement);
      }
    }
    

    // Step 3: Create the report
    const report = students.map(student => {
      const placementInfo = placementMap.get(student._id.toString()) || null;

      return {
        name: student.name,
        email: student.email,
        branch: student.branch,
        cgpa: student.cgpa,
        isPlaced: student.isplaced,
        ctc: placementInfo ? placementInfo.ctc : null,
        company: placementInfo ? placementInfo.company : null,
        role: placementInfo ? placementInfo.role : null,
        placementType: placementInfo ? placementInfo.placementType : null
      };
    });

    console.log(report);
    console.log("students",students);
    res.status(200).json({
      success: true,
      batch: currentBatch,
      totalStudents: students.length,
      placedStudents: report.filter(s => s.isPlaced).length,
      data: report
    });
  } catch (err) {
    console.error("Error in finding student report:", err);
    res.status(500).json({
      success: false,
      message: "Failed to generate annual report",
      error: err.message
    });
  }
};



