import React from "react";
import { useParams, Link } from 'react-router-dom';
import SEOHead from "../components/common/SEOHead";
import Footer from "../components/common/Footer";

const SinglePackagePage = () => {
  const { packageId } = useParams();
  
  const allPackages = {
    "kerala-backwaters-beaches": {
      id: "kerala-backwaters-beaches",
      name: "Kerala Backwaters & Beaches",
      duration: "05 Nights / 06 Days",
      destination: "Alleppey, Kovalam, Thiruvananthapuram",
      bestSeason: "Sep - Mar",
      price: "22,999",
      originalPrice: "27,999",
      discount: "Special 18% Off",
      rating: "4.7",
      reviews: "89",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      highlights: [
        "Alleppey houseboat cruise through palm-lined waterways",
        "Kovalam beach relaxation and water sports",
        "Visit historic Alleppey Beach with 137-year-old pier",
        "Traditional Kerala street food experience",
        "Vijaya Beach Park family fun",
        "Sunset views at Alleppey Beach",
        "Local village culture experience"
      ],
      itinerary: [
        {
          day: "Day 1",
          title: "Arrival in Alleppey",
          description: "Arrive at Cochin International Airport, transfer to Alleppey. Evening visit to Alleppey Beach - walk on soft white sand, witness breathtaking sunset views, and enjoy local street food."
        },
        {
          day: "Day 2",
          title: "Alleppey Backwaters Cruise",
          description: "Full day houseboat cruise through Kerala's famous backwaters. Experience peaceful journey through green palm-lined waterways, traditional villages, and rich wildlife. Enjoy birdwatching and scenic paddy fields."
        },
        {
          day: "Day 3",
          title: "Alleppey Beach & Water Sports",
          description: "Morning at Vijaya Beach Park for family fun. Afternoon enjoy exciting water sports at Alleppey Beach - motorboat rides, parasailing, and surfing. Evening local market exploration."
        },
        {
          day: "Day 4",
          title: "Alleppey to Kovalam",
          description: "Travel to Kovalam. Check into beach resort. Evening at Lighthouse Beach - enjoy swimming, sunbathing, and panoramic views from Vizhinjam Lighthouse."
        },
        {
          day: "Day 5",
          title: "Kovalam Beach Experience",
          description: "Full day exploring Kovalam's three crescent-shaped beaches. Enjoy water sports like surfing and parasailing. Relish fresh local seafood at beach shacks. Visit vibrant evening markets."
        },
        {
          day: "Day 6",
          title: "Departure from Thiruvananthapuram",
          description: "Morning visit to Padmanabhaswamy Temple in Thiruvananthapuram. Explore the famous Hindu temple's unique architecture and spiritual significance. Transfer to airport for departure."
        }
      ],
      inclusions: [
        "Accommodation in 3-star hotels and houseboat",
        "Daily breakfast and all meals on houseboat",
        "AC vehicle for all transfers & sightseeing",
        "Alleppey backwater houseboat cruise",
        "Beach entry and basic water sports equipment",
        "All toll taxes, parking & driver allowances",
        "Tour guide services"
      ],
      exclusions: [
        "Flight tickets",
        "Lunch and dinner (except on houseboat)",
        "Premium water sports activities",
        "Personal expenses",
        "Travel insurance",
        "Temple entry fees"
      ]
    },
    "kerala-tea-plantation-wildlife": {
      id: "kerala-tea-plantation-wildlife",
      name: "Kerala Tea Plantation & Wildlife",
      duration: "06 Nights / 07 Days",
      destination: "Munnar, Thekkady, Periyar",
      bestSeason: "Oct - May",
      price: "28,500",
      originalPrice: "33,500",
      discount: "Special 15% Off",
      rating: "4.9",
      reviews: "67",
      image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1200&q=80",
      highlights: [
        "Munnar tea estate exploration and factory visit",
        "Periyar Lake wildlife boat cruise",
        "Kannan Devan Hills tea plantation walk",
        "Bamboo rafting in Periyar",
        "Fresh tea tasting sessions",
        "Elephant and deer spotting",
        "Misty mountain photography"
      ],
      itinerary: [
        {
          day: "Day 1",
          title: "Arrival in Munnar",
          description: "Arrive at Cochin Airport, scenic drive to Munnar through winding hills. Check into tea estate resort. Evening at leisure enjoying cool climate and misty mountains."
        },
        {
          day: "Day 2",
          title: "Munnar Tea Estates Exploration",
          description: "Full day exploring Kerala's famous tea estates. Visit Kannan Devan Hills, learn about tea processing at local factories, enjoy fresh tea tastings. Scenic walks through neatly trimmed tea bushes."
        },
        {
          day: "Day 3",
          title: "Munnar Nature Experience",
          description: "Visit Kolukkumalai tea estate - one of the highest tea plantations. Enjoy panoramic views, photography sessions. Afternoon visit to echo points and waterfalls in the region."
        },
        {
          day: "Day 4",
          title: "Munnar to Thekkady",
          description: "Travel to Thekkady. Enroute visit spice plantations. Check into hotel near Periyar National Park. Evening cultural performance."
        },
        {
          day: "Day 5",
          title: "Periyar Lake Wildlife",
          description: "Morning boat cruise on Periyar Lake through rich wildlife habitats. Spot elephants, deer, and various bird species. Afternoon bamboo rafting and nature walks in Periyar National Park."
        },
        {
          day: "Day 6",
          title: "Thekkady Exploration",
          description: "Full day exploring Thekkady region. Visit spice gardens, learn about cardamom, pepper cultivation. Evening at leisure or optional spice shopping."
        },
        {
          day: "Day 7",
          title: "Departure",
          description: "Morning at leisure. Transfer to Kochi airport with memories of tea plantations and wildlife encounters."
        }
      ],
      inclusions: [
        "Accommodation in tea estate resorts and 3-star hotels",
        "Daily breakfast and dinner",
        "AC vehicle for all transfers & sightseeing",
        "Tea factory visits and tasting sessions",
        "Periyar Lake boat cruise tickets",
        "Nature walk and bamboo rafting",
        "All taxes and service charges"
      ],
      exclusions: [
        "Flight tickets",
        "Lunch throughout the tour",
        "Personal expenses and tips",
        "Travel insurance",
        "Optional activities not mentioned"
      ]
    },
    "kerala-cultural-heritage": {
      id: "kerala-cultural-heritage",
      name: "Kerala Cultural Heritage Tour",
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
        "Traditional Kerala architecture",
        "Sacred temple experiences",
        "Cultural festivals and rituals",
        "Historical spiritual sites"
      ],
      itinerary: [
        {
          day: "Day 1",
          title: "Arrival in Guruvayur",
          description: "Arrive at Cochin Airport, transfer to Guruvayur. Evening visit to Guruvayur Temple - one of Kerala's most sacred temples dedicated to Lord Krishna. Witness vibrant rituals and spiritual atmosphere."
        },
        {
          day: "Day 2",
          title: "Guruvayur Temple Experience",
          description: "Morning special darshan at Guruvayur Temple. Learn about temple's history and the 5,000-year-old idol. Afternoon explore temple architecture and visit nearby cultural sites."
        },
        {
          day: "Day 3",
          title: "Guruvayur to Ambalapuzha",
          description: "Travel to Ambalapuzha. Visit Ambalapuzha Krishna Temple famous for its Palpayasam (sweet milk-rice pudding). Explore stunning Kerala architecture and colorful murals."
        },
        {
          day: "Day 4",
          title: "Alappuzha Cultural Day",
          description: "Visit Punnamada Lake - venue of famous Nehru Trophy Boat Race. Learn about snake boats and traditional boat songs. Evening visit to local markets and cultural centers."
        },
        {
          day: "Day 5",
          title: "Departure",
          description: "Morning participation in temple rituals. Transfer to Cochin airport with spiritual memories and cultural insights."
        }
      ],
      inclusions: [
        "Accommodation in 3-star hotels near temples",
        "Daily breakfast",
        "AC vehicle for all transfers & sightseeing",
        "Temple entry and special darshan arrangements",
        "Cultural guide services",
        "All taxes and driver allowances"
      ],
      exclusions: [
        "Flight tickets",
        "Lunch and dinner",
        "Personal offerings at temples",
        "Travel insurance",
        "Camera fees at temples"
      ]
    }
  };

  const pkg = allPackages[packageId] || allPackages["kerala-backwaters-beaches"];

  return (
    <div className="pt-20 min-h-screen">
      <SEOHead 
        title={`${pkg.name} | ${pkg.duration} | Omkar Tour and Travels`}
        description={`Book ${pkg.name} - ${pkg.duration} starting at ₹${pkg.price}. Includes ${pkg.highlights.slice(0, 3).join(', ')}`}
        keywords={`${pkg.destination}, Kerala tour packages, ${pkg.name}, ${pkg.duration}`}
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
            <Link 
              to="/packages"
              className="inline-flex items-center text-white/80 hover:text-white mb-4 transition duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Packages
            </Link>
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
                  <div key={index} className="flex space-x-4 p-4 bg-gray-50 rounded-lg">
                    <div className="flex-shrink-0 w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                      <span className="text-emerald-600 font-bold text-sm">{day.day}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{day.title}</h3>
                      <p className="text-gray-600">{day.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-emerald-600">✅ What's Included</h3>
                <ul className="space-y-3">
                  {pkg.inclusions.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="text-emerald-500 mt-1">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-red-600">❌ What's Excluded</h3>
                <ul className="space-y-3">
                  {pkg.exclusions.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="text-red-500 mt-1">✗</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
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

              {/* Quick Info */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                  5000+ Happy Customers
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                  Best Price Guarantee
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                  24/7 Support
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

export default SinglePackagePage;