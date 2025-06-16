import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaInstagram, FaTrophy } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'react-toastify';

const Elite = () => {
  const [eliteStudents, setEliteStudents] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterYear, setFilterYear] = useState('All');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/v1/admin/toppackagestudents", {
          method: "GET",
          headers: { 'Content-Type': 'application/json' },
        });

        if (!response.ok) throw new Error('Failed to fetch data');

        const data = await response.json();
        if (!data.success) {
          toast.error(data.message || "Error in finding top student");
          return;
        }

        const transformed = data.allStudent.map((student, index) => ({
          id: index + 1,
          name: student.placedStudentDetails.name,
          role: student.role,
          company: student.placementType || "Company",
          ctc: `₹${student.ctc} LPA`,
          year: student.placedStudentDetails.batch,
          department: student.placedStudentDetails.branch,
          photo: student.placedStudentDetails.image || "https://superlawyer.in/wp-content/uploads/2023/12/Passport-size-pic-scaled.jpeg",
          linkedin: student.placedStudentDetails.linkedIn || "#",
          instagram: student.placedStudentDetails.instagram || "#",
          skills: student.placedStudentDetails.skills || ['JavaScript', 'React'],
        }));

        setEliteStudents(transformed);
      } catch (error) {
        console.error("Error:", error);
        toast.error("Failed to load student data");
      }
    };

    fetchData();
  }, []);

  const filteredStudents = eliteStudents.filter(student => {
    const matchSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchYear = filterYear === 'All' || student.year.toString() === filterYear;
    return matchSearch && matchYear;
  });

  const chunkSize = 3;
  const groupedStudents = [];
  for (let i = 0; i < filteredStudents.length; i += chunkSize) {
    groupedStudents.push(filteredStudents.slice(i, i + chunkSize));
  }

  useEffect(() => {
    if (groupedStudents.length <= 1) return;
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentSlide((prev) => (prev + 1) % groupedStudents.length);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [groupedStudents.length, isPaused]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % groupedStudents.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + groupedStudents.length) % groupedStudents.length);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0f4ff] to-[#e6f0ff] py-12 px-6">
      <div className="max-w-7xl mx-auto text-center mb-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Top Placed Students</h1>

      </div>

      <div
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="relative"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {groupedStudents[currentSlide]?.map(student => (
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col"
                key={student.id}
              >
                <div className="p-6 flex-1 flex flex-col items-center text-center">
                  <div className="relative mb-4">
                    <img
                      className="h-32 w-32 rounded-full object-cover border-4 border-white shadow-lg"
                      src={student.photo}
                      alt={student.name}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{student.name}</h3>
                  <p className="text-indigo-600 font-medium">{student.role}</p>
                  <p className="text-gray-500">{student.company}</p>

                  <div className="mt-4 grid grid-cols-2 gap-4 w-full text-sm">
                    <div className="bg-blue-50 p-2 rounded-lg">
                      <p className="text-gray-600 font-semibold">CTC</p>
                      <p className="text-yellow-600 font-bold">{student.ctc}</p>
                    </div>
                    <div className="bg-blue-50 p-2 rounded-lg">
                      <p className="text-gray-600 font-semibold">Batch</p>
                      <p>{student.year}</p>
                    </div>
                    <div className="bg-blue-50 p-2 rounded-lg col-span-2">
                      <p className="text-gray-600 font-semibold">Department</p>
                      <p>{student.department}</p>
                    </div>
                  </div>

                  {student.skills.length > 0 && (
                    <div className="mt-4 flex flex-wrap justify-center gap-2">
                      {student.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="bg-indigo-100 text-indigo-700 text-xs font-medium px-3 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="bg-gray-50 px-6 py-4 flex justify-center space-x-6">
                  <a href={student.linkedin} target="_blank" rel="noreferrer" className="hover:text-blue-800 text-blue-600">
                    <FaLinkedin className="h-5 w-5" />
                  </a>
                  <a href={student.instagram} target="_blank" rel="noreferrer" className="hover:text-pink-700 text-pink-500">
                    <FaInstagram className="h-5 w-5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Arrows */}
        {filteredStudents.length > 3 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white hover:bg-yellow-100 text-yellow-600 p-2 rounded-full shadow-lg transition-all duration-300"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white hover:bg-yellow-100 text-yellow-600 p-2 rounded-full shadow-lg transition-all duration-300"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Dots */}
        {groupedStudents.length > 1 && (
          <div className="flex justify-center mt-6">
            {groupedStudents.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-3 w-3 mx-1 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-yellow-500 w-6' : 'bg-gray-400'}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Elite;
