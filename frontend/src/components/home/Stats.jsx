import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  const statistics = [
    { value: 97, label: "Placement Rate", suffix: "%", description: "Of eligible students placed in top companies" },
    { value: 350, label: "Companies", suffix: "+", description: "Visited campus for recruitment in last 5 years" },
    { value: 50, label: "Highest Package", prefix: "₹", suffix: " LPA", description: "Highest package offered to our students" },
    { value: 12, label: "Average Package", prefix: "₹", suffix: " LPA", description: "Average package for the batch 2023-24" }
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto">Placement Highlights</h2>
          <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
            Our students are placed in some of the most prestigious companies worldwide, 
            reflecting our commitment to excellence in education and industry preparedness.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <div 
              key={index}
              className="glass-card rounded-xl p-8 text-center transform transition-all duration-500 hover:scale-105 hover:shadow-xl"
              style={{ 
                transitionDelay: `${index * 100}ms`,
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateY(0)" : "translateY(20px)"
              }}
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-nitj-100 flex items-center justify-center">
                  <span className="text-nitj-700 text-xl font-bold">{index + 1}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-center">
                <span className="text-gray-800 text-sm font-medium">{stat.prefix || ""}</span>
                <span 
                  className="text-4xl font-display font-bold text-nitj-700"
                  style={{
                    counterReset: hasAnimated ? `count ${stat.value}` : "count 0"
                  }}
                >
                  {hasAnimated ? stat.value : 0}
                </span>
                <span className="text-gray-800 text-lg font-medium">{stat.suffix || ""}</span>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mt-2">{stat.label}</h3>
              <p className="text-gray-600 text-sm mt-2">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
