import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SEOHead from "../common/SEOHead";

const Hero = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);

  // Auto unmute on first user interaction
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (videoRef.current && isMuted) {
        videoRef.current.muted = false;
        videoRef.current.play().catch(() => {}); // Safe fallback
        setIsMuted(true);
      }
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("scroll", handleFirstInteraction);
    };

    window.addEventListener("click", handleFirstInteraction);
    window.addEventListener("scroll", handleFirstInteraction);

    return () => {
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("scroll", handleFirstInteraction);
    };
  }, [isMuted]);

  // Manual toggle
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
      videoRef.current.play().catch(() => {});
    }
  };

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
          className="absolute top-0 left-0 w-full h-full object-cover min-h-screen"
        >
          <source src="/herobg.mp4" type="video/mp4" />
          <img
            src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1600&q=80"
            alt="Kerala Tourism Background - Beautiful backwaters and landscapes of God's Own Country"
            className="w-full h-full object-cover"
          />
        </video>

        {/* Dark Overlay for better contrast */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Toggle Button */}
        <button
          onClick={toggleMute}
          className="absolute bottom-4 right-4 z-20 bg-black/60 text-white p-2 rounded-full shadow-lg hover:bg-black/80 transition sm:bottom-6 sm:right-6"
          aria-label={isMuted ? "Unmute Video" : "Mute Video"}
        >
          {isMuted ? "🔇" : "🔊"}
        </button>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-4">
        <div className="w-full max-w-4xl mx-auto text-center py-4 sm:py-8">
          {/* Main Heading - Kerala Logo */}
          <div className="flex justify-center mb-4 sm:mb-6">
            <img 
              className="w-[90%] max-w-xs sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[45%]" 
              src="/kerla-logo-2.png" 
              alt="Kerala - God's Own Country" 
            />
          </div>

          {/* Tagline */}
          <div className="mb-6 sm:mb-8">
            <h5 className="text-base sm:text-lg text-white bg-[#7a4c4c] border border-white/30 leading-relaxed font-serif font-semibold italic inline-block px-4 py-2 sm:py-3 rounded-lg backdrop-blur-sm">
              Experience God's Own Country with Experts
            </h5>
          </div>

          {/* Buttons */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link
              to="/packages"
              className="px-5 py-3 sm:px-6 sm:py-3 bg-emerald-500 rounded-lg font-bold text-white hover:bg-emerald-600 transition duration-300 shadow-lg hover:scale-105 transform border-2 border-emerald-400 text-sm sm:text-base text-center flex-1 sm:flex-none"
            >
              View Tour Packages
            </Link>
            <Link
              to="/contact"
              className="px-5 py-3 sm:px-6 sm:py-3 bg-white/20 backdrop-blur-sm border-2 border-white rounded-lg font-bold text-white hover:bg-white hover:text-emerald-900 transition duration-300 hover:scale-105 transform text-sm sm:text-base text-center flex-1 sm:flex-none"
            >
              Get Custom Quote
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-2 sm:gap-3 text-white font-medium">
            <div className="flex items-center justify-center bg-white/20 backdrop-blur-sm px-3 py-2 rounded-full border border-white/30 text-xs sm:text-sm">
              <span className="w-2 h-2 sm:w-3 sm:h-3 bg-emerald-400 rounded-full mr-2 sm:mr-3"></span>
              5000+ Happy Customers
            </div>
            <div className="flex items-center justify-center bg-white/20 backdrop-blur-sm px-3 py-2 rounded-full border border-white/30 text-xs sm:text-sm">
              <span className="w-2 h-2 sm:w-3 sm:h-3 bg-emerald-400 rounded-full mr-2 sm:mr-3"></span>
              Best Price Guarantee
            </div>
            <div className="flex items-center justify-center bg-white/20 backdrop-blur-sm px-3 py-2 rounded-full border border-white/30 text-xs sm:text-sm">
              <span className="w-2 h-2 sm:w-3 sm:h-3 bg-emerald-400 rounded-full mr-2 sm:mr-3"></span>
              24/7 Support
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white rounded-full flex justify-center bg-white/20 backdrop-blur-sm">
            <div className="w-1 h-2 sm:h-3 bg-white rounded-full mt-1 sm:mt-2"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;