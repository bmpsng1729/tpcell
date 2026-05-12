import React, { useState } from 'react';
import { toast } from 'react-toastify';

function MarkPlaced() {
  const [formData, setFormData] = useState({
    email: "",
    company: "",
    description: "",
    role: "",
    placementType: "",
    ctc: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/api/v1/admin/markplaced", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.errors && Array.isArray(data.errors)) {
          data.errors.forEach((error) => toast.error(error));
        } else {
          toast.error(data.message || "Something went wrong");
        }
      } else {
        toast.success(data.message || "Student marked as placed successfully!");
      }

    } catch (err) {
      toast.error(err.message || "Error in submitting form");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div
        className="bg-white p-8 rounded-xl shadow-xl w-full max-w-lg transform transition-all duration-300 hover:shadow-2xl animate-fadeIn"
      >
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Mark Student as Placed
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Input Grid */}
          <div className="grid grid-cols-2 gap-4">

            {[
              { label: "Email", name: "email", type: "email", placeholder: "College Email" },
              { label: "Company", name: "company", type: "text", placeholder: "Company Name" },
              { label: "Description", name: "description", type: "text", placeholder: "Description" },
              { label: "Role", name: "role", type: "text", placeholder: "Role" },
              { label: "Placement Type", name: "placementType", type: "text", placeholder: "Full-time / Internship" },
              { label: "CTC (in LPA)", name: "ctc", type: "number", placeholder: "CTC in LPA" },
            ].map((field, idx) => (
              <div key={idx}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {field.label}
                </label>

                <input
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className="w-full p-2.5 border rounded-lg text-sm shadow-sm 
                             focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                             outline-none transition-all"
                  required
                />
              </div>
            ))}

          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg font-medium
                       text-lg shadow-md hover:bg-blue-700 active:scale-95
                       transition-all duration-200"
          >
            Mark as Placed
          </button>

        </form>
      </div>
    </div>
  );
}

export default MarkPlaced;
