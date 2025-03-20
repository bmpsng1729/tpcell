
    import { useState } from "react";

    const RegistrationForm = () => {
      const [formData, setFormData] = useState({
        gender: "Male",
        dob: "",
        about: "",
        contactNumber: "",
        LinkedInId: "",
        personalEmail: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
        RegNo: "",
        degree: "B.Tech",
        batch: new Date().getFullYear() - 4,
        cgpa: "",
      });
    
      const degrees = [
        "B.Tech", "M.Tech", "B.Sc", "M.Sc",
        "B.C.A", "M.C.A", 
        "M.Sc Nursing", "Ph.D", "Others"
      ];
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
      };
    
      return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 p-4">
          <div className="bg-white shadow-2xl rounded-2xl p-6 w-full max-w-3xl">
            <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">Registration Form</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Basic Details */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700">Full Name</label>
                  <input type="text" name="fullName" onChange={handleChange} required
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
                </div>
    
                <div>
                  <label className="block text-gray-700">Gender</label>
                  <select name="gender" onChange={handleChange} value={formData.gender}
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
    
                <div>
                  <label className="block text-gray-700">Date of Birth</label>
                  <input type="date" name="dob" onChange={handleChange} required
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
                </div>
    
                <div>
                  <label className="block text-gray-700">Contact Number</label>
                  <input type="text" name="contactNumber" onChange={handleChange} required
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
                </div>
              </div>
    
              {/* Address */}
              <div>
                <label className="block text-gray-700">Address</label>
                <textarea name="address" onChange={handleChange} required
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"></textarea>
              </div>
    
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-gray-700">City</label>
                  <input type="text" name="city" onChange={handleChange} required
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
                </div>
    
                <div>
                  <label className="block text-gray-700">State</label>
                  <input type="text" name="state" onChange={handleChange} required
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
                </div>
    
                <div>
                  <label className="block text-gray-700">Pin Code</label>
                  <input type="text" name="pincode" onChange={handleChange} required
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
                </div>
              </div>
    
              {/* Educational Details */}
              <h3 className="text-xl font-bold text-gray-700">Educational Details</h3>
    
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700">Roll Number</label>
                  <input type="text" name="RegNo" onChange={handleChange} required
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
                </div>
    
                <div>
                  <label className="block text-gray-700">Degree</label>
                  <select name="degree" onChange={handleChange} value={formData.degree}
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
                    {degrees.map((deg) => (
                      <option key={deg} value={deg}>{deg}</option>
                    ))}
                  </select>
                </div>
    
                <div>
                  <label className="block text-gray-700">Batch Year</label>
                  <input type="number" name="batch" onChange={handleChange} value={formData.batch} required
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
                </div>
    
                <div>
                  <label className="block text-gray-700">CGPA</label>
                  <input type="number" step="0.1" name="cgpa" onChange={handleChange} required
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
                </div>
              </div>
    
              {/* Submit Button */}
              <div className="text-center">
                <button type="submit"
                  className="bg-blue-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-600 transition">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      );
    };
    
    export default RegistrationForm;
    