import { useState } from 'react';
import { 
  CalendarIcon, 
  CheckCircleIcon, 
  ClockIcon,
  PlusIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  ChevronDownIcon,
  ArrowPathIcon,
  ChartBarIcon,
  ChartPieIcon
} from '@heroicons/react/24/outline'
 import DriveTimeline from './DriveTimeline';

const Drives = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [timeRange, setTimeRange] = useState('monthly');

  const stats = [
    { 
      name: 'Total Drives', 
      value: '24', 
      icon: CalendarIcon, 
      change: '+18.5%',
      color: 'bg-gradient-to-br from-blue-500 to-indigo-600',
      textColor: 'text-blue-500'
    },
    { 
      name: 'Completed', 
      value: '18', 
      icon: CheckCircleIcon, 
      change: '+15.2%',
      color: 'bg-gradient-to-br from-green-500 to-teal-600',
      textColor: 'text-green-500'
    },
    { 
      name: 'Upcoming', 
      value: '6', 
      icon: ClockIcon, 
      change: '+5.7%',
      color: 'bg-gradient-to-br from-amber-500 to-orange-600',
      textColor: 'text-amber-500'
    },
  ]

  const monthlyStats = [
    { month: 'Jan', drives: 3, placements: 42 },
    { month: 'Feb', drives: 2, placements: 35 },
    { month: 'Mar', drives: 4, placements: 58 },
    { month: 'Apr', drives: 5, placements: 72 },
    { month: 'May', drives: 3, placements: 48 },
    { month: 'Jun', drives: 4, placements: 63 },
  ]

  const successRates = [
    { company: 'Microsoft', total: 42, placed: 38, rate: 90 },
    { company: 'Google', total: 38, placed: 35, rate: 92 },
    { company: 'Amazon', total: 35, placed: 30, rate: 86 },
    { company: 'Adobe', total: 28, placed: 25, rate: 89 },
  ]

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-800 bg-clip-text text-transparent">
            Drives Management
          </h2>
          <p className="text-gray-600">Schedule and track campus recruitment drives</p>
        </div>
        <button className="flex items-center px-4 py-2 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all">
          <PlusIcon className="h-5 w-5 mr-2" />
          Schedule New Drive
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
                <div className={`p-3 rounded-lg ${stat.color} text-white shadow-inner`}>
                  <stat.icon className="h-6 w-6" />
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <span className={`text-sm font-medium ${stat.textColor}`}>
                  {stat.change}
                </span>
                <span className="text-xs text-gray-500 ml-1">vs last year</span>
              </div>
            </div>
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
              placeholder="Search drives..."
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
              {['all', 'upcoming', 'completed'].map((filter) => (
                <button
                  key={filter}
                  className={`px-3 py-2 text-sm capitalize ${activeFilter === filter ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
            
            <button className="p-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50">
              <ArrowPathIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Drive Timeline */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
        <div className="p-5 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
            <h3 className="text-lg font-semibold text-gray-800 flex items-center">
              <CalendarIcon className="h-5 w-5 text-indigo-600 mr-2" />
              Drive Timeline
            </h3>
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
          </div>
        </div>
        <div className="p-5">
          <DriveTimeline />
        </div>
      </div>

      {/* Drive Statistics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Monthly Drive Statistics */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
          <div className="p-5 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50">
            <h3 className="text-lg font-semibold text-gray-800 flex items-center">
              <ChartBarIcon className="h-5 w-5 text-indigo-600 mr-2" />
              Monthly Drive Statistics
            </h3>
          </div>
          <div className="p-5 h-64">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Drives Conducted</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Placements</span>
              </div>
            </div>
            <div className="grid grid-cols-6 gap-2 h-40 items-end">
              {monthlyStats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="flex items-end space-x-1 w-full">
                    <div 
                      className="w-full bg-blue-500 rounded-t hover:bg-blue-600 transition-all" 
                      style={{ height: `${stat.drives * 10}%` }}
                    ></div>
                    <div 
                      className="w-full bg-green-500 rounded-t hover:bg-green-600 transition-all" 
                      style={{ height: `${stat.placements / 2}%` }}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-500 mt-1">{stat.month}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Drive Success Rate */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
          <div className="p-5 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50">
            <h3 className="text-lg font-semibold text-gray-800 flex items-center">
              <ChartPieIcon className="h-5 w-5 text-indigo-600 mr-2" />
              Drive Success Rate
            </h3>
          </div>
          <div className="p-5 h-64">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
              <div className="flex items-center justify-center">
                <div className="relative w-32 h-32 rounded-full bg-gray-100 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border-8 border-blue-500 border-r-transparent transform rotate-45"></div>
                  <div className="absolute inset-0 rounded-full border-8 border-green-500 border-l-transparent border-b-transparent transform rotate-12"></div>
                  <div className="absolute inset-0 rounded-full border-8 border-amber-500 border-r-transparent border-t-transparent transform -rotate-15"></div>
                  <span className="text-xl font-bold text-gray-700">86%</span>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-3">
                {successRates.map((company, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">{company.company}</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-16 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full" 
                          style={{ width: `${company.rate}%` }}
                        ></div>
                      </div>
                      <span className="text-xs font-medium text-gray-500">{company.rate}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Drives