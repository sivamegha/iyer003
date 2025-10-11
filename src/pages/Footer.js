import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaClock } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    alert('Thank you for subscribing to our newsletter!');
    setEmail('');
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-amber-900 to-yellow-900 text-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-amber-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-orange-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center text-white text-2xl mr-4">
                  🏛️
                </div>
        <div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
                    Iyer Connect
                  </h2>
                  <p className="text-amber-200 text-sm">Sacred Ceremonies</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Your trusted partner for all religious ceremonies and spiritual guidance. 
                We connect you with experienced priests for your special occasions.
              </p>
              
              <div className="flex space-x-4">
                <a 
                  href="https://facebook.com" 
                  className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-amber-500 transition-all duration-300 transform hover:scale-110"
                >
                  <FaFacebookF />
                </a>
                <a 
                  href="https://instagram.com" 
                  className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-amber-500 transition-all duration-300 transform hover:scale-110"
                >
                  <FaInstagram />
                </a>
                <a 
                  href="https://youtube.com" 
                  className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-amber-500 transition-all duration-300 transform hover:scale-110"
                >
                  <FaYoutube />
                </a>
                <a 
                  href="https://wa.me/916380102036" 
                  className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-green-500 transition-all duration-300 transform hover:scale-110"
                >
                  <FaWhatsapp />
                </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
              <h3 className="text-xl font-bold mb-6 text-amber-400">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a href="/" className="flex items-center text-gray-300 hover:text-amber-400 transition-colors duration-300 group">
                    <span className="w-2 h-2 bg-amber-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span>Home</span>
                  </a>
                </li>
                <li>
                  <a href="/booking" className="flex items-center text-gray-300 hover:text-amber-400 transition-colors duration-300 group">
                    <span className="w-2 h-2 bg-amber-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span>Book a Priest</span>
                  </a>
                </li>
                <li>
                  <a href="#services" className="flex items-center text-gray-300 hover:text-amber-400 transition-colors duration-300 group">
                    <span className="w-2 h-2 bg-amber-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span>Our Services</span>
                  </a>
                </li>
                <li>
                  <a href="#about-us" className="flex items-center text-gray-300 hover:text-amber-400 transition-colors duration-300 group">
                    <span className="w-2 h-2 bg-amber-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span>About Us</span>
                  </a>
                </li>
                <li>
                  <a href="#contact-us" className="flex items-center text-gray-300 hover:text-amber-400 transition-colors duration-300 group">
                    <span className="w-2 h-2 bg-amber-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span>Contact Us</span>
                  </a>
                </li>
          </ul>
        </div>

        {/* Services */}
        <div>
              <h3 className="text-xl font-bold mb-6 text-amber-400">Our Services</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="flex items-center text-gray-300 hover:text-amber-400 transition-colors duration-300 group">
                    <span className="text-amber-400 mr-3">💒</span>
                    <span>Wedding Ceremonies</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center text-gray-300 hover:text-amber-400 transition-colors duration-300 group">
                    <span className="text-amber-400 mr-3">🔥</span>
                    <span>Puja & Homam</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center text-gray-300 hover:text-amber-400 transition-colors duration-300 group">
                    <span className="text-amber-400 mr-3">👶</span>
                    <span>Naming Ceremony</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center text-gray-300 hover:text-amber-400 transition-colors duration-300 group">
                    <span className="text-amber-400 mr-3">🏠</span>
                    <span>Housewarming</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center text-gray-300 hover:text-amber-400 transition-colors duration-300 group">
                    <span className="text-amber-400 mr-3">🕯️</span>
                    <span>Ancestral Rituals</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center text-gray-300 hover:text-amber-400 transition-colors duration-300 group">
                    <span className="text-amber-400 mr-3">🎉</span>
                    <span>Festival Celebrations</span>
                  </a>
                </li>
          </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-amber-400">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-amber-500/20 rounded-full flex items-center justify-center mr-3">
                    <FaPhone className="text-amber-400 text-sm" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">+91 6380102036</p>
                    <p className="text-gray-400 text-sm">Available 24/7</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-amber-500/20 rounded-full flex items-center justify-center mr-3">
                    <FaEnvelope className="text-amber-400 text-sm" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">subbulakshmi771989@gmail.com</p>
                    <p className="text-gray-400 text-sm">Email Support</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-amber-500/20 rounded-full flex items-center justify-center mr-3">
                    <FaMapMarkerAlt className="text-amber-400 text-sm" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Paramakudi</p>
                    <p className="text-gray-400 text-sm">Ramanathapuram, TN</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-amber-500/20 rounded-full flex items-center justify-center mr-3">
                    <FaClock className="text-amber-400 text-sm" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Service Hours</p>
                    <p className="text-gray-400 text-sm">5 AM - 10 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Section - Below Contact Info */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-6 border border-white/20 shadow-xl" style={{ borderRadius: '20px' }}>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-lg">📧</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-amber-400">Stay Updated</h4>
                  <p className="text-gray-300 text-sm">Never miss important updates</p>
                </div>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-300 text-sm mb-3">Get exclusive updates about:</p>
                <div className="grid grid-cols-2 gap-2 text-xs text-gray-400">
                  <div className="flex items-center">
                    <span className="text-amber-400 mr-2">✨</span>
                    <span>New Services</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-amber-400 mr-2">🎉</span>
                    <span>Special Offers</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-amber-400 mr-2">📅</span>
                    <span>Festival Schedules</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-amber-400 mr-2">🏛️</span>
                    <span>Priest Availability</span>
                  </div>
                </div>
              </div>
              
              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 bg-white/15 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30 transition-all duration-300"
                    style={{ borderRadius: '0px' }}
                    required
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <span className="text-amber-400">📧</span>
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 text-white py-3 font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center group"
                  style={{ borderRadius: '0px' }}
                >
                  <span className="mr-2">Subscribe Now</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </button>
              </form>
              
              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <div className="flex items-center">
                    <span className="text-green-400 mr-1">🔒</span>
                    <span>Your email is safe with us</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-amber-400 mr-1">⚡</span>
                    <span>Instant updates</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
        &copy; {new Date().getFullYear()} Iyer Connect. All Rights Reserved.
              </div>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">Refund Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
