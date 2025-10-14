import React from "react";
import Footer from "../components/common/Footer";

const ContactPage = () => {
  return (
    <div id="contact" className="pt-16 min-h-screen bg-gray-50">
      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get in touch with our travel experts to plan your perfect Kerala experience
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 lg:p-8">
          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Phone */}
            <div className="flex items-start space-x-4 p-4 rounded-lg bg-blue-50 border border-blue-100">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-xl text-white">📞</span>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
                <a href="tel:+919028803309" className="block text-gray-700 hover:text-blue-600 transition-colors">
                  +91-9028803309
                </a>
                <a href="tel:+919028803309" className="block text-gray-700 hover:text-blue-600 transition-colors">
                  +91-9028803309
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-start space-x-4 p-4 rounded-lg bg-green-50 border border-green-100">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-xl text-white">💬</span>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-2">WhatsApp</h3>
                <a 
                  href="https://wa.me/919028803309" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-gray-700 hover:text-green-600 transition-colors"
                >
                  +91-9028803309
                </a>
                <p className="text-sm text-green-600 mt-1">24/7 Available</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4 p-4 rounded-lg bg-purple-50 border border-purple-100">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-xl text-white">✉️</span>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                <a href="mailto:omkartours143@gmail.com" className="block text-gray-700 hover:text-purple-600 transition-colors text-sm">
                  omkartours143@gmail.com
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50 border border-gray-100">
              <div className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-xl text-white">🏢</span>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-2">Office</h3>
                <p className="text-sm text-gray-700">
                  Office No 238, Rashtrakuta Building, Ambernath West 421505
                </p>
              </div>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="space-y-4 max-w-sm mx-auto">
            <a
              href="https://wa.me/919028803309"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 font-semibold rounded-lg transition-colors flex items-center justify-center shadow-sm"
            >
              <span className="mr-2">💬</span>
              Chat on WhatsApp
            </a>
            <a
              href="tel:+919028803309"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 font-semibold rounded-lg transition-colors flex items-center justify-center shadow-sm"
            >
              <span className="mr-2">📞</span>
              Call Now
            </a>
          </div>

         
        </div>

      
      </section>
      <Footer />
    </div>
  );
};

export default ContactPage;