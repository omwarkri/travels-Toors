import React from "react";

const ContactSection = ({ id = "contact" }) => {
  return (
    <section id={id} className="bg-emerald-600 text-white py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Explore Kerala?</h2>
        <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
          Get your personalized Kerala tour package with best price guarantee. Our travel experts are here to help you plan the perfect trip.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Call Us */}
          <div className="bg-emerald-700 p-6 rounded-2xl">
            <div className="text-2xl mb-4">📞</div>
            <h3 className="text-xl font-bold mb-2">Call Us</h3>
            <p className="text-emerald-100">
              <a href="tel:+919028803309" className="hover:underline">
                 +91-9028803309
              </a>
            </p>
            <p className="text-emerald-100">
              <a href="tel:+919028803309" className="hover:underline">
                 +91-9028803309
              </a>
            </p>
          </div>
          
          {/* WhatsApp */}
          <div className="bg-emerald-700 p-6 rounded-2xl">
            <div className="text-2xl mb-4">💬</div>
            <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
            <p className="text-emerald-100">
              <a
                href="https://wa.me/919028803309"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                +91-9028803309
              </a>
            </p>
            <p className="text-emerald-100">24/7 Available</p>
          </div>
          
          {/* Email */}
          <div className="bg-emerald-700 p-6 rounded-2xl">
            <div className="text-2xl mb-4">✉️</div>
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p className="text-emerald-100">
              <a href="mailto:omkartours143@gmail.com" className="hover:underline">
                omkartours143@gmail.com
              </a>
            </p>
            <p className="text-emerald-100">
              <a href="mailto:omkartours143@gmail.com" className="hover:underline">
                omkartours143@gmail.com
              </a>
            </p>
          </div>
        </div>

        <a
          href="https://wa.me/919028803309"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition duration-300 shadow-lg"
        >
          💬 Get Free Custom Quote on WhatsApp
        </a>
      </div>
    </section>
  );
};

export default ContactSection;