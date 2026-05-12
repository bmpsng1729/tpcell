// AdminEmailDashboard.jsx
import React, { useEffect, useMemo, useState } from "react";
import EmailEditor from "./EmailEditor";
import RecipientFilters from "./RecipientFilters";
import StudentList from "./StudentList";
import ManualEmailInput from "./ManualEmailInput";

function AdminEmailDashboard() {
  const [branchFilter, setBranchFilter] = useState("ALL");
  const [minCgpa, setMinCgpa] = useState("");
  const [selectedStudentIds, setSelectedStudentIds] = useState([]);

  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [manualEmails, setManualEmails] = useState("");

  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  // 👉 NEW: students from backend
  const [students, setStudents] = useState([]);

  // 👉 Fetch students once from backend
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await fetch(
          "http://localhost:4000/api/v1/admin/students"
        );
        const data = await res.json();

        if (res.ok && data.success) {
          // normalize: use `id` instead of `_id` to match existing UI
          const normalized = (data.students || []).map((s) => ({
            id: s._id,
            name: s.name,
            email: s.email,
            branch: s.branch,
            cgpa: s.cgpa,
          }));
          setStudents(normalized);
        } else {
          setStatusMessage(data.message || "Failed to load students.");
        }
      } catch (err) {
        setStatusMessage("Error loading students: " + err.message);
      }
    };

    fetchStudents();
  }, []);

  // Same filtering logic, but now on `students` from backend
  const filteredStudents = useMemo(() => {
    return students.filter((s) => {
      const branchOk = branchFilter === "ALL" || s.branch === branchFilter;
      const cgpaOk = minCgpa === "" || s.cgpa >= Number(minCgpa || 0);
      return branchOk && cgpaOk;
    });
  }, [students, branchFilter, minCgpa]);

  const toggleStudent = (id) => {
    setSelectedStudentIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const toggleAllVisible = () => {
    const visibleIds = filteredStudents.map((s) => s.id);
    const allSelected = visibleIds.every((id) =>
      selectedStudentIds.includes(id)
    );
    if (allSelected) {
      setSelectedStudentIds((prev) =>
        prev.filter((id) => !visibleIds.includes(id))
      );
    } else {
      setSelectedStudentIds((prev) =>
        Array.from(new Set([...prev, ...visibleIds]))
      );
    }
  };

  const handleSend = async () => {
    setStatusMessage("");

    // 👉 Use `students` from backend instead of MOCK_STUDENTS
    const selectedEmails = students
      .filter((s) => selectedStudentIds.includes(s.id))
      .map((s) => s.email);

    const manualEmailsArray = manualEmails
      .split(/[\n,]/)
      .map((e) => e.trim())
      .filter((e) => e);

    const recipients = Array.from(
      new Set([...selectedEmails, ...manualEmailsArray])
    );

    if (!subject.trim()) {
      setStatusMessage("Please enter a subject.");
      return;
    }
    if (!body.trim()) {
      setStatusMessage("Please write the email body.");
      return;
    }
    if (recipients.length === 0) {
      setStatusMessage(
        "Please select at least one student or add manual emails."
      );
      return;
    }

    setIsSending(true);
    try {
      const res = await fetch(
        "http://localhost:4000/api/v1/admin/send-email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            subject,
            body,
            recipients,
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        setStatusMessage(data.message || "Error sending emails.");
      } else {
        setStatusMessage(
          data.message || `Email queued to ${recipients.length} recipient(s).`
        );
      }
    } catch (err) {
      setStatusMessage("Error sending emails: " + err.message);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 font-sans">
      <h2 className="text-2xl font-semibold mb-4">Admin Email Dashboard</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start">
        {/* Left: Editor */}
        <div className="lg:col-span-2 bg-white border border-gray-200 rounded-lg shadow-sm p-4">
          <EmailEditor
            subject={subject}
            setSubject={setSubject}
            body={body}
            setBody={setBody}
          />
        </div>

        {/* Right: Filters + list + manual input */}
        <div className="flex flex-col gap-3">
          <RecipientFilters
            branchFilter={branchFilter}
            setBranchFilter={setBranchFilter}
            minCgpa={minCgpa}
            setMinCgpa={setMinCgpa}
          />

          <StudentList
            students={filteredStudents}
            selectedIds={selectedStudentIds}
            onToggle={toggleStudent}
            onToggleAll={toggleAllVisible}
          />

          <ManualEmailInput
            manualEmails={manualEmails}
            setManualEmails={setManualEmails}
          />
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <button
          onClick={handleSend}
          disabled={isSending}
          className={`inline-flex items-center px-4 py-2 rounded-md text-sm font-semibold text-white
          ${
            isSending
              ? "bg-blue-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          } 
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1`}
        >
          {isSending ? "Sending..." : "Send Email"}
        </button>

      {statusMessage && (
        <p className="text-sm text-gray-700">{statusMessage}</p>
      )}
      </div>
    </div>
  );
}

export default AdminEmailDashboard;
////