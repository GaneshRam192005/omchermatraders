// src/components/ElectricalProducts.jsx
import React from "react";
import { FaCheck, FaWhatsapp } from "react-icons/fa";

import polycab from "../assets/polycab.png";
import finolex from "../assets/finolex.png";
import anchorImg from "../assets/anchor.png"; // ensure this file exists

// Product list (professional / muted style, same structure as ProductsSection)
const electricalProducts = [
  {
    id: "polycab",
    name: "Polycab",
    image: polycab,
    subtitle: "Wires, cables, conduits & accessories",
    description: "Household & industrial-grade wiring, cables and accessories.",
    items: ["Polycab House Wires (1.5, 2.5 sqmm)", "V-90 Cables", "Switches & Lighting"],
    moreInfo: "https://polycab.com/",
  },
  {
    id: "finolex",
    name: "Finolex",
    image: finolex,
    subtitle: "Cables, conduits & fittings",
    description: "Reliable cables and conduits for residential & industrial use.",
    items: ["Finolex House Wires", "Conduits & Fittings", "Industrial Cables"],
    moreInfo: "https://finolex.com/",
  },
  {
    id: "anchor",
    name: "Anchor (Panasonic)",
    image: anchorImg,
    subtitle: "Modular switches & outlets",
    description: "Durable modular switches, sockets and electrical fittings.",
    items: ["Anchor Modular Switches", "Socket Outlets", "Accessories"],
    moreInfo: "https://www.panasonic.com/in/",
  },
];



const ElectricalCard = ({ prod, delay = 0 }) => {
  return (
    <article
      className="border border-gray-100 rounded-lg shadow-sm bg-white overflow-hidden hover:shadow-md transition-shadow duration-200 flex flex-col"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      {/* Uniform image box — keeps cards aligned */}
      <div className="w-full h-56 md:h-64 bg-gray-50 flex items-center justify-center overflow-hidden">
        <img src={prod.image} alt={prod.name} className="object-contain max-h-full max-w-full" />
      </div>

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-medium text-gray-900">{prod.name}</h3>
            <p className="text-sm text-gray-600 mt-1">{prod.subtitle}</p>
          </div>

          <div className="ml-3">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
              Electrical
            </span>
          </div>
        </div>

        <p className="text-sm text-gray-600 mt-3">{prod.description}</p>

        <ul className="mt-4 space-y-2 text-sm text-gray-800">
          {prod.items.map((item, i) => (
            <li key={i} className="flex items-center">
              <FaCheck className="w-4 h-4 mr-2 text-gray-500 flex-none" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* CTA area pinned to bottom */}
        <div className="mt-6 pt-4 border-t border-gray-100 flex items-center space-x-3">
          <a
            href={`https://wa.me/918489047501?text=Hi,%20I%20want%20to%20order%20${encodeURIComponent(prod.name)}`}
            target="_blank"
            rel="noreferrer"
            className="flex-1 inline-flex items-center justify-center px-3 py-2 rounded-md bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition"
            aria-label={`Order ${prod.name} on WhatsApp`}
          >
            <FaWhatsapp className="w-4 h-4 mr-2 flex-none" />
            Order on WhatsApp
          </a>

          <div className="flex-shrink-0 space-x-2">
            <a href="tel:+918489047501" className="inline-flex items-center px-3 py-2 rounded-md border border-gray-200 text-sm text-gray-700 hover:bg-gray-50 transition">Enquire</a>
            <a href={prod.moreInfo} target="_blank" rel="noreferrer" className="inline-flex items-center px-3 py-2 rounded-md text-sm text-gray-700 underline hover:text-gray-900 transition">More info</a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default function ElectricalProducts() {
  return (
    <section id="electricals" className="py-16 px-4 bg-white" aria-labelledby="electricals-heading">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 text-center">
          <h2 id="electricals-heading" className="text-2xl font-semibold text-gray-900">Electricals</h2>
          <p className="text-sm text-gray-600 mt-1">Top electrical brands for safe, reliable installations.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {electricalProducts.map((prod, idx) => (
            <ElectricalCard key={prod.id} prod={prod} delay={80 + idx * 60} />
          ))}
        </div>
      </div>
    </section>
  );
}
