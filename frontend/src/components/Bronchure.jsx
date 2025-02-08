import React, { useState } from "react";

const Bronchure = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState("");

  const handleKnowMore = (content) => {
    setPopupContent(content);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setPopupContent("");
  };

  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  };

  return (
    <>
      <div className="container mx-auto p-6 mt-7">
        {/* Row container for cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Academic Facilities Card */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h1 className="text-xl font-bold mb-2">Academic Facilities</h1>
            <p className="mb-4">
              {truncateText(
                `NIT Jamshedpur offers excellent academic facilities that support learning, research, and innovation. The institute has well-equipped classrooms, modern laboratories, and a vast central library with a rich collection of books, journals, and digital resources. The library provides access to online databases, research papers, and e-books, enabling students to stay updated with the latest advancements in their fields.
                
                Each department has state-of-the-art laboratories for practical learning, including advanced computing labs, electronics labs, and mechanical workshops. The institute also has research centers dedicated to emerging technologies like artificial intelligence, data science, and renewable energy.`,
                50
              )}
            </p>
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
              onClick={() =>
                handleKnowMore(
                  `NIT Jamshedpur offers excellent academic facilities that support learning, research, and innovation. The institute has well-equipped classrooms, modern laboratories, and a vast central library with a rich collection of books, journals, and digital resources. The library provides access to online databases, research papers, and e-books, enabling students to stay updated with the latest advancements in their fields.

                  Each department has state-of-the-art laboratories for practical learning, including advanced computing labs, electronics labs, and mechanical workshops. The institute also has research centers dedicated to emerging technologies like artificial intelligence, data science, and renewable energy.`
                )
              }
            >
              Know More
            </button>
          </div>

          {/* Programs and Departments Card */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h1 className="text-xl font-bold mb-2">Programs and Departments</h1>
            <p className="mb-4">
              {truncateText(
                `NIT Jamshedpur offers a wide range of undergraduate, postgraduate, and doctoral programs through its various academic departments. The institute is known for its strong curriculum, research-driven approach, and industry-oriented learning.
                
                Departments include Civil, Computer Science, Electrical, Electronics, Mechanical, Metallurgical, Production, Mathematics, Physics, Chemistry, and Humanities.`,
                50
              )}
            </p>
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
              onClick={() =>
                handleKnowMore(
                  `NIT Jamshedpur offers a wide range of undergraduate, postgraduate, and doctoral programs through its various academic departments. The institute is known for its strong curriculum, research-driven approach, and industry-oriented learning.

                  Departments include:
                  - Civil Engineering
                  - Computer Science and Engineering
                  - Electrical Engineering
                  - Electronics and Communication Engineering
                  - Mechanical Engineering
                  - Metallurgical and Materials Engineering
                  - Production and Industrial Engineering
                  - Mathematics
                  - Physics
                  - Chemistry
                  - Humanities, Social Sciences, and Management`
                )
              }
            >
              Know More
            </button>
          </div>

          {/* Placement Brochure Card */}
          <div className="bg-white shadow-lg rounded-lg p-6">
    <h1 className="text-xl font-bold mb-2">Placement Brochure</h1>
    
    <div className="space-y-4">
        <div className="flex items-center justify-between">
            <p className="mb-4">Placement reports for 2024.</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition">
                View
            </button>
        </div>
        <div className="flex items-center justify-between">
            <p className="mb-4">Placement reports for 2023.</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition">
                View
            </button>
        </div>
        <div className="flex items-center justify-between">
            <p className="mb-4">Placement reports for 2022.</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition">
                View
            </button>
        </div>
        <div className="flex items-center justify-between">
            <p className="mb-4">Placement reports for 2021.</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition">
                View
            </button>
        </div>
    </div>
    
    
</div>
        </div>
      </div>

      {/* Popup for full content */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center pt-8 h-screen">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
            <button
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded mb-4 transition"
              onClick={handleClosePopup}
            >
              Close
            </button>
            <p>{popupContent}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Bronchure;
