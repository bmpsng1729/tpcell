
import React from 'react';

const Contact = () => {
  return (
    <footer className="bg-[#0C4A6E] text-white px-8 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left Section */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <img src="/logo.png" alt="NIT Jamshedpur Logo" className="h-8" />
            <div>
              <h2 className="font-bold text-lg">NIT JAMSHEDPUR</h2>
              <p className="text-sm">TRAINING & PLACEMENT CELL</p>
            </div>
          </div>
          <p className="text-sm text-gray-300 mb-4">
            The Training and Placement Cell of NIT Jamshedpur is dedicated to facilitating career opportunities for our students and fostering strong industry-academia partnerships.
          </p>
          <div className="flex space-x-4">
            <a href="#"><i className="fab fa-facebook-f bg-white text-blue-600 p-2 rounded-full"></i></a>
            <a href="#"><i className="fab fa-twitter bg-white text-blue-500 p-2 rounded-full"></i></a>
            <a href="#"><i className="fab fa-linkedin-in bg-white text-blue-700 p-2 rounded-full"></i></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">For Students</a></li>
            <li><a href="#">For Companies</a></li>
            <li><a href="#">Placement Statistics</a></li>
            <li><a href="#">Past Recruiters</a></li>
            <li><a href="#">Placement Brochure</a></li>
            <li><a href="#">NIT Jamshedpur</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="font-bold text-lg mb-3">Contact Us</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-start">
              <span className="mr-2">📍</span>
              NIT Jamshedpur, Adityapur,<br />
              Jamshedpur, Jharkhand, 831014
            </li>
            <li className="flex items-center"><span className="mr-2">📞</span>+91 9876543210</li>
            <li className="flex items-center"><span className="mr-2">✉️</span>placement@nitjsr.ac.in</li>
          </ul>
        </div>

        {/* Location Map */}
        <div>
          <h3 className="font-bold text-lg mb-3">Location</h3>
          <iframe
            title="NIT Jamshedpur Map"
            className="w-full h-40 rounded-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.190750297735!2d86.144402875251!3d23.809189186650726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6e382a71a93ed%3A0x5f8e4d0f4af79aa3!2sNational%20Institute%20of%20Technology%2C%20Jamshedpur!5e0!3m2!1sen!2sin!4v1614156211442!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="text-center text-sm text-gray-400 mt-12">
        © 2025 Training & Placement Cell, NIT Jamshedpur. All rights reserved.
      </div>
    </footer>
  );
};

export default Contact;
