import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Home from "./pages/Home";
import BookingForm from "./pages/BookingForm";
import Footer from "./pages/Footer";

function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();

  // States
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to section after route change
  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        // Clear state so that next click works again
        navigate(location.pathname, { replace: true, state: {} });
      }
    } else if (location.state?.scrollToTop) {
      // Handle scroll to top for Home navigation
      window.scrollTo({ top: 0, behavior: "smooth" });
      // Clear state so that next click works again
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate]);

  // Smooth scroll function for sections
  const scrollToSection = (sectionId) => {
    setIsMobileMenuOpen(false);

    if (location.pathname !== "/") {
      // Navigate to home first, then scroll
      navigate("/", { state: { scrollTo: sectionId }, replace: false });
    } else {
      // Already on home, scroll directly
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      } else {
        // Section not yet loaded, navigate to home with state
        navigate("/", { state: { scrollTo: sectionId }, replace: false });
      }
    }
  };

  // Handle Home click (navigate or scroll to top)
  const handleHomeClick = () => {
    setIsMobileMenuOpen(false);
    if (location.pathname === "/") {
      // Already on home, scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Navigate to home and scroll to top
      navigate("/", { state: { scrollToTop: true }, replace: false });
    }
  };

  // Handle Booking click (navigate or scroll to top of form)
  const handleBookingClick = () => {
    setIsMobileMenuOpen(false);
    if (location.pathname === "/booking") {
      // Already on booking, scroll to top (useful if form is long)
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Navigate to booking
      navigate("/booking");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-gradient-to-r from-amber-800/95 via-yellow-700/95 to-amber-800/95 backdrop-blur-md shadow-xl border-b border-amber-300/20"
            : "bg-gradient-to-r from-amber-600/90 via-yellow-600/90 to-amber-600/90 backdrop-blur-sm"
        }`}
      >
        <div className="relative z-10 max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-white to-amber-100 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl">🕉️</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full animate-pulse"></div>
            </div>
            <div>
              <h1 className="font-bold text-xl sm:text-2xl bg-gradient-to-r from-white via-amber-100 to-yellow-100 bg-clip-text text-transparent">
                Iyer Connect
              </h1>
              <p className="text-xs text-amber-100/80 font-medium hidden sm:block">
                Sacred Services
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            <button
              onClick={handleHomeClick}
              className="px-4 py-2 rounded-full hover:bg-white/10 transition-all duration-300 font-medium text-white/90 hover:text-white hover:scale-105 transform"
            >
              🏠 Home
            </button>
            <button
              onClick={() => scrollToSection("about-us")}
              className="px-4 py-2 rounded-full hover:bg-white/10 transition-all duration-300 font-medium text-white/90 hover:text-white hover:scale-105 transform"
            >
              👨‍🦲 About Us
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="px-4 py-2 rounded-full hover:bg-white/10 transition-all duration-300 font-medium text-white/90 hover:text-white hover:scale-105 transform"
            >
              🔥 Our Services
            </button>
            <button
              onClick={() => scrollToSection("contact-us")}
              className="px-4 py-2 rounded-full hover:bg-white/10 transition-all duration-300 font-medium text-white/90 hover:text-white hover:scale-105 transform"
            >
              📞 Contact Us
            </button>
            <button
              onClick={handleBookingClick}
              className="ml-4 bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-amber-900 px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-semibold hover:scale-105 transform"
            >
              ✨ Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-500 overflow-hidden ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-gradient-to-b from-amber-700/95 to-yellow-700/95 backdrop-blur-md border-t border-amber-300/20">
            <div className="px-4 py-4 space-y-2">
              <button
                onClick={handleHomeClick}
                className="block px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-300 font-medium text-white/90 hover:text-white"
              >
                🏠 Home
              </button>
              <button
                onClick={() => scrollToSection("about-us")}
                className="block px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-300 font-medium text-white/90 hover:text-white"
              >
                👨‍🦲 About Us
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-300 font-medium text-white/90 hover:text-white"
              >
                🔥 Our Services
              </button>
              <button
                onClick={() => scrollToSection("contact-us")}
                className="block px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-300 font-medium text-white/90 hover:text-white"
              >
                📞 Contact Us
              </button>
              <button
                onClick={handleBookingClick}
                className="block mt-4 bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-amber-900 px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-semibold text-center mx-auto"
              >
                ✨ Book Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Routes */}
      <main className="flex-grow mt-[80px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<BookingForm />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
