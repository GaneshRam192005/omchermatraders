// src/components/ContactSection.jsx
import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
      data-aos="fade-up"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10 text-center">
          <h2 id="contact-heading" className="text-2xl sm:text-3xl font-semibold text-gray-900">
            Contact Us
          </h2>
          <p className="text-sm text-gray-600 mt-2">We’re here to assist with all material enquiries</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Info Cards */}
          <div className="space-y-6" data-aos="fade-right" role="region" aria-label="Contact details">
            {/* Address */}
            <div className="flex items-start space-x-4 p-5 border border-gray-100 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gray-900 flex items-center justify-center text-white text-lg sm:text-xl">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900">Address</h3>
                <p className="text-sm text-gray-600 leading-relaxed mt-1">
                  Om Cherma Traders
                  <br />
                  Cement • Electrical Items • Steel
                  <br />
                  Tamil Nadu, India
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-4 p-5 border border-gray-100 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gray-900 flex items-center justify-center text-white text-lg sm:text-xl">
                <FaPhone />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900">Phone</h3>
                <p className="text-sm text-gray-600 leading-relaxed mt-1">
                  <a
                    href="tel:+918489047501"
                    className="text-gray-900 font-semibold hover:underline"
                  >
                    +91 84890 47501
                  </a>
                  <br />
                  Mon – Sat : 9:00 AM – 7:00 PM
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4 p-5 border border-gray-100 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gray-900 flex items-center justify-center text-white text-lg sm:text-xl">
                <FaEnvelope />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900">Email</h3>
                <p className="text-sm text-gray-600 mt-1">
                  <a
                    href="mailto:tradersomcherma@gmail.com"
                    className="text-gray-900 font-semibold hover:underline"
                  >
                    tradersomcherma@gmail.com
                  </a>
                </p>
              </div>
            </div>

            {/* WhatsApp Button */}
            <div className="mt-2">
              <a
                href="https://wa.me/918489047501?text=Hi,%20I'm%20interested%20in%20your%20products"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center w-full md:w-auto px-6 py-3.5 rounded-xl bg-green-600 text-white font-semibold text-lg shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300 transition"
                aria-label="Chat with us on WhatsApp"
              >
                <FaWhatsapp className="text-2xl mr-3" />
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Map */}
          <div
            className="rounded-xl overflow-hidden border border-gray-200 shadow-md h-64 sm:h-80 md:h-[450px]"
            data-aos="fade-left"
            role="region"
            aria-label="Location map"
          >
            <iframe
              title="Om Cherma Traders Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.5279618723694!2d77.80163037450292!3d9.45498518217655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06cf005e7c8989%3A0x75a685ed1a519603!2sOm%20cherma%20traders%20%7C%20cement%20%7C%20electrical%20items%20%7C%20steel!5e1!3m2!1sen!2sin!4v1762180971514!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
              aria-hidden={false}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
