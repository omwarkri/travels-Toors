import React from "react";
import { Link } from 'react-router-dom';
import SEOHead from '../common/SEOHead';

const Hero = () => {
  return (
    <header className="relative h-screen overflow-hidden">
      <SEOHead 
        title="Kerala Tour Packages | Omkar Tour and Travels - Best Kerala Tourism"
        description="Experience God's Own Country with Omkar Tour and Travels. 5000+ happy customers, best price guarantee. Book your Kerala tour package today!"
        keywords="Kerala tour packages, Kerala tourism, Munnar tour, Alleppey houseboat, Kerala travel agency"
      />
      
      {/* Video Background */}
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute top-0 left-0 w-full h-[calc(100%+50px)] object-cover"
  >
    <source src="/herobg.mp4" type="video/mp4" />
    <img 
      src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1600&q=80" 
      alt="Kerala Tourism Background - Beautiful backwaters and landscapes of God's Own Country" 
      className="w-full h-[calc(100%+20px)] object-cover"
    />
  </video>
</div>
      
      {/* Darker overlay for better text contrast */}
      {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/80 to-emerald-900/80" /> */}
      
      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center pt-16 pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-16 md:py-24 text-center">
          {/* Company Badge */}
          <div className="inline-flex flex-col sm:flex-row items-center px-3 sm:px-4 py-2 bg-white/20 rounded-full text-base sm:text-lg font-medium mb-4 sm:mb-6 backdrop-blur-sm border border-white/30 mx-2">
            <h2 className="text-lg sm:text-xl text-white font-bold text-center sm:text-left">🌟 Omkar Tour and Travels</h2>
            <span className="text-emerald-200 font-semibold text-sm sm:text-base mt-1 sm:mt-0 sm:ml-2">- Trusted Since 2010</span>
          </div>
          
          {/* Subheading */}
          <h2 className="text-lg sm:text-xl uppercase tracking-widest text-emerald-300 mb-4 sm:mb-6 font-semibold drop-shadow-lg px-2">
            Experience God's Own Country with Experts
          </h2>
          
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-white drop-shadow-2xl">
            KERALA
          </h1>
          
          {/* Description */}
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
            Discover the magic of Kerala with our expertly crafted tour packages. From serene backwaters to lush hill stations, 
            experience the best of God's Own Country with local insights and premium service.
          </p>
          
          {/* Buttons */}
          <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4">
            <Link
              to="/packages"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-emerald-500 rounded-lg font-bold text-base sm:text-lg text-white hover:bg-emerald-600 transition duration-300 shadow-lg hover:scale-105 transform border-2 border-emerald-400 text-center"
            >
              View Tour Packages
            </Link>
            <Link
              to="/contact"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white rounded-lg font-bold text-base sm:text-lg text-white hover:bg-white hover:text-emerald-900 transition duration-300 hover:scale-105 transform text-center"
            >
              Get Custom Quote
            </Link>
          </div>
          
          {/* Stats */}
          <div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 text-sm sm:text-base text-white font-medium px-2">
            <div className="flex items-center bg-white/20 px-3 py-2 rounded-full backdrop-blur-sm">
              <span className="w-2 h-2 sm:w-3 sm:h-3 bg-emerald-400 rounded-full mr-2 sm:mr-3"></span>
              5000+ Happy Customers
            </div>
            <div className="flex items-center bg-white/20 px-3 py-2 rounded-full backdrop-blur-sm">
              <span className="w-2 h-2 sm:w-3 sm:h-3 bg-emerald-400 rounded-full mr-2 sm:mr-3"></span>
              Best Price Guarantee
            </div>
            <div className="flex items-center bg-white/20 px-3 py-2 rounded-full backdrop-blur-sm">
              <span className="w-2 h-2 sm:w-3 sm:h-3 bg-emerald-400 rounded-full mr-2 sm:mr-3"></span>
              24/7 Customer Support
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;