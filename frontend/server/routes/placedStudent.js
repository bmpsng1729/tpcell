const express=require("express");
const router=express.Router();
const {markPlaced,showAllPlacedStudentBatchwise,topPackageStudents}=require("../controllers/placedStudent");

// yaha par is admin wala authorization lagana hai baad mein
router.post("/markplaced",markPlaced);
router.get("/showallstudentbatchwise",showAllPlacedStudentBatchwise);
router.get("/toppackagestudents",topPackageStudents);

module.exports=router;