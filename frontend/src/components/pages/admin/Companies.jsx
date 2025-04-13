import { useState } from 'react';
import CompanyTable from './CompanyTable'
import { 
  BuildingOfficeIcon, 
  BriefcaseIcon, 
  ArrowTrendingUpIcon,
  PlusIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
  PencilIcon
} from '@heroicons/react/24/outline'

// Mock company data
const mockCompanies = [
  { id: 1, name: 'Microsoft', type: 'placement', role: 'SDE', cgpaCutoff: 7.5, offers: 42, packageRange: { min: 22, max: 45 }, fte: true, ppo: true, lastVisit: '2023-11-15', status: 'active', criteria: 'Technical test + 3 interview rounds' },
  { id: 2, name: 'Google', type: 'placement', role: 'Data Scientist', cgpaCutoff: 8.0, offers: 38, packageRange: { min: 28, max: 50 }, fte: true, ppo: false, lastVisit: '2023-10-28', status: 'active', criteria: 'Coding test + 2 technical interviews + HR round' },
  { id: 3, name: 'Amazon', type: 'placement', role: 'SDE', cgpaCutoff: 7.0, offers: 35, packageRange: { min: 18, max: 35 }, fte: true, ppo: true, lastVisit: '2023-12-05', status: 'active', criteria: 'Online assessment + 3 interview rounds' },
  { id: 4, name: 'Adobe', type: 'placement', role: 'UX Designer', cgpaCutoff: 7.2, offers: 28, packageRange: { min: 16, max: 30 }, fte: true, ppo: false, lastVisit: '2023-09-18', status: 'inactive', criteria: 'Portfolio review + Design challenge + 2 interviews' },
  { id: 5, name: 'Goldman Sachs', type: 'placement', role: 'Product Manager', cgpaCutoff: 7.8, offers: 25, packageRange: { min: 24, max: 32 }, fte: true, ppo: false, lastVisit: '2023-08-22', status: 'inactive', criteria: 'Case study + 2 technical interviews + HR round' },
  { id: 6, name: 'Intel', type: 'internship', role: 'ML Engineer', cgpaCutoff: 7.5, offers: 22, packageRange: { min: 12, max: 20 }, fte: false, ppo: true, lastVisit: '2023-11-30', status: 'active', criteria: 'Technical test + ML case study + Interview' },
  { id: 7, name: 'NVIDIA', type: 'placement', role: 'DevOps', cgpaCutoff: 7.0, offers: 20, packageRange: { min: 22, max: 35 }, fte: true, ppo: false, lastVisit: '2023-10-10', status: 'active', criteria: 'System design + Coding round + 2 interviews' },
  { id: 8, name: 'JP Morgan', type: 'placement', role: 'Full Stack', cgpaCutoff: 7.2, offers: 18, packageRange: { min: 18, max: 25 }, fte: true, ppo: false, lastVisit: '2023-09-05', status: 'inactive', criteria: 'Online test + 2 technical interviews' },
  { id: 9, name: 'Apple', type: 'placement', role: 'SDE', cgpaCutoff: 8.0, offers: 15, packageRange: { min: 30, max: 50 }, fte: true, ppo: false, lastVisit: '2023-07-20', status: 'active', criteria: 'Algorithm test + System design + 3 interviews' },
  { id: 10, name: 'Netflix', type: 'placement', role: 'Data Scientist', cgpaCutoff: 8.5, offers: 12, packageRange: { min: 35, max: 60 }, fte: true, ppo: false, lastVisit: '2023-06-15', status: 'active', criteria: 'Data analysis challenge + ML system design + 3 interviews' },
];

// Company logos
const companyLogos = {
  'Microsoft': 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
  'Google': 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
  'Amazon': 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
  'Adobe': 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Systems_logo.svg',
  'Goldman Sachs': 'https://upload.wikimedia.org/wikipedia/commons/6/61/Goldman_Sachs.svg',
  'Intel': 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282006-2020%29.svg',
  'NVIDIA': 'https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg',
  'JP Morgan': 'https://upload.wikimedia.org/wikipedia/commons/3/36/JPMorgan_Chase_logo.svg',
  'Apple': 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
  'Netflix': 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
};

const Companies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [showAddCompanyModal, setShowAddCompanyModal] = useState(false);
  const [companies, setCompanies] = useState(mockCompanies);
  const [editingCompany, setEditingCompany] = useState(null);
  
  // Form state
  const [newCompany, setNewCompany] = useState({
    name: '',
    type: 'placement',
    role: 'SDE',
    cgpaCutoff: '',
    offers: '',
    packageRange: { min: '', max: '' },
    fte: false,
    ppo: false,
    lastVisit: '',
    status: 'active',
    criteria: ''
  });

  // Calculate stats from company data
  const totalCompanies = companies.length;
  const activeRecruiters = companies.filter(c => c.status === 'active').length;
  const avgCTC = companies.reduce((sum, company) => {
    return sum + (company.packageRange.min + company.packageRange.max) / 2;
  }, 0) / companies.length;
  
  const stats = [
    { 
      name: 'Total Companies', 
      value: totalCompanies, 
      icon: BuildingOfficeIcon,
    },
    { 
      name: 'Active Recruiters', 
      value: activeRecruiters, 
      icon: BriefcaseIcon,
    },
    { 
      name: 'Avg. CTC Offered', 
      value: `${avgCTC.toFixed(1)} LPA`, 
      icon: ArrowTrendingUpIcon,
    },
  ];

  // Get top recruiters based on offers
  const topRecruiters = [...companies]
    .sort((a, b) => b.offers - a.offers)
    .slice(0, 8)
    .map(company => ({
      ...company,
      ctc: `${((company.packageRange.min + company.packageRange.max) / 2).toFixed(1)} LPA`
    }));

  // Handle input changes for the form
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === 'min' || name === 'max') {
      setNewCompany(prev => ({
        ...prev,
        packageRange: {
          ...prev.packageRange,
          [name]: value
        }
      }));
    } else {
      setNewCompany(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (editingCompany) {
      // Update existing company
      setCompanies(companies.map(company => 
        company.id === editingCompany.id ? { ...newCompany, id: editingCompany.id } : company
      ));
    } else {
      // Add new company
      const newCompanyWithId = {
        ...newCompany,
        id: companies.length > 0 ? Math.max(...companies.map(c => c.id)) + 1 : 1
      };
      setCompanies([...companies, newCompanyWithId]);
    }
    
    setShowAddCompanyModal(false);
    resetForm();
  };

  // Reset form to initial state
  const resetForm = () => {
    setNewCompany({
      name: '',
      type: 'placement',
      role: 'SDE',
      cgpaCutoff: '',
      offers: '',
      packageRange: { min: '', max: '' },
      fte: false,
      ppo: false,
      lastVisit: '',
      status: 'active',
      criteria: ''
    });
    setEditingCompany(null);
  };

  // Edit a company
  const handleEdit = (company) => {
    setEditingCompany(company);
    setNewCompany({
      name: company.name,
      type: company.type,
      role: company.role,
      cgpaCutoff: company.cgpaCutoff,
      offers: company.offers,
      packageRange: { ...company.packageRange },
      fte: company.fte,
      ppo: company.ppo,
      lastVisit: company.lastVisit,
      status: company.status,
      criteria: company.criteria
    });
    setShowAddCompanyModal(true);
  };

  // Filter companies based on search and status filter
  const filteredCompanies = companies.filter(company => {
    const matchesSearch = company.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         company.role.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatusFilter = statusFilter === 'all' || company.status === statusFilter;
    
    return matchesSearch && matchesStatusFilter;
  });

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-800 bg-clip-text text-transparent">
            Companies Management
          </h2>
          <p className="text-gray-600">Manage and track company recruitment data</p>
        </div>
        <button 
          onClick={() => setShowAddCompanyModal(true)}
          className="flex items-center px-4 py-2 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all"
        >
          <PlusIcon className="h-5 w-5 mr-2" />
          Add New Company
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-gray-100">
            <div className="p-5">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">{stat.name}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                </div>
                <div className="p-3 rounded-lg bg-gradient-to-br from-blue-100 to-indigo-100 text-indigo-600 shadow-inner">
                  <stat.icon className="h-6 w-6" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Top Recruiters Section */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
        <div className="p-5 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50">
          <h3 className="text-lg font-semibold text-gray-800 flex items-center">
            <BriefcaseIcon className="h-5 w-5 text-indigo-600 mr-2" />
            Top Recruiters (2023-24)
          </h3>
        </div>
        <div className="p-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {topRecruiters.map((company) => (
            <div key={company.id} className="group relative p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
              <div className="relative">
                {companyLogos[company.name] ? (
                  <div className="h-12 w-12 mx-auto mb-2 flex items-center justify-center">
                    <img 
                      src={companyLogos[company.name]} 
                      alt={company.name} 
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                ) : (
                  <div className="h-12 w-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="font-bold text-indigo-600">{company.name.charAt(0)}</span>
                  </div>
                )}
                <h4 className="font-medium text-gray-900 truncate">{company.name}</h4>
                <p className="text-sm text-gray-500">{company.offers} offers</p>
                <p className="text-sm font-medium text-blue-600">{company.ctc}</p>
                <p className="text-xs text-gray-500 mt-1">CGPA: {company.cgpaCutoff}+</p>
                <p className="text-xs text-gray-400 mt-1">Last: {company.lastVisit}</p>
                <button 
                  onClick={() => handleEdit(company)}
                  className="absolute top-0 right-0 p-1 text-gray-400 hover:text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <PencilIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Search and Status Filter */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
        <div className="p-4 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="relative w-full md:w-64">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search companies or roles..."
              className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Status filter buttons */}
            <div className="flex border border-gray-300 rounded-lg divide-x divide-gray-300">
              <button
                className={`px-4 py-2 text-sm ${statusFilter === 'all' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                onClick={() => setStatusFilter('all')}
              >
                All Companies
              </button>
              <button
                className={`px-4 py-2 text-sm ${statusFilter === 'active' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                onClick={() => setStatusFilter('active')}
              >
                Active Only
              </button>
              <button
                className={`px-4 py-2 text-sm ${statusFilter === 'inactive' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                onClick={() => setStatusFilter('inactive')}
              >
                Inactive Only
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Company Table */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
        <div className="p-5 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex items-center">
              <BuildingOfficeIcon className="h-5 w-5 text-indigo-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-800">
                {statusFilter === 'all' ? 'All Companies' : 
                 statusFilter === 'active' ? 'Active Companies' : 
                 'Inactive Companies'} ({filteredCompanies.length})
              </h3>
            </div>
          </div>
        </div>
        <div className="p-5">
          <CompanyTable companies={filteredCompanies} onEdit={handleEdit} />
        </div>
      </div>

      {/* Add/Edit Company Modal */}
      {showAddCompanyModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center border-b pb-4">
                <h3 className="text-xl font-bold text-gray-900">
                  {editingCompany ? 'Edit Company' : 'Add New Company'}
                </h3>
                <button 
                  onClick={() => {
                    setShowAddCompanyModal(false);
                    resetForm();
                  }}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>
              
              <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Company Name*</label>
                    <input
                      type="text"
                      name="name"
                      value={newCompany.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Status*</label>
                    <select
                      name="status"
                      value={newCompany.status}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      required
                    >
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Type*</label>
                    <select
                      name="type"
                      value={newCompany.type}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      required
                    >
                      <option value="placement">Placement</option>
                      <option value="internship">Internship</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Role*</label>
                    <input
                      type="text"
                      name="role"
                      value={newCompany.role}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">CGPA Cutoff*</label>
                    <input
                      type="number"
                      name="cgpaCutoff"
                      step="0.1"
                      min="0"
                      max="10"
                      value={newCompany.cgpaCutoff}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Package Range (LPA)*</label>
                    <div className="flex space-x-2">
                      <input
                        type="number"
                        name="min"
                        placeholder="Min"
                        value={newCompany.packageRange.min}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                      <span className="flex items-center">to</span>
                      <input
                        type="number"
                        name="max"
                        placeholder="Max"
                        value={newCompany.packageRange.max}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Number of Offers*</label>
                    <input
                      type="number"
                      name="offers"
                      min="0"
                      value={newCompany.offers}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Campus Visit*</label>
                    <input
                      type="date"
                      name="lastVisit"
                      value={newCompany.lastVisit}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Selection Criteria</label>
                    <textarea
                      name="criteria"
                      value={newCompany.criteria}
                      onChange={handleInputChange}
                      rows="3"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Describe the selection process and criteria..."
                    />
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        name="fte"
                        checked={newCompany.fte}
                        onChange={handleInputChange}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label className="ml-2 block text-sm text-gray-700">Provides FTE</label>
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        name="ppo"
                        checked={newCompany.ppo}
                        onChange={handleInputChange}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label className="ml-2 block text-sm text-gray-700">Provides PPO</label>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setShowAddCompanyModal(false);
                      resetForm();
                    }}
                    className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    {editingCompany ? 'Update Company' : 'Add Company'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Companies