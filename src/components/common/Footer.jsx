import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, Headphones, CreditCard, Lock, Phone, MessageCircle } from "lucide-react";

const Footer = () => (
  <footer className="bg-gray-900 text-white pt-12 pb-8">
    {/* === PAYMENT & SECURITY GROUP === */}
    <div className="max-w-6xl mx-auto px-6 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        
        {/* PAYMENT OPTIONS */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
          <h3 className="text-emerald-400 font-bold text-sm mb-3 uppercase tracking-wide">
            Secure Payments
          </h3>
          <div className="flex justify-center space-x-3">
            <div className="bg-white p-1 rounded">
              <span className="text-blue-600 font-bold text-xs">VISA</span>
            </div>
            <div className="bg-white p-1 rounded">
              <span className="text-red-500 font-bold text-xs">MC</span>
            </div>
            <div className="bg-yellow-400 p-1 rounded">
              <span className="text-blue-600 font-bold text-xs">Pay</span>
            </div>
            <div className="bg-blue-600 p-1 rounded">
              <span className="text-white font-bold text-xs">PP</span>
            </div>
          </div>
        </div>

        {/* APPROVED BY */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
          <h3 className="text-emerald-400 font-bold text-sm mb-3 uppercase tracking-wide">
            Approved By
          </h3>
          <div className="flex justify-center space-x-4 items-center">
            <div className="text-center">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mx-auto mb-1">
                <span className="text-orange-500 font-bold text-sm">🇮🇳</span>
              </div>
              <span className="text-white text-xs">Incredible India</span>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-1">
                <span className="text-white font-bold text-xs">IATO</span>
              </div>
              <span className="text-white text-xs">IATO</span>
            </div>
          </div>
        </div>

        {/* GUARANTEE */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
          <h3 className="text-emerald-400 font-bold text-sm mb-3 uppercase tracking-wide">
            Our Guarantee
          </h3>
          <div className="flex justify-center space-x-4 text-green-400 mb-2">
            <ShieldCheck className="w-5 h-5" />
            <Lock className="w-5 h-5" />
            <Headphones className="w-5 h-5" />
          </div>
          <p className="text-gray-300 text-xs">100% Trust & Security</p>
        </div>
      </div>
    </div>

    {/* === MAIN FOOTER GROUP === */}
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        
        {/* Company Info */}
        <div className="md:col-span-2">
          <h3 className="text-xl font-bold mb-3 text-emerald-400">OMKAR TOUR AND TRAVELS</h3>
          <p className="text-gray-300 text-sm mb-4 leading-relaxed">
            Your trusted travel partner since 2010. Experience Kerala with expertly crafted tours and personalized service.
          </p>
          <div className="flex space-x-3">
            <a href="#facebook" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors">
              <span className="text-white text-sm font-semibold">f</span>
            </a>
            <a href="#twitter" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors">
              <span className="text-white text-sm font-semibold">t</span>
            </a>
            <a href="#instagram" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors">
              <span className="text-white text-sm">📷</span>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-3 text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link to="/packages" className="hover:text-emerald-400 transition-colors">Tour Packages</Link>
            </li>
            <li>
              <Link to="/places" className="hover:text-emerald-400 transition-colors">Popular Places</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-emerald-400 transition-colors">About Us</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-emerald-400 transition-colors">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold mb-3 text-white">Contact</h4>
          <div className="space-y-3 text-sm text-gray-300">
            {/* Phone Numbers */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400 font-medium">Call Us:</span>
              </div>
              <div className="ml-6 space-y-1">
                <a href="tel:+919028803309" className="hover:text-emerald-400 block text-white font-medium">
                  +91-9028803309
                </a>
                <a href="tel:+919146385636" className="hover:text-emerald-400 block text-white font-medium">
                  +91-9146385636
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-center space-x-2">
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <div>
                <a href="https://wa.me/919028803309" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 text-white font-medium">
                  WhatsApp Now
                </a>
                <p className="text-xs text-gray-400">Both numbers available</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-2">
              <span className="w-4 h-4 text-emerald-400 mt-0.5">✉️</span>
              <a href="mailto:omkartours143@gmail.com" className="hover:text-emerald-400 text-white font-medium">
                omkartours143@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 pt-6 text-center">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Omkar Tour and Travels. All rights reserved.
          </p>
          <p className="text-emerald-400 text-sm font-semibold">
            Since 2010 • 5000+ Happy Travelers
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;