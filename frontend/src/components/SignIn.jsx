import React, { useState } from "react";
import { Link } from "react-router-dom";

import { toast } from "react-toastify";
const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
      toast.error(data.message || "something went wrong! try again");
      }

  
        else{
          toast.success('🦄 logged in successfully')
        }
  
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 via-purple-500 to-indigo-600 p-6 w-full overflow-hidden">
      <div className="w-full max-w-lg bg-white p-10 rounded-2xl shadow-2xl transform transition duration-500 hover:scale-105 overflow-hidden">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">Sign In</h2>
        
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-600 font-medium">College Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-100"
              placeholder="Enter your college email"
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
          
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 text-white py-3 rounded-lg font-semibold text-lg hover:opacity-90 transition shadow-md"
          >
            Sign In
          </button>
        </form>
        
        <p className="text-center text-gray-600 mt-6">
          Don't have an account? <Link to="/signup" className="text-purple-600 font-semibold hover:underline">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
