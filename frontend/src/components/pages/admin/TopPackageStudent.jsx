import * as React from "react";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";

const currentYear = dayjs();
const tempYear = new Date().getFullYear();

const TopPackageStudent = () => {
    const [year, setYear] = useState(tempYear);
    const [students, setStudents] = useState([]);

    const callApi = async () => {
        try {
            const response = await fetch(`http://localhost:4000/api/v1/admin/toppackagestudents?batch=${year}&topStudentsCount=20`, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            });

            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }

            const jsonData = await response.json(); 
            if (!jsonData.success) {
                toast.error("Something went wrong");
            } else {
                setStudents(jsonData.allStudent);
                toast.success("data fetched successfully");
            }
        } catch (err) {
            toast.error("Something went wrong",err);
        }
    };

    // Fetch data whenever `year` changes
    useEffect(() => {
        callApi();
        setStudents([])   // to not display the previous fetched data
    }, [year]);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                label="Top packaged student of the year"
                maxDate={currentYear}
                openTo="year"
                views={["year"]}
                sx={{ minWidth: 250 }}
                value={dayjs(`${year}-01-01`)} 
                onChange={(newValue) => {
                    if (newValue) {
                        setYear(newValue.year());
                    }
                }}
            />
            <h1>Selected Year: {year}</h1>

            {/* Display fetched students */}
            <div>
                {students.length > 0 ? (
                    students.map((student, index) => (
                        <p key={index}>{student.placedStudentDetails.name} - {student.ctc} LPA</p>
                    ))
                ) : (
                    <p>No students found for this year.</p>
                )}
            </div>
    
        </LocalizationProvider>
    );
};

export default TopPackageStudent;
