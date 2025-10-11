import React, { useState } from "react";
import weddingImg from "../images/image.png"; 
import PujaHomam from "../images/image2.png"; 
import Housewarming from "../images/image3.png"; 
import NamingCeremony from "../images/image4.png"; 
import Ancestral from "../images/image5.png"; 
import SpecialOccasions from "../images/image6.png"; 

const services = [
  {
    title: "Puja & Homam",
    description: "Traditional rituals to bring peace, prosperity, and spiritual growth.",
    image:PujaHomam,
    icon: "🔥",
    color: "from-red-500 to-orange-500",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
  },
  {
    title: "Weddings",
    description: "Conducting sacred wedding ceremonies with full Vedic rituals.",
    image: weddingImg,
    icon: "💒",
    color: "from-pink-400 to-rose-300",
    bgColor: "bg-pink-50",
    borderColor: "border-pink-200",
  },
  {
    title: "Housewarming (Griha Pravesh)",
    description:
      "Blessings for a new home to ensure happiness and success.",
    image: Housewarming,
    icon: "🏠",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
  },
  {
    title: "Naming Ceremony (Namakarana)",
    description:
      "Sacred rituals for newborns to receive blessings and a good name.",
    image: NamingCeremony,
    icon: "👶",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
  },
  {
    title: "Ancestral Rituals (Shraddha)",
    description: "Honoring ancestors and seeking their blessings.",
    image: Ancestral,
    icon: "🕯️",
    color: "from-purple-500 to-indigo-500",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
  },
  {
    title: "Special Occasions & Festivals",
    description:
      "Performing poojas and ceremonies during auspicious days and festivals.",
    image: SpecialOccasions ,
    icon: "🎉",
    color: "from-yellow-500 to-amber-500",
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-200",
  },
];

const OurServices = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="services"
      className="py-20 px-6 bg-gradient-to-br from-gray-50 via-amber-50 to-yellow-50 relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-amber-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-orange-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 bg-clip-text text-transparent">
            Our Sacred Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the divine touch of our experienced priests for all your
            religious ceremonies and special occasions
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-700 border border-gray-100"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Image Section */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-80 group-hover:opacity-90 transition-opacity duration-300`}
                ></div>

                {/* Icon Badge */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                {/* Title Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">
                    {service.title}
                  </h3>
                  <div className="w-12 h-1 bg-white rounded-full"></div>
                </div>
              </div>

              {/* Content Section */}
              <div className={`p-6 ${service.bgColor} border-t-4 ${service.borderColor}`}>
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                    <span className="text-sm text-gray-600">Traditional Rituals</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                    <span className="text-sm text-gray-600">Experienced Priests</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                    <span className="text-sm text-gray-600">Divine Blessings</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={() => scrollToSection("booking")}
                    className={`flex-1 bg-gradient-to-r ${service.color} text-white px-4 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold`}
                  >
                    Book Now
                  </button>
                  <button
                    onClick={() => scrollToSection("contact-us")}
                    className={`flex-1 bg-white border-2 ${service.borderColor} text-gray-700 px-4 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold hover:bg-gray-50`}
                  >
                    Learn More
                  </button>
                </div>
              </div>

              {/* Hover Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-amber-400 transition-colors duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-amber-600 to-yellow-600 rounded-2xl p-8 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">Ready to Book Your Ceremony?</h3>
            <p className="text-xl mb-6 opacity-90">
              Let our experienced priests make your special occasion truly divine
            </p>
            <button
              onClick={() => scrollToSection("booking")}
              className="bg-white text-amber-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
