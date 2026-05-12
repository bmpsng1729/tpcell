import React, { useState } from "react";
import { toast } from "react-toastify";

function RegisterCompany() {
  const [formData, setFormData] = useState({
    name: "",
    logo: "",
    visitingSince: "",
    baseSalary: "",
    ctc: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:4000/api/v1/admin/registercompany",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        toast.error(data.message || "Error registering company");
      } else {
        toast.success("Company registered successfully!");
        setFormData({
          name: "",
          logo: "",
          visitingSince: "",
          baseSalary: "",
          ctc: "",
        });
      }
    } catch (error) {
      toast.error(error.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div
        className="bg-white p-8 rounded-xl shadow-xl w-full max-w-lg 
                   transform transition-all duration-300 hover:shadow-2xl animate-fadeIn"
      >
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Register Company
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-3">

            {/* Company Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Company Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter company name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2.5 border rounded-lg shadow-sm 
                           focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                           transition-all outline-none"
              />
            </div>

            {/* Logo URL */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Logo URL
              </label>
              <input
                type="text"
                name="logo"
                placeholder="Logo URL (image link)"
                value={formData.logo}
                onChange={handleChange}
                required
                className="w-full p-2.5 border rounded-lg shadow-sm 
                           focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                           transition-all outline-none"
              />
            </div>

            {/* Visiting Since */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Visiting Since (Year)
              </label>
              <input
                type="number"
                name="visitingSince"
                placeholder="Example: 2026"
                value={formData.visitingSince}
                onChange={handleChange}
                required
                min="2000"
                max="2100"
                className="w-full p-2.5 border rounded-lg shadow-sm 
                           focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                           transition-all outline-none"
              />
            </div>

            {/* Base Salary */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Base Salary (in LPA)
              </label>
              <input
                type="number"
                name="baseSalary"
                placeholder="Example: 10"
                value={formData.baseSalary}
                onChange={handleChange}
                required
                className="w-full p-2.5 border rounded-lg shadow-sm 
                           focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                           transition-all outline-none"
              />
            </div>

            {/* CTC */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                CTC (in LPA)
              </label>
              <input
                type="number"
                name="ctc"
                placeholder="Example: 30"
                value={formData.ctc}
                onChange={handleChange}
                required
                className="w-full p-2.5 border rounded-lg shadow-sm 
                           focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                           transition-all outline-none"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg font-medium
                       text-lg shadow-md hover:bg-blue-700 active:scale-95
                       transition-all duration-200"
          >
            Register Company
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterCompany;
