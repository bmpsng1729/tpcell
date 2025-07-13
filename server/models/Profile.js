const mongoose=require("mongoose");
const profileSchema= new mongoose.Schema({
    // adding email for testing purpose
    email:{
        type:String
    },
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
    },
     degree:{
        type:String,
    
        default:"B.Tech",

     },
     batch:{
        type:Number,

        // default:Date.now().getFullYear()-4,
        default:2021,
     },
     cgpa:{
        type:Number,
        default:0,
     }     
    
});
module.exports=mongoose.model("profile",profileSchema);