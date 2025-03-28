import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Building2, Medal, Award } from 'lucide-react';

const PastRecruiters = () => {
  const tierOneRecruiters = [
    "Microsoft", "Google", "Amazon", "Oracle", "Adobe", 
    "Goldman Sachs", "Morgan Stanley", "Deloitte", "Accenture", "TCS"
  ];
  
  const tierTwoRecruiters = [
    "Infosys", "Wipro", "HCL", "Tech Mahindra", "IBM", 
    "Cognizant", "Capgemini", "Mindtree", "L&T Infotech", "LTI Mindtree"
  ];
  
  const tierThreeRecruiters = [
    "Hexaware", "Mphasis", "Virtusa", "Zensar", "Persistent", 
    "Birlasoft", "KPIT", "Cyient", "Sonata Software", "Sasken"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-display font-bold text-gray-900 mb-6">
            Our Past Recruiters
          </h1>
          
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            NIT Jamshedpur has a strong network of industry partners who regularly recruit from our campus. 
            Here are some of the prestigious companies that have recruited our students in the past.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white shadow-md rounded-lg p-8">
              <div className="flex items-center mb-4">
                <Building2 className="h-8 w-8 text-nitj-600 mr-3" />
                <h2 className="text-2xl font-display font-bold text-gray-900">Tier 1 Recruiters</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Leading global corporations offering premium compensation packages and challenging roles.
              </p>
              <ul className="space-y-2">
                {tierOneRecruiters.map((company, index) => (
                  <li key={index} className="flex items-center">
                    <Medal className="h-4 w-4 text-nitj-500 mr-2" />
                    <span className="text-gray-700">{company}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white shadow-md rounded-lg p-8">
              <div className="flex items-center mb-4">
                <Building2 className="h-8 w-8 text-nitj-600 mr-3" />
                <h2 className="text-2xl font-display font-bold text-gray-900">Tier 2 Recruiters</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Established companies offering competitive packages and diverse opportunities.
              </p>
              <ul className="space-y-2">
                {tierTwoRecruiters.map((company, index) => (
                  <li key={index} className="flex items-center">
                    <Award className="h-4 w-4 text-nitj-500 mr-2" />
                    <span className="text-gray-700">{company}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white shadow-md rounded-lg p-8">
              <div className="flex items-center mb-4">
                <Building2 className="h-8 w-8 text-nitj-600 mr-3" />
                <h2 className="text-2xl font-display font-bold text-gray-900">Tier 3 Recruiters</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Growing companies offering good growth opportunities and mentorship.
              </p>
              <ul className="space-y-2">
                {tierThreeRecruiters.map((company, index) => (
                  <li key={index} className="flex items-center">
                    <Award className="h-4 w-4 text-nitj-500 mr-2" />
                    <span className="text-gray-700">{company}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="bg-nitj-50 rounded-lg p-8 mt-12">
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-6 text-center">
              Placement Statistics Over Years
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Companies Visited", value: "300+", icon: Building2 },
                { label: "Students Placed", value: "92%", icon: Medal },
                { label: "Highest CTC", value: "₹50 LPA", icon: Award },
                { label: "Average CTC", value: "₹12 LPA", icon: Award }
              ].map((stat, index) => (
                <div key={index} className="bg-white rounded-lg p-6 text-center shadow-sm">
                  <stat.icon className="h-8 w-8 mx-auto mb-3 text-nitj-600" />
                  <p className="text-3xl font-display font-bold text-nitj-700">{stat.value}</p>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PastRecruiters;
