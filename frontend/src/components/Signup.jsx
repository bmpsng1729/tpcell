import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
    accountType: "student",
    cgpa: "",
    isplaced: false,
    batch: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/api/v1/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
       toast.error(data.message || "Something went wrong");
      }
      else{
         toast.success("signup successful")
      }
    
     
    } catch (error) {
      console.log(error);
      console.error(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 via-purple-500 to-indigo-600 p-6 w-full overflow-hidden">
      <div className="w-full max-w-lg bg-white p-10 rounded-2xl shadow-2xl transform transition duration-500 hover:scale-105 overflow-hidden">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">Create an Account</h2>
        
        <form className="space-y-4" onSubmit={handleSubmit} >
          <div>
            <label className="block text-gray-600 font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-100"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="block text-gray-600 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-100"
              placeholder="Enter your email"
            />
          </div>
          
          <div>
            <label className="block text-gray-600 font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-100"
              placeholder="Enter your password"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-600 font-medium">CGPA</label>
              <input
                type="number"
                name="cgpa"
                value={formData.cgpa}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-100"
                placeholder="Enter CGPA"
              />
            </div>
            
            <div>
              <label className="block text-gray-600 font-medium">Batch</label>
              <input
                type="number"
                name="batch"
                value={formData.batch}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-100"
                placeholder="Enter batch year"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              name="isplaced"
              checked={formData.isplaced}
              onChange={handleChange}
              className="w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
            />
            <label className="text-gray-600 font-medium">Placed</label>
          </div>
          
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 text-white py-3 rounded-lg font-semibold text-lg hover:opacity-90 transition shadow-md"
          >
            Sign Up
          </button>
        </form>
        
        <p className="text-center text-gray-600 mt-6">
          Already have an account? <Link to="/signin" className="text-purple-600 font-semibold hover:underline">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
