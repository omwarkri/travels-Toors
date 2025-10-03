import React from "react";
import { Link } from 'react-router-dom';
import PlaceCard from '../places/PlaceCard';

const PopularPlaces = ({ id = "places" }) => {
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

  const popularPlaces = places.slice(0, 6); // Show first 6 places as popular

  return (
    <section id={id} className="max-w-7xl mx-auto  py-8">
      <div className="text-center mb-12">
        <div className="inline-flex items-center px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium mb-4">
          🌟 Top Destinations
        </div>
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Most Popular Places to Visit</h2>
        <p className="text-gray-500 text-lg max-w-3xl mx-auto">
          Kerala is a rare place adorned with beautiful landscapes, hill stations, water bodies and everything a traveler would love to explore.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {popularPlaces.map((place) => (
          <PlaceCard key={place.id} place={place} />
        ))}
      </div>

      <div className="text-center mt-12">
        <Link 
          to="/places" 
          className="inline-flex items-center px-8 py-4 border-2 border-emerald-500 text-emerald-600 rounded-xl font-semibold hover:bg-emerald-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
        >
          Explore All {places.length} Destinations
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </Link>
      </div>

      {/* Destination Categories */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-6 border border-emerald-100">
          <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
            <span className="text-white text-lg">🏔️</span>
          </div>
          <h3 className="font-semibold text-gray-800 mb-2">Hill Stations</h3>
          <p className="text-sm text-gray-600">Munnar, Wayanad</p>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100">
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
            <span className="text-white text-lg">🚤</span>
          </div>
          <h3 className="font-semibold text-gray-800 mb-2">Backwaters</h3>
          <p className="text-sm text-gray-600">Alleppey, Kumarakom</p>
        </div>
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-100">
          <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-3">
            <span className="text-white text-lg">🏖️</span>
          </div>
          <h3 className="font-semibold text-gray-800 mb-2">Beaches</h3>
          <p className="text-sm text-gray-600">Kovalam, Varkala</p>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
          <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
            <span className="text-white text-lg">🕌</span>
          </div>
          <h3 className="font-semibold text-gray-800 mb-2">Culture</h3>
          <p className="text-sm text-gray-600">Kochi, Thrissur</p>
        </div>
      </div>
    </section>
  );
};

export default PopularPlaces;