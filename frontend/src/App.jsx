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

function App() {


  return (
    <>  

     <Router>
      <Navbar />
      <Routes>
        <Route  path="/" element={<Home />}></Route>
        <Route  path="/bronchure" element={<Bronchure />}></Route>
        <Route path="/dirmessage"element={<Dirmessage/>}></Route>
      </Routes>
 
    </Router>

    </>
  )
}

export default App
