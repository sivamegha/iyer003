import React, { useState } from "react";
import weddingImg from "../images/image.png"; 
import PujaHomam from "../images/image2.png"; 
import Housewarming from "../images/image3.png"; 
import NamingCeremony from "../images/image4.png"; 

const AboutUs = () => {
  const [activeImage, setActiveImage] = useState(0);

  const ceremonyImages = [
    {
      src: weddingImg,
      alt: "Wedding Ceremony",
      title: "Wedding Ceremonies"
    },
    {
      src: PujaHomam,
      alt: "Puja Ceremony",
      title: "Puja & Homam"
    },
    {
      src: NamingCeremony,
      alt: "Naming Ceremony",
      title: "Naming Ceremony"
    },
    {
      src: Housewarming,
      alt: "Housewarming Ceremony",
      title: "Housewarming"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Main About Section */}
      <div className="bg-gradient-to-br from-white via-amber-50 to-yellow-50 shadow-2xl rounded-3xl overflow-hidden border border-amber-200">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Image Gallery Section */}
          <div className="lg:w-1/2 relative">
            {/* Main Image Display */}
            <div className="relative h-80 lg:h-96 overflow-hidden">
              <img
                src={ceremonyImages[activeImage].src}
                alt={ceremonyImages[activeImage].alt}
                className="w-full h-full object-cover transition-all duration-700 transform hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              
              {/* Image Title Overlay */}
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold bg-amber-600/90 px-3 py-1 rounded-full">
                  {ceremonyImages[activeImage].title}
                </h3>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={() => setActiveImage((activeImage - 1 + ceremonyImages.length) % ceremonyImages.length)}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-amber-600 p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
              >
                ←
              </button>
              <button
                onClick={() => setActiveImage((activeImage + 1) % ceremonyImages.length)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-amber-600 p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
              >
                →
              </button>
            </div>

            {/* Thumbnail Gallery */}
            <div className="flex justify-center space-x-3 p-4 bg-gradient-to-r from-amber-100 to-yellow-100">
              {ceremonyImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    index === activeImage 
                      ? 'border-amber-500 scale-110 shadow-lg' 
                      : 'border-gray-300 hover:border-amber-400 hover:scale-105'
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                  {index === activeImage && (
                    <div className="absolute inset-0 bg-amber-500/30"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:w-1/2 p-8 lg:p-12">
            <div className="text-center lg:text-left">
              {/* Decorative Element */}
              <div className="flex justify-center lg:justify-start mb-4">
                <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full"></div>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 bg-clip-text text-transparent">
                About Our Priests
              </h2>
              
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                We provide <span className="font-semibold text-amber-700">trusted and experienced priests</span> for all your religious and cultural ceremonies. Our team ensures every ritual is performed with devotion and care, making your special occasions truly memorable.
              </p>
              
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                From traditional poojas to personalized ceremonies, we are committed to delivering <span className="font-semibold text-amber-700">spiritual guidance</span> and a serene experience to every family we serve.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center p-4 bg-white/70 rounded-xl border border-amber-200">
                  <div className="text-2xl mb-2">📿</div>
                  <h4 className="font-semibold text-amber-800">Traditional</h4>
                  <p className="text-sm text-gray-600">Authentic rituals</p>
                </div>
                <div className="text-center p-4 bg-white/70 rounded-xl border border-amber-200">
                  <div className="text-2xl mb-2">✨</div>
                  <h4 className="font-semibold text-amber-800">Blessed</h4>
                  <p className="text-sm text-gray-600">Divine guidance</p>
                </div>
                <div className="text-center p-4 bg-white/70 rounded-xl border border-amber-200">
                  <div className="text-2xl mb-2">👨‍🦲</div>
                  <h4 className="font-semibold text-amber-800">Experienced</h4>
                  <p className="text-sm text-gray-600">Years of service</p>
                </div>
                <div className="text-center p-4 bg-white/70 rounded-xl border border-amber-200">
                  <div className="text-2xl mb-2">❤️</div>
                  <h4 className="font-semibold text-amber-800">Devoted</h4>
                  <p className="text-sm text-gray-600">Heartfelt service</p>
                </div>
              </div>

              <button className="group bg-gradient-to-r from-amber-600 to-yellow-600 text-white px-8 py-4 rounded-full shadow-xl hover:from-amber-500 hover:to-yellow-500 transform hover:scale-105 transition-all duration-300 font-semibold text-lg border-2 border-amber-400">
                <span className="flex items-center gap-2">
                  <span>Learn More</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
