// Route suggestion: /interview-wall
import { useMemo, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Chip,
  Collapse,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const experiences = [
  {
    id: 1,
    company: "TechBridge",
    role: "Frontend Developer",
    difficulty: "Medium",
    year: "2025",
    branch: "CSE",
    summary:
      "The technical round focused on React, CSS layouts, and basic algorithm questions. The interviewer was friendly and allowed time to think. I recommend practicing component state management and layout patterns.",
    tags: ["React", "CSS", "Behavioral"],
  },
  {
    id: 2,
    company: "DataWave",
    role: "Data Analyst Intern",
    difficulty: "Hard",
    year: "2025",
    branch: "IT",
    summary:
      "The interview included SQL case studies, data cleaning scenarios, and a Python scripting challenge. They also asked about my project experience with analytics dashboards.",
    tags: ["SQL", "Python", "Analytics"],
  },
  {
    id: 3,
    company: "EcoInnovate",
    role: "Embedded Systems Trainee",
    difficulty: "Easy",
    year: "2026",
    branch: "ECE",
    summary:
      "A short discussion on microcontroller basics and logic design, followed by a live problem on state machines. The campus placement team coordinated smoothly and the hiring process was clear.",
    tags: ["Embedded", "Digital Design", "Interview"],
  },
  {
    id: 4,
    company: "BuildSmart",
    role: "Mechanical Design Engineer",
    difficulty: "Medium",
    year: "2026",
    branch: "ME",
    summary:
      "The experience had a mix of mechanical theory, CAD tools discussion, and behavioral questions about teamwork. They focused on real-world design scenarios and project handling.",
    tags: ["CAD", "Mechanics", "Teamwork"],
  },
];

const companies = ["All", "TechBridge", "DataWave", "EcoInnovate", "BuildSmart"];
const years = ["All", "2025", "2026"];
const branches = ["All", "CSE", "IT", "ECE", "ME"];
const sortOptions = ["Newest", "Oldest", "Difficulty: Easy", "Difficulty: Hard"];

const InterviewExperienceWall = () => {
  const [search, setSearch] = useState("");
  const [companyFilter, setCompanyFilter] = useState("All");
  const [yearFilter, setYearFilter] = useState("All");
  const [branchFilter, setBranchFilter] = useState("All");
  const [sortBy, setSortBy] = useState("Newest");
  const [expandedId, setExpandedId] = useState(null);
  const isMobile = useMediaQuery("(max-width:900px)");

  const filteredExperiences = useMemo(() => {
    return experiences
      .filter((item) => {
        const searchMatch =
          item.company.toLowerCase().includes(search.toLowerCase()) ||
          item.role.toLowerCase().includes(search.toLowerCase()) ||
          item.summary.toLowerCase().includes(search.toLowerCase());
        const companyMatch = companyFilter === "All" || item.company === companyFilter;
        const yearMatch = yearFilter === "All" || item.year === yearFilter;
        const branchMatch = branchFilter === "All" || item.branch === branchFilter;
        return searchMatch && companyMatch && yearMatch && branchMatch;
      })
      .sort((a, b) => {
        if (sortBy === "Newest") return b.id - a.id;
        if (sortBy === "Oldest") return a.id - b.id;
        if (sortBy === "Difficulty: Easy") return a.difficulty.localeCompare(b.difficulty);
        if (sortBy === "Difficulty: Hard") return b.difficulty.localeCompare(a.difficulty);
        return 0;
      });
  }, [search, companyFilter, yearFilter, branchFilter, sortBy]);

  const toggleExpand = (id) => {
    setExpandedId((current) => (current === id ? null : id));
  };

  return (
    <Box className="min-h-screen bg-slate-100 p-4 md:p-6 pt-24">
      <Box className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-6">
        <Box>
          <Typography variant="h4" className="font-semibold text-slate-900">
            Interview Experience Wall
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Read and filter student interview stories from recent placement rounds.
          </Typography>
        </Box>

        <Stack
          direction={isMobile ? "column" : "row"}
          spacing={2}
          className="w-full md:w-auto"
        >
          <TextField
            variant="outlined"
            placeholder="Search experiences"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            InputProps={{
              startAdornment: <SearchIcon className="text-slate-500" />,
            }}
            className="bg-white rounded-2xl"
            fullWidth={isMobile}
          />
          <FormControl variant="outlined" className="min-w-[160px] bg-white rounded-2xl">
            <InputLabel>Sort</InputLabel>
            <Select value={sortBy} label="Sort" onChange={(e) => setSortBy(e.target.value)}>
              {sortOptions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Stack>
      </Box>

      <Box className="flex flex-col gap-3 mb-6 md:flex-row md:items-center md:justify-between">
        <Stack direction="row" spacing={2} className="flex-wrap">
          <Chip
            label="All Companies"
            clickable
            color={companyFilter === "All" ? "primary" : "default"}
            onClick={() => setCompanyFilter("All")}
          />
          {companies.slice(1).map((company) => (
            <Chip
              key={company}
              label={company}
              clickable
              color={companyFilter === company ? "primary" : "default"}
              onClick={() => setCompanyFilter(company)}
              className="capitalize"
            />
          ))}
        </Stack>
        <Stack direction="row" spacing={2} className="flex-wrap">
          <Chip
            label="All Years"
            clickable
            color={yearFilter === "All" ? "primary" : "default"}
            onClick={() => setYearFilter("All")}
          />
          {years.slice(1).map((year) => (
            <Chip
              key={year}
              label={year}
              clickable
              color={yearFilter === year ? "primary" : "default"}
              onClick={() => setYearFilter(year)}
            />
          ))}
        </Stack>
        <Stack direction="row" spacing={2} className="flex-wrap">
          <Chip
            label="All Branches"
            clickable
            color={branchFilter === "All" ? "primary" : "default"}
            onClick={() => setBranchFilter("All")}
          />
          {branches.slice(1).map((branch) => (
            <Chip
              key={branch}
              label={branch}
              clickable
              color={branchFilter === branch ? "primary" : "default"}
              onClick={() => setBranchFilter(branch)}
              className="capitalize"
            />
          ))}
        </Stack>
      </Box>

      <Box className="grid gap-6 xl:grid-cols-2">
        {filteredExperiences.map((item) => (
          <Card
            key={item.id}
            className="overflow-hidden border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <CardContent>
              <Box className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <Box>
                  <Typography variant="h6" className="font-semibold text-slate-900">
                    {item.company}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.role} • {item.branch} • {item.year}
                  </Typography>
                </Box>
                <Chip
                  label={item.difficulty}
                  color={item.difficulty === "Hard" ? "error" : item.difficulty === "Medium" ? "warning" : "success"}
                  className="uppercase text-[11px] font-semibold"
                />
              </Box>

              <Typography className="mt-4 text-slate-700 text-sm leading-6">
                {item.summary.slice(0, isMobile ? 120 : 180)}...
              </Typography>

              <Box className="mt-4 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <Chip key={tag} label={tag} size="small" className="bg-slate-100 text-slate-700" />
                ))}
              </Box>

              <Box className="mt-4 flex items-center justify-between">
                <Typography variant="body2" color="text.secondary">
                  Story details
                </Typography>
                <IconButton
                  aria-label={expandedId === item.id ? "Collapse details" : "Expand details"}
                  onClick={() => toggleExpand(item.id)}
                  size="small"
                  className="text-slate-700"
                >
                  <ExpandMoreIcon
                    className={`${expandedId === item.id ? "rotate-180" : "rotate-0"} transition-transform duration-300`}
                  />
                </IconButton>
              </Box>
              <Collapse in={expandedId === item.id} timeout="auto" unmountOnExit>
                <Typography className="mt-3 text-slate-700 text-sm leading-7">
                  {item.summary}
                </Typography>
              </Collapse>
            </CardContent>
          </Card>
        ))}
      </Box>

      {filteredExperiences.length === 0 && (
        <Box className="rounded-3xl border border-dashed border-slate-300 bg-white p-8 text-center">
          <Typography variant="h6" className="font-semibold text-slate-900">
            No experiences found
          </Typography>
          <Typography className="text-slate-600">
            Try changing your search keywords or filters.
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default InterviewExperienceWall;
