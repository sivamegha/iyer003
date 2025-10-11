import React, { useState } from "react";
import weddingImg from "../images/image1.jpg"; 
import PujaHomam from "../images/image2.png"; 
import Housewarming from "../images/image3.png"; 
import NamingCeremony from "../images/image4.png";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    service: "",
    date: "",
    time: "",
    location: "",
    homeVisit: "No",
    materials: "No",
    notes: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    { id: 1, title: "Personal Info", icon: "👤" },
    { id: 2, title: "Service Details", icon: "🏛️" },
    { id: 3, title: "Requirements", icon: "📋" },
    { id: 4, title: "Review & Submit", icon: "✅" }
  ];

  const serviceImages = [
    weddingImg,PujaHomam,Housewarming,NamingCeremony
  ];

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate form fields
  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Please enter your name.";
    if (!formData.mobile) tempErrors.mobile = "Please enter your mobile number.";
    else if (!/^\d{10}$/.test(formData.mobile))
      tempErrors.mobile = "Enter a valid 10-digit mobile number.";
    if (!formData.service) tempErrors.service = "Please select a service.";
    if (!formData.date) tempErrors.date = "Please select a date.";
    else if (new Date(formData.date) < new Date())
      tempErrors.date = "Date cannot be in the past.";
    return tempErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const tempErrors = validate();
    if (Object.keys(tempErrors).length === 0) {
      setSuccess(true);
      setErrors({});
      setCurrentStep(4);
      console.log("Booking Data:", formData);
    } else {
      setErrors(tempErrors);
      setSuccess(false);
    }
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-amber-50 to-yellow-50 py-12 px-4 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 bg-amber-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-orange-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full"></div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 bg-clip-text text-transparent">
            Book Your Ceremony
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Reserve your sacred ceremony with our experienced priests. Fill out the form below and we'll get back to you within 2 hours.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex justify-center items-center space-x-4">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold transition-all duration-300 ${
                  currentStep >= step.id 
                    ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-white shadow-lg' 
                    : 'bg-gray-200 text-gray-500'
                }`}>
                  {currentStep > step.id ? '✓' : step.icon}
                </div>
                <span className={`ml-2 font-semibold ${
                  currentStep >= step.id ? 'text-amber-700' : 'text-gray-500'
                }`}>
                  {step.title}
                </span>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-1 mx-4 ${
                    currentStep > step.id ? 'bg-gradient-to-r from-amber-500 to-yellow-500' : 'bg-gray-200'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Success Message */}
      {success && (
          <div className="bg-gradient-to-r from-green-100 to-emerald-100 border border-green-300 text-green-700 p-6 mb-8 rounded-2xl shadow-lg">
            <div className="flex items-center">
              <div className="text-3xl mr-4">🎉</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Booking Request Submitted Successfully!</h3>
                <p>Your ceremony booking has been received. We'll contact you within 2 hours to confirm the details.</p>
              </div>
            </div>
        </div>
      )}

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Service Images Gallery */}
          <div className="lg:col-span-1 space-y-4">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Ceremonies</h3>
            {serviceImages.map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-2xl shadow-xl group">
                <img
                  src={image}
                  alt={`Ceremony ${index + 1}`}
                  className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-3 left-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-semibold text-sm">
                    {index === 0 ? 'Wedding Ceremonies' : index === 1 ? 'Puja & Homam' : index === 2 ? 'Naming Ceremony' : 'Housewarming'}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-amber-100">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Step 1: Personal Information */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                      <span className="w-8 h-8 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center text-white text-lg mr-3">👤</span>
                      Personal Information
                    </h3>
                    
        <div>
                      <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
                        className="w-full border-2 border-gray-200 p-4 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300"
                        placeholder="Enter your full name"
          />
                      {errors.name && <p className="text-red-500 text-sm mt-2 flex items-center">
                        <span className="mr-1">⚠️</span>{errors.name}
                      </p>}
        </div>

        <div>
                      <label className="block text-gray-700 font-semibold mb-2">Mobile Number *</label>
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
                        className="w-full border-2 border-gray-200 p-4 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300"
                        placeholder="Enter your 10-digit mobile number"
          />
                      {errors.mobile && <p className="text-red-500 text-sm mt-2 flex items-center">
                        <span className="mr-1">⚠️</span>{errors.mobile}
                      </p>}
        </div>

        <div>
                      <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
                        className="w-full border-2 border-gray-200 p-4 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300"
                        placeholder="Enter your email address"
          />
        </div>
                  </div>
                )}

                {/* Step 2: Service Details */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                      <span className="w-8 h-8 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center text-white text-lg mr-3">🏛️</span>
                      Service Details
                    </h3>
                    
        <div>
                      <label className="block text-gray-700 font-semibold mb-2">Service Type *</label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
                        className="w-full border-2 border-gray-200 p-4 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300"
                      >
                        <option value="">Select Service Type</option>
                        <option value="Wedding Pooja">Wedding Ceremony</option>
                        <option value="Puja & Homam">Puja & Homam</option>
                        <option value="Naming Ceremony">Naming Ceremony</option>
                        <option value="Housewarming">Housewarming (Griha Pravesh)</option>
                        <option value="Ancestral Rituals">Ancestral Rituals (Shraddha)</option>
                        <option value="Special Occasions">Special Occasions & Festivals</option>
            <option value="Family Pooja">Family Pooja</option>
                        <option value="Spiritual Guidance">Spiritual Guidance</option>
          </select>
                      {errors.service && <p className="text-red-500 text-sm mt-2 flex items-center">
                        <span className="mr-1">⚠️</span>{errors.service}
                      </p>}
        </div>

                    <div className="grid md:grid-cols-2 gap-6">
          <div>
                        <label className="block text-gray-700 font-semibold mb-2">Preferred Date *</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
                          className="w-full border-2 border-gray-200 p-4 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300"
            />
                        {errors.date && <p className="text-red-500 text-sm mt-2 flex items-center">
                          <span className="mr-1">⚠️</span>{errors.date}
                        </p>}
          </div>
          <div>
                        <label className="block text-gray-700 font-semibold mb-2">Preferred Time</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
                          className="w-full border-2 border-gray-200 p-4 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300"
            />
          </div>
        </div>

        <div>
                      <label className="block text-gray-700 font-semibold mb-2">Location / Address</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
                        className="w-full border-2 border-gray-200 p-4 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300"
                        placeholder="Enter ceremony location"
          />
        </div>
                  </div>
                )}

                {/* Step 3: Requirements */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                      <span className="w-8 h-8 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center text-white text-lg mr-3">📋</span>
                      Additional Requirements
                    </h3>
                    
        <div>
                      <label className="block text-gray-700 font-semibold mb-4">Home Visit Required?</label>
                      <div className="grid grid-cols-2 gap-4">
                        <label className={`p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 ${
                          formData.homeVisit === "Yes" 
                            ? 'border-amber-500 bg-amber-50' 
                            : 'border-gray-200 hover:border-amber-300'
                        }`}>
              <input
                type="radio"
                name="homeVisit"
                value="Yes"
                checked={formData.homeVisit === "Yes"}
                onChange={handleChange}
                            className="sr-only"
                          />
                          <div className="text-center">
                            <div className="text-2xl mb-2">🏠</div>
                            <div className="font-semibold">Yes</div>
                            <div className="text-sm text-gray-600">Priest will visit your location</div>
                          </div>
            </label>
                        <label className={`p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 ${
                          formData.homeVisit === "No" 
                            ? 'border-amber-500 bg-amber-50' 
                            : 'border-gray-200 hover:border-amber-300'
                        }`}>
              <input
                type="radio"
                name="homeVisit"
                value="No"
                checked={formData.homeVisit === "No"}
                onChange={handleChange}
                            className="sr-only"
                          />
                          <div className="text-center">
                            <div className="text-2xl mb-2">🏛️</div>
                            <div className="font-semibold">No</div>
                            <div className="text-sm text-gray-600">At temple or other venue</div>
                          </div>
            </label>
          </div>
        </div>

        <div>
                      <label className="block text-gray-700 font-semibold mb-4">Need Pooja Materials?</label>
                      <div className="grid grid-cols-2 gap-4">
                        <label className={`p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 ${
                          formData.materials === "Yes" 
                            ? 'border-amber-500 bg-amber-50' 
                            : 'border-gray-200 hover:border-amber-300'
                        }`}>
              <input
                type="radio"
                name="materials"
                value="Yes"
                checked={formData.materials === "Yes"}
                onChange={handleChange}
                            className="sr-only"
                          />
                          <div className="text-center">
                            <div className="text-2xl mb-2">🕯️</div>
                            <div className="font-semibold">Yes</div>
                            <div className="text-sm text-gray-600">We'll provide all materials</div>
                          </div>
            </label>
                        <label className={`p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 ${
                          formData.materials === "No" 
                            ? 'border-amber-500 bg-amber-50' 
                            : 'border-gray-200 hover:border-amber-300'
                        }`}>
              <input
                type="radio"
                name="materials"
                value="No"
                checked={formData.materials === "No"}
                onChange={handleChange}
                            className="sr-only"
                          />
                          <div className="text-center">
                            <div className="text-2xl mb-2">📦</div>
                            <div className="font-semibold">No</div>
                            <div className="text-sm text-gray-600">You'll arrange materials</div>
                          </div>
            </label>
          </div>
        </div>

        <div>
                      <label className="block text-gray-700 font-semibold mb-2">Additional Notes</label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
                        className="w-full border-2 border-gray-200 p-4 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300 resize-none"
            rows="4"
                        placeholder="Any special requirements or notes..."
          ></textarea>
        </div>
                  </div>
                )}

                {/* Step 4: Review & Submit */}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                      <span className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white text-lg mr-3">✅</span>
                      Review Your Booking
                    </h3>
                    
                    <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-6 border border-amber-200">
                      <h4 className="text-xl font-bold text-gray-800 mb-4">Booking Summary</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="font-semibold text-gray-700">Name:</span>
                          <span className="text-gray-600">{formData.name}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-semibold text-gray-700">Mobile:</span>
                          <span className="text-gray-600">{formData.mobile}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-semibold text-gray-700">Service:</span>
                          <span className="text-gray-600">{formData.service}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-semibold text-gray-700">Date:</span>
                          <span className="text-gray-600">{formData.date}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-semibold text-gray-700">Time:</span>
                          <span className="text-gray-600">{formData.time || 'Not specified'}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-semibold text-gray-700">Home Visit:</span>
                          <span className="text-gray-600">{formData.homeVisit}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-semibold text-gray-700">Materials:</span>
                          <span className="text-gray-600">{formData.materials}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-6">
                  <button
                    type="button"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      currentStep === 1 
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    ← Previous
                  </button>
                  
                  {currentStep < 4 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    >
                      Next →
                    </button>
                  ) : (
          <button
            type="submit"
                      className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
                      Submit Booking
          </button>
                  )}
        </div>
      </form>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-amber-600 to-yellow-600 rounded-2xl p-8 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">Need Immediate Assistance?</h3>
            <p className="text-xl mb-6 opacity-90">Call us now for urgent ceremonies or same-day bookings</p>
            <a
              href="tel:+1234567890"
              className="bg-white text-amber-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-block"
            >
              📞 Call Now: +1 (234) 567-890
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
