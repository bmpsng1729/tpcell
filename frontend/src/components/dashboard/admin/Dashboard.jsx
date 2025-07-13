import { useEffect, useState } from 'react';
import {
  ChartBarIcon,
  UsersIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  MagnifyingGlassIcon,
  ArrowPathIcon,
  BellIcon,
  UserCircleIcon,
  ChevronDownIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import StatsCard from '../../pages/admin/StatsCard';
import UpcomingDrives from '../../pages/admin/UpcomingDrives';
import StudentStats from '../../pages/admin/StudentStats';
import CompanyStats from '../../pages/admin/CompanyStats';
import BranchStats from "../../pages/admin/BranchStats";
import StudentDetails from '../../pages/admin/StudentDetails';
import Footer from '../../pages/admin/Footer';
import PieChart from '../../pages/admin/PieChart';
import TopRecruitingCompanies from '../../pages/admin/TopRecruitingCompanies';
import RecentPlacements from '../../pages/admin/RecentPlacements';

// Register ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [notificationsOpen, setNotificationsOpen]  = useState(false);
  const recentActivities = [
    {
      id: 1,
      type: 'placement',
      title: 'Microsoft drive completed',
      description: '32 offers made with highest package of 42 LPA',
      time: '2 hours ago',
      read: false
    },
    {
      id: 2,
      type: 'drive',
      title: 'Google drive scheduled',
      description: 'Scheduled for 25th January 2024',
      time: '1 day ago',
      read: true
    },
    {
      id: 3,
      type: 'student',
      title: 'New student registration',
      description: '142 new students registered for placements',
      time: '2 days ago',
      read: true
    },
    {
      id: 4,
      type: 'company',
      title: 'New company onboarded',
      description: 'Tesla registered for campus recruitment',
      time: '3 days ago',
      read: false
    },
    {
      id: 5,
      type: 'report',
      title: 'Monthly report generated',
      description: 'December placement report available',
      time: '1 week ago',
      read: true
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 mt-10">
      {/* 🌟 Top Navigation Bar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-blue-800 bg-clip-text text-transparent">
            NIT Jamshedpur Placement Cell
          </h1>
          <p className="text-gray-600">Empowering students for successful careers</p>
        </div>

        <div className="flex items-center space-x-4 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search students, companies..."
              className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="relative">
            <button
              onClick={() => setNotificationsOpen(!notificationsOpen)}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 relative"
            >
              <BellIcon className="h-5 w-5 text-gray-600" />
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
            </button>

            {/* Notifications Dropdown */}
            {notificationsOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gradient-to-r from-blue-50 to-indigo-50">
                  <h3 className="font-semibold text-gray-800">Notifications</h3>
                  <button
                    onClick={() => setNotificationsOpen(false)}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <XMarkIcon className="h-5 w-5" />
                  </button>
                </div>
                <div className="divide-y divide-gray-200 max-h-96 overflow-y-auto">
                  {recentActivities.map((activity) => (
                    <div
                      key={activity.id}
                      className={`p-4 hover:bg-gray-50 cursor-pointer ${!activity.read ? 'bg-blue-50' : ''}`}
                    >
                      <div className="flex items-start">
                        <div className={`p-2 rounded-lg ${activity.type === 'placement' ? 'bg-blue-100 text-blue-600' :
                            activity.type === 'drive' ? 'bg-purple-100 text-purple-600' :
                              activity.type === 'student' ? 'bg-green-100 text-green-600' :
                                activity.type === 'company' ? 'bg-amber-100 text-amber-600' :
                                  'bg-indigo-100 text-indigo-600'
                          }`}>
                          {activity.type === 'placement' && <AcademicCapIcon className="h-5 w-5" />}
                          {activity.type === 'drive' && <ArrowPathIcon className="h-5 w-5" />}
                          {activity.type === 'student' && <UsersIcon className="h-5 w-5" />}
                          {activity.type === 'company' && <BriefcaseIcon className="h-5 w-5" />}
                          {activity.type === 'report' && <ChartBarIcon className="h-5 w-5" />}
                        </div>
                        <div className="ml-3 flex-1">
                          <h4 className="text-sm font-medium text-gray-900">{activity.title}</h4>
                          <p className="text-sm text-gray-500">{activity.description}</p>
                          <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                        </div>
                        {!activity.read && (
                          <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-3 border-t border-gray-200 text-center bg-gray-50">
                  <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                    View all notifications
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* 📊 Dashboard Tabs */}
      <div className="flex space-x-2 mb-6 border-b border-gray-200">
        {['overview', 'students', 'companies', 'drives', 'reports'].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 font-medium rounded-t-lg transition-all ${activeTab === tab ? 'bg-blue-600 text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
       <StudentDetails/>
      {/* 📈 Main Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Left Column - Full width on mobile, 2/3 on desktop */}
        <div className="lg:col-span-2 space-y-6">
          {/* Student Statistics by Branch */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
            <div className="p-5 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                <UsersIcon className="h-5 w-5 text-indigo-600 mr-2" />
                Student Placement Statistics by Branch
              </h3>
            </div>
            <div className="p-5">
              <BranchStats />
            </div>
          </div>

          {/* Placement Trends */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
            <div className="p-5 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                <ChartBarIcon className="h-5 w-5 text-indigo-600 mr-2" />
                Placement Trends
              </h3>
            </div>
            <div className="p-5">
              <StudentStats />
            </div>
          </div>
        </div>

        {/* Right Column - Full width on mobile, 1/3 on desktop */}
        <div className="space-y-6">
          
          <TopRecruitingCompanies/>

          {/* Upcoming Drives */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
            <div className="p-5 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                <ArrowPathIcon className="h-5 w-5 text-indigo-600 mr-2" />
                Upcoming Drives
              </h3>
            </div>
            <div className="p-5">
              <UpcomingDrives />
            </div>
          </div>
        </div>
      </div>

      {/* New Row for Pie Chart and Recent Placements */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
  <div className="lg:col-span-2">
    <PieChart />
  </div>
  <div className="lg:col-span-1">
    <RecentPlacements />
  </div>
</div>

      
      <Footer/>
    </div>
  )
}

export default Dashboard;