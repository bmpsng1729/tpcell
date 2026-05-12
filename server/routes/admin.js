const {sendBulkEmail,getStudentsForEmail}=require("../controllers/admin");
const express=require("express");
const router=express.Router();

router.post("/send-email", sendBulkEmail);
router.get("/students", getStudentsForEmail)
// router.post("/registercompany",registerCompany);
module.exports=router;