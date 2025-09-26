# Placement Cell — Project Plan

A structured summary based entirely on the provided project plan file.

## Objective (Pain Points)

- During internship and the current placement season, it was hard to find:
  - Which companies visited in previous years
  - How many seniors were placed and where
  - What specific companies look for and when they visit
  - Trends over previous years

## Planning

### Who will use this

- Final-year students of all branches

### What will they use it for

- all the student of all branches student who will be in the final year
- previous year placement trends
- all visited company
- company planned for him(future addition)
- drive helding(future addition)
- analysis of placement of last 5 years visually

### Workflow Schema

- (As per the provided document’s ‘workflow schema’ section)

## Tech Stack

**Frontend**
- React+vite
- Tailwind
- Redux
- React
- Hook Form

**Backend**
- Express.js
- Node.js
- Mongoose
- Bcrypt
- Cloudinary
- Node

**Database**
- Database:
- MongoDb

## Core Functionality (from plan)

- DB Schema
- Component hierarchy
- High Level Design (HLD) and Low Level Design (LLD)

## High-Level Design (selected notes)

- a.requirment gathering
- Student
- Track applied companiew
- Recruiter(future addition
- Check ATS of student
- Job managing/ posti
- Chat with students

## API Endpoints (as listed)

- POST /signup → Register a new user.
- POST /login → User login.
- POST /registercompany → Register a new company.
- GET /showallvisitedcompanyyearwise → List all visited companies year
- GET /topcompanies → Get top recruiting companies.
- POST /createdepartment → Create a new department.
- GET /averagepackagebranchwise → Get average package branch
- GET /placementpercentagebranchwise → Get placement percentage branch
- GET /lastfourbatchplacement → Get placement count for last 4 batches.
- GET /lastfourbatchavgplaced → Get average placements for last 4 batches.
- POST /markplaced → Mark a student as placed.
- GET /showallstudentbatchwise → Show all placed students batch
- GET /toppackagestudents → Get top package students.
- GET /totalplacedstudent → Get total number of placed students.
- GET /averagepackageyearwise → Get average package year
- GET /piechartviewdata → Get placement data for pie chart view.
- GET /totalstudent → Get total number of students (Admin only).
- GET /cgpabasedstudent → Fetch students filtered by CGPA.
- GET /annualreport → Get annual report.
- GET /totalstudent → Get total students count.
