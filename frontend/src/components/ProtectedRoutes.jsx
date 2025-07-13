import React, { useEffect } from 'react';
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ allowedRoles }) => {
 const isLoggedin = useSelector((state) => state.auth.isLoggedin);
 const userData =useSelector((state)=>state.auth.userData);
 console.log("user data",userData);

  if (!isLoggedin || !userData) {
    return <Navigate to="/signin" replace />;
  }

  if (!allowedRoles.includes(userData.accountType)) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;

