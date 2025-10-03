import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SEOHead from "../common/SEOHead";

const Hero = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  // Auto unmute on first user interaction
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (videoRef.current && isMuted) {
        videoRef.current.muted = false;
        videoRef.current.play().catch(() => {}); // Safe fallback
        setIsMuted(false);
      }
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("scroll", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
    };

    window.addEventListener("click", handleFirstInteraction);
    window.addEventListener("scroll", handleFirstInteraction);
    window.addEventListener("touchstart", handleFirstInteraction);

    return () => {
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("scroll", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
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
          className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 object-cover min-w-full min-h-full"
        >
          <source src="/herobg.mp4" type="video/mp4" />
          <img
            src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1600&q=80"
            alt="Kerala Tourism Background - Beautiful backwaters and landscapes of God's Own Country"
            className="w-full h-full object-cover"
          />
        </video>

        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40"></div>

        {/* Toggle Button */}
        <button
          onClick={toggleMute}
          className="absolute bottom-4 right-4 z-20 bg-black/50 text-white p-2 rounded-full shadow-md hover:bg-black/70 transition sm:bottom-6 sm:right-6 sm:p-3"
          aria-label={isMuted ? "Unmute Video" : "Mute Video"}
        >
          {isMuted ? (
            <span className="text-sm sm:text-base">🔇</span>
          ) : (
            <span className="text-sm sm:text-base">🔊</span>
          )}
        </button>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6">
        <div className="w-full max-w-6xl mx-auto text-center">
          {/* Company Badge */}
          <div className="inline-flex flex-col sm:flex-row items-center px-3 py-2 bg-white/20 rounded-full text-sm font-medium mb-4 backdrop-blur-sm border border-white/30 sm:px-4 sm:text-base sm:mb-6">
            <h2 className="text-white font-bold text-base sm:text-lg">
              🌟 Omkar Tour and Travels
            </h2>
            <span className="text-emerald-200 font-semibold text-xs mt-1 sm:mt-0 sm:ml-2 sm:text-sm">
              - Trusted Since 2010
            </span>
          </div>

          {/* Subheading */}
          <h2 className="text-sm uppercase tracking-widest text-emerald-300 mb-4 font-semibold drop-shadow-lg sm:text-base sm:mb-6">
            Experience God's Own Country with Experts
          </h2>

          {/* Main Heading */}
          <h1 className="text-5xl font-bold mb-4 text-white drop-shadow-2xl sm:text-6xl md:text-7xl lg:text-8xl sm:mb-6">
            KERALA
          </h1>

          {/* Description */}
          <p className="text-base text-white/90 max-w-2xl mx-auto mb-6 leading-relaxed sm:text-lg sm:mb-8 md:text-xl md:max-w-3xl">
            Discover the magic of Kerala with our expertly crafted tour packages.
            From serene backwaters to lush hill stations, experience the best of
            God's Own Country with local insights and premium service.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 sm:mt-8">
            <Link
              to="/packages"
              className="px-6 py-3 bg-emerald-500 rounded-lg font-bold text-white hover:bg-emerald-600 transition duration-300 shadow-lg hover:scale-105 transform border-2 border-emerald-400 text-center text-sm sm:px-8 sm:py-4 sm:text-base"
            >
              View Tour Packages
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 bg-transparent border-2 border-white rounded-lg font-bold text-white hover:bg-white hover:text-emerald-900 transition duration-300 hover:scale-105 transform text-center text-sm sm:px-8 sm:py-4 sm:text-base"
            >
              Get Custom Quote
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-6 flex flex-wrap justify-center gap-2 text-white font-medium sm:gap-4 sm:mt-8">
            <div className="flex items-center bg-white/20 px-2 py-1 rounded-full backdrop-blur-sm text-xs sm:px-3 sm:py-2 sm:text-sm">
              <span className="w-2 h-2 bg-emerald-400 rounded-full mr-1 sm:mr-2 sm:w-3 sm:h-3"></span>
              5000+ Happy Customers
            </div>
            <div className="flex items-center bg-white/20 px-2 py-1 rounded-full backdrop-blur-sm text-xs sm:px-3 sm:py-2 sm:text-sm">
              <span className="w-2 h-2 bg-emerald-400 rounded-full mr-1 sm:mr-2 sm:w-3 sm:h-3"></span>
              Best Price Guarantee
            </div>
            <div className="flex items-center bg-white/20 px-2 py-1 rounded-full backdrop-blur-sm text-xs sm:px-3 sm:py-2 sm:text-sm">
              <span className="w-2 h-2 bg-emerald-400 rounded-full mr-1 sm:mr-2 sm:w-3 sm:h-3"></span>
              24/7 Customer Support
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 sm:bottom-8">
        <div className="animate-bounce">
          <div className="w-5 h-8 border-2 border-white rounded-full flex justify-center sm:w-6 sm:h-10">
            <div className="w-1 h-2 bg-white rounded-full mt-1 sm:h-3 sm:mt-2"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;