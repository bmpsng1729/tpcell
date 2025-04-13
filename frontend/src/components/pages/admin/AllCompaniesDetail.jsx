import React, { useState } from 'react';

function AllCompaniesDetail() {
  const [companies, setCompanies] = useState([]);

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/v1/company/showallcompanies', {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      setCompanies(data.allCompany); // Correctly update state with company array
      console.log(data.allCompany);
    } catch (error) {
      console.error("Error fetching companies:", error);
    }
  };

  return (
    <div>
      <div className='flex gap-10 justify-center'>
        <h1 className='font-bold text-4xl text-center'>Top Visiting 20 Companies</h1>
        <button
          onClick={handleSubmit}
          className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 rounded-lg text-lg px-4 py-1.5 font-bold hover:cursor-pointer"
        >
          Show All
        </button>
      </div>

      {/* Table to display fetched companies */}
      <div>
        <table className="table-auto w-full border-collapse border border-gray-300 shadow-lg rounded-lg overflow-hidden mt-2">
          <caption className="font-[Rock Salt] italic text-purple-700 p-5 text-right tracking-wide caption-bottom ">
            Company Salary Details 
          </caption>
          <thead>
            <tr className="bg-gradient-to-r from-blue-500 to-purple-500 text-white uppercase text-sm">
              <th className="border border-gray-400 px-6 py-3">Name</th>
              <th className="border border-gray-400 px-6 py-3">Visiting Since</th>
              <th className="border border-gray-400 px-6 py-3">CTC</th>
              <th className="border border-gray-400 px-6 py-3">Base Salary</th>
            </tr>
          </thead>
          <tbody>
            {companies.length > 0 ? (
              companies.map((company, index) => (
                <tr key={index} className="odd:bg-blue-100 even:bg-purple-100 hover:bg-blue-200 transition">
                  <td className="border border-gray-400 px-6 py-3 text-center text-blue-700 font-semibold">{company.name}</td>
                  <td className="border border-gray-400 px-6 py-3 text-center text-purple-700 font-semibold">{company.visitingSince}</td>
                  <td className="border border-gray-400 px-6 py-3 text-center text-green-700 font-semibold">{company.ctc}</td>
                  <td className="border border-gray-400 px-6 py-3 text-center text-red-700 font-semibold">{company.baseSalary}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="border border-gray-400 px-6 py-3 text-center text-gray-600">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllCompaniesDetail;
