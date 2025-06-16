import React, { useEffect, useState } from 'react';
import {
  ChartBarIcon,
  UsersIcon,
  BriefcaseIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/outline';
import { toast } from 'react-hot-toast'; // Make sure this is imported

function StudentDetails() {
  const currentYear = new Date().getFullYear();

  const [stats, setStats] = useState([
    {
      title: 'Total Placements',
      value: '0', // default value
      change: 12.5,
      icon: ChartBarIcon,
      color: { bg: 'bg-gradient-to-br from-blue-500 to-indigo-600', text: 'text-blue-500' },
      description: 'Placements this academic year',
    },
    {
      title: 'Registered Students',
      value: '0',
      change: 8.2,
      icon: UsersIcon,
      color: { bg: 'bg-gradient-to-br from-green-500 to-teal-600', text: 'text-green-500' },
      description: 'Eligible for placements',
    },
    {
      title: 'Companies Visited',
      value: '0',
      change: 15.3,
      icon: BriefcaseIcon,
      color: { bg: 'bg-gradient-to-br from-purple-500 to-fuchsia-600', text: 'text-purple-500' },
      description: 'This placement season',
    },
    {
      title: 'Average Package',
      value: '0 LPA',
      change: 5.7,
      icon: AcademicCapIcon,
      color: { bg: 'bg-gradient-to-br from-amber-500 to-orange-600', text: 'text-amber-500' },
      description: 'Across all branches',
    },
  ]);

  useEffect(() => {
    const fetchTotalStudent = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/v1/admin/totalstudent?year=${currentYear}`, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });
          
        if (!response.ok) {
          throw new Error('Failed to fetch data');
          
        }

        const data = await response.json();

        if (!data.success) {
          toast.error("Something went wrong");
        } else {
          // Update only 'Total Placements' in stats
          setStats(prevStats =>
            prevStats.map(stat =>
              stat.title === 'Registered Students'
                ? { ...stat, value: `${data.studentCount}` }
                : stat,
            
            )
          );
          toast.success("Data fetched successfully");
        }
      } catch (err) {
        toast.error("Something went wrong");
        console.error(err);
      }
    };

    const fetchPlacedStudent=async()=>{
      try {
        const response = await fetch(`http://localhost:4000/api/v1/admin/showallstudentbatchwise`, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });
           
        if (!response.ok) {
          throw new Error('Failed to fetch data');
          
        }

        const data = await response.json();
  

        if (!data.success) {
          toast.error("Something went wrong");
        } else {
          // Update only 'Total Placements' in stats
          setStats(prevStats =>
            prevStats.map(stat =>
              stat.title === 'Total Placements'
                ? { ...stat, value: `${data.studentCount}` }
                : stat,
            
            )
          );
          toast.success("Data fetched successfully");
        }
      } catch (err) {
        toast.error("Something went wrong");
        console.error(err);
      }
    }
    const fetchAllVisitedCompany=async()=>{
      try {
        const response = await fetch(`http://localhost:4000/api/v1/admin/showallvisitedcompanyyearwise`, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });
            
        if (!response.ok) {
          throw new Error('Failed to fetch data');
          
        }

        const data = await response.json();

        if (!data.success) {
          toast.error("Something went wrong");
        } else {
          // Update only 'Total Placements' in stats
          setStats(prevStats =>
            prevStats.map(stat =>
              stat.title === 'Companies Visited'
                ? { ...stat, value: `${data.companyCount}` }
                : stat,
            
            )
          );
          toast.success("Data fetched successfully");
        }
      } catch (err) {
        toast.error("Something went wrong");
        console.error(err);
      }
    }

    const fetchAveragePlacements=async()=>{
      try {
        const response = await fetch(`http://localhost:4000/api/v1/admin/averagepackageyearwise`, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });
        
        if (!response.ok) {
          throw new Error('Failed to fetch data');
          
        }

        const data = await response.json();


        if (!data.success) {
          toast.error("Something went wrong");
        } else {
          // Update only 'Total Placements' in stats
          setStats(prevStats =>
            prevStats.map(stat =>
              stat.title === 'Average Package'
                ? { ...stat, value: `${data.avgCTC} ` }
                : stat,
            
            )
          );
          toast.success("Data fetched successfully");
        }
      }catch(err){
        return res.status(400).json({
          message:"there is an error in fetching the data",
          success:false,
        })
      }
    }

    fetchTotalStudent();
    fetchPlacedStudent();
    fetchAllVisitedCompany();
    fetchAveragePlacements();
  }, []);

  return (
    <div className=" bg-gray-50 p-4 md:p-6">
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100"
          >
            <div className="p-5">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                  <p className="text-xs text-gray-500 mt-1">{stat.description}</p>
                </div>
                <div className={`p-3 rounded-lg ${stat.color.bg} text-white shadow-inner`}>
                  <stat.icon className="h-6 w-6" />
                </div>
              </div>
              <div className="mt-4 flex items-center">

              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default StudentDetails;
