// src/components/Footer.jsx
import React from "react";
import {
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaHeart,
} from "react-icons/fa";
import omcherma from "../assets/omcherma.png";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8 py-12">
        {/* Top content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-start gap-4">
              <img src={omcherma} alt="Om Cherma Logo" className="w-12 h-12 rounded-lg" />

              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                  Om Cherma Traders
                </h3>
                <p className="text-sm text-gray-600 mt-2 max-w-xl">
                  Trusted supplier of construction materials — cement, steel and electrical supplies across Tamil Nadu.
                </p>

                <div className="flex items-center gap-3 mt-4">
                  <a
                    href="https://wa.me/918489047501"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="WhatsApp"
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-green-600 text-white text-sm font-medium hover:bg-green-700 transition"
                  >
                    <FaWhatsapp className="w-4 h-4" />
                    WhatsApp
                  </a>

                  <a
                    href="tel:+918489047501"
                    aria-label="Call"
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-gray-200 text-sm text-gray-800 hover:bg-gray-50 transition"
                  >
                    <FaPhone className="w-4 h-4" />
                    Call
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-md font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-gray-600 hover:text-gray-900 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-600 hover:text-gray-900 transition">
                  Products
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-600 hover:text-gray-900 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 hover:text-gray-900 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-md font-semibold text-gray-900 mb-4">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-700">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700">
                  <FaMapMarkerAlt />
                </span>
                <div>
                  <div className="font-medium text-gray-900">Address</div>
                  <div className="text-gray-600">Tamil Nadu, India</div>
                </div>
              </li>

              <li className="flex items-center gap-3">
                <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700">
                  <FaPhone />
                </span>
                <div>
                  <a href="tel:+918489047501" className="font-medium text-gray-900 hover:underline">
                    +91 84890 47501
                  </a>
                  <div className="text-gray-600 text-sm">Mon – Sat: 9:00 AM – 7:00 PM</div>
                </div>
              </li>

              <li className="flex items-center gap-3">
                <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700">
                  <FaEnvelope />
                </span>
                <div>
                  <a href="mailto:tradersomcherma@gmail.com" className="font-medium text-gray-900 hover:underline break-all">
                    tradersomcherma@gmail.com
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-3">
                <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700">
                  <FaClock />
                </span>
                <div>
                  <div className="font-medium text-gray-900">Hours</div>
                  <div className="text-gray-600 text-sm">Mon – Sat: 09:00 – 19:00</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100 mt-10 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-600">
              &copy; {new Date().getFullYear()} Om Cherma Traders. All rights reserved.
            </p>

            <div className="flex items-center gap-6 text-sm text-gray-600">
              <a href="#privacy" className="hover:text-gray-900 transition">
                Privacy Policy
              </a>
              <span className="text-gray-300">|</span>
              <a href="#terms" className="hover:text-gray-900 transition">
                Terms of Service
              </a>
            </div>

           
          </div>
        </div>
      </div>
    </footer>
  );
}
