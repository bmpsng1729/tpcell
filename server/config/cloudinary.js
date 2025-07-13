const cloudinary=require("cloudinary").v2;

exports.connectCloudinary=()=>{
    try{
             cloudinary.config(
                {
                    cloud_name:process.env.CLOUD_NAME,
                    api_key:process.env.API_KEY,
                    api_secret:process.env.API_SECRET
                }
             )
             console.log("cloudinary connected sucessfully");
    }
    catch(err){
        console.log("found error in connecting with the cloudinary");
        console.log(err);
    }
}