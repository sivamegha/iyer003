import React, { useState, useEffect } from "react";
import "./Home.css";
import AboutUs from "./AboutUs";
import OurServices from "./OurServices";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import weddingImg from "../images/image.png";
import PujaHomam from "../images/image2.png";
import Housewarming from "../images/image3.png";
import NamingCeremony from "../images/image4.png";

const images = [weddingImg, PujaHomam, Housewarming, NamingCeremony];

const Home = () => {
  const [current, setCurrent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="font-sans relative overflow-hidden">
      {/* Background Slideshow */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-all duration-[1500ms] ease-in-out ${
            index === current ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
          style={{
            backgroundImage: `linear-gradient(135deg,
              rgba(0,0,0,0.4) 0%,
              rgba(139,69,19,0.3) 25%,
              rgba(255,215,0,0.2) 50%,
              rgba(139,69,19,0.3) 75%,
              rgba(0,0,0,0.4) 100%),
              url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: index === current ? "brightness(1.1) contrast(1.1)" : "brightness(0.9)",
          }}
        />
      ))}

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      

      {/* Hero Section */}
      <div className="hero-background flex items-center justify-center text-center text-white h-[90vh] relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div
            className={`relative bg-gradient-to-br from-black/70 via-amber-900/50 to-black/70 backdrop-blur-md p-8 md:p-16 rounded-3xl shadow-2xl border border-amber-500/30 transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            {/* Decorative Corners */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-l-2 border-t-2 border-yellow-500 animate-pulse"></div>
            <div className="absolute -top-2 -right-2 w-8 h-8 border-r-2 border-t-2 border-yellow-500 animate-pulse"></div>
            <div className="absolute -bottom-2 -left-2 w-8 h-8 border-l-2 border-b-2 border-yellow-500 animate-pulse"></div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-2 border-b-2 border-yellow-500 animate-pulse"></div>

            {/* Temple Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-amber-600 rounded-full flex items-center justify-center shadow-2xl animate-bounce">
                <span className="text-4xl">🕉️</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent leading-tight animate-pulse">
              Bring Divine Blessings to Your Life
            </h1>
            <p className="text-lg md:text-2xl lg:text-3xl mb-8 text-amber-100 font-light leading-relaxed max-w-4xl mx-auto">
              Trusted and Experienced Priests for Your Sacred Ceremonies and Special Occasions
            </p>

            {/* Hero Buttons */}
            <div className="flex justify-center gap-4 md:gap-6 flex-wrap">
              <button
                onClick={() => scrollToSection("services")}
                className="group bg-gradient-to-r from-yellow-600 to-amber-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full shadow-2xl hover:from-yellow-500 hover:to-amber-500 transform hover:scale-110 transition-all duration-300 font-semibold text-base md:text-lg border-2 border-yellow-400"
              >
                ✨ Book Now →
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="group bg-transparent border-2 border-yellow-400 text-yellow-400 px-6 md:px-8 py-3 md:py-4 rounded-full shadow-xl hover:bg-yellow-400 hover:text-black transform hover:scale-110 transition-all duration-300 font-semibold text-base md:text-lg backdrop-blur-sm"
              >
                🔥 View Services
              </button>
              <button
                onClick={() => scrollToSection("contact-us")}
                className="group bg-transparent border-2 border-amber-300 text-amber-300 px-6 md:px-8 py-3 md:py-4 rounded-full shadow-xl hover:bg-amber-300 hover:text-black transform hover:scale-110 transition-all duration-300 font-semibold text-base md:text-lg backdrop-blur-sm"
              >
                📞 Ask a Question
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sections */}
      <section id="about-us" className="py-20 px-4 bg-gray-50 relative z-10">
        <AboutUs />
      </section>

      <section id="services" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-amber-50 relative z-10">
        <OurServices />
      </section>

      <section id="contact-us" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-amber-50 relative z-10">
        <ContactUs />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
