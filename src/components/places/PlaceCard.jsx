import React from "react";
import { Link } from 'react-router-dom';

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

export default PlaceCard;