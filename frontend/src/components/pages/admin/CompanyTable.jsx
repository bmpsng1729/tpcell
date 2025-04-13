import { useState } from "react";

const CompanyTable = ({ companies }) => {
  const [companyList, setCompanyList] = useState(companies && companies.length > 0 ? companies : [
    { name: "Microsoft", offers: 42, ctc: "24.5 LPA", visits: 5, cgpaCriteria: 8.0, lastVisit: "2023-11-15", status: "active", type: "placement" },
    { name: "Google", offers: 38, ctc: "30.2 LPA", visits: 4, cgpaCriteria: 8.5, lastVisit: "2023-10-28", status: "active", type: "placement" },
    // Add more...
  ]);

  const [editingCompany, setEditingCompany] = useState(null);

  const handleDelete = (index) => {
    const newList = [...companyList];
    newList.splice(index, 1);
    setCompanyList(newList);
  };

  const handleEdit = (company, index) => {
    setEditingCompany({ ...company, index });
  };

  const handleSave = () => {
    const updated = [...companyList];
    updated[editingCompany.index] = { ...editingCompany };
    delete updated[editingCompany.index].index;
    setCompanyList(updated);
    setEditingCompany(null);
  };

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
  };

  const StatusBadge = ({ status }) => {
    const statusClasses = {
      active: "bg-green-100 text-green-800",
      inactive: "bg-red-100 text-red-800"
    };
    return (
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusClasses[status] || 'bg-gray-100 text-gray-800'}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  const TypeBadge = ({ type }) => {
    const typeClasses = {
      placement: "bg-blue-100 text-blue-800",
      internship: "bg-purple-100 text-purple-800"
    };
    return (
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${typeClasses[type] || 'bg-gray-100 text-gray-800'}`}>
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </span>
    );
  };

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
      <div className="h-[500px] overflow-y-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50 sticky top-0 z-10">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Company</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Offers</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">CTC</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Visits</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">CGPA</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Last Visit</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {companyList.map((company, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap flex items-center gap-2">
                  <div className="h-10 w-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                    {company.name.charAt(0)}
                  </div>
                  <span>{company.name}</span>
                </td>
                <td className="px-6 py-4"><TypeBadge type={company.type} /></td>
                <td className="px-6 py-4"><StatusBadge status={company.status} /></td>
                <td className="px-6 py-4">{company.offers}</td>
                <td className="px-6 py-4">{company.ctc}</td>
                <td className="px-6 py-4">{company.visits}</td>
                <td className="px-6 py-4">{company.cgpaCriteria}</td>
                <td className="px-6 py-4">{formatDate(company.lastVisit)}</td>
                <td className="px-6 py-4 space-x-2">
                  <button
                    onClick={() => handleEdit(company, index)}
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="text-red-600 hover:underline text-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit Modal */}
      {editingCompany && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-lg">
            <h2 className="text-lg font-bold mb-4">Edit Company</h2>

            <div className="grid grid-cols-2 gap-4">
              <input type="text" value={editingCompany.name} onChange={(e) => setEditingCompany({ ...editingCompany, name: e.target.value })} className="border p-2 rounded" placeholder="Name" />
              <input type="number" value={editingCompany.offers} onChange={(e) => setEditingCompany({ ...editingCompany, offers: Number(e.target.value) })} className="border p-2 rounded" placeholder="Offers" />
              <input type="text" value={editingCompany.ctc} onChange={(e) => setEditingCompany({ ...editingCompany, ctc: e.target.value })} className="border p-2 rounded" placeholder="CTC" />
              <input type="number" value={editingCompany.visits} onChange={(e) => setEditingCompany({ ...editingCompany, visits: Number(e.target.value) })} className="border p-2 rounded" placeholder="Visits" />
              <input type="number" value={editingCompany.cgpaCriteria} onChange={(e) => setEditingCompany({ ...editingCompany, cgpaCriteria: Number(e.target.value) })} className="border p-2 rounded" placeholder="CGPA Criteria" />
              <input type="date" value={editingCompany.lastVisit} onChange={(e) => setEditingCompany({ ...editingCompany, lastVisit: e.target.value })} className="border p-2 rounded" />
              <select value={editingCompany.status} onChange={(e) => setEditingCompany({ ...editingCompany, status: e.target.value })} className="border p-2 rounded">
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
              <select value={editingCompany.type} onChange={(e) => setEditingCompany({ ...editingCompany, type: e.target.value })} className="border p-2 rounded">
                <option value="placement">Placement</option>
                <option value="internship">Internship</option>
              </select>
            </div>

            <div className="mt-4 flex justify-end gap-2">
              <button onClick={() => setEditingCompany(null)} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">Cancel</button>
              <button onClick={handleSave} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanyTable;
