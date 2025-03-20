import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const SignIn = () => {
// inko baad me use karna hai
  const {token}=useSelector(state=>state.auth);
 const {user}=useSelector(state=>state.profile);
  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Sign In</h2>
        
        <form className="space-y-4">
          <div>
            <label className="block text-gray-600">College Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your college email"
            />
          </div>
          
          <div>
            <label className="block text-gray-600">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Sign In
          </button>
        </form>
        
        <p className="text-center text-gray-600 mt-4">
          Don't have an account? 
          <Link to="/signup">signup</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
