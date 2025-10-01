import React from "react";
import { Link } from 'react-router-dom';
import TourPackageCard from '../packages/TourPackageCard';

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

export default TourPackages;