const express=require("express");
const router=express.Router();
const {markPlaced,showAllPlacedStudentBatchwise,topPackageStudents,totalPlacedStudent,averagePackageYearwise,pieChartViewData}=require("../controllers/placedStudent");
const {totalStudent,cgpaBasedStudent}=require("../controllers/student");

const {auth,isAdmin} =require("../middlewares/auth");

// yaha par is admin wala authorization lagana hai baad mein
router.post("/markplaced",auth,isAdmin,markPlaced);
router.get("/showallstudentbatchwise",showAllPlacedStudentBatchwise);
router.get("/toppackagestudents",topPackageStudents);
router.get("/totalplacedstudent",totalPlacedStudent);
router.get("/totalstudent",isAdmin,totalStudent);
router.get("/cgpabasedstudent",cgpaBasedStudent);
router.get("/averagepackageyearwise",averagePackageYearwise);
router.get("/piechartviewdata",pieChartViewData);

module.exports=router;