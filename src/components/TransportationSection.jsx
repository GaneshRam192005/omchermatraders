import React from "react";
import { FaCheck, FaWhatsapp } from "react-icons/fa";

import lorryImg from "../assets/lorry.png";
import pickupImg from "../assets/auto.png";

const fleet = [
  {
    id: "lorry",
    title: "Lorry",
    role: "10/12-Wheeler Heavy Trucks",
    image: lorryImg,
    desc:
      "Up to 20 tons capacity — ideal for bulk cement, steel bundles & long-distance delivery.",
    features: ["Bulk deliveries", "Site drop-off", "Long-route capability"],
  },

  {
    id: "pickup",
    title: "Pick-up & Auto",
    role: "Small Vehicle Deliveries",
    image: pickupImg,
    desc:
      "Fast and flexible for small sites, parcel drops & intra-city transport.",
    features: ["Fast intra-city", "Small volume trips", "Flexible scheduling"],
  },
];

export default function TransportationSection() {
  return (
    <section id="transportation" className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Our Transportation Fleet
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            Fast, reliable & safe material delivery
          </p>
        </div>

        {/* Centered Two Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 justify-center">
          {fleet.map((v, idx) => (
            <article
              key={v.id}
              className="w-full max-w-lg mx-auto border border-gray-100 rounded-lg shadow-sm bg-white overflow-hidden hover:shadow-md transition-shadow duration-200 flex flex-col"
              data-aos="fade-up"
              data-aos-delay={80 + idx * 60}
            >
              {/* IMAGE */}
              <div className="w-full h-48 md:h-56 bg-gray-50 flex items-center justify-center overflow-hidden">
                <img
                  src={v.image}
                  alt={v.title}
                  className="object-contain max-h-full max-w-full"
                />
              </div>

              {/* CONTENT */}
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-lg font-semibold text-gray-900">{v.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{v.role}</p>

                <p className="text-sm text-gray-600 mt-3">{v.desc}</p>

                <ul className="mt-4 space-y-2 text-sm text-gray-800">
                  {v.features.map((f, i) => (
                    <li key={i} className="flex items-center">
                      <FaCheck className="w-4 h-4 mr-2 text-gray-500 flex-none" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTAs */}
                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center gap-3">
                  <a
                    href={`https://wa.me/918489047501?text=Hi,%20I%20need%20${encodeURIComponent(
                      v.title
                    )}%20transport`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-3 py-2 rounded-md bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.373 0 .02 5.373.02 12c0 1.99.5 3.88 1.46 5.56L0 24l6.64-1.75A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12 0-1.96-.44-3.82-1.48-5.52z" />
                    </svg>
                    WhatsApp
                  </a>

                  <a
                    href="tel:+918489047501"
                    className="inline-flex items-center px-3 py-2 rounded-md border border-gray-200 text-sm text-gray-700 hover:bg-gray-50 transition"
                  >
                    Call
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
