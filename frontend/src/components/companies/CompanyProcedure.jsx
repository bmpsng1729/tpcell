import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CheckCircle, FileText, Mail, Phone, Calendar, Building } from "lucide-react";

const CompanyProcedure = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-display font-bold text-gray-900 mb-6">
            Recruitment Procedure
          </h1>
          
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            The Training and Placement Cell of NIT Jamshedpur follows a streamlined process to make recruitment 
            efficient and effective for our industry partners. Here's how you can recruit from our campus.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-display font-bold text-nitj-700 mb-4 flex items-center">
                <Calendar className="mr-2 h-6 w-6" />
                Recruitment Timeline
              </h2>
              <p className="text-gray-600 mb-6">
                Our placement season begins in July every year. We offer flexible scheduling for campus recruitment.
              </p>
              <ul className="space-y-4">
                {["Pre-Placement Talks: Starting July",
                  "Phase I (Early Placement): August - December",
                  "Phase II (Regular Placement): January - May",
                  "Off-campus and virtual recruitments: Year-round",
                  "Internship drives: September and January"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-nitj-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-display font-bold text-nitj-700 mb-4 flex items-center">
                <FileText className="mr-2 h-6 w-6" />
                Required Documents
              </h2>
              <p className="text-gray-600 mb-6">
                To initiate the recruitment process, please provide the following information.
              </p>
              <ul className="space-y-4">
                {["Job description with detailed roles and responsibilities",
                  "Candidate requirements (academic criteria, skills, etc.)",
                  "Compensation package details",
                  "Recruitment process stages",
                  "Tentative dates for campus visit"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-nitj-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 mb-12">
            <h2 className="text-2xl font-display font-bold text-nitj-700 mb-6 flex items-center">
              <Building className="mr-2 h-6 w-6" />
              Recruitment Process Steps
            </h2>
            
            <div className="space-y-6">
              {["Initial Contact", "Job Announcement", "Pre-Placement Talk", "Selection Process", "Final Selection & Offers"].map((title, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-6">
                  <div className="flex items-center justify-center h-14 w-14 rounded-full bg-nitj-100 text-nitj-700 font-bold text-xl flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{title}</h3>
                    <p className="text-gray-600 mt-2">
                      {[
                        "Contact the Training and Placement Cell through email or phone to express your interest in recruiting from NIT Jamshedpur.",
                        "Submit the Job Announcement Form with details of job profiles, eligibility criteria, and compensation.",
                        "Schedule a pre-placement talk (in-person or virtual) to introduce your company to students.",
                        "Conduct your selection process which may include written tests, coding assessments, group discussions, and interviews.",
                        "Announce final selections and provide offer letters to selected candidates."
                      ][index]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-nitj-50 rounded-lg p-8">
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">
              Contact the Placement Team
            </h2>
            <p className="text-gray-700 mb-6">
              For any queries regarding recruitment or to initiate the process, please reach out to us:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg flex items-start">
                <Mail className="h-10 w-10 text-nitj-600 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Email</h3>
                  <a href="mailto:placement@nitjsr.ac.in" className="text-nitj-600 hover:underline">
                    placement@nitjsr.ac.in
                  </a>
                  <p className="text-gray-600 mt-1">
                    For general inquiries and sending job descriptions
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg flex items-start">
                <Phone className="h-10 w-10 text-nitj-600 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Phone</h3>
                  <a href="tel:+919876543210" className="text-nitj-600 hover:underline">
                    +91 9876543210
                  </a>
                  <p className="text-gray-600 mt-1">
                    Available Mon-Fri, 9:00 AM - 5:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CompanyProcedure;