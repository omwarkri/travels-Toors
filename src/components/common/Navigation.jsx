import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Smooth scroll handler (works across pages)
  const handleScrollToSection = (path, sectionId = null) => {
    setIsMenuOpen(false);

    if (location.pathname !== path) {
      // Navigate first if not already on the page
      navigate(path);
      setTimeout(() => {
        if (sectionId) {
          const element = document.querySelector(sectionId);
          if (element) element.scrollIntoView({ behavior: "smooth" });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, 400); // small delay to wait for page render
    } else {
      // Already on same page → just scroll
      if (sectionId) {
        const element = document.querySelector(sectionId);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  const socialLinks = [
    {
      name: "Facebook",
      url: "https://facebook.com/yourpage",
      icon: (
        <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      url: "https://instagram.com/yourprofile",
      icon: (
        <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.202 14.815 3.712 13.664 3.712 12.367s.49-2.448 1.414-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.924.875 1.414 2.026 1.414 3.323s-.49 2.448-1.414 3.323c-.875.807-2.026 1.297-3.323 1.297z" />
        </svg>
      ),
    },
    {
      name: "Twitter",
      url: "https://twitter.com/yourprofile",
      icon: (
        <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775A4.958 4.958 0 0023.29 2.62a9.86 9.86 0 01-3.127 1.184A4.92 4.92 0 0011.78 8.28 13.978 13.978 0 011.64 3.162a4.822 4.822 0 00-.666 2.475 4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105A13.995 13.995 0 007.557 22c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      ),
    },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 shadow-lg">
      {/* Top bar */}
      <div className="bg-emerald-600 text-white py-1">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 flex justify-between items-center">
          <a
            href="tel:+919028803309"
            className="flex items-center space-x-1 hover:text-blue-200 transition-colors duration-200"
          >
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 10.999h2C22 5.869 18.127 2 12.99 2v2C17.052 4 20 6.943 20 10.999z" />
              <path d="M13 8c2.103 0 3 .897 3 3h2c0-3.225-1.775-5-5-5v2z" />
            </svg>
            <span className="text-xs font-medium">+91 90288 03309</span>
          </a>

          <div className="flex items-center space-x-2">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-200 p-0.5 rounded hover:bg-emerald-700"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto sm:px-4 lg:px-6">
        <div className="flex justify-between items-center py-3 sm:py-2">
          <Link
            to="/"
            onClick={() => handleScrollToSection("/")}
            className="flex items-center"
          >
            <img
              src="https://res.cloudinary.com/dl2gcscfa/image/upload/v1759578583/logo_dps0pd.jpg"
              className="w-20 sm:w-28 h-auto ml-2"
              alt="Logo"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
            <button
              onClick={() => handleScrollToSection("/")}
              className="text-gray-700 hover:text-emerald-600 font-medium text-sm"
            >
              Home
            </button>
            <button
              onClick={() => handleScrollToSection("/", "#packages")}
              className="text-gray-700 hover:text-emerald-600 font-medium text-sm"
            >
              Tour Packages
            </button>
            <button
              onClick={() => handleScrollToSection("/", "#places")}
              className="text-gray-700 hover:text-emerald-600 font-medium text-sm"
            >
              Popular Places
            </button>
            <button
              onClick={() => handleScrollToSection("/", "#about")}
              className="text-gray-700 hover:text-emerald-600 font-medium text-sm"
            >
              About Us
            </button>
            <button
              onClick={() => handleScrollToSection("/", "#contact")}
              className="bg-emerald-500 text-white px-3 py-1 rounded font-medium hover:bg-emerald-600 transition-all duration-300 text-sm"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-1 rounded hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-4 h-4 flex flex-col justify-between relative">
              <span
                className={`w-full h-0.5 bg-gray-800 transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></span>
              <span
                className={`w-full h-0.5 bg-gray-800 transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`w-full h-0.5 bg-gray-800 transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen
              ? "max-h-96 py-2 border-t border-gray-200 opacity-100"
              : "max-h-0 py-0 opacity-0"
          }`}
        >
          <div className="flex flex-col space-y-1">
            <button
              onClick={() => handleScrollToSection("/")}
              className="text-gray-700 hover:text-emerald-600 font-medium py-1 px-3 text-sm text-left"
            >
              Home
            </button>
            <button
              onClick={() => handleScrollToSection("/", "#packages")}
              className="text-gray-700 hover:text-emerald-600 font-medium py-1 px-3 text-sm text-left"
            >
              Tour Packages
            </button>
            <button
              onClick={() => handleScrollToSection("/", "#places")}
              className="text-gray-700 hover:text-emerald-600 font-medium py-1 px-3 text-sm text-left"
            >
              Popular Places
            </button>
            <button
              onClick={() => handleScrollToSection("/", "#about")}
              className="text-gray-700 hover:text-emerald-600 font-medium py-1 px-3 text-sm text-left"
            >
              About Us
            </button>
            <button
              onClick={() => handleScrollToSection("/", "#contact")}
              className="bg-emerald-500 text-white px-4 py-2 rounded font-medium hover:bg-emerald-600 text-center mt-1 text-sm"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
