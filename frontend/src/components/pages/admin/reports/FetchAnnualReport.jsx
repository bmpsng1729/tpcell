
// utils/fetchAnnualReport.js
export const fetchAnnualReportData = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/v1/admin/annualreport", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to fetch annual report");
      }
  
      const result = await response.json();
      console.log("data",result);
      return result.data;
    } catch (error) {
      console.error("Fetch error:", error);
      throw error;
    }
  };
  