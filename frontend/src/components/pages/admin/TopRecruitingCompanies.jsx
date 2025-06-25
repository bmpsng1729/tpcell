import React, { useEffect, useState } from 'react';
import { BriefcaseIcon } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

function TopRecruitingCompanies() {
  const [topCompanies, setTopCompanies] = useState([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/v1/admin/topcompanies", {
          method: "GET",
          headers: { 'Content-Type': 'application/json' },
        });

        if (!response.ok) {
          toast.error("Error in fetching top recruiting companies");
          return;
        }

        const data = await response.json();
        setTopCompanies(data.companies);
      } catch (err) {
        toast.error("Error in finding top recruiting companies");
        console.error("Fetch error:", err);
      }
    };

    fetchCompanies();
  }, []);

  return (
    <div>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
        <div className="p-5 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50">
          <h3 className="text-lg font-semibold text-gray-800 flex items-center">
            <BriefcaseIcon className="h-5 w-5 text-indigo-600 mr-2" />
            Top Recruiting Companies
          </h3>
        </div>
        <div className="p-5">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Visiting Since</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Count</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CTC</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Base Salary</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {topCompanies.map((company, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">{company.name}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{company.visitingSince}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{company.placedStudents.length}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm font-semibold text-blue-600">{company.ctc}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm font-semibold text-blue-600">{company.baseSalary}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopRecruitingCompanies;
