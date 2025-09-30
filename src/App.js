/*
Kerala Tourism Website - Modern Design
Omkar Tour and Travels - Updated Content
*/

import React, { useState } from "react";

// ================== Hero ==================
const Hero = () => {
  return (
    <header className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/✨ Indulge in Luxury, Rekindle Romance ✨Treat your loved one to an unforgettable 4N-5D Private To.mp4" type="video/mp4" />
        {/* Fallback image if video doesn't load */}
        <img 
          src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1600&q=80" 
          alt="Kerala Tourism Background" 
          className="w-full h-full object-cover"
        />
      </video>
      
      {/* Darker overlay for better text contrast */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/80 to-emerald-900/80" />
      
      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center pt-16 pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-16 md:py-24 text-center">
          {/* Company Badge - Made responsive */}
          <a className="text-white">Whats app</a>
          <div className="inline-flex flex-col sm:flex-row items-center px-3 sm:px-4 py-2 bg-white/20 rounded-full text-base sm:text-lg font-medium mb-4 sm:mb-6 backdrop-blur-sm border border-white/30 mx-2">
          
            <h2 className="text-lg sm:text-xl text-white font-bold text-center sm:text-left">🌟 Omkar Tour and Travels</h2>
            <span className="text-emerald-200 font-semibold text-sm sm:text-base mt-1 sm:mt-0 sm:ml-2">- Trusted Since 2010</span>
          </div>
          
          {/* Subheading */}
          <h2 className="text-lg sm:text-xl uppercase tracking-widest text-emerald-300 mb-4 sm:mb-6 font-semibold drop-shadow-lg px-2">
            Experience God's Own Country with Experts
          </h2>
          
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-white drop-shadow-2xl">
            KERALA
          </h1>
          
          {/* Description */}
          
          
          {/* Buttons */}
          <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4">
            <a
              href="#packages"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-emerald-500 rounded-lg font-bold text-base sm:text-lg text-white hover:bg-emerald-600 transition duration-300 shadow-lg hover:scale-105 transform border-2 border-emerald-400"
            >
              View Tour Packages
            </a>
            <a
              href="#contact"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white rounded-lg font-bold text-base sm:text-lg text-white hover:bg-white hover:text-emerald-900 transition duration-300 hover:scale-105 transform"
            >
              Get Custom Quote
            </a>
          </div>
          
          {/* Stats */}
          <div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 text-sm sm:text-base text-white font-medium px-2">
            <div className="flex items-center bg-white/20 px-3 py-2 rounded-full backdrop-blur-sm">
              <span className="w-2 h-2 sm:w-3 sm:h-3 bg-emerald-400 rounded-full mr-2 sm:mr-3"></span>
              5000+ Happy Customers
            </div>
            <div className="flex items-center bg-white/20 px-3 py-2 rounded-full backdrop-blur-sm">
              <span className="w-2 h-2 sm:w-3 sm:h-3 bg-emerald-400 rounded-full mr-2 sm:mr-3"></span>
              Best Price Guarantee
            </div>
            <div className="flex items-center bg-white/20 px-3 py-2 rounded-full backdrop-blur-sm">
              <span className="w-2 h-2 sm:w-3 sm:h-3 bg-emerald-400 rounded-full mr-2 sm:mr-3"></span>
              24/7 Customer Support
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - Hidden on very small screens */}
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

// ================== Enhanced Tour Packages ==================
const TourPackageCard = ({ pkg }) => (
  <div className="group bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
    <div className="relative overflow-hidden">
      <img
        src={pkg.image}
        alt={pkg.name}
        className="w-full h-48 object-cover group-hover:scale-110 transition duration-700"
      />
      <div className="absolute top-4 right-4">
        <span className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
          {pkg.duration}
        </span>
      </div>
      <div className="absolute top-4 left-4">
        <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
          Omkar Special
        </span>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent h-20"></div>
    </div>

    <div className="p-6">
      <div className="mb-4">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{pkg.name}</h3>
        <div className="flex items-center text-sm text-gray-500">
          <span className="flex items-center mr-4">
            <svg className="w-4 h-4 mr-1 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            {pkg.destination}
          </span>
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-1 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            Best: {pkg.bestSeason}
          </span>
        </div>
      </div>

      {/* Icons with better styling */}
      <div className="flex justify-between mb-6 py-3 border-y border-gray-100">
        <div className="text-center">
          <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-1">
            <span className="text-sm">✈️</span>
          </div>
          <span className="text-xs text-gray-600">Flight</span>
        </div>
        <div className="text-center">
          <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-1">
            <span className="text-sm">🏨</span>
          </div>
          <span className="text-xs text-gray-600">Hotels</span>
        </div>
        <div className="text-center">
          <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-1">
            <span className="text-sm">👀</span>
          </div>
          <span className="text-xs text-gray-600">Sights</span>
        </div>
        <div className="text-center">
          <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-1">
            <span className="text-sm">🍴</span>
          </div>
          <span className="text-xs text-gray-600">Meals</span>
        </div>
        <div className="text-center">
          <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-1">
            <span className="text-sm">🚐</span>
          </div>
          <span className="text-xs text-gray-600">Transfers</span>
        </div>
      </div>

      {/* Enhanced Highlights */}
      <div className="mb-6">
        <h4 className="font-semibold text-gray-700 mb-3 flex items-center">
          <svg className="w-4 h-4 mr-2 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          Tour Highlights
        </h4>
        <ul className="space-y-2">
          {pkg.highlights.map((highlight, i) => (
            <li key={i} className="flex items-start text-sm text-gray-600">
              <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              {highlight}
            </li>
          ))}
        </ul>
      </div>

      {/* Price and CTA */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <span className="text-sm text-gray-500">Starting from</span>
          <div className="flex items-baseline">
            <span className="text-2xl font-bold text-gray-800">₹{pkg.price}</span>
            <span className="text-sm text-gray-500 ml-1">/person</span>
          </div>
          <span className="text-xs text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
            {pkg.discount}
          </span>
        </div>
        <div className="text-right">
          <div className="flex items-center text-sm text-emerald-600">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            {pkg.rating} ({pkg.reviews} reviews)
          </div>
        </div>
      </div>

      <button className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-4 rounded-xl font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center group">
    <a href="https://wa.me/919028803309" target="_blank" rel="noopener noreferrer">
  <span>Whats App</span>
</a>

        <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </button>
    </div>
  </div>
);

const TourPackages = ({ id = "packages" }) => {
  const packages = [
    {
      name: "Kerala Bliss Experience",
      duration: "06 Nights / 07 Days",
      destination: "Kochi, Munnar, Alleppey",
      bestSeason: "Sep - Mar",
      price: "24,999",
      discount: "Special 15% Off",
      rating: "4.8",
      reviews: "124",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      highlights: [
        "Airport pickup with traditional welcome",
        "Luxury AC vehicle throughout the tour",
        "Premium houseboat cruise in Alleppey",
        "Tea estate stay in Munnar",
        "24/7 Omkar travel support"
      ],
    },
       {
      name: "Maharastra Bliss Experience",
      duration: "06 Nights / 07 Days",
      destination: "Kochi, Munnar, Alleppey",
      bestSeason: "Sep - Mar",
      price: "30,999",
      discount: "Special 15% Off",
      rating: "4.8",
      reviews: "124",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      highlights: [
        "Airport pickup with traditional welcome",
        "Luxury AC vehicle throughout the tour",
        "Premium houseboat cruise in Alleppey",
        "Tea estate stay in Munnar",
        "24/7 Omkar travel support"
      ],
    },
    {
      name: "Backwaters & Beaches Deluxe",
      duration: "07 Nights / 08 Days",
      destination: "Munnar, Thekkady, Kovalam",
      bestSeason: "Oct - Feb",
      price: "32,499",
      discount: "Family Package Available",
      rating: "4.9",
      reviews: "89",
      image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80",
      highlights: [
        "Spice plantation tour with expert guide",
        "Periyar wildlife sanctuary boat cruise",
        "Beachfront resort in Kovalam",
        "Traditional cultural performances",
        "All meals included"
      ],
    },
    {
      name: "Cultural Heritage Trail",
      duration: "07 Nights / 08 Days",
      destination: "Kochi, Thrissur, Wayanad",
      bestSeason: "Aug - Apr",
      price: "28,999",
      discount: "Group Discount Available",
      rating: "4.7",
      reviews: "156",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      highlights: [
        "Heritage walk with local expert",
        "Traditional martial arts show",
        "Rainforest trekking in Wayanad",
        "Temple visits and cultural insights",
        "Handicraft shopping assistance"
      ],
    },
  ];

  return (
    <section id={id} className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <div className="inline-flex items-center px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium mb-4">
          🏆 Omkar Exclusive Packages
        </div>
        <h2 className="text-5xl font-bold text-gray-800 mb-6">
          Curated Kerala Experiences
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Handcrafted itineraries by Omkar Tour and Travels. Experience Kerala with local insights, 
          premium accommodations, and personalized service that makes your journey unforgettable.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {packages.map((pkg, index) => (
          <TourPackageCard key={index} pkg={pkg} />
        ))}
      </div>

      {/* View All Packages CTA */}
      <div className="text-center mt-12">
        <button className="inline-flex items-center px-8 py-4 border-2 border-emerald-500 text-emerald-600 rounded-xl font-semibold hover:bg-emerald-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1">
          View All 15+ Packages
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

// ================== Popular Places ==================
const PlaceCard = ({ place }) => (
  <div className="group relative rounded-2xl overflow-hidden shadow-lg bg-white transform transition duration-300 hover:scale-105">
    <img
      src={place.image}
      alt={place.name}
      className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
      <h3 className="text-2xl font-bold mb-2">{place.name}</h3>
      <p className="text-gray-200 leading-relaxed">{place.desc}</p>
      <div className="mt-3 flex items-center text-sm text-emerald-300">
        <span className="mr-2">⭐</span>
        {place.rating} • {place.tours} tours available
      </div>
    </div>
  </div>
);

const PopularPlaces = ({ id = "places" }) => {
  const places = [
    { 
      name: "MUNNAR", 
      desc: "Arguably the best hill station in South India with tea-clad hill tops and valleys.", 
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      rating: "4.8",
      tours: "12"
    },
    { 
      name: "ALLEPPEY", 
      desc: "The rare water world aptly called Venice of the East with beautiful green paddy pastures.", 
      image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80",
      rating: "4.9",
      tours: "8"
    },
    { 
      name: "KOVALAM", 
      desc: "Experience beach life with friendly tides, sun ups and sun downs - the best beach to unwind.", 
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=1200&q=80",
      rating: "4.7",
      tours: "6"
    },
    { 
      name: "WAYANAD", 
      desc: "Exceptional hill station famous for aborigine populace, exotic hills and evergreen forests.", 
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      rating: "4.8",
      tours: "10"
    },
    { 
      name: "KOCHI", 
      desc: "Urban Kerala with malls and busy city life blending with traditional Kerala culture.", 
      image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1200&q=80",
      rating: "4.6",
      tours: "15"
    },
    { 
      name: "ATHIRAPALLY", 
      desc: "Breathtaking waterfall with exotic flora and fauna - a truly grand and beautiful spot.", 
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1200&q=80",
      rating: "4.9",
      tours: "5"
    }
  ];

  return (
    <section id={id} className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Most Popular Places to Visit</h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Kerala is a rare place adorned with beautiful landscapes, hill stations, water bodies and everything a traveler would love to explore.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {places.map((place) => (
          <PlaceCard key={place.name} place={place} />
        ))}
      </div>
    </section>
  );
};

// ================== Why Choose Us ==================
const WhyChooseUs = () => {
  const features = [
    {
      icon: "🏆",
      title: "13+ Years Experience",
      description: "Trusted travel experts since 2010 with deep local knowledge"
    },
    {
      icon: "💰",
      title: "Best Price Guarantee",
      description: "We promise the best rates for the same quality of service"
    },
    {
      icon: "🛡️",
      title: "24/7 Support",
      description: "Round-the-clock assistance throughout your journey"
    },
    {
      icon: "🎯",
      title: "Customized Itineraries",
      description: "Tailor-made packages to match your preferences and budget"
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "5000+ Happy Customers",
      description: "Join our family of satisfied travelers across India"
    },
    {
      icon: "🏨",
      title: "Premium Partnerships",
      description: "Best hotels and service providers across Kerala"
    }
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Omkar Tour and Travels?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We go beyond just booking your trip - we create memories that last a lifetime
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center group hover:shadow-xl transition duration-300">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-200 transition duration-300">
                <span className="text-2xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ================== FAQ ==================
const FAQ = ({ id = "faq" }) => {
  const faqs = [
    { 
      question: "Why should I choose Omkar Tour and Travels?", 
      answer: "With 13+ years of experience, 5000+ happy customers, and deep local expertise, we provide personalized service, best prices, and 24/7 support throughout your journey." 
    },
    { 
      question: "How much will a Kerala trip cost with Omkar?", 
      answer: "Packages start from ₹12,999 per person for 3 days. We offer budget to luxury options with complete transparency. Contact us for customized quotes with best price guarantee." 
    },
    { 
      question: "Do you provide airport transfers?", 
      answer: "Yes, all our packages include airport pickups and drops. We provide AC vehicles with experienced drivers for all transfers and sightseeing." 
    },
    { 
      question: "Can I customize my Kerala tour package?", 
      answer: "Absolutely! We specialize in tailor-made itineraries. Tell us your preferences, duration, and budget, and we'll create your perfect Kerala experience." 
    },
    { 
      question: "What is your cancellation policy?", 
      answer: "We offer flexible cancellation policies. Full refund if cancelled 30 days before travel. Contact us for detailed policy based on your package." 
    }
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id={id} className="max-w-4xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-600">Everything you need to know about planning your Kerala trip with Omkar</p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden">
            <button
              className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition duration-200 flex justify-between items-center"
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            >
              <span className="font-semibold text-gray-800">{faq.question}</span>
              <span className="text-emerald-600 text-xl">
                {openIndex === index ? '−' : '+'}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

// ================== Contact Section ==================
const ContactSection = ({ id = "contact" }) => {
  return (
    <section id={id} className="bg-emerald-600 text-white py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Explore Kerala?</h2>
        <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
          Get your personalized Kerala tour package with best price guarantee. Our travel experts are here to help you plan the perfect trip.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="bg-emerald-700 p-6 rounded-2xl">
            <div className="text-2xl mb-4">📞</div>
            <h3 className="text-xl font-bold mb-2">Call Us</h3>
            <p className="text-emerald-100">+91-9958809033</p>
            <p className="text-emerald-100">+91-9898765432</p>
          </div>
          
          <div className="bg-emerald-700 p-6 rounded-2xl">
            <div className="text-2xl mb-4">💬</div>
            <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
            <p className="text-emerald-100">+91-9958809033</p>
            <p className="text-emerald-100">24/7 Available</p>
          </div>
          
          <div className="bg-emerald-700 p-6 rounded-2xl">
            <div className="text-2xl mb-4">✉️</div>
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p className="text-emerald-100">info@omkartours.com</p>
            <p className="text-emerald-100">tour@omkartours.com</p>
          </div>
        </div>

        <button className="bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition duration-300 shadow-lg">
          Get Free Custom Quote
        </button>
      </div>
    </section>
  );
};

// ================== Footer ==================
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
            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition duration-300">
              <span>f</span>
            </a>
            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition duration-300">
              <span>t</span>
            </a>
            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition duration-300">
              <span>in</span>
            </a>
            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition duration-300">
              <span>✉️</span>
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#packages" className="hover:text-emerald-400 transition duration-200">Tour Packages</a></li>
            <li><a href="#places" className="hover:text-emerald-400 transition duration-200">Popular Places</a></li>
            <li><a href="#contact" className="hover:text-emerald-400 transition duration-200">Contact Us</a></li>
            <li><a href="#faq" className="hover:text-emerald-400 transition duration-200">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <div className="space-y-2 text-gray-300">
            <p className="flex items-center">
              <span className="mr-2">📱</span>
              +91-9958809033 (24/7)
            </p>
            <p className="flex items-center">
              <span className="mr-2">💬</span>
              +91-9958809033 (WhatsApp)
            </p>
            <p className="flex items-center">
              <span className="mr-2">✉️</span>
              info@omkartours.com
            </p>
            <p className="text-sm mt-4">
              Office: No 79/47, New Gardens Enrichakkal Sangamam<br />
              Nagar Vallakadavur EQ,<br />
              Thiruvananthapuram, Kerala 695008
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

// ================== Main App ==================
export default function KeralaTourismWebsite() {
  return (
    <div className="min-h-screen font-sans text-gray-800 bg-white">
      <Hero />
      <main>
        <TourPackages />
        <PopularPlaces />
        <WhyChooseUs />
        <FAQ />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}