import React, { useState } from "react";
import { Link } from 'react-router-dom';

const PlaceCard = ({ place }) => {
  const [showInfo, setShowInfo] = useState(false);

  const handleCardClick = (e) => {
    e.preventDefault();
    setShowInfo(!showInfo);
  };

  const handleCloseInfo = (e) => {
    e.stopPropagation();
    setShowInfo(false);
  };

  return (
    <div className="block group">
      <div 
        className="relative rounded-2xl overflow-hidden shadow-lg bg-white transform transition duration-300 hover:scale-105 p-2 cursor-pointer"
        onClick={handleCardClick}
      >
        <img
          src={place.image}
          alt={`${place.name} - Kerala tourism destination`}
          className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
        />
        
        {/* Minimal overlay showing only name at start */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-2xl font-bold mb-2 group-hover:text-emerald-300 transition duration-300">
            {place.name}
          </h3>
          {/* Description, rating, and tours count are hidden initially */}
        </div>
        
        {/* Info Overlay - Shows full details when clicked */}
        {showInfo && (
          <div className="absolute inset-0 bg-black/90 backdrop-blur-sm p-6 text-white overflow-y-auto">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-emerald-300">{place.name}</h3>
              <button 
                onClick={handleCloseInfo}
                className="text-white hover:text-emerald-300 text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition duration-300"
              >
                ×
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold mb-2">About</h4>
                <p className="text-gray-200 leading-relaxed">{place.desc}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-lg p-3">
                  <p className="text-sm text-gray-300">Rating</p>
                  <p className="text-emerald-300 font-semibold">⭐ {place.rating}/5</p>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <p className="text-sm text-gray-300">Tours Available</p>
                  <p className="text-emerald-300 font-semibold">{place.tours}+ tours</p>
                </div>
              </div>
              
              {place.highlights && (
                <div>
                  <h4 className="text-lg font-semibold mb-2">Highlights</h4>
                  <ul className="list-disc list-inside text-gray-200 space-y-1">
                    {place.highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {place.bestTime && (
                <div>
                  <h4 className="text-lg font-semibold mb-2">Best Time to Visit</h4>
                  <p className="text-gray-200">{place.bestTime}</p>
                </div>
              )}
              
              {place.distance && (
                <div>
                  <h4 className="text-lg font-semibold mb-2">Distance from Kochi</h4>
                  <p className="text-gray-200">{place.distance}</p>
                </div>
              )}
            </div>
            
            <div className="mt-6 flex space-x-4">
              <Link 
                to={`/place/${place.id}`}
                onClick={handleCloseInfo}
                className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white text-center py-3 px-4 rounded-lg font-semibold transition duration-300"
              >
                View Details
              </Link>
              <Link 
                to={`/packages?destination=${place.name}`}
                onClick={handleCloseInfo}
                className="flex-1 border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white text-center py-3 px-4 rounded-lg font-semibold transition duration-300"
              >
                View Tours
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlaceCard;