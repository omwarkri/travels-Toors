import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleScrollTop = (path) => {
    if (location.pathname === path) {
      // If already on the page, just scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setIsMenuOpen(false); // close mobile menu after click
  };

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => handleScrollTop("/")}
            className="flex items-center space-x-3"
          >
            <div>
              <img src="/logo.jpeg" className="w-[200px]" alt="Logo" />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-emerald-600 font-medium"
              onClick={() => handleScrollTop("/")}
            >
              Home
            </Link>
            <a
              href="#packages"
              className="text-gray-700 hover:text-emerald-600 font-medium"
              onClick={() => handleScrollTop("/packages")}
            >
              Tour Packages
            </a>
            <a
              href="#places"
              className="text-gray-700 hover:text-emerald-600 font-medium"
              onClick={() => handleScrollTop("/places")}
            >
              Popular Places
            </a>
            <Link
              to="/about"
              className="text-gray-700 hover:text-emerald-600 font-medium"
              onClick={() => handleScrollTop("/about")}
            >
              About Us
            </Link>
            <q
              to="#contact"
              className="bg-emerald-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-emerald-600 transition duration-300"
              onClick={() => handleScrollTop("/contact")}
            >
              Contact
            </q>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-gray-800 transition-transform ${
                  isMenuOpen ? "rotate-45 translate-y-2.5" : ""
                }`}
              ></span>
              <span
                className={`w-full h-0.5 bg-gray-800 opacity-100 transition-opacity ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`w-full h-0.5 bg-gray-800 transition-transform ${
                  isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-emerald-600 font-medium"
                onClick={() => handleScrollTop("/")}
              >
                Home
              </Link>
              <Link
                to="/packages"
                className="text-gray-700 hover:text-emerald-600 font-medium"
                onClick={() => handleScrollTop("/packages")}
              >
                Tour Packages
              </Link>
              <Link
                to="/places"
                className="text-gray-700 hover:text-emerald-600 font-medium"
                onClick={() => handleScrollTop("/places")}
              >
                Popular Places
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-emerald-600 font-medium"
                onClick={() => handleScrollTop("/about")}
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="bg-emerald-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-emerald-600 transition duration-300 text-center"
                onClick={() => handleScrollTop("/contact")}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
