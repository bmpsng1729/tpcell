const express=require("express");
const router=express.Router();
const{createDepartment,averagePackageBranchwise,placementPercentageBranchwise,lastFourBatchwiseCount,lastFourBatchAverage}=require("../controllers/department");
const {auth,isAdmin} =require("../middlewares/auth");

router.post("/createdepartment",createDepartment);
router.get("/averagepackagebranchwise",averagePackageBranchwise);
router.get("/placementpercentagebranchwise",placementPercentageBranchwise);
router.get("/lastfourbatchplacement",lastFourBatchwiseCount);
router.get("/lastfourbatchavgplaced",lastFourBatchAverage);

module.exports=router