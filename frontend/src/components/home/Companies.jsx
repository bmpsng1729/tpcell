import { useRef } from "react";
import { useInView } from "framer-motion";

const Companies = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const companyLogos = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/2560px-Facebook_Logo_%282019%29.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/2560px-Accenture.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Shell_logo.svg/1280px-Shell_logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Cisco_logo.svg/1280px-Cisco_logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/2560px-Wipro_Primary_Logo_Color_RGB.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Tata_Consultancy_Services_Logo.svg/1280px-Tata_Consultancy_Services_Logo.svg.png",
  ];

  const sectors = [
    "Information Technology",
    "Core Engineering",
    "Finance & Banking",
    "Consulting",
    "Analytics",
    "E-commerce",
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto">Our Recruiters</h2>
          <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
            We're proud to partner with leading companies across diverse sectors, 
            providing our students with exceptional career opportunities.
          </p>
        </div>

        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {sectors.map((sector, index) => (
              <div 
                key={index}
                className="px-6 py-2 rounded-full bg-white border border-gray-200 text-gray-700 text-sm font-medium cursor-pointer hover:bg-nitj-50 hover:text-nitj-600 hover:border-nitj-200 transition-all"
                style={{
                  opacity: isInView ? 1 : 0,
                  transform: isInView ? "translateY(0)" : "translateY(20px)",
                  transition: `all 0.5s ease ${index * 0.1}s`
                }}
              >
                {sector}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {companyLogos.map((logo, index) => (
              <div 
                key={index}
                className="flex items-center justify-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all"
                style={{
                  opacity: isInView ? 1 : 0,
                  transform: isInView ? "scale(1)" : "scale(0.9)",
                  transition: `all 0.5s ease ${index * 0.05}s`
                }}
              >
                <img 
                  src={logo} 
                  alt="Company Logo" 
                  className="h-10 object-contain filter grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <a 
            href="/companies/past-recruiters" 
            className="inline-flex items-center text-nitj-600 hover:text-nitj-700 font-medium group transition-all"
            style={{
              opacity: isInView ? 1 : 0,
              transition: "all 0.5s ease 0.8s"
            }}
          >
            View All Recruiters
            <svg className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Companies;