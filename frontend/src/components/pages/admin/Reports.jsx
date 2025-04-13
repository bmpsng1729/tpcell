import { useState } from 'react';
import { 
  DocumentChartBarIcon, 
  ChartPieIcon, 
  TableCellsIcon,
  ArrowDownTrayIcon,
  EyeIcon,
  DocumentTextIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  PlusIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  ChevronDownIcon,
  UsersIcon,
  BuildingOfficeIcon,
  BriefcaseIcon,
  ClockIcon,
  CalendarIcon,
  DocumentCheckIcon,
  ShareIcon,
  StarIcon,
  TrashIcon,
  EllipsisVerticalIcon
} from '@heroicons/react/24/outline'

const Reports = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [timeRange, setTimeRange] = useState('yearly');
  const [selectedReport, setSelectedReport] = useState(null);
  const [showReportModal, setShowReportModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [sharedEmails, setSharedEmails] = useState('');

  const reportCards = [
    {
      title: 'Annual Placement Report',
      description: 'Comprehensive analysis of yearly placements with trends and comparisons',
      icon: DocumentChartBarIcon,
      color: 'bg-gradient-to-br from-blue-500 to-indigo-600',
      textColor: 'text-blue-500'
    },
    {
      title: 'Branch-wise Analysis',
      description: 'Detailed performance metrics across all academic branches',
      icon: ChartPieIcon,
      color: 'bg-gradient-to-br from-purple-500 to-fuchsia-600',
      textColor: 'text-purple-500'
    },
    {
      title: 'Company Statistics',
      description: 'Recruiter performance metrics and hiring patterns',
      icon: TableCellsIcon,
      color: 'bg-gradient-to-br from-amber-500 to-orange-600',
      textColor: 'text-amber-500'
    },
  ]

  const recentReports = [
    { 
      id: 1,
      name: '2023 Placement Analysis', 
      date: '15 Jan 2024', 
      type: 'Annual',
      size: '2.4 MB',
      downloads: 42,
      starred: true,
      lastAccessed: '2 hours ago'
    },
    { 
      id: 2,
      name: 'CSE Branch Report Q4 2023', 
      date: '10 Jan 2024', 
      type: 'Branch',
      size: '1.2 MB',
      downloads: 28,
      starred: false,
      lastAccessed: '1 day ago'
    },
    { 
      id: 3,
      name: 'Top Recruiters 2023', 
      date: '5 Jan 2024', 
      type: 'Company',
      size: '1.8 MB',
      downloads: 35,
      starred: true,
      lastAccessed: '3 days ago'
    },
    { 
      id: 4,
      name: 'Internship Statistics 2023', 
      date: '28 Dec 2023', 
      type: 'Internship',
      size: '1.5 MB',
      downloads: 31,
      starred: false,
      lastAccessed: '1 week ago'
    },
  ]

  const quickStats = [
    { name: 'Total Reports', value: '142', icon: DocumentTextIcon, change: '+12%', trend: 'up' },
    { name: 'Active Users', value: '28', icon: UsersIcon, change: '+5%', trend: 'up' },
    { name: 'Companies Tracked', value: '64', icon: BuildingOfficeIcon, change: '+8', trend: 'up' },
    { name: 'Avg. Generation Time', value: '2.4 min', icon: ClockIcon, change: '-0.7 min', trend: 'down' },
  ]

  const upcomingReports = [
    { name: 'Monthly Placement Summary', due: '5 Feb 2024', status: 'pending', assigned: 'Automated' },
    { name: 'Alumni Employment Survey', due: '10 Feb 2024', status: 'in-progress', assigned: 'Team A' },
    { name: 'Recruiter Feedback Analysis', due: '15 Feb 2024', status: 'not-started', assigned: 'Team B' },
  ]

  const analyticsData = {
    placementTrends: [
      { year: '2020', placements: 98 },
      { year: '2021', placements: 112 },
      { year: '2022', placements: 132 },
      { year: '2023', placements: 142 }
    ],
    ctcDistribution: [
      { range: '5-10 LPA', students: 28 },
      { range: '10-15 LPA', students: 45 },
      { range: '15-20 LPA', students: 32 },
      { range: '20+ LPA', students: 18 }
    ],
    branchPerformance: [
      { branch: 'CSE', placements: 52, avgCTC: 14.5 },
      { branch: 'ECE', placements: 38, avgCTC: 12.2 },
      { branch: 'ME', placements: 28, avgCTC: 10.8 },
      { branch: 'CE', placements: 24, avgCTC: 9.5 },
    ]
  }

  const handleReportClick = (report) => {
    setSelectedReport(report);
    setShowReportModal(true);
  }

  const handleShareReport = (report) => {
    setSelectedReport(report);
    setShowShareModal(true);
  }

  const toggleStarReport = (id) => {
    // In a real app, you would update this in your state management
    console.log(`Toggled star for report ${id}`);
  }

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-800 bg-clip-text text-transparent">
            Reports & Analytics
          </h2>
          <p className="text-gray-600">Generate and analyze placement reports and statistics</p>
        </div>
        <div className="flex space-x-3">
          <button className="flex items-center px-4 py-2 bg-white border border-blue-500 text-blue-600 rounded-lg shadow-sm hover:bg-blue-50 transition-all">
            <CalendarIcon className="h-5 w-5 mr-2" />
            Schedule Report
          </button>
          <button className="flex items-center px-4 py-2 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all">
            <PlusIcon className="h-5 w-5 mr-2" />
            New Custom Report
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {quickStats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-5 border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="flex justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">{stat.name}</p>
                <p className="text-2xl font-semibold text-gray-800 mt-1">{stat.value}</p>
              </div>
              <div className={`p-3 rounded-lg ${stat.trend === 'up' ? 'bg-blue-100 text-blue-600' : 'bg-amber-100 text-amber-600'} shadow-inner inline-block h-fit`}>
                <stat.icon className="h-6 w-6" />
              </div>
            </div>
            <p className={`text-xs mt-3 flex items-center ${stat.trend === 'up' ? 'text-green-600' : 'text-amber-600'}`}>
              {stat.trend === 'up' ? (
                <svg className="h-3 w-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12 7a1 1 0 01-1 1H9v1h2a1 1 0 110 2H9v1h2a1 1 0 110 2H9v1a1 1 0 11-2 0v-1H5a1 1 0 110-2h2v-1H5a1 1 0 110-2h2V8H5a1 1 0 010-2h2V5a1 1 0 112 0v1h2a1 1 0 011 1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="h-3 w-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12 13a1 1 0 100-2H9v-1h2a1 1 0 100-2H9V7h2a1 1 0 100-2H9V4a1 1 0 10-2 0v1H5a1 1 0 100 2h2v1H5a1 1 0 100 2h2v1H5a1 1 0 100 2h2v1a1 1 0 102 0v-1h2z" clipRule="evenodd" />
                </svg>
              )}
              {stat.change} from last period
            </p>
          </div>
        ))}
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
        <div className="p-4 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="relative w-full md:w-64">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search reports..."
              className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex items-center space-x-2 w-full md:w-auto">
            <div className="relative">
              <button className="flex items-center px-3 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                <FunnelIcon className="h-5 w-5 mr-2" />
                Filter
                <ChevronDownIcon className="h-4 w-4 ml-2" />
              </button>
            </div>
            
            <div className="flex border border-gray-300 rounded-lg divide-x divide-gray-300">
              {['all', 'annual', 'branch', 'company', 'internship'].map((filter) => (
                <button
                  key={filter}
                  className={`px-3 py-2 text-sm capitalize ${activeFilter === filter ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
            
            <div className="flex border border-gray-300 rounded-lg divide-x divide-gray-300">
              {['weekly', 'monthly', 'yearly'].map((range) => (
                <button
                  key={range}
                  className={`px-3 py-2 text-sm capitalize ${timeRange === range ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                  onClick={() => setTimeRange(range)}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Report Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {reportCards.map((report, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-gray-100">
            <div className="p-5">
              <div className={`p-3 rounded-lg ${report.color} text-white shadow-inner inline-block mb-4`}>
                <report.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{report.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{report.description}</p>
              <div className="flex justify-between items-center">
                <button className={`text-sm font-medium ${report.textColor} hover:underline flex items-center`}>
                  Generate Report
                  <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <div className="flex space-x-2">
                  <button className="text-gray-400 hover:text-blue-500">
                    <ClockIcon className="h-4 w-4" />
                  </button>
                  <button className="text-gray-400 hover:text-blue-500">
                    <ShareIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Upcoming Reports Section */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
        <div className="p-5 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50">
          <h3 className="text-lg font-semibold text-gray-800 flex items-center">
            <DocumentCheckIcon className="h-5 w-5 text-indigo-600 mr-2" />
            Upcoming Reports
          </h3>
        </div>
        <div className="p-5">
          <div className="space-y-4">
            {upcomingReports.map((report, index) => (
              <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${
                    report.status === 'pending' ? 'bg-blue-100 text-blue-600' :
                    report.status === 'in-progress' ? 'bg-amber-100 text-amber-600' :
                    'bg-gray-100 text-gray-600'
                  }`}>
                    <BriefcaseIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">{report.name}</h4>
                    <p className="text-xs text-gray-500">Due: {report.due}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    report.status === 'pending' ? 'bg-blue-50 text-blue-700' :
                    report.status === 'in-progress' ? 'bg-amber-50 text-amber-700' :
                    'bg-gray-50 text-gray-700'
                  }`}>
                    {report.status.replace('-', ' ')}
                  </span>
                  <span className="text-sm text-gray-500">{report.assigned}</span>
                  <button className="text-gray-400 hover:text-blue-500">
                    <EllipsisVerticalIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Reports */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
        <div className="p-5 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50">
          <h3 className="text-lg font-semibold text-gray-800 flex items-center">
            <DocumentTextIcon className="h-5 w-5 text-indigo-600 mr-2" />
            Recent Reports
          </h3>
        </div>
        <div className="p-5">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Report Name</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Generated On</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Size</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Downloads</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Accessed</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentReports.map((report, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div className="flex items-center">
                        <button 
                          onClick={() => toggleStarReport(report.id)}
                          className="mr-2 text-gray-400 hover:text-amber-500"
                        >
                          <StarIcon className={`h-4 w-4 ${report.starred ? 'fill-amber-400 text-amber-400' : ''}`} />
                        </button>
                        <span className="font-medium text-gray-900">{report.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{report.date}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        report.type === 'Annual' ? 'bg-blue-100 text-blue-800' : 
                        report.type === 'Branch' ? 'bg-purple-100 text-purple-800' : 
                        report.type === 'Company' ? 'bg-amber-100 text-amber-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {report.type}
                      </span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{report.size}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                      <span className="font-medium">{report.downloads}</span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                      {report.lastAccessed}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex space-x-2">
                        <button 
                          onClick={() => handleReportClick(report)}
                          className="text-blue-600 hover:text-blue-800 flex items-center"
                        >
                          <EyeIcon className="h-4 w-4 mr-1" />
                          View
                        </button>
                        <button className="text-gray-600 hover:text-gray-800 flex items-center">
                          <ArrowDownTrayIcon className="h-4 w-4 mr-1" />
                          Download
                        </button>
                        <button 
                          onClick={() => handleShareReport(report)}
                          className="text-gray-600 hover:text-gray-800 flex items-center"
                        >
                          <ShareIcon className="h-4 w-4 mr-1" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Analytics Dashboard */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
        <div className="p-5 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
            <h3 className="text-lg font-semibold text-gray-800 flex items-center">
              <ChartBarIcon className="h-5 w-5 text-indigo-600 mr-2" />
              Analytics Dashboard
            </h3>
            <div className="flex items-center space-x-3">
              <div className="flex border border-gray-300 rounded-lg divide-x divide-gray-300">
                {['weekly', 'monthly', 'yearly'].map((range) => (
                  <button
                    key={range}
                    className={`px-3 py-1 text-sm capitalize ${timeRange === range ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                    onClick={() => setTimeRange(range)}
                  >
                    {range}
                  </button>
                ))}
              </div>
              <button className="px-3 py-1 text-sm border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                Export Data
              </button>
            </div>
          </div>
        </div>
        <div className="p-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* Placement Trends */}
            <div className="bg-gray-50 rounded-lg p-4 h-80">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-medium text-gray-800">Placement Trends</h4>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-xs text-gray-600">Placements</span>
                </div>
              </div>
              <div className="flex items-end space-x-2 h-48 mt-6">
                {analyticsData.placementTrends.map((data, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center">
                    <div 
                      className="w-full bg-gradient-to-t from-blue-500 to-blue-300 rounded-t hover:from-blue-600 hover:to-blue-400 transition-all"
                      style={{ height: `${data.placements}px` }}
                    ></div>
                    <span className="text-xs text-gray-500 mt-2">{data.year}</span>
                    <span className="text-xs font-medium text-blue-600">{data.placements}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTC Distribution */}
            <div className="bg-gray-50 rounded-lg p-4 h-80">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-medium text-gray-800">CTC Distribution</h4>
                <div className="flex items-center space-x-2">
                  <CurrencyDollarIcon className="h-4 w-4 text-amber-500" />
                  <span className="text-xs text-gray-600">Package (LPA)</span>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4 h-48 mt-6">
                {analyticsData.ctcDistribution.map((data, index) => (
                  <div key={index} className="flex flex-col items-center justify-end">
                    <div className="w-full flex flex-col items-center">
                      <div 
                        className="w-3/4 bg-gradient-to-t from-amber-500 to-amber-300 rounded-t hover:from-amber-600 hover:to-amber-400 transition-all"
                        style={{ height: `${data.students * 2}px` }}
                      ></div>
                      <span className="text-xs text-gray-500 mt-2">{data.range}</span>
                      <span className="text-xs font-medium text-amber-600">{data.students}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Branch Performance Table */}
          <div className="mt-6 bg-gray-50 rounded-lg p-4">
            <h4 className="font-medium text-gray-800 mb-4">Branch Performance</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Branch</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Placements</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avg. CTC (LPA)</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">% of Total</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {analyticsData.branchPerformance.map((branch, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">{branch.branch}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex items-center">
                          <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                            <div 
                              className="bg-blue-500 h-2 rounded-full" 
                              style={{ width: `${(branch.placements / 142) * 100}%` }}
                            ></div>
                          </div>
                          {branch.placements}
                        </div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{branch.avgCTC}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                        {Math.round((branch.placements / 142) * 100)}%
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Report Preview Modal */}
      {showReportModal && selectedReport && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-xl font-semibold text-gray-800">{selectedReport.name}</h3>
              <button 
                onClick={() => setShowReportModal(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3 space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Report Type</h4>
                    <p className="mt-1 text-sm text-gray-900">{selectedReport.type}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Generated On</h4>
                    <p className="mt-1 text-sm text-gray-900">{selectedReport.date}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">File Size</h4>
                    <p className="mt-1 text-sm text-gray-900">{selectedReport.size}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Downloads</h4>
                    <p className="mt-1 text-sm text-gray-900">{selectedReport.downloads}</p>
                  </div>
                </div>
                <div className="md:w-2/3 bg-gray-50 rounded-lg p-4">
                  <div className="h-64 flex items-center justify-center text-gray-400">
                    Report preview would be displayed here
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 bg-gray-50 rounded-b-xl flex justify-end space-x-3">
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100">
                <ArrowDownTrayIcon className="h-5 w-5 mr-2 inline" />
                Download
              </button>
              <button 
                onClick={() => handleShareReport(selectedReport)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                <ShareIcon className="h-5 w-5 mr-2 inline" />
                Share Report
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Share Report Modal */}
      {showShareModal && selectedReport && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-xl font-semibold text-gray-800">Share "{selectedReport.name}"</h3>
              <button 
                onClick={() => setShowShareModal(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="emails" className="block text-sm font-medium text-gray-700 mb-1">
                    Email addresses
                  </label>
                  <input
                    type="text"
                    id="emails"
                    placeholder="Enter email addresses separated by commas"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    value={sharedEmails}
                    onChange={(e) => setSharedEmails(e.target.value)}
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    You can share this report with multiple people by entering their email addresses
                  </p>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message (optional)
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Add a personal message..."
                  ></textarea>
                </div>
                <div className="flex items-center">
                  <input
                    id="can-edit"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="can-edit" className="ml-2 block text-sm text-gray-700">
                    Allow recipients to edit this report
                  </label>
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 bg-gray-50 rounded-b-xl flex justify-end space-x-3">
              <button 
                onClick={() => setShowShareModal(false)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Share Report
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Reports