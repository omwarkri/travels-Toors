import React from "react";
import { Link } from 'react-router-dom';
import PlaceCard from '../places/PlaceCard';

const PopularPlaces = ({ id = "places" }) => {
  // Extract unique places from allPackages data with all images
  const allPackages = [
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
      highlights: ["Historic Pier", "Water Sports", "Sunset Views", "Beach Park", "Local Cuisine"]
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
      image: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759487637/backwater_1_b007co.jpg",
      images: [
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759487637/backwater_1_b007co.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759487637/backwater_2_sfyek2.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759487637/backwater_3_xnhewv.jpg"
      ],
      description: "Kerala Backwaters are a network of rivers, lakes, and canals that flow alongside the Arabian Sea. Visitors enjoy peaceful houseboat cruises through green palm-lined waterways and traditional villages.",
      highlights: ["Houseboat Cruise", "Backwaters", "Vembanad Lake", "Traditional Food", "Sunset Views"]
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
      image: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759476405/tea_1_jrixag.jpg",
      images: [
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759476405/tea_1_jrixag.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759476405/tea_2_rmqxfj.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759476405/tea_3_shjd5a.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759476406/tea_4_soxsj1.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759476407/tea_5_xlgonr.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759476406/tea_6_wh8ied.jpg"
      ],
      description: "Explore Kerala's famous tea estates in Munnar and Thekkady with lush green hills covered with neatly trimmed tea bushes. Learn about tea processing and enjoy fresh tea tastings.",
      highlights: ["Tea Plantations", "Tea Factory Tour", "Tea Tasting", "Scenic Walks", "Mountain Views"]
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
      image: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759487813/periyar_lake_1_flz8vu.jpg",
      images: [
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759487813/periyar_lake_1_flz8vu.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759487815/periyar_lake_3_ojjgtd.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759487814/periyar_lake_2_ie3uwh.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759487815/periyar_lake_4_dkm7qi.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759487816/periyar_lake_5_h2jvxj.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759487816/periyar_lake_6_zc1hqa.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759487817/periyar_lake_7_w0rwap.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759487821/periyar_lake_8_xfdghv.jpg"
      ],
      description: "Periyar Lake in Thekkady offers serene boat cruises through rich wildlife habitats surrounded by lush Periyar National Park. Spot elephants, deer, and various bird species.",
      highlights: ["Periyar Wildlife Sanctuary", "Boat Cruise", "Bamboo Rafting", "Nature Walks", "Spice Plantations"]
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
      image: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488540/boat_race_1_zqkzfd.jpg",
      images: [
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488540/boat_race_1_zqkzfd.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488541/boat_race_2_wp6u5y.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488542/boat_race_3_cmenpt.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488547/boat_race_4_rgquq4.jpg"
      ],
      description: "Witness the thrilling Nehru Trophy Boat Race featuring massive snake boats with over 100 oarsmen rowing in perfect rhythm on Punnamada Lake.",
      highlights: ["Snake Boat Race", "Cultural Festival", "Traditional Music", "Vibrant Atmosphere", "Local Cuisine"]
    },
    {
      id: "padmanabhaswamy-temple",
      name: "Padmanabhaswamy Temple",
      duration: "02 Nights / 03 Days",
      destination: "Thiruvananthapuram, Kerala",
      places: ["thiruvananthapuram"],
      bestSeason: "Year Round",
      price: 11999,
      originalPrice: 14999,
      discount: "20% Off",
      rating: 4.6,
      reviews: 28,
      image: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488068/padmanabha-swamy1_kebsa2.jpg",
      images: [
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488068/padmanabha-swamy1_kebsa2.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488067/padmanabha-swamy2_bgsb1c.png",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488071/padmanabha-swamy3_iikmub.jpg"
      ],
      description: "The Padmanabhaswamy Temple in Thiruvananthapuram is one of the richest and most revered temples in India, dedicated to Lord Vishnu in Anantha Shayana (reclining) posture.",
      highlights: ["Dravidian Architecture", "Lord Vishnu in Anantha Shayana posture", "Richest Temple Treasures", "Grand Festivals", "Spiritual Rituals"]
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
      image: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488360/kovalam-1_trhrck.jpg",
      images: [
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488360/kovalam-1_trhrck.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488360/kovalam-2_vutkfm.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488361/kovalam-3_wsmfvc.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488361/kovalam-4_kddjkm.jpg"
      ],
      description: "Kovalam Beach features three crescent-shaped beaches with sparkling sands, palm-lined shores, and clear waters perfect for swimming and water sports.",
      highlights: ["Lighthouse Beach", "Hawa Beach", "Water Sports", "Ayurvedic Massage", "Local Seafood"]
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
      image: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759489125/Guruvayoor_Temple_1_ofddy3.jpg",
      images: [
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759489125/Guruvayoor_Temple_1_ofddy3.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759489126/Guruvayoor_Temple_2_yf2hsn.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759489126/Guruvayoor_Temple_3_snxhvj.jpg"
      ],
      description: "Guruvayur Temple is one of the most sacred Hindu temples dedicated to Lord Krishna, known for its exquisite Kerala-style architecture and spiritual significance.",
      highlights: ["Temple Darshan", "Traditional Architecture", "Spiritual Rituals", "Festivals", "Cultural Experience"]
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
      image: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488539/ambalapuzha-1_nsjzfe.jpg",
      images: [
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488539/ambalapuzha-1_nsjzfe.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488540/ambalapuzha-2_utnlzm.jpg"
      ],
      description: "Ambalapuzha Krishna Temple is famous for its traditional Kerala architecture, serene ambiance, and the legendary Palpayasam sweet offering to Lord Krishna.",
      highlights: ["Temple Architecture", "Palpayasam Offering", "Colorful Murals", "Oil Lamp Rituals", "Cultural Festivals"]
    },
    {
      id: "Boat Race",
      name: "Kerala Boat Race Experience",
      duration: "02 Nights / 03 Days",
      destination: "Alappuzha, Kerala",
      places: ["alappuzha"],
      bestSeason: "August (Race Season) / Year Round",
      price: 11999,
      originalPrice: 14999,
      discount: "20% Off",
      rating: 4.6,
      reviews: 28,
      image: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488540/boat_race_1_zqkzfd.jpg",
      images: [
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488540/boat_race_1_zqkzfd.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488541/boat_race_2_wp6u5y.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488542/boat_race_3_cmenpt.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488547/boat_race_4_rgquq4.jpg"
      ],
      description: "Experience the thrill of Kerala's famous snake boat races. Witness massive chundan vallams with 100+ oarsmen racing in perfect harmony on Punnamada Lake.",
      highlights: ["Snake Boat Race Viewing", "Traditional Boat Songs", "Backwater Cruise", "Cultural Performances", "Local Cuisine"]
    },
    {
      id: "Samudra Beach",
      name: "Samudra Beach Retreat",
      duration: "03 Nights / 04 Days",
      destination: "Kovalam, Thiruvananthapuram",
      places: ["kovalam"],
      bestSeason: "Sep - Mar",
      price: 15999,
      originalPrice: 19999,
      discount: "20% Off",
      rating: 4.7,
      reviews: 48,
      image: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488545/Samudra-Beach_1_pq79i9.jpg",
      images: [
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488545/Samudra-Beach_1_pq79i9.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488545/Samudra-Beach_2_jzvrhh.jpg"
      ],
      description: "Discover the serene beauty of Samudra Beach, the largest and most tranquil of Kovalam's three crescent bays, known for its luxury resorts and peaceful atmosphere.",
      highlights: ["Tranquil Beach Experience", "Luxury Beach Resorts", "Ayurvedic Wellness Treatments", "Sunset Views", "Fresh Seafood Dining"]
    }
  ];

  // Create unique places from all packages
  const uniquePlaces = {};
  
  allPackages.forEach(pkg => {
    pkg.places.forEach(placeName => {
      if (!uniquePlaces[placeName]) {
        uniquePlaces[placeName] = {
          id: placeName,
          name: placeName.toUpperCase(),
          desc: pkg.description,
          image: pkg.image,
          images: pkg.images, // Include all images
          rating: pkg.rating.toString(),
          tours: Math.floor(Math.random() * 10) + 3, // Random number of tours
          highlights: pkg.highlights,
          bestSeason: pkg.bestSeason,
          packages: allPackages
            .filter(p => p.places.includes(placeName))
            .map(p => p.name)
            .slice(0, 3) // Show max 3 packages
        };
      }
    });
  });

  const places = Object.values(uniquePlaces);
  const popularPlaces = places.slice(0, 6); // Show first 6 places as popular

  return (
    <section id="places" className="max-w-7xl mx-auto py-8 md:py-32">
      <div className="text-center mb-12">
        <div className="inline-flex items-center px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium mb-4">
          🌟 Top Destinations
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-gray-800 mb-6 tracking-wider uppercase">Most Popular Places to Visit</h2>
        <p className="text-gray-500 text-lg max-w-3xl mx-auto">
          Kerala is a rare place adorned with beautiful landscapes, hill stations, water bodies and everything a traveler would love to explore.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {popularPlaces.map((place) => (
          <PlaceCard key={place.id} place={place} />
        ))}
      </div>

      <div className="text-center mt-12">
        <Link 
          to="/places" 
          className="inline-flex items-center px-8 py-4 border-2 border-emerald-500 text-emerald-600 rounded-xl font-semibold hover:bg-emerald-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
        >
          Explore All {places.length} Destinations
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </Link>
      </div>

      {/* Destination Categories */}
     <div className="mt-8 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 text-center">
  <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-lg md:rounded-xl p-3 md:p-6 border border-emerald-100">
    <div className="w-8 h-8 md:w-12 md:h-12 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3">
      <span className="text-white text-sm md:text-lg">🏔️</span>
    </div>
    <h3 className="font-semibold text-gray-800 text-sm md:text-base mb-1 md:mb-2">Hill Stations</h3>
    <p className="text-xs md:text-sm text-gray-600">Munnar, Wayanad</p>
  </div>
  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg md:rounded-xl p-3 md:p-6 border border-blue-100">
    <div className="w-8 h-8 md:w-12 md:h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3">
      <span className="text-white text-sm md:text-lg">🚤</span>
    </div>
    <h3 className="font-semibold text-gray-800 text-sm md:text-base mb-1 md:mb-2">Backwaters</h3>
    <p className="text-xs md:text-sm text-gray-600">Alleppey, Kumarakom</p>
  </div>
  <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg md:rounded-xl p-3 md:p-6 border border-amber-100">
    <div className="w-8 h-8 md:w-12 md:h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3">
      <span className="text-white text-sm md:text-lg">🏖️</span>
    </div>
    <h3 className="font-semibold text-gray-800 text-sm md:text-base mb-1 md:mb-2">Beaches</h3>
    <p className="text-xs md:text-sm text-gray-600">Kovalam, Varkala</p>
  </div>
  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg md:rounded-xl p-3 md:p-6 border border-purple-100">
    <div className="w-8 h-8 md:w-12 md:h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3">
      <span className="text-white text-sm md:text-lg">🕌</span>
    </div>
    <h3 className="font-semibold text-gray-800 text-sm md:text-base mb-1 md:mb-2">Culture</h3>
    <p className="text-xs md:text-sm text-gray-600">Kochi, Thrissur</p>
  </div>
</div>
    </section>
  );
};

export default PopularPlaces;