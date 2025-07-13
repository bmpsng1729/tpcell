const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const User = require("../models/User");

exports.auth = async (req, res, next) => {
    try {
        // extract jwt token from the body/header(we will add in header)
        console.log(req.cookies);
        const token = req.cookies.token || req.body.token || req.header("Authorization").replace("Bearer", "");
        console.log("token", token);
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "error in token verification,token missing!",
            });

        }
        // verify jwt token
       
            const decode = await jwt.verify(token, process.env.JWT_SECRET);
            console.log("this is the return of jwt.verify,which will be used for further verification", decode);

            // put decoded into the request so that i can use further
            // 
            req.user = decode;

    }
      

    
    catch (err) {
        console.log("error in auth");
        return res.status(400).json({
            sucess: false,
            message: "there is a problem in token verification",

        });
    }
}

exports.isStudent = async (req, res, next) => {
    try {
        // find the email which you have inserted during the authorization

        const email = req.user.email;
        const userDetails = await User.findOne({
            email: email
        });
        // validate the data
        if (userDetails.accountType !== "student") {
            return res.status(400).json({
                sucess: false,
                message: "selected account type is not student,select your account type carefully"
            });
            // now student is verify
            next();
        }
    }
    catch (err) {
        return res.status(400).json({
            message: "there is a problem in student verification,invalid credential",
            success: false
        })
    }
}

exports.isAdmin = async (req, res, next) => {
    try {
        // find the email which you have inserted during the authorization

        const email = req.user.email;
        const userDetails = await User.findOne({
            email: email
        });
        // validate the data
        if (userDetails.accountType !== "admin") {
            return res.status(400).json({
                sucess: false,
                message: "this is protected route for admin,select your account type carefully"
            });
            // now student is verify

        }
        next();
    }
    catch (err) {
        return res.status(400).json({
            message: "there is a problem in admin verification,invalid credential",
            success: false
        })
    }
};

exports.isRecruiter = async (req, res, next) => {
    try {
        // find the email which you have inserted during the authorization

        const email = req.user.email;
        const userDetails = await User.findOne({
            email: email
        });
        // validate the data
        if (userDetails.accountType !== "recruiter") {
            return res.status(400).json({
                sucess: false,
                message: "this is protected route for rectuiter,select your account type carefully"
            });
            // now student is verify
            next();
        }
    }
    catch (err) {
        return res.status(400).json({
            message: "there is a problem in recruiter verification,invalid credential",
            success: false
        })
    }
};
