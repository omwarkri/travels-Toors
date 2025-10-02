import React, { useState } from "react";
import { useParams, Link } from 'react-router-dom';
import SEOHead from "../components/common/SEOHead";
import Footer from "../components/common/Footer";

const SinglePackagePage = () => {
  const { packageId } = useParams();
  console.log("Package ID from URL:", packageId);
  const [selectedImage, setSelectedImage] = useState(0);
  
  // Direct package data (same structure as AllPackagesPage)
  const packageData = [
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
        },
        {
          day: "Day 3",
          title: "Thekkady Wildlife Experience",
          description: "Travel to Thekkady and enjoy jungle safari in Periyar Wildlife Sanctuary."
        },
        {
          day: "Day 4",
          title: "Spice Plantation Tour",
          description: "Visit spice plantations and enjoy cultural shows in the evening."
        },
        {
          day: "Day 5",
          title: "Departure",
          description: "After breakfast, check out and transfer to Cochin Airport for departure."
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
        },
        {
          day: "Day 3",
          title: "Travel to Thekkady",
          description: "Transfer to Thekkady, evening jungle safari."
        },
        {
          day: "Day 4",
          title: "Thekkady to Alleppey",
          description: "Morning spice plantation tour, then travel to Alleppey."
        },
        {
          day: "Day 5",
          title: "Alleppey Backwaters",
          description: "Full day houseboat cruise through backwaters."
        },
        {
          day: "Day 6",
          title: "Alleppey to Kovalam",
          description: "Travel to Kovalam, check into beach resort."
        },
        {
          day: "Day 7",
          title: "Kovalam Beach Day",
          description: "Relax at Kovalam beaches and visit local attractions."
        },
        {
          day: "Day 8",
          title: "Departure",
          description: "Transfer to Thiruvananthapuram Airport for departure."
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

  // CORRECTED: Use find() to get the package by ID
  const pkg = packageData.find(pkg => pkg.id === packageId);
  
  console.log("Found package:", pkg);

  // If package not found, show error
  if (!pkg) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Package Not Found</h1>
          <p className="text-gray-600 mb-8">The package you're looking for doesn't exist.</p>
          <Link 
            to="/packages"
            className="inline-flex items-center px-6 py-3 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-600 transition duration-300"
          >
            Browse All Packages
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen">
      <SEOHead 
        title={`${pkg.name} | ${pkg.duration} | Omkar Tour and Travels`}
        description={`${pkg.description} Book ${pkg.name} - ${pkg.duration} starting at ₹${pkg.price}.`}
        keywords={`${pkg.destination}, Kerala tour packages, ${pkg.name}, ${pkg.duration}`}
      />
      
      {/* Package Header */}
      <section className="relative h-96 bg-gray-900">
        <img
          src={pkg.images ? pkg.images[selectedImage] : pkg.image}
          alt={pkg.name}
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
            {/* Image Gallery */}
            {pkg.images && pkg.images.length > 1 && (
              <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                <div className="flex flex-col space-y-4">
                  {/* Main Image */}
                  <div className="rounded-xl overflow-hidden">
                    <img
                      src={pkg.images[selectedImage]}
                      alt={pkg.name}
                      className="w-full h-80 object-cover"
                    />
                  </div>
                  
                  {/* Thumbnail Gallery */}
                  <div className="flex space-x-3 overflow-x-auto pb-2">
                    {pkg.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition duration-200 ${
                          selectedImage === index ? 'border-emerald-500' : 'border-gray-200'
                        }`}
                      >
                        <img
                          src={image}
                          alt={`${pkg.name} view ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Package Description */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6">Package Overview</h2>
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 mb-4">{pkg.description}</p>
                {pkg.detailedDescription && (
                  <p className="text-gray-600">{pkg.detailedDescription}</p>
                )}
              </div>
            </div>

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
            {pkg.itinerary && (
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
            )}

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