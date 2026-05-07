import { useMemo, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EventNoteIcon from "@mui/icons-material/EventNote";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const sampleEvents = [
  {
    id: 1,
    company: "Global Tech",
    role: "Software Engineer",
    date: "2026-06-07",
    time: "10:00 AM",
    location: "Hall A",
    status: "Confirmed",
    branch: "CSE",
    batch: "2026",
    type: "On-campus",
  },
  {
    id: 2,
    company: "Bright Solutions",
    role: "Data Analyst",
    date: "2026-06-09",
    time: "02:00 PM",
    location: "Auditorium",
    status: "Pending",
    branch: "IT",
    batch: "2025",
    type: "Off-campus",
  },
  {
    id: 3,
    company: "InnovateX",
    role: "Product Intern",
    date: "2026-06-12",
    time: "11:30 AM",
    location: "Lab 2",
    status: "Confirmed",
    branch: "ECE",
    batch: "2026",
    type: "On-campus",
  },
  {
    id: 4,
    company: "FinServe",
    role: "Business Analyst",
    date: "2026-06-20",
    time: "09:30 AM",
    location: "Conference Room",
    status: "Confirmed",
    branch: "ME",
    batch: "2025",
    type: "Off-campus",
  },
  {
    id: 5,
    company: "NextGen AI",
    role: "ML Engineer",
    date: "2026-06-24",
    time: "03:00 PM",
    location: "Online",
    status: "Pending",
    branch: "CSE",
    batch: "2026",
    type: "Off-campus",
  },
];

const branches = ["All", "CSE", "IT", "ECE", "ME"];
const batches = ["All", "2025", "2026"];
const driveTypes = ["All", "On-campus", "Off-campus"];
const views = ["Month", "Week", "Day"];

const getMonthDays = (year, month) => {
  const date = new Date(year, month, 1);
  const days = [];
  const startDay = date.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  for (let i = 0; i < startDay; i += 1) days.push(null);
  for (let i = 1; i <= daysInMonth; i += 1) days.push(new Date(year, month, i));
  return days;
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const PlacementCalendar = () => {
  const [view, setView] = useState("Month");
  const [branchFilter, setBranchFilter] = useState("All");
  const [batchFilter, setBatchFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");
  const [showFilters, setShowFilters] = useState(false);
  const isMobile = useMediaQuery("(max-width:900px)");

  const monthDays = useMemo(() => {
    const currentDate = new Date(2026, 5, 1);
    return getMonthDays(currentDate.getFullYear(), currentDate.getMonth());
  }, []);

  const filteredEvents = useMemo(() => {
    return sampleEvents.filter((event) => {
      const branchMatch = branchFilter === "All" || event.branch === branchFilter;
      const batchMatch = batchFilter === "All" || event.batch === batchFilter;
      const typeMatch = typeFilter === "All" || event.type === typeFilter;
      return branchMatch && batchMatch && typeMatch;
    });
  }, [branchFilter, batchFilter, typeFilter]);

  const weekEvents = filteredEvents.slice(0, 4);
  const dayEvents = filteredEvents.slice(0, 2);

  return (
    <Box className="p-4 md:p-6 bg-slate-100 min-h-screen pt-24">
      <Box className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <Box>
          <Typography variant="h4" className="font-semibold text-slate-900">
            Placement Calendar
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Track scheduled placement drives and interviews in one dashboard.
          </Typography>
        </Box>
        <Stack direction="row" spacing={1} className="flex-wrap">
          {views.map((option) => (
            <Button
              key={option}
              variant={view === option ? "contained" : "outlined"}
              color="primary"
              onClick={() => setView(option)}
              className="capitalize"
            >
              {option}
            </Button>
          ))}
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => setShowFilters((prev) => !prev)}
            endIcon={<ExpandMoreIcon />}
            className="min-w-[150px] md:min-w-[180px]"
          >
            Filters
          </Button>
        </Stack>
      </Box>

      <Card className="mb-6">
        <CardContent className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <Stack
            direction={isMobile ? "column" : "row"}
            spacing={2}
            className={`w-full ${showFilters || !isMobile ? "" : "hidden"}`}
          >
            <FormControl fullWidth>
              <InputLabel>Branch</InputLabel>
              <Select
                value={branchFilter}
                label="Branch"
                onChange={(e) => setBranchFilter(e.target.value)}
              >
                {branches.map((branch) => (
                  <MenuItem key={branch} value={branch}>
                    {branch}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel>Batch</InputLabel>
              <Select
                value={batchFilter}
                label="Batch"
                onChange={(e) => setBatchFilter(e.target.value)}
              >
                {batches.map((batch) => (
                  <MenuItem key={batch} value={batch}>
                    {batch}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel>Drive Type</InputLabel>
              <Select
                value={typeFilter}
                label="Drive Type"
                onChange={(e) => setTypeFilter(e.target.value)}
              >
                {driveTypes.map((type) => (
                  <MenuItem key={type} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Stack>
        </CardContent>
      </Card>

      <Box className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
        <Card className="p-4 bg-white shadow-sm">
          <Box className="flex items-center gap-3 mb-4">
            <CalendarMonthIcon className="text-sky-600" />
            <Typography variant="h6" className="font-semibold">
              {view} View
            </Typography>
          </Box>

          {view === "Month" && (
            <Box className="grid gap-2">
              <Box className="grid grid-cols-7 gap-2 text-slate-500 text-xs uppercase">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                  <Box key={day} className="py-2 text-center">
                    {day}
                  </Box>
                ))}
              </Box>
              <Box className="grid grid-cols-7 gap-2">
                {monthDays.map((day, index) => {
                  const dayString = day ? day.toISOString().split('T')[0] : null;
                  const dayEvents = filteredEvents.filter((event) => event.date === dayString);
                  return (
                    <Box
                      key={`${dayString}-${index}`}
                      className={`min-h-[100px] rounded-2xl border p-3 bg-slate-50 ${
                        day ? 'border-slate-200' : 'border-transparent'
                      }`}
                    >
                      <Typography
                        className={`text-sm font-semibold ${day ? 'text-slate-900' : 'text-transparent'}`}
                      >
                        {day ? day.getDate() : ''}
                      </Typography>
                      <Box className="mt-2 flex flex-col gap-1">
                        {dayEvents.slice(0, 2).map((event) => (
                          <Chip
                            key={event.id}
                            label={`${event.company} • ${event.time}`}
                            size="small"
                            color={event.status === 'Confirmed' ? 'success' : 'warning'}
                            className="text-[10px] font-medium"
                          />
                        ))}
                        {dayEvents.length > 2 && (
                          <Typography className="text-[11px] text-slate-500">
                            +{dayEvents.length - 2} more
                          </Typography>
                        )}
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          )}

          {view === "Week" && (
            <Stack spacing={3}>
              {weekEvents.map((event) => (
                <Card
                  key={event.id}
                  className="border border-slate-200 hover:shadow-lg transition"
                >
                  <CardContent>
                    <Typography variant="subtitle1" className="font-semibold">
                      {event.company} - {event.role}
                    </Typography>
                    <Typography className="text-slate-600 text-sm">
                      {formatDate(event.date)} • {event.time}
                    </Typography>
                    <Typography className="text-slate-600 text-sm">{event.location}</Typography>
                    <Chip
                      label={event.status}
                      color={event.status === 'Confirmed' ? 'success' : 'warning'}
                      size="small"
                      className="mt-3"
                    />
                  </CardContent>
                </Card>
              ))}
            </Stack>
          )}

          {view === "Day" && (
            <Stack spacing={3}>
              {dayEvents.map((event) => (
                <Card
                  key={event.id}
                  className="border border-slate-200 hover:shadow-lg transition"
                >
                  <CardContent>
                    <Box className="flex items-center justify-between gap-2 mb-2">
                      <Typography variant="subtitle1" className="font-semibold">
                        {event.company}
                      </Typography>
                      <Chip
                        label={event.type}
                        size="small"
                        color="primary"
                        className="text-[11px]"
                      />
                    </Box>
                    <Typography className="text-slate-600 text-sm">
                      {formatDate(event.date)} • {event.time}
                    </Typography>
                    <Typography className="text-slate-600 text-sm">{event.location}</Typography>
                    <Typography className="text-slate-600 text-sm">{event.role}</Typography>
                    <Chip
                      label={event.status}
                      color={event.status === 'Confirmed' ? 'success' : 'warning'}
                      size="small"
                      className="mt-3"
                    />
                  </CardContent>
                </Card>
              ))}
            </Stack>
          )}
        </Card>

        <Card className="p-4 bg-white shadow-sm">
          <Box className="flex items-center gap-3 mb-4">
            <EventNoteIcon className="text-sky-600" />
            <Typography variant="h6" className="font-semibold">
              Upcoming Events
            </Typography>
          </Box>
          <Stack spacing={3}>
            {filteredEvents.map((event) => (
              <Card key={event.id} className="border border-slate-200">
                <CardContent>
                  <Box className="flex items-center justify-between gap-2 mb-2">
                    <Typography variant="subtitle1" className="font-semibold">
                      {event.company}
                    </Typography>
                    <Chip
                      label={event.status}
                      color={event.status === 'Confirmed' ? 'success' : 'warning'}
                      size="small"
                    />
                  </Box>
                  <Typography className="text-slate-600 text-sm">{event.role}</Typography>
                  <Typography className="text-slate-600 text-sm">
                    {formatDate(event.date)} • {event.time}
                  </Typography>
                  <Typography className="text-slate-600 text-sm">{event.location}</Typography>
                  <Box className="mt-3 flex flex-wrap gap-2">
                    <Chip label={event.branch} size="small" />
                    <Chip label={`Batch ${event.batch}`} size="small" />
                    <Chip label={event.type} size="small" />
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Stack>
        </Card>
      </Box>
    </Box>
  );
};

export default PlacementCalendar;
