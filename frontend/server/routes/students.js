const express=require("express");
const router=express.Router();
const {sendOaLink,annualReport,totalStudent}=require("../controllers/student")

router.get("/sendoalink",sendOaLink);
router.get("/annualreport",annualReport)
router.get("/totalstudent",totalStudent)
module.exports=router;