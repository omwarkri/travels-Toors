import React from "react";
import { useParams } from 'react-router-dom';
import SEOHead from '../common/SEOHead';

const SinglePackagePage = () => {
  const { packageId } = useParams();
  
  const allPackages = {
    "kerala-bliss-experience": {
      id: "kerala-bliss-experience",
      name: "Kerala Bliss Experience",
      duration: "06 Nights / 07 Days",
      destination: "Kochi, Munnar, Alleppey",
      bestSeason: "Sep - Mar",
      price: "24,999",
      originalPrice: "29,999",
      discount: "Special 15% Off",
      rating: "4.8",
      reviews: "124",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      highlights: [
        "Airport pickup with traditional welcome",
        "Luxury AC vehicle throughout the tour",
        "Premium houseboat cruise in Alleppey",
        "Tea estate stay in Munnar",
        "24/7 Omkar travel support",
        "Traditional Kathakali dance performance",
        "Spice plantation visit"
      ],
      itinerary: [
        {
          day: "Day 1",
          title: "Arrival in Kochi",
          description: "Arrive at Cochin International Airport, traditional welcome and transfer to hotel. Evening visit to Fort Kochi and Chinese fishing nets."
        },
        {
          day: "Day 2",
          title: "Kochi to Munnar",
          description: "Scenic drive to Munnar through tea plantations. Visit tea museum and enjoy panoramic views of Western Ghats."
        },
        {
          day: "Day 3",
          title: "Munnar Exploration",
          description: "Full day exploring Munnar - Echo Point, Mattupetty Dam, and tea gardens. Evening at leisure."
        }
      ],
      inclusions: [
        "Accommodation in 3-star hotels",
        "Daily breakfast and dinner",
        "AC vehicle for all transfers & sightseeing",
        "Alleppey houseboat cruise with meals",
        "All toll taxes, parking & driver allowances",
        "Tour guide services"
      ],
      exclusions: [
        "Flight tickets",
        "Lunch except on houseboat",
        "Personal expenses",
        "Travel insurance",
        "Anything not mentioned in inclusions"
      ]
    },
    "maharastra-bliss-experience": {
      id: "maharastra-bliss-experience",
      name: "Maharashtra Bliss Experience",
      duration: "06 Nights / 07 Days",
      destination: "Mumbai, Pune, Mahabaleshwar",
      bestSeason: "Oct - Feb",
      price: "30,999",
      originalPrice: "36,499",
      discount: "Special 15% Off",
      rating: "4.8",
      reviews: "124",
      image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1200&q=80",
      highlights: [
        "City tour of Mumbai including Gateway of India",
        "Hill station experience in Mahabaleshwar",
        "Wine tasting in Nashik vineyards",
        "Historical sites in Pune",
        "24/7 Omkar travel support"
      ],
      itinerary: [
        {
          day: "Day 1",
          title: "Arrival in Mumbai",
          description: "Arrive at Mumbai airport, transfer to hotel. Evening visit to Marine Drive and Juhu Beach."
        },
        {
          day: "Day 2",
          title: "Mumbai City Tour",
          description: "Full day exploring Mumbai - Gateway of India, Elephanta Caves, and shopping at Colaba Causeway."
        }
      ],
      inclusions: [
        "Accommodation in 3-star hotels",
        "Daily breakfast",
        "AC vehicle for all transfers & sightseeing",
        "All sightseeing as per itinerary",
        "All toll taxes, parking & driver allowances"
      ],
      exclusions: [
        "Flight tickets",
        "Lunch and dinner",
        "Personal expenses",
        "Travel insurance"
      ]
    }
  };

  const pkg = allPackages[packageId] || allPackages["kerala-bliss-experience"];

  return (
    <div className="pt-20">
      <SEOHead 
        title={`${pkg.name} | ${pkg.duration} | Omkar Tour and Travels`}
        description={`Book ${pkg.name} - ${pkg.duration} starting at ₹${pkg.price}. Includes ${pkg.highlights.slice(0, 3).join(', ')}`}
        keywords={`${pkg.destination}, Kerala tour packages, ${pkg.name}, ${pkg.duration}`}
        canonical={`https://omkartourskerala.com/package/${pkg.id}`}
      />
      
      {/* Package Header */}
      <section className="relative h-96 bg-gray-900">
        <img
          src={pkg.image}
          alt={`${pkg.name} - ${pkg.destination}`}
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center space-x-2 mb-4">
              <span className="bg-emerald-500 px-3 py-1 rounded-full text-sm">🏆 Omkar Exclusive</span>
              <span className="bg-red-500 px-3 py-1 rounded-full text-sm">{pkg.discount}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{pkg.name}</h1>
            <div className="flex flex-wrap items-center gap-4 text-lg">
              <span>📍 {pkg.destination}</span>
              <span>⏱️ {pkg.duration}</span>
              <span>⭐ {pkg.rating} ({pkg.reviews} reviews)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Package Details */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Highlights */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6">Tour Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {pkg.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Itinerary */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6">Detailed Itinerary</h2>
              <div className="space-y-6">
                {pkg.itinerary.map((day, index) => (
                  <div key={index} className="flex space-x-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                      <span className="text-emerald-600 font-bold">{day.day}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{day.title}</h3>
                      <p className="text-gray-600">{day.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-gray-800">₹{pkg.price}</div>
                <div className="text-sm text-gray-500 line-through">₹{pkg.originalPrice}</div>
                <div className="text-emerald-600 font-semibold mt-1">{pkg.discount}</div>
                <div className="text-sm text-gray-500 mt-2">per person</div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-sm">
                  <span>Duration</span>
                  <span className="font-semibold">{pkg.duration}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Best Season</span>
                  <span className="font-semibold">{pkg.bestSeason}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Rating</span>
                  <span className="font-semibold">{pkg.rating} ⭐ ({pkg.reviews} reviews)</span>
                </div>
              </div>

              <div className="space-y-3">
                <a
                  href="https://wa.me/919028803309"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-600 text-white py-4 rounded-xl font-semibold hover:bg-green-700 transition duration-300 flex items-center justify-center"
                >
                  💬 Book on WhatsApp
                </a>
                <a
                  href="tel:+919028803309"
                  className="w-full bg-emerald-500 text-white py-4 rounded-xl font-semibold hover:bg-emerald-600 transition duration-300 flex items-center justify-center"
                >
                  📞 Call Now
                </a>
              </div>

              {/* Inclusions & Exclusions */}
              <div className="mt-6 space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">✅ Includes:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {pkg.inclusions.slice(0, 3).map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">❌ Excludes:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {pkg.exclusions.slice(0, 3).map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SinglePackagePage;