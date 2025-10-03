import React, { useState } from "react";
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-[#e3f3f9] backdrop-blur-md z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
        
            <div>
                <img src="/logo.jpeg" className="w-[200px]" alt="" />
            
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-emerald-600 font-medium">Home</Link>
            <Link to="/packages" className="text-gray-700 hover:text-emerald-600 font-medium">Tour Packages</Link>
            <Link to="/places" className="text-gray-700 hover:text-emerald-600 font-medium">Popular Places</Link>
            <Link to="/about" className="text-gray-700 hover:text-emerald-600 font-medium">About Us</Link>
            <Link to="/contact" className="bg-emerald-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-emerald-600 transition duration-300">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-gray-800 transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
              <span className={`w-full h-0.5 bg-gray-800 opacity-100 transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-0.5 bg-gray-800 transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-emerald-600 font-medium" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/packages" className="text-gray-700 hover:text-emerald-600 font-medium" onClick={() => setIsMenuOpen(false)}>Tour Packages</Link>
              <Link to="/places" className="text-gray-700 hover:text-emerald-600 font-medium" onClick={() => setIsMenuOpen(false)}>Popular Places</Link>
              <Link to="/about" className="text-gray-700 hover:text-emerald-600 font-medium" onClick={() => setIsMenuOpen(false)}>About Us</Link>
              <Link to="/contact" className="bg-emerald-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-emerald-600 transition duration-300 text-center" onClick={() => setIsMenuOpen(false)}>
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