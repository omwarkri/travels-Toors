import React from "react";
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-gray-900 text-white pt-12 pb-8">
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div className="md:col-span-2">
          <h3 className="text-2xl font-bold mb-4">OMKAR TOUR AND TRAVELS</h3>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Your trusted travel partner since 2010. Experience Kerala like never before with our 
            expertly crafted tours, local insights, and personalized service that creates unforgettable memories.
          </p>
          <div className="flex space-x-4">
            <a href="#products" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition duration-300">
              <span>f</span>
            </a>
            <a href="#products" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition duration-300">
              <span>t</span>
            </a>
            <a href="#products" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition duration-300">
              <span>in</span>
            </a>
            <a href="#products" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition duration-300">
              <span>✉️</span>
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-300">
            <li><Link to="/packages" className="hover:text-emerald-400 transition duration-200">Tour Packages</Link></li>
            <li><Link to="/places" className="hover:text-emerald-400 transition duration-200">Popular Places</Link></li>
            <li><Link to="/about" className="hover:text-emerald-400 transition duration-200">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-emerald-400 transition duration-200">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <div className="space-y-2 text-gray-300">
            <p className="flex items-center">
              <span className="mr-2">📱</span>
              <a href="tel:+919028803309" className="hover:underline">
                +91-9028803309 (24/7)
              </a>
            </p>
            <p className="flex items-center">
              <span className="mr-2">💬</span>
              <a 
                href="https://wa.me/919028803309" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:underline"
              >
                +91-9028803309 (WhatsApp)
              </a>
            </p>
            <p className="flex items-center">
              <span className="mr-2">✉️</span>
              <a href="mailto:omkartours143@gmail.com" className="hover:underline">
                omkartours143@gmail.com
              </a>
            </p>
            <p className="text-sm mt-4">
              Office No 238 Rashtrakuta Building Empire Industrial Centrum  <br/>Chikhloli Kalyan Badlapur road ambernath west 421505
              Tal:- Ambernath Dist - Thane
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
        <p>© {new Date().getFullYear()} Omkar Tour and Travels. All rights reserved. | Since 2010</p>
      </div>
    </div>
  </footer>
);

export default Footer;