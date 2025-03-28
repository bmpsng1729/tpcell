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
