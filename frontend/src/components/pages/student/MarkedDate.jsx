import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const MarkedDatesCalendar = () => {
  const events = [
    { title: "Tech Corp OA", date: "2025-04-10" },
    { title: "Innovate Ltd OA", date: "2025-04-15" },
    { title: "Dev Solutions OA", date: "2025-04-20" },
    { title: "CodeWorks OA", date: "2025-04-25" }
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center p-10 bg-gray-50 text-gray-800 overflow-hidden">
      <div className="w-full max-w-5xl bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-6 mt-4">Marked OA Dates</h1>
        <FullCalendar 
          plugins={[dayGridPlugin]} 
          initialView="dayGridMonth" 
          events={events} 
          height="auto"
        />
      </div>
    </div>
  );
};

export default MarkedDatesCalendar;
