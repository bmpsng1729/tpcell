 const user=require("../models/User");
exports.TotalStudent=async(req,res)=>{
    //find the number of student in the placed student
     
    try{
         const students=await user.find({accountType:"student"})  
         const count=students.length    
         if(!count){
            console.log("there is no any student found in db");
            return res.status(400).json({
                message:"internal server error or no register student found",
                success:false,
            });
         }
         return res.status(200).json({
            message:"All student fetching success",
            success:true,
            count:count,
         });
    }    

    catch(err){
        console.log("there is an error in finding all placed student",err);
        return res.status(200).json({
            message:"There is server error in finding all placed student",
            success:false
        })
    }
    
}