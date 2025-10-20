import React, { useState } from "react";
import { Link } from 'react-router-dom';

const TourPackageCard = ({ pkg }) => {
  const [showAllHighlights, setShowAllHighlights] = useState(false);
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);
  const hasMoreHighlights = pkg.highlights.length > 3;
  const displayedHighlights = showAllHighlights ? pkg.highlights : pkg.highlights.slice(0, 3);

  // WhatsApp numbers data
  const whatsappNumbers = [
    {
      number: "919028803309",
      name: "Sales Manager",
      description: "For bookings & packages"
    },
    {
      number: "919746699996", 
      name: "Support Team",
      description: "For queries & support"
    }
  ];

  const handleWhatsAppClick = () => {
    setShowWhatsAppModal(true);
  };

  const handleNumberSelect = (phoneNumber) => {
    const message = `Hi, I'm interested in the ${pkg.name} (${pkg.duration}). Please share more details.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setShowWhatsAppModal(false);
  };

  const closeModal = () => {
    setShowWhatsAppModal(false);
  };

  return (
    <>
      <div className="group bg-white shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full flex flex-col">
        {/* Image Section - Fixed Height */}
        <div className="relative overflow-hidden flex-shrink-0">
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

        {/* Content Section - Flexible Height */}
        <div className="p-6 flex flex-col flex-grow">
          {/* Header Section */}
          <div className="mb-4 flex-shrink-0">
            <Link to={`/package/${pkg.id}`}>
              <h3 className="text-xl font-bold text-gray-800  hover:text-emerald-600 transition duration-300 line-clamp-2 min-h-[1.5rem]">
                {pkg.name}
              </h3>
            </Link>
            <div className="flex items-center text-sm text-gray-500 w-full">
              <span className="flex items-center mr-1 md:mr-4 text-[12px] truncate">
                <svg className="w-4 h-4 mr-1 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="truncate">{pkg.destination}</span>
              </span>
              <span className="flex items-center text-[12px] flex-shrink-0">
                <svg className="w-4 h-4 mr-1 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                Best: {pkg.bestSeason}
              </span>
            </div>
          </div>

          {/* Icons Section - Fixed Height */}
          <div className="flex justify-between mb-4 py-3 border-y border-gray-100 flex-shrink-0">
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

          {/* Highlights Section - Flexible Height */}
          <div className="mb-4 flex-grow">
            <h4 className="font-semibold text-gray-700 mb-3 flex items-center text-sm">
              <svg className="w-4 h-4 mr-2 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Tour Highlights
            </h4>
            <ul className="space-y-2">
              {displayedHighlights.map((highlight, i) => (
                <li key={i} className="flex items-start text-sm text-gray-600">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                  <span className="line-clamp-2 leading-tight">{highlight}</span>
                </li>
              ))}
            </ul>
            
            {/* Show More/Less Button */}
            {hasMoreHighlights && (
              <button
                onClick={() => setShowAllHighlights(!showAllHighlights)}
                className="mt-3 text-emerald-600 hover:text-emerald-700 text-sm font-medium flex items-center transition duration-300"
              >
                {showAllHighlights ? (
                  <>
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                    Show Less
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    +{pkg.highlights.length - 3} More Highlights
                  </>
                )}
              </button>
            )}
          </div>

          {/* Price and Rating Section - Fixed Height */}
          <div className="flex items-center justify-between mb-4 flex-shrink-0">
            <div>
              <span className="text-sm text-gray-500">Starting from</span>
              <div className="flex items-baseline">
                <span className="text-2xl font-bold text-gray-800">₹{pkg.price.toLocaleString()}</span>
                <span className="text-sm text-gray-500 ml-1">/person</span>
              </div>
              <div className="flex items-center mt-1">
                <span className="text-xs text-emerald-600 bg-emerald-50 px-2 py-1 rounded mr-2">
                  {pkg.discount}
                </span>
                <span className="text-xs text-gray-500 line-through">
                  ₹{pkg.originalPrice.toLocaleString()}
                </span>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center text-sm text-emerald-600 justify-end">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                {pkg.rating} ({pkg.reviews})
              </div>
            </div>
          </div>

          {/* CTA Buttons - Fixed Height */}
          <div className="flex space-x-3 flex-shrink-0">
            <Link
              to={`/package/${pkg.id}`}
              className="flex-1 bg-emerald-500 text-white py-2 font-semibold hover:bg-emerald-600 transition duration-300 text-center text-sm"
            >
              View Details
            </Link>
            <button
              onClick={handleWhatsAppClick}
              className="flex-1 bg-green-600 text-white py-2 font-semibold hover:bg-green-700 transition duration-300 text-center text-sm"
            >
              WhatsApp
            </button>
          </div>
        </div>
      </div>

      {/* WhatsApp Modal */}
      {showWhatsAppModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full transform transition-all duration-300 scale-100">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-t-2xl text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.18-1.24-6.169-3.495-8.418"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Contact Us on WhatsApp</h3>
                    <p className="text-green-100 text-sm">Choose a number to continue</p>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="text-white hover:text-green-200 transition duration-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <p className="text-gray-600 text-sm mb-6 text-center">
                Select a team member to discuss the{" "}
                <span className="font-semibold text-emerald-600">{pkg.name}</span> package
              </p>

              <div className="space-y-4">
                {whatsappNumbers.map((contact, index) => (
                  <button
                    key={index}
                    onClick={() => handleNumberSelect(contact.number)}
                    className="w-full flex items-center space-x-4 p-4 border border-gray-200 rounded-xl hover:border-green-500 hover:bg-green-50 transition-all duration-200 group"
                  >
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition duration-200">
                      <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    <div className="flex-1 text-left">
                      <h4 className="font-semibold text-gray-800 group-hover:text-green-700">
                        {contact.name}
                      </h4>
                      <p className="text-sm text-gray-600 group-hover:text-green-600">
                        {contact.description}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        +{contact.number.slice(0, 2)} {contact.number.slice(2, 7)} {contact.number.slice(7)}
                      </p>
                    </div>
                    <div className="text-green-600 opacity-0 group-hover:opacity-100 transition duration-200">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </button>
                ))}
              </div>

              {/* Footer */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-500 text-center">
                  We typically respond within 5-10 minutes during business hours
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TourPackageCard;