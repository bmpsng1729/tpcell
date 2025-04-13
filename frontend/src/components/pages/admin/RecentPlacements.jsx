import React from 'react'
import {
  AcademicCapIcon,
} from '@heroicons/react/24/outline';

function RecentPlacements() {

    const recentPlacements = [
        {
          name: 'Rahul Sharma',
          branch: 'CSE',
          company: 'Microsoft',
          package: '42 LPA',
          cgpa: '9.8',
          role: 'Software Engineer',
          date: '15 Jan 2024'
        },
        {
          name: 'Priya Patel',
          branch: 'ECE',
          company: 'Google',
          package: '45 LPA',
          cgpa: '9.6',
          role: 'Machine Learning Engineer',
          date: '14 Jan 2024'
        },
        {
          name: 'Amit Singh',
          branch: 'ME',
          company: 'Goldman Sachs',
          package: '35 LPA',
          cgpa: '8.9',
          role: 'Quantitative Analyst',
          date: '12 Jan 2024'
        },
        {
          name: 'Neha Gupta',
          branch: 'CSE',
          company: 'Amazon',
          package: '38 LPA',
          cgpa: '9.4',
          role: 'Cloud Architect',
          date: '10 Jan 2024'
        },
        {
          name: 'Vikram Joshi',
          branch: 'CE',
          company: 'Adobe',
          package: '28 LPA',
          cgpa: '8.7',
          role: 'UX Designer',
          date: '8 Jan 2024'
        },
      ];
  return (
    <div>
       <div className="lg:col-span-1">
                 <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                   <div className="p-5 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50">
                     <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                       <AcademicCapIcon className="h-5 w-5 text-indigo-600 mr-2" />
                       Recent Placements
                     </h3>
                   </div>
                   <div className="p-5">
                     <div className="overflow-x-auto">
                       <table className="min-w-full divide-y divide-gray-200">
                         <thead className="bg-gray-50">
                           <tr>
                             <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
                             <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Branch</th>
                             <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                             <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CGPA</th>
                             <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                             <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Package</th>
                           </tr>
                         </thead>
                         <tbody className="bg-white divide-y divide-gray-200">
                           {recentPlacements.map((placement, index) => (
                             <tr key={index} className="hover:bg-gray-50">
                               <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">{placement.name}</td>
                               <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{placement.branch}</td>
                               <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{placement.company}</td>
                               <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{placement.cgpa}</td>
                               <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{placement.role}</td>
                               <td className="px-4 py-3 whitespace-nowrap text-sm font-semibold text-blue-600">{placement.package}</td>
                             </tr>
                           ))}
                         </tbody>
                       </table>
                     </div>
                   </div>
                 </div>
               </div>
    </div>
  )
}

export default RecentPlacements
