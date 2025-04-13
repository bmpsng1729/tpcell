import React from 'react'

function Footer() {
  return (
    <div>
         {/* ⚡ Footer Section */}
      <footer className="text-center py-6 text-gray-500 text-sm border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-4">
          <span>© 2025 NIT Jamshedpur Placement Cell</span>
          <span className="hidden md:inline">•</span>
          <span>Transforming Careers, Building Futures</span>
          <span className="hidden md:inline">•</span>
          <span>Developed as a Capstone Project for the Training & Placement Office</span>
        </div>
      </footer>
    </div>
  )
}

export default Footer
