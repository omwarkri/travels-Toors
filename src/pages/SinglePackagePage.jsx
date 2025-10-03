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
    id: "Alleppey Beach",
    name: "Alleppey Beach",
    duration: "04 Nights / 05 Days",
    destination: "Munnar, Thekkady",
    places: ["munnar", "thekkady"],
    bestSeason: "Sep - May",
    price: "18,999",
    originalPrice: "22,999",
    discount: "Special 17% Off",
    rating: "4.8",
    reviews: "67",
      image: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759330510/Allappy_4_ruiygh.jpg",
    images: [
      "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759330510/Allappy_1_qziygx.jpg","https://res.cloudinary.com/dl2gcscfa/image/upload/v1759330510/Allappy_4_ruiygh.jpg","https://res.cloudinary.com/dl2gcscfa/image/upload/v1759330511/Allappy_3_ktn290.jpg","https://res.cloudinary.com/dl2gcscfa/image/upload/v1759330510/Alleppey_2_bmbow2.jpg"
     
    ],

    description: "Alleppey Beach is famous for its long, beautiful coastline and the historic pier that extends over 137 years into the sea. Visitors love walking on the soft white sand and enjoying breathtaking sunset views. The beach offers exciting water sports like motorboat rides, parasailing, and surfing. Near the beach, Vijaya Beach Park provides fun and relaxation for families and kids. Local vendors add charm by offering fresh coconut water and delicious Kerala street food.",
    detailedDescription: "Discover Munnar's scenic beauty, Tata Tea Museum, and Eravikulam National Park.",
    highlights: ["Tea Plantations", "Eravikulam National Park", "Mattupetty Dam", "Tea Museum", "Kathakali Dance"],
    itinerary: [
      { day: "Day 1", title: "Arrival in Munnar", description: "Arrive at Cochin Airport, transfer to Munnar, check-in." },
      { day: "Day 2", title: "Munnar Sightseeing", description: "Visit tea plantations, Mattupetty Dam, Eravikulam National Park." },
      { day: "Day 3", title: "Leisure in Munnar", description: "Explore local markets, enjoy scenic viewpoints." },
      { day: "Day 4", title: "Travel to Thekkady", description: "Visit spice gardens, evening cultural show." },
      { day: "Day 5", title: "Departure", description: "Transfer to Cochin Airport for departure." }
    ],
    inclusions: ["3-star hotels", "Daily breakfast", "AC vehicle", "Entry tickets", "Jungle safari", "All taxes"],
    exclusions: ["Flights", "Lunch/dinner", "Personal expenses", "Travel insurance"]
  },
  {
    id: "Backwaters",
    name: "Backwaters",
    duration: "03 Nights / 04 Days",
    destination: "Alleppey, Kumarakom",
    places: ["alleppey", "kumarakom"],
    bestSeason: "Aug - Mar",
    price: "16,999",
    originalPrice: "20,999",
    discount: "Special 19% Off",
    rating: "4.9",
    reviews: "89",
    image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1565498258066-166b3a4eb9e2?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Kerala Backwaters are a network of rivers, lakes, and canals that flow alongside the Arabian Sea. Visitors enjoy peaceful houseboat cruises through green palm-lined waterways and traditional villages. The backwaters offer rich wildlife, scenic paddy fields, and unique local culture experiences. It’s a perfect place for relaxation, birdwatching, and exploring Kerala’s natural beauty.",
    detailedDescription: "Kerala Backwaters are a network of rivers, lakes, and canals that flow alongside the Arabian Sea. Visitors enjoy peaceful houseboat cruises through green palm-lined waterways and traditional villages. The backwaters offer rich wildlife, scenic paddy fields, and unique local culture experiences. It’s a perfect place for relaxation, birdwatching, and exploring Kerala’s natural beauty.",
    highlights: ["Houseboat Cruise", "Backwaters", "Vembanad Lake", "Traditional Food", "Sunset Views"],
    itinerary: [
      { day: "Day 1", title: "Arrival in Alleppey", description: "Check-in, evening walk at Alleppey Beach." },
      { day: "Day 2", title: "Houseboat Cruise", description: "Full day backwater houseboat cruise." },
      { day: "Day 3", title: "Kumarakom Excursion", description: "Visit bird sanctuary and relax." },
      { day: "Day 4", title: "Departure", description: "Check-out and transfer to Cochin Airport." }
    ],
    inclusions: ["Houseboat stay", "Meals on houseboat", "AC vehicle", "All entry fees", "All taxes"],
    exclusions: ["Flights", "Personal expenses", "Travel insurance"]
  },
  {
    id: "Tea estate",
    name: "Tea estate",
    duration: "03 Nights / 04 Days",
    destination: "Kovalam, Thiruvananthapuram",
    places: ["kovalam"],
    bestSeason: "Sep - Mar",
    price: "15,999",
    originalPrice: "19,999",
    discount: "Special 20% Off",
    rating: "4.7",
    reviews: "56",
    image: "https://images.unsplash.com/photo-1558618047-3c76ca7d13?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1558618047-3c76ca7d13?auto=format&fit=crop&w=1200&q=80"],
    description: "Kerala’s tea estates, especially in Munnar and Thekkady, offer vast, lush green hills covered with neatly trimmed tea bushes. Visitors can explore tea factories, learn about tea processing, and enjoy fresh tea tastings. The cool climate and misty mountains create a perfect setting for scenic walks and photography. Famous estates like Kannan Devan Hills and Kolukkumalai are popular spots for nature lovers and tea enthusiasts alike. These plantations combine natural beauty, culture, and a rich history of tea cultivation.",
    detailedDescription: "Kerala’s tea estates, especially in Munnar and Thekkady, offer vast, lush green hills covered with neatly trimmed tea bushes. Visitors can explore tea factories, learn about tea processing, and enjoy fresh tea tastings. The cool climate and misty mountains create a perfect setting for scenic walks and photography. Famous estates like Kannan Devan Hills and Kolukkumalai are popular spots for nature lovers and tea enthusiasts alike. These plantations combine natural beauty, culture, and a rich history of tea cultivation. ",
    highlights: ["Lighthouse Beach", "Hawa Beach", "Water Sports", "Ayurvedic Massage"],
    itinerary: [
      { day: "Day 1", title: "Arrival in Kovalam", description: "Check-in and beach walk." },
      { day: "Day 2", title: "Beach Day", description: "Full day to relax and try water sports." },
      { day: "Day 3", title: "Thiruvananthapuram Tour", description: "Visit Padmanabhaswamy Temple and Napier Museum." },
      { day: "Day 4", title: "Departure", description: "Transfer to airport." }
    ],
    inclusions: ["3-star beach resort", "Daily breakfast", "AC vehicle", "All entry tickets", "All taxes"],
    exclusions: ["Flights", "Lunch/dinner", "Personal expenses", "Travel insurance"]
  },
  {
    id: "Periyar Lake Thekkady",
    name: "Periyar Lake Thekkady",
    duration: "04 Nights / 05 Days",
    destination: "Thekkady, Periyar",
    places: ["thekkady", "munnar"],
    bestSeason: "Nov - Apr",
    price: "17,999",
    originalPrice: "21,999",
    discount: "Special 18% Off",
    rating: "4.6",
    reviews: "72",
    image: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&w=1200&q=80"],
    description: "Periyar Lake, located in Thekkady, is an artificial lake formed by the Mullaperiyar Dam. It is surrounded by the lush Periyar National Park, offering serene boat cruises through rich wildlife habitats. Visitors can spot elephants, deer, and various bird species along the lake’s banks. Bamboo rafting and nature walks add to the adventure. The lake is a perfect blend of natural beauty and wildlife exploration.",
    detailedDescription: "Periyar Lake, located in Thekkady, is an artificial lake formed by the Mullaperiyar Dam. It is surrounded by the lush Periyar National Park, offering serene boat cruises through rich wildlife habitats. Visitors can spot elephants, deer, and various bird species along the lake’s banks. Bamboo rafting and nature walks add to the adventure. The lake is a perfect blend of natural beauty and wildlife exploration.",
    highlights: ["Periyar Wildlife Sanctuary", "Spice Plantations", "Bamboo Rafting", "Elephant Ride"],
    itinerary: [
      { day: "Day 1", title: "Arrival", description: "Check-in at jungle resort." },
      { day: "Day 2", title: "Wildlife Safari", description: "Morning safari, afternoon spice plantation." },
      { day: "Day 3", title: "Leisure & Cultural Show", description: "Evening cultural program." },
      { day: "Day 4", title: "Travel", description: "Transfer to Munnar or next destination." },
      { day: "Day 5", title: "Departure", description: "Transfer to airport." }
    ],
    inclusions: ["Jungle resort", "Safari", "AC vehicle", "All tickets", "All taxes"],
    exclusions: ["Flights", "Personal expenses", "Travel insurance"]
  },
  {
    id: "The Nehru Trophy Boat Race",
    name: "The Nehru Trophy Boat Race",
    duration: "03 Nights / 04 Days",
    destination: "Kochi, Thrissur",
    places: ["kochi", "thrissur"],
    bestSeason: "Year Round",
    price: "16,999",
    originalPrice: "20,999",
    discount: "Special 19% Off",
    rating: "4.5",
    reviews: "92",
    image: "https://images.unsplash.com/photo-1587132135056-48ae4dc7fa32?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1587132135056-48ae4dc7fa32?auto=format&w=1200&q=80"],
    description: "The Nehru Trophy Boat Race is a famous annual boat race held on Punnamada Lake near Alappuzha, Kerala. It features massive snake boats called chundan vallams, each manned by over 100 oarsmen rowing in perfect rhythm to traditional boat songs. The race was inaugurated in 1952 by India’s first Prime Minister, Jawaharlal Nehru, who donated the trophy and famously joined the winning boat. Thousands of spectators gather each year to witness this thrilling and vibrant cultural festival, which celebrates Kerala’s heritage, unity, and sporting spirit.",
    detailedDescription: "The Nehru Trophy Boat Race is a famous annual boat race held on Punnamada Lake near Alappuzha, Kerala. It features massive snake boats called chundan vallams, each manned by over 100 oarsmen rowing in perfect rhythm to traditional boat songs. The race was inaugurated in 1952 by India’s first Prime Minister, Jawaharlal Nehru, who donated the trophy and famously joined the winning boat. Thousands of spectators gather each year to witness this thrilling and vibrant cultural festival, which celebrates Kerala’s heritage, unity, and sporting spirit.",
    highlights: ["Fort Kochi", "Chinese Fishing Nets", "Jewish Synagogue", "Kathakali Dance"],
    itinerary: [
      { day: "Day 1", title: "Arrival in Kochi", description: "Check-in, evening at Fort Kochi." },
      { day: "Day 2", title: "City Tour", description: "Explore Dutch Palace, Synagogue, local markets." },
      { day: "Day 3", title: "Leisure & Shopping", description: "Relax at cafe, try Kathakali show." },
      { day: "Day 4", title: "Departure", description: "Transfer to airport." }
    ],
    inclusions: ["3-star hotels", "Daily breakfast", "AC vehicle", "Entry tickets", "All taxes"],
    exclusions: ["Flights", "Lunch/dinner", "Personal expenses", "Travel insurance"]
  },
  {
    id: "Kovalam Beach",
    name: "Kovalam Beach",
    duration: "03 Nights / 04 Days",
    destination: "Wayanad, Edakkal",
    places: ["wayanad"],
    bestSeason: "Oct - May",
    price: "17,499",
    originalPrice: "21,499",
    discount: "Special 18% Off",
    rating: "4.7",
    reviews: "48",
    image: "https://images.unsplash.com/photo-1565955887216-68d71c13f6c1?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1565955887216-68d71c13f6c1?auto=format&w=1200&q=80"],
    description: "Kovalam Beach is famous for its three crescent-shaped beaches: Lighthouse Beach, Hawa Beach, and Samudra Beach. The sparkling sands, palm-lined shores, and clear waters offer perfect spots for swimming, sunbathing, and water sports like surfing and parasailing. The iconic Vizhinjam Lighthouse provides panoramic views of the Arabian Sea. Visitors can enjoy fresh local seafood at beach shacks and vibrant evening markets. Kovalam is a top destination for relaxation, adventure, and cultural experiences in Kerala.",
    detailedDescription: "Kovalam Beach is famous for its three crescent-shaped beaches: Lighthouse Beach, Hawa Beach, and Samudra Beach. The sparkling sands, palm-lined shores, and clear waters offer perfect spots for swimming, sunbathing, and water sports like surfing and parasailing. The iconic Vizhinjam Lighthouse provides panoramic views of the Arabian Sea. Visitors can enjoy fresh local seafood at beach shacks and vibrant evening markets. Kovalam is a top destination for relaxation, adventure, and cultural experiences in Kerala.",
    highlights: ["Edakkal Caves", "Banasura Sagar Dam", "Chembra Peak", "Wildlife Sanctuary"],
    itinerary: [
      { day: "Day 1", title: "Arrival", description: "Check-in at resort." },
      { day: "Day 2", title: "Sightseeing", description: "Visit Edakkal Caves, Banasura Sagar Dam." },
      { day: "Day 3", title: "Adventure Trek", description: "Trek Chembra Peak." },
      { day: "Day 4", title: "Departure", description: "Transfer to next destination." }
    ],
    inclusions: ["3-star resorts", "Daily breakfast", "AC vehicle", "Entry tickets", "All taxes"],
    exclusions: ["Flights", "Lunch/dinner", "Personal expenses", "Travel insurance"]
  },
  {
    id: "Guruvayur Temple",
    name: "Guruvayur Temple",
    duration: "02 Nights / 03 Days",
    destination: "Kumarakom, Alleppey",
    places: ["kumarakom"],
    bestSeason: "Sep - Mar",
    price: "14,999",
    originalPrice: "18,999",
    discount: "Special 21% Off",
    rating: "4.8",
    reviews: "34",
    image: "https://images.unsplash.com/photo-1565498258066-166b3a4eb9e2?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1565498258066-166b3a4eb9e2?auto=format&w=1200&q=80"],
    description: `Guruvayur Temple, located in Kerala, is one of the most sacred Hindu temples dedicated to Lord Krishna, known here as Guruvayurappan. The temple's idol is believed to be over 5,000 years old and was brought from the ancient city of Dwarka. Renowned for its exquisite Kerala-style architecture, the temple attracts millions of devotees annually. It is often called "Bhooloka Vaikunta," meaning the earthly abode of Lord Vishnu. Guruvayur is famous for its strong spiritual significance, vibrant festivals, and traditional rituals.`,
    detailedDescription: `Guruvayur Temple, located in Kerala, is one of the most sacred Hindu temples dedicated to Lord Krishna, known here as Guruvayurappan. The temple's idol is believed to be over 5,000 years old and was brought from the ancient city of Dwarka. Renowned for its exquisite Kerala-style architecture, the temple attracts millions of devotees annually. It is often called "Bhooloka Vaikunta," meaning the earthly abode of Lord Vishnu. Guruvayur is famous for its strong spiritual significance, vibrant festivals, and traditional rituals.`,
    highlights: ["Vembanad Lake", "Bird Sanctuary", "Luxury Resorts", "Houseboat Stays"],
    itinerary: [
      { day: "Day 1", title: "Arrival", description: "Check-in at luxury resort, relax by lake." },
      { day: "Day 2", title: "Houseboat & Leisure", description: "Full day houseboat cruise and leisure." },
      { day: "Day 3", title: "Departure", description: "Transfer to airport or next destination." }
    ],
    inclusions: ["Luxury resort", "Houseboat stay", "Meals", "AC vehicle", "All taxes"],
    exclusions: ["Flights", "Personal expenses", "Travel insurance"]
  },
  {
    id: "Ambalapuzha Krishna Temple",
    name: "Ambalapuzha Krishna Temple",
    duration: "02 Nights / 03 Days",
    destination: "Varkala, Trivandrum",
    places: ["varkala"],
    bestSeason: "Aug - Mar",
    price: "13,999",
    originalPrice: "16,999",
    discount: "Special 18% Off",
    rating: "4.6",
    reviews: "28",
    image: "https://images.unsplash.com/photo-1552465018-69ad1d81d952?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1552465018-69ad1d81d952?auto=format&w=1200&q=80"],
    description: "Ambalapuzha Krishna Temple in Alappuzha district is a stunning example of traditional Kerala architecture built in the 15th century. The temple is famous for its serene ambiance and the legendary Palpayasam—a sweet milk-rice pudding offered to Lord Krishna daily. It has strong historical ties to Guruvayoor Temple, with the idol safely kept here during Tipu Sultan’s invasion. The temple’s colorful murals and oil lamp-lit evenings create a magical atmosphere. Annual festivals and boat races add vibrant cultural celebrations for visitors to enjoy.",
    detailedDescription: "Ambalapuzha Krishna Temple in Alappuzha district is a stunning example of traditional Kerala architecture built in the 15th century. The temple is famous for its serene ambiance and the legendary Palpayasam—a sweet milk-rice pudding offered to Lord Krishna daily. It has strong historical ties to Guruvayoor Temple, with the idol safely kept here during Tipu Sultan’s invasion. The temple’s colorful murals and oil lamp-lit evenings create a magical atmosphere. Annual festivals and boat races add vibrant cultural celebrations for visitors to enjoy.",
    highlights: ["Varkala Beach", "Janardanaswamy Temple", "Mineral Springs", "Cliff Views"],
    itinerary: [
      { day: "Day 1", title: "Arrival", description: "Check-in and relax at beach." },
      { day: "Day 2", title: "Sightseeing", description: "Explore cliff area and temple." },
      { day: "Day 3", title: "Departure", description: "Transfer to airport." }
    ],
    inclusions: ["Beach resort", "Daily breakfast", "AC vehicle", "All tickets", "All taxes"],
    exclusions: ["Flights", "Lunch/dinner", "Personal expenses", "Travel insurance"]
  },

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