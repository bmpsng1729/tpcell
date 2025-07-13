const mongoose=require("mongoose");

const companySchema=new mongoose.Schema(
    {
        companyName:{
            type:String,
            required:true,
        },
        email:{
            type:String
        },
        impTopic:{
            type:String,
            required:true,
        },
       
    }
);
module.exports=mongoose.model("companyReview",companySchema);