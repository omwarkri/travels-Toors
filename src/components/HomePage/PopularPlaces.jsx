import React from "react";
import { Link } from 'react-router-dom';
import PlaceCard from '../places/PlaceCard';

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

export default PopularPlaces;