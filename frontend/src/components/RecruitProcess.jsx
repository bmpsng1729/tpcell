import React from 'react';

import { 
  Users, 
  UserPlus, 
  CreditCard, 
  Briefcase, 
  CheckCircle, 
  UserCheck,
  ClipboardList,
  Search,
  CalendarCheck,
  UserCheck2,
  Calendar,
  FileCheck,
  Mail,
  FileText,
  CheckCircle2
} from 'lucide-react';

const steps = [
  {
    number: 1,
    icon: <Users className="w-6 h-6" />,
    title: "Initial Contact",
    description: "The Placement Office appoints a point of contact and sends invitations to recruiting organizations"
  },
  {
    number: 2,
    icon: <UserPlus className="w-6 h-6" />,
    title: "Online Registration",
    description: "Recruiters create their online account for the recruitment process"
  },
  {
    number: 3,
    icon: <CreditCard className="w-6 h-6" />,
    title: "Payment Processing",
    description: "Complete the registration by making the required payment (Only for Placements)"
  },
  {
    number: 4,
    icon: <Briefcase className="w-6 h-6" />,
    title: "Job Posting",
    description: "Recruiters create jobs/internships containing the details of opportunity as required"
  },
  {
    number: 5,
    icon: <CheckCircle className="w-6 h-6" />,
    title: "Verification",
    description: "The details of the job are verified by the executive officers"
  },
  {
    number: 6,
    icon: <UserCheck className="w-6 h-6" />,
    title: "Job Publication",
    description: "After successful verification, the job is made available online to the students"
  },
  {
    number: 7,
    icon: <ClipboardList className="w-6 h-6" />,
    title: "Student Applications",
    description: "Interested students show their willingness by applying for the job"
  },
  {
    number: 8,
    icon: <Search className="w-6 h-6" />,
    title: "Candidate Review",
    description: "Companies view resumes of interested students and shortlist candidates"
  },
  {
    number: 9,
    icon: <CalendarCheck className="w-6 h-6" />,
    title: "Screening Process",
    description: "Companies proceed with their tests/screening process after finalizing the schedule"
  },
  {
    number: 10,
    icon: <UserCheck2 className="w-6 h-6" />,
    title: "Final Shortlist",
    description: "Companies shortlist the selected students for final interview process"
  },
  {
    number: 11,
    icon: <Calendar className="w-6 h-6" />,
    title: "Interview Scheduling",
    description: "Placement Office allots dates to organizations for campus interviews"
  },
  {
    number: 12,
    icon: <FileCheck className="w-6 h-6" />,
    title: "Date Confirmation",
    description: "The organization confirms the dates with the Placement Office"
  },
  {
    number: 13,
    icon: <Mail className="w-6 h-6" />,
    title: "Offer List",
    description: "Organizations provide the list of students receiving offers"
  },
  {
    number: 14,
    icon: <FileText className="w-6 h-6" />,
    title: "Office Notification",
    description: "Placement Office notifies an organization with the acceptance of selected students"
  },
  {
    number: 15,
    icon: <CheckCircle2 className="w-6 h-6" />,
    title: "Offer Generation",
    description: "Organization generates and delivers the offer letter to the selected candidates"
  }
];

function RecruitProcess() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Recruitment Process</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our process has evolved over years to ensure that our recruiters have a seamless hiring experience. 
            Here we have simplified the steps for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div 
              key={step.number}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                    {step.icon}
                  </div>
                  <div className="ml-4">
                    <span className="text-sm font-semibold text-blue-600">Step {step.number}</span>
                    <h3 className="text-lg font-medium text-gray-900">{step.title}</h3>
                  </div>
                </div>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecruitProcess;