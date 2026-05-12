// controllers/adminEmailController.js
const mailSender = require("../utils/mailSender");  // <--- adjust path if needed
const User=require("../models/User");
// POST /api/v1/admin/send-email
const sendBulkEmail = async (req, res) => {
  try {
    const { subject, body, recipients } = req.body;

    if (!subject || !body || !recipients) {
      return res.status(400).json({
        success: false,
        message: "subject, body and recipients are required",
      });
    }

    // Allow both array or single string
    const emailList = Array.isArray(recipients) ? recipients : [recipients];

    if (emailList.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No recipients provided",
      });
    }

    // Send emails (in parallel)
    await Promise.all(
      emailList.map((email) => mailSender(email, subject, body))
    );

    return res.status(200).json({
      success: true,
      message: `Email sent to ${emailList.length} recipient(s)`,
    });
  } catch (err) {
    console.error("Error in sendBulkEmail:", err);
    return res.status(500).json({
      success: false,
      message: "Error sending email",
      error: err.message,
    });
  }
};

// GET /api/v1/admin/students?branch=CSE&minCgpa=7
const getStudentsForEmail = async (req, res) => {
  try {
    const { branch = "ALL", minCgpa } = req.query;

    // Base filter: only students
    const filter = { accountType: "student" };

    // Optional branch filter (skip if "ALL")
    if (branch !== "ALL") {
      filter.branch = branch;
    }

    // Optional CGPA filter
    if (minCgpa) {
      filter.cgpa = { $gte: Number(minCgpa) };
    }

    // Fetch only required fields (never send password, tokens, etc.)
    const students = await User.find(filter)
      .select("name email branch cgpa") // _id is included by default
      .sort({ name: 1 });

    return res.status(200).json({
      success: true,
      students,
    });
  } catch (error) {
    console.error("Error fetching students for email:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch students.",
    });
  }
};




module.exports = { sendBulkEmail ,getStudentsForEmail};
