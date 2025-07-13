const express=require("express");
const router=express.Router();
const {auth} =require("../middlewares/auth")

const {updateProfile}=require("../controllers/Profile");
// yaha patch nii kaam kar rha hai,means value update nii ho rha hai,
// ekbaar 
router.patch("/updateProfile",auth,updateProfile);
module.exports=router;