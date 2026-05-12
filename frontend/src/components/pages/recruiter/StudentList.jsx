// StudentList.jsx
import React from "react";

function StudentList({ students, selectedIds, onToggle, onToggleAll }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-3 max-h-64 overflow-y-auto">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold">
          Students ({students.length})
        </h3>
        {students.length > 0 && (
          <button
            onClick={onToggleAll}
            className="text-xs px-2 py-1 border border-gray-300 rounded-md
                       bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            Select / Unselect All
          </button>
        )}
      </div>

      {students.length === 0 ? (
        <p className="text-xs text-gray-500">
          No students match this filter.
        </p>
      ) : (
        <div className="flex flex-col gap-2">
          {students.map((s) => (
            <label
              key={s.id}
              className="flex items-start gap-2 p-1 rounded hover:bg-gray-50 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selectedIds.includes(s.id)}
                onChange={() => onToggle(s.id)}
                className="mt-0.5"
              />
              <div>
                <div className="text-sm font-medium text-gray-800">
                  {s.name}
                </div>
                <div className="text-xs text-gray-600">
                  {s.email} • {s.branch} • CGPA {s.cgpa}
                </div>
              </div>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

export default StudentList;
