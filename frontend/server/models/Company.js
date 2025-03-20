const mongoose=require("mongoose");

const companySchema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        logo:{
            type:String,
            requiird:true,  
        },
        visitingSince:{
            type:Number,
            required:true,
            default:2022
        }
    });
    module.exports=mongoose.model("company",companySchema);
