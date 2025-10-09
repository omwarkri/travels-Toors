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

  const socialLinks = [
    {
      name: "Facebook",
      url: "https://facebook.com/yourpage",
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      color: "hover:text-blue-600"
    },
    {
      name: "Instagram",
      url: "https://instagram.com/yourprofile",
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.202 14.815 3.712 13.664 3.712 12.367s.49-2.448 1.414-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.924.875 1.414 2.026 1.414 3.323s-.49 2.448-1.414 3.323c-.875.807-2.026 1.297-3.323 1.297zm8.062-1.063c-.315 0-.552-.237-.552-.552v-5.816c0-.315.237-.552.552-.552h1.887c.315 0 .552.237.552.552v5.816c0 .315-.237.552-.552.552h-1.887zm1.887-7.387h-1.887c-1.033 0-1.887.854-1.887 1.887v5.816c0 1.033.854 1.887 1.887 1.887h1.887c1.033 0 1.887-.854 1.887-1.887v-5.816c0-1.033-.854-1.887-1.887-1.887z"/>
        </svg>
      ),
      color: "hover:text-pink-600"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/yourprofile",
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
      color: "hover:text-blue-400"
    },
    {
      name: "YouTube",
      url: "https://youtube.com/yourchannel",
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
      color: "hover:text-red-600"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/company/yourcompany",
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      color: "hover:text-blue-700"
    }
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 shadow-lg">
      {/* First Row - Contact Links */}
      <div className="bg-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="flex justify-between items-center py-2">
            {/* Phone Number */}
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 10.999h2C22 5.869 18.127 2 12.99 2v2C17.052 4 20 6.943 20 10.999z"/>
                <path d="M13 8c2.103 0 3 .897 3 3h2c0-3.225-1.775-5-5-5v2zm3.422 5.443a1.001 1.001 0 00-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 00.043-1.391L6.859 3.513a1 1 0 00-1.391-.087l-2.17 1.861a1 1 0 00-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 00.648-.291l1.86-2.171a1 1 0 00-.086-1.391l-4.064-3.696z"/>
              </svg>
              <span className="text-xs sm:text-sm font-medium">+91 90288 03309</span>
            </div>

            {/* WhatsApp Link - Centered */}
            <a
              href="https://wa.me/919028803309"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 px-3 py-1 rounded-lg transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.189-1.248-6.189-3.515-8.464"/>
              </svg>
              <span className="text-xs sm:text-sm font-medium">Chat on WhatsApp</span>
            </a>

            {/* Social Media Links */}
            <div className="flex items-center space-x-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-white hover:text-gray-200 transition-colors duration-200 p-1 rounded-lg hover:bg-emerald-700`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Second Row - Logo and Navigation */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center py-2 sm:py-3">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => handleScrollTop("/")}
            className="flex items-center flex-shrink-0"
          >
            <div>
              <img 
                src="https://res.cloudinary.com/dl2gcscfa/image/upload/v1759578583/logo_dps0pd.jpg" 
                className="w-28 sm:w-32 md:w-36 lg:w-40 xl:w-44 max-w-full h-auto" 
                alt="Logo" 
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6 2xl:space-x-8">
            {/* Navigation Links */}
            <a
              href="/"
              className="text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-200 text-sm xl:text-base"
              onClick={() => handleScrollTop("/")}
            >
              Home
            </a>
            <a
              href="/#packages"
              className="text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-200 text-sm xl:text-base"
            >
              Tour Packages
            </a>
            <a
              href="/#places"
              className="text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-200 text-sm xl:text-base"
              onClick={() => handleScrollTop("/places")}
            >
              Popular Places
            </a>
            <a
              href="/#about"
              className="text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-200 text-sm xl:text-base"
              onClick={() => handleScrollTop("/about")}
            >
              About Us
            </a>

            {/* Contact Button */}
            <a
              href="/#contact"
              className="bg-emerald-500 text-white px-3 xl:px-4 2xl:px-6 py-1.5 xl:py-2 font-medium hover:bg-emerald-600 transition-all duration-300 text-sm xl:text-base rounded-lg"
              onClick={() => handleScrollTop("/contact")}
            >
              Contact
            </a>
          </div>

          {/* Tablet Navigation (Simplified) */}
          <div className="hidden md:flex lg:hidden items-center space-x-4">
            <a
              href="/#packages"
              className="text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-200 text-sm"
            >
              Packages
            </a>
            <a
              href="/#places"
              className="text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-200 text-sm"
            >
              Places
            </a>
            <a
              href="/#contact"
              className="bg-emerald-500 text-white px-3 py-1.5 font-medium hover:bg-emerald-600 transition-all duration-300 text-sm rounded-lg"
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
            <div className="w-5 h-5 flex flex-col justify-between relative">
              <span
                className={`w-full h-0.5 bg-gray-800 transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`w-full h-0.5 bg-gray-800 transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`w-full h-0.5 bg-gray-800 transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen 
              ? "max-h-96 py-3 border-t border-gray-200 opacity-100" 
              : "max-h-0 py-0 opacity-0"
          }`}
        >
          <div className="flex flex-col space-y-2">
            <a
              href="/"
              className="text-gray-700 hover:text-emerald-600 font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-all duration-200 text-base"
              onClick={() => handleScrollTop("/")}
            >
              Home
            </a>
            <a
              href="#packages"
              className="text-gray-700 hover:text-emerald-600 font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-all duration-200 text-base"
            >
              Tour Packages
            </a>
            <a
              href="#places"
              className="text-gray-700 hover:text-emerald-600 font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-all duration-200 text-base"
              onClick={() => handleScrollTop("/places")}
            >
              Popular Places
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-emerald-600 font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-all duration-200 text-base"
              onClick={() => handleScrollTop("/about")}
            >
              About Us
            </a>
            <a
              href="#contact"
              className="bg-emerald-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-600 transition-all duration-300 text-center mt-2 text-base"
              onClick={() => handleScrollTop("/contact")}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;