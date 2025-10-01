import React from "react";
import { Link } from 'react-router-dom';
import PlaceCard from "../components/places/PlaceCard";
import SEOHead from "../components/common/SEOHead";
import Footer from "../components/common/Footer";

const AllPlacesPage = () => {
  const allPlaces = [
    { 
      id: "munnar",
      name: "MUNNAR", 
      desc: "Arguably the best hill station in South India with tea-clad hill tops and valleys.", 
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      rating: "4.8",
      tours: "12",
      bestTime: "Sep - May"
    },
    { 
      id: "alleppey",
      name: "ALLEPPEY", 
      desc: "The rare water world aptly called Venice of the East with beautiful green paddy pastures.", 
      image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80",
      rating: "4.9",
      tours: "8",
      bestTime: "Aug - Mar"
    },
    { 
      id: "kovalam",
      name: "KOVALAM", 
      desc: "Experience beach life with friendly tides, sun ups and sun downs - the best beach to unwind.", 
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=1200&q=80",
      rating: "4.7",
      tours: "6",
      bestTime: "Sep - May"
    },
    { 
      id: "wayanad",
      name: "WAYANAD", 
      desc: "Exceptional hill station famous for aborigine populace, exotic hills and evergreen forests.", 
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      rating: "4.8",
      tours: "10",
      bestTime: "Oct - May"
    },
    { 
      id: "kochi",
      name: "KOCHI", 
      desc: "Urban Kerala with malls and busy city life blending with traditional Kerala culture.", 
      image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1200&q=80",
      rating: "4.6",
      tours: "15",
      bestTime: "Oct - Mar"
    },
    { 
      id: "athirappally",
      name: "ATHIRAPALLY", 
      desc: "Breathtaking waterfall with exotic flora and fauna - a truly grand and beautiful spot.", 
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1200&q=80",
      rating: "4.9",
      tours: "5",
      bestTime: "Jun - Jan"
    },
    { 
      id: "thekkady",
      name: "THEKKADY", 
      desc: "Famous for Periyar Wildlife Sanctuary - ideal for nature lovers and wildlife enthusiasts.", 
      image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80",
      rating: "4.7",
      tours: "7",
      bestTime: "Sep - Apr"
    },
    { 
      id: "kumarakom",
      name: "KUMARAKOM", 
      desc: "Serene backwater destination with luxurious resorts and houseboat experiences.", 
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80",
      rating: "4.8",
      tours: "9",
      bestTime: "Sep - Mar"
    },
    { 
      id: "varkala",
      name: "VARKALA", 
      desc: "Cliff beach with mineral springs and stunning views of the Arabian Sea.", 
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
      rating: "4.6",
      tours: "4",
      bestTime: "Sep - May"
    }
  ];

  return (
    <div className="pt-20 min-h-screen">
      <SEOHead 
        title="Popular Places to Visit in Kerala | Complete Travel Guide 2025"
        description="Explore the most popular destinations in Kerala - Munnar, Alleppey, Kovalam, Wayanad and more. Complete travel guide with best time to visit, attractions and tour packages."
        keywords="places to visit in Kerala, Kerala destinations, Munnar, Alleppey, Kovalam, Wayanad, Kerala tourism places"
      />
      
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">All Popular Destinations</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the most beautiful and popular destinations in God's Own Country - from serene backwaters to lush hill stations
          </p>
        </div>

        {/* Destination Categories */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          <button className="px-6 py-2 bg-emerald-500 text-white rounded-full font-medium hover:bg-emerald-600 transition duration-300">
            All Places
          </button>
          <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-full font-medium hover:bg-gray-300 transition duration-300">
            Hill Stations
          </button>
          <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-full font-medium hover:bg-gray-300 transition duration-300">
            Backwaters
          </button>
          <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-full font-medium hover:bg-gray-300 transition duration-300">
            Beaches
          </button>
          <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-full font-medium hover:bg-gray-300 transition duration-300">
            Wildlife
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allPlaces.map((place) => (
            <PlaceCard key={place.id} place={place} />
          ))}
        </div>

        {/* Travel Tips */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-center mb-8">Kerala Travel Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl mb-2">🌦️</div>
              <h4 className="font-semibold mb-2">Best Time to Visit</h4>
              <p className="text-sm text-gray-600">September to March for pleasant weather</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">👕</div>
              <h4 className="font-semibold mb-2">What to Wear</h4>
              <p className="text-sm text-gray-600">Light cotton clothes, comfortable footwear</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🍛</div>
              <h4 className="font-semibold mb-2">Local Cuisine</h4>
              <p className="text-sm text-gray-600">Try authentic Kerala sadhya and seafood</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🚗</div>
              <h4 className="font-semibold mb-2">Transport</h4>
              <p className="text-sm text-gray-600">Well-connected by road, rail, and air</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AllPlacesPage;