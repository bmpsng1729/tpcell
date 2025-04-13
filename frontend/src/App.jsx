import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {
  BrowserRouter as Router,
  Routes,
  Route,
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
import Layout from './components/pages/admin/Layout';


function App() {


  return (
    <>  

     <Router>
      <Navbar />
      <Routes>
        <Route  path="/" element={<Home />}></Route>
        
        <Route  path="/bronchure" element={<Bronchure />}></Route>
        <Route path="/dirmessage"element={<Dirmessage/>}></Route>
        {/* <Route path="/recprocess"element={<RecruitProcess/>}></Route> */}
      
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/signin" element={<SignIn/>}></Route>
         

         {/* admin dashborard and pages */}
         <Route path="/admin" element={<Layout/>}/>
         <Route path="/admin/dashboard" element={<Dashboard/>}/>
         <Route path="/admin/students" element={<Students/>}/>
         <Route path="/admin/students" element={<Students/>}/>
         <Route path="/admin/reports" element={<Reports/>}/>
         <Route path="/admin/drives" element={<Drives/>}/>
         <Route path="/admin/companies" element={<Companies/>}/>
         

        <Route path="/registrationform" element={<RegistrationForm/>}></Route>

        <Route path="/companydetailscard" element={<CompanyDetailsCard/>}></Route>
        <Route path="/AppliedCompanies" element={<AppliedCompanies/>}></Route>
        <Route path="/results" element={<Results/>}></Route>
        <Route path='/upcomingcompanies' element={<UpcomingCompanies/>}></Route>
        <Route path='/markeddate' element={<MarkedDate/>}></Route>
        <Route path='/studentdashboard' element={<StudentDashboard/>}></Route>

       


      </Routes>
 
    </Router>

    </>
  )
}

export default App
