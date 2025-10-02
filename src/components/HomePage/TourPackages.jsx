import React from "react";
import { Link } from 'react-router-dom';
import TourPackageCard from '../packages/TourPackageCard';

const TourPackages = ({ id = "packages" }) => {
  // Direct package data (same structure as other components)
  const allPackages = [
    {
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
      images: [
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1526761122244-c85047c1e4bb?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1552465018-69ad1d81d952?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1565498258066-166b3a4eb9e2?auto=format&fit=crop&w=1200&q=80"
      ],
      description: "Experience the ultimate Kerala getaway with our Backwaters & Beaches tour. This carefully crafted 6-day journey takes you through the serene backwaters of Alleppey and the stunning beaches of Kovalam.",
      detailedDescription: "Our Kerala Backwaters & Beaches package offers an unforgettable journey through God's Own Country. Begin your adventure in Alleppey, often called the 'Venice of the East,' where you'll cruise through tranquil backwaters on traditional houseboats.",
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
          description: "Full day houseboat cruise through Kerala's famous backwaters. Experience peaceful journey through green palm-lined waterways, traditional villages, and rich wildlife."
        },
        {
          day: "Day 3",
          title: "Travel to Kovalam",
          description: "Check out from Alleppey and travel to the beautiful beach destination of Kovalam. Check into your beach resort and enjoy the evening at leisure."
        },
        {
          day: "Day 4",
          title: "Kovalam Beach Experience",
          description: "Full day to enjoy Kovalam's famous beaches. Try water sports, relax on the golden sands, and visit the iconic lighthouse."
        },
        {
          day: "Day 5",
          title: "Thiruvananthapuram Sightseeing",
          description: "Explore the capital city with visits to Padmanabhaswamy Temple, Napier Museum, and Kowdiar Palace."
        },
        {
          day: "Day 6",
          title: "Departure",
          description: "After breakfast, check out from the hotel and transfer to Thiruvananthapuram International Airport for your departure."
        }
      ],
      inclusions: [
        "Accommodation in 3-star hotels and houseboat",
        "Daily breakfast and all meals on houseboat",
        "AC vehicle for all transfers & sightseeing",
        "Alleppey backwater houseboat cruise",
        "Kovalam beach resort accommodation",
        "All applicable taxes"
      ],
      exclusions: [
        "Flight tickets",
        "Lunch and dinner (except on houseboat)",
        "Premium water sports activities",
        "Personal expenses",
        "Travel insurance",
        "Anything not mentioned in inclusions"
      ]
    },
    {
      id: "munnar-tea-plantations",
      name: "Munnar Tea Plantations Tour",
      duration: "04 Nights / 05 Days",
      destination: "Munnar, Thekkady",
      bestSeason: "Aug - May",
      price: "18,999",
      originalPrice: "22,999",
      discount: "Special 17% Off",
      rating: "4.8",
      reviews: "67",
      image: "https://images.unsplash.com/photo-1580752300992-559f8e0734e0?auto=format&fit=crop&w=1200&q=80",
      images: [
        "https://images.unsplash.com/photo-1580752300992-559f8e0734e0?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1578305998411-8c7c3fe8f8f2?auto=format&fit=crop&w=1200&q=80"
      ],
      description: "Explore the misty hills and sprawling tea plantations of Munnar. Experience the beauty of Kerala's hill stations with this immersive 5-day tour.",
      detailedDescription: "Discover the enchanting hill station of Munnar, famous for its tea plantations, lush greenery, and cool climate. This package takes you through the best of Munnar's natural beauty.",
      highlights: [
        "Visit Tata Tea Museum",
        "Eravikulam National Park",
        "Tea plantation walking tour",
        "Mattupetty Dam and Lake",
        "Spice garden visit in Thekkady",
        "Kathakali dance performance"
      ],
      itinerary: [
        {
          day: "Day 1",
          title: "Arrival in Munnar",
          description: "Arrive at Cochin Airport and transfer to Munnar. Check into hotel and rest of the day at leisure."
        },
        {
          day: "Day 2",
          title: "Munnar Sightseeing",
          description: "Full day exploring Munnar's attractions including tea plantations, Eravikulam National Park, and Mattupetty Dam."
        }
      ],
      inclusions: [
        "Accommodation in 3-star hotels",
        "Daily breakfast",
        "AC vehicle for transfers & sightseeing",
        "All entry tickets",
        "All applicable taxes"
      ],
      exclusions: [
        "Flight tickets",
        "Lunch and dinner",
        "Personal expenses",
        "Travel insurance"
      ]
    },
    {
      id: "complete-kerala-experience",
      name: "Complete Kerala Experience",
      duration: "07 Nights / 08 Days",
      destination: "Munnar, Thekkady, Alleppey, Kovalam",
      bestSeason: "Sep - Apr",
      price: "35,999",
      originalPrice: "42,999",
      discount: "Special 16% Off",
      rating: "4.9",
      reviews: "124",
      image: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&w=1200&q=80",
      images: [
        "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&w=1200&q=80"
      ],
      description: "The ultimate Kerala tour covering hill stations, wildlife, backwaters, and beaches. Experience everything Kerala has to offer in one comprehensive package.",
      detailedDescription: "This comprehensive package gives you the complete Kerala experience - from misty hills to serene backwaters and golden beaches.",
      highlights: [
        "Munnar tea gardens",
        "Thekkady wildlife sanctuary",
        "Alleppey houseboat stay",
        "Kovalam beach relaxation",
        "Spice plantation tour",
        "Traditional cultural shows"
      ],
      itinerary: [
        {
          day: "Day 1",
          title: "Arrival in Munnar",
          description: "Arrive at Cochin Airport and transfer to Munnar. Check into hotel."
        },
        {
          day: "Day 2",
          title: "Munnar Exploration",
          description: "Full day exploring tea plantations and local attractions."
        }
      ],
      inclusions: [
        "Accommodation in 3-star hotels and houseboat",
        "Daily breakfast and all meals on houseboat",
        "AC vehicle for entire tour",
        "All entry tickets and activities",
        "All applicable taxes"
      ],
      exclusions: [
        "Flight tickets",
        "Lunch and dinner (except on houseboat)",
        "Personal expenses",
        "Travel insurance"
      ]
    },
    {
      id: "kerala-honeymoon-special",
      name: "Kerala Honeymoon Special",
      duration: "06 Nights / 07 Days",
      destination: "Munnar, Alleppey, Kovalam",
      bestSeason: "Oct - Mar",
      price: "28,999",
      originalPrice: "34,999",
      discount: "Special 17% Off",
      rating: "4.9",
      reviews: "156",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      images: [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
      ],
      description: "Romantic Kerala getaway perfect for honeymooners. Private experiences, luxury stays, and unforgettable moments.",
      highlights: [
        "Private houseboat cruise",
        "Candlelight dinners",
        "Luxury resort stays",
        "Couple spa treatments",
        "Private sightseeing"
      ],
      inclusions: [
        "Luxury accommodation",
        "All meals included",
        "Private AC vehicle",
        "Romantic experiences",
        "All taxes"
      ],
      exclusions: [
        "Flight tickets",
        "Personal expenses",
        "Travel insurance"
      ]
    },
    {
      id: "kerala-wildlife-adventure",
      name: "Kerala Wildlife Adventure",
      duration: "05 Nights / 06 Days",
      destination: "Thekkady, Munnar",
      bestSeason: "Nov - Apr",
      price: "21,999",
      originalPrice: "26,999",
      discount: "Special 19% Off",
      rating: "4.6",
      reviews: "78",
      image: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=1200&q=80",
      images: [
        "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=1200&q=80"
      ],
      description: "Thrilling wildlife experience in Kerala's best national parks and sanctuaries. Perfect for nature and adventure lovers.",
      highlights: [
        "Periyar Wildlife Sanctuary",
        "Jungle safari",
        "Bamboo rafting",
        "Spice plantation tour",
        "Elephant ride experience"
      ],
      inclusions: [
        "Jungle resort accommodation",
        "All safari charges",
        "Naturalist guide",
        "All activities included",
        "All taxes"
      ],
      exclusions: [
        "Flight tickets",
        "Personal expenses",
        "Travel insurance"
      ]
    },
    {
      id: "kerala-cultural-heritage",
      name: "Kerala Cultural Heritage",
      duration: "04 Nights / 05 Days",
      destination: "Kochi, Thrissur, Guruvayur",
      bestSeason: "Year Round",
      price: "16,999",
      originalPrice: "20,999",
      discount: "Special 19% Off",
      rating: "4.5",
      reviews: "92",
      image: "https://images.unsplash.com/photo-1587132135057-48ae4dc7fa32?auto=format&fit=crop&w=1200&q=80",
      images: [
        "https://images.unsplash.com/photo-1587132135057-48ae4dc7fa32?auto=format&fit=crop&w=1200&q=80"
      ],
      description: "Immerse yourself in Kerala's rich cultural heritage with temple visits, traditional art forms, and historical sites.",
      highlights: [
        "Kathakali dance show",
        "Traditional temple visits",
        "Portuguese architecture",
        "Local cuisine experience",
        "Cultural workshops"
      ],
      inclusions: [
        "Heritage hotel stays",
        "Cultural show tickets",
        "Expert local guide",
        "All entry fees",
        "All taxes"
      ],
      exclusions: [
        "Flight tickets",
        "Personal expenses",
        "Travel insurance"
      ]
    }
  ];

  const packages = allPackages.slice(0, 6); // Get first 6 packages for the homepage

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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {packages.map((pkg, index) => (
          <TourPackageCard key={pkg.id} pkg={pkg} />
        ))}
      </div>

      {/* View All Packages CTA */}
      <div className="text-center mt-12">
        <Link 
          to="/packages" 
          className="inline-flex items-center px-8 py-4 border-2 border-emerald-500 text-emerald-600 rounded-xl font-semibold hover:bg-emerald-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
        >
          View All {allPackages.length}+ Packages
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </Link>
      </div>

      {/* Trust Indicators */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
          <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-xl">⭐</span>
          </div>
          <h3 className="text-lg font-semibold mb-2">4.8/5 Rating</h3>
          <p className="text-gray-600 text-sm">Rated excellent by 500+ travelers</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
          <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-xl">🏆</span>
          </div>
          <h3 className="text-lg font-semibold mb-2">Best Price Guarantee</h3>
          <p className="text-gray-600 text-sm">Get the best value for your money</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
          <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-xl">🔒</span>
          </div>
          <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
          <p className="text-gray-600 text-sm">Dedicated travel support throughout</p>
        </div>
      </div>
    </section>
  );
};

export default TourPackages;