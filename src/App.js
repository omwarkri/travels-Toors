/*
Kerala Tourism Website - Modern Design
Omkar Tour and Travels - Updated Content
*/

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';

// ================== SEO Head Component ==================
const SEOHead = ({ title, description, keywords, canonical }) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_IN" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TravelAgency",
          "name": "Omkar Tour and Travels",
          "description": "Kerala tour packages and travel services since 2010",
          "url": "https://omkartourskerala.com",
          "telephone": "+91-9028803309",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Office No 238 Rashtrakuta Building Empire Industrial Centrum",
            "addressLocality": "Ambernath West",
            "postalCode": "421505",
            "addressRegion": "Thane",
            "addressCountry": "IN"
          },
          "openingHours": "Mo-Su 24/7",
          "areaServed": "Kerala, India"
        })}
      </script>
    </>
  );
};

// ================== Navigation ==================
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">O</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Omkar Tour & Travels</h1>
              <p className="text-xs text-gray-600">Trusted Since 2010</p>
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

// ================== Hero ==================
const Hero = () => {
  return (
    <header className="relative h-screen overflow-hidden">
      <SEOHead 
        title="Kerala Tour Packages | Omkar Tour and Travels - Best Kerala Tourism"
        description="Experience God's Own Country with Omkar Tour and Travels. 5000+ happy customers, best price guarantee. Book your Kerala tour package today!"
        keywords="Kerala tour packages, Kerala tourism, Munnar tour, Alleppey houseboat, Kerala travel agency"
        canonical="https://omkartourskerala.com"
      />
      
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/✨ Indulge in Luxury, Rekindle Romance ✨Treat your loved one to an unforgettable 4N-5D Private To.mp4" type="video/mp4" />
        <img 
          src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1600&q=80" 
          alt="Kerala Tourism Background - Beautiful backwaters and landscapes of God's Own Country" 
          className="w-full h-full object-cover"
        />
      </video>
      
      {/* Darker overlay for better text contrast */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/80 to-emerald-900/80" />
      
      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center pt-16 pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-16 md:py-24 text-center">
          {/* Company Badge */}
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
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
            Discover the magic of Kerala with our expertly crafted tour packages. From serene backwaters to lush hill stations, 
            experience the best of God's Own Country with local insights and premium service.
          </p>
          
          {/* Buttons */}
          <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4">
            <Link
              to="/packages"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-emerald-500 rounded-lg font-bold text-base sm:text-lg text-white hover:bg-emerald-600 transition duration-300 shadow-lg hover:scale-105 transform border-2 border-emerald-400 text-center"
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

// ================== Single Package Page ==================
const SinglePackagePage = () => {
  const { packageId } = useParams();
  
  const allPackages = {
    "kerala-bliss-experience": {
      id: "kerala-bliss-experience",
      name: "Kerala Bliss Experience",
      duration: "06 Nights / 07 Days",
      destination: "Kochi, Munnar, Alleppey",
      bestSeason: "Sep - Mar",
      price: "24,999",
      originalPrice: "29,999",
      discount: "Special 15% Off",
      rating: "4.8",
      reviews: "124",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      highlights: [
        "Airport pickup with traditional welcome",
        "Luxury AC vehicle throughout the tour",
        "Premium houseboat cruise in Alleppey",
        "Tea estate stay in Munnar",
        "24/7 Omkar travel support",
        "Traditional Kathakali dance performance",
        "Spice plantation visit"
      ],
      itinerary: [
        {
          day: "Day 1",
          title: "Arrival in Kochi",
          description: "Arrive at Cochin International Airport, traditional welcome and transfer to hotel. Evening visit to Fort Kochi and Chinese fishing nets."
        },
        {
          day: "Day 2",
          title: "Kochi to Munnar",
          description: "Scenic drive to Munnar through tea plantations. Visit tea museum and enjoy panoramic views of Western Ghats."
        },
        {
          day: "Day 3",
          title: "Munnar Exploration",
          description: "Full day exploring Munnar - Echo Point, Mattupetty Dam, and tea gardens. Evening at leisure."
        }
      ],
      inclusions: [
        "Accommodation in 3-star hotels",
        "Daily breakfast and dinner",
        "AC vehicle for all transfers & sightseeing",
        "Alleppey houseboat cruise with meals",
        "All toll taxes, parking & driver allowances",
        "Tour guide services"
      ],
      exclusions: [
        "Flight tickets",
        "Lunch except on houseboat",
        "Personal expenses",
        "Travel insurance",
        "Anything not mentioned in inclusions"
      ]
    },
    "maharastra-bliss-experience": {
      id: "maharastra-bliss-experience",
      name: "Maharashtra Bliss Experience",
      duration: "06 Nights / 07 Days",
      destination: "Mumbai, Pune, Mahabaleshwar",
      bestSeason: "Oct - Feb",
      price: "30,999",
      originalPrice: "36,499",
      discount: "Special 15% Off",
      rating: "4.8",
      reviews: "124",
      image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1200&q=80",
      highlights: [
        "City tour of Mumbai including Gateway of India",
        "Hill station experience in Mahabaleshwar",
        "Wine tasting in Nashik vineyards",
        "Historical sites in Pune",
        "24/7 Omkar travel support"
      ],
      itinerary: [
        {
          day: "Day 1",
          title: "Arrival in Mumbai",
          description: "Arrive at Mumbai airport, transfer to hotel. Evening visit to Marine Drive and Juhu Beach."
        },
        {
          day: "Day 2",
          title: "Mumbai City Tour",
          description: "Full day exploring Mumbai - Gateway of India, Elephanta Caves, and shopping at Colaba Causeway."
        }
      ],
      inclusions: [
        "Accommodation in 3-star hotels",
        "Daily breakfast",
        "AC vehicle for all transfers & sightseeing",
        "All sightseeing as per itinerary",
        "All toll taxes, parking & driver allowances"
      ],
      exclusions: [
        "Flight tickets",
        "Lunch and dinner",
        "Personal expenses",
        "Travel insurance"
      ]
    }
  };

  const pkg = allPackages[packageId] || allPackages["kerala-bliss-experience"];

  return (
    <div className="pt-20">
      <SEOHead 
        title={`${pkg.name} | ${pkg.duration} | Omkar Tour and Travels`}
        description={`Book ${pkg.name} - ${pkg.duration} starting at ₹${pkg.price}. Includes ${pkg.highlights.slice(0, 3).join(', ')}`}
        keywords={`${pkg.destination}, Kerala tour packages, ${pkg.name}, ${pkg.duration}`}
        canonical={`https://omkartourskerala.com/package/${pkg.id}`}
      />
      
      {/* Package Header */}
      <section className="relative h-96 bg-gray-900">
        <img
          src={pkg.image}
          alt={`${pkg.name} - ${pkg.destination}`}
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center space-x-2 mb-4">
              <span className="bg-emerald-500 px-3 py-1 rounded-full text-sm">🏆 Omkar Exclusive</span>
              <span className="bg-red-500 px-3 py-1 rounded-full text-sm">{pkg.discount}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{pkg.name}</h1>
            <div className="flex flex-wrap items-center gap-4 text-lg">
              <span>📍 {pkg.destination}</span>
              <span>⏱️ {pkg.duration}</span>
              <span>⭐ {pkg.rating} ({pkg.reviews} reviews)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Package Details */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Highlights */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6">Tour Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {pkg.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Itinerary */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6">Detailed Itinerary</h2>
              <div className="space-y-6">
                {pkg.itinerary.map((day, index) => (
                  <div key={index} className="flex space-x-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                      <span className="text-emerald-600 font-bold">{day.day}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{day.title}</h3>
                      <p className="text-gray-600">{day.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-gray-800">₹{pkg.price}</div>
                <div className="text-sm text-gray-500 line-through">₹{pkg.originalPrice}</div>
                <div className="text-emerald-600 font-semibold mt-1">{pkg.discount}</div>
                <div className="text-sm text-gray-500 mt-2">per person</div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-sm">
                  <span>Duration</span>
                  <span className="font-semibold">{pkg.duration}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Best Season</span>
                  <span className="font-semibold">{pkg.bestSeason}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Rating</span>
                  <span className="font-semibold">{pkg.rating} ⭐ ({pkg.reviews} reviews)</span>
                </div>
              </div>

              <div className="space-y-3">
                <a
                  href="https://wa.me/919028803309"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-600 text-white py-4 rounded-xl font-semibold hover:bg-green-700 transition duration-300 flex items-center justify-center"
                >
                  💬 Book on WhatsApp
                </a>
                <a
                  href="tel:+919028803309"
                  className="w-full bg-emerald-500 text-white py-4 rounded-xl font-semibold hover:bg-emerald-600 transition duration-300 flex items-center justify-center"
                >
                  📞 Call Now
                </a>
              </div>

              {/* Inclusions & Exclusions */}
              <div className="mt-6 space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">✅ Includes:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {pkg.inclusions.slice(0, 3).map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">❌ Excludes:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {pkg.exclusions.slice(0, 3).map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// ================== Single Place Page ==================
const SinglePlacePage = () => {
  const { placeId } = useParams();
  
  const allPlaces = {
    "munnar": {
      id: "munnar",
      name: "MUNNAR",
      description: "Arguably the best hill station in South India with tea-clad hill tops and valleys. Munnar is famous for its sprawling tea plantations, picturesque landscapes, and pleasant climate throughout the year.",
      longDescription: "Munnar, situated at the confluence of three mountain streams - Mudrapuzha, Nallathanni, and Kundala, is one of the most popular hill stations in Kerala. Located at 1,600 meters above sea level, this hill station was once the summer resort of the British government in South India. The town offers breathtaking views of rolling hills covered with tea plantations, and the aroma of fresh tea leaves fills the air. The region is also home to the endangered Nilgiri Tahr and offers excellent opportunities for trekking and wildlife spotting.",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      rating: "4.8",
      tours: "12",
      bestTime: "September to May",
      highlights: [
        "Tea Gardens & Plantations",
        "Eravikulam National Park",
        "Mattupetty Dam",
        "Echo Point",
        "Top Station Viewpoint",
        "Tea Museum"
      ],
      packages: [
        { name: "Munnar Deluxe Package", duration: "3D/2N", price: "8,999" },
        { name: "Munnar Family Special", duration: "4D/3N", price: "12,999" },
        { name: "Munnar Honeymoon Package", duration: "5D/4N", price: "15,999" }
      ]
    },
    "alleppey": {
      id: "alleppey",
      name: "ALLEPPEY",
      description: "The rare water world aptly called Venice of the East with beautiful green paddy pastures. Alleppey is famous for its backwaters, houseboats, and serene beaches.",
      longDescription: "Alleppey, also known as Alappuzha, is often called the 'Venice of the East' due to its intricate network of canals, backwaters, and lagoons. This coastal city is famous for its houseboat cruises that take you through the tranquil backwaters, offering a unique perspective of Kerala's rural life. The annual Nehru Trophy Boat Race held here is a major tourist attraction. Alleppey Beach with its 137-year-old pier and Vijaya Beach Park are other notable attractions. The city is also known for its coir industry and traditional Ayurvedic treatments.",
      image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80",
      rating: "4.9",
      tours: "8",
      bestTime: "August to March",
      highlights: [
        "Backwater Houseboat Cruise",
        "Alleppey Beach",
        "Nehru Trophy Boat Race",
        "Krishnapuram Palace",
        "Pathiramanal Island",
        "Coir Industry Tours"
      ],
      packages: [
        { name: "Alleppey Backwater Special", duration: "2D/1N", price: "6,999" },
        { name: "Houseboat Experience", duration: "1D", price: "4,999" },
        { name: "Alleppey Complete Tour", duration: "3D/2N", price: "10,999" }
      ]
    }
  };

  const place = allPlaces[placeId] || allPlaces["munnar"];

  return (
    <div className="pt-20">
      <SEOHead 
        title={`${place.name} Kerala - Complete Travel Guide | Omkar Tour and Travels`}
        description={`Visit ${place.name} - ${place.description}. Book ${place.tours}+ tour packages starting from ₹4,999. Best time to visit: ${place.bestTime}`}
        keywords={`${place.name}, ${place.name} Kerala, ${place.name} tour packages, ${place.name} tourism`}
        canonical={`https://omkartourskerala.com/place/${place.id}`}
      />
      
      {/* Place Header */}
      <section className="relative h-96 bg-gray-900">
        <img
          src={place.image}
          alt={`${place.name} - Kerala Tourism`}
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{place.name}</h1>
            <p className="text-xl max-w-3xl">{place.description}</p>
            <div className="flex flex-wrap items-center gap-4 mt-4">
              <span className="bg-white/20 px-3 py-1 rounded-full">⭐ {place.rating}</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">🚗 {place.tours} tours available</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">📅 Best: {place.bestTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Place Details */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6">About {place.name}</h2>
              <p className="text-gray-700 leading-relaxed mb-6">{place.longDescription}</p>
              
              <h3 className="text-2xl font-bold mb-4">Major Attractions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {place.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></span>
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - Packages */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
              <h3 className="text-xl font-bold mb-6 text-center">Available Tour Packages</h3>
              <div className="space-y-4 mb-6">
                {place.packages.map((pkg, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-emerald-500 transition duration-300">
                    <h4 className="font-semibold text-gray-800">{pkg.name}</h4>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm text-gray-600">{pkg.duration}</span>
                      <span className="text-emerald-600 font-bold">₹{pkg.price}</span>
                    </div>
                    <a
                      href="https://wa.me/919028803309"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-emerald-500 text-white py-2 rounded-lg font-semibold hover:bg-emerald-600 transition duration-300 flex items-center justify-center mt-3 text-sm"
                    >
                      Book Now
                    </a>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <a
                  href="https://wa.me/919028803309"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition duration-300 flex items-center justify-center"
                >
                  💬 Customize Your Trip
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// ================== Enhanced Tour Packages Component ==================
const TourPackageCard = ({ pkg }) => (
  <div className="group bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
    <div className="relative overflow-hidden">
      <img
        src={pkg.image}
        alt={`${pkg.name} - ${pkg.destination} tour package`}
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
        <Link to={`/package/${pkg.id}`}>
          <h3 className="text-2xl font-bold text-gray-800 mb-2 hover:text-emerald-600 transition duration-300">{pkg.name}</h3>
        </Link>
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
          {pkg.highlights.slice(0, 3).map((highlight, i) => (
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

      <div className="flex space-x-3">
        <Link
          to={`/package/${pkg.id}`}
          className="flex-1 bg-emerald-500 text-white py-3 rounded-xl font-semibold hover:bg-emerald-600 transition duration-300 text-center"
        >
          View Details
        </Link>
        <a
          href="https://wa.me/919028803309"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition duration-300 text-center"
        >
          WhatsApp
        </a>
      </div>
    </div>
  </div>
);

const TourPackages = ({ id = "packages" }) => {
  const packages = [
    {
      id: "kerala-bliss-experience",
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
      id: "maharastra-bliss-experience",
      name: "Maharashtra Bliss Experience",
      duration: "06 Nights / 07 Days",
      destination: "Mumbai, Pune, Mahabaleshwar",
      bestSeason: "Sep - Mar",
      price: "30,999",
      discount: "Special 15% Off",
      rating: "4.8",
      reviews: "124",
      image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1200&q=80",
      highlights: [
        "Airport pickup with traditional welcome",
        "Luxury AC vehicle throughout the tour",
        "Premium houseboat cruise in Alleppey",
        "Tea estate stay in Munnar",
        "24/7 Omkar travel support"
      ],
    },
    {
      id: "backwaters-beaches-deluxe",
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
    }
  ];

  return (
    <section id={id} className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <div className="inline-flex items-center px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium mb-4">
          🏆 Omkar Exclusive Packages
        </div>
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          Curated Kerala Experiences
        </h1>
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
        <Link 
          to="/packages" 
          className="inline-flex items-center px-8 py-4 border-2 border-emerald-500 text-emerald-600 rounded-xl font-semibold hover:bg-emerald-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
        >
          View All 15+ Packages
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </Link>
      </div>
    </section>
  );
};

// ================== Popular Places Component ==================
const PlaceCard = ({ place }) => (
  <div className="group relative rounded-2xl overflow-hidden shadow-lg bg-white transform transition duration-300 hover:scale-105">
    <img
      src={place.image}
      alt={`${place.name} - Kerala tourism destination`}
      className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
      <Link to={`/place/${place.id}`}>
        <h3 className="text-2xl font-bold mb-2 hover:text-emerald-300 transition duration-300">{place.name}</h3>
      </Link>
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
      id: "munnar",
      name: "MUNNAR", 
      desc: "Arguably the best hill station in South India with tea-clad hill tops and valleys.", 
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      rating: "4.8",
      tours: "12"
    },
    { 
      id: "alleppey",
      name: "ALLEPPEY", 
      desc: "The rare water world aptly called Venice of the East with beautiful green paddy pastures.", 
      image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80",
      rating: "4.9",
      tours: "8"
    },
    { 
      id: "kovalam",
      name: "KOVALAM", 
      desc: "Experience beach life with friendly tides, sun ups and sun downs - the best beach to unwind.", 
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=1200&q=80",
      rating: "4.7",
      tours: "6"
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

      <div className="text-center mt-12">
        <Link 
          to="/places" 
          className="inline-flex items-center px-8 py-4 border-2 border-emerald-500 text-emerald-600 rounded-xl font-semibold hover:bg-emerald-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
        >
          Explore All Destinations
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </Link>
      </div>
    </section>
  );
};

// ================== All Packages Page ==================
const AllPackagesPage = () => {
  const allPackages = [
    {
      id: "kerala-bliss-experience",
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
        "Tea estate stay in Munnar"
      ],
    },
    // Add more packages as needed
  ];

  return (
    <div className="pt-20">
      <SEOHead 
        title="All Kerala Tour Packages | Omkar Tour and Travels - Best Deals 2025"
        description="Browse all Kerala tour packages from Omkar Tour and Travels. 15+ packages available with best price guarantee. Book your dream Kerala vacation today!"
        keywords="Kerala tour packages, Kerala tourism packages, Kerala travel deals, Kerala vacation packages"
        canonical="https://omkartourskerala.com/packages"
      />
      
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">All Tour Packages</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our complete range of Kerala tour packages curated by travel experts
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {allPackages.map((pkg, index) => (
            <TourPackageCard key={index} pkg={pkg} />
          ))}
        </div>
      </section>
    </div>
  );
};

// ================== All Places Page ==================
const AllPlacesPage = () => {
  const allPlaces = [
    { 
      id: "munnar",
      name: "MUNNAR", 
      desc: "Arguably the best hill station in South India with tea-clad hill tops and valleys.", 
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      rating: "4.8",
      tours: "12"
    },
    // Add more places as needed
  ];

  return (
    <div className="pt-20">
      <SEOHead 
        title="Popular Places to Visit in Kerala | Complete Travel Guide 2025"
        description="Explore the most popular destinations in Kerala - Munnar, Alleppey, Kovalam, Wayanad and more. Complete travel guide with best time to visit, attractions and tour packages."
        keywords="places to visit in Kerala, Kerala destinations, Munnar, Alleppey, Kovalam, Wayanad, Kerala tourism places"
        canonical="https://omkartourskerala.com/places"
      />
      
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">All Popular Destinations</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the most beautiful and popular destinations in God's Own Country
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allPlaces.map((place) => (
            <PlaceCard key={place.name} place={place} />
          ))}
        </div>
      </section>
    </div>
  );
};

// ================== About Us Page ==================
const AboutUsPage = () => {
  return (
    <div className="pt-20">
      <SEOHead 
        title="About Omkar Tour and Travels | Kerala Tourism Experts Since 2010"
        description="Omkar Tour and Travels - Trusted Kerala travel agency since 2010. 5000+ happy customers, best price guarantee, 24/7 support. Learn about our story and expertise."
        keywords="Omkar Tour and Travels about, Kerala travel agency, tour operators Kerala, trusted travel company"
        canonical="https://omkartourskerala.com/about"
      />
      
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">About Omkar Tour and Travels</h1>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Since 2010, Omkar Tour and Travels has been creating unforgettable travel experiences in Kerala. 
              With over 13 years of expertise and 5000+ satisfied customers, we have established ourselves as 
              one of the most trusted travel agencies in God's Own Country.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our deep local knowledge, strong partnerships with premium hotels and service providers, and 
              commitment to personalized service sets us apart. We believe in creating journeys, not just trips - 
              experiences that stay with you for a lifetime.
            </p>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=1200&q=80" 
              alt="Omkar Tour and Travels team" 
              className="rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

// ================== Contact Page ==================
const ContactPage = () => {
  return (
    <div className="pt-20">
      <SEOHead 
        title="Contact Omkar Tour and Travels | Kerala Tour Packages Booking"
        description="Contact Omkar Tour and Travels for Kerala tour packages. Call +91-9028803309, WhatsApp, or email omkartours143@gmail.com. 24/7 customer support available."
        keywords="contact Omkar Tour and Travels, Kerala tour booking, travel agency contact"
        canonical="https://omkartourskerala.com/contact"
      />
      
      <ContactSection />
    </div>
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
          {/* Call Us */}
          <div className="bg-emerald-700 p-6 rounded-2xl">
            <div className="text-2xl mb-4">📞</div>
            <h3 className="text-xl font-bold mb-2">Call Us</h3>
            <p className="text-emerald-100">
              <a href="tel:+919028803309" className="hover:underline">
                 +91-9028803309
              </a>
            </p>
            <p className="text-emerald-100">
              <a href="tel:+919028803309" className="hover:underline">
                 +91-9028803309
              </a>
            </p>
          </div>
          
          {/* WhatsApp */}
          <div className="bg-emerald-700 p-6 rounded-2xl">
            <div className="text-2xl mb-4">💬</div>
            <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
            <p className="text-emerald-100">
              <a
                href="https://wa.me/919028803309"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                +91-9028803309
              </a>
            </p>
            <p className="text-emerald-100">24/7 Available</p>
          </div>
          
          {/* Email */}
          <div className="bg-emerald-700 p-6 rounded-2xl">
            <div className="text-2xl mb-4">✉️</div>
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p className="text-emerald-100">
              <a href="mailto:omkartours143@gmail.com" className="hover:underline">
                omkartours143@gmail.com
              </a>
            </p>
            <p className="text-emerald-100">
              <a href="mailto:omkartours143@gmail.com" className="hover:underline">
                omkartours143@gmail.com
              </a>
            </p>
          </div>
        </div>

        <a
          href="https://wa.me/919028803309"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition duration-300 shadow-lg"
        >
          💬 Get Free Custom Quote on WhatsApp
        </a>
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
            <li><Link to="/packages" className="hover:text-emerald-400 transition duration-200">Tour Packages</Link></li>
            <li><Link to="/places" className="hover:text-emerald-400 transition duration-200">Popular Places</Link></li>
            <li><Link to="/about" className="hover:text-emerald-400 transition duration-200">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-emerald-400 transition duration-200">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <div className="space-y-2 text-gray-300">
            {/* Phone */}
            <p className="flex items-center">
              <span className="mr-2">📱</span>
              <a href="tel:+919028803309" className="hover:underline">
                +91-9028803309 (24/7)
              </a>
            </p>

            {/* WhatsApp */}
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

            {/* Email */}
            <p className="flex items-center">
              <span className="mr-2">✉️</span>
              <a href="mailto:omkartours143@gmail.com" className="hover:underline">
                omkartours143@gmail.com
              </a>
            </p>

            {/* Address */}
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

// ================== Home Page ==================
const HomePage = () => {
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
};

// ================== Main App with Router ==================
export default function KeralaTourismWebsite() {
  return (
    <Router>
      <div className="min-h-screen font-sans text-gray-800 bg-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/packages" element={<AllPackagesPage />} />
          <Route path="/package/:packageId" element={<SinglePackagePage />} />
          <Route path="/places" element={<AllPlacesPage />} />
          <Route path="/place/:placeId" element={<SinglePlacePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}