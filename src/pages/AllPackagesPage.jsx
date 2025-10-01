import React from "react";
import { Link } from 'react-router-dom';
import SEOHead from "../components/common/SEOHead";
import Footer from "../components/common/Footer";
import TourPackageCard from "../components/packages/TourPackageCard";

const AllPackagesPage = () => {
  const allPackages = [
    {
      id: "Alleppey Beach",
      name: "Alleppey Beach",
      duration: "05 Nights / 06 Days",
      destination: "Alleppey, Kovalam, Thiruvananthapuram",
      bestSeason: "Sep - Mar",
      price: "22,999",
      originalPrice: "27,999",
      discount: "Special 18% Off",
      rating: "4.7",
      reviews: "89",
      image: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759330510/Allappy_4_ruiygh.jpg",
      highlights: [
        "Alleppey houseboat cruise through palm-lined waterways",
        "Kovalam beach relaxation and water sports",
        "Visit historic Alleppey Beach with 137-year-old pier",
        "Traditional Kerala street food experience"
      ],
    },
    {
      id: "Backwaters",
      name: "Backwaters",
      duration: "06 Nights / 07 Days",
      destination: "Munnar, Thekkady, Periyar",
      bestSeason: "Oct - May",
      price: "28,500",
      originalPrice: "33,500",
      discount: "Special 15% Off",
      rating: "4.9",
      reviews: "67",
      image: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759330510/Allappy_4_ruiygh.jpg",
      highlights: [
        "Munnar tea estate exploration and factory visit",
        "Periyar Lake wildlife boat cruise",
        "Kannan Devan Hills tea plantation walk",
        "Bamboo rafting in Periyar"
      ],
    },
    {
      id: "Tea estate",
      name: "Tea estate",
      duration: "04 Nights / 05 Days",
      destination: "Guruvayur, Ambalapuzha, Alappuzha",
      bestSeason: "Year Round",
      price: "18,999",
      originalPrice: "22,499",
      discount: "Special 16% Off",
      rating: "4.6",
      reviews: "45",
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
      highlights: [
        "Guruvayur Temple darshan and rituals",
        "Ambalapuzha Temple Palpayasam offering",
        "Nehru Trophy Boat Race venue visit",
        "Traditional Kerala architecture"
      ],
    },
    {
      id: "kerala-premium-honeymoon",
      name: "Kerala Premium Honeymoon",
      duration: "07 Nights / 08 Days",
      destination: "Munnar, Thekkady, Alleppey, Kovalam",
      bestSeason: "Aug - May",
      price: "42,999",
      originalPrice: "49,999",
      discount: "Honeymoon Special",
      rating: "4.9",
      reviews: "156",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=1200&q=80",
      highlights: [
        "Luxury houseboat with private chef",
        "Romantic candlelight dinners",
        "Couple spa treatments",
        "Premium resort stays with private pools"
      ],
    },
    {
      id: "kerala-family-adventure",
      name: "Kerala Family Adventure",
      duration: "06 Nights / 07 Days",
      destination: "Cochin, Munnar, Thekkady, Alleppey",
      bestSeason: "Oct - Apr",
      price: "35,999",
      originalPrice: "41,999",
      discount: "Family Package",
      rating: "4.8",
      reviews: "112",
      image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80",
      highlights: [
        "Kid-friendly activities and guides",
        "Spice plantation interactive tour",
        "Vijaya Beach Park family fun",
        "Wildlife spotting in Periyar"
      ],
    },
    {
      id: "kerala-wildlife-explorer",
      name: "Kerala Wildlife Explorer",
      duration: "05 Nights / 06 Days",
      destination: "Thekkady, Munnar, Wayanad",
      bestSeason: "Oct - Jun",
      price: "26,500",
      originalPrice: "31,500",
      discount: "Adventure Special",
      rating: "4.7",
      reviews: "78",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1200&q=80",
      highlights: [
        "Jungle safari in Periyar National Park",
        "Elephant and deer spotting",
        "Bamboo rafting experience",
        "Birdwatching in backwaters"
      ],
    },
    {
      id: "kerala-luxury-retreat",
      name: "Kerala Luxury Retreat",
      duration: "08 Nights / 09 Days",
      destination: "Kochi, Munnar, Thekkady, Alleppey, Kovalam",
      bestSeason: "Sep - Apr",
      price: "67,999",
      originalPrice: "79,999",
      discount: "Luxury Exclusive",
      rating: "4.9",
      reviews: "89",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      highlights: [
        "5-star luxury resorts and palaces",
        "Private guided tours",
        "Gourmet dining experiences",
        "Personalized butler service"
      ],
    },
    {
      id: "kerala-quick-getaway",
      name: "Kerala Quick Getaway",
      duration: "03 Nights / 04 Days",
      destination: "Alleppey, Kochi",
      bestSeason: "Year Round",
      price: "14,999",
      originalPrice: "17,999",
      discount: "Weekend Special",
      rating: "4.5",
      reviews: "203",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      highlights: [
        "Short backwater houseboat cruise",
        "Kochi city heritage tour",
        "Beach relaxation",
        "Local cuisine tasting"
      ],
    },
    {
      id: "kerala-pilgrimage-tour",
      name: "Kerala Pilgrimage Tour",
      duration: "05 Nights / 06 Days",
      destination: "Guruvayur, Ambalapuzha, Thiruvananthapuram",
      bestSeason: "Year Round",
      price: "20,500",
      originalPrice: "24,500",
      discount: "Spiritual Special",
      rating: "4.6",
      reviews: "134",
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
      highlights: [
        "Padmanabhaswamy Temple visit",
        "Guruvayur Temple special darshan",
        "Ambalapuzha Temple rituals",
        "Spiritual guide assistance"
      ],
    }
  ];

  return (
    <div className="pt-20 min-h-screen">
      <SEOHead 
        title="All Kerala Tour Packages | Omkar Tour and Travels - Best Deals 2025"
        description="Browse all Kerala tour packages from Omkar Tour and Travels. Backwaters, beaches, tea plantations, wildlife & cultural tours. Best price guarantee. Book your dream Kerala vacation today!"
        keywords="Kerala tour packages, Kerala backwaters, Alleppey houseboat, Munnar tea estates, Kerala beaches, wildlife tours, cultural packages, honeymoon packages Kerala"
      />
      
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Kerala Tour Packages</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the magic of God's Own Country with our carefully curated Kerala tour packages. 
            From serene backwaters to misty tea plantations, experience the best of Kerala with 13+ years of expertise.
          </p>
        </div>

        {/* Package Filters */}
        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          <button className="px-6 py-3 bg-emerald-500 text-white rounded-full font-medium hover:bg-emerald-600 transition duration-300 shadow-md">
            All Packages
          </button>
          <button className="px-6 py-3 bg-gray-200 text-gray-700 rounded-full font-medium hover:bg-gray-300 transition duration-300">
            Backwaters
          </button>
          <button className="px-6 py-3 bg-gray-200 text-gray-700 rounded-full font-medium hover:bg-gray-300 transition duration-300">
            Tea Estates
          </button>
          <button className="px-6 py-3 bg-gray-200 text-gray-700 rounded-full font-medium hover:bg-gray-300 transition duration-300">
            Beaches
          </button>
          <button className="px-6 py-3 bg-gray-200 text-gray-700 rounded-full font-medium hover:bg-gray-300 transition duration-300">
            Wildlife
          </button>
          <button className="px-6 py-3 bg-gray-200 text-gray-700 rounded-full font-medium hover:bg-gray-300 transition duration-300">
            Cultural
          </button>
          <button className="px-6 py-3 bg-gray-200 text-gray-700 rounded-full font-medium hover:bg-gray-300 transition duration-300">
            Honeymoon
          </button>
          <button className="px-6 py-3 bg-gray-200 text-gray-700 rounded-full font-medium hover:bg-gray-300 transition duration-300">
            Family
          </button>
        </div>

        {/* Package Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {allPackages.map((pkg, index) => (
            <TourPackageCard key={index} pkg={pkg} />
          ))}
        </div>

        {/* Package Categories Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-emerald-100">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🚤</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Backwaters</h3>
            <p className="text-gray-600 text-sm">Serene houseboat cruises through palm-fringed canals</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-emerald-100">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌿</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Tea Plantations</h3>
            <p className="text-gray-600 text-sm">Misty hills and tea estate experiences in Munnar</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-emerald-100">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🏖️</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Beaches</h3>
            <p className="text-gray-600 text-sm">Golden sands and water sports at Kovalam & Alleppey</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-emerald-100">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🕌</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Culture</h3>
            <p className="text-gray-600 text-sm">Ancient temples and traditional experiences</p>
          </div>
        </div>

        {/* Custom Package CTA */}
        <div className="bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl p-8 text-center text-white shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Can't Find Your Perfect Package?</h2>
          <p className="text-emerald-100 mb-6 max-w-2xl mx-auto text-lg">
            We specialize in creating customized Kerala tours that match your preferences, budget, and schedule. 
            Let us design your dream vacation in God's Own Country.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919028803309"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold hover:bg-emerald-50 transition duration-300 shadow-lg"
            >
              💬 Get Custom Quote on WhatsApp
            </a>
            <a
              href="tel:+919028803309"
              className="inline-flex items-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-emerald-600 transition duration-300"
            >
              📞 Call for Customization
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AllPackagesPage;



