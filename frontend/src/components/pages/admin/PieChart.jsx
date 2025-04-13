import React, { useEffect, useState } from 'react'
import { Pie } from 'react-chartjs-2';
import {
    
    AcademicCapIcon,
   
  } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

function PieChart() {
  const [chartData,setChartData]=useState([]);
    useEffect(()=>{
     const fetchPieChardData=async()=>{
     try{
         const response=await fetch("http://localhost:4000/api/v1/admin/piechartviewdata",{
          method:"GET",
          headers: { "Content-Type": "application/json" },
         });
         if(!response.ok){
          toast.error("there is an issue in api call for pie chart data");
         }
         const jsonData=await response.json();
         console.log("jsonddata.precessedData",jsonData);
         setChartData(jsonData.processedData
         );
         toast.success(jsonData.message || "pie chart data fetched successfully")
         
     }
     catch(err){
      console.log("there is an err in fetching pie chart data");t
      toast.error("there is an error in fetching the pie chart data");
     }
     };
     fetchPieChardData();
    },[])
  return (
    <div>
       {/* New Row for Pie Chart and Recent Placements */}
             
               {/* Pie Chart - Takes 2/3 width on desktop */}
               <div className="lg:col-span-2">
                 <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                   <div className="p-5 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50">
                     <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                       <AcademicCapIcon className="h-5 w-5 text-indigo-600 mr-2" />
                       CTC Statistical Records
                     </h3>
                   </div>
                   <div className="p-5">
                     <div className="h-64 flex items-center justify-center">
                       <Pie
                         data={{
                           labels: ["< 10 LPA", "10-20 LPA", "20-30 LPA", ">30 LPA"],
                           datasets: [{
                             label: "Number of Students",
                             // datas are 0< <10,10<= <20,20<= <30,>=30
                             data: chartData,
                             backgroundColor: [
                               "#ff6384",
                               "#36a2eb",
                               "#ffce56",
                               "#4bc0c0"
                                      ],
                           }],
                         }}
                         options={{
                           responsive: true,
                           maintainAspectRatio: false,
                           plugins: {
                             legend: {
                               position: 'right',
                               labels: {
                                 boxWidth: 12,
                                 padding: 20,
                                 font: {
                                   size: 12
                                 }
                               }
                             },
                             tooltip: {
                               callbacks: {
                                 label: function (context) {
                                   return `${context.label}: ${context.raw} students`;
                                 }
                               }
                             }
                           }
                         }}
                       />
                     </div>
                   </div>
                 </div>
               </div>
    </div>
  )
}

export default PieChart
