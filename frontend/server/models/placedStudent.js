
const mongoose=require("mongoose");

const placedSchema=new mongoose.Schema({
    id:{
        type:mongoose.Schema.Types.ObjectId,
        Ref:"User",
        required:true
    },
    company:{
         type:String,
         required:true
    },
    description:{
        type:String,
    },    // eg-software developer,core
    role:{
        type:String
    },  // eg-6 month+ppo , fde
 placementType:{
    type:String,
 } ,
 ctc:{
    type:Number,
    required:true
 }
});
module.exports=mongoose.model("placedStudent",placedSchema)