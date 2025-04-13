const mongoose=require("mongoose");

const departmentSchema = new mongoose.Schema({
    deptName: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    facultyInchargeEmail:{
        type: String,
        required: true,
        unique: true,
        trim: true
    },
   
    facultyInChargeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // Assuming User schema has faculty members
    },
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User" // Assuming User schema has students
    }],
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports=mongoose.model("department",departmentSchema)