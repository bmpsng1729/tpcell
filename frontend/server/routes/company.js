const {registerCompany,showAllVisitedCompany}=require("../controllers/company");
const express=require("express");
const router=express.Router();
const {auth,isAdmin} =require("../middlewares/auth");


// baad me ye wala routes likna hai av ke liye bina authorization ke likha hun

router.post("/registercompany", auth,isAdmin,registerCompany);
router.get("/showallcompanies",showAllVisitedCompany);
// router.post("/registercompany",registerCompany);
module.exports=router;

