import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SEOHead from "../common/SEOHead";

const Hero = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);

 

  return (
    <header className="relative h-screen overflow-hidden">
      <SEOHead
        title="Kerala Tour Packages | Omkar Tour and Travels - Best Kerala Tourism"
        description="Experience God's Own Country with Omkar Tour and Travels. 5000+ happy customers, best price guarantee. Book your Kerala tour package today!"
        keywords="Kerala tour packages, Kerala tourism, Munnar tour, Alleppey houseboat, Kerala travel agency"
      />

      {/* Video Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden bg-black">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-[calc(100%+50px)] object-cover"
        >
          <source src="https://res.cloudinary.com/dl2gcscfa/video/upload/v1759578517/herobg_saoawu.mp4" type="video/mp4" />
          <img
            src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1600&q=80"
            alt="Kerala Tourism Background - Beautiful backwaters and landscapes of God's Own Country"
            className="w-full h-[calc(100%+20px)] object-cover"
          />
        </video>

        {/* Toggle Button */}
        {/* <button
          onClick={toggleMute}
          className="absolute bottom-6 right-6 z-20 bg-black/50 text-white px-3 py-2 rounded-full shadow-md hover:bg-black/70 transition"
          aria-label={isMuted ? "Unmute Video" : "Mute Video"}
        >
          {isMuted ? "🔇" : "🔊"}
        </button> */}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center pt-16 pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-16 md:py-24 text-center">
          {/* Company Badge */}
         

         

          {/* Main Heading - Kerala Logo */}
          <div className="flex justify-center mb-4 sm:mb-6">
            <img 
              className="w-[100%] sm:w-[50%] md:w-[40%] lg:w-[65%] max-w-md border-b-[2px]" 
              src="https://res.cloudinary.com/dl2gcscfa/image/upload/v1759578606/kerla-logo-2_hr5ydu.png" 
              alt="Kerala - God's Own Country" 
            />
          </div>

          {/* Description */}
  <h5 className="text-lg text-white bg-[#7a4c4c] border-[1px] leading-relaxed font-serif font-semibold italic inline-block px-4 py-2">
  Experience God's Own Country with Experts
</h5>
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
          <div className="mt-4 sm:mt-8 flex flex-wrap justify-center gap-1 sm:gap-4 md:gap-6 text-sm sm:text-base text-white font-medium px-2">
            <div className="flex items-center bg-white/20 px-1 py-1 rounded-full backdrop-blur-sm">
              <span className="w-2 h-2 sm:w-3 sm:h-3 bg-emerald-400 rounded-full mr-2 sm:mr-3"></span>
              5000+ Happy Customers
            </div>
            <div className="flex items-center bg-white/20 px-1 py-1 rounded-full backdrop-blur-sm">
              <span className="w-2 h-2 sm:w-3 sm:h-3 bg-emerald-400 rounded-full mr-2 sm:mr-3"></span>
              Best Price Guarantee
            </div>
            <div className="flex items-center bg-white/20 px-1 py-1 rounded-full backdrop-blur-sm">
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