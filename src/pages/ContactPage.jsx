import React from "react";
// import SEOHead from "../components/common/SEOHead";
import Footer from "../components/common/Footer";

const ContactPage = () => {
  return (
    <div id="contact" className="pt-16 min-h-screen bg-gradient-to-br from-gray-50 to-emerald-50">
      {/* Main Content - Centered Single Column */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16 -mt-8 relative z-10">
        <div className="bg-white rounded-2xl lg:rounded-3xl shadow-xl lg:shadow-2xl p-6 lg:p-12 border border-gray-100">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-light text-gray-800 mb-3 md:mb-4 tracking-wide uppercase">Get In Touch</h2>
            <p className="text-sm md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
              We're here to help you plan the perfect Kerala experience. Reach out through any channel that's convenient for you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 mb-8 lg:mb-12">
            {/* Phone */}
            <div className="flex items-start space-x-3 lg:space-x-4 p-4 lg:p-6 rounded-xl lg:rounded-2xl bg-emerald-50 hover:bg-emerald-100 transition duration-300">
              <div className="w-10 h-10 lg:w-14 lg:h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg lg:rounded-xl flex items-center justify-center flex-shrink-0 shadow-md lg:shadow-lg">
                <span className="text-lg lg:text-2xl text-white">📞</span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-1 lg:mb-2">Call Us</h3>
                <p className="text-gray-700 mb-1">
                  <a href="tel:+919028803309" className="hover:text-emerald-600 transition duration-200 font-semibold text-sm lg:text-lg">
                    +91-9028803309
                  </a>
                </p>
                <p className="text-gray-700">
                  <a href="tel:+919028803309" className="hover:text-emerald-600 transition duration-200 font-semibold text-sm lg:text-lg">
                    +91-9028803309
                  </a>
                </p>
                <p className="text-xs lg:text-sm text-gray-600 mt-1 lg:mt-2 font-medium">Direct line to our travel experts</p>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-start space-x-3 lg:space-x-4 p-4 lg:p-6 rounded-xl lg:rounded-2xl bg-green-50 hover:bg-green-100 transition duration-300">
              <div className="w-10 h-10 lg:w-14 lg:h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg lg:rounded-xl flex items-center justify-center flex-shrink-0 shadow-md lg:shadow-lg">
                <span className="text-lg lg:text-2xl text-white">💬</span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-1 lg:mb-2">WhatsApp</h3>
                <p className="text-gray-700 mb-1">
                  <a 
                    href="https://wa.me/919028803309" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-emerald-600 transition duration-200 font-semibold text-sm lg:text-lg"
                  >
                    +91-9028803309
                  </a>
                </p>
                <p className="text-xs lg:text-sm text-gray-600 font-medium">24/7 Available • Instant Response</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-3 lg:space-x-4 p-4 lg:p-6 rounded-xl lg:rounded-2xl bg-blue-50 hover:bg-blue-100 transition duration-300">
              <div className="w-10 h-10 lg:w-14 lg:h-14 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg lg:rounded-xl flex items-center justify-center flex-shrink-0 shadow-md lg:shadow-lg">
                <span className="text-lg lg:text-2xl text-white">✉️</span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-1 lg:mb-2">Email</h3>
                <p className="text-gray-700 mb-1">
                  <a href="mailto:omkartours143@gmail.com" className="hover:text-emerald-600 transition duration-200 font-semibold text-xs lg:text-base break-all">
                    omkartours143@gmail.com
                  </a>
                </p>
                <p className="text-xs lg:text-sm text-gray-600 mt-1 lg:mt-2 font-medium">For detailed inquiries</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start space-x-3 lg:space-x-4 p-4 lg:p-6 rounded-xl lg:rounded-2xl bg-purple-50 hover:bg-purple-100 transition duration-300">
              <div className="w-10 h-10 lg:w-14 lg:h-14 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg lg:rounded-xl flex items-center justify-center flex-shrink-0 shadow-md lg:shadow-lg">
                <span className="text-lg lg:text-2xl text-white">🏢</span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-1 lg:mb-2">Office Address</h3>
                <p className="text-gray-700 leading-relaxed text-xs lg:text-sm">
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
          <div className="space-y-3 lg:space-y-4 max-w-md mx-auto">
            <a
              href="https://wa.me/919028803309"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-3 lg:py-4 px-4 lg:px-6 font-bold text-base lg:text-lg transition-all duration-300 hover:scale-105 transform shadow-lg hover:shadow-xl flex items-center justify-center"
            >
              <span className="mr-2 lg:mr-3 text-xl lg:text-2xl">💬</span>
              Chat on WhatsApp
              <span className="ml-2">→</span>
            </a>
            <a
              href="tel:+919028803309"
              className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white py-3 lg:py-4 px-4 lg:px-6 font-bold text-base lg:text-lg transition-all duration-300 hover:scale-105 transform shadow-lg hover:shadow-xl flex items-center justify-center"
            >
              <span className="mr-2 lg:mr-3 text-xl lg:text-2xl">📞</span>
              Call Now
              <span className="ml-2">→</span>
            </a>
          </div>

          {/* Trust Badges */}
          <div className="mt-8 lg:mt-12 pt-6 lg:pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 lg:gap-6 text-xs lg:text-sm text-gray-600">
              <div className="flex items-center justify-center sm:justify-start">
                <span className="w-2 h-2 lg:w-3 lg:h-3 bg-emerald-400 rounded-full mr-2"></span>
                ✅ 5000+ Happy Customers
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <span className="w-2 h-2 lg:w-3 lg:h-3 bg-emerald-400 rounded-full mr-2"></span>
                ⭐ Best Price Guarantee
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <span className="w-2 h-2 lg:w-3 lg:h-3 bg-emerald-400 rounded-full mr-2"></span>
                🕒 24/7 Support
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContactPage;