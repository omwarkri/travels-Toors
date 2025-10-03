import React from "react";
import { Link } from 'react-router-dom';
import SEOHead from "../components/common/SEOHead";
import Footer from "../components/common/Footer";
import TourPackageCard from "../components/packages/TourPackageCard";
import { getAllPackages } from "../data/packagesData";

const AllPackagesPage = () => {
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