import React from "react";
import nitlogo from "./images/nit logo.png";
import { Link, useNavigate } from "react-router-dom";
import ProfileButton from "./pages/ProfileButton";
import { useSelector } from "react-redux";


const Navbar = () => {
  const userdata=useSelector((state)=>state.auth.userData);
 // console.log(userdata.accountType);
  const navigate=useNavigate();
// navigate to 
 const handleProfileClick=()=>{
     if(userdata.accountType.accountType==='admin'){
      navigate("/admin/dashboard");
     }
     else{
      navigate("/studentdashboard");
     }
  }

  const token = useSelector((state) => state.auth.token);
  return (
    <nav className="bg-blue-950 text-white shadow-lg fixed top-0 w-full z-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14 items-center">
          {/* Left Section */}
          <div className="flex items-center gap-2">
            <img src={nitlogo} alt="NIT Logo" className="h-12 w-12 rounded-xl" />
            <span className="text-lg md:text-xl font-semibold">
              PLACEMENT CELL, NIT JAMSHEDPUR 
            </span>
          </div>

          {/* Desktop Links */}
          <div className="flex items-center space-x-6 text-base font-medium">
            <Link to="/" className="hover:text-yellow-400 transition">
              Home
            </Link>
            <Link to="/bronchure" className="hover:text-yellow-400 transition">
              Why Recruit
            </Link>
            <Link to="/dirmessage" className="hover:text-yellow-400 transition">
              Director's Message
            </Link>
            <Link to="/contact" className="hover:text-yellow-400 transition">
              Contact Us
            </Link>

            {/* Add profile button on right */}
            {
              token && <button className="bg-red-500 cursor-pointer"  onClick={handleProfileClick}>
                <ProfileButton />
              </button> 
            }
            
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
