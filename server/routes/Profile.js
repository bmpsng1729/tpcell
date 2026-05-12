const express=require("express");
const router=express.Router();
const {auth} =require("../middlewares/auth")

const {updateProfile}=require("../controllers/Profile");
// yaha patch nii kaam kar rha hai,means value update nii ho rha hai,
// ekbaar 
           // below add auth
router.patch("/updateProfile",updateProfile);
module.exports=router;