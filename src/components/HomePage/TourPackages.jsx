import React from "react";
import { Link } from 'react-router-dom';
import TourPackageCard from '../packages/TourPackageCard';

const TourPackages = ({ id = "packages" }) => {
  // All package data from the screenshots
  const allPackages = [
    {
      id: "essence-of-kerala",
      name: "Essence of Kerala Tour",
      duration: "06 Nights / 07 Days",
      destination: "Kochi, Munnar, Thekkady, Alleppey",
      places: ["Kochi", "Munnar", "Thekkady", "Alleppey"],
      bestSeason: "Sep - May",
      price: 22999,
      originalPrice: 26999,
      discount: "15% Off",
      rating: 4.7,
      reviews: 120,
      image: "/images/essence-kerala.jpg",
      images: ["/images/essence-kerala.jpg", "/images/essence-kerala-2.jpg", "/images/essence-kerala-3.jpg"],
      description: "Experience the essence of Kerala through its culture, backwaters, and hill stations.",
      highlights: [
        "Day 1: Arrival in Kochi - Transfer to hotel and leisure",
        "Day 2: Kochi Sightseeing - Fort Kochi, Chinese Fishing Nets, Jew Town",
        "Day 3: Drive to Munnar - En route visit waterfalls",
        "Day 4: Munnar Sightseeing - Tea Museum, Mattupetty Dam, Echo Point",
        "Day 5: Proceed to Thekkady - Spice plantation visit and cultural show",
        "Day 6: Houseboat cruise in Alleppey - Traditional Kerala meals onboard",
        "Day 7: Departure from Kochi - Transfer to Kochi for departure"
      ],
      itinerary: [
        { day: "Day 1", title: "Arrival in Kochi", description: "Transfer to hotel and leisure." },
        { day: "Day 2", title: "Kochi Sightseeing", description: "Fort Kochi, Chinese Fishing Nets, Jew Town." },
        { day: "Day 3", title: "Drive to Munnar", description: "En route visit waterfalls." },
        { day: "Day 4", title: "Munnar Sightseeing", description: "Tea Museum, Mattupetty Dam, Echo Point." },
        { day: "Day 5", title: "Proceed to Thekkady", description: "Spice plantation visit and cultural show." },
        { day: "Day 6", title: "Houseboat cruise in Alleppey", description: "Traditional Kerala meals onboard." },
        { day: "Day 7", title: "Departure from Kochi", description: "Transfer to Kochi for departure." }
      ],
      inclusions: ["Hotels", "Meals", "Transfers", "Sightseeing", "Houseboat Stay"],
      exclusions: ["Flights", "Personal expenses", "Travel insurance"]
    },
    {
      id: "backwaters-and-beaches",
      name: "Backwaters & Beaches of Kerala",
      duration: "07 Nights / 08 Days",
      destination: "Kochi, Munnar, Thekkady, Alleppey, Kovalam, Trivandrum",
      places: ["Kochi", "Munnar", "Thekkady", "Alleppey", "Kovalam", "Trivandrum"],
      bestSeason: "Sep - May",
      price: 25999,
      originalPrice: 29999,
      discount: "13% Off",
      rating: 4.8,
      reviews: 150,
      image: "/images/backwaters-beaches.jpg",
      images: ["/images/backwaters-beaches.jpg", "/images/backwaters-beaches-2.jpg", "/images/backwaters-beaches-3.jpg"],
      description: "A perfect blend of Kerala's backwaters, beaches, and hill stations.",
      highlights: [
        "Day 1: Arrival in Kochi - Transfer to Munnar",
        "Day 2: Munnar Sightseeing - Tea plantations, Eravikulam National Park",
        "Day 3: Drive to Thekkady - Boat ride in Periyar Wildlife Sanctuary",
        "Day 4: Spice Plantation Tour - Cultural program in Thekkady",
        "Day 5: Houseboat Cruise in Alleppey - Enjoy traditional Kerala meals",
        "Day 6: Visit Kovalam - Relax at the beach",
        "Day 7: Explore Trivandrum - Visit Padmanabhaswamy Temple and Museum",
        "Day 8: Departure - Transfer to Trivandrum for departure"
      ],
      itinerary: [
        { day: "Day 1", title: "Arrival in Kochi", description: "Transfer to Munnar." },
        { day: "Day 2", title: "Munnar Sightseeing", description: "Tea plantations, Eravikulam National Park." },
        { day: "Day 3", title: "Drive to Thekkady", description: "Boat ride in Periyar Wildlife Sanctuary." },
        { day: "Day 4", title: "Spice Plantation Tour", description: "Cultural program in Thekkady." },
        { day: "Day 5", title: "Houseboat Cruise in Alleppey", description: "Enjoy traditional Kerala meals." },
        { day: "Day 6", title: "Visit Kovalam", description: "Relax at the beach." },
        { day: "Day 7", title: "Explore Trivandrum", description: "Visit Padmanabhaswamy Temple and Museum." },
        { day: "Day 8", title: "Departure", description: "Transfer to Trivandrum for departure." }
      ],
      inclusions: ["Houseboat Stay", "Meals", "Transfers", "Sightseeing"],
      exclusions: ["Flights", "Personal expenses", "Travel insurance"]
    },
    {
      id: "cultural-trails",
      name: "Cultural Trails of Kerala",
      duration: "07 Nights / 08 Days",
      destination: "Kochi, Munnar, Thekkady, Kumarakom, Alleppey",
      places: ["Kochi", "Munnar", "Thekkady", "Kumarakom", "Alleppey"],
      bestSeason: "Sep - May",
      price: 24999,
      originalPrice: 28999,
      discount: "14% Off",
      rating: 4.9,
      reviews: 180,
      image: "/images/cultural-trails.jpg",
      images: ["/images/cultural-trails.jpg", "/images/cultural-trails-2.jpg", "/images/cultural-trails-3.jpg"],
      description: "Discover the cultural richness of Kerala with a visit to heritage sites and backwaters.",
      highlights: [
        "Day 1: Arrival in Kochi - Transfer to hotel and relax",
        "Day 2: Explore Kochi - Visit Fort Kochi, Mattancherry Palace, Kathakali show",
        "Day 3: Drive to Munnar - En route visit Cheeyappara Waterfalls",
        "Day 4: Munnar Sightseeing - Tea estates, Blossom Park, Top Station",
        "Day 5: Proceed to Thekkady - Wildlife boat safari",
        "Day 6: Visit Kumarakom - Explore backwaters and bird sanctuary",
        "Day 7: Houseboat in Kumarakom - Relax on the houseboat",
        "Day 8: Departure - Transfer to Kochi for departure"
      ],
      itinerary: [
        { day: "Day 1", title: "Arrival in Kochi", description: "Transfer to hotel and relax." },
        { day: "Day 2", title: "Explore Kochi", description: "Visit Fort Kochi, Mattancherry Palace, Kathakali show." },
        { day: "Day 3", title: "Drive to Munnar", description: "En route visit Cheeyappara Waterfalls." },
        { day: "Day 4", title: "Munnar Sightseeing", description: "Tea estates, Blossom Park, Top Station." },
        { day: "Day 5", title: "Proceed to Thekkady", description: "Wildlife boat safari." },
        { day: "Day 6", title: "Visit Kumarakom", description: "Explore backwaters and bird sanctuary." },
        { day: "Day 7", title: "Houseboat in Kumarakom", description: "Relax on the houseboat." },
        { day: "Day 8", title: "Departure", description: "Transfer to Kochi for departure." }
      ],
      inclusions: ["Houseboat Stay", "Meals", "Transfers", "Sightseeing", "Wildlife Safari"],
      exclusions: ["Flights", "Personal expenses", "Travel insurance"]
    },
    {
      id: "family-getaway",
      name: "Family Getaway to Kerala",
      duration: "06 Nights / 07 Days",
      destination: "Kochi, Munnar, Thekkady, Alleppey, Kovalam, Trivandrum",
      places: ["Kochi", "Munnar", "Thekkady", "Alleppey", "Kovalam", "Trivandrum"],
      bestSeason: "Sep - May",
      price: 23999,
      originalPrice: 27999,
      discount: "14% Off",
      rating: 4.8,
      reviews: 95,
      image: "/images/family-getaway.jpg",
      images: ["/images/family-getaway.jpg", "/images/family-getaway-2.jpg", "/images/family-getaway-3.jpg"],
      description: "Perfect family vacation with kid-friendly activities and comfortable stays.",
      highlights: [
        "Day 1: Arrival in Kochi - Transfer to Munnar",
        "Day 2: Munnar Sightseeing - Tea Museum, Rose Garden, Mattupetty Dam",
        "Day 3: Drive to Thekkady - Enjoy boating in Periyar Lake",
        "Day 4: Transfer to Alleppey - Overnight stay in houseboat",
        "Day 5: Houseboat to Kovalam - Relax at beach",
        "Day 6: Kovalam Exploration - Visit Lighthouse Beach and explore Trivandrum city",
        "Day 7: Departure - Transfer to Trivandrum for departure"
      ],
      itinerary: [
        { day: "Day 1", title: "Arrival in Kochi", description: "Transfer to Munnar." },
        { day: "Day 2", title: "Munnar Sightseeing", description: "Tea Museum, Rose Garden, Mattupetty Dam." },
        { day: "Day 3", title: "Drive to Thekkady", description: "Enjoy boating in Periyar Lake." },
        { day: "Day 4", title: "Transfer to Alleppey", description: "Overnight stay in houseboat." },
        { day: "Day 5", title: "Houseboat to Kovalam", description: "Relax at beach." },
        { day: "Day 6", title: "Kovalam Exploration", description: "Visit Lighthouse Beach and explore Trivandrum city." },
        { day: "Day 7", title: "Departure", description: "Transfer to Trivandrum for departure." }
      ],
      inclusions: ["Family-friendly hotels", "Meals", "Transfers", "Sightseeing", "Houseboat Stay"],
      exclusions: ["Flights", "Personal expenses", "Travel insurance"]
    },
    {
      id: "nature-photography",
      name: "Nature & Photography Tour of Kerala",
      duration: "06 Nights / 07 Days",
      destination: "Kochi, Munnar, Thekkady, Alleppey, Marari Beach",
      places: ["Kochi", "Munnar", "Thekkady", "Alleppey", "Marari Beach"],
      bestSeason: "Sep - May",
      price: 26999,
      originalPrice: 30999,
      discount: "13% Off",
      rating: 4.9,
      reviews: 110,
      image: "/images/nature-photography.jpg",
      images: ["/images/nature-photography.jpg", "/images/nature-photography-2.jpg", "/images/nature-photography-3.jpg"],
      description: "Capture the breathtaking beauty of Kerala's landscapes and wildlife.",
      highlights: [
        "Day 1: Arrival in Kochi - Transfer to Munnar",
        "Day 2: Munnar Photography - Tea gardens, Echo Point, photo sessions",
        "Day 3: Sunrise & Wildlife - Munnar sunrise view, drive to Thekkady for wildlife photography",
        "Day 4: Cultural Photography - Spice plantation visit and traditional Kerala martial arts show",
        "Day 5: Backwaters Sunset - Drive to Alleppey, board houseboat, enjoy sunset photography",
        "Day 6: Beach Photography - Alleppey to Marari Beach, beach photography and leisure time",
        "Day 7: Departure - Transfer to Kochi for departure"
      ],
      itinerary: [
        { day: "Day 1", title: "Arrival in Kochi", description: "Transfer to Munnar." },
        { day: "Day 2", title: "Munnar Photography", description: "Tea gardens, Echo Point, photo sessions." },
        { day: "Day 3", title: "Sunrise & Wildlife", description: "Munnar sunrise view, drive to Thekkady for wildlife photography." },
        { day: "Day 4", title: "Cultural Photography", description: "Spice plantation visit and traditional Kerala martial arts show." },
        { day: "Day 5", title: "Backwaters Sunset", description: "Drive to Alleppey, board houseboat, enjoy sunset photography." },
        { day: "Day 6", title: "Beach Photography", description: "Alleppey to Marari Beach, beach photography and leisure time." },
        { day: "Day 7", title: "Departure", description: "Transfer to Kochi for departure." }
      ],
      inclusions: ["Photography guidance", "Meals", "Transfers", "Sightseeing", "Houseboat Stay"],
      exclusions: ["Flights", "Camera equipment", "Personal expenses", "Travel insurance"]
    },
    {
      id: "biking-tour",
      name: "Kerala Backwaters & Hills Biking Tour",
      duration: "06 Nights / 07 Days",
      destination: "Kochi, Athirappilly, Munnar, Thekkady, Alleppey",
      places: ["Kochi", "Athirappilly", "Munnar", "Thekkady", "Alleppey"],
      bestSeason: "Nov - Mar",
      price: 28999,
      originalPrice: 32999,
      discount: "12% Off",
      rating: 4.7,
      reviews: 85,
      image: "/images/biking-tour.jpg",
      images: ["/images/biking-tour.jpg", "/images/biking-tour-2.jpg", "/images/biking-tour-3.jpg"],
      description: "An adventurous biking journey through Kerala's hills and backwaters.",
      highlights: [
        "Day 1: Arrival in Kochi - Bike orientation and leisure ride around Fort Kochi",
        "Day 2: Ride to Athirappilly - Explore Athirappilly Falls and surrounding forests",
        "Day 3: Kochi to Munnar - Scenic bike ride through Western Ghats",
        "Day 4: Munnar Exploration - Tea plantations and Eravikulam National Park",
        "Day 5: Ride to Thekkady - Spice route trail and cultural activities",
        "Day 6: Thekkady to Alleppey - Explore backwaters and relax",
        "Day 7: Departure - Transfer to Kochi for departure"
      ],
      itinerary: [
        { day: "Day 1", title: "Arrival in Kochi", description: "Bike orientation and leisure ride around Fort Kochi." },
        { day: "Day 2", title: "Ride to Athirappilly", description: "Explore Athirappilly Falls and surrounding forests." },
        { day: "Day 3", title: "Kochi to Munnar", description: "Scenic bike ride through Western Ghats." },
        { day: "Day 4", title: "Munnar Exploration", description: "Tea plantations and Eravikulam National Park." },
        { day: "Day 5", title: "Ride to Thekkady", description: "Spice route trail and cultural activities." },
        { day: "Day 6", title: "Thekkady to Alleppey", description: "Explore backwaters and relax." },
        { day: "Day 7", title: "Departure", description: "Transfer to Kochi for departure." }
      ],
      inclusions: ["Bike rental", "Safety gear", "Meals", "Transfers", "Sightseeing"],
      exclusions: ["Flights", "Personal expenses", "Travel insurance"]
    }
  ];

  const packages = allPackages.slice(0, 6); // Get first 6 packages for the homepage

  return ( 
    <section id={id} className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-32">
      <div className="text-center mb-8">
        <div className="inline-flex items-center px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium mb-4">
          🏆 Omkar Exclusive Packages 
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-gray-800 mb-6 tracking-wider uppercase">
          Curated Kerala Experiences
        </h1>
        <p className="text-md md:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed px-4">
          Curated Kerala experiences with local insights, premium stays & personalized service.
        </p>
      </div>

      {/* Mobile Horizontal Scroll Container */}
      <div className="lg:hidden">
        <div className="flex overflow-x-auto pb-6 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide">
          <div className="flex space-x-6">
            {packages.map((pkg, index) => (
              <div 
                key={pkg.id} 
                className="w-80 flex-shrink-0 snap-start" // Fixed width for mobile cards
              >
                <TourPackageCard pkg={pkg} />
              </div>
            ))}
          </div>
        </div>
        
        {/* Scroll Indicator for Mobile */}
        <div className="flex justify-center mt-4 space-x-2 lg:hidden">
          {packages.map((_, index) => (
            <div 
              key={index}
              className="w-2 h-2 rounded-full bg-gray-300 transition-all duration-300"
            />
          ))}
        </div>
      </div>

      {/* Desktop Grid Layout */}
      <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {packages.map((pkg, index) => (
          <TourPackageCard key={pkg.id} pkg={pkg} />
        ))}
      </div>

      {/* View All Packages CTA */}
      <div className="text-center mt-12">
        <Link 
          to="/packages" 
          className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-emerald-500 text-emerald-600 rounded-xl font-semibold hover:bg-emerald-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl text-sm sm:text-base"
        >
          View All {allPackages.length}+ Packages
          <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </Link>
      </div>

      {/* Trust Indicators */}
      <div className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 text-center px-4">
        <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-md sm:shadow-lg border border-gray-100">
          <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4">
            <span className="text-base sm:text-lg md:text-xl">⭐</span>
          </div>
          <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-1 sm:mb-2">4.8/5 Rating</h3>
          <p className="text-gray-600 text-xs sm:text-sm">Rated excellent by 500+ travelers</p>
        </div>
        <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-md sm:shadow-lg border border-gray-100">
          <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4">
            <span className="text-base sm:text-lg md:text-xl">🏆</span>
          </div>
          <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-1 sm:mb-2">Best Price Guarantee</h3>
          <p className="text-gray-600 text-xs sm:text-sm">Get the best value for your money</p>
        </div>
        <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-md sm:shadow-lg border border-gray-100">
          <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4">
            <span className="text-base sm:text-lg md:text-xl">🔒</span>
          </div>
          <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-1 sm:mb-2">24/7 Support</h3>
          <p className="text-gray-600 text-xs sm:text-sm">Dedicated travel support throughout</p>
        </div>
      </div>
    </section>
  );
};

export default TourPackages;