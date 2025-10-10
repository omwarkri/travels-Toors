import React, { useState } from "react";
import { useParams, Link } from 'react-router-dom';
import SEOHead from "../components/common/SEOHead";
import Footer from "../components/common/Footer";

const SinglePlacePage = () => {
  const { placeId } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  
  // Complete places data with all images from packages
  const allPlaces = [
    { 
      id: "munnar",
      name: "MUNNAR", 
      desc: "Arguably the best hill station in South India with tea-clad hill tops and valleys.", 
      image: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759476405/tea_3_shjd5a.jpg",
      images: [
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759476405/tea_1_jrixag.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759476405/tea_2_rmqxfj.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759476405/tea_3_shjd5a.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759476406/tea_4_soxsj1.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759476407/tea_5_xlgonr.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759476406/tea_6_wh8ied.jpg"
      ],
      rating: "4.8",
      tours: "12",
      highlights: ["Tea Plantations", "Eravikulam National Park", "Mattupetty Dam", "Tea Museum"],
      bestSeason: "September to May",
      packages: ["Munnar Tea Plantations Tour", "Complete Kerala Experience", "Kerala Honeymoon Special"],
      longDescription: "Munnar is a breathtaking hill station nestled in the Western Ghats of Kerala, renowned for its sprawling tea plantations, misty mountains, and cool climate. Once the summer resort of the British government in South India, Munnar still retains its old-world charm with colonial bungalows and winding roads. The town is situated at the confluence of three mountain streams - Muthirapuzha, Nallathanni, and Kundala.",
      climate: "Cool and pleasant throughout the year, with temperatures ranging from 5°C to 25°C",
      attractions: [
        { name: "Tea Plantations", description: "Visit the endless stretches of tea gardens and learn about tea processing." },
        { name: "Eravikulam National Park", description: "Home to the endangered Nilgiri Tahr and offering stunning views." },
        { name: "Mattupetty Dam", description: "Beautiful dam and lake perfect for boating and photography." },
        { name: "Tea Museum", description: "Learn about the history and process of tea making in Kerala." }
      ]
    },
    { 
      id: "alleppey",
      name: "ALLEPPEY", 
      desc: "The rare water world aptly called Venice of the East with beautiful green paddy pastures.", 
      image: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759330510/Allappy_4_ruiygh.jpg",
      images: [
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759330510/Allappy_1_qziygx.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759330510/Allappy_4_ruiygh.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759330511/Allappy_3_ktn290.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759330510/Alleppey_2_bmbow2.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759487637/backwater_1_b007co.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759487637/backwater_2_sfyek2.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759487637/backwater_3_xnhewv.jpg"
      ],
      rating: "4.9",
      tours: "8",
      highlights: ["Houseboat Cruise", "Backwaters", "Alleppey Beach", "Vembanad Lake"],
      bestSeason: "August to March",
      packages: ["Kerala Backwaters & Beaches", "Complete Kerala Experience", "Kerala Honeymoon Special"],
      longDescription: "Alappuzha, popularly known as Alleppey, is famous for its backwaters, beaches, and canal networks. Often called the 'Venice of the East', this charming city is the center for backwater tourism in Kerala. The houseboat cruises along the backwaters are a once-in-a-lifetime experience.",
      climate: "Tropical climate with moderate temperatures ranging from 22°C to 35°C",
      attractions: [
        { name: "Houseboat Cruise", description: "Stay overnight in traditional houseboats through backwaters." },
        { name: "Alleppey Beach", description: "Pristine beach with a 150-year-old pier and lighthouse." },
        { name: "Vembanad Lake", description: "Longest lake in India, perfect for sunset views." },
        { name: "Backwaters", description: "Network of canals, lakes, and lagoons parallel to the coast." }
      ]
    },
    { 
      id: "kovalam",
      name: "KOVALAM", 
      desc: "Experience beach life with friendly tides, sun ups and sun downs - the best beach to unwind.", 
      image: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488360/kovalam-1_trhrck.jpg",
      images: [
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488360/kovalam-1_trhrck.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488360/kovalam-2_vutkfm.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488361/kovalam-3_wsmfvc.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488361/kovalam-4_kddjkm.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488545/Samudra-Beach_1_pq79i9.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488545/Samudra-Beach_2_jzvrhh.jpg"
      ],
      rating: "4.7",
      tours: "6",
      highlights: ["Lighthouse Beach", "Hawa Beach", "Water Sports", "Ayurvedic Massage"],
      bestSeason: "September to March",
      packages: ["Kerala Backwaters & Beaches", "Complete Kerala Experience", "Kerala Honeymoon Special"],
      longDescription: "Kovalam is an internationally renowned beach destination with three adjacent crescent beaches. It's known for its shallow waters and low tidal waves, making it ideal for swimming. The beaches are lined with coconut palms and offer spectacular sunset views.",
      climate: "Tropical coastal climate with temperatures between 24°C to 32°C",
      attractions: [
        { name: "Lighthouse Beach", description: "Most popular beach with a 35-meter high lighthouse." },
        { name: "Hawa Beach", description: "Known for its strong winds and beach activities." },
        { name: "Water Sports", description: "Enjoy surfing, parasailing, and other water activities." },
        { name: "Ayurvedic Massage", description: "Rejuvenate with traditional Ayurvedic treatments." }
      ]
    },
    { 
      id: "thekkady",
      name: "THEKKADY", 
      desc: "Home to Periyar Wildlife Sanctuary, offering thrilling jungle experiences and spice plantations.", 
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
      rating: "4.6",
      tours: "9",
      highlights: ["Periyar Wildlife Sanctuary", "Spice Plantations", "Bamboo Rafting", "Elephant Ride"],
      bestSeason: "November to April",
      packages: ["Kerala Wildlife Adventure", "Complete Kerala Experience", "Munnar Tea Plantations Tour"],
      longDescription: "Thekkady is home to the Periyar Wildlife Sanctuary, one of India's most fascinating natural wildlife reserves. Spread across 777 sq km, the sanctuary is known for its dense evergreen forests and diverse wildlife including elephants, tigers, and various bird species.",
      climate: "Pleasant climate with temperatures ranging from 15°C to 30°C",
      attractions: [
        { name: "Periyar Wildlife Sanctuary", description: "Famous tiger reserve and elephant sightings." },
        { name: "Spice Plantations", description: "Tour through cardamom, pepper, and coffee plantations." },
        { name: "Bamboo Rafting", description: "Unique rafting experience through the forest." },
        { name: "Elephant Ride", description: "Jungle safari on elephant back through forest trails." }
      ]
    },
    { 
      id: "kochi",
      name: "KOCHI", 
      desc: "The commercial capital of Kerala blending Portuguese, Dutch, and British colonial influences.", 
      image: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759490476/premium_photo-1697729597066-7b3d09b6dab7_oxwkpb.jpg",
      images: [
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759490476/premium_photo-1697729597066-7b3d09b6dab7_oxwkpb.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488068/padmanabha-swamy1_kebsa2.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488067/padmanabha-swamy2_bgsb1c.png",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488071/padmanabha-swamy3_iikmub.jpg"
      ],
      rating: "4.5",
      tours: "7",
      highlights: ["Fort Kochi", "Chinese Fishing Nets", "Jewish Synagogue", "Kathakali Dance"],
      bestSeason: "Year Round",
      packages: ["Kerala Cultural Heritage", "Complete Kerala Experience"],
      longDescription: "Kochi, also known as Cochin, is a vibrant port city with a rich colonial history and multicultural influences. From Chinese fishing nets to Portuguese architecture, Dutch palaces to British buildings, Kochi showcases a blend of various cultures that have influenced it over centuries.",
      climate: "Tropical climate with moderate temperatures year-round",
      attractions: [
        { name: "Fort Kochi", description: "Historic area with colonial architecture and cultural sites." },
        { name: "Chinese Fishing Nets", description: "Iconic fishing nets introduced by Chinese traders." },
        { name: "Jewish Synagogue", description: "Oldest active synagogue in Commonwealth nations." },
        { name: "Kathakali Dance", description: "Traditional dance-drama performances." }
      ]
    },
    { 
      id: "kumarakom",
      name: "KUMARAKOM", 
      desc: "A picturesque backwater destination with luxurious resorts and serene Vembanad Lake views.", 
      image: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759490668/Kumarkom_f7plnd.jpg",
      images: [
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759490668/Kumarkom_f7plnd.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759487637/backwater_1_b007co.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759487637/backwater_2_sfyek2.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759487637/backwater_3_xnhewv.jpg"
      ],
      rating: "4.8",
      tours: "4",
      highlights: ["Vembanad Lake", "Bird Sanctuary", "Luxury Resorts", "Houseboat Stays"],
      bestSeason: "September to March",
      packages: ["Kerala Backwaters & Beaches", "Luxury Kerala Experience"],
      longDescription: "Kumarakom is a cluster of little islands on the Vembanad Lake, known for its luxurious resorts, houseboat stays, and the famous Kumarakom Bird Sanctuary. This serene backwater destination offers a perfect blend of luxury and natural beauty.",
      climate: "Tropical climate with moderate temperatures",
      attractions: [
        { name: "Vembanad Lake", description: "Largest lake in Kerala, perfect for houseboat cruises." },
        { name: "Bird Sanctuary", description: "Home to migratory birds and local species." },
        { name: "Luxury Resorts", description: "World-class resorts with backwater views." },
        { name: "Houseboat Stays", description: "Luxurious overnight houseboat experiences." }
      ]
    },
    { 
      id: "guruvayur",
      name: "GURUVAYUR", 
      desc: "One of the most sacred Hindu temples dedicated to Lord Krishna with exquisite Kerala-style architecture.", 
      image: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759489125/Guruvayoor_Temple_1_ofddy3.jpg",
      images: [
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759489125/Guruvayoor_Temple_1_ofddy3.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759489126/Guruvayoor_Temple_2_yf2hsn.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759489126/Guruvayoor_Temple_3_snxhvj.jpg"
      ],
      rating: "4.8",
      tours: "3",
      highlights: ["Temple Darshan", "Traditional Architecture", "Spiritual Rituals", "Festivals"],
      bestSeason: "Year Round",
      packages: ["Kerala Temple Tour", "Cultural Heritage Tour"],
      longDescription: "Guruvayur Temple is one of Kerala's most sacred Hindu temples dedicated to Lord Krishna. The temple's idol is believed to be over 5,000 years old and the temple is often called 'Bhooloka Vaikunta' - the earthly abode of Lord Vishnu.",
      climate: "Tropical climate year-round",
      attractions: [
        { name: "Temple Darshan", description: "Sacred temple visit and spiritual experience." },
        { name: "Traditional Architecture", description: "Exquisite Kerala-style temple architecture." },
        { name: "Spiritual Rituals", description: "Witness traditional rituals and ceremonies." },
        { name: "Festivals", description: "Experience vibrant temple festivals and celebrations." }
      ]
    }
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
    "Kerala Temple Tour": { duration: "3 Days", price: "5,999" }
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
              <span className="bg-white/20 px-3 py-1">⭐ {place.rating}</span>
              <span className="bg-white/20 px-3 py-1">🚗 {place.tours} tours available</span>
              <span className="bg-white/20 px-3 py-1">📅 Best: {place.bestSeason}</span>
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

            {/* Place Description */}
            <div className="bg-white shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6">About {place.name}</h2>
              <p className="text-gray-700 leading-relaxed mb-6">{place.longDescription}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-emerald-50 p-6">
                  <h3 className="text-lg font-semibold mb-2">🌤️ Best Time to Visit</h3>
                  <p className="text-gray-700">{place.bestSeason}</p>
                </div>
                <div className="bg-emerald-50 p-6">
                  <h3 className="text-lg font-semibold mb-2">🌡️ Climate</h3>
                  <p className="text-gray-700">{place.climate}</p>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">Major Attractions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {place.attractions.map((attraction, index) => (
                  <div key={index} className="bg-gray-50 p-6 hover:shadow-md transition duration-300">
                    <h4 className="text-xl font-semibold mb-3 text-emerald-700">{attraction.name}</h4>
                    <p className="text-gray-600">{attraction.description}</p>
                  </div>
                ))}
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