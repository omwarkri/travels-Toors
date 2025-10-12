import React, { useState } from "react";
import { useParams, Link } from 'react-router-dom';
import SEOHead from "../components/common/SEOHead";
import Footer from "../components/common/Footer";

const SinglePlacePage = () => {
  const { placeId } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');
  
  // Complete places data with all detailed information
  const allPlaces = [
    {
      id: "munnar",
      name: "MUNNAR",
      desc: "Hill Station of Endless Tea Gardens - Arguably the best hill station in South India with tea-clad hill tops and valleys.",
      image: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1760193264/munnar_mycc44.jpg",
      images: [
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1760193264/munnar_mycc44.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759476405/tea_1_jrixag.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759476405/tea_2_rmqxfj.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759476405/tea_3_shjd5a.jpg"
      ],
      rating: "4.8",
      tours: "12",
      highlights: ["Tea Plantations", "Eravikulam National Park", "Mattupetty Dam", "Tea Museum", "Anamudi Peak"],
      bestSeason: "October to March",
      distance: "110 km from Kochi",
      packages: ["Munnar Tea Plantations Tour", "Complete Kerala Experience", "Kerala Honeymoon Special"],
      
      // Detailed Information from your data
      overview: "Munnar is a picturesque hill station in Kerala's Idukki district, celebrated for its sprawling tea plantations, mist-covered mountains, pleasant climate, and colonial heritage. It was once the summer resort of the British government and remains a top escape for nature lovers and adventure seekers.",
      
      keyAttractions: [
        {
          name: "Eravikulam National Park",
          description: "Home to the endangered Nilgiri Tahr and famous for the rare Neelakurinji flower that blooms every 12 years."
        },
        {
          name: "Tea Museums",
          description: "Tata Tea Museum and Kannan Devan Tea Museum showcasing tea cultivation and history."
        },
        {
          name: "Mattupetty Dam",
          description: "Popular for boating and scenic views amidst tea gardens."
        },
        {
          name: "Echo Point",
          description: "Acoustic echo effect amidst lush hills."
        },
        {
          name: "Top Station",
          description: "Offers panoramic views of the Western Ghats and valley of Theni."
        },
        {
          name: "Blossom Park",
          description: "Beautiful landscaped gardens ideal for families and nature walks."
        },
        {
          name: "Chokramudi Peak & Anamudi Peak",
          description: "Trekking destinations including South India's highest peak, Anamudi."
        },
        {
          name: "Devikulam",
          description: "Serene picnic spot with Sita Devi Lake."
        },
        {
          name: "Carmelagiri Elephant Park",
          description: "Elephant rides through tea estates."
        }
      ],
      
      topActivities: [
        "Trekking and nature walks in the hills and national parks",
        "Boating at Mattupetty Dam and Kundala Lake",
        "Explore tea plantations and learn about tea processing",
        "Wildlife spotting in Eravikulam National Park",
        "Visiting waterfalls like Attukal and Lakkom",
        "Visiting spice gardens and enjoying fresh local produce"
      ],
      
      localCuisine: "Don't miss Kerala delicacies including spicy Malabar meals, aromatic cardamom tea, local chocolates, and fresh garden vegetables. Many cafes and restaurants offer fresh homemade chocolates and local snacks.",
      
      festivalsCulture: "Munnar celebrates the blooming of Neelakurinji every 12 years, a spectacular event that paints the hills in blue. The region also hosts local temple festivals and seasonal cultural fairs celebrating local traditions.",
      
      travelTips: [
        "Carry woollens as evenings are cool",
        "Early mornings offer the best views and fewer crowds",
        "Book guided tours for trekking and wildlife safaris",
        "Avoid monsoon season for difficult roads and landslides",
        "Respect local customs and natural habitats"
      ],
      
      nearbyAttractions: [
        "Thekkady wildlife sanctuary",
        "Chinnar wildlife sanctuary",
        "Various spice plantations and waterfalls in the Idukki district"
      ],
      
      howToReach: {
        air: "The nearest airport is Cochin International Airport (about 110 km away)",
        rail: "The closest railway station is Ernakulam Junction",
        road: "From these hubs, taxis and buses provide good connectivity to Munnar"
      },
      
      climate: "Cool and pleasant throughout the year, with temperatures ranging from 5°C to 25°C"
    },
    {
      id: "alleppey",
      name: "ALLEPPEY",
      desc: "Venice of the East and Backwaters Paradise - The rare water world aptly called Venice of the East with beautiful green paddy pastures.",
      image: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1760193262/alleppey_o4rtdm.jpg",
      images: [
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1760193262/alleppey_o4rtdm.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759330510/Allappy_1_qziygx.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759330510/Allappy_4_ruiygh.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759330511/Allappy_3_ktn290.jpg"
      ],
      rating: "4.9",
      tours: "8",
      highlights: ["Houseboat Cruise", "Backwaters", "Alleppey Beach", "Vembanad Lake", "Punnamada Lake"],
      bestSeason: "September to March",
      distance: "75 km from Kochi",
      packages: ["Kerala Backwaters & Beaches", "Complete Kerala Experience", "Kerala Honeymoon Special"],
      
      overview: "Alleppey, also known as Alappuzha, is a charming coastal town in Kerala famous for its serene backwaters, sprawling canals, lagoons, and lush green paddy fields. Known as the 'Venice of the East,' Alleppey offers an unmatched experience through its signature houseboat cruises, historic sites, and captivating natural beauty.",
      
      keyAttractions: [
        {
          name: "Alleppey Backwaters",
          description: "Network of tranquil lagoons and canals perfect for houseboat cruises and shikara rides that showcase the calm lifestyle along the water."
        },
        {
          name: "Alleppey Beach",
          description: "Scenic beach dotted with palm trees, an ancient lighthouse, and tranquil surroundings for relaxation and seaside activities."
        },
        {
          name: "Punnamada Lake",
          description: "Famous for the Nehru Trophy Snake Boat Race, one of the most exciting boat races in Kerala."
        },
        {
          name: "Kuttanad",
          description: "Known as the 'Rice Bowl of Kerala,' featuring vast paddy fields and unique below-sea-level farming."
        },
        {
          name: "Ambalappuzha Sri Krishna Temple",
          description: "Revered temple famous for its mural paintings and the famous sweet pudding (palpayasam) offered to the deity."
        },
        {
          name: "Karumadi Kuttan",
          description: "Ancient granite idol of Lord Buddha and a prominent Buddhist pilgrim spot."
        },
        {
          name: "Krishnapuram Palace",
          description: "A heritage museum known for its architecture and mural art."
        },
        {
          name: "Pathiramanal Island",
          description: "A small island known for migratory birds and natural beauty."
        },
        {
          name: "St. Mary's Forane Church",
          description: "Historic church with beautiful murals and heritage significance."
        },
        {
          name: "Marari Beach",
          description: "Picturesque and quiet beach resort known for Ayurvedic centers and pristine shoreline."
        }
      ],
      
      topActivities: [
        "Houseboat cruises through the backwaters",
        "Witness the famed Nehru Trophy Boat Race (typically in August-September)",
        "Relax on quiet beaches and engage in water sports",
        "Visit temples and churches showcasing Kerala's cultural fabric",
        "Explore local markets and try fresh seafood and traditional Kerala cuisine",
        "Bird watching at Vembanad Bird Sanctuary",
        "Visit historic palaces and museums"
      ],
      
      localCuisine: "Enjoy Kerala's traditional dishes such as steamed rice and fish curry, tapioca with fish curry, coconut-based vegetarian meals, Karimeen pollichathu (pearl spot fish), and fresh seafood delicacies. Street food near the beach offers snacks like banana chips and fried fish.",
      
      festivalsCulture: [
        "The famous Nehru Trophy Snake Boat Race is a major highlight attracting thousands of visitors",
        "Local temple festivals and Christian church feasts add to the rich cultural atmosphere"
      ],
      
      travelTips: [
        "Book houseboats in advance, especially during peak season",
        "Carry mosquito repellent for backwater cruises",
        "Respect local customs and environment",
        "Morning and evening hours are best for photography and cruising",
        "Explore offbeat islands and fishing villages for authentic experiences"
      ],
      
      nearbyAttractions: [
        "Kumarakom Bird Sanctuary",
        "Vembanad Lake",
        "Mararikulam Beach",
        "Pathiramanal Island for bird watching and nature exploration"
      ],
      
      howToReach: {
        air: "Cochin International Airport (approximately 75 km from Alleppey)",
        rail: "Alappuzha railway station is well-connected to major cities across India",
        road: "Well linked by road with trains and buses regularly available"
      },
      
      climate: "Tropical climate with moderate temperatures ranging from 22°C to 35°C"
    },

    // Continue with the same structure for all 24 destinations...
    // Due to character limits, I'll show the structure for first 2 and you can continue similarly

    {
      id: "kochi",
      name: "KOCHI",
      desc: "Where Kerala's Past Meets Modern Charm - The commercial capital of Kerala blending Portuguese, Dutch, and British colonial influences.",
      image: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1760193262/kochi_wr3gbb.jpg",
      images: [
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1760193262/kochi_wr3gbb.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759490476/premium_photo-1697729597066-7b3d09b6dab7_oxwkpb.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488068/padmanabha-swamy1_kebsa2.jpg"
      ],
      rating: "4.5",
      tours: "7",
      highlights: ["Fort Kochi", "Chinese Fishing Nets", "Jewish Synagogue", "Kathakali Dance", "Marine Drive"],
      bestSeason: "Year Round",
      distance: "0 km (Starting Point)",
      packages: ["Kerala Cultural Heritage", "Complete Kerala Experience"],
      
      overview: "Kochi, also known as Cochin, is a vibrant port city on Kerala's southwest coast, renowned for its unique blend of colonial history, diverse cultures, and natural beauty. Nicknamed the 'Queen of the Arabian Sea,' it has been a hub of spice trade and multicultural exchange for centuries.",
      
      keyAttractions: [
        {
          name: "Fort Kochi",
          description: "Historic precinct famous for Chinese fishing nets, colonial buildings, art galleries, and cobblestone streets."
        },
        {
          name: "Jew Town & Paradesi Synagogue",
          description: "UNESCO heritage area with antique shops and one of India's oldest active synagogues."
        },
        {
          name: "Mattancherry Palace (Dutch Palace)",
          description: "A royal structure adorned with Kerala-style murals and ancient artifacts."
        },
        {
          name: "Santa Cruz Basilica",
          description: "A grand church known for its colonial Gothic architecture and stunning interiors."
        },
        {
          name: "St. Francis Church",
          description: "India's oldest European church, reputedly the original burial site of Vasco da Gama."
        },
        {
          name: "Marine Drive",
          description: "A bustling seafront promenade perfect for evening strolls with city skyline views."
        },
        {
          name: "Lulu Mall",
          description: "One of India's largest shopping malls with entertainment, dining, and retail options."
        },
        {
          name: "Kerala Folklore Museum",
          description: "Showcasing traditional arts, crafts, and cultural relics of Kerala."
        },
        {
          name: "Bolgatty Palace & Willingdon Island",
          description: "Colonial landmarks and commercial heart of Kochi's harbor."
        },
        {
          name: "Kochi-Muziris Biennale",
          description: "International contemporary art festival held across Fort Kochi and nearby areas."
        }
      ],
      
      topActivities: [
        "Heritage walks through Fort Kochi and Mattancherry",
        "Witness traditional Kathakali dance performances and Kalaripayattu martial arts",
        "Explore vibrant spice markets and sample local cuisine",
        "Enjoy boat rides on the Kochi backwaters and harbor cruises",
        "Shop for antiques, handicrafts, and spices in Jew Town",
        "Attend cultural events and festivals, including the Kochi-Muziris Biennale"
      ],
      
      localCuisine: "Kochi is a gastronomic delight with seafood, Malabar biryani, Keralite vegetarian meals, and fusion cuisine reflecting its multicultural history. Street food like pazhampori (banana fritters) and Kerala parotta with beef fry are crowd favorites.",
      
      festivalsCulture: [
        "Onam: The harvest festival with elaborate feasts and boat races",
        "Cochin Carnival: Annual December festival celebrating the city's maritime heritage",
        "Religious festivals across Hindu temples, churches, and mosques depicting Kochi's diverse faiths"
      ],
      
      travelTips: [
        "Wear comfortable shoes for walking tours on uneven cobblestones",
        "Morning and evening periods have the best lighting and ambiance for photography",
        "Respect heritage sites and local customs when visiting places of worship",
        "Use local water taxis and ferries for unique perspectives of the city"
      ],
      
      nearbyAttractions: [
        "Cherai Beach: A beautiful beach resort close to Kochi city",
        "Hill Palace Museum: A large archaeological museum near Thrippunithura",
        "Fort Kochi's nearby islands including Vypin and Bolgatty"
      ],
      
      howToReach: {
        air: "Cochin International Airport, well connected globally",
        rail: "Ernakulam Junction and Ernakulam Town railway stations serve Kochi",
        road: "National Highways and regular bus connectivity from all nearby cities"
      },
      
      climate: "Tropical climate with moderate temperatures year-round"
    }

    // Continue adding all 24 destinations with the same detailed structure...
  ];

  // Find the place by ID
  const place = allPlaces.find(p => p.id === placeId) || allPlaces[0];

  // Sample package data
  const packageData = {
    "Munnar Tea Plantations Tour": { duration: "3 Days", price: "7,999" },
    "Complete Kerala Experience": { duration: "7 Days", price: "18,999" },
    "Kerala Honeymoon Special": { duration: "5 Days", price: "12,999" },
    "Kerala Backwaters & Beaches": { duration: "4 Days", price: "9,999" },
    "Kerala Wildlife Adventure": { duration: "4 Days", price: "10,999" },
    "Kerala Cultural Heritage": { duration: "3 Days", price: "6,999" },
    "Luxury Kerala Experience": { duration: "5 Days", price: "15,999" },
    "Wayanad Adventure Tour": { duration: "4 Days", price: "8,999" },
    "Vagamon Hill Retreat": { duration: "3 Days", price: "6,499" },
    "Waterfall Adventure Tour": { duration: "3 Days", price: "7,499" },
    "Beach & Culture Tour": { duration: "4 Days", price: "9,499" },
    "Nature & Heritage Tour": { duration: "4 Days", price: "8,999" },
    "Historic Kerala Tour": { duration: "3 Days", price: "6,999" },
    "Cultural Kerala Tour": { duration: "3 Days", price: "7,499" },
    "Backwater Village Experience": { duration: "2 Days", price: "4,999" },
    "Beach & Backwater Tour": { duration: "3 Days", price: "7,999" },
    "Capital City Tour": { duration: "2 Days", price: "5,499" },
    "Northern Kerala Tour": { duration: "4 Days", price: "9,999" },
    "Backwater Gateway Tour": { duration: "3 Days", price: "7,499" },
    "Mountain Adventure Tour": { duration: "4 Days", price: "9,499" },
    "Wildlife Sanctuary Tour": { duration: "2 Days", price: "5,999" },
    "Educational Tour": { duration: "1 Day", price: "2,999" },
    "Village Tourism": { duration: "2 Days", price: "4,499" },
    "Rainforest Adventure": { duration: "2 Days", price: "5,499" },
    "Historical Tour": { duration: "2 Days", price: "4,999" }
  };

  // Tab content renderer
  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed text-lg">{place.overview}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-emerald-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">🌤️ Best Time to Visit</h3>
                <p className="text-gray-700">{place.bestSeason}</p>
              </div>
              <div className="bg-emerald-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">🌡️ Climate</h3>
                <p className="text-gray-700">{place.climate}</p>
              </div>
            </div>

            {place.howToReach && (
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">🚗 How to Reach</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {place.howToReach.air && (
                    <div>
                      <h4 className="font-semibold mb-2">✈️ By Air</h4>
                      <p className="text-gray-700 text-sm">{place.howToReach.air}</p>
                    </div>
                  )}
                  {place.howToReach.rail && (
                    <div>
                      <h4 className="font-semibold mb-2">🚆 By Rail</h4>
                      <p className="text-gray-700 text-sm">{place.howToReach.rail}</p>
                    </div>
                  )}
                  {place.howToReach.road && (
                    <div>
                      <h4 className="font-semibold mb-2">🚗 By Road</h4>
                      <p className="text-gray-700 text-sm">{place.howToReach.road}</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        );

      case 'attractions':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Key Attractions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {place.keyAttractions.map((attraction, index) => (
                <div key={index} className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition duration-300">
                  <h4 className="text-xl font-semibold mb-3 text-emerald-700">{attraction.name}</h4>
                  <p className="text-gray-600 leading-relaxed">{attraction.description}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'activities':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Top Activities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {place.topActivities.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg">
                  <span className="text-emerald-500 mt-1">✓</span>
                  <p className="text-gray-700">{activity}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'cuisine':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Local Cuisine</h3>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed text-lg">{place.localCuisine}</p>
            </div>
          </div>
        );

      case 'culture':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Festivals & Culture</h3>
            <div className="bg-purple-50 p-6 rounded-lg">
              {Array.isArray(place.festivalsCulture) ? (
                <ul className="space-y-3">
                  {place.festivalsCulture.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="text-purple-500 mt-1">🎉</span>
                      <p className="text-gray-700">{item}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-700 leading-relaxed">{place.festivalsCulture}</p>
              )}
            </div>
          </div>
        );

      case 'tips':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Travel Tips</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {place.travelTips.map((tip, index) => (
                <div key={index} className="flex items-start space-x-3 bg-blue-50 p-4 rounded-lg">
                  <span className="text-blue-500 mt-1">💡</span>
                  <p className="text-gray-700">{tip}</p>
                </div>
              ))}
            </div>

            {place.nearbyAttractions && (
              <div className="mt-8">
                <h4 className="text-xl font-semibold mb-4">Nearby Attractions</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {place.nearbyAttractions.map((attraction, index) => (
                    <div key={index} className="flex items-center space-x-2 text-gray-700">
                      <span className="text-emerald-500">📍</span>
                      <span>{attraction}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <SEOHead 
        title={`${place.name} Kerala - Complete Travel Guide | Omkar Tour and Travels`}
        description={`Visit ${place.name} - ${place.desc}. Book ${place.tours}+ tour packages starting from ₹4,999. Best time to visit: ${place.bestSeason}`}
        keywords={`${place.name}, ${place.name} Kerala, ${place.name} tour packages, ${place.name} tourism`}
      />
      
      {/* Place Header */}
      <section className="relative h-96 bg-gray-900">
        <img
          src={place.images[selectedImage]}
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
            <p className="text-xl max-w-3xl">{place.desc}</p>
            <div className="flex flex-wrap items-center gap-4 mt-4">
              <span className="bg-white/20 px-3 py-1 rounded-full">⭐ {place.rating}</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">🚗 {place.tours} tours available</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">📅 Best: {place.bestSeason}</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">📍 {place.distance}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Place Details */}
      <section className="max-w-7xl mx-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            {place.images && place.images.length > 1 && (
              <div className="bg-white shadow-lg p-6 mb-8">
                <div className="flex flex-col space-y-4">
                  {/* Main Image */}
                  <div className="overflow-hidden">
                    <img
                      src={place.images[selectedImage]}
                      alt={`${place.name} view ${selectedImage + 1}`}
                      className="w-full h-80 object-cover"
                    />
                  </div>
                  
                  {/* Thumbnail Gallery */}
                  <div className="flex space-x-3 overflow-x-auto pb-2">
                    {place.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`flex-shrink-0 w-20 h-20 overflow-hidden border-2 transition duration-200 ${
                          selectedImage === index ? 'border-emerald-500' : 'border-gray-200'
                        }`}
                      >
                        <img
                          src={image}
                          alt={`${place.name} view ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Tabs */}
            <div className="bg-white shadow-lg mb-8">
              <div className="border-b border-gray-200">
                <nav className="flex overflow-x-auto -mb-px">
                  {['overview', 'attractions', 'activities', 'cuisine', 'culture', 'tips'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`flex-shrink-0 px-6 py-4 border-b-2 font-medium text-sm transition duration-200 ${
                        activeTab === tab
                          ? 'border-emerald-500 text-emerald-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </nav>
              </div>
              
              {/* Tab Content */}
              <div className="p-8">
                {renderTabContent()}
              </div>
            </div>
          </div>

          {/* Sidebar - Packages */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white shadow-xl p-6 border border-gray-200">
              <h3 className="text-xl font-bold mb-6 text-center">Available Tour Packages</h3>
              <div className="space-y-4 mb-6">
                {place.packages.map((pkg, index) => (
                  <div key={index} className="border border-gray-200 p-4 hover:border-emerald-500 transition duration-300">
                    <h4 className="font-semibold text-gray-800">{pkg}</h4>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm text-gray-600">{packageData[pkg]?.duration || "Custom"}</span>
                      <span className="text-emerald-600 font-bold">₹{packageData[pkg]?.price || "Custom"}</span>
                    </div>
                    <a
                      href="https://wa.me/919028803309"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-emerald-500 text-white py-2 font-semibold hover:bg-emerald-600 transition duration-300 flex items-center justify-center mt-3 text-sm"
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
                  className="w-full bg-green-600 text-white py-3 font-semibold hover:bg-green-700 transition duration-300 flex items-center justify-center"
                >
                  💬 Customize Your Trip
                </a>
                <a
                  href="tel:+919028803309"
                  className="w-full bg-emerald-500 text-white py-3 font-semibold hover:bg-emerald-600 transition duration-300 flex items-center justify-center"
                >
                  📞 Call for Details
                </a>
              </div>

              {/* Quick Facts */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-emerald-400 mr-3"></span>
                  Expert Local Guides
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-emerald-400 mr-3"></span>
                  Best Price Guarantee
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-emerald-400 mr-3"></span>
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