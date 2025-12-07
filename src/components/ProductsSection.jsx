import React from "react";
import { FaCheck, FaWhatsapp } from "react-icons/fa";

import sankar from "../assets/sankar.png";
import ultratech from "../assets/ultratech.png";
import ambuja from "../assets/ambuja.png";
import dalmia from "../assets/dalmia.png";

// Product List (muted palette / minimal styling)
const products = [
  {
    id: "sankar",
    name: "Sankar Cement",
    image: sankar,
    subtitle: "Reliable small-batch & retail cement",
    description: "Perfect for residential and small-scale construction projects",
    items: ["Sankar Cement 50kg Bag", "Sankar ReadyMix"],
  },
  {
    id: "ultratech",
    name: "UltraTech",
    image: ultratech,
    subtitle: "Premium OPC 53 & construction solutions",
    description: "India's largest manufacturer of grey cement",
    items: ["UltraTech OPC 53 Grade", "UltraTech PPC"],
  },
  {
    id: "ambuja",
    name: "Ambuja Cement",
    image: ambuja,
    subtitle: "Consistent performance for all projects",
    description: "Trusted by builders and contractors nationwide",
    items: ["Ambuja Plus 50kg", "Ambuja Ready Mix"],
  },
  {
    id: "dalmia",
    name: "Dalmia Cement",
    image: dalmia,
    subtitle: "High-strength cement options Premium",
    description: "Premium quality for demanding applications",
    items: ["Dalmia OPC & PPC", "Dalmia Special Blends"],
  },
];

export default function ProductsSection() {
  return (
    <section id="products" className="py-12 px-4 bg-white" aria-labelledby="products-heading">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 text-center">
          <h2 id="products-heading" className="text-2xl font-semibold text-gray-900">Our Cement Brands</h2>
          <p className="text-sm text-gray-600 mt-1">Quality materials for retail and bulk orders</p>
        </div>

        {/* Responsive Grid: use auto-fit style via Tailwind breakpoints to avoid lone items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((prod, idx) => (
            <article
              key={prod.id}
              className="border border-gray-100 rounded-lg shadow-sm bg-white overflow-hidden hover:shadow-md transition-shadow duration-200 flex flex-col"
              data-aos="fade-up"
              data-aos-delay={80 + idx * 60}
            >
              
             {/* IMAGE */}
<div className="w-full h-56 md:h-64 bg-gray-50 flex items-center justify-center overflow-hidden">
  <img
    src={prod.image}
    alt={prod.name}
    className="object-contain max-h-full max-w-full"
  />
</div>



              {/* CONTENT */}
              <div className="p-4 flex-1 flex flex-col">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{prod.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{prod.subtitle}</p>
                  </div>
                  <div className="ml-3">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">Cement</span>
                  </div>
                </div>

                <p className="text-sm text-gray-600 mt-3">{prod.description}</p>

                <ul className="mt-4 space-y-2 text-sm text-gray-800">
                  {prod.items.map((item, i) => (
                    <li key={i} className="flex items-center">
                      <FaCheck className="w-4 h-4 mr-2 flex-none text-gray-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5">
                  <a
                    href={`https://wa.me/918489047501?text=Hi,%20I%20want%20to%20order%20${encodeURIComponent(prod.name)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center w-full px-3 py-2 border border-transparent text-sm font-medium rounded-md bg-gray-900 text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200"
                    aria-label={`Order ${prod.name} on WhatsApp`}
                  >
                    <FaWhatsapp className="w-4 h-4 mr-2 text-white flex-none" />
                    Order on WhatsApp
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
