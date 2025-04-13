const mongoose=require("mongoose");
const placedStudent = require("./placedStudent");

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
            // default: () => new Date().getFullYear()
            default:2026
        },
        baseSalary:{
            type:Number,
            required:true,

        },
        ctc:{
            type:Number,
            required:true,
        },
        placedStudents:[{
             type: mongoose.Schema.Types.ObjectId,
               ref: "User",
        }]
    });
    module.exports=mongoose.model("company",companySchema);
