const express=require("express");
const router=express.Router();
const {markPlaced,showAllPlacedStudentBatchwise,topPackageStudents,totalPlacedStudent,averagePackageYearwise,pieChartViewData}=require("../controllers/placedStudent");
const {totalStudent,cgpaBasedStudent}=require("../controllers/student");

const {auth,isAdmin} =require("../middlewares/auth");

// yaha par is admin wala authorization lagana hai baad mein
                                //  below add auth,isadmin
router.post("/markplaced",markPlaced);
router.get("/showallstudentbatchwise",showAllPlacedStudentBatchwise);
router.get("/toppackagestudents",topPackageStudents);
router.get("/totalplacedstudent",totalPlacedStudent);
        // below add isAdmin
router.get("/totalstudent",totalStudent);
router.get("/cgpabasedstudent",cgpaBasedStudent);
router.get("/averagepackageyearwise",averagePackageYearwise);
router.get("/piechartviewdata",pieChartViewData);

module.exports=router;