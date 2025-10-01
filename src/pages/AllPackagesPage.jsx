import React from "react";
import { Link } from 'react-router-dom';
import SEOHead from "../components/common/SEOHead";
import Footer from "../components/common/Footer";
import TourPackageCard from "../components/packages/TourPackageCard";


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
        "City tour of Mumbai and Pune",
        "Hill station experience"
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
        "Traditional cultural performances"
      ],
    },
    {
      id: "cultural-heritage-trail",
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
        "Temple visits and cultural insights"
      ],
    },
    {
      id: "honeymoon-special",
      name: "Romantic Kerala Honeymoon",
      duration: "08 Nights / 09 Days",
      destination: "Munnar, Thekkady, Alleppey, Kovalam",
      bestSeason: "Aug - May",
      price: "45,999",
      discount: "Honeymoon Special",
      rating: "4.9",
      reviews: "203",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=1200&q=80",
      highlights: [
        "Romantic candlelight dinners",
        "Private houseboat cruise",
        "Luxury resort stays",
        "Couple spa treatments"
      ],
    },
    {
      id: "wildlife-adventure",
      name: "Wildlife & Adventure Tour",
      duration: "05 Nights / 06 Days",
      destination: "Thekkady, Munnar, Wayanad",
      bestSeason: "Oct - Jun",
      price: "22,999",
      discount: "Adventure Special",
      rating: "4.6",
      reviews: "78",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1200&q=80",
      highlights: [
        "Jungle safari in Periyar",
        "Bamboo rafting experience",
        "Trekking in Western Ghats",
        "Wildlife photography opportunities"
      ],
    }
  ];

  return (
    <div className="pt-20 min-h-screen">
      <SEOHead 
        title="All Kerala Tour Packages | Omkar Tour and Travels - Best Deals 2025"
        description="Browse all Kerala tour packages from Omkar Tour and Travels. 15+ packages available with best price guarantee. Book your dream Kerala vacation today!"
        keywords="Kerala tour packages, Kerala tourism packages, Kerala travel deals, Kerala vacation packages"
      />
      
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">All Tour Packages</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our complete range of Kerala tour packages curated by travel experts with 13+ years of experience
          </p>
        </div>

        {/* Package Filters */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          <button className="px-6 py-2 bg-emerald-500 text-white rounded-full font-medium hover:bg-emerald-600 transition duration-300">
            All Packages
          </button>
          <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-full font-medium hover:bg-gray-300 transition duration-300">
            Honeymoon
          </button>
          <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-full font-medium hover:bg-gray-300 transition duration-300">
            Family
          </button>
          <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-full font-medium hover:bg-gray-300 transition duration-300">
            Adventure
          </button>
          <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-full font-medium hover:bg-gray-300 transition duration-300">
            Luxury
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {allPackages.map((pkg, index) => (
            <TourPackageCard key={index} pkg={pkg} />
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-emerald-50 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We specialize in customizing tours to match your preferences, budget, and schedule. 
            Contact us to create your perfect Kerala experience.
          </p>
          <a
            href="https://wa.me/919028803309"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-emerald-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-emerald-600 transition duration-300 shadow-lg"
          >
            💬 Get Custom Quote on WhatsApp
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AllPackagesPage;