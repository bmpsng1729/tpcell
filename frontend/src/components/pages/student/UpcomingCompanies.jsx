import React from "react";

const UpcomingCompanies = () => {
  const upcomingCompanies = [
    { name: "Tech Corp", type: "Product-Based", ctc: "12 LPA" },
    { name: "Innovate Ltd", type: "MNC", ctc: "10 LPA" },
    { name: "Dev Solutions", type: "Startup", ctc: "8 LPA" },
    { name: "CodeWorks", type: "Product-Based", ctc: "15 LPA" }
  ];

  return (
    <div className="w-full min-h-screen p-10 bg-gray-50 text-gray-800">
      <h1 className="text-3xl font-bold text-center mb-6">Upcoming Companies</h1>
      <div className="overflow-x-auto">
        <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-4 text-left text-gray-700">Company Name</th>
              <th className="p-4 text-left text-gray-700">Type</th>
              <th className="p-4 text-left text-gray-700">CTC</th>
            </tr>
          </thead>
          <tbody>
            {upcomingCompanies.map((company, index) => (
              <tr key={index} className="border-b hover:bg-gray-100">
                <td className="p-4">{company.name}</td>
                <td className="p-4">{company.type}</td>
                <td className="p-4">{company.ctc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UpcomingCompanies;
