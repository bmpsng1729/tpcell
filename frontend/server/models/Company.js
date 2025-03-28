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
        },
        baseSalary:{
            type:Number,
            required:true,

        },
        ctc:{
            type:Number,
            required:true,
        }
    });
    module.exports=mongoose.model("company",companySchema);
