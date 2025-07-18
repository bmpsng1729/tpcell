// import React from 'react';
// import { Phone, Mail, MapPin } from 'lucide-react';

// const contacts = {
//   professorInCharge: {
//     name: "D.K Shaw",
//     title: "Professor In-Charge",
//     department: "Department of Computer Science & Engineering",
//     image: "https://www.nitjsr.ac.in/backend/uploads/Faculty/CA106/profile/ba4978c8-fcab-4906-9969-106d8b663826.jpg",
//     phone: "+91-657-2373392",
//     email: "pic.placement@nitjsr.ac.in"
//   },
//   placementManagers: [
//     {
//       name: "Krish Kumar",
//       role: "B.Tech Representative",
//       image: "https://media.licdn.com/dms/image/v2/D4E03AQEQmVQyVNBXFg/profile-displayphoto-shrink_800_800/B4EZU4r1rzHcAc-/0/1740412772398?e=1747872000&v=beta&t=an7spTaILsuVrLxySBNNCqgrKsLQnBfSh4e1hXMrq8c",
//       phone: "+91-8521479632",
//       email: "tpo.placement@nitjsr.ac.in"
//     },
//     {
//       name: "Anishk Narayan",
//       role: "B.tech Representative",
//       image: "https://media.licdn.com/dms/image/v2/D5603AQHa2vQsFpl4zA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1706415317957?e=1747872000&v=beta&t=R2UTKxJOhGX4gWE-0wrKcPVYVa78E9yev1eF5Qb7Rik",
//       phone: "+91-7845123690",
//       email: "tpo.placement@nitjsr.ac.in"
//     },
//     {
//       name: "Kumar Appu",
//       role: "MBA Representative",
//       image: "https://media.licdn.com/dms/image/v2/D4D03AQFqee8M4OKOxA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718254450131?e=1747872000&v=beta&t=pqKIqp9-jmmkSMKFmESpB3dJRdB5Jnh50kPxzA5YMTo",
//       phone: "+91-9876543210",
//       email: "tpo.placement@nitjsr.ac.in"
//     },
//     // {
//     //   name: "Ankit Patel",
//     //   role: "PhD Representative",
//     //   image: "https://www.nitjsr.ac.in/backend/uploads/tpo/20230711064518.jpg",
//     //   phone: "+91-8765432109",
//     //   email: "tpo.placement@nitjsr.ac.in"
//     // }
//   ],
//   administrativeStaff: {
//     name: "B.R Reddy",
//     title: "Training & Placement Officer",
//     image: "https://www.nitjsr.ac.in/backend/uploads/Faculty/CS115/profile/0ba40629-590d-4ea7-a99d-80983f9d5b36.JPG",
//     phone: "+91-657-2373422",
//     email: "tpo@nitjsr.ac.in"
//   }
// };

// function ContactCard({ image, name, title, department, phone, email }) {
//   return (
//     <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
//       <img 
//         src={image} 
//         alt={name} 
//         className="w-32 h-32 rounded-full object-cover mb-4"
//       />
//       <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
//       <p className="text-blue-600 font-medium mb-2">{title}</p>
//       {department && (
//         <p className="text-gray-600 text-sm mb-4 text-center">{department}</p>
//       )}
//       <div className="space-y-2 w-full">
//         <a 
//           href={`tel:${phone}`} 
//           className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
//         >
//           <Phone className="w-4 h-4 mr-2" />
//           {phone}
//         </a>
//         <a 
//           href={`mailto:${email}`} 
//           className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
//         >
//           <Mail className="w-4 h-4 mr-2" />
//           {email}
//         </a>
//       </div>
//     </div>
//   );
// }

// function Contact() {
//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-4">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
//           <p className="mt-4 text-gray-600">
//             Get in touch with our placement team
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {/* Professor In-Charge */}
//           <div className="lg:col-span-3">
//             <h2 className="text-2xl font-semibold text-gray-900 mb-6">Professor In-Charge</h2>
//             <ContactCard {...contacts.professorInCharge} />
//           </div>

//           {/* Placement Managers */}
//           <div className="lg:col-span-3">
//             <h2 className="text-2xl font-semibold text-gray-900 mb-6">Co-Ordinator</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//               {contacts.placementManagers.map((manager, index) => (
//                 <ContactCard key={index} {...manager} title={manager.role} />
//               ))}
//             </div>
//           </div>

//           {/* Administrative Staff */}
//           <div className="lg:col-span-3">
//             <h2 className="text-2xl font-semibold text-gray-900 mb-6">Administrative Staff</h2>
//             <ContactCard {...contacts.administrativeStaff} />
//           </div>

//           {/* Address Section */}
//           <div className="lg:col-span-3 bg-white rounded-lg shadow-md p-6">
//             <div className="flex items-start space-x-4">
//               <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
//               <div>
//                 <h3 className="text-xl font-semibold text-gray-900 mb-2">Training & Placement Cell</h3>
//                 <p className="text-gray-600">
//                   National Institute of Technology Jamshedpur<br />
//                   Adityapur, Jamshedpur<br />
//                   Jharkhand - 831014, India
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Contact;



import React from 'react';

const Contact = () => {
  return (
    <footer className="bg-[#0C4A6E] text-white px-8 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left Section */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <img src="/logo.png" alt="NIT Jamshedpur Logo" className="h-8" />
            <div>
              <h2 className="font-bold text-lg">NIT JAMSHEDPUR</h2>
              <p className="text-sm">TRAINING & PLACEMENT CELL</p>
            </div>
          </div>
          <p className="text-sm text-gray-300 mb-4">
            The Training and Placement Cell of NIT Jamshedpur is dedicated to facilitating career opportunities for our students and fostering strong industry-academia partnerships.
          </p>
          <div className="flex space-x-4">
            <a href="#"><i className="fab fa-facebook-f bg-white text-blue-600 p-2 rounded-full"></i></a>
            <a href="#"><i className="fab fa-twitter bg-white text-blue-500 p-2 rounded-full"></i></a>
            <a href="#"><i className="fab fa-linkedin-in bg-white text-blue-700 p-2 rounded-full"></i></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">For Students</a></li>
            <li><a href="#">For Companies</a></li>
            <li><a href="#">Placement Statistics</a></li>
            <li><a href="#">Past Recruiters</a></li>
            <li><a href="#">Placement Brochure</a></li>
            <li><a href="#">NIT Jamshedpur</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="font-bold text-lg mb-3">Contact Us</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-start">
              <span className="mr-2">📍</span>
              NIT Jamshedpur, Adityapur,<br />
              Jamshedpur, Jharkhand, 831014
            </li>
            <li className="flex items-center"><span className="mr-2">📞</span>+91 9876543210</li>
            <li className="flex items-center"><span className="mr-2">✉️</span>placement@nitjsr.ac.in</li>
          </ul>
        </div>

        {/* Location Map */}
        <div>
          <h3 className="font-bold text-lg mb-3">Location</h3>
          <iframe
            title="NIT Jamshedpur Map"
            className="w-full h-40 rounded-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.190750297735!2d86.144402875251!3d23.809189186650726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6e382a71a93ed%3A0x5f8e4d0f4af79aa3!2sNational%20Institute%20of%20Technology%2C%20Jamshedpur!5e0!3m2!1sen!2sin!4v1614156211442!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="text-center text-sm text-gray-400 mt-12">
        © 2025 Training & Placement Cell, NIT Jamshedpur. All rights reserved.
      </div>
    </footer>
  );
};

export default Contact;
