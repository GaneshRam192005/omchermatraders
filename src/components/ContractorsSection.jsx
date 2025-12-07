import React from "react";
import { FaUsers, FaHardHat, FaTools, FaPhone, FaLinkedin, FaTwitter } from "react-icons/fa";

const contractors = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Senior Civil Engineer",
    description:
      "15+ years experience in residential and commercial projects. Specializes in sustainable building practices.",
    phone: "+919876543210",
    icon: "fa-users",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Electrical Contractor",
    description:
      "Expert in smart home installations and commercial wiring. Certified by IEI with 10+ years in the field.",
    phone: "+919812345678",
    icon: "fa-hard-hat",
  },
  {
    id: 3,
    name: "Anil Patel",
    role: "Structural Steel Specialist",
    description:
      "Leads large-scale infrastructure projects with a strong focus on safety and efficiency. 20+ years expertise.",
    phone: "+919845678901",
    icon: "fa-tools",
  },
];

const ContractorsSection = () => {
  return (
    <section
      id="contractors"
      className="py-20 px-4 bg-white"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Our Trusted Contractors
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            Experienced professionals for reliable and quality work
          </p>
        </div>

        {/* Contractor Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {contractors.map((c, idx) => (
            <article
              key={c.id}
              className="border border-gray-100 rounded-lg shadow-sm bg-white hover:shadow-md transition-shadow duration-200 p-6 flex flex-col"
              data-aos="fade-up"
              data-aos-delay={100 + idx * 100}
            >
              {/* Avatar Icon */}
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center shadow-sm">
                  {c.icon === "fa-users" && <FaUsers className="text-3xl text-gray-700" />}
                  {c.icon === "fa-hard-hat" && <FaHardHat className="text-3xl text-gray-700" />}
                  {c.icon === "fa-tools" && <FaTools className="text-3xl text-gray-700" />}
                </div>
              </div>

              {/* Contractor Info */}
              <h3 className="text-lg font-semibold text-gray-900 text-center">
                {c.name}
              </h3>
              <p className="text-sm text-gray-600 text-center mt-1">
                {c.role}
              </p>

              <p className="text-sm text-gray-600 mt-4 text-center leading-relaxed">
                {c.description}
              </p>

              {/* CTA Buttons */}
              <div className="mt-6 flex flex-col items-center gap-3">
                <a
                  href={`tel:${c.phone}`}
                  className="inline-flex items-center px-4 py-2 rounded-md bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition"
                >
                  <i className="fas fa-phone mr-2"></i> Call
                </a>

                <div className="flex space-x-3">
                  <a
                    href="#"
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
                  >
                    <FaLinkedin className="text-lg text-gray-700" />
                  </a>
                  <a
                    href="#"
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
                  >
                    <FaTwitter className="text-lg text-gray-700" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContractorsSection;
