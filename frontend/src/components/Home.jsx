import frontimage from "./images/frontimage.jpg";
import { PiStudentFill } from "react-icons/pi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { PiShoppingBagOpen } from "react-icons/pi";
import Bronchure from "./Bronchure";
import Dirmessage from "./DirMessage";
import RecruitProcess from "./RecruitProcess";
import { Link } from "react-router-dom";


// Home
// import Footer from "./layout/Footer"

// student dashboard

import Contact from "./Contact";
import StudentDashboard from "./pages/StudentDashboard";
import AllCompaniesDetail from "./pages/admin/AllCompaniesDetail";
import MarkPlaced from "./pages/admin/MarkPlaced";
// import BranchWisePlaced from "./pages/admin/BranchWisePlaced";
import TopPackageStudent from "./pages/admin/TopPackageStudent";
import TopPlacedHomePage from "./ui/TopPlacedHomePage";
import ContactTnPCell from "./ContactTnPCell";
import { useSelector } from "react-redux";

const Home = () => {
  const isLoggedin = useSelector((state) => state.auth.isLoggedin);
  const isRegistered = useSelector((state) => state.auth.isRegistered);
  // console.log("token from home",token)
  return (
    <>
      {/* Background Image Section */}
      <div
        style={{ backgroundImage: `url(${frontimage})` }}
        className="bg-cover bg-center bg-no-repeat h-[70vh] flex items-center justify-center relative pt-20 "  // Added padding-top here
      >
        {/* Optional overlay for better text visibility */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Centered Left and Right Section */}
        <div className="absolute flex w-full px-6 sm:px-12 md:px-24 justify-between items-center z-10 text-white gap-4">
          {/* Left Section with Gradient Background */}
          <div className="w-full md:w-1/2 text-center md:text-left mb-4 md:mb-0 p-6 bg-gradient-to-r from-black/20 to-black/10 rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300 mt-20"> {/* Added mt-20 here */}
            <h1 className="text-3xl md:text-4xl font-semibold mb-4 p-2">
              Welcome to the placement website of NIT Jamshedpur
            </h1>
            <p className="text-lg md:text-xl p-2">
              This college ranks among the top 5 most placed colleges in India. Our graduates combine rigorous thinking, hard work, and strong fundamentals. They are nurtured by the institute to excel and make an impact in their respective fields.
            </p>
          </div>

          {/* Right Section with Gradient Background */}
          <div className="w-full md:w-1/2 flex flex-col items-center gap-4 p-6 rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300">
            {/* // do conditional rendering of this page */}
            <div className="flex flex-col items-center justify-center gap-6">
              {
                !isRegistered && (
                  <Link to="/signup" className="w-48">
                    <button className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-600 transition-transform transform hover:scale-105 duration-300 shadow-md">
                      <PiStudentFill className="text-2xl" />
                      <span className="text-lg font-semibold">Sign Up</span>
                    </button>
                  </Link>
                )
              }
              {
                !isLoggedin && (
                  <Link to="/signin" className="w-48">
                    <button className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-600 transition-transform transform hover:scale-105 duration-300 shadow-md">
                      <PiStudentFill className="text-2xl" />
                      <span className="text-lg font-semibold">Log In</span>
                    </button>
                  </Link>
                )
              }



            </div>



          </div>
        </div>
      </div>

      <Bronchure />
      {/* <MarkPlaced /> */}
      {/* <AllCompaniesDetail /> */}
      {/* <BranchWisePlaced /> */}
      {/* <TopPackageStudent /> */}


      {/* <About /> */}
      <Dirmessage />

      <RecruitProcess />
      {/* <Footer /> */}
      <TopPlacedHomePage />
      <ContactTnPCell />
      <Contact />
    </>
  );
};

export default Home;
