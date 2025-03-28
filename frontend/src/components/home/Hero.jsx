import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full h-[85vh] bg-gradient-to-br from-nitj-900 to-nitj-700 overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/d1967620-3d1a-4b60-91d4-901d14468b17.png')] bg-cover bg-center"></div>
      </div>
      
      <div className="absolute inset-0 bg-nitj-900/50"></div>
      
      <div className="relative max-w-7xl h-full mx-auto px-6 py-32 flex flex-col justify-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>          
          <div className="inline-block px-4 py-1.5 mb-6 bg-white/10 backdrop-blur-sm rounded-full">
            <span className="text-white/90 font-medium">Training & Placement Cell</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight mb-6">
            Welcome to the placement website of <br />
            <span className="text-nitj-200">NIT Jamshedpur</span>
          </h1>
          
          <p className="max-w-2xl text-lg text-white/80 mb-8">
            This college ranks among the top 5 most placed colleges in India. Our graduates combine rigorous thinking, hard work, and strong fundamentals. They are nurtured by the institute to excel and make an impact in their respective fields.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link to="/login" className="btn-primary flex items-center gap-2 group">
              Sign In
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/companies/why-recruit" className="btn-outline">
              Recruit from NIT Jamshedpur
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <div className="flex space-x-16 px-8 py-4 glass-card rounded-xl">
            {[
              { label: "Students Placed", value: "750+" },
              { label: "Recruiting Companies", value: "300+" },
              { label: "Highest Package", value: "₹50 LPA" },
              { label: "Average Package", value: "₹12 LPA" }
            ].map((stat, index) => (
              <div 
                key={index} 
                className={`text-center transition-all duration-1000 delay-${index * 200} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <p className="text-nitj-100 font-display font-bold text-2xl">{stat.value}</p>
                <p className="text-white/70 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
