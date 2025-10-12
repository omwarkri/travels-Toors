import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SEOHead from "../common/SEOHead";

const Hero = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [showAudioControls, setShowAudioControls] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Initialize video with proper muted state
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, []);

  // Auto unmute on first interaction
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!hasInteracted && videoRef.current) {
        setHasInteracted(true);
        videoRef.current.muted = false;
        setIsMuted(false);
        videoRef.current.play().catch(console.error);
      }
    };

    if (!hasInteracted) {
      window.addEventListener("click", handleFirstInteraction);
      window.addEventListener("scroll", handleFirstInteraction);
      window.addEventListener("touchstart", handleFirstInteraction);
    }

    return () => {
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("scroll", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
    };
  }, [hasInteracted]);

  const toggleMute = () => {
    if (videoRef.current) {
      const newMutedState = !videoRef.current.muted;
      videoRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
      
      // Ensure video plays after mute/unmute
      videoRef.current.play().catch(console.error);
    }
  };

  const handleSoundOn = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      setIsMuted(false);
      setHasInteracted(true);
      videoRef.current.play().catch(console.error);
    }
    setShowAudioControls(false);
  };

  const handleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      setIsMuted(true);
    }
    setShowAudioControls(false);
  };

  const toggleAudioControls = () => {
    setShowAudioControls(!showAudioControls);
  };

  // Close audio controls when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showAudioControls && !event.target.closest('.audio-controls-container')) {
        setShowAudioControls(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showAudioControls]);

  // Debug: Log mute state changes
  useEffect(() => {
    console.log("Mute state changed:", isMuted);
  }, [isMuted]);

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
          muted={isMuted}
          loop
          playsInline
          preload="auto"
          poster="https://res.cloudinary.com/ddw1upvx3/image/upload/v1759595324/my_uploads_food/Screenshot_2025-10-04_at_9.57.38_PM_o93eru.png"
          className="absolute top-0 left-0 w-full h-[calc(100%+50px)] object-cover"
          style={{ transition: "none" }}
        >
          <source
            src="https://res.cloudinary.com/ddw1upvx3/video/upload/v1759594216/This_is_Kerala_-_God_s_Own_Country___Drone_shots___4K___online-video-cutter.com_b1ensd.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Audio Controls */}
        <div className="audio-controls-container absolute bottom-6 right-6 z-20 flex flex-col items-end space-y-2">
          {/* Main Audio Toggle Button */}
          <button
            onClick={toggleMute}
            className="bg-black/70 text-white p-3 rounded-full shadow-lg hover:bg-black/90 backdrop-blur-sm transition duration-200 border border-white/20"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? (
              <span className="text-lg">🔇</span>
            ) : (
              <span className="text-lg">🔊</span>
            )}
          </button>

          {/* Extended Audio Controls */}
          {showAudioControls && (
            <div className="bg-black/80 backdrop-blur-md rounded-lg p-4 shadow-2xl border border-white/20">
              <div className="flex flex-col space-y-3">
                <div className="text-white text-sm font-medium mb-2 text-center">Audio</div>
                
                <button
                  onClick={handleSoundOn}
                  className={`flex items-center justify-center space-x-2 px-4 py-2 rounded-lg transition duration-200 min-w-[120px] ${
                    !isMuted 
                      ? 'bg-emerald-600 text-white shadow-lg' 
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  <span className="text-base">🔊</span>
                  <span className="text-sm">On</span>
                </button>

                <button
                  onClick={handleMute}
                  className={`flex items-center justify-center space-x-2 px-4 py-2 rounded-lg transition duration-200 min-w-[120px] ${
                    isMuted 
                      ? 'bg-red-600 text-white shadow-lg' 
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  <span className="text-base">🔇</span>
                  <span className="text-sm">Off</span>
                </button>

                <div className="border-t border-white/20 pt-2 mt-2">
                  <button
                    onClick={() => setShowAudioControls(false)}
                    className="w-full text-center text-white/70 hover:text-white text-xs py-1 transition duration-200"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Audio Status Indicator */}
        {!isMuted && (
          <div className="absolute top-6 right-6 z-20">
            <div className="bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm flex items-center space-x-2 border border-emerald-400">
              <span className="text-xs">🔊</span>
              <span>Sound On</span>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center pt-16 pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-16 md:py-24 text-center">
          {/* Logo */}
          <div className="flex justify-center mb-4 sm:mb-6">
            <img
              className="w-[100%] sm:w-[50%] md:w-[40%] lg:w-[65%] max-w-md border-b-[2px]"
              src="https://res.cloudinary.com/dl2gcscfa/image/upload/v1759578606/kerla-logo-2_hr5ydu.png"
              alt="Kerala - God's Own Country"
            />
          </div>

          <h5 className="text-lg text-white bg-[#7a4c4c] border-[1px] leading-relaxed font-serif font-semibold italic inline-block px-4 py-2">
            Explore Kerla's Most Beutiful Destinations
          </h5>
          <h6 className="bg-red-200 text-white">Affordable and Memorable Tour Packages for Families and Freinds </h6>

          <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4">
            <Link
              to="/packages"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-emerald-500 rounded-lg font-bold text-base sm:text-lg text-white hover:bg-emerald-600 shadow-lg hover:scale-105 transform border-2 border-emerald-400 text-center transition duration-300"
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

          <div className="mt-4 sm:mt-8 flex flex-wrap justify-center gap-1 sm:gap-4 md:gap-6 text-sm sm:text-base text-white font-medium px-2">
            <div className="flex items-center bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm border border-white/30">
              <span className="w-2 h-2 sm:w-3 sm:h-3 bg-emerald-400 rounded-full mr-2 sm:mr-3"></span>
              5000+ Happy Customers
            </div>
            <div className="flex items-center bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm border border-white/30">
              <span className="w-2 h-2 sm:w-3 sm:h-3 bg-emerald-400 rounded-full mr-2 sm:mr-3"></span>
              Best Price Guarantee
            </div>
            <div className="flex items-center bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm border border-white/30">
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