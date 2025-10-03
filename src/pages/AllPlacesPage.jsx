// src/pages/AllPackagesPage.js
import React from "react";
import { Link } from 'react-router-dom';
import SEOHead from "../components/common/SEOHead";
import Footer from "../components/common/Footer";
import TourPackageCard from "../components/packages/TourPackageCard";

const AllPackagesPage = () => {
  // Direct package data (same structure as SinglePackagePage)
     const allPackages =[
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

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <SEOHead 
        title="Kerala Tour Packages | Omkar Tour and Travels - Best Deals 2024"
        description="Discover amazing Kerala tour packages. Backwaters, beaches, tea plantations, wildlife & cultural tours. Best price guarantee. Book your dream Kerala vacation today!"
        keywords="Kerala tour packages, Alleppey houseboat, Munnar tea gardens, Kovalam beach, Kerala backwaters"
      />
      
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium mb-4">
            🏆 {allPackages.length} Curated Packages
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Kerala Tour Packages</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the magic of God's Own Country with our carefully curated Kerala tour packages. 
            From serene backwaters to misty tea plantations, experience the best of Kerala.
          </p>
        </div>

        {/* Package Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {allPackages.map((pkg) => (
            <TourPackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>

        {/* Package Stats */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-emerald-600">{allPackages.length}</div>
              <div className="text-gray-600">Tour Packages</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-600">
                {Math.max(...allPackages.map(p => parseFloat(p.rating)))}
              </div>
              <div className="text-gray-600">Highest Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-600">
                ₹{Math.min(...allPackages.map(p => parseInt(p.price.replace(/,/g, '')))).toLocaleString()}
              </div>
              <div className="text-gray-600">Starting From</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-600">
                {allPackages.reduce((acc, pkg) => acc + parseInt(pkg.reviews), 0)}
              </div>
              <div className="text-gray-600">Happy Travelers</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl p-8 text-center text-white shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore Kerala?</h2>
          <p className="text-emerald-100 mb-6 max-w-2xl mx-auto text-lg">
            Contact our travel experts to book your perfect Kerala experience. 
            Get personalized recommendations and the best deals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919028803309"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold hover:bg-emerald-50 transition duration-300 shadow-lg"
            >
              💬 Chat on WhatsApp
            </a>
            <a
              href="tel:+919028803309"
              className="inline-flex items-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-emerald-600 transition duration-300"
            >
              📞 Call Now
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AllPackagesPage;