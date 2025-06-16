import React, { useEffect } from 'react'
import { useState } from 'react';
import { toast } from "react-hot-toast";
import { 
    
    ChartBarIcon,
    CurrencyDollarIcon,
  } from '@heroicons/react/24/outline'
  import BranchStats from '../BranchStats';
import StudentStats from '../StudentStats';
import BranchWisePlaced from './BranchWisePlaced';
function AnalyticsDashboard() {
    const [timeRange, setTimeRange] = useState('yearly');
 const currYear=new Date().getFullYear()

const [placementTrends,setPlacementTrends]=useState([
  
  ]);
    const [ctcDistribution,setCtcDistribution]=useState(
    [
       
      ]
  );


  // call api
 
  const fetctFourYearCount=async()=>{
    try{
        const response=await fetch("http://localhost:4000/api/v1/admin/lastfourbatchplacement",{
         method:"GET",
         headers: { "Content-Type": "application/json" },
        });
        if(!response.ok){
         toast.error("there is an issue in api call for pie chart data");
        }
        const jsonData=await response.json();
       
        setPlacementTrends(jsonData.data
        );
        toast.success(jsonData.message || "4 years placement  data fetched successfully")
        
    }
    catch(err){
     console.log("there is an err in fetching pie chart data");t
     toast.error("there is an error in fetching the pie chart data");
    }
    };
    const fetctavg=async()=>{
      try{
          const response=await fetch("http://localhost:4000/api/v1/admin/lastfourbatchavgplaced",{
           method:"GET",
           headers: { "Content-Type": "application/json" },
          });
          if(!response.ok){
           toast.error("there is an issue in api call for pie chart data");
          }
          const jsonData=await response.json();
         
          setCtcDistribution(jsonData.data
          );
          console.log("isko v",placementTrends);
          toast.success(jsonData.message || "4 years placement  data fetched successfully")
          
      }
      catch(err){
       console.log("there is an err in fetching pie chart data");
       toast.error("there is an error in fetching the pie chart data");
      }
      };
    useEffect(() => {
      fetctFourYearCount();
      fetctavg();
    }, []);
      
  return (
    <div>
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
              
              <div className="flex items-end space-x-2 h-48 mt-20">
                
                {placementTrends.map((data, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center">
                    <div 
                      className="w-full bg-gradient-to-t from-blue-500 to-blue-300 rounded-t hover:from-blue-600 hover:to-blue-400 transition-all"
                      style={{ height: `${data.count}px` }}
                    ></div>
                    <span className="text-xs text-gray-500 mt-2">{data.year}</span>
                    <span className="text-xs font-medium text-blue-600">{data.count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTC Distribution */}
            <div className="bg-gray-50 rounded-lg p-4 h-80">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-medium text-gray-800"> AVERAGE CTC Distribution</h4>
                <div className="flex items-center space-x-2">
                  <CurrencyDollarIcon className="h-4 w-4 text-amber-500" />
                  <span className="text-xs text-gray-600">Package (LPA)</span>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4 h-48 mt-6">
                {ctcDistribution.map((data, index) => (
                  <div key={index} className="flex flex-col items-center justify-end">
                    <div className="w-full flex flex-col items-center">
                      <div 
                        className="w-3/4 bg-gradient-to-t from-amber-500 to-amber-300 rounded-t hover:from-amber-600 hover:to-amber-400 transition-all"
                        style={{ height: `${data.averageCTC}px` }}
                      ></div>
                      <span className="text-xs text-gray-500 mt-2">{data.year}</span>
                      <span className="text-xs font-medium text-amber-600">{data.averageCTC}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Branch Performance Table */}
          <BranchStats/>
        <StudentStats/>
        <div>

           {/* TODO:- */}
          {/* <h1> branch wise placed studnet</h1>
          <BranchWisePlaced/> */}
        </div>

        </div>
      </div>
    </div>
  )
}

export default AnalyticsDashboard
