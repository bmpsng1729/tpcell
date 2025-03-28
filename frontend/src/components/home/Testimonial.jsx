import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Ankit Sharma",
      role: "Software Engineer, Google",
      batch: "2022 Graduate",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      quote: "The placement cell at NIT Jamshedpur provided exceptional support throughout my placement journey. Their guidance helped me secure a position at Google, setting the foundation for my career in software engineering."
    },
    {
      name: "Priya Patel",
      role: "Data Scientist, Microsoft",
      batch: "2021 Graduate",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      quote: "I'm grateful for the dedicated efforts of our placement cell. The mock interviews, resume reviews, and industry connections they provided were instrumental in helping me land my dream job at Microsoft."
    },
    {
      name: "Rahul Mehra",
      role: "Product Manager, Amazon",
      batch: "2023 Graduate",
      image: "https://randomuser.me/api/portraits/men/67.jpg",
      quote: "The placement team went above and beyond to connect us with top companies. Their personalized guidance and industry insights helped me navigate the competitive recruitment process and secure a position at Amazon."
    },
  ];

  const handlePrev = () => {
    setActiveIndex((current) => 
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((current) => 
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section ref={ref} className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto">Student Success Stories</h2>
          <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
            Hear from our alumni who have successfully transitioned from campus to career,
            sharing their experiences and achievements.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div 
            className="overflow-hidden rounded-2xl bg-nitj-50 p-8 md:p-12"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
            }}
          >
            <div className="absolute top-8 right-8 text-nitj-200">
              <Quote size={120} />
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 items-center relative z-10">
              <div className="md:w-1/3">
                <div className="relative">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img 
                      src={testimonials[activeIndex].image} 
                      alt={testimonials[activeIndex].name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-nitj-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                    {testimonials[activeIndex].batch}
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/3 text-center md:text-left">
                <p className="text-gray-700 text-lg mb-6 italic">
                  "{testimonials[activeIndex].quote}"
                </p>
                <h3 className="text-xl font-bold text-gray-900">
                  {testimonials[activeIndex].name}
                </h3>
                <p className="text-nitj-600 font-medium">
                  {testimonials[activeIndex].role}
                </p>
              </div>
            </div>
            
            <div className="flex justify-center md:justify-end gap-4 mt-8">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-700 hover:bg-nitj-100 hover:text-nitj-600 transition-all"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-700 hover:bg-nitj-100 hover:text-nitj-600 transition-all"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
          
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === activeIndex ? "bg-nitj-500 w-6" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
