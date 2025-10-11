import React, { useState } from "react";
import weddingImg from "../images/image.png"; 
import PujaHomam from "../images/image2.png"; 
import Housewarming from "../images/image3.png"; 
import NamingCeremony from "../images/image4.png";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
  };

  const contactImages = [
   weddingImg,PujaHomam,Housewarming,NamingCeremony
  ];

  return (
    <section id="contact-us" className="py-20 px-4 bg-gradient-to-br from-gray-50 via-amber-50 to-yellow-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 bg-amber-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-orange-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to book your ceremony or have questions? We're here to help make your special occasion truly divine.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Information Cards */}
          <div className="lg:col-span-1 space-y-6">
            {/* Phone Card */}
            <div className="bg-white rounded-2xl p-6 shadow-xl border border-amber-100 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white text-xl mr-4">
                  📞
                </div>
                <h3 className="text-xl font-bold text-gray-800">Call Us</h3>
              </div>
              <p className="text-gray-600 mb-2">Available 24/7 for urgent ceremonies</p>
              <a href="tel:+1234567890" className="text-amber-600 font-semibold text-lg hover:text-amber-700 transition-colors">
                +1 (234) 567-890
              </a>
            </div>

             {/* whatsApp */}
            <div className="bg-white rounded-2xl p-6 shadow-xl border border-amber-100 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-skyblue-500 to-emerald-500 rounded-full flex items-center justify-center text-white text-xl mr-4">
                  💬
                </div>
                <h3 className="text-xl font-bold text-gray-800">WhatsApp</h3>
              </div>
              <p className="text-gray-600 mb-2">Chat with us instantly for queries</p>
              <a href="tel:+1234567890" className="text-amber-600 font-semibold text-lg hover:text-amber-700 transition-colors">
                 +1 (234) 567-890
              </a>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-2xl p-6 shadow-xl border border-amber-100 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-xl mr-4">
                  📧
                </div>
                <h3 className="text-xl font-bold text-gray-800">Email Us</h3>
              </div>
              <p className="text-gray-600 mb-2">We respond within 2 hours</p>
              <a href="mailto:info@priestbooking.com" className="text-amber-600 font-semibold text-lg hover:text-amber-700 transition-colors">
                info@priestbooking.com
              </a>
            </div>

            {/* Location Card */}
            <div className="bg-white rounded-2xl p-6 shadow-xl border border-amber-100 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xl mr-4">
                  📍
                </div>
                <h3 className="text-xl font-bold text-gray-800">Visit Us</h3>
              </div>
              <p className="text-gray-600 mb-2">Come meet our priests in person</p>
              <p className="text-amber-600 font-semibold text-lg">
                123 Temple Street<br />
                Spiritual City, SC 12345
              </p>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="lg:col-span-1 space-y-4">
            {contactImages.map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-2xl shadow-xl group">
                <img
                  src={image}
                  alt={`Ceremony ${index + 1}`}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-semibold">
                    {index === 0 ? 'Traditional Puja' : index === 1 ? 'Wedding Ceremony' : 'Blessing Ceremony'}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-amber-100">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 text-center">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="w-full border-2 border-gray-200 p-4 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className="w-full border-2 border-gray-200 p-4 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                    className="w-full border-2 border-gray-200 p-4 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Service Needed</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full border-2 border-gray-200 p-4 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300"
                  >
                    <option value="">Select a service</option>
                    <option value="wedding">Wedding Ceremony</option>
                    <option value="puja">Puja & Homam</option>
                    <option value="housewarming">Housewarming</option>
                    <option value="naming">Naming Ceremony</option>
                    <option value="ancestral">Ancestral Rituals</option>
                    <option value="festival">Festival Celebrations</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your ceremony requirements..."
                    rows="4"
                    className="w-full border-2 border-gray-200 p-4 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300 resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-600 to-yellow-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-amber-400"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-amber-600 to-yellow-600 rounded-2xl p-8 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">Need Immediate Assistance?</h3>
            <p className="text-xl mb-6 opacity-90">Call us now for urgent ceremonies or same-day bookings</p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="tel:+1234567890"
                className="bg-white text-amber-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                📞 Call Now
              </a>
              <a
                href="https://wa.me/1234567890"
                className="bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default ContactUs;
