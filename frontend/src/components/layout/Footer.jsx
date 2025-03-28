import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-nitj-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <img 
                src="https://www.nitjsr.ac.in/frontend/images/logo.png" 
                alt="NIT Jamshedpur" 
                className="h-10 invert"
              />
              <div className="flex flex-col">
                <span className="text-sm font-semibold">NIT JAMSHEDPUR</span>
                <span className="text-xs text-gray-400">TRAINING & PLACEMENT CELL</span>
              </div>
            </div>
            
            <p className="text-gray-400 text-sm mb-6">
              The Training and Placement Cell of NIT Jamshedpur is dedicated to facilitating career 
              opportunities for our students and fostering strong industry-academia partnerships.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="h-9 w-9 rounded-full bg-nitj-800 flex items-center justify-center hover:bg-nitj-700 transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="h-9 w-9 rounded-full bg-nitj-800 flex items-center justify-center hover:bg-nitj-700 transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="#" 
                className="h-9 w-9 rounded-full bg-nitj-800 flex items-center justify-center hover:bg-nitj-700 transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[...
                { label: "For Students", href: "/students/procedure" },
                { label: "For Companies", href: "/companies/why-recruit" },
                { label: "Placement Statistics", href: "/statistics" },
                { label: "Past Recruiters", href: "/companies/past-recruiters" },
                { label: "Placement Brochure", href: "/brochure" },
                { label: "NIT Jamshedpur", href: "https://www.nitjsr.ac.in/" },
              ].map((link, index) => (
                <li key={index}>
                  {link.href.startsWith('http') ? (
                    <a 
                      href={link.href} 
                      className="text-gray-400 hover:text-white hover:underline transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link 
                      to={link.href} 
                      className="text-gray-400 hover:text-white hover:underline transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-nitj-300 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  NIT Jamshedpur, Adityapur,<br />
                  Jamshedpur, Jharkhand, 831014
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-nitj-300 flex-shrink-0" />
                <a href="tel:+919876543210" className="text-gray-400 hover:text-white transition-colors">
                  +91 9876543210
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-nitj-300 flex-shrink-0" />
                <a href="mailto:placement@nitjsr.ac.in" className="text-gray-400 hover:text-white transition-colors">
                  placement@nitjsr.ac.in
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Location</h3>
            <div className="rounded-lg overflow-hidden h-48">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.0055341894154!2d86.4360870767442!3d22.804621174376814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e4dbcd6f09c1%3A0xf634d33c4168a4a4!2sNational%20Institute%20of%20Technology%2C%20Jamshedpur!5e0!3m2!1sen!2sin!4v1682942050465!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="NIT Jamshedpur Map"
              ></iframe>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-nitj-800 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Training & Placement Cell, NIT Jamshedpur. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;