import React, { useState } from "react";
import SEOHead from "../components/common/SEOHead";
import Footer from "../components/common/Footer";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    package: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    const message = `Name: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0APackage: ${formData.package}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/919028803309?text=${message}`, '_blank');
  };

  return (
    <div className="pt-20 min-h-screen">
      <SEOHead 
        title="Contact Omkar Tour and Travels | Kerala Tour Packages Booking"
        description="Contact Omkar Tour and Travels for Kerala tour packages. Call +91-9028803309, WhatsApp, or email omkartours143@gmail.com. 24/7 customer support available."
        keywords="contact Omkar Tour and Travels, Kerala tour booking, travel agency contact"
      />
      
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Get In Touch</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to plan your Kerala adventure? Contact us for personalized tour packages and expert travel advice.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">📞</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Call Us</h3>
                  <p className="text-gray-600">
                    <a href="tel:+919028803309" className="hover:text-emerald-600 transition duration-200">
                      +91-9028803309
                    </a>
                  </p>
                  <p className="text-gray-600">
                    <a href="tel:+919028803309" className="hover:text-emerald-600 transition duration-200">
                      +91-9028803309
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">💬</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">WhatsApp</h3>
                  <p className="text-gray-600">
                    <a 
                      href="https://wa.me/919028803309" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-emerald-600 transition duration-200"
                    >
                      +91-9028803309
                    </a>
                  </p>
                  <p className="text-sm text-gray-500">24/7 Available</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">✉️</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Email</h3>
                  <p className="text-gray-600">
                    <a href="mailto:omkartours143@gmail.com" className="hover:text-emerald-600 transition duration-200">
                      omkartours143@gmail.com
                    </a>
                  </p>
                  <p className="text-gray-600">
                    <a href="mailto:omkartours143@gmail.com" className="hover:text-emerald-600 transition duration-200">
                      omkartours143@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🏢</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Office Address</h3>
                  <p className="text-gray-600">
                    Office No 238 Rashtrakuta Building<br />
                    Empire Industrial Centrum<br />
                    Chikhloli Kalyan Badlapur road<br />
                    Ambernath west 421505<br />
                    Tal: Ambernath Dist - Thane
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <div className="space-y-3">
              <a
                href="https://wa.me/919028803309"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-600 text-white py-4 rounded-xl font-semibold hover:bg-green-700 transition duration-300 flex items-center justify-center"
              >
                💬 Chat on WhatsApp
              </a>
              <a
                href="tel:+919028803309"
                className="w-full bg-emerald-500 text-white py-4 rounded-xl font-semibold hover:bg-emerald-600 transition duration-300 flex items-center justify-center"
              >
                📞 Call Now
              </a>
            </div>
          </div>

          {/* Contact Form */}
        
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContactPage;