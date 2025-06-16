import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const contacts = {
  professorInCharge: {
    name: "D.K Shaw",
    title: "Professor In-Charge",
    department: "Department of Computer Science & Engineering",
    image: "https://www.nitjsr.ac.in/backend/uploads/Faculty/CA106/profile/ba4978c8-fcab-4906-9969-106d8b663826.jpg",
    phone: "+91-657-2373392",
    email: "pic.placement@nitjsr.ac.in"
  },
  placementManagers: [
    {
      name: "Krish Kumar",
      role: "B.Tech Representative",
      image: "https://media.licdn.com/dms/image/v2/D4E03AQEQmVQyVNBXFg/profile-displayphoto-shrink_800_800/B4EZU4r1rzHcAc-/0/1740412772398?e=1747872000&v=beta&t=an7spTaILsuVrLxySBNNCqgrKsLQnBfSh4e1hXMrq8c",
      phone: "+91-8521479632",
      email: "tpo.placement@nitjsr.ac.in"
    },
    {
      name: "Anishk Narayan",
      role: "B.tech Representative",
      image: "https://media.licdn.com/dms/image/v2/D5603AQHa2vQsFpl4zA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1706415317957?e=1747872000&v=beta&t=R2UTKxJOhGX4gWE-0wrKcPVYVa78E9yev1eF5Qb7Rik",
      phone: "+91-7845123690",
      email: "tpo.placement@nitjsr.ac.in"
    },
    {
      name: "Kumar Appu",
      role: "MBA Representative",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQFqee8M4OKOxA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718254450131?e=1747872000&v=beta&t=pqKIqp9-jmmkSMKFmESpB3dJRdB5Jnh50kPxzA5YMTo",
      phone: "+91-9876543210",
      email: "tpo.placement@nitjsr.ac.in"
    }
  ],
  administrativeStaff: {
    name: "B.R Reddy",
    title: "Training & Placement Officer",
    image: "https://www.nitjsr.ac.in/backend/uploads/Faculty/CS115/profile/0ba40629-590d-4ea7-a99d-80983f9d5b36.JPG",
    phone: "+91-657-2373422",
    email: "tpo@nitjsr.ac.in"
  }
};

function ContactCard({ image, name, title, department, phone, email }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 rounded-full object-cover mb-3 border-2 border-blue-500"
      />
      <h3 className="text-lg font-semibold text-center">{name}</h3>
      <p className="text-blue-600 text-sm">{title}</p>
      {department && <p className="text-gray-500 text-xs text-center mb-2">{department}</p>}
      <div className="text-sm space-y-1 text-center">
        <a href={`tel:${phone}`} className="flex justify-center items-center gap-1 text-gray-600 hover:text-blue-600">
          <Phone className="w-4 h-4" /> {phone}
        </a>
        <a href={`mailto:${email}`} className="flex justify-center items-center gap-1 text-gray-600 hover:text-blue-600">
          <Mail className="w-4 h-4" /> {email}
        </a>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-sm text-gray-600 mt-2">Get in touch with our placement team</p>
        </div>

        {/* Professor In-Charge */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">Professor In-Charge</h2>
          <ContactCard {...contacts.professorInCharge} />
        </section>

        {/* Coordinators */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">Co-Ordinators</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {contacts.placementManagers.map((manager, i) => (
              <ContactCard key={i} {...manager} title={manager.role} />
            ))}
          </div>
        </section>

        {/* Administrative Staff */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">Administrative Staff</h2>
          <ContactCard {...contacts.administrativeStaff} />
        </section>

        {/* Address */}
        <section className="bg-white rounded-xl shadow p-4 flex items-start gap-3">
          <MapPin className="w-5 h-5 text-blue-600 mt-1" />
          <div>
            <h3 className="text-base font-semibold text-gray-800 mb-1">Training & Placement Cell</h3>
            <p className="text-sm text-gray-600 leading-snug">
              National Institute of Technology Jamshedpur<br />
              Adityapur, Jamshedpur<br />
              Jharkhand - 831014, India
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;
