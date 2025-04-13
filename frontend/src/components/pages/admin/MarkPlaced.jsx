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
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch("http://localhost:4000/api/v1/admin/markplaced", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        const data = await response.json();

        if (!response.ok) {
            // If the backend sends multiple error messages
            if (data.errors && Array.isArray(data.errors)) {
                data.errors.forEach((error) => {
                    toast.error(error);  // Show each error separately
                });
            } 
            else {
                toast.error(data.message || "Something went wrong");
            }
        }
         else {
            toast.success(data.message || "Student marked as placed successfully!");
        }
    } catch (err) {
        toast.error(err.message || "Error in submitting form");
    }
};

  return (
    <div className="flex items-center justify-center  bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-xl font-semibold text-center ">Impose SIP</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input 
                type="email" 
                name="email" 
                placeholder="College Email" 
                value={formData.email} 
                onChange={handleChange} 
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Company</label>
              <input 
                type="text" 
                name="company" 
                placeholder="Company Name" 
                value={formData.company} 
                onChange={handleChange} 
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Description</label>
              <input 
                type="text" 
                name="description" 
                placeholder="Description" 
                value={formData.description} 
                onChange={handleChange} 
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Role</label>
              <input 
                type="text" 
                name="role" 
                placeholder="Role" 
                value={formData.role} 
                onChange={handleChange} 
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Placement Type</label>
              <input 
                type="text" 
                name="placementType" 
                placeholder="Placement Type" 
                value={formData.placementType} 
                onChange={handleChange} 
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">CTC (in LPA)</label>
              <input 
                type="number" 
                name="ctc" 
                placeholder="CTC (in LPA)" 
                value={formData.ctc} 
                onChange={handleChange} 
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>
          <button type="submit" className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600">
            Mark as Placed
          </button>
        </form>
      </div>
    </div>
  );
}

export default MarkPlaced;
