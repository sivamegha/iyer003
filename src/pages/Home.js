import React, { useState, useEffect } from "react";
import "./Home.css";
import AboutUs from "./AboutUs";
import OurServices from "./OurServices";
import ContactUs from "./ContactUs";
import weddingImg from "../images/image.png"; 
import PujaHomam from "../images/image2.png"; 
import Housewarming from "../images/image3.png"; 
import NamingCeremony from "../images/image4.png";

const images = [
  weddingImg,PujaHomam,Housewarming,NamingCeremony
];

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

  // Scroll to section smoothly
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
          <div className={`relative bg-gradient-to-br from-black/70 via-amber-900/50 to-black/70 backdrop-blur-md p-8 md:p-16 rounded-3xl shadow-2xl border border-amber-500/30 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
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

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-yellow-400/30">
                <div className="text-2xl md:text-3xl font-bold text-yellow-400">500+</div>
                <div className="text-sm text-amber-100">Happy Families</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-yellow-400/30">
                <div className="text-2xl md:text-3xl font-bold text-yellow-400">25+</div>
                <div className="text-sm text-amber-100">Years Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-yellow-400/30">
                <div className="text-2xl md:text-3xl font-bold text-yellow-400">100+</div>
                <div className="text-sm text-amber-100">Ceremonies</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-yellow-400/30">
                <div className="text-2xl md:text-3xl font-bold text-yellow-400">24/7</div>
                <div className="text-sm text-amber-100">Available</div>
              </div>
            </div>

            <div className="flex justify-center gap-4 md:gap-6 flex-wrap">
              <button
                onClick={() => scrollToSection("services")}
                className="group bg-gradient-to-r from-yellow-600 to-amber-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full shadow-2xl hover:from-yellow-500 hover:to-amber-500 transform hover:scale-110 transition-all duration-300 font-semibold text-base md:text-lg border-2 border-yellow-400"
              >
                <span className="flex items-center gap-2">
                  <span>✨ Book Now</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </button>

              <button
                onClick={() => scrollToSection("services")}
                className="group bg-transparent border-2 border-yellow-400 text-yellow-400 px-6 md:px-8 py-3 md:py-4 rounded-full shadow-xl hover:bg-yellow-400 hover:text-black transform hover:scale-110 transition-all duration-300 font-semibold text-base md:text-lg backdrop-blur-sm"
              >
                <span className="flex items-center gap-2">
                  <span>🔥 View Services</span>
                  <span className="group-hover:rotate-180 transition-transform">⚡</span>
                </span>
              </button>

              <button
                onClick={() => scrollToSection("contact-us")}
                className="group bg-transparent border-2 border-amber-300 text-amber-300 px-6 md:px-8 py-3 md:py-4 rounded-full shadow-xl hover:bg-amber-300 hover:text-black transform hover:scale-110 transition-all duration-300 font-semibold text-base md:text-lg backdrop-blur-sm"
              >
                <span className="flex items-center gap-2">
                  <span>📞 Ask a Question</span>
                  <span className="group-hover:scale-125 transition-transform">?</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-100 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 bg-clip-text text-transparent">
              Why Choose Iyer Connect?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We provide authentic, traditional, and personalized priest services for all your sacred ceremonies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-amber-200">
              <div className="text-5xl mb-4 text-center">📿</div>
              <h3 className="text-xl font-bold mb-4 text-amber-800 text-center">Traditional</h3>
              <p className="text-gray-700 text-center">Authentic rituals passed down through generations</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-amber-200">
              <div className="text-5xl mb-4 text-center">👨‍🦲</div>
              <h3 className="text-xl font-bold mb-4 text-amber-800 text-center">Experienced</h3>
              <p className="text-gray-700 text-center">25+ years of dedicated service to families</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-amber-200">
              <div className="text-5xl mb-4 text-center">🏠</div>
              <h3 className="text-xl font-bold mb-4 text-amber-800 text-center">Home Visits</h3>
              <p className="text-gray-700 text-center">Convenient services at your doorstep</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-amber-200">
              <div className="text-5xl mb-4 text-center">✨</div>
              <h3 className="text-xl font-bold mb-4 text-amber-800 text-center">Blessed</h3>
              <p className="text-gray-700 text-center">Divine guidance for your special moments</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about-us" className="py-20 px-4 bg-gray-50 relative z-10">
        <AboutUs />
      </section>

      {/* Our Services Section */}
      <section id="services" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-amber-50 relative z-10">
        <OurServices />
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-amber-100 via-yellow-50 to-amber-100 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 bg-clip-text text-transparent">
              What Our Families Say
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Trusted by hundreds of families for their sacred ceremonies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-amber-200">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 text-2xl">⭐⭐⭐⭐⭐</div>
              </div>
              <p className="text-gray-700 mb-6 italic">
                "The priest was very knowledgeable and made our wedding ceremony truly special. Highly recommended!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold">
                  R
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-800">Rajesh Kumar</div>
                  <div className="text-sm text-gray-600">Chennai</div>
                </div>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-amber-200">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 text-2xl">⭐⭐⭐⭐⭐</div>
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Excellent service for our housewarming ceremony. The priest explained everything clearly and made us feel comfortable."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold">
                  S
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-800">Sita Devi</div>
                  <div className="text-sm text-gray-600">Bangalore</div>
                </div>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-amber-200">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 text-2xl">⭐⭐⭐⭐⭐</div>
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Professional, punctual, and very traditional. Our naming ceremony was beautiful and memorable."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold">
                  P
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-800">Priya Sharma</div>
                  <div className="text-sm text-gray-600">Mumbai</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-amber-600 via-yellow-600 to-amber-700 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Book Your Sacred Ceremony?
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-amber-100">
            Let us help you create beautiful memories with our experienced priests
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <button
              onClick={() => scrollToSection("services")}
              className="group bg-white text-amber-600 px-8 py-4 rounded-full shadow-2xl hover:bg-amber-50 transform hover:scale-110 transition-all duration-300 font-semibold text-lg"
            >
              <span className="flex items-center gap-2">
                <span>✨ Book Now</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </button>
            <button
              onClick={() => scrollToSection("contact-us")}
              className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-full shadow-xl hover:bg-white hover:text-amber-600 transform hover:scale-110 transition-all duration-300 font-semibold text-lg"
            >
              <span className="flex items-center gap-2">
                <span>📞 Call Now</span>
                <span className="group-hover:rotate-12 transition-transform">📱</span>
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact-us" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-amber-50 relative z-10">
        <ContactUs />
      </section>
    </div>
  );
};

export default Home;
