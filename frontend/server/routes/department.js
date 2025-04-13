const express=require("express");
const router=express.Router();
const{createDepartment,averagePackageBranchwise,placementPercentageBranchwise}=require("../controllers/department");

router.post("/createdepartment",createDepartment);
router.get("/averagepackagebranchwise",averagePackageBranchwise);
router.get("/placementpercentagebranchwise",placementPercentageBranchwise);

module.exports=router