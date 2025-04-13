import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const BranchStats = () => {
  const currentYear=new Date().getFullYear();

    const [placedBranch,setPlacedBranch]=useState([]);

    useEffect(()=>{
       const fetchPlacementDetails=async()=>{
        try{
           const response=await fetch("http://localhost:4000/api/v1/admin/averagepackagebranchwise",{
            method:"GET",
            headers: { 'Content-Type': 'application/json' },
         });

         if(!response.ok){
          toast.error("unable to fetch data for placement details");
         }
         // if we got response
         const data= await response.json();
         setPlacedBranch(data.result);

        }catch(err){
      console.log("error in fetching placement details of branches");
      toast.error("something went wrong to fetch placements detail");
        }
       };
       fetchPlacementDetails();
    },[]);
    
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-bold text-secondary-800 mb-4">
          {
          `  Branch-wise Placement Statistics ${currentYear}-${currentYear+1}`
          }
          
        </h3>
        
        <div className="overflow-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-secondary-200">
                <th className="px-4 py-2 text-left text-xs font-medium text-secondary-500 uppercase">Branch</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-secondary-500 uppercase">Avg CTC</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-secondary-500 uppercase">max</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-secondary-500 uppercase">Lowest</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-secondary-500 uppercase">Total </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-secondary-200">
              {placedBranch.map((branch, index) => (
                <tr key={index}>
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-secondary-900">
                    {branch.department}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-primary-600 font-semibold">
                    {branch.averageCTC}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-green-600">
                    {branch.maxCTC}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-red-600">
                    {branch.minCTC}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-red-600">
                    {branch.totalPlacements}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default BranchStats;