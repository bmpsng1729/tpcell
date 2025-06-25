
const Profile = require("../models/Profile")

const user = require("../models/User");

// steps
//  take data from the request Body 
//  do validation ,if user is student then check for cgpa  and Batch
//  and then send the data to the database

exports.updateProfile = async (req, res) => {
   try {
      // email av ke liye send kar rha hun ,baad me token se nikalna hai
      const email = req.user.email;
      const { gender, dob, about, contactNumber, LinkdeinId, personalEmail, address, city, state, pincode, cgpa, degree, batch } = req.body;
      // console.log("these are req.body values->", dob, about, contactNumber, LinkdeinId);

      // now find the email / user id from the token

      // find user from the db
      // console.log("email", email);
      // console.log("user",user);
      const users = await user.findOne({ email: email });
      // validate user

      if (!users) {
         return res.status(500).json({
            message: "invalid authorization or server error",
            Success: false,

         });
      }
 // isko baad me add karna hai
      // if (users.accountType === "student") {
      //    if (!cgpa) {
      //       return res.status(400).json({
      //          sucess: false,
      //          message: " Dear Student! entering cgpa for student is mandatory please enter cgpa"
      //       });
      //    }
      //    if (!batch) {
      //       return res.status(400).json({
      //          sucess: false,
      //          message: " Dear Student! entering batch for student is mandatory please enter batch"
      //       });
      //    }
      // }
      // baad mein hm resume and profile photo v upload karenge
      // now create profile and upadate the user
      const details=users.additionalDetails;
      // console.log("additionalDetails->", details);
      const updatedProfile = await Profile.updateOne({ _id: details },
         {
            $set: {
               gender: gender,
               dob: dob,
               about: about,
               contactNumber: contactNumber,
               LinkdeinId: LinkdeinId,

               personalEmail: personalEmail,
               address: address,
               city: city,
               state: state,
               pincode: pincode,
               cgpa: cgpa,
               degree: degree,
               batch: batch,

            }
         }
      );

      if (updatedProfile) {
         // console.log("profile created successfully,this is return value->", updatedProfile);
         return res.status(200).json({
            message: "profile created successfully",
            success: true,
            data: updatedProfile
         });
      }

      else {
         return res.status(400).json({
            message: "profile not created",
            success: false,

         })
      }



   }
   catch (error) {
      console.log("profile controller error", error);
      return res.status(400).json({
         message: "profile not created",
         success: false,
      })
   }
}
