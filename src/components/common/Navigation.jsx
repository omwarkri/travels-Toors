import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleScrollTop = (path) => {
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-lg overflow-y-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-3 md:py-4">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => handleScrollTop("/")}
            className="flex items-center"
          >
            <div>
              <img 
                src="https://res.cloudinary.com/dl2gcscfa/image/upload/v1759578583/logo_dps0pd.jpg" 
                className="w-32 sm:w-40 md:w-[200px] max-w-full" 
                alt="Logo" 
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a
              href="/"
              className="text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-200 text-sm lg:text-base"
              onClick={() => handleScrollTop("/")}
            >
              Home
            </a>
            <a
              href="#packages"
              className="text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-200 text-sm lg:text-base"
              // onClick={() => handleScrollTop("/packages")}
            >
              Tour Packages
            </a>
            <a
              href="#places"
              className="text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-200 text-sm lg:text-base"
              onClick={() => handleScrollTop("/places")}
            >
              Popular Places
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-200 text-sm lg:text-base"
              onClick={() => handleScrollTop("/about")}
            >
              About Us
            </a>
            <a
              href="#contact"
              className="bg-emerald-500 text-white px-4 py-2 lg:px-6 lg:py-2 rounded-lg font-medium hover:bg-emerald-600 transition-all duration-300 text-sm lg:text-base"
              onClick={() => handleScrollTop("/contact")}
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-between relative">
              <span
                className={`w-full h-0.5 bg-gray-800 transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-2.5" : ""
                }`}
              ></span>
              <span
                className={`w-full h-0.5 bg-gray-800 transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`w-full h-0.5 bg-gray-800 transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-y-hidden ${
            isMenuOpen 
              ? "max-h-96 py-4 border-t border-gray-200 opacity-100" 
              : "max-h-0 py-0 opacity-0"
          }`}
        >
          <div className="flex flex-col space-y-3">
            <a
              href="/"
              className="text-gray-700 hover:text-emerald-600 font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-all duration-200"
              onClick={() => handleScrollTop("/")}
            >
              Home
            </a>
            <a
              href="#packages"
              className="text-gray-700 hover:text-emerald-600 font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-all duration-200"
              // onClick={() => handleScrollTop("/packages")}
            >
              Tour Packages
            </a>
            <a
              href="#places"
              className="text-gray-700 hover:text-emerald-600 font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-all duration-200"
              onClick={() => handleScrollTop("/places")}
            >
              Popular Places
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-emerald-600 font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-all duration-200"
              onClick={() => handleScrollTop("/about")}
            >
              About Us
            </a>
            <a
              href="#contact"
              className="bg-emerald-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-600 transition-all duration-300 text-center mt-2"
              onClick={() => handleScrollTop("/contact")}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;