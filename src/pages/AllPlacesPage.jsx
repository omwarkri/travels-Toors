// src/pages/AllPlacesPage.js
import React from "react";
import { Link } from 'react-router-dom';
import SEOHead from "../components/common/SEOHead";
import Footer from "../components/common/Footer";
import PlaceCard from '../components/places/PlaceCard';

const AllPlacesPage = () => {
   const places = [
    { 
      id: "munnar",
      name: "MUNNAR", 
      desc: "Arguably the best hill station in South India with tea-clad hill tops and valleys.", 
      image: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759476405/tea_3_shjd5a.jpg",
      rating: "4.8",
      tours: "12",
      highlights: ["Tea Plantations", "Eravikulam National Park", "Mattupetty Dam", "Tea Museum"],
      bestSeason: "September to May",
      packages: ["Munnar Tea Plantations Tour", "Complete Kerala Experience", "Kerala Honeymoon Special"]
    },
    { 
      id: "alleppey",
      name: "ALLEPPEY", 
      desc: "The rare water world aptly called Venice of the East with beautiful green paddy pastures.", 
      image: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759330510/Allappy_4_ruiygh.jpg",
      rating: "4.9",
      tours: "8",
      highlights: ["Houseboat Cruise", "Backwaters", "Alleppey Beach", "Vembanad Lake"],
      bestSeason: "August to March",
      packages: ["Kerala Backwaters & Beaches", "Complete Kerala Experience", "Kerala Honeymoon Special"]
    },
    { 
      id: "kovalam",
      name: "KOVALAM", 
      desc: "Experience beach life with friendly tides, sun ups and sun downs - the best beach to unwind.", 
      image: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488360/kovalam-1_trhrck.jpg",
      rating: "4.7",
      tours: "6",
      highlights: ["Lighthouse Beach", "Hawa Beach", "Water Sports", "Ayurvedic Massage"],
      bestSeason: "September to March",
      packages: ["Kerala Backwaters & Beaches", "Complete Kerala Experience", "Kerala Honeymoon Special"]
    },
    { 
      id: "thekkady",
      name: "THEKKADY", 
      desc: "Home to Periyar Wildlife Sanctuary, offering thrilling jungle experiences and spice plantations.", 
      image: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759487813/periyar_lake_1_flz8vu.jpg ",
      rating: "4.6",
      tours: "9",
      highlights: ["Periyar Wildlife Sanctuary", "Spice Plantations", "Bamboo Rafting", "Elephant Ride"],
      bestSeason: "November to April",
      packages: ["Kerala Wildlife Adventure", "Complete Kerala Experience", "Munnar Tea Plantations Tour"]
    },
    { 
      id: "kochi",
      name: "KOCHI", 
      desc: "The commercial capital of Kerala blending Portuguese, Dutch, and British colonial influences.", 
      image: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759490476/premium_photo-1697729597066-7b3d09b6dab7_oxwkpb.jpg",
      rating: "4.5",
      tours: "7",
      highlights: ["Fort Kochi", "Chinese Fishing Nets", "Jewish Synagogue", "Kathakali Dance"],
      bestSeason: "Year Round",
      packages: ["Kerala Cultural Heritage", "Complete Kerala Experience"]
    },
    { 
      id: "wayanad",
      name: "WAYANAD", 
      desc: "Lush green paradise with mist-clad mountains, waterfalls, and rich tribal heritage.", 
      image: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759490597/Blue__Green___White_pqixgb.jpg",
      rating: "4.7",
      tours: "5",
      highlights: ["Edakkal Caves", "Banasura Sagar Dam", "Chembra Peak", "Wildlife Sanctuary"],
      bestSeason: "October to May",
      packages: ["Kerala Wildlife Adventure", "Nature & Adventure Tour"]
    },
    { 
      id: "kumarakom",
      name: "KUMARAKOM", 
      desc: "A picturesque backwater destination with luxurious resorts and serene Vembanad Lake views.", 
      image: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759490668/Kumarkom_f7plnd.jpg",
      rating: "4.8",
      tours: "4",
      highlights: ["Vembanad Lake", "Bird Sanctuary", "Luxury Resorts", "Houseboat Stays"],
      bestSeason: "September to March",
      packages: ["Kerala Backwaters & Beaches", "Luxury Kerala Experience"]
    },
    { 
      id: "varkala",
      name: "VARKALA", 
      desc: "Cliff-side beach destination with mineral springs and stunning views of the Arabian Sea.", 
      image: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759490719/Varkala_Beach__Varkala__Kerala_vuiq2z.jpg",
      rating: "4.6",
      tours: "3",
      highlights: ["Varkala Beach", "Janardanaswamy Temple", "Mineral Springs", "Cliff Views"],
      bestSeason: "August to March",
      packages: ["Beach & Backwaters Tour", "Spiritual Kerala Tour"]
    },
    { 
      id: "thrissur",
      name: "THRISSUR", 
      desc: "Cultural capital of Kerala known for Thrissur Pooram festival and ancient temples.", 
      image: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759490719/Varkala_Beach__Varkala__Kerala_vuiq2z.jpg",
      rating: "4.4",
      tours: "4",
      highlights: ["Vadakkunnathan Temple", "Thrissur Pooram", "Archaeological Museum", "Athirapally Falls"],
      bestSeason: "Year Round",
      packages: ["Kerala Cultural Heritage", "Temple Tour Kerala"]
    }
  ];

  // Categorize places
  const hillStations = places.filter(place => 
    ["munnar", "wayanad"].includes(place.id)
  );
  
  const backwaters = places.filter(place => 
    ["alleppey", "kumarakom"].includes(place.id)
  );
  
  const beaches = places.filter(place => 
    ["kovalam", "varkala"].includes(place.id)
  );
  
  const cultural = places.filter(place => 
    ["kochi", "thrissur", "thekkady"].includes(place.id)
  );

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <SEOHead 
        title="All Kerala Destinations | Complete Travel Guide - Omkar Tour and Travels"
        description="Explore all amazing destinations in Kerala. Hill stations, backwaters, beaches, wildlife sanctuaries, and cultural sites. Plan your perfect Kerala itinerary."
        keywords="Kerala destinations, Munnar, Alleppey, Kovalam, Thekkady, Kochi, Wayanad, Kumarakom, Varkala, Thrissur"
      />
      
      <section className="max-w-7xl mx-auto px-6 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium mb-4">
            🗺️ {places.length} Amazing Destinations
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Explore Kerala's Destinations</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the diverse beauty of God's Own Country. From misty hill stations to serene backwaters, 
            golden beaches to rich cultural heritage - Kerala has something for every traveler.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-emerald-600">{places.length}</div>
              <div className="text-gray-600">Destinations</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-600">
                {Math.max(...places.map(p => p.rating))}
              </div>
              <div className="text-gray-600">Highest Rated</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-600">
                {places.reduce((acc, place) => acc + parseInt(place.tours), 0)}
              </div>
              <div className="text-gray-600">Tour Packages</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-600">9</div>
              <div className="text-gray-600">Districts Covered</div>
            </div>
          </div>
        </div>

        {/* All Places Grid */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-800">All Destinations</h2>
            <div className="text-gray-600">
              Showing {places.length} places
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {places.map((place) => (
              <Link 
                key={place.id} 
                to={`/places/${place.id}`}
                className="block transition-transform duration-300 hover:scale-105"
              >
                <PlaceCard place={place} />
              </Link>
            ))}
          </div>
        </div>

        {/* Categories Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Explore by Category</h2>
          
          {/* Hill Stations */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm">🏔️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Hill Stations</h3>
              <span className="ml-3 bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
                {hillStations.length} destinations
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {hillStations.map((place) => (
                <Link 
                  key={place.id} 
                  to={`/places/${place.id}`}
                  className="block transition-transform duration-300 hover:scale-105"
                >
                  <PlaceCard place={place} />
                </Link>
              ))}
            </div>
          </div>

          {/* Backwaters */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm">🚤</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Backwaters</h3>
              <span className="ml-3 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                {backwaters.length} destinations
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {backwaters.map((place) => (
                <Link 
                  key={place.id} 
                  to={`/places/${place.id}`}
                  className="block transition-transform duration-300 hover:scale-105"
                >
                  <PlaceCard place={place} />
                </Link>
              ))}
            </div>
          </div>

          {/* Beaches */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm">🏖️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Beaches</h3>
              <span className="ml-3 bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-medium">
                {beaches.length} destinations
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {beaches.map((place) => (
                <Link 
                  key={place.id} 
                  to={`/places/${place.id}`}
                  className="block transition-transform duration-300 hover:scale-105"
                >
                  <PlaceCard place={place} />
                </Link>
              ))}
            </div>
          </div>

          {/* Cultural & Wildlife */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm">🕌</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Cultural & Wildlife</h3>
              <span className="ml-3 bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                {cultural.length} destinations
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cultural.map((place) => (
                <Link 
                  key={place.id} 
                  to={`/places/${place.id}`}
                  className="block transition-transform duration-300 hover:scale-105"
                >
                  <PlaceCard place={place} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Planning Assistance */}
        <div className="bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl p-8 text-center text-white shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Need Help Planning?</h2>
          <p className="text-emerald-100 mb-6 max-w-2xl mx-auto text-lg">
            Our travel experts can help you create the perfect Kerala itinerary based on your preferences, 
            budget, and travel dates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919028803309"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold hover:bg-emerald-50 transition duration-300 shadow-lg"
            >
              💬 Get Free Consultation
            </a>
            <a
              href="tel:+919028803309"
              className="inline-flex items-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-emerald-600 transition duration-300"
            >
              📞 Call for Itinerary
            </a>
          </div>
        </div>

        {/* Back to Packages */}
        <div className="text-center mt-12">
          <Link 
            to="/packages" 
            className="inline-flex items-center px-8 py-4 border-2 border-emerald-500 text-emerald-600 rounded-xl font-semibold hover:bg-emerald-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
          >
            Explore Tour Packages
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AllPlacesPage;