// RecipientFilters.jsx
import React from "react";

function RecipientFilters({
  branchFilter,
  setBranchFilter,
  minCgpa,
  setMinCgpa,
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-3">
      <h3 className="text-sm font-semibold mb-2">Filter Students</h3>

      <div className="mb-2">
        <label className="block text-xs font-medium text-gray-700 mb-1">
          Branch
        </label>
        <select
          value={branchFilter}
          onChange={(e) => setBranchFilter(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-2 py-1.5 text-xs
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="ALL">All</option>
          <option value="CSE">CSE</option>
          <option value="ECE">ECE</option>
          <option value="EE">EE</option>
          <option value="ME">ME</option>
          {/* Add more branches if needed */}
        </select>
      </div>

      <div>
        <label className="block text-xs font-medium text-gray-700 mb-1">
          Min CGPA
        </label>
        <input
          type="number"
          step="0.1"
          value={minCgpa}
          onChange={(e) => setMinCgpa(e.target.value)}
          placeholder="e.g. 7.0"
          className="w-full border border-gray-300 rounded-md px-2 py-1.5 text-xs
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
    </div>
  );
}

export default RecipientFilters;
