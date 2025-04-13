const express=require("express");
const router=express.Router();
const {sendOaLink}=require("../controllers/student")

router.get("/sendoalink",sendOaLink);
module.exports=router;