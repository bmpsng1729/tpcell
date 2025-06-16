/// do it later

import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
 // make sure you add more secure things instead of validating token
const ProtectedRoute = () => {
  const user = useSelector((state) => state.auth.token);
  const location = useLocation();

  if (!user) {
    // return <Navigate to="/signin" state={{ from: location }} replace />;
    return <Outlet />; 
  }

  return <Outlet />;
};

export default ProtectedRoute;
