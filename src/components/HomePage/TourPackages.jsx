import React from "react";
import { Link } from 'react-router-dom';
import TourPackageCard from '../packages/TourPackageCard';

const TourPackages = ({ id = "packages" }) => {
  // Updated package data with the new packages
  const allPackages = [
    {
      id: "kerala-classic",
      name: "Kerala Classic Tour",
      duration: "04 Nights / 05 Days",
      destination: "Kochi, Munnar, Thekkady, Alleppey",
      places: ["Kochi", "Munnar", "Thekkady", "Alleppey"],
      bestSeason: "Sep - May",
      price: 18999,
      originalPrice: 22999,
      discount: "17% Off",
      rating: 4.7,
      reviews: 95,
      image: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759330510/Allappy_1_qziygx.jpg",
      images: [
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759330510/Allappy_1_qziygx.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1760193264/munnar_mycc44.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1760193265/thekkady-tour-01_otzv8q.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759330510/Allappy_4_ruiygh.jpg"
      ],
      description: "Classic Kerala experience covering hill stations, wildlife, and backwaters.",
      highlights: [
        "Day 1: Arrival in Kochi and drive to Munnar with waterfall visits",
        "Day 2: Munnar sightseeing - Tea gardens, Mattupetty Dam, Echo Point",
        "Day 3: Transfer to Thekkady - Spice plantations and cultural show",
        "Day 4: Houseboat cruise in Alleppey backwaters with Kerala meals",
        "Day 5: Departure from Kochi"
      ],
      itinerary: [
        { day: "Day 1", title: "Arrival & Drive to Munnar", description: "Arrive in Kochi and drive to Munnar, stopping at Cheeyappara and Valara waterfalls." },
        { day: "Day 2", title: "Munnar Exploration", description: "Visit Rose Garden, Tea Museum, Mattupetty Dam, Echo Point, and Eravikulam National Park." },
        { day: "Day 3", title: "Thekkady Adventure", description: "Wildlife boat safari, spice plantation visit, and cultural show." },
        { day: "Day 4", title: "Alleppey Backwaters", description: "Houseboat cruise with traditional Kerala meals." },
        { day: "Day 5", title: "Departure", description: "Transfer to Kochi for departure." }
      ],
      inclusions: ["Hotels", "Meals", "Transfers", "Sightseeing", "Houseboat Stay"],
      exclusions: ["Flights", "Personal expenses", "Travel insurance"]
    },
    {
      id: "essence-of-kerala",
      name: "Essence of Kerala Tour",
      duration: "05 Nights / 06 Days",
      destination: "Kochi, Munnar, Thekkady, Alleppey",
      places: ["Kochi", "Munnar", "Thekkady", "Alleppey"],
      bestSeason: "Sep - May",
      price: 21999,
      originalPrice: 25999,
      discount: "15% Off",
      rating: 4.8,
      reviews: 120,
      image: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1760193262/kochi_wr3gbb.jpg",
      images: [
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1760193262/kochi_wr3gbb.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1760193264/munnar_mycc44.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1760193265/thekkady-tour-01_otzv8q.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759330510/Allappy_1_qziygx.jpg"
      ],
      description: "Experience the true essence of Kerala through its diverse landscapes and culture.",
      highlights: [
        "Day 1: Arrive in Kochi and drive to Munnar with waterfall stops",
        "Day 2: Full day Munnar exploration - Tea Museum, Mattupetty Dam, Echo Point",
        "Day 3: Transfer to Thekkady - Wildlife boat safari and spice plantations",
        "Day 4: Transfer to Alleppey - Houseboat backwater cruise",
        "Day 5: Kochi sightseeing - Fort Kochi, Chinese Fishing Nets, Jew Town",
        "Day 6: Departure from Kochi"
      ],
      itinerary: [
        { day: "Day 1", title: "Arrival & Munnar Transfer", description: "Arrive in Kochi, drive to Munnar via Cheeyappara and Valara waterfalls." },
        { day: "Day 2", title: "Munnar Sightseeing", description: "Tea Museum, Mattupetty Dam, Echo Point, and local attractions." },
        { day: "Day 3", title: "Thekkady Wildlife", description: "Transfer to Thekkady, boat safari in Periyar Lake, spice plantation visit." },
        { day: "Day 4", title: "Alleppey Backwaters", description: "Transfer to Alleppey, houseboat cruise with Kerala meals." },
        { day: "Day 5", title: "Kochi Heritage", description: "Fort Kochi, Chinese Fishing Nets, Jew Town market exploration." },
        { day: "Day 6", title: "Departure", description: "Transfer to Kochi airport/station for departure." }
      ],
      inclusions: ["Hotels", "Meals", "Transfers", "Sightseeing", "Houseboat Stay"],
      exclusions: ["Flights", "Personal expenses", "Travel insurance"]
    },
    {
      id: "heart-of-kerala",
      name: "Heart of Kerala Tour",
      duration: "06 Nights / 07 Days",
      destination: "Kochi, Munnar, Thekkady, Alleppey",
      places: ["Kochi", "Munnar", "Thekkady", "Alleppey"],
      bestSeason: "Sep - May",
      price: 24999,
      originalPrice: 28999,
      discount: "14% Off",
      rating: 4.8,
      reviews: 150,
      image: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759487637/backwater_1_b007co.jpg",
      images: [
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759487637/backwater_1_b007co.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1760193262/kochi_wr3gbb.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1760193264/munnar_mycc44.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1760193265/thekkady-tour-01_otzv8q.jpg"
      ],
      description: "Comprehensive Kerala tour covering cultural, natural, and backwater experiences.",
      highlights: [
        "Day 1: Kochi arrival - Fort Kochi, Chinese Fishing Nets, Kathakali show",
        "Day 2: Kochi heritage - Dutch Palace, Jew Town, St. Francis Church",
        "Day 3: Drive to Munnar with waterfall visits",
        "Day 4: Munnar sightseeing - Tea estates, gardens, and viewpoints",
        "Day 5: Thekkady - Spice plantations, cultural show, adventure activities",
        "Day 6: Alleppey - Houseboat cruise through backwaters",
        "Day 7: Departure from Kochi"
      ],
      itinerary: [
        { day: "Day 1", title: "Kochi Arrival & Cultural Experience", description: "Arrive in Kochi, explore Fort Kochi, Chinese Fishing Nets, evening Kathakali show." },
        { day: "Day 2", title: "Kochi Heritage Tour", description: "Visit Mattancherry Palace, Jew Town, St. Francis Church, Marine Drive." },
        { day: "Day 3", title: "Scenic Drive to Munnar", description: "Drive to Munnar via Cheeyappara and Valara waterfalls." },
        { day: "Day 4", title: "Munnar Exploration", description: "Rose Garden, Tea Museum, Mattupetty Dam, Echo Point, Eravikulam National Park." },
        { day: "Day 5", title: "Thekkady Adventure", description: "Spice plantation visit, boat cruise, cultural show, optional jeep safari." },
        { day: "Day 6", title: "Alleppey Backwaters", description: "Houseboat cruise with traditional Kerala meals." },
        { day: "Day 7", title: "Departure", description: "Transfer to Kochi for departure." }
      ],
      inclusions: ["Hotels", "Meals", "Transfers", "Sightseeing", "Houseboat Stay", "Cultural Shows"],
      exclusions: ["Flights", "Personal expenses", "Travel insurance"]
    },
    {
      id: "heritage-pathways",
      name: "Heritage Pathways of Kerala",
      duration: "07 Nights / 08 Days",
      destination: "Kochi, Munnar, Thekkady, Kumarakom, Alleppey",
      places: ["Kochi", "Munnar", "Thekkady", "Kumarakom", "Alleppey"],
      bestSeason: "Sep - May",
      price: 27999,
      originalPrice: 31999,
      discount: "12% Off",
      rating: 4.9,
      reviews: 130,
      image: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488068/padmanabha-swamy1_kebsa2.jpg",
      images: [
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488068/padmanabha-swamy1_kebsa2.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1760193262/kochi_wr3gbb.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1760193264/munnar_mycc44.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759487637/backwater_1_b007co.jpg"
      ],
      description: "Explore Kerala's rich heritage through temples, palaces, and cultural sites.",
      highlights: [
        "Day 1: Kochi arrival - Fort Kochi, Chinese Fishing Nets, Kathakali show",
        "Day 2: Kochi heritage sites - Dutch Palace, Jew Town, St. Francis Church",
        "Day 3: Scenic drive to Munnar with waterfall stops",
        "Day 4: Munnar hill station exploration",
        "Day 5: Thekkady wildlife and spice experience",
        "Day 6: Kumarakom backwaters and bird sanctuary",
        "Day 7: Houseboat cruise to Alleppey",
        "Day 8: Departure from Kochi"
      ],
      itinerary: [
        { day: "Day 1", title: "Kochi Cultural Start", description: "Arrive in Kochi, explore Fort Kochi, Chinese Fishing Nets, evening Kathakali show." },
        { day: "Day 2", title: "Kochi Heritage", description: "Mattancherry Palace, Jew Town, St. Francis Church, Marine Drive." },
        { day: "Day 3", title: "Munnar Journey", description: "Drive to Munnar via Cheeyappara and Valara waterfalls." },
        { day: "Day 4", title: "Munnar Nature", description: "Rose Garden, Tea Museum, Mattupetty Dam, Echo Point, Eravikulam National Park." },
        { day: "Day 5", title: "Thekkady Wildlife", description: "Boat safari in Periyar Lake, spice plantation visit, cultural show." },
        { day: "Day 6", title: "Kumarakom Serenity", description: "Transfer to Kumarakom, backwater cruise, bird sanctuary visit." },
        { day: "Day 7", title: "Houseboat Experience", description: "Houseboat cruise from Kumarakom to Alleppey with Kerala meals." },
        { day: "Day 8", title: "Departure", description: "Transfer to Kochi for departure." }
      ],
      inclusions: ["Hotels", "Meals", "Transfers", "Sightseeing", "Houseboat Stay", "Wildlife Safari"],
      exclusions: ["Flights", "Personal expenses", "Travel insurance"]
    },
    {
      id: "grand-kerala",
      name: "Grand Kerala Tour",
      duration: "09 Nights / 10 Days",
      destination: "Thrissur, Munnar, Thekkady, Kovalam, Trivandrum, Alleppey, Kochi",
      places: ["Thrissur", "Munnar", "Thekkady", "Kovalam", "Trivandrum", "Alleppey", "Kochi"],
      bestSeason: "Sep - May",
      price: 38999,
      originalPrice: 44999,
      discount: "13% Off",
      rating: 4.9,
      reviews: 180,
      image: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759489125/Guruvayoor_Temple_1_ofddy3.jpg",
      images: [
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759489125/Guruvayoor_Temple_1_ofddy3.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1760193264/munnar_mycc44.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488360/kovalam-1_trhrck.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488068/padmanabha-swamy1_kebsa2.jpg"
      ],
      description: "The ultimate Kerala experience covering temples, hills, beaches, and backwaters.",
      highlights: [
        "Day 1: Thrissur - Guruvayurappan Temple, drive to Munnar with waterfalls",
        "Day 2: Munnar comprehensive sightseeing",
        "Day 3: Thekkady wildlife and spice plantations",
        "Day 4: Thekkady cultural shows and adventure activities",
        "Day 5: Kovalam beach relaxation and sunset",
        "Day 6: Trivandrum temple and palace visit",
        "Day 7: Alleppey via Varkala Beach and temple",
        "Day 8: Alleppey sightseeing and houseboat stay",
        "Day 9: Kochi full day sightseeing",
        "Day 10: Departure from Kochi"
      ],
      itinerary: [
        { day: "Day 1", title: "Temple & Hills", description: "Arrive in Thrissur, visit Guruvayurappan Temple, drive to Munnar via waterfalls." },
        { day: "Day 2", title: "Munnar Exploration", description: "Rose Garden, Tea Museum, Mattupetty Dam, Echo Point, Eravikulam National Park." },
        { day: "Day 3", title: "Thekkady Wildlife", description: "Transfer to Thekkady, boat safari, spice plantation visit." },
        { day: "Day 4", title: "Cultural Thekkady", description: "Kathakali show, Kalaripayattu martial arts, jeep safari, zipline." },
        { day: "Day 5", title: "Kovalam Beaches", description: "Transfer to Kovalam, beach relaxation, sunset viewing." },
        { day: "Day 6", title: "Trivandrum Heritage", description: "Padmanabhaswamy Temple, Raja Ravi Varma Palace visit." },
        { day: "Day 7", title: "Coastal Journey", description: "Drive to Alleppey via Varkala Beach and Ambalappuzha Temple." },
        { day: "Day 8", title: "Alleppey Experience", description: "Beach visit, gardens, overnight houseboat stay." },
        { day: "Day 9", title: "Kochi Sightseeing", description: "Fort Kochi, Dutch Palace, Jew Town, Chinese Fishing Nets, Marine Drive." },
        { day: "Day 10", title: "Departure", description: "Transfer to Kochi for departure." }
      ],
      inclusions: ["Hotels", "Meals", "Transfers", "Sightseeing", "Houseboat Stay", "Cultural Shows", "Adventure Activities"],
      exclusions: ["Flights", "Personal expenses", "Travel insurance"]
    },
    {
      id: "majestic-madurai",
      name: "Majestic Madurai Tour",
      duration: "05 Nights / 06 Days",
      destination: "Madurai, Rameswaram, Kanyakumari, Trivandrum",
      places: ["Madurai", "Rameswaram", "Kanyakumari", "Trivandrum"],
      bestSeason: "Year Round",
      price: 22999,
      originalPrice: 26999,
      discount: "15% Off",
      rating: 4.7,
      reviews: 110,
      image: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488068/padmanabha-swamy1_kebsa2.jpg",
      images: [
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488068/padmanabha-swamy1_kebsa2.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488360/kovalam-1_trhrck.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759489125/Guruvayoor_Temple_1_ofddy3.jpg"
      ],
      description: "Explore the cultural and spiritual heart of Tamil Nadu with beach extensions.",
      highlights: [
        "Day 1: Madurai arrival and evening relaxation",
        "Day 2: Madurai cultural tour - Meenakshi Temple, palaces, museums",
        "Day 3: Rameswaram exploration - Beaches, temples, and border visit",
        "Day 4: Kanyakumari - Vivekananda Rock, temples, and sunset",
        "Day 5: Trivandrum - Kovalam Beach and Padmanabhaswamy Temple",
        "Day 6: Departure from Trivandrum"
      ],
      itinerary: [
        { day: "Day 1", title: "Madurai Arrival", description: "Arrive in Madurai at 6:35 PM, transfer to hotel, evening relaxation." },
        { day: "Day 2", title: "Madurai Heritage", description: "Meenakshi Temple, Thirumalai Nayak Palace, Gandhi Museum, Alagar Koil Temple." },
        { day: "Day 3", title: "Rameswaram Spiritual", description: "Pamban Beach, APJ Abdul Kalam Gallery, Dhanushkodi ruins, Rameshwaram Temple." },
        { day: "Day 4", title: "Kanyakumari Experience", description: "Vivekananda Rock, Handimandapam, Kanyakumari Devi Temple, sunset viewing." },
        { day: "Day 5", title: "Trivandrum & Beaches", description: "Transfer to Trivandrum, Kovalam Beach, Padmanabhaswamy Temple visit." },
        { day: "Day 6", title: "Departure", description: "Transfer to Trivandrum airport/station for departure." }
      ],
      inclusions: ["Hotels", "Meals", "Transfers", "Sightseeing", "Boat Rides"],
      exclusions: ["Flights", "Personal expenses", "Travel insurance"]
    }
  ];

  const packages = allPackages.slice(0, 6); // Get first 6 packages for the homepage

  return ( 
    <section id={id} className="max-w-7xl mx-auto mt-6 px-4 sm:px-6 py-8 md:py-16">
      <div className="text-center mb-8">
        <div className="inline-flex items-center px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium mb-2 md:mb-4">
          Omkar Exclusive Packages 
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-gray-800 mb-1 md:mb-6 tracking-wider uppercase">
          Curated Kerala Experiences
        </h1>
        <p className="text-sm md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
          Curated Kerala experiences with local insights, premium stays & personalized service.
        </p>
      </div>

      {/* Mobile Horizontal Scroll Container */}
      <div className="lg:hidden">
        <div className="flex overflow-x-auto pb-6 -mx-4 px-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <div className="flex space-x-6">
            {packages.map((pkg, index) => (
              <div 
                key={pkg.id} 
                className="w-80 flex-shrink-0 snap-start h-full"
              >
                <TourPackageCard pkg={pkg} />
              </div>
            ))}
          </div>
        </div>
        
        {/* Scroll Indicator for Mobile */}
        <div className="flex justify-center mt-1 space-x-2 lg:hidden">
          {packages.map((_, index) => (
            <div 
              key={index}
              className="w-2 h-2 rounded-full bg-gray-300 transition-all duration-300"
            />
          ))}
        </div>
      </div>

      {/* Desktop Grid Layout with Equal Height Cards */}
      <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
        {packages.map((pkg, index) => (
          <div key={pkg.id} className="h-full flex">
            <TourPackageCard pkg={pkg} />
          </div>
        ))}
      </div>

      {/* View All Packages CTA */}
      <div className="text-center mt-8">
        <Link 
          to="/packages" 
          className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-emerald-500 text-emerald-600 font-semibold hover:bg-emerald-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl text-sm sm:text-base"
        >
          View All {allPackages.length}+ Packages
          <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </Link>
      </div>

      {/* Trust Indicators */}
      <div className="mt-6 sm:mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 text-center px-4">
        <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm border border-gray-100">
          <div className="w-6 h-6 sm:w-7 sm:h-7  rounded-full flex items-center justify-center mx-auto mb-1 sm:mb-2">
            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
          </div>
          <h3 className="text-xs sm:text-sm font-semibold mb-1">4.8/5 Rating</h3>
          <p className="text-gray-600 text-xs">Rated excellent by 500+ travelers</p>
        </div>
        <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm border border-gray-100">
          <div className="w-6 h-6 sm:w-7 sm:h-7  rounded-full flex items-center justify-center mx-auto mb-1 sm:mb-2">
            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <h3 className="text-xs sm:text-sm font-semibold mb-1">Best Price Guarantee</h3>
          <p className="text-gray-600 text-xs">Get the best value for your money</p>
        </div>
        <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm border border-gray-100 col-span-2 sm:col-span-1">
          <div className="w-6 h-6 sm:w-7 sm:h-7  rounded-full flex items-center justify-center mx-auto mb-1 sm:mb-2">
            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
            </svg>
          </div>
          <h3 className="text-xs sm:text-sm font-semibold mb-1">24/7 Support</h3>
          <p className="text-gray-600 text-xs">Dedicated travel support throughout</p>
        </div>
      </div>
    </section>
  );
};

export default TourPackages;