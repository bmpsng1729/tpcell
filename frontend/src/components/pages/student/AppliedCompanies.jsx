import React from "react";

const AppliedCompaniesTable = () => {
  const appliedCompanies = [
    { name: "Tech Corp", ctc: "12 LPA", type: "Product-Based", oaDate: "2025-04-15" },
    { name: "Innovate Ltd", ctc: "10 LPA", type: "MNC", oaDate: "2025-03-28" },
    { name: "Dev Solutions", ctc: "8 LPA", type: "Startup", oaDate: "2025-05-10" },
    { name: "CodeWorks", ctc: "15 LPA", type: "Product-Based", oaDate: "2025-04-05" }
  ];

  return (
    <div className="w-full min-h-screen p-10 bg-gray-50 text-gray-800">
      <h1 className="text-3xl font-bold text-center mb-6">Applied Companies</h1>
      <div className="overflow-x-auto">
        <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-4 text-left text-gray-700">Company Name</th>
              <th className="p-4 text-left text-gray-700">CTC</th>
              <th className="p-4 text-left text-gray-700">Type</th>
              <th className="p-4 text-left text-gray-700">OA Date</th>
            </tr>
          </thead>
          <tbody>
            {appliedCompanies.map((company, index) => (
              <tr key={index} className="border-b hover:bg-gray-100">
                <td className="p-4">{company.name}</td>
                <td className="p-4">{company.ctc}</td>
                <td className="p-4">{company.type}</td>
                <td className="p-4">{company.oaDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppliedCompaniesTable;
// i have to sort all the company names based on oa data in asc