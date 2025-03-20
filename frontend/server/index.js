const express=require('express');
const app=express();
const db=require("./config/database");   
require('dotenv').config();
const port=process.env.PORT || 4000;
const userRoutes=require("./routes/User")
const {connectCloudinary}=require("./config/cloudinary");
const cors=require("cors");
const cookieParser=require("cookie-parser");





// db connection
db.connect();   
// middleware
app.use(express.json());
//app.use(cookieParser());

app.use(cors({
    origin:"http://localhost:3000",
    credentials:true,
}));

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
app.use("/api/v1/auth",userRoutes)