const bcrypt=require("bcrypt");
const User=require("../models/User");
const mongoose=require("mongoose");
 const mailSender = require("../utils/mailSender");
 const OTP=require("../models/Otp");
 const Profile=require("../models/Profile");
const jwt=require("jsonwebtoken");
 const otpTemplate=require("../mail/emailVerificatioTemplate");
const { findOne } = require("../models/department");
const department=require("../models/department");



 exports.singup=async (req,res)=>{
     try{
        const {email,password,cgpa,name,accountType,branch}=req.body;
               
              const batch = new Date().getFullYear()-4;
          

        if(!email || !password || !name || !accountType){
            return res.status(400).json(
                {
                    message:"please fill the all the required fields and try again",
                    sucess:false
                   
                }
            );
            
        }
        // special for student user
        if(accountType==="student"){
          if( !cgpa || !batch || !branch){
            // console.log(cgpa)
            //  console.log(batch)
            //   console.log(branch)
            
            return res.status(400).json(
              {
                  message:"Dear student! please fill the all the required fields and try again",
                  sucess:false
                 
              }
          );
          
          }

      }

        // return if email already exists
        const existingUser= await User.findOne(
            {
                email
            }
        );
        if(existingUser){
            return res.status(400).json(
                {
                    sucess:false,
                    message:"user already exists",
                    
                }
            )
        }
        
        // check if email if of type nitjsr.ac.in
         const emailArray=email.split("@");
         const domain=emailArray[1];
         if(domain!=="nitjsr.ac.in"){
            return res.status(400).json(
                {
                    sucess:false,
                    message:"please signup with college email",
                   
                }
            )
         }
// include this section after the frontend completed

    // // Find the most recent OTP for the email
    // const response = await OTP.find({ email }).sort({ createdAt: -1 }).limit(1)
    // console.log(response)
    // if (response.length === 0) {
    //   // OTP not found for the email
    //   return res.status(400).json({
    //     success: false,
    //     message: "The OTP is not valid",
    //   })
    // } else if (otp !== response[0].otp) {
    //   // Invalid OTP
    //   return res.status(400).json({
    //     success: false,
    //     message: "The OTP is not valid",
    //   })
    // }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10)

        // Create the Additional Profile For User
        let profileDetails = await Profile.create({
          gender: null,
          dob: null,  // Ensure this matches the schema field (dateOfBirth -> dob)
          about: null,
          contactNumber: null,
          LinkdeinId: "https://in.linkedin.com/",
          personalEmail: "example@email.com",  // Required field
          address: "123, Some Street, Some City",  // Required field
          city: "Some City",  // Required field
          state: "Some State",  // Required field
          pincode: 123456,  // Required field
          RegNo: 12345678,  // Required field
          degree: "B.Tech",  // Required field with default value
          batch: 2021,  // Required field with default value
          cgpa: 0  // Required field with default value
      });
      
      //  converting into the type fo
      //profileDetails= new mongoose.Types.ObjectId(profileDetails);

      // now create entry into the database
      const user=await User.create(
        {
            email,
            password:hashedPassword,
            cgpa,
            name,
            accountType:accountType,
            batch,  
            additionalDetails:profileDetails,
            image:"",
            branch:branch
          
             
        }

        // store the id of the student in the specific branch
      
      );
      if(accountType==="student"){
       const branchFromDb=await department.findOneAndUpdate({deptName:branch},
        {
          $push:{students:user._id},
        },
        {
          new:true,
        }
      ); 
      }
      

      // now if the user is student then push him into the department of the student
      user.password=undefined;
       user._id=undefined;
       user.additionalDetails=undefined;
       user.token=undefined;
       user.__v=undefined;
       user.resetPasswordExpires=undefined;
      return res.status(200).json(
        {
            sucess:true,
            user,
            message:"user is registered sucessfuylly",
        
        }
      )
        


     }
     catch(err){
        console.log("ERROR in signup");
        console.log(err);
     }
 }

 exports.signin=async(req,res)=>{
    try{
               // take email and password from body
               const {email,password}=req.body;
   // validate
               if(!email || !password){
                return res.status(401).json(
                    {
                       sucess:false,
                       message:"please fill email and password carefully",
                    }
                )
               }
               // check user of the email is exist or not
               const user=await User.findOne({email:email});
              //  console.log("printing the data come from the db",user);
               // if user not exist tell to register
               if(!user){
                    return res.status(401).json(
                        {
                            sucess:false,
                            message:"Dear user!,you have not registered,please register and login",
                        }
                    )
               }

                 // match the password
                 if (await bcrypt.compare(password, user.password)) {
                    const token = jwt.sign(
                      { email: user.email, id: user._id,role: user.role },
                      process.env.JWT_SECRET,
                      {
                        expiresIn: "24h",
                      }
                    )
              
                    // Save token to user document in database
                    user.token = token
                    user.password = undefined
                    // Set cookie for token and return success response
                    const options = {
                      expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                      httpOnly: true,
                    }

                    // send email of sucessfully logged in
                    //  const mailRes=mailSender(email,"about login to the tpcell","congratulation ,you are sucessfully Logged in");

                    //  console.log("mailresponse:,mail sent sucessfully",mailRes);
                     
                    res.cookie("token", token, options).status(200).json({
                      success: true,
                      token,
                      user,
                      message: `User Login Success`,
                    })
                  } else {
                    return res.status(401).json({
                      success: false,
                      message: `Password is incorrect`,
                    })
                  }

               // create the jwt token
               // store the token in the db
    }catch(err){
        console.log("error in signin");
        console.log(err);
    }
 }
