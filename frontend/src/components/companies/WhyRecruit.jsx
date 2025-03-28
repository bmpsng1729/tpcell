import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CheckCircle } from "lucide-react";

const WhyRecruit = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-display font-bold text-gray-900 mb-6">
            Why Recruit from NIT Jamshedpur
          </h1>
          
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            NIT Jamshedpur has been a consistent provider of talent to industries across sectors. When you recruit from NIT Jamshedpur, you're choosing excellence, innovation, and leadership.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-display font-bold text-nitj-700 mb-4">
                Academic Excellence
              </h2>
              <p className="text-gray-600 mb-6">
                Our rigorous academic program ensures students receive comprehensive theoretical and practical knowledge, making them industry-ready from day one.
              </p>
              <ul className="space-y-3">
                {["Top 1% of students selected through competitive exams",
                  "Comprehensive curriculum developed with industry inputs",
                  "State-of-the-art labs and research facilities",
                  "Faculty with extensive industry experience"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-nitj-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-display font-bold text-nitj-700 mb-4">
                Industry-Ready Skills
              </h2>
              <p className="text-gray-600 mb-6">
                Beyond academics, our students develop essential skills through various activities, making them valuable team members from day one.
              </p>
              <ul className="space-y-3">
                {["Hands-on experience through industry internships",
                  "Technical clubs and project-based learning",
                  "Soft skills development through dedicated training",
                  "Hackathons, competitions, and real-world problem solving"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-nitj-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="bg-nitj-50 p-8 rounded-xl mb-12">
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">
              Our Track Record
            </h2>
            <p className="text-gray-700 mb-6">
              Over the years, NIT Jamshedpur graduates have proven their mettle across industries. Our alumni hold key positions in leading organizations worldwide.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[{ label: "Years of Excellence", value: "60+" },
                { label: "Companies that Trust Us", value: "300+" },
                { label: "Successful Alumni", value: "40,000+" },
                { label: "Research Publications", value: "1,000+" }
              ].map((stat, index) => (
                <div key={index} className="bg-white p-4 rounded-lg text-center">
                  <p className="text-3xl font-display font-bold text-nitj-700">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">
              Start Recruiting Today
            </h2>
            <p className="text-gray-700 mb-6">
              We invite you to partner with NIT Jamshedpur's Training & Placement Cell to access our talent pool. Our dedicated team will guide you through the recruitment process.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="/companies/procedure" className="btn-primary">
                View Recruitment Procedure
              </a>
              <a href="/contact" className="btn-outline">
                Contact T&P Cell
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default WhyRecruit;
