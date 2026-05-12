// ManualEmailInput.jsx
import React from "react";

function ManualEmailInput({ manualEmails, setManualEmails }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-3">
      <h3 className="text-sm font-semibold mb-1">Add Manual Emails</h3>
      <p className="text-[11px] text-gray-500 mb-2">
        Enter extra email addresses (comma or new line separated).
      </p>
      <textarea
        value={manualEmails}
        onChange={(e) => setManualEmails(e.target.value)}
        rows={3}
        placeholder={
          "student1@example.com, student2@example.com\nor one email per line"
        }
        className="w-full border border-gray-300 rounded-md px-2 py-1.5 text-xs
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                   resize-y"
      />
    </div>
  );
}

export default ManualEmailInput;
