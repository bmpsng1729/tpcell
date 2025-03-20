import React from "react";

const Results = () => {
  const results = [
    {
      company: "Tech Corp",
      oaResult: "Upcoming",
      codingRound: "Pending",
      hrRound: "On 2025-04-20",
      finalSelected: "No"
    },
    {
      company: "Innovate Ltd",
      oaResult: "Within 2 days",
      codingRound: "On 2025-04-10",
      hrRound: "Pending",
      finalSelected: "Yes"
    },
    {
      company: "Dev Solutions",
      oaResult: "Upcoming",
      codingRound: "On 2025-04-15",
      hrRound: "Pending",
      finalSelected: "No"
    },
    {
      company: "CodeWorks",
      oaResult: "Within 2 days",
      codingRound: "Pending",
      hrRound: "On 2025-04-22",
      finalSelected: "Yes"
    }
  ];

  return (
    <div className="w-full min-h-screen p-10 bg-gray-50 text-gray-800">
      <h1 className="text-3xl font-bold text-center mb-6">Results Status</h1>
      <div className="overflow-x-auto">
        <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-4 text-left text-gray-700">Company</th>
              <th className="p-4 text-left text-gray-700">OA Result</th>
              <th className="p-4 text-left text-gray-700">Coding Round</th>
              <th className="p-4 text-left text-gray-700">HR Round</th>
              <th className="p-4 text-left text-gray-700">Final Selected</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result, index) => (
              <tr key={index} className="border-b hover:bg-gray-100">
                <td className="p-4">{result.company}</td>
                <td className="p-4">{result.oaResult}</td>
                <td className="p-4">{result.codingRound}</td>
                <td className="p-4">{result.hrRound}</td>
                <td className={`p-4 font-semibold ${result.finalSelected === "Yes" ? "text-green-600" : "text-red-600"}`}>
                  {result.finalSelected}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Results;
