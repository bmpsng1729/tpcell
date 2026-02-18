# TPCell - Placement Cell Management System
## Comprehensive Project Description

---

## 📋 Project Overview

**TPCell** is a comprehensive web-based **Placement Cell Management System** designed to streamline the recruitment and placement process for educational institutions. The platform serves as a centralized hub where students, administrators, coordinators, and recruiters can track company visits, placement statistics, job applications, and historical placement trends.

The primary objective is to solve critical pain points students face during placement season:
- Difficulty finding which companies visited in previous years
- Lack of visibility into senior placement outcomes and trends
- Limited information about company requirements and visit schedules
- No centralized historical data analysis for placement trends

---

## 🎯 Core Problem Statement

During internship and placement seasons, students struggle to:
1. Identify which companies visited in past years
2. Track how many seniors were placed and at which companies
3. Understand specific requirements and expectations of recruiting companies
4. Analyze historical placement trends over multiple years
5. Monitor their own placement progress and applications

TPCell addresses these challenges by providing a unified platform for placement tracking, analytics, and student-company interaction management.

---

## 👥 Target Users

### Primary Users:
- **Final-Year Students (All Branches)** - Track placements, view company details, apply for drives, monitor status
- **Administrators** - Manage students, companies, and placement statistics; generate reports
- **Coordinators** - Facilitate company recruitment drives; manage placement processes
- **Recruiters** - Post job openings, manage applications, track placements

### Supported Branches:
- Computer Science Engineering (CSE)
- Electronics & Communication Engineering (ECE)
- Civil Engineering (CE)
- Mechanical Engineering (ME)
- Metallurgical & Materials Engineering (MME)
- Production & Industrial Engineering (PIE)
- Electronics & Computer Science (ECM)
- Electrical Engineering (EE)

---

## ⚙️ Tech Stack

### **Frontend**
- **Framework:** React 18.3.1 with Vite (Build tool)
- **State Management:** Redux & Redux Toolkit
- **Form Handling:** React Hook Form
- **Styling:** 
  - Tailwind CSS
  - Material-UI (MUI) v6.4
  - Emotion (CSS-in-JS)
- **UI Components & Icons:**
  - Material-UI Icons & Data Grid
  - Lucide React Icons
  - React Icons
  - React Pro Sidebar
- **Calendar & Date Management:**
  - FullCalendar
  - Day.js & @date-io/dayjs
  - MUI Date Pickers
- **Data Visualization:** Chart.js with React-ChartJS-2
- **Animations:** Framer Motion
- **HTTP Client:** Axios
- **Notifications:** React Hot Toast, React Toastify
- **Router:** React Router DOM v7.1.5
- **Additional Libraries:**
  - React Spreadsheet
  - React Dropdown Select

### **Backend**
- **Runtime:** Node.js
- **Framework:** Express.js v4.21.2
- **Authentication:** 
  - bcryptjs (Password hashing)
  - JWT (JSON Web Tokens)
- **Database:** MongoDB with Mongoose ODM v8.10.0
- **Email Service:** Nodemailer v6.10.0
- **Cloud Storage:** Cloudinary API
- **Security:** CORS, Cookie Parser
- **Environment Management:** dotenv
- **Development:** Nodemon

### **Database**
- **Primary:** MongoDB (NoSQL)
- **ODM:** Mongoose v8.10.0

---

## 🏗️ System Architecture

### **Frontend Architecture**
```
Frontend/
├── Components (Reusable UI components)
├── Pages (Page-level components)
├── Dashboard (Admin & Student dashboards)
├── Store (Redux state management)
├── Services (API communication)
├── Utils (Helper functions & protected routes)
└── Slices (Redux slices for auth & profile)
```

### **Backend Architecture**
```
Server/
├── Controllers (Business logic)
├── Models (Database schemas)
├── Routes (API endpoints)
├── Middlewares (Authentication & authorization)
├── Config (Database & Cloudinary setup)
├── Utils (Email & file upload utilities)
└── Mail (Email templates)
```

---

## 📊 Database Models

### **User Model**
- Name, Email, Password
- Account Type: admin, student, coordinator, recruiter
- Student-Specific Fields:
  - CGPA (Cumulative GPA)
  - Batch Year
  - Branch (8 engineering branches)
  - Placement Status (is_placed)
  - Resume (URL)
  - CTC (Cost to Company) - if placed
- Profile Reference (Additional Details)
- Authentication Token & Password Reset Fields

### **Company Model**
- Company Name & Logo
- Visiting Since (Year)
- Base Salary & CTC
- List of Placed Students (References to User model)

### **Placement Student Model**
- Student Reference
- Company Reference
- Placement Status
- Package Details

### **Department Model**
- Department Name
- Student Statistics per Branch

### **OTP Model**
- Email verification support
- Secure authentication

### **Profile Model**
- Additional user details (Contact, Address, etc.)
- Resume & document storage

### **Company Review Model**
- Company feedback and ratings

---

## 🔐 Authentication & Authorization

### **Account Types & Permissions:**
1. **Student:**
   - View company information
   - Track application status
   - View placement statistics & trends
   - Download company brochures
   - Check upcoming drives
   - View personal placement status

2. **Admin:**
   - Manage all users & students
   - Add/edit companies
   - Manage recruitment drives
   - Generate comprehensive reports
   - View branch-wise & batch-wise statistics
   - Mark students as placed

3. **Coordinator:**
   - Schedule company visits
   - Manage recruitment processes
   - View student & company data

4. **Recruiter:**
   - Manage job postings
   - Track applications
   - Schedule interviews

### **Security Features:**
- Password hashing with bcrypt
- JWT token-based authentication
- Email-based OTP verification
- Protected routes (Role-based access)
- Cookie-based session management
- CORS security implementation

---

## 🚀 Core Features & Functionality

### **1. Authentication & Registration**
- User registration with email verification
- OTP-based email confirmation
- Role-based signup forms (Student/Admin/Coordinator/Recruiter)
- Secure login with JWT
- Password reset functionality
- Session management with cookies

### **2. Student Dashboard**
- Personal profile management
- CGPA & batch information
- Resume upload to Cloudinary
- View applied companies
- Track application status
- Check upcoming recruitment drives
- Mark important dates
- View personal placement status

### **3. Company Management**
- Company directory with details
- Company logos & branding
- Salary ranges (Base & CTC)
- Historical company visit data
- Company procedures & requirements
- Why companies recruit information
- Past recruiter details

### **4. Placement Analytics & Reports**
- Total placed students count
- Placement percentage by branch
- Average package calculation:
  - Branch-wise average
  - Year-wise average
- Top placed students & packages
- Last 4-batch placement trends
- CGPA-based student filtering
- Branch-wise statistics
- Pie chart visualization for placement data
- Annual reports generation

### **5. Recruitment Drive Management**
- Drive scheduling & timeline
- Company visit registration
- Applied companies tracking
- Drive results & outcomes
- Mark students as placed
- Drive status updates

### **6. Admin Panel Features**
- Student management interface
- Company management
- Drive creation & management
- Comprehensive statistics dashboard
- Student batch & branch filtering
- Report generation
- Company reviews & ratings
- Department management

### **7. Data Visualization**
- Charts for placement statistics
- Bar charts for branch-wise data
- Pie charts for placement distribution
- Timeline views for company visits
- Calendar integration for drive scheduling

### **8. Communication Features**
- Director message section
- Contact & inquiry forms
- Student-company communication (future enhancement)

### **9. Additional Features**
- Company brochure downloads
- About institution information
- News & updates section
- Testimonials from placed students
- Responsive navigation
- Role-based page access control

---

## 📡 API Endpoints Architecture

### **Authentication Routes** (`/api/v1/auth`)
- `POST /signup` - User registration
- `POST /login` - User authentication
- `POST /forgotPassword` - Password reset initiation
- `POST /resetPassword` - Password reset completion

### **Profile Routes** (`/api/v1/profile`)
- `GET /getUserDetails` - Fetch user profile
- `PUT /updateProfile` - Update profile information
- `POST /uploadResume` - Resume upload

### **Company Routes** (`/api/v1/admin`)
- `POST /registercompany` - Register new company
- `GET /showallvisitedcompanyyearwise` - Companies by year
- `GET /topcompanies` - Top recruiting companies

### **Placement Statistics Routes** (`/api/v1/admin`)
- `GET /placementpercentagebranchwise` - Placement % by branch
- `GET /averagepackagebranchwise` - Avg package by branch
- `GET /averagepackageyearwise` - Avg package by year
- `GET /toppackagestudents` - Highest package students
- `GET /totalplacedstudent` - Total placed count
- `GET /lastfourbatchplacement` - 4-year placement trends
- `GET /lastfourbatchavgplaced` - Average placements (4 years)
- `GET /totalstudent` - Total student count
- `GET /piechartviewdata` - Pie chart data for visualization

### **Student Management Routes** (`/api/v1/admin`)
- `POST /createdepartment` - Create department
- `POST /markplaced` - Mark student as placed
- `GET /showallstudentbatchwise` - Students by batch
- `GET /cgpabasedstudent` - Filter by CGPA

### **Reporting Routes** (`/api/v1/admin`)
- `GET /annualreport` - Generate annual report
- `GET /brachStats` - Branch statistics

---

## 🎨 Frontend Components Structure

### **Core Components:**
- **Navbar** - Navigation with role-based menus
- **Layout Components** - Header, Footer
- **Authentication Components:**
  - SignUp / Sign In pages
  - Registration Form
  - Role selection interface

### **Student Components:**
- StudentDashboard
- CompanyDetailsCard
- AppliedCompanies
- Results
- UpcomingCompanies
- MarkedDate

### **Admin Components:**
- Dashboard (Overview & statistics)
- Students management
- Companies management
- Drives management
- Reports generation
- Sidebar & ProSidebar navigation
- CompanyTable, CompanyStats, BranchStats
- Card components for data display
- DriveTimeline

### **Feature Components:**
- Brochure downloader
- Contact form
- Recruitment process info
- Director message
- About section
- Hero section
- Statistics section
- Testimonials
- News section
- Top placed students showcase

### **UI Components:**
- Accordion (Collapsible elements)
- Button variants
- Input fields
- Select dropdowns
- ProfileButton
- TopPlacedCard

---

## 🔄 Data Flow & User Workflows

### **Student Workflow:**
1. Register → Email verification → Complete Profile
2. View Dashboard → Explore Companies
3. Check Upcoming Drives → Track Applications
4. Monitor Placement Status → View Results
5. Download Brochures → Submit Applications

### **Admin Workflow:**
1. Login to Dashboard
2. Manage Students & Companies
3. Schedule Recruitment Drives
4. Mark Placements
5. Generate Reports & Analytics
6. Monitor Statistics

### **Recruiter Workflow:**
1. Register Company
2. Post Job Openings
3. Receive Applications
4. Manage Candidates
5. Update Placement Status

---

## 📦 Project Dependencies Summary

### **Key Frontend Libraries:**
- React 18.3.1, Vite, Redux Toolkit
- Material-UI ecosystem
- Chart.js for data visualization
- Tailwind CSS for styling
- Framer Motion for animations
- React Router for navigation

### **Key Backend Libraries:**
- Express.js, MongoDB, Mongoose
- Authentication: bcryptjs, JWT
- Email: Nodemailer
- Cloud: Cloudinary API
- Security: CORS, cookie-parser

---

## 🔮 Future Enhancements

1. **Recruiter Dashboard:**
   - Job posting system
   - Application management
   - Candidate screening interface

2. **Real-time Communication:**
   - Chat between students and recruiters
   - Notification system
   - Email alerts

3. **Advanced Analytics:**
   - Predictive analytics for placements
   - AI-based candidate-job matching
   - Market trend analysis

4. **Mobile Application:**
   - React Native mobile app
   - Push notifications

5. **Interview Management:**
   - Online interview scheduling
   - Interview round tracking
   - Result publication system

6. **Document Management:**
   - Digital offer letters
   - Placement agreements
   - Certificate generation

---

## 🚀 Deployment & Scalability

### **Current Setup:**
- Frontend: Vite development server (Port 5173)
- Backend: Express server (Port 4000)
- Database: MongoDB (Cloud or Local)
- Storage: Cloudinary for images & files

### **Scalability Considerations:**
- Microservices architecture ready
- Database indexing for performance
- API pagination for large datasets
- Load balancing capability
- CDN integration potential

---

## 📈 Key Metrics & Analytics

The system tracks:
- Total placements per batch
- Placement percentage per branch
- Average salary packages
- Top recruiting companies
- Student placement trends
- Department-wise statistics
- Historical data analysis

---

## 🎓 Educational Impact

TPCell enables:
- **Transparency** in placement processes
- **Data-driven** student guidance
- **Historical** trend analysis
- **Competitive** benchmarking between branches
- **Informed** decision-making for recruitment
- **Centralized** information hub for all stakeholders

---

## 📋 Conclusion

TPCell is a full-stack, production-ready placement management system that bridges the gap between students, companies, and educational administrators. With its comprehensive feature set, robust architecture, and focus on data analytics, it provides a modern solution to traditional placement cell challenges.

The platform's modular design, secure authentication, and scalable backend make it suitable for institutions of varying sizes, while its rich frontend experience ensures high user engagement and satisfaction across all stakeholder groups.

---

**Project Repository:** bmpsng1729/tpcell  
**Tech Stack:** MERN (MongoDB, Express, React, Node.js) + Redux + Tailwind CSS + Material-UI  
**Current Version:** Actively Developed  
**Status:** Production-Ready
