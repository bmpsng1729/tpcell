import { useRef } from "react";
import { useInView } from "framer-motion";
import { GraduationCap, Users, BriefcaseBusiness, Building2 } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" ref={ref} className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div 
            className="order-2 lg:order-1"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateX(0)" : "translateX(-20px)",
              transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
            }}
          >
            <h2 className="section-title">About Placement Cell</h2>
            <p className="text-gray-600 mb-6">
              The Training and Placement Cell of NIT Jamshedpur is a dedicated team of professionals 
              working to bridge the gap between industry and academia. We facilitate the process of placement 
              of students in companies across the country and abroad.
            </p>
            <p className="text-gray-600 mb-8">
              Our mission is to provide excellent placement opportunities to students and help them 
              secure their dream careers. We maintain strong relationships with industry partners, 
              ensuring our students receive the best possible opportunities.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { 
                  icon: <GraduationCap className="h-6 w-6" />, 
                  title: "Quality Education", 
                  description: "Top-ranked engineering institute with exceptional faculty" 
                },
                { 
                  icon: <Users className="h-6 w-6" />, 
                  title: "Talented Pool", 
                  description: "Diverse talent pool with strong technical and soft skills" 
                },
                { 
                  icon: <BriefcaseBusiness className="h-6 w-6" />, 
                  title: "Industry Connect", 
                  description: "Strong industry partnerships for research and projects" 
                },
                { 
                  icon: <Building2 className="h-6 w-6" />, 
                  title: "Infrastructure", 
                  description: "State-of-the-art laboratories and technical facilities" 
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-3">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-nitj-50 flex items-center justify-center text-nitj-600">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div 
            className="order-1 lg:order-2 relative"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateX(0)" : "translateX(20px)",
              transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s"
            }}
          >
            <div className="aspect-[4/3] overflow-hidden rounded-xl relative">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                alt="NIT Jamshedpur Placement Cell" 
                className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-nitj-900/60 to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-8 -left-8 glass-card rounded-xl p-6 max-w-xs shadow-xl">
              <div className="flex items-center gap-4 mb-3">
                <div className="h-10 w-10 rounded-full bg-nitj-100 flex items-center justify-center text-nitj-600">
                  <span className="font-bold">TPC</span>
                </div>
                <h3 className="text-lg font-bold">Our Vision</h3>
              </div>
              <p className="text-gray-700 text-sm">
                To establish NIT Jamshedpur as a premier recruitment destination for global organizations 
                by nurturing industry-ready professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
