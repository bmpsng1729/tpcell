import React from "react";
import { Link } from "react-router-dom";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const StudentDashboard = () => {
  return (
    <div className="w-full h-screen flex bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/5 bg-white shadow-lg p-5 flex flex-col space-y-4">
        <Link to="/companydetailscard">
          <button className="py-3 w-full bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-center">Preparation</button>
        </Link>
        <Link to="/appliedcompanies">
          <button className="py-3 w-full bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-center">Applied Companies</button>
        </Link>
        <Link to="/upcomingcompanies">
          <button className="py-3 w-full bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-center">Upcoming Companies</button>
        </Link>
        <Link to="/results">
          <button className="py-3 w-full bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-center">Results</button>
        </Link>
        <Link to="/markeddate">
          <button className="py-3 w-full bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-center">Marked Dates</button>
        </Link>
      </div>
      
      {/* Main Content */}
      <div className="w-4/5 p-6">
        {/* Header */}
        <div className="flex justify-between items-center bg-white shadow-md p-4 rounded-lg">
          <h1 className="text-2xl font-bold">Welcome, Student</h1>
          <img 
            src="https://via.placeholder.com/50" 
            alt="User" 
            className="rounded-full border border-gray-300"
          />
        </div>
        
        {/* Body Content */}
        <div className="mt-6 p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Progress</h2>
          
          {/* OA Progress */}
          <p className="mb-1">Online Assessment</p>
          <div className="w-full bg-gray-200 rounded-full h-6 mb-4">
            <div className="bg-green-500 h-6 rounded-full text-white text-center" style={{ width: "80%" }}>
              80% Completed
            </div>
          </div>
          
          {/* Coding Interview Progress */}
          <p className="mb-1">Coding Interview</p>
          <div className="w-full bg-gray-200 rounded-full h-6 mb-4">
            <div className="bg-blue-500 h-6 rounded-full text-white text-center" style={{ width: "60%" }}>
              60% Completed
            </div>
          </div>
          
          {/* HR Round Progress */}
          <p className="mb-1">HR Interview</p>
          <div className="w-full bg-gray-200 rounded-full h-6">
            <div className="bg-yellow-500 h-6 rounded-full text-white text-center" style={{ width: "40%" }}>
              40% Completed
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;