 const mongoose=require("mongoose");
 const userSchema=new mongoose.Schema(
    {
      name:{
        type:String,
        required:true,
      },
      email:{
        type:String,
        required:true,
      },
      password:{
        type:String,
        required:true
      },
      accountType:{
        type:String,
        required:true,
        enum:["admin","student","coordinator","recruiter"],
      },
      cgpa:{
        type:Number,
      },
      resume:{
        type:String
    },
    isplaced:{
        type:Boolean,
    default:false
    },
    batch:{
        type:Number,
        default:2022
    },
    branch:{
      type:String,
      default:"CSE",
      enum:["CSE","ECE","CE","ME","MME","PIE","ECM","EE"]  
    },
    token:{
        type:String, 
        default:0
    },
    resetPasswordExpires:{
        type:Date,
        default:0
    },                                         
    image:{
        type:String,

    },
    additionalDetails: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "Profile",
		},
    ctc:{
      
    }
 });
module.exports=mongoose.model("user",userSchema)