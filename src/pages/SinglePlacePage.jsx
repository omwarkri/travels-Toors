import React from "react";
import { useParams, Link } from 'react-router-dom';

import SEOHead from "../components/common/SEOHead";
import Footer from "../components/common/Footer";

const SinglePlacePage = () => {
  const { placeId } = useParams();
  
  const allPlaces = {
    "munnar": {
      id: "munnar",
      name: "MUNNAR",
      description: "Arguably the best hill station in South India with tea-clad hill tops and valleys. Munnar is famous for its sprawling tea plantations, picturesque landscapes, and pleasant climate throughout the year.",
      longDescription: "Munnar, situated at the confluence of three mountain streams - Mudrapuzha, Nallathanni, and Kundala, is one of the most popular hill stations in Kerala. Located at 1,600 meters above sea level, this hill station was once the summer resort of the British government in South India. The town offers breathtaking views of rolling hills covered with tea plantations, and the aroma of fresh tea leaves fills the air. The region is also home to the endangered Nilgiri Tahr and offers excellent opportunities for trekking and wildlife spotting.",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      rating: "4.8",
      tours: "12",
      bestTime: "September to May",
      climate: "Cool and pleasant throughout the year, with temperatures ranging from 5°C to 25°C",
      attractions: [
        {
          name: "Tea Gardens",
          description: "Visit sprawling tea estates and learn about tea processing"
        },
        {
          name: "Eravikulam National Park",
          description: "Home to the endangered Nilgiri Tahr and Neelakurinji flowers"
        },
        {
          name: "Mattupetty Dam",
          description: "Beautiful dam offering boating and stunning valley views"
        },
        {
          name: "Echo Point",
          description: "Scenic spot where you can hear your voice echo across the valley"
        },
        {
          name: "Top Station",
          description: "Highest point in Munnar offering panoramic views"
        },
        {
          name: "Tea Museum",
          description: "Learn about the history and process of tea making"
        }
      ],
      packages: [
        { name: "Munnar Deluxe Package", duration: "3D/2N", price: "8,999" },
        { name: "Munnar Family Special", duration: "4D/3N", price: "12,999" },
        { name: "Munnar Honeymoon Package", duration: "5D/4N", price: "15,999" }
      ]
    },
    "alleppey": {
      id: "alleppey",
      name: "ALLEPPEY",
      description: "The rare water world aptly called Venice of the East with beautiful green paddy pastures. Alleppey is famous for its backwaters, houseboats, and serene beaches.",
      longDescription: "Alleppey, also known as Alappuzha, is often called the 'Venice of the East' due to its intricate network of canals, backwaters, and lagoons. This coastal city is famous for its houseboat cruises that take you through the tranquil backwaters, offering a unique perspective of Kerala's rural life. The annual Nehru Trophy Boat Race held here is a major tourist attraction. Alleppey Beach with its 137-year-old pier and Vijaya Beach Park are other notable attractions. The city is also known for its coir industry and traditional Ayurvedic treatments.",
      image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80",
      rating: "4.9",
      tours: "8",
      bestTime: "August to March",
      climate: "Tropical climate with moderate temperatures and high humidity",
      attractions: [
        {
          name: "Backwater Houseboat Cruise",
          description: "Stay overnight in traditional houseboats through serene backwaters"
        },
        {
          name: "Alleppey Beach",
          description: "Picturesque beach with a historic pier and lighthouse"
        },
        {
          name: "Nehru Trophy Boat Race",
          description: "Annual snake boat race held every August"
        },
        {
          name: "Krishnapuram Palace",
          description: "18th-century palace with Kerala architecture and mural paintings"
        },
        {
          name: "Pathiramanal Island",
          description: "Bird watcher's paradise in Vembanad Lake"
        },
        {
          name: "Coir Industry Tours",
          description: "Witness traditional coir-making process"
        }
      ],
      packages: [
        { name: "Alleppey Backwater Special", duration: "2D/1N", price: "6,999" },
        { name: "Houseboat Experience", duration: "1D", price: "4,999" },
        { name: "Alleppey Complete Tour", duration: "3D/2N", price: "10,999" }
      ]
    }
  };

  const place = allPlaces[placeId] || allPlaces["munnar"];

  return (
    <div className="pt-20 min-h-screen">
      <SEOHead 
        title={`${place.name} Kerala - Complete Travel Guide | Omkar Tour and Travels`}
        description={`Visit ${place.name} - ${place.description}. Book ${place.tours}+ tour packages starting from ₹4,999. Best time to visit: ${place.bestTime}`}
        keywords={`${place.name}, ${place.name} Kerala, ${place.name} tour packages, ${place.name} tourism`}
      />
      
      {/* Place Header */}
      <section className="relative h-96 bg-gray-900">
        <img
          src={place.image}
          alt={`${place.name} - Kerala Tourism`}
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="max-w-7xl mx-auto">
            <Link 
              to="/places"
              className="inline-flex items-center text-white/80 hover:text-white mb-4 transition duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Destinations
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{place.name}</h1>
            <p className="text-xl max-w-3xl">{place.description}</p>
            <div className="flex flex-wrap items-center gap-4 mt-4">
              <span className="bg-white/20 px-3 py-1 rounded-full">⭐ {place.rating}</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">🚗 {place.tours} tours available</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">📅 Best: {place.bestTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Place Details */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6">About {place.name}</h2>
              <p className="text-gray-700 leading-relaxed mb-6">{place.longDescription}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-emerald-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">🌤️ Best Time to Visit</h3>
                  <p className="text-gray-700">{place.bestTime}</p>
                </div>
                <div className="bg-emerald-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">🌡️ Climate</h3>
                  <p className="text-gray-700">{place.climate}</p>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">Major Attractions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {place.attractions.map((attraction, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition duration-300">
                    <h4 className="text-xl font-semibold mb-3 text-emerald-700">{attraction.name}</h4>
                    <p className="text-gray-600">{attraction.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - Packages */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
              <h3 className="text-xl font-bold mb-6 text-center">Available Tour Packages</h3>
              <div className="space-y-4 mb-6">
                {place.packages.map((pkg, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-emerald-500 transition duration-300">
                    <h4 className="font-semibold text-gray-800">{pkg.name}</h4>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm text-gray-600">{pkg.duration}</span>
                      <span className="text-emerald-600 font-bold">₹{pkg.price}</span>
                    </div>
                    <a
                      href="https://wa.me/919028803309"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-emerald-500 text-white py-2 rounded-lg font-semibold hover:bg-emerald-600 transition duration-300 flex items-center justify-center mt-3 text-sm"
                    >
                      Book Now
                    </a>
                  </div>
                ))}
              </div>

              <div className="text-center space-y-3">
                <a
                  href="https://wa.me/919028803309"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition duration-300 flex items-center justify-center"
                >
                  💬 Customize Your Trip
                </a>
                <a
                  href="tel:+919028803309"
                  className="w-full bg-emerald-500 text-white py-3 rounded-xl font-semibold hover:bg-emerald-600 transition duration-300 flex items-center justify-center"
                >
                  📞 Call for Details
                </a>
              </div>

              {/* Quick Facts */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                  Expert Local Guides
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                  Best Price Guarantee
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                  24/7 Customer Support
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SinglePlacePage;