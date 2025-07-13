import React from "react";
import nitlogo from "./images/nit logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { IoMdLogOut } from "react-icons/io";
import {logout} from "../slices/authSlice"


const Navbar = () => {
   const dispatch=useDispatch();
  const userdata = useSelector((state) => state.auth.userData);
  const isLoggedin = useSelector((state) => state.auth.isLoggedin);
  // console.log(userdata.accountType);
  const navigate = useNavigate();
  // navigate to 
  const handleProfileClick = () => {
    console.log("logout is called");
    dispatch(logout());
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
            {/* TODO::conditional rendering */}
            {isLoggedin &&
              <button
                className="flex items-center justify-center text-white bg-red-500 hover:bg-red-600 rounded-full p-2 transition duration-200 shadow-md cursor-pointer"
                onClick={handleProfileClick}
              >
                <IoMdLogOut className="w-10 h-5" />
              </button>
            }

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
