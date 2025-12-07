import React from "react";
import { FaPaperPlane, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import heroImage from "../assets/hero.avif";

export default function HeroSection() {
  return (
    // Add padding-top equal to header height (h-16 -> 4rem). Use pt-20 for more breathing room on large screens.
    <section
      id="home"
      className="relative bg-white min-h-[70vh] md:min-h-[78vh] flex items-center pt-16 md:pt-20 overflow-x-hidden"
      aria-label="Home"
    >
      {/* Background image - ensure no horizontal overflow by using bg-cover + bg-center + no-repeat */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat transform-gpu"
        style={{ backgroundImage: `url(${heroImage})`, willChange: "transform" }}
        aria-hidden
      />

      {/* Strong overlay for reliable contrast on busy/dark images */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/30"
        aria-hidden
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1 text-white"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 shadow-sm">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <rect x="3" y="7" width="18" height="10" rx="1.5" stroke="#FFFFFF" strokeWidth="1.2" />
                  <path d="M7 7V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <div>
                <div className="text-base md:text-lg font-semibold">Om Cherma</div>
                <div className="text-xs text-white/80 -mt-0.5">Construction • Cement • Steel • Electricals</div>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold leading-tight tracking-tight drop-shadow-[0_8px_24px_rgba(0,0,0,0.6)]">
              Quality construction materials, delivered reliably
            </h1>

            <p className="mt-4 max-w-xl text-gray-100 text-sm md:text-base leading-relaxed drop-shadow-[0_6px_18px_rgba(0,0,0,0.45)]">
              From high-strength cement and industrial-grade steel to dependable electrical supplies — retail or bulk, backed by expert advice and fast delivery.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 max-w-sm">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-white text-gray-900 font-semibold shadow-lg hover:scale-[1.01] transform transition"
              >
                <FaPaperPlane className="w-4 h-4 mr-2" aria-hidden />
                Contact Us
              </a>

              <a
                href="https://wa.me/918489047501?text=Hi,%20I'm%20interested%20in%20your%20products"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-white/90 text-gray-900 border border-white/20 shadow-md hover:shadow-lg transition"
              >
                <FaWhatsapp className="w-4 h-4 mr-2 text-green-600" aria-hidden />
                WhatsApp
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
              <div className="bg-white/90 backdrop-blur-md rounded-2xl p-3 text-center shadow-xl">
                <div className="text-lg md:text-xl font-semibold text-gray-900">500+</div>
                <div className="text-xs text-gray-600">Happy Customers</div>
              </div>

              <div className="bg-white/90 backdrop-blur-md rounded-2xl p-3 text-center shadow-xl">
                <div className="text-lg md:text-xl font-semibold text-gray-900">5+</div>
                <div className="text-xs text-gray-600">Trusted Brands</div>
              </div>

              <div className="bg-white/90 backdrop-blur-md rounded-2xl p-3 text-center shadow-xl">
                <div className="text-lg md:text-xl font-semibold text-gray-900">24/7</div>
                <div className="text-xs text-gray-600">Support</div>
              </div>
            </div>
          </motion.div>

          {/* Right area intentionally left for your product card / visuals */}
        </div>
      </div>
    </section>
  );
}
