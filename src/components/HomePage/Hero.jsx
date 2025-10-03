import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SEOHead from "../common/SEOHead";

const Hero = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [showFallback, setShowFallback] = useState(false);

  // Preload and handle video
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      setIsVideoLoaded(true);
      video.play().catch(() => {
        // If autoplay fails, show fallback
        setShowFallback(true);
      });
    };

    const handleError = () => {
      setShowFallback(true);
      setIsVideoLoaded(true);
    };

    // Set video source with preload
    video.preload = "auto";
    video.load();

    video.addEventListener("loadeddata", handleLoadedData);
    video.addEventListener("error", handleError);
    video.addEventListener("canplaythrough", handleLoadedData);

    // Fallback timeout
    const fallbackTimer = setTimeout(() => {
      if (!isVideoLoaded) {
        setShowFallback(true);
      }
    }, 3000);

    return () => {
      video.removeEventListener("loadeddata", handleLoadedData);
      video.removeEventListener("error", handleError);
      video.removeEventListener("canplaythrough", handleLoadedData);
      clearTimeout(fallbackTimer);
    };
  }, [isVideoLoaded]);

  // Auto unmute on first user interaction
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (videoRef.current && isMuted) {
        videoRef.current.muted = false;
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
    }
  };

  // Background image fallback URLs
  const fallbackImages = [
    "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1508197149814-0cc02e5d0c8e?auto=format&fit=crop&w=1600&q=80"
  ];

  return (
    <header className="relative h-screen overflow-hidden">
      <SEOHead
        title="Kerala Tour Packages | Omkar Tour and Travels - Best Kerala Tourism"
        description="Experience God's Own Country with Omkar Tour and Travels. 5000+ happy customers, best price guarantee. Book your Kerala tour package today!"
        keywords="Kerala tour packages, Kerala tourism, Munnar tour, Alleppey houseboat, Kerala travel agency"
      />

      {/* Loading Background */}
      {!isVideoLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900 z-0">
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      )}

      {/* Video Background with Fallback */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        {/* Fallback Image */}
        {(showFallback || !isVideoLoaded) && (
          <div className="absolute inset-0">
            <img
              src={fallbackImages[0]}
              alt="Kerala Tourism Background - Beautiful backwaters and landscapes of God's Own Country"
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        )}

        {/* Video */}
        {!showFallback && (
          <video
            ref={videoRef}
            autoPlay
            muted={isMuted}
            loop
            playsInline
            preload="auto"
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
              isVideoLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            poster="https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=800&q=80"
          >
            <source src="/herobg.mp4" type="video/mp4" />
            <source src="/herobg.webm" type="video/webm" />
            <source src="/herobg.ogg" type="video/ogg" />
          </video>
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>

        {/* Loading Spinner */}
        {!isVideoLoaded && !showFallback && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
          </div>
        )}

        {/* Toggle Button */}
        {isVideoLoaded && !showFallback && (
          <button
            onClick={toggleMute}
            className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20 bg-black/50 text-white p-2 sm:p-3 rounded-full shadow-md hover:bg-black/70 transition backdrop-blur-sm"
            aria-label={isMuted ? "Unmute Video" : "Mute Video"}
          >
            {isMuted ? (
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            )}
          </button>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center pt-16 pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-16 md:py-24 text-center">
          {/* Company Badge */}
          <div className="inline-flex flex-col sm:flex-row items-center px-3 sm:px-4 py-2 bg-white/20 rounded-full text-base sm:text-lg font-medium mb-4 sm:mb-6 backdrop-blur-sm border border-white/30 mx-2">
            <h2 className="text-lg sm:text-xl text-white font-bold">
              🌟 Omkar Tour and Travels
            </h2>
            <span className="text-emerald-200 font-semibold text-sm sm:text-base mt-1 sm:mt-0 sm:ml-2">
              - Trusted Since 2010
            </span>
          </div>

          {/* Subheading */}
          <h2 className="text-sm sm:text-lg uppercase tracking-widest text-emerald-300 mb-4 sm:mb-6 font-semibold drop-shadow-lg px-2">
            Experience God's Own Country with Experts
          </h2>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-white drop-shadow-2xl leading-tight">
            KERALA
          </h1>

          {/* Description */}
          <p className="text-base sm:text-xl text-white/90 max-w-2xl sm:max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed px-2">
            Discover the magic of Kerala with our expertly crafted tour packages.
            From serene backwaters to lush hill stations, experience the best of
            God's Own Country with local insights and premium service.
          </p>

          {/* Buttons */}
          <div className="mt-4 sm:mt-6 md:mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4">
            <Link
              to="/packages"
              className="px-4 sm:px-8 py-3 sm:py-4 bg-emerald-500 rounded-lg font-bold text-sm sm:text-lg text-white hover:bg-emerald-600 transition duration-300 shadow-lg hover:scale-105 transform border-2 border-emerald-400 text-center flex items-center justify-center min-w-[140px]"
            >
              View Tour Packages
            </Link>
            <Link
              to="/contact"
              className="px-4 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white rounded-lg font-bold text-sm sm:text-lg text-white hover:bg-white hover:text-emerald-900 transition duration-300 hover:scale-105 transform text-center flex items-center justify-center min-w-[140px]"
            >
              Get Custom Quote
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-4 sm:mt-6 flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-6 text-xs sm:text-sm text-white font-medium px-2">
            <div className="flex items-center bg-white/20 px-2 sm:px-3 py-1 sm:py-2 rounded-full backdrop-blur-sm">
              <span className="w-2 h-2 sm:w-3 sm:h-3 bg-emerald-400 rounded-full mr-1 sm:mr-2"></span>
              5000+ Happy Customers
            </div>
            <div className="flex items-center bg-white/20 px-2 sm:px-3 py-1 sm:py-2 rounded-full backdrop-blur-sm">
              <span className="w-2 h-2 sm:w-3 sm:h-3 bg-emerald-400 rounded-full mr-1 sm:mr-2"></span>
              Best Price Guarantee
            </div>
            <div className="flex items-center bg-white/20 px-2 sm:px-3 py-1 sm:py-2 rounded-full backdrop-blur-sm">
              <span className="w-2 h-2 sm:w-3 sm:h-3 bg-emerald-400 rounded-full mr-1 sm:mr-2"></span>
              24/7 Customer Support
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-2 sm:h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;