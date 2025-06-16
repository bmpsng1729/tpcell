import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
// import './App.css'
import Signup from './components/Signup';
import Navbar from './components/Navbar'
import Home from './components/Home'
import { FaRegMoneyBill1 } from 'react-icons/fa6'

import Bronchure from './components/Bronchure';
import Dirmessage from './components/DirMessage';
import RegistrationForm from './components/pages/RegistrationForm';
import CompanyDetailsCard from './components/pages/student/CompanyDetailsCard';
import AppliedCompanies from './components/pages/student/AppliedCompanies';
import Results from './components/pages/student/Results';
import UpcomingCompanies from './components/pages/student/UpcomingCompanies';
import MarkedDate from './components/pages/student/MarkedDate';
import StudentDashboard from './components/pages/StudentDashboard';
import SignUp from './components/Signup';
import SignIn from './components/SignIn';

// student dashboard

// admin dashboard
import ProSidebar from './components/dashboard/admin/ProSidebar';
import Students from './components/pages/admin/Students';
import Reports from './components/pages/admin/Reports';
import Drives from './components/pages/admin/Drives';
import Companies from './components/pages/admin/Companies';
import Dashboard from './components/dashboard/admin/Dashboard';
import Layout from './components/pages/admin/Layout'
//import ProtectedRoute from './components/utils/ProtectedRoutes';
//import ProtectedRoutes from './components/utils/ProtectedRoutes';
function App() {
 
  // make sure here one token validation code is written and verify the toke

  return (
    <>

     <Router>
  <Navbar />

  <Routes>
    {/* Public routes */}
    <Route path="/" element={<Home />} />
    <Route path="/bronchure" element={<Bronchure />} />
    <Route path="/dirmessage" element={<Dirmessage />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/signin" element={<SignIn />} />

    {/* Protected admin routes */}
    <Route element={<Outlet />}>
      <Route path="/admin/dashboard" element={<Dashboard />} />
      <Route path="/admin/students" element={<Students />} />
      <Route path="/admin/reports" element={<Reports />} />
      <Route path="/admin/drives" element={<Drives />} />
      <Route path="/admin/companies" element={<Companies />} />
    </Route>

    {/* Student routes */}
    <Route path="/registrationform" element={<RegistrationForm />} />
    <Route path="/companydetailscard" element={<CompanyDetailsCard />} />
    <Route path="/appliedcompanies" element={<AppliedCompanies />} />
    <Route path="/results" element={<Results />} />
    <Route path="/upcomingcompanies" element={<UpcomingCompanies />} />
    <Route path="/markeddate" element={<MarkedDate />} />
    <Route path="/studentdashboard" element={<StudentDashboard />} />
  </Routes>
</Router>


    </>
  )
}

export default App
