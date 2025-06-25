const {registerCompany,showAllVisitedCompanyYearwise,topRecruitingCompanies}=require("../controllers/company");
const express=require("express");
const router=express.Router();
const {auth,isAdmin} =require("../middlewares/auth");


// baad me ye wala routes likna hai av ke liye bina authorization ke likha hun
// !!!!! add authorization at the end
router.post("/registercompany",auth,registerCompany);
router.get("/showallvisitedcompanyyearwise",showAllVisitedCompanyYearwise);
router.get("/topcompanies",topRecruitingCompanies);

// router.post("/registercompany",registerCompany);
module.exports=router;

