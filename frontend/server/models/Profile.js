const mongoose=require("mongoose");
const profileSchema= new mongoose.Schema({
    gender:{
        type:String,
      
    },
    dob:{
        type:Date,
        
    },
    about:{
        type:String
    },
    contactNumber:{
        type:Number,
       
    },
    LinkdeinId:{
        type:String,
    },
    personalEmail:{
        type:String,
        required :true,
    },
    address:{
        type:String,
        required  : true,
    },
    city:{
        type:String,
        required  : true,
    },
    state:{
        type:String,
        required  : true,
    },
    pincode:{
        type:Number,
        required  : true,
    },
    RegNo:{
        type:Number, 
        required: true,
    },
     degree:{
        type:String,
        enum: ['B.Tech', 'M.Tech', 'MBA', 'BBA', 'B.Com', 'M.Com', 'B.Sc', 'M.Sc', 'B.A', 'M.A', 'B.C.A', 'M.C.A', 'B.E', 'M.E', 'B.Arch', 'M.Arch', 'B.Pharm', 'M.Pharm', 'BDS', 'MDS', 'MBBS', 'MD', 'MS', 'BAMS', 'BHMS', 'BUMS', 'BPT', 'MPT', 'B.Sc Nursing', 'M.Sc Nursing', 'BBA LLB', 'LLB', 'LLM', 'Ph.D', 'Others'],
        required:true,
        default:"B.Tech",

     },
     batch:{
        type:Number,
        required:true,
        // default:Date.now().getFullYear()-4,
        default:2021,
     },
     cgpa:{
        type:Number,
        required:true,
        default:0,
     }     
    
});
module.exports=mongoose.model("profile",profileSchema);