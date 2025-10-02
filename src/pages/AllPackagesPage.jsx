import React from "react";
import { Link } from 'react-router-dom';
import SEOHead from "../components/common/SEOHead";
import Footer from "../components/common/Footer";
import TourPackageCard from "../components/packages/TourPackageCard";
import { getAllPackages } from "../data/packagesData";

const AllPackagesPage = () => {
    const allPackages = [
    {
      id: "Kerala Backwaters & Beaches",
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


  return (
    <div className="pt-20 min-h-screen">
      <SEOHead 
        title="All Kerala Tour Packages | Omkar Tour and Travels - Best Deals 2025"
        description="Browse all Kerala tour packages from Omkar Tour and Travels. Backwaters, beaches, tea plantations, wildlife & cultural tours. Best price guarantee. Book your dream Kerala vacation today!"
        keywords="Kerala tour packages, Kerala backwaters, Alleppey houseboat, Munnar tea estates, Kerala beaches, wildlife tours, cultural packages, honeymoon packages Kerala"
      />
      
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium mb-4">
            🏆 {allPackages.length}+ Curated Packages
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Kerala Tour Packages</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the magic of God's Own Country with our carefully curated Kerala tour packages. 
            From serene backwaters to misty tea plantations, experience the best of Kerala with 13+ years of expertise.
          </p>
        </div>

        {/* Package Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100">
            <div className="text-2xl font-bold text-emerald-600 mb-2">{allPackages.length}+</div>
            <div className="text-sm text-gray-600">Tour Packages</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100">
            <div className="text-2xl font-bold text-emerald-600 mb-2">4.8⭐</div>
            <div className="text-sm text-gray-600">Average Rating</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100">
            <div className="text-2xl font-bold text-emerald-600 mb-2">5000+</div>
            <div className="text-sm text-gray-600">Happy Travelers</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100">
            <div className="text-2xl font-bold text-emerald-600 mb-2">13+</div>
            <div className="text-sm text-gray-600">Years Experience</div>
          </div>
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
        </div>

        {/* Package Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {allPackages.map((pkg) => (
            <TourPackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>

        {/* Package Categories Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-emerald-100 hover:shadow-xl transition duration-300">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🚤</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Backwaters</h3>
            <p className="text-gray-600 text-sm">Serene houseboat cruises through palm-fringed canals</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-emerald-100 hover:shadow-xl transition duration-300">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌿</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Tea Plantations</h3>
            <p className="text-gray-600 text-sm">Misty hills and tea estate experiences in Munnar</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-emerald-100 hover:shadow-xl transition duration-300">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🏖️</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Beaches</h3>
            <p className="text-gray-600 text-sm">Golden sands and water sports at Kovalam & Alleppey</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-emerald-100 hover:shadow-xl transition duration-300">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🕌</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Culture</h3>
            <p className="text-gray-600 text-sm">Ancient temples and traditional experiences</p>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Omkar Tour and Travels?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">✓</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Best Price Guarantee</h3>
              <p className="text-gray-600">Get the best value with our price match guarantee and exclusive deals.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">👨‍💼</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Local Guides</h3>
              <p className="text-gray-600">Experience Kerala with knowledgeable local guides and authentic insights.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock customer support throughout your journey in Kerala.</p>
            </div>
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