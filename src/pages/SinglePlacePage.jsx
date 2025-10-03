import React from "react";
import { useParams, Link } from 'react-router-dom';

import SEOHead from "../components/common/SEOHead";
import Footer from "../components/common/Footer";

const SinglePlacePage = () => {
  const { placeId } = useParams();
  
  const allPlaces = [
  {
    id: "Alleppey Beach",
    name: "Alleppey Beach",
    duration: "04 Nights / 05 Days",
    destination: "Alleppey, Kerala",
    places: ["alleppey"],
    bestSeason: "Sep - May",
    price: 18999,
    originalPrice: 22999,
    discount: "17% Off",
    rating: 4.8,
    reviews: 67,
    image: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759330510/Allappy_4_ruiygh.jpg",
    images: [
      "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759330510/Allappy_1_qziygx.jpg",
      "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759330510/Allappy_4_ruiygh.jpg",
      "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759330511/Allappy_3_ktn290.jpg",
      "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759330510/Alleppey_2_bmbow2.jpg"
    ],
    description: "Alleppey Beach is famous for its long, beautiful coastline and the historic pier that extends over 137 years into the sea. Visitors love walking on the soft white sand and enjoying breathtaking sunset views.",
    detailedDescription: "Alleppey Beach offers a perfect blend of natural beauty and exciting activities. The beach features a historic pier extending into the sea, soft white sands, and spectacular sunset views. Enjoy thrilling water sports like motorboat rides, parasailing, and surfing. Nearby Vijaya Beach Park provides family-friendly entertainment, while local vendors offer fresh coconut water and delicious Kerala street food.",
    highlights: ["Historic Pier", "Water Sports", "Sunset Views", "Beach Park", "Local Cuisine"],
    itinerary: [
      { day: "Day 1", title: "Arrival in Alleppey", description: "Arrive at Cochin Airport, transfer to Alleppey, check-in at beach resort." },
      { day: "Day 2", title: "Beach Exploration", description: "Visit Alleppey Beach, historic pier, enjoy water sports and sunset views." },
      { day: "Day 3", title: "Local Attractions", description: "Explore Vijaya Beach Park, local markets, and try street food." },
      { day: "Day 4", title: "Backwaters Experience", description: "Optional backwater cruise or relax at beach." },
      { day: "Day 5", title: "Departure", description: "Transfer to Cochin Airport for departure." }
    ],
    inclusions: ["Beach resort stay", "Daily breakfast", "AC vehicle", "Beach entry", "All taxes"],
    exclusions: ["Flights", "Lunch/dinner", "Water sports charges", "Personal expenses", "Travel insurance"]
  },
  {
    id: "Backwaters",
    name: "Backwaters",
    duration: "03 Nights / 04 Days",
    destination: "Alleppey, Kumarakom",
    places: ["alleppey", "kumarakom"],
    bestSeason: "Aug - Mar",
    price: 16999,
    originalPrice: 20999,
    discount: "19% Off",
    rating: 4.9,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1565498258066-166b3a4eb9e2?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Kerala Backwaters are a network of rivers, lakes, and canals that flow alongside the Arabian Sea. Visitors enjoy peaceful houseboat cruises through green palm-lined waterways and traditional villages.",
    detailedDescription: "Experience the serene beauty of Kerala's famous backwaters through peaceful houseboat cruises along palm-lined waterways. Explore traditional villages, witness rich wildlife, and admire scenic paddy fields. This journey offers perfect relaxation, excellent birdwatching opportunities, and deep immersion into Kerala's unique natural beauty and local culture.",
    highlights: ["Houseboat Cruise", "Backwaters", "Vembanad Lake", "Traditional Food", "Sunset Views"],
    itinerary: [
      { day: "Day 1", title: "Arrival in Alleppey", description: "Check-in, evening walk at Alleppey Beach." },
      { day: "Day 2", title: "Houseboat Cruise", description: "Full day backwater houseboat cruise with meals." },
      { day: "Day 3", title: "Kumarakom Excursion", description: "Visit bird sanctuary and relax by Vembanad Lake." },
      { day: "Day 4", title: "Departure", description: "Check-out and transfer to Cochin Airport." }
    ],
    inclusions: ["Houseboat stay", "Meals on houseboat", "AC vehicle", "All entry fees", "All taxes"],
    exclusions: ["Flights", "Personal expenses", "Travel insurance"]
  },
  {
    id: "Tea estate",
    name: "Tea Estate Tour",
    duration: "03 Nights / 04 Days",
    destination: "Munnar, Thekkady",
    places: ["munnar", "thekkady"],
    bestSeason: "Sep - Mar",
    price: 15999,
    originalPrice: 19999,
    discount: "20% Off",
    rating: 4.7,
    reviews: 56,
    image: "https://images.unsplash.com/photo-1558618047-3c76ca7d13?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1558618047-3c76ca7d13?auto=format&fit=crop&w=1200&q=80"],
    description: "Explore Kerala's famous tea estates in Munnar and Thekkady with lush green hills covered with neatly trimmed tea bushes. Learn about tea processing and enjoy fresh tea tastings.",
    detailedDescription: "Discover the enchanting world of Kerala's tea estates in Munnar and Thekkady. Walk through vast, lush green hills covered with perfectly manicured tea bushes. Visit tea factories to learn about tea processing from leaf to cup, and enjoy fresh tea tastings. The cool climate and misty mountains create a perfect setting for scenic walks and photography. Explore famous estates like Kannan Devan Hills and Kolukkumalai, combining natural beauty with rich tea cultivation history.",
    highlights: ["Tea Plantations", "Tea Factory Tour", "Tea Tasting", "Scenic Walks", "Mountain Views"],
    itinerary: [
      { day: "Day 1", title: "Arrival in Munnar", description: "Transfer to Munnar, check-in at plantation resort." },
      { day: "Day 2", title: "Te Estate Exploration", description: "Visit tea plantations, factory, enjoy tea tasting session." },
      { day: "Day 3", title: "Travel to Thekkady", description: "Transfer to Thekkady, visit spice gardens." },
      { day: "Day 4", title: "Departure", description: "Transfer to airport for departure." }
    ],
    inclusions: ["Plantation resort", "Daily breakfast", "AC vehicle", "Tea factory tour", "All taxes"],
    exclusions: ["Flights", "Lunch/dinner", "Personal expenses", "Travel insurance"]
  },
  {
    id: "Periyar Lake Thekkady",
    name: "Periyar Lake Thekkady",
    duration: "04 Nights / 05 Days",
    destination: "Thekkady, Periyar",
    places: ["thekkady"],
    bestSeason: "Nov - Apr",
    price: 17999,
    originalPrice: 21999,
    discount: "18% Off",
    rating: 4.6,
    reviews: 72,
    image: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&w=1200&q=80"],
    description: "Periyar Lake in Thekkady offers serene boat cruises through rich wildlife habitats surrounded by lush Periyar National Park. Spot elephants, deer, and various bird species.",
    detailedDescription: "Periyar Lake, located in Thekkady, is an artificial lake formed by the Mullaperiyar Dam, surrounded by the lush Periyar National Park. Enjoy serene boat cruises through rich wildlife habitats where you can spot elephants, deer, and various bird species along the lake's banks. Enhance your adventure with bamboo rafting and guided nature walks through the forest. This destination offers a perfect blend of natural beauty and wildlife exploration in Kerala's Western Ghats.",
    highlights: ["Periyar Wildlife Sanctuary", "Boat Cruise", "Bamboo Rafting", "Nature Walks", "Spice Plantations"],
    itinerary: [
      { day: "Day 1", title: "Arrival in Thekkady", description: "Check-in at jungle resort near Periyar Lake." },
      { day: "Day 2", title: "Wildlife Experience", description: "Boat cruise on Periyar Lake, wildlife spotting." },
      { day: "Day 3", title: "Adventure Day", description: "Bamboo rafting, nature walks, spice plantation visit." },
      { day: "Day 4", title: "Leisure & Culture", description: "Relax at resort, evening cultural program." },
      { day: "Day 5", title: "Departure", description: "Transfer to airport for departure." }
    ],
    inclusions: ["Jungle resort", "Boat cruise", "AC vehicle", "All entry tickets", "All taxes"],
    exclusions: ["Flights", "Personal expenses", "Travel insurance"]
  },
  {
    id: "The Nehru Trophy Boat Race",
    name: "The Nehru Trophy Boat Race",
    duration: "03 Nights / 04 Days",
    destination: "Alappuzha, Kerala",
    places: ["alleppey"],
    bestSeason: "Aug (Annual Event)",
    price: 16999,
    originalPrice: 20999,
    discount: "19% Off",
    rating: 4.5,
    reviews: 92,
    image: "https://images.unsplash.com/photo-1587132135056-48ae4dc7fa32?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1587132135056-48ae4dc7fa32?auto=format&w=1200&q=80"],
    description: "Witness the thrilling Nehru Trophy Boat Race featuring massive snake boats with over 100 oarsmen rowing in perfect rhythm on Punnamada Lake.",
    detailedDescription: "Experience the spectacular Nehru Trophy Boat Race, Kerala's most famous annual boat race held on Punnamada Lake near Alappuzha. Watch massive snake boats (chundan vallams), each manned by over 100 oarsmen rowing in perfect rhythm to traditional boat songs. Inaugurated in 1952 by India's first Prime Minister Jawaharlal Nehru, this vibrant cultural festival celebrates Kerala's heritage, unity, and sporting spirit. Join thousands of spectators for this thrilling event that showcases incredible teamwork and traditional Kerala culture.",
    highlights: ["Snake Boat Race", "Cultural Festival", "Traditional Music", "Vibrant Atmosphere", "Local Cuisine"],
    itinerary: [
      { day: "Day 1", title: "Arrival in Alappuzha", description: "Check-in, explore local area." },
      { day: "Day 2", title: "Boat Race Day", description: "Full day at Nehru Trophy Boat Race event." },
      { day: "Day 3", title: "Backwaters Relaxation", description: "Houseboat cruise or beach relaxation." },
      { day: "Day 4", title: "Departure", description: "Transfer to airport for departure." }
    ],
    inclusions: ["Hotel accommodation", "Boat race tickets", "AC vehicle", "Guide services", "All taxes"],
    exclusions: ["Flights", "Meals", "Personal expenses", "Travel insurance"]
  },
  {
    id: "Kovalam Beach",
    name: "Kovalam Beach",
    duration: "03 Nights / 04 Days",
    destination: "Kovalam, Thiruvananthapuram",
    places: ["kovalam"],
    bestSeason: "Sep - Mar",
    price: 15999,
    originalPrice: 19999,
    discount: "20% Off",
    rating: 4.7,
    reviews: 48,
    image: "https://images.unsplash.com/photo-1565955887216-68d71c13f6c1?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1565955887216-68d71c13f6c1?auto=format&w=1200&q=80"],
    description: "Kovalam Beach features three crescent-shaped beaches with sparkling sands, palm-lined shores, and clear waters perfect for swimming and water sports.",
    detailedDescription: "Kovalam Beach is famous for its three beautiful crescent-shaped beaches: Lighthouse Beach, Hawa Beach, and Samudra Beach. Enjoy sparkling sands, palm-lined shores, and clear waters perfect for swimming, sunbathing, and exciting water sports like surfing and parasailing. Climb the iconic Vizhinjam Lighthouse for panoramic views of the Arabian Sea. Savor fresh local seafood at beach shacks and explore vibrant evening markets. Kovalam offers the perfect blend of relaxation, adventure, and cultural experiences in southern Kerala.",
    highlights: ["Lighthouse Beach", "Hawa Beach", "Water Sports", "Ayurvedic Massage", "Local Seafood"],
    itinerary: [
      { day: "Day 1", title: "Arrival in Kovalam", description: "Check-in at beach resort, evening beach walk." },
      { day: "Day 2", title: "Beach Day", description: "Full day to relax, swim, and try water sports." },
      { day: "Day 3", title: "Local Exploration", description: "Visit lighthouse, local markets, Ayurvedic center." },
      { day: "Day 4", title: "Departure", description: "Transfer to Thiruvananthapuram airport." }
    ],
    inclusions: ["Beach resort", "Daily breakfast", "AC vehicle", "Lighthouse entry", "All taxes"],
    exclusions: ["Flights", "Lunch/dinner", "Water sports", "Personal expenses", "Travel insurance"]
  },
  {
    id: "Guruvayur Temple",
    name: "Guruvayur Temple",
    duration: "02 Nights / 03 Days",
    destination: "Guruvayur, Kerala",
    places: ["guruvayur"],
    bestSeason: "Year Round",
    price: 12999,
    originalPrice: 15999,
    discount: "19% Off",
    rating: 4.8,
    reviews: 34,
    image: "https://images.unsplash.com/photo-1565498258066-166b3a4eb9e2?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1565498258066-166b3a4eb9e2?auto=format&w=1200&q=80"],
    description: "Guruvayur Temple is one of the most sacred Hindu temples dedicated to Lord Krishna, known for its exquisite Kerala-style architecture and spiritual significance.",
    detailedDescription: "Guruvayur Temple is one of Kerala's most sacred Hindu temples dedicated to Lord Krishna (Guruvayurappan). The temple's idol is believed to be over 5,000 years old, originally from the ancient city of Dwarka. Renowned for its exquisite Kerala-style architecture, the temple attracts millions of devotees annually and is often called 'Bhooloka Vaikunta' - the earthly abode of Lord Vishnu. Experience the strong spiritual atmosphere, witness vibrant festivals, and participate in traditional rituals that have been preserved for centuries.",
    highlights: ["Temple Darshan", "Traditional Architecture", "Spiritual Rituals", "Festivals", "Cultural Experience"],
    itinerary: [
      { day: "Day 1", title: "Arrival in Guruvayur", description: "Check-in, evening temple visit." },
      { day: "Day 2", title: "Temple Experience", description: "Morning rituals, temple darshan, explore temple complex." },
      { day: "Day 3", title: "Departure", description: "Transfer to airport or next destination." }
    ],
    inclusions: ["Hotel accommodation", "Temple guidance", "AC vehicle", "All taxes"],
    exclusions: ["Flights", "Meals", "Personal expenses", "Travel insurance"]
  },
  {
    id: "Ambalapuzha Krishna Temple",
    name: "Ambalapuzha Krishna Temple",
    duration: "02 Nights / 03 Days",
    destination: "Ambalapuzha, Alleppey",
    places: ["ambalapuzha"],
    bestSeason: "Year Round",
    price: 11999,
    originalPrice: 14999,
    discount: "20% Off",
    rating: 4.6,
    reviews: 28,
    image: "https://images.unsplash.com/photo-1552465018-69ad1d81d952?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1552465018-69ad1d81d952?auto=format&w=1200&q=80"],
    description: "Ambalapuzha Krishna Temple is famous for its traditional Kerala architecture, serene ambiance, and the legendary Palpayasam sweet offering to Lord Krishna.",
    detailedDescription: "Ambalapuzha Krishna Temple in Alappuzha district is a magnificent example of 15th-century traditional Kerala architecture. The temple is renowned for its serene ambiance and the legendary Palpayasam - a sweet milk-rice pudding offered daily to Lord Krishna. Historically significant, it served as the safe haven for Guruvayoor Temple's idol during Tipu Sultan's invasion. Admire the temple's colorful murals and experience the magical atmosphere during oil lamp-lit evenings. The temple also hosts annual festivals and boat races, adding vibrant cultural celebrations to your spiritual journey.",
    highlights: ["Temple Architecture", "Palpayasam Offering", "Colorful Murals", "Oil Lamp Rituals", "Cultural Festivals"],
    itinerary: [
      { day: "Day 1", title: "Arrival in Ambalapuzha", description: "Check-in, evening temple visit." },
      { day: "Day 2", title: "Temple Exploration", description: "Morning rituals, taste Palpayasam, explore temple art." },
      { day: "Day 3", title: "Departure", description: "Transfer to airport or continue journey." }
    ],
    inclusions: ["Hotel stay", "Temple guidance", "AC vehicle", "Palpayasam tasting", "All taxes"],
    exclusions: ["Flights", "Meals", "Personal expenses", "Travel insurance"]
  }
]

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