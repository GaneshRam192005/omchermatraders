// src/components/ContactSection.jsx
import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-16 px-4 bg-white"
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Contact Us
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            We’re here to assist with all material enquiries
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info Cards */}
          <div className="space-y-6" data-aos="fade-right">
            {/* Address */}
            <div className="flex items-start space-x-5 p-6 border border-gray-100 rounded-xl bg-white shadow-sm hover:shadow-md transition">
              <div className="w-14 h-14 rounded-xl bg-gray-900 flex items-center justify-center text-white text-xl">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900">Address</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Om Cherma Traders<br />
                  Cement • Electrical Items • Steel<br />
                  Tamil Nadu, India
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-5 p-6 border border-gray-100 rounded-xl bg-white shadow-sm hover:shadow-md transition">
              <div className="w-14 h-14 rounded-xl bg-gray-900 flex items-center justify-center text-white text-xl">
                <FaPhone />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900">Phone</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
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
            <div className="flex items-start space-x-5 p-6 border border-gray-100 rounded-xl bg-white shadow-sm hover:shadow-md transition">
              <div className="w-14 h-14 rounded-xl bg-gray-900 flex items-center justify-center text-white text-xl">
                <FaEnvelope />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900">Email</h3>
                <p className="text-sm text-gray-600">
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
            <a
              href="https://wa.me/918489047501?text=Hi,%20I'm%20interested%20in%20your%20products"
              target="_blank"
              rel="noreferrer"
              className="w-full inline-flex items-center justify-center px-6 py-4 rounded-xl bg-green-600 text-white font-semibold text-lg shadow-sm hover:bg-green-700 transition"
            >
              <FaWhatsapp className="text-2xl mr-3" />
              WhatsApp Us
            </a>
          </div>

          {/* Map */}
          <div
            className="rounded-xl overflow-hidden border border-gray-200 shadow-md h-[450px]"
            data-aos="fade-left"
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
              className="transition-all"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
