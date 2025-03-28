import { useRef } from "react";
import { useInView } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";

const News = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const newsItems = [
    {
      title: "Campus Recruitment Drive: Top Tech Companies",
      date: "May 15, 2024",
      excerpt: "Google, Microsoft, and Amazon will be visiting campus for recruitment in the upcoming season. Register by June 10.",
      category: "Placement Drive",
      link: "/news/tech-companies-recruitment"
    },
    {
      title: "Pre-Placement Workshop Series",
      date: "April 28, 2024",
      excerpt: "TPC announces a series of workshops to help students prepare for the placement season, covering resume building, interview skills, and more.",
      category: "Workshop",
      link: "/news/pre-placement-workshops"
    },
    {
      title: "Record Placements for 2023 Batch",
      date: "March 10, 2024",
      excerpt: "NIT Jamshedpur achieves 97% placement rate for the 2023 graduating batch with an average package of ₹12 LPA.",
      category: "Results",
      link: "/news/2023-placement-results"
    },
    {
      title: "Internship Opportunities for Pre-Final Year Students",
      date: "February 22, 2024",
      excerpt: "Several companies offering summer internship opportunities for pre-final year students. Apply through the TPC portal by March 15.",
      category: "Internships",
      link: "/news/summer-internships"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
          <div>
            <h2 className="section-title">Latest Updates</h2>
            <p className="text-gray-600 mt-6 max-w-2xl">
              Stay informed about placement activities, company visits, and important announcements 
              from the Training and Placement Cell.
            </p>
          </div>
          <a 
            href="/news" 
            className="mt-6 md:mt-0 inline-flex items-center text-nitj-600 hover:text-nitj-700 font-medium transition-all"
          >
            View All Updates
            <ArrowRight className="h-4 w-4 ml-2" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {newsItems.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateY(0)" : "translateY(30px)",
                transition: `all 0.5s ease ${index * 0.1}s`
              }}
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="px-3 py-1 bg-nitj-50 text-nitj-600 text-xs font-medium rounded-full">
                    {item.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="h-3.5 w-3.5 mr-1" />
                    {item.date}
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {item.excerpt}
                </p>
                
                <a 
                  href={item.link}
                  className="text-nitj-600 hover:text-nitj-700 text-sm font-medium inline-flex items-center transition-all"
                >
                  Read More
                  <ArrowRight className="h-3.5 w-3.5 ml-1 opacity-70" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
