import React from "react";
import { FaCheck, FaWhatsapp } from "react-icons/fa";

import Amman from '../assets/Amman.svg'
import vizag from '../assets/vizag.png'
import jsw from '../assets/jsw.png'

const steelProducts = [
  {
    id: "ammantry",
    name: "AMMAN-TRY (TMT Bars)",
    image:Amman,
      
    subtitle: "Fe-500 / Fe-550D certified TMT bars",
    description:
      "Strong, ductile, ISI & ISO certified bars suitable for all structural applications.",
    items: [
      "AMMAN-TRY TMT Bars 8mm - 32mm",
      "Fe-500 / Fe-550D grades",
      "Cut-to-length & Bundled Packs",
    ],
  },
  {
    id: "vizag",
    name: "Vizag Steel (RINL)",
    image: vizag,
    subtitle:
      "Trusted TMT rebars and structural steel from Rashtriya Ispat Nigam Ltd.",
    description:
      "Preferred brand for infrastructure, bridges, high-rise structures and industrial builds.",
    items: ["Vizag TMT Rebars (Fe-500, Fe-500D)", "Wire rods & Structural Steel"],
  },
  {
    id: "jsw",
    name: "JSW / Jindal (Representative)",
    image:jsw,
      
    subtitle: "Jindal South West Steel Popular private-sector premium steel brands",
    description:
      "Known for high-quality TMT rebars with excellent tensile strength and durability.",
    items: ["JSW TMT Bars", "Jindal Panther Fe500D"],
  },
];

//-------------------------------------------------------------
// SINGLE CARD COMPONENT
//-------------------------------------------------------------

const SteelCard = ({ prod, delay = 0 }) => {
  return (
    <article
      className="border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-md transition overflow-hidden flex flex-col"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      {/* IMAGE */}
      <div className="w-full h-48 md:h-56 bg-gray-50 flex items-center justify-center overflow-hidden">
        <img
          src={prod.image}
          alt={prod.name}
          className="object-contain w-full h-full max-h-full transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* CONTENT */}
      <div className="p-5 flex flex-col flex-1">
        <h4 className="text-lg font-semibold text-gray-900">{prod.name}</h4>
        <p className="text-sm text-gray-600 mt-1">{prod.subtitle}</p>

        <p className="text-sm text-gray-600 mt-3">{prod.description}</p>

        <ul className="mt-4 space-y-2 text-sm text-gray-800">
          {prod.items.map((item, i) => (
            <li key={i} className="flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-gray-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              {item}
            </li>
          ))}
        </ul>

        {/* CTA BUTTON */}
        <div className="mt-6 flex items-center justify-between pt-4 border-t border-gray-100">
          <a
            href="tel:+918489047501"
            className="px-4 py-2 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition"
          >
            Enquire
          </a>

          <a
            href={`https://wa.me/918489047501?text=Hi,%20I%20want%20to%20order%20${encodeURIComponent(
              prod.name
            )}`}
            className="text-sm text-gray-600 hover:text-gray-900 underline flex items-center"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp className="w-4 h-4 mr-1" />
            WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
};

//-------------------------------------------------------------
// MAIN GRID SECTION
//-------------------------------------------------------------

const SteelProducts = () => {
  return (
    <section id="steel" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Steel & TMT Bars</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto text-sm md:text-base">
            High-quality TMT bars and structural steel for durable, earthquake-resistant construction.
          </p>
        </div>

        {/* RESPONSIVE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {steelProducts.map((prod, idx) => (
            <SteelCard key={prod.id} prod={prod} delay={80 + idx * 80} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SteelProducts;