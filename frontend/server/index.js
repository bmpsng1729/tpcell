const express=require('express');
const app=express();
const db=require("./config/database");   
require('dotenv').config();
const port=process.env.PORT || 4000;

const userRoutes=require("./routes/User")
const profileRoutes=require("./routes/Profile");
const placedStudentsRoutes=require("./routes/placedStudent")

const {connectCloudinary}=require("./config/cloudinary");
const cors=require("cors");
const cookieParser=require("cookie-parser");

const companyRoutes= require("./routes/company");






// db connection
db.connect();   
// middleware

const corsOptions = {
    origin:"http://localhost:5173",
    credentials:true,
    optionSuccessStatus:200,
   methods:"GET,HEAD,PUT,PATCH,POST,DELETE",
}
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());


// cloudinary connection
connectCloudinary();

// default route
app.get("/",(req,res)=>{
    return res.json({
        message:"server is running on port 4000"
    })
});
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});

// all routes
app.use("/api/v1/auth",userRoutes);
app.use("/api/v1/profile",profileRoutes);
app.use("/api/v1/company",companyRoutes);
app.use("/api/v1/admin",placedStudentsRoutes);