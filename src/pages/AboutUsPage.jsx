import React from "react";
import SEOHead from "../components/common/SEOHead";
import Footer from "../components/common/Footer";

const AboutUsPage = () => {
  return (
    <div className="pt-20 min-h-screen">
      <SEOHead 
        title="About Omkar Tour and Travels | Kerala Tourism Experts Since 2010"
        description="Omkar Tour and Travels - Trusted Kerala travel agency since 2010. 5000+ happy customers, best price guarantee, 24/7 support. Learn about our story and expertise."
        keywords="Omkar Tour and Travels about, Kerala travel agency, tour operators Kerala, trusted travel company"
      />
      
      <section className="max-w-7xl mx-auto py-8  md:py-16">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-gray-800 mb-6 tracking-wider uppercase">About Omkar Tour and Travels</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted travel partner in Kerala since 2010, creating unforgettable experiences in God's Own Country.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Since 2010, Omkar Tour and Travels has been creating unforgettable travel experiences in Kerala. 
              With over 13 years of expertise and 5000+ satisfied customers, we have established ourselves as 
              one of the most trusted travel agencies in God's Own Country.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our deep local knowledge, strong partnerships with premium hotels and service providers, and 
              commitment to personalized service sets us apart. We believe in creating journeys, not just trips - 
              experiences that stay with you for a lifetime.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">13+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">5000+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
            </div>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=1200&q=80" 
              alt="Omkar Tour and Travels team" 
              className="rounded-2xl shadow-xl w-full h-96 object-cover"
            />
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-emerald-50 p-8 rounded-2xl">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-700">
              To provide exceptional travel experiences in Kerala by combining local expertise with personalized 
              service, ensuring every journey becomes a cherished memory.
            </p>
          </div>
          <div className="bg-emerald-50 p-8 rounded-2xl">
            <div className="text-4xl mb-4">👁️</div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-700">
              To be the most trusted and preferred travel partner for exploring Kerala, known for our integrity, 
              expertise, and commitment to customer satisfaction.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-center mb-8">Why Travel With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h4 className="font-semibold mb-2">Local Expertise</h4>
              <p className="text-gray-600 text-sm">Deep knowledge of Kerala's hidden gems and local culture</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h4 className="font-semibold mb-2">Best Value</h4>
              <p className="text-gray-600 text-sm">Competitive pricing without compromising on quality</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h4 className="font-semibold mb-2">24/7 Support</h4>
              <p className="text-gray-600 text-sm">Round-the-clock assistance throughout your journey</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutUsPage;