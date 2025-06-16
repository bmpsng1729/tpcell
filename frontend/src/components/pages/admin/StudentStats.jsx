import { useEffect, useState } from "react"
import toast from "react-hot-toast";

const StudentStats = () => {
    // const branchData = [
    //   { branch: 'CSE', placed: 92, total: 120 },
    // ]
    const [branchData,setBranchData]=useState([]);

      useEffect(()=>{
             const fetchPercentageBranchwise=async()=>{
                  try{
                    const response=await fetch("http://localhost:4000/api/v1/admin/placementpercentagebranchwise",{
                      method:"GET",
                      headers: { "Content-Type": "application/json" },
                    });
                    const data= await response.json();
                    setBranchData(data.response
                    );
                    toast.success(data.message || "Error in finding branwise placement percentage");
                  }catch(err){
                    toast.error("api call errror",err);
                  }
             };
             fetchPercentageBranchwise();
      },[]);
  
    return (
      <div className="bg-white rounded-lg shadow p-6 h-[400px] flex flex-col">
        <h3 className="text-lg font-semibold text-secondary-800 mb-4">
          Branch-wise Placement Statistics (2023-24)
        </h3>
        
        <div className="flex-1 overflow-y-auto pr-2">
          <div className="space-y-4">
          {branchData?.length > 0 ? (
  branchData.map((data, index) => {
    const placementPercentage = Math.round((data.placed / data.total) * 100);

    return (
      <div key={index} className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="font-medium text-secondary-800">{data.branch}</span>
          <span className="text-sm text-secondary-500">
            {data.placed}/{data.total} ({placementPercentage}%)
          </span>
        </div>
        <hr />
      </div>
    );
  })
) : (
  <p className="text-secondary-500 italic">No data available.</p>
)}

          </div>
        </div>
      </div>
    )
  }
  
  export default StudentStats