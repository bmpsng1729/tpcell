import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaInstagram, FaTrophy, FaSearch, FaFilter } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Elite = () => {
  // Sample elite students data
  const [eliteStudents,setEliteStudents]=useState([
    {
      id: 1,
      name: 'Rahul Sharma',
      role: 'Senior Software Engineer',
      company: 'Google',
      ctc: '₹42 LPA',
      year: 2023,
      department: 'Computer Science',
      photo: 'https://randomuser.me/api/portraits/men/32.jpg',
      linkedin: 'https://linkedin.com/in/rahulsharma',
      instagram: 'https://instagram.com/rahulsharma',
      skills: ['DSA', 'Machine Learning', 'Cloud Computing']
    },
  
    
  ])
  
  
    
  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:4000/api/v1/admin/toppackagestudents", {
                method: "GET",
                headers: { 'Content-Type': 'application/json' },
            });

            if (!response.ok) {
                console.log("Failed response", response);
                throw new Error('Failed to fetch data');
            }

            const data = await response.json();
            if (!data.success) {
                toast.error(data.message ||"error in finding top student");
                return;
            }

            // TODO: set data to state like:
            // setEliteStudents(data.students)
            const transformed = data.allStudent.map((student, index) => ({
              id: index + 1,
              name: student.placedStudentDetails.name,
              role: student.role,
              company: student.placementType, // or add a new field for company
              ctc: `₹${student.ctc} LPA`,
              year: student.placedStudentDetails.batch,
              department: student.placedStudentDetails.branch,
              photo: student.placedStudentDetails.image || "https://randomuser.me/api/portraits/lego/1.jpg", // fallback image
              linkedin: student.placedStudentDetails.linkedIn || "#",
              instagram: student.placedStudentDetails.instagram || "#",
              skills: student.placedStudentDetails.skills || []
          }));
          setEliteStudents(transformed);

            
        } catch (error) {
            console.error("Error fetching top package students:", error);
            toast.error("An error occurred while fetching data");
        }
    };

    fetchData();
}, []);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterYear, setFilterYear] = useState('All');

  // Filter students based on search and filters
  const filteredStudents = eliteStudents.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         student.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesYear = filterYear === 'All' || student.year.toString() === filterYear;
    return matchesSearch && matchesYear;
  });

  // Group students into chunks of 3 for the carousel
  const chunkSize = 3;
  const groupedStudents = [];
  for (let i = 0; i < filteredStudents.length; i += chunkSize) {
    groupedStudents.push(filteredStudents.slice(i, i + chunkSize));
  }

  // Auto-rotate slides
  useEffect(() => {
    if (groupedStudents.length <= 1) return;
    
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentSlide((prev) => (prev + 1) % groupedStudents.length);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, groupedStudents.length]);

  const nextSlide = () => {
    if (groupedStudents.length <= 1) return;
    setCurrentSlide((prev) => (prev + 1) % groupedStudents.length);
  };

  const prevSlide = () => {
    if (groupedStudents.length <= 1) return;
    setCurrentSlide((prev) => (prev - 1 + groupedStudents.length) % groupedStudents.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl flex items-center justify-center"
          >
            <FaTrophy className="text-yellow-500 mr-4" />
            Elite Students
            <FaTrophy className="text-yellow-500 ml-4" />
          </motion.h1>
         
        </div>

          <div 
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Student Cards Carousel */}
            <div className="overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {groupedStudents[currentSlide]?.map((student) => (
                    <motion.div
                      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                      className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col"
                      key={student.id}
                    >
                      <div className="p-6 flex-1">
                        <div className="flex flex-col items-center text-center">
                          {/* Profile Photo with Glow Effect */}
                          <div className="relative mb-6">
                            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full blur opacity-75"></div>
                            <img 
                              className="h-32 w-32 rounded-full object-cover border-4 border-white shadow-lg relative z-10"
                              src={student.photo} 
                              alt={student.name}
                            />
                          </div>
                          
                          {/* Student Info */}
                          <h3 className="text-xl font-bold text-gray-900">{student.name}</h3>
                          <p className="text-indigo-600 font-medium mt-1">{student.role}</p>
                          <p className="text-gray-600">{student.company}</p>
                          
                          <div className="mt-4 grid grid-cols-2 gap-4 w-full text-sm">
                            <div className="bg-blue-50 p-2 rounded-lg">
                              <p className="font-semibold text-gray-600">CTC</p>
                              <p className="text-yellow-600 font-bold">{student.ctc}</p>
                            </div>
                            <div className="bg-blue-50 p-2 rounded-lg">
                              <p className="font-semibold text-gray-600">Batch</p>
                              <p>{student.year}</p>
                            </div>
                            <div className="bg-blue-50 p-2 rounded-lg">
                              <p className="font-semibold text-gray-600">Department</p>
                              <p>{student.department}</p>
                            </div>
                          </div>
                          
                          {/* Skills */}
                          
                        </div>
                      </div>
                      
                      {/* Social Links */}
                      <div className="bg-gray-50 px-6 py-4 flex justify-center space-x-6">
                        <a 
                          href={student.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-700 hover:text-blue-900 transition-colors"
                        >
                          <FaLinkedin className="h-6 w-6" />
                        </a>
                        <a 
                          href={student.instagram} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-pink-600 hover:text-pink-800 transition-colors"
                        >
                          <FaInstagram className="h-6 w-6" />
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation arrows (only show if more than 3 students) */}
            {filteredStudents.length > 3 && (
              <>
                <button 
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white p-3 rounded-full shadow-md hover:bg-yellow-100 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white p-3 rounded-full shadow-md hover:bg-yellow-100 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}

            {/* Dots indicator */}
            {groupedStudents.length > 1 && (
             <div className="flex justify-center mt-8 space-x-2">
             {groupedStudents.map((_, index) => (
               <button
                 key={index}
                 onClick={() => setCurrentSlide(index)}
                 className={`h-3 w-3 rounded-full transition-colors ${index === currentSlide ? 'bg-yellow-600 w-6' : 'bg-gray-300'}`}
                 aria-label={`Go to slide ${index + 1}`}
               />
             ))}
           </div>
           
            )}
          </div>
        
      </div>
    </div>
  );
};
export default Elite;