import React, { useState, useEffect, useRef } from "react";
import omcherma from "../assets/omcherma.png";

export default function Header() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  const links = [
    { id: "home", label: "Home" },
    { id: "products", label: "Products" },
   
    { id: "transportation", label: "Transportation" },
    { id: "contact", label: "Contact" },
  ];

  // Close mobile menu on window resize >= md and on Escape key
  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 768) setOpen(false); // md breakpoint in Tailwind is 768px
    }

    function onKeyDown(e) {
      if (e.key === "Escape") setOpen(false);
    }

    window.addEventListener("resize", onResize);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  // Click outside to close mobile menu (attach to container that includes button + dropdown)
  useEffect(() => {
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  // Smooth scroll helper — ensures link clicks scroll to elements with matching id
  function handleNavClick(e, id) {
    e.preventDefault();
    setOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      // update hash without jumping
      history.replaceState(null, "", `#${id}`);
    } else {
      // fallback: set location hash (if element not present)
      window.location.hash = `#${id}`;
    }
  }

  return (
    <header ref={containerRef} className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and name */}
          <div className="flex items-center space-x-3">
            <img
              src={omcherma}
              alt="Omcherma Traders"
              className="h-12 w-12 object-contain" /* change size here */
            />
            <div>
              <span className="block font-semibold text-gray-800">Om Cherma Traders</span>
              
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 items-center">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className="relative text-gray-700 hover:text-blue-600 font-medium transition-all duration-250 transform hover:-translate-y-0.5 px-1"
              >
                {/* Underline animation */}
                <span className="block">
                  {link.label}
                </span>
                <span
                  aria-hidden
                  className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-600 scale-x-0 origin-left transition-transform duration-200"
                  style={{ transformOrigin: 'left' }}
                />
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen((s) => !s)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              {/* hamburger / close icons */}
              {open ? (
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown - use max-height + opacity for smooth animation */}
      <div
        id="mobile-menu"
        className={`md:hidden absolute left-0 right-0 bg-white shadow-2xl border-t border-gray-100 overflow-hidden transition-all duration-300 ${open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
        style={{ willChange: 'max-height, opacity' }}
      >
        <nav className="py-3 px-4">
          {links.map((link, index) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
              className={`block w-full px-5 py-3.5 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:shadow-sm font-medium text-gray-700 hover:text-blue-600 transition-all duration-200 transform hover:translate-x-1 border-b border-gray-50 last:border-b-0`}
              style={{
                animation: open ? `slideIn 0.28s ease-out ${index * 0.04}s both` : "none",
              }}
            >
              <span className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3 opacity-100"></span>
                {link.label}
              </span>
            </a>
          ))}
        </nav>

        <style>{`
          @keyframes slideIn {
            from { opacity: 0; transform: translateY(-6px); }
            to { opacity: 1; transform: translateY(0); }
          }

          /* Desktop link underline using scale transform on hover */
          @media (min-width: 768px) {
            nav a:hover span + span[aria-hidden] { transform: scaleX(1); }
          }
        `}</style>
      </div>
    </header>
  );
}
