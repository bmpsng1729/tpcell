const express=require("express");
const router=express.Router();
const {markPlaced,showAllPlacedStudentBatchwise}=require("../controllers/placedStudent");

// yaha par is admin wala authorization lagana hai baad mein
router.post("/markplaced",markPlaced);
router.get("/showallstudentbatchwise",showAllPlacedStudentBatchwise);

module.exports=router;