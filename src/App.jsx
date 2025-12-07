import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProductsSection from "./components/ProductsSection";
import ContractorsSection from "./components/ContractorsSection";
import TransportationSection from "./components/TransportationSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import SteelProducts from "./components/SteelProducts";
import ElectricalProducts from "./components/ElectricalProducts";

const App = () => {
  useEffect(() => {
    // AOS Initialization
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });

    // Smooth scroll for anchor links
    const anchors = document.querySelectorAll('a[href^="#"]');
    const handleClick = (e) => {
      const targetId = e.currentTarget.getAttribute("href");
      if (targetId && targetId.startsWith("#")) {
        e.preventDefault();
        const target = document.querySelector(targetId);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };
    anchors.forEach((anchor) => anchor.addEventListener("click", handleClick));

    // Intersection animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      section.style.opacity = section.style.opacity || "1"; // prevent flicker
      observer.observe(section);
    });

    // Cleanup
    return () => {
      anchors.forEach((anchor) =>
        anchor.removeEventListener("click", handleClick)
      );
      observer.disconnect();
    };
  }, []);

  return (
    <div className="apple-font min-h-screen bg-off-white">
      <Header />
    
      <HeroSection />
      <ProductsSection />
      <SteelProducts/>
      <ElectricalProducts/>
      {/* <ContractorsSection /> */}
      <TransportationSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;
