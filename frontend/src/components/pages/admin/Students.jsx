import { useState } from 'react';
import { 
  AcademicCapIcon, 
  UserGroupIcon, 
  ChartBarIcon,
  PlusIcon,
  ArrowPathIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  ChevronDownIcon,
  XMarkIcon,
  PencilSquareIcon,
  TrashIcon
} from '@heroicons/react/24/outline';

const Students = () => {
  // State for students data
  const [students, setStudents] = useState([
    {
      id: '1',
      rollNo: '2023CSE001',
      name: 'Rahul Sharma',
      branch: 'CSE',
      cgpa: '8.9',
      status: 'Placed',
      company: 'Microsoft',
      package: '24',
      offerType: 'FTE',
      stipend: '',
      placementYear: '2023',
      joiningYear: '2019'
    },
    {
      id: '2',
      rollNo: '2023ECE101',
      name: 'Priya Patel',
      branch: 'ECE',
      cgpa: '9.2',
      status: 'Placed',
      company: 'Google',
      package: '30',
      offerType: 'FTE',
      stipend: '',
      placementYear: '2023',
      joiningYear: '2019'
    },
    {
      id: '3',
      rollNo: '2023ME045',
      name: 'Amit Singh',
      branch: 'ME',
      cgpa: '7.8',
      status: 'Not Placed',
      company: '',
      package: '',
      offerType: '',
      stipend: '',
      placementYear: '',
      joiningYear: '2019'
    },
    {
      id: '4',
      rollNo: '2023EE023',
      name: 'Neha Gupta',
      branch: 'EE',
      cgpa: '8.5',
      status: 'Placed',
      company: 'Amazon',
      package: '',
      offerType: 'Internship',
      stipend: '50000',
      placementYear: '2023',
      joiningYear: '2019'
    },
    {
      id: '5',
      rollNo: '2023CSE112',
      name: 'Vikram Joshi',
      branch: 'CSE',
      cgpa: '9.1',
      status: 'Placed',
      company: 'Microsoft',
      package: '28',
      offerType: 'PPO',
      stipend: '',
      placementYear: '2023',
      joiningYear: '2019'
    },
    {
      id: '6',
      rollNo: '2022CSE078',
      name: 'Sneha Reddy',
      branch: 'CSE',
      cgpa: '8.7',
      status: 'Placed',
      company: 'Adobe',
      package: '22',
      offerType: 'FTE',
      stipend: '',
      placementYear: '2022',
      joiningYear: '2018'
    },
  ]);

  // State for UI
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentStudent, setCurrentStudent] = useState(null);
  const [isCoordinator, setIsCoordinator] = useState(true);
  const [viewMode, setViewMode] = useState('table'); // 'table' or 'card'
  
  // Filter states
  const [branchFilter, setBranchFilter] = useState('all');
  const [cgpaRange, setCgpaRange] = useState([0, 10]);
  const [companyFilter, setCompanyFilter] = useState('');
  const [packageRange, setPackageRange] = useState([0, 50]);
  const [stipendRange, setStipendRange] = useState([0, 100000]);
  const [placementYearFilter, setPlacementYearFilter] = useState('all');
  const [joiningYearFilter, setJoiningYearFilter] = useState('all');

  // Branch data
  const branches = [
    { name: 'Computer Science', code: 'CSE' },
    { name: 'Electronics', code: 'ECE' },
    { name: 'Mechanical', code: 'ME' },
    { name: 'Electrical', code: 'EE' },
    { name: 'Civil', code: 'CE' },
    { name: 'Production', code: 'PIE' },
    { name: 'ECM', code: 'ECM' },
    { name: 'Metallurgy', code: 'MME' },
  ];

  // Years data
  const placementYears = ['2023', '2022', '2021', '2020'];
  const joiningYears = ['2023', '2022', '2021', '2020', '2019', '2018'];

  // Calculate stats based on current student data
  const stats = [
    { 
      name: 'Total Students', 
      value: students.length.toString(), 
      icon: UserGroupIcon, 
      change: '+8.2%',
      color: 'bg-gradient-to-br from-green-500 to-teal-600',
      textColor: 'text-green-500'
    },
    { 
      name: 'Placed Students', 
      value: students.filter(s => s.status === 'Placed').length.toString(), 
      icon: AcademicCapIcon, 
      change: '+12.5%',
      color: 'bg-gradient-to-br from-blue-500 to-indigo-600',
      textColor: 'text-blue-500'
    },
    { 
      name: 'Average Package', 
      value: calculateAveragePackage(), 
      icon: ChartBarIcon, 
      change: '+5.7%',
      color: 'bg-gradient-to-br from-amber-500 to-orange-600',
      textColor: 'text-amber-500'
    },
  ];

  // Calculate average package
  function calculateAveragePackage() {
    const placedStudents = students.filter(s => s.status === 'Placed' && (s.package || s.stipend));
    if (placedStudents.length === 0) return '0 LPA';
    
    const total = placedStudents.reduce((sum, student) => {
      return sum + (
        student.offerType === 'Internship'
          ? (parseFloat(student.stipend) * 12 / 100000) // Convert stipend to annual equivalent
          : parseFloat(student.package)
      );
    }, 0);
    
    
    return (total / placedStudents.length).toFixed(1) + ' LPA';
  }

  // New student form state
  const [newStudent, setNewStudent] = useState({
    rollNo: '',
    name: '',
    branch: 'CSE',
    cgpa: '',
    status: 'Not Placed',
    company: '',
    package: '',
    offerType: '',
    stipend: '',
    placementYear: '',
    joiningYear: '2019'
  });

  // Handle add student button click
  const handleAddStudent = () => {
    if (!isCoordinator) {
      alert('Only coordinators can add new students');
      return;
    }
    setNewStudent({
      rollNo: '',
      name: '',
      branch: 'CSE',
      cgpa: '',
      status: 'Not Placed',
      company: '',
      package: '',
      offerType: '',
      stipend: '',
      placementYear: '',
      joiningYear: '2019'
    });
    setIsAddModalOpen(true);
  };

  // Handle edit student button click
  const handleEditStudent = (student) => {
    if (!isCoordinator) {
      alert('Only coordinators can edit student records');
      return;
    }
    setCurrentStudent(student);
    setNewStudent({
      rollNo: student.rollNo,
      name: student.name,
      branch: student.branch,
      cgpa: student.cgpa,
      status: student.status,
      company: student.company || '',
      package: student.package || '',
      offerType: student.offerType || '',
      stipend: student.stipend || '',
      placementYear: student.placementYear || '',
      joiningYear: student.joiningYear || '2019'
    });
    setIsEditModalOpen(true);
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStudent(prev => ({
      ...prev,
      [name]: value
    }));

    // Reset placement fields if status changes to "Not Placed"
    if (name === 'status' && value === 'Not Placed') {
      setNewStudent(prev => ({
        ...prev,
        company: '',
        package: '',
        offerType: '',
        stipend: '',
        placementYear: ''
      }));
    }
    
    // Reset package if offer type changes to Internship
    if (name === 'offerType' && value === 'Internship') {
      setNewStudent(prev => ({
        ...prev,
        package: ''
      }));
    }
    
    // Reset stipend if offer type changes from Internship
    if (name === 'offerType' && value !== 'Internship') {
      setNewStudent(prev => ({
        ...prev,
        stipend: ''
      }));
    }
  };

  // Handle form submission for new student
  const handleAddSubmit = (e) => {
    e.preventDefault();
    const newId = Date.now().toString();
    
    const studentToAdd = {
      id: newId,
      rollNo: newStudent.rollNo,
      name: newStudent.name,
      branch: newStudent.branch,
      cgpa: newStudent.cgpa,
      status: newStudent.status,
      company: newStudent.status === 'Placed' ? newStudent.company : '',
      package: newStudent.status === 'Placed' && newStudent.offerType !== 'Internship' ? newStudent.package : '',
      offerType: newStudent.status === 'Placed' ? newStudent.offerType : '',
      stipend: newStudent.status === 'Placed' && newStudent.offerType === 'Internship' ? newStudent.stipend : '',
      placementYear: newStudent.status === 'Placed' ? newStudent.placementYear : '',
      joiningYear: newStudent.joiningYear
    };

    setStudents([...students, studentToAdd]);
    setIsAddModalOpen(false);
  };

  // Handle form submission for editing student
  const handleEditSubmit = (e) => {
    e.preventDefault();
    const updatedStudents = students.map(student => 
      student.id === currentStudent.id ? {
        ...student,
        rollNo: newStudent.rollNo,
        name: newStudent.name,
        branch: newStudent.branch,
        cgpa: newStudent.cgpa,
        status: newStudent.status,
        company: newStudent.status === 'Placed' ? newStudent.company : '',
        package: newStudent.status === 'Placed' && newStudent.offerType !== 'Internship' ? newStudent.package : '',
        offerType: newStudent.status === 'Placed' ? newStudent.offerType : '',
        stipend: newStudent.status === 'Placed' && newStudent.offerType === 'Internship' ? newStudent.stipend : '',
        placementYear: newStudent.status === 'Placed' ? newStudent.placementYear : '',
        joiningYear: newStudent.joiningYear
      } : student
    );
    setStudents(updatedStudents);
    setIsEditModalOpen(false);
  };

  // Handle delete student
  const handleDeleteStudent = (id) => {
    if (!isCoordinator) {
      alert('Only coordinators can delete student records');
      return;
    }
    if (window.confirm('Are you sure you want to delete this student record?')) {
      setStudents(students.filter(student => student.id !== id));
    }
  };

  // Filter students based on all filters
  const filteredStudents = students.filter(student => {
    // Search query
    const matchesSearch = searchQuery === '' || 
                         student.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         student.rollNo.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Status filter
    const matchesStatus = activeFilter === 'all' || 
                         (activeFilter === 'placed' && student.status === 'Placed') || 
                         (activeFilter === 'unplaced' && student.status === 'Not Placed');
    
    // Branch filter
    const matchesBranch = branchFilter === 'all' || student.branch === branchFilter;
    
    // CGPA filter
    const matchesCgpa = parseFloat(student.cgpa) >= cgpaRange[0] && 
                       parseFloat(student.cgpa) <= cgpaRange[1];
    
    // Company filter
    const matchesCompany = companyFilter === '' || 
                          (student.company && student.company.toLowerCase().includes(companyFilter.toLowerCase()));
    
// Package filter (only for placed students with package)
const matchesPackage = student.status !== 'Placed' || 
                       student.offerType === 'Internship' ||
                       (
                         parseFloat(student.package || 0) >= packageRange[0] && 
                         parseFloat(student.package || 0) <= packageRange[1]
                       );
    
    // Stipend filter (only for internships)
    const matchesStipend = student.status !== 'Placed' || 
                           student.offerType !== 'Internship' ||
                           (parseFloat(student.stipend || 0) >= stipendRange[0] && 
                            parseFloat(student.stipend || 0) <= stipendRange[1]);
    
    // Placement year filter
    const matchesPlacementYear = placementYearFilter === 'all' || 
                                 student.placementYear === placementYearFilter ||
                                 (placementYearFilter === 'none' && !student.placementYear);
    
    // Joining year filter
    const matchesJoiningYear = joiningYearFilter === 'all' || 
                              student.joiningYear === joiningYearFilter;

    return matchesSearch && matchesStatus && matchesBranch && matchesCgpa && 
           matchesCompany && matchesPackage && matchesStipend && 
           matchesPlacementYear && matchesJoiningYear;
  });

  // Calculate branch-wise placement stats
  const branchStats = branches.map(branch => {
    const branchStudents = students.filter(s => s.branch === branch.code);
    const placed = branchStudents.filter(s => s.status === 'Placed').length;
    const total = branchStudents.length;
    const percentage = total > 0 ? Math.round((placed / total) * 100) : 0;
    
    return {
      ...branch,
      placed,
      total,
      percentage
    };
  });

  // Reset all filters
  const resetFilters = () => {
    setSearchQuery('');
    setActiveFilter('all');
    setBranchFilter('all');
    setCgpaRange([0, 10]);
    setCompanyFilter('');
    setPackageRange([0, 50]);
    setStipendRange([0, 100000]);
    setPlacementYearFilter('all');
    setJoiningYearFilter('all');
  };

  return (
    <div className="space-y-6">
      {/* Add Student Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md max-h-[90vh] flex flex-col">
            <div className="p-5 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-lg font-semibold">Add New Student</h3>
              <button 
                onClick={() => setIsAddModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            <div className="overflow-y-auto flex-1 p-5">
              <form onSubmit={handleAddSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Roll Number*</label>
                    <input
                      type="text"
                      name="rollNo"
                      value={newStudent.rollNo}
                      onChange={handleInputChange}
                      className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      required
                      placeholder="2023CSE001"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name*</label>
                    <input
                      type="text"
                      name="name"
                      value={newStudent.name}
                      onChange={handleInputChange}
                      className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      required
                      placeholder="Rahul Sharma"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Branch*</label>
                    <select
                      name="branch"
                      value={newStudent.branch}
                      onChange={handleInputChange}
                      className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      required
                    >
                      {branches.map(branch => (
                        <option key={branch.code} value={branch.code}>{branch.name} ({branch.code})</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">CGPA*</label>
                    <input
                      type="number"
                      name="cgpa"
                      value={newStudent.cgpa}
                      onChange={handleInputChange}
                      className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      min="0"
                      max="10"
                      step="0.1"
                      required
                      placeholder="8.5"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Joining Year*</label>
                    <select
                      name="joiningYear"
                      value={newStudent.joiningYear}
                      onChange={handleInputChange}
                      className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      required
                    >
                      {joiningYears.map(year => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Placement Status*</label>
                    <select
                      name="status"
                      value={newStudent.status}
                      onChange={handleInputChange}
                      className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      required
                    >
                      <option value="Placed">Placed</option>
                      <option value="Not Placed">Not Placed</option>
                    </select>
                  </div>
                </div>
                
                {newStudent.status === 'Placed' && (
                  <div className="space-y-4 pt-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Company*</label>
                        <input
                          type="text"
                          name="company"
                          value={newStudent.company}
                          onChange={handleInputChange}
                          className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                          required
                          placeholder="Microsoft"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Offer Type*</label>
                        <select
                          name="offerType"
                          value={newStudent.offerType}
                          onChange={handleInputChange}
                          className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                          required
                        >
                          <option value="">Select offer type</option>
                          <option value="FTE">Full Time Employment (FTE)</option>
                          <option value="Internship">Internship</option>
                          <option value="PPO">Pre-Placement Offer (PPO)</option>
                          <option value="SIP">Summer Internship Program (SIP)</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Placement Year*</label>
                        <select
                          name="placementYear"
                          value={newStudent.placementYear}
                          onChange={handleInputChange}
                          className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                          required
                        >
                          <option value="">Select year</option>
                          {placementYears.map(year => (
                            <option key={year} value={year}>{year}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    
                    {newStudent.offerType === 'Internship' ? (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Stipend (per month)*</label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                          <input
                            type="number"
                            name="stipend"
                            value={newStudent.stipend}
                            onChange={handleInputChange}
                            className="w-full pl-8 p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                            min="0"
                            step="1000"
                            required
                            placeholder="50000"
                          />
                        </div>
                      </div>
                    ) : (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Package (LPA)*</label>
                        <div className="relative">
                          <input
                            type="number"
                            name="package"
                            value={newStudent.package}
                            onChange={handleInputChange}
                            className="w-full p-2.5 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                            min="0"
                            step="0.1"
                            required
                            placeholder="24.5"
                          />
                          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">LPA</span>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </form>
            </div>
            <div className="p-5 border-t border-gray-200">
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  form="studentForm"
                  className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-lg shadow hover:shadow-md transition-all"
                  onClick={handleAddSubmit}
                >
                  Add Student
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Student Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md max-h-[90vh] flex flex-col">
            <div className="p-5 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-lg font-semibold">Edit Student</h3>
              <button 
                onClick={() => setIsEditModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            <div className="overflow-y-auto flex-1 p-5">
              <form onSubmit={handleEditSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Roll Number*</label>
                    <input
                      type="text"
                      name="rollNo"
                      value={newStudent.rollNo}
                      onChange={handleInputChange}
                      className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name*</label>
                    <input
                      type="text"
                      name="name"
                      value={newStudent.name}
                      onChange={handleInputChange}
                      className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Branch*</label>
                    <select
                      name="branch"
                      value={newStudent.branch}
                      onChange={handleInputChange}
                      className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      required
                    >
                      {branches.map(branch => (
                        <option key={branch.code} value={branch.code}>{branch.name} ({branch.code})</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">CGPA*</label>
                    <input
                      type="number"
                      name="cgpa"
                      value={newStudent.cgpa}
                      onChange={handleInputChange}
                      className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      min="0"
                      max="10"
                      step="0.1"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Joining Year*</label>
                    <select
                      name="joiningYear"
                      value={newStudent.joiningYear}
                      onChange={handleInputChange}
                      className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      required
                    >
                      {joiningYears.map(year => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Placement Status*</label>
                    <select
                      name="status"
                      value={newStudent.status}
                      onChange={handleInputChange}
                      className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      required
                    >
                      <option value="Placed">Placed</option>
                      <option value="Not Placed">Not Placed</option>
                    </select>
                  </div>
                </div>
                
                {newStudent.status === 'Placed' && (
                  <div className="space-y-4 pt-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Company*</label>
                        <input
                          type="text"
                          name="company"
                          value={newStudent.company}
                          onChange={handleInputChange}
                          className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Offer Type*</label>
                        <select
                          name="offerType"
                          value={newStudent.offerType}
                          onChange={handleInputChange}
                          className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                          required
                        >
                          <option value="">Select offer type</option>
                          <option value="FTE">Full Time Employment (FTE)</option>
                          <option value="Internship">Internship</option>
                          <option value="PPO">Pre-Placement Offer (PPO)</option>
                          <option value="SIP">Summer Internship Program (SIP)</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Placement Year*</label>
                        <select
                          name="placementYear"
                          value={newStudent.placementYear}
                          onChange={handleInputChange}
                          className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                          required
                        >
                          <option value="">Select year</option>
                          {placementYears.map(year => (
                            <option key={year} value={year}>{year}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    
                    {newStudent.offerType === 'Internship' ? (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Stipend (per month)*</label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                          <input
                            type="number"
                            name="stipend"
                            value={newStudent.stipend}
                            onChange={handleInputChange}
                            className="w-full pl-8 p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                            min="0"
                            step="1000"
                            required
                          />
                        </div>
                      </div>
                    ) : (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Package (LPA)*</label>
                        <div className="relative">
                          <input
                            type="number"
                            name="package"
                            value={newStudent.package}
                            onChange={handleInputChange}
                            className="w-full p-2.5 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                            min="0"
                            step="0.1"
                            required
                          />
                          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">LPA</span>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </form>
            </div>
            <div className="p-5 border-t border-gray-200">
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setIsEditModalOpen(false)}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-lg shadow hover:shadow-md transition-all"
                  onClick={handleEditSubmit}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-800 bg-clip-text text-transparent">
            Students Management
          </h2>
          <p className="text-gray-600">Manage and track student placement data</p>
        </div>
        <div className="flex items-center space-x-3">
          <button 
            onClick={() => setViewMode(viewMode === 'table' ? 'card' : 'table')}
            className="flex items-center px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg shadow-sm hover:bg-gray-50 transition-all"
          >
            {viewMode === 'table' ? (
              <>
                <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
                Card View
              </>
            ) : (
              <>
                <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Table View
              </>
            )}
          </button>
          <button 
            onClick={handleAddStudent}
            className="flex items-center px-4 py-2 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all"
          >
            <PlusIcon className="h-5 w-5 mr-2" />
            Add New Student
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-gray-100">
            <div className="p-5">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">{stat.name}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-lg ${stat.color} text-white shadow-inner`}>
                  <stat.icon className="h-6 w-6" />
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <span className={`text-sm font-medium ${stat.textColor}`}>
                  {stat.change}
                </span>
                <span className="text-xs text-gray-500 ml-1">vs last year</span>
              </div>
            </div>
          </div>
        ))}
      </div> */}

      {/* Branch-wise Placement Stats */}
      {/* <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
        <div className="p-5 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50">
          <h3 className="text-lg font-semibold text-gray-800 flex items-center">
            <ChartBarIcon className="h-5 w-5 text-indigo-600 mr-2" />
            Branch-wise Placement Statistics
          </h3>
        </div>
        <div className="p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {branchStats.map((branch) => (
            <div key={branch.code} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <div className="flex justify-between items-center">
                <h4 className="font-medium text-gray-900">{branch.code}</h4>
                <span className="text-sm font-medium text-blue-600">{branch.percentage}%</span>
              </div>
              <p className="text-sm text-gray-500 mt-1">{branch.name}</p>
              <div className="mt-4">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-500">{branch.placed} placed</span>
                  <span className="text-gray-500">{branch.total} total</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full"
                    style={{ width: `${branch.percentage}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}

      {/* Filters and Search */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
        <div className="p-5 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50">
          <h3 className="text-lg font-semibold text-gray-800 flex items-center">
            <FunnelIcon className="h-5 w-5 text-indigo-600 mr-2" />
            Filter Students
          </h3>
        </div>
        <div className="p-5 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Search by Name/Roll No</label>
              <div className="relative">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search students..."
                  className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Branch</label>
              <select
                value={branchFilter}
                onChange={(e) => setBranchFilter(e.target.value)}
                className="w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              >
                <option value="all">All Branches</option>
                {branches.map(branch => (
                  <option key={branch.code} value={branch.code}>{branch.name} ({branch.code})</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Placement Status</label>
              <select
                value={activeFilter}
                onChange={(e) => setActiveFilter(e.target.value)}
                className="w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              >
                <option value="all">All Students</option>
                <option value="placed">Placed Only</option>
                <option value="unplaced">Unplaced Only</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
              <input
                type="text"
                placeholder="Filter by company..."
                className="w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                value={companyFilter}
                onChange={(e) => setCompanyFilter(e.target.value)}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">CGPA Range: {cgpaRange[0]} - {cgpaRange[1]}</label>
              <div className="flex items-center space-x-2">
                <input
                  type="range"
                  min="0"
                  max="10"
                  step="0.1"
                  value={cgpaRange[0]}
                  onChange={(e) => setCgpaRange([parseFloat(e.target.value), cgpaRange[1]])}
                  className="w-full"
                />
                <input
                  type="range"
                  min="0"
                  max="10"
                  step="0.1"
                  value={cgpaRange[1]}
                  onChange={(e) => setCgpaRange([cgpaRange[0], parseFloat(e.target.value)])}
                  className="w-full"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Package Range (LPA): {packageRange[0]} - {packageRange[1]}</label>
              <div className="flex items-center space-x-2">
                <input
                  type="range"
                  min="0"
                  max="50"
                  step="1"
                  value={packageRange[0]}
                  onChange={(e) => setPackageRange([parseInt(e.target.value), packageRange[1]])}
                  className="w-full"
                />
                <input
                  type="range"
                  min="0"
                  max="50"
                  step="1"
                  value={packageRange[1]}
                  onChange={(e) => setPackageRange([packageRange[0], parseInt(e.target.value)])}
                  className="w-full"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Stipend Range (₹/month): {stipendRange[0]} - {stipendRange[1]}</label>
              <div className="flex items-center space-x-2">
                <input
                  type="range"
                  min="0"
                  max="100000"
                  step="1000"
                  value={stipendRange[0]}
                  onChange={(e) => setStipendRange([parseInt(e.target.value), stipendRange[1]])}
                  className="w-full"
                />
                <input
                  type="range"
                  min="0"
                  max="100000"
                  step="1000"
                  value={stipendRange[1]}
                  onChange={(e) => setStipendRange([stipendRange[0], parseInt(e.target.value)])}
                  className="w-full"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Placement Year</label>
              <select
                value={placementYearFilter}
                onChange={(e) => setPlacementYearFilter(e.target.value)}
                className="w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              >
                <option value="all">All Years</option>
                <option value="none">Not Placed</option>
                {placementYears.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Joining Year</label>
              <select
                value={joiningYearFilter}
                onChange={(e) => setJoiningYearFilter(e.target.value)}
                className="w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              >
                <option value="all">All Years</option>
                {joiningYears.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
            
            <div className="flex items-end">
              <button
                onClick={resetFilters}
                className="flex items-center px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg shadow-sm hover:bg-gray-50 transition-all"
              >
                <ArrowPathIcon className="h-5 w-5 mr-2" />
                Reset All Filters
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Student Display */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
        <div className="p-5 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50 flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-800 flex items-center">
            <UserGroupIcon className="h-5 w-5 text-indigo-600 mr-2" />
            Student Records ({filteredStudents.length})
          </h3>
          <div className="text-sm text-gray-600">
            Showing {filteredStudents.length} of {students.length} students
          </div>
        </div>
        
        {viewMode === 'table' ? (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Roll No</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Branch</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CGPA</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Package/Stipend</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Offer Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Year</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredStudents.length > 0 ? (
                  filteredStudents.map((student) => (
                    <tr key={student.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{student.rollNo}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{student.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.branch}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.cgpa}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          student.status === 'Placed' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {student.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {student.company || '-'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                        {student.offerType === 'Internship' ? 
                          (student.stipend ? `₹${student.stipend}/month` : '-') : 
                          (student.package ? `${student.package} LPA` : '-')}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {student.offerType || '-'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {student.placementYear || '-'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleEditStudent(student)}
                            className="text-indigo-600 hover:text-indigo-900 p-1 rounded hover:bg-indigo-50"
                            title="Edit"
                          >
                            <PencilSquareIcon className="h-5 w-5" />
                          </button>
                          <button
                            onClick={() => handleDeleteStudent(student.id)}
                            className="text-red-600 hover:text-red-900 p-1 rounded hover:bg-red-50"
                            title="Delete"
                          >
                            <TrashIcon className="h-5 w-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="10" className="px-6 py-4 text-center text-sm text-gray-500">
                      No students found matching your criteria
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[600px] overflow-y-auto">
            {filteredStudents.length > 0 ? (
              filteredStudents.map((student) => (
                <div key={student.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">{student.name}</h3>
                      <p className="text-sm text-gray-500">{student.rollNo} • {student.branch}</p>
                    </div>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      student.status === 'Placed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {student.status}
                    </span>
                  </div>
                  
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">CGPA</span>
                      <span className="text-sm font-medium">{student.cgpa}</span>
                    </div>
                    
                    {student.status === 'Placed' && (
                      <>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-500">Company</span>
                          <span className="text-sm font-medium">{student.company}</span>
                        </div>
                        
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-500">Offer Type</span>
                          <span className="text-sm font-medium">{student.offerType}</span>
                        </div>
                        
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-500">
                            {student.offerType === 'Internship' ? 'Stipend' : 'Package'}
                          </span>
                          <span className="text-sm font-medium text-blue-600">
                            {student.offerType === 'Internship' ? 
                              `₹${student.stipend}/month` : 
                              `${student.package} LPA`}
                          </span>
                        </div>
                        
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-500">Year</span>
                          <span className="text-sm font-medium">{student.placementYear}</span>
                        </div>
                      </>
                    )}
                    
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Joining Year</span>
                      <span className="text-sm font-medium">{student.joiningYear}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex justify-end space-x-2">
                    <button
                      onClick={() => handleEditStudent(student)}
                      className="text-indigo-600 hover:text-indigo-900 p-1 rounded hover:bg-indigo-50"
                      title="Edit"
                    >
                      <PencilSquareIcon className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => handleDeleteStudent(student.id)}
                      className="text-red-600 hover:text-red-900 p-1 rounded hover:bg-red-50"
                      title="Delete"
                    >
                      <TrashIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-8">
                <p className="text-gray-500">No students found matching your criteria</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Students;