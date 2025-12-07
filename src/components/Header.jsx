import React from "react";
import VisitorCount from "./VisitorCount";
import { FaWarehouse, FaBars } from "react-icons/fa";
import omcherma from "../assets/omcherma.png";

export default function Header() {
  return (
    <header
      className="
        fixed top-0 left-0 right-0 z-50 px-4 py-4
        bg-white/10 backdrop-blur-xl
        border-b border-white/20
        shadow-[0_4px_20px_rgba(0,0,0,0.15)]
      "
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={omcherma} alt="Om Cherma Logo" className="w-8 h-8 drop-shadow" />
          <span className="text-xl font-bold text-white drop-shadow">
            Om Cherma Traders
          </span>
        </div>

        {/* Navigation */}
        <ul className="flex space-x-8 hidden md:flex">
          <li>
            <a href="#home" className="nav-link text-lg text-white hover:text-white">
              Home
            </a>
          </li>
          <li>
            <a href="#products" className="nav-link text-lg text-white hover:text-white">
              Products
            </a>
          </li>
          <li>
            <a href="#transportation" className="nav-link text-lg text-white hover:text-white">
              Transportation
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link text-lg text-white hover:text-white">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile */}
        <div className="md:hidden flex items-center space-x-4">
          <VisitorCount />
          <FaBars className="text-2xl text-white drop-shadow" />
        </div>
      </nav>
    </header>
  );
}
