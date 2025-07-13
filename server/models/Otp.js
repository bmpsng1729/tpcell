 const mongoose=require("mongoose");
 const emailTemplate=require("../mail/emailVerificatioTemplate");
 const mailSender=require("../utils/mailSender");
 const otpSchema=new mongoose.Schema(
    {
        email:{
           type:String,
           required:true, 
        },
        otp:{
            type:String,
            required:true,
        },
            createdAt:{
                type:Date,
                default:Date.now,
             expires:5*60*1000,

            }
    

    });
    // for sending the otp we have to send the mail here that is ater creating schema and before exporting the model

    // define a fucntion to send email
       
    async function sendVerEmail(email,otp){
        // create a transporter to send email
        // define the email options
        // send the emai

        try{
        const mailResponse=await mailSender(
            email,
            "verification email",emailTemplate(otp)
        );

         console.log("EMAIL  sent sucessfully:",mailResponse);
        } catch(err){
             console.log("error in sending the email");
             throw err;
        }
    }

    // define a pre save hook to send the email 
     otpSchema.pre("save",async function(next)
    {
        console.log("new document is created");
        // only send the  when new document is created
        if(this.isNew){
            await sendVerEmail(this.email,this.otp);
        }
        next();
    });

    module.exports=mongoose.model("otp",otpSchema);