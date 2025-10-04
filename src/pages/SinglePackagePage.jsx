import React, { useState } from "react";
import { useParams, Link } from 'react-router-dom';
import SEOHead from "../components/common/SEOHead";
import Footer from "../components/common/Footer";

const SinglePackagePage = () => {
  const { packageId } = useParams();
  console.log("Package ID from URL:", packageId);
  const [selectedImage, setSelectedImage] = useState(0);
  
  // Sample reviews data
  const sampleReviews = [
    {
      id: 1,
      name: "Pranit",
      rating: 5,
      date: "2025-04-15",
      comment: "Amazing experience! The houseboat stay was absolutely magical. The food was delicious and the staff was very helpful. Will definitely recommend to friends and family.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Rajesh",
      rating: 4,
      date: "2024-12-10",
      comment: "Great package overall. The backwater cruise was peaceful and scenic. Only suggestion would be to include more meal options. Otherwise, excellent value for money.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Anita",
      rating: 5,
      date: "2024-12-08",
      comment: "Perfect family vacation! The kids loved the boat ride and we enjoyed the serene environment. The tour guide was knowledgeable and made our trip memorable.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "Michael",
      rating: 4,
      date: "2024-12-05",
      comment: "Beautiful locations and well-organized itinerary. The accommodation was comfortable and the transportation was punctual. Good experience overall.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 5,
      name: "Sneha",
      rating: 5,
      date: "2024-12-01",
      comment: "Absolutely loved every moment! The sunset views were breathtaking and the cultural experiences were authentic. Omkar Tours made everything so smooth and hassle-free.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 6,
      name: "Vikram",
      rating: 4,
      date: "2024-11-28",
      comment: "Value for money package. The destinations were well-chosen and the timing was perfect. The driver was professional and the vehicle was comfortable.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
    }
  ];

  // Direct package data (same structure as AllPackagesPage)
const packageData = [
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
      image: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759330510/Allappy_1_qziygx.jpg",
      images: [
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759330510/Allappy_1_qziygx.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759330510/Allappy_4_ruiygh.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759330511/Allappy_3_ktn290.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759330510/Alleppey_2_bmbow2.jpg"
      ],
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
      image: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759487637/backwater_1_b007co.jpg",
      images: [
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759487637/backwater_1_b007co.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759487637/backwater_2_sfyek2.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759487637/backwater_3_xnhewv.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488360/kovalam-1_trhrck.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488360/kovalam-2_vutkfm.jpg"
      ],
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
      image: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488068/padmanabha-swamy1_kebsa2.jpg",
      images: [
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488068/padmanabha-swamy1_kebsa2.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488067/padmanabha-swamy2_bgsb1c.png",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488071/padmanabha-swamy3_iikmub.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759489125/Guruvayoor_Temple_1_ofddy3.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488539/ambalapuzha-1_nsjzfe.jpg"
      ],
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
      image: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488360/kovalam-1_trhrck.jpg",
      images: [
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488360/kovalam-1_trhrck.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488360/kovalam-2_vutkfm.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488361/kovalam-3_wsmfvc.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488361/kovalam-4_kddjkm.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759330510/Allappy_1_qziygx.jpg"
      ],
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
      image: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759476405/tea_1_jrixag.jpg",
      images: [
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759476405/tea_1_jrixag.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759476405/tea_2_rmqxfj.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759476405/tea_3_shjd5a.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759476406/tea_4_soxsj1.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759476407/tea_5_xlgonr.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759476406/tea_6_wh8ied.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759487813/periyar_lake_1_flz8vu.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488545/Samudra-Beach_1_pq79i9.jpg"
      ],
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
      image: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759487813/periyar_lake_1_flz8vu.jpg",
      images: [
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759487813/periyar_lake_1_flz8vu.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759487815/periyar_lake_3_ojjgtd.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759487814/periyar_lake_2_ie3uwh.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759476405/tea_1_jrixag.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759487637/backwater_1_b007co.jpg"
      ],
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
    },
    {
      id: "romantic-hills-backwaters",
      name: "Romantic Hills & Backwaters Kerala Tour",
      duration: "06 Nights / 07 Days",
      destination: "Kochi, Munnar, Thekkady, Alleppey, Marari Beach",
      places: ["Kochi", "Munnar", "Thekkady", "Alleppey", "Marari Beach"],
      bestSeason: "Sep - May",
      price: 27999,
      originalPrice: 31999,
      discount: "12% Off",
      rating: 4.9,
      reviews: 130,
      image: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488545/Samudra-Beach_1_pq79i9.jpg",
      images: [
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488545/Samudra-Beach_1_pq79i9.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488545/Samudra-Beach_2_jzvrhh.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759476405/tea_1_jrixag.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759487637/backwater_1_b007co.jpg"
      ],
      description: "A romantic getaway through Kerala's picturesque hills and serene backwaters.",
      highlights: [
        "Day 1: Arrival in Kochi - Transfer to Munnar and check-in",
        "Day 2: Munnar Romance - Tea estates, Mattupetty Dam, Echo Point",
        "Day 3: Scenic Ride to Thekkady - Enjoy scenic ride and spice garden visit",
        "Day 4: Houseboat Experience - Thekkady to Alleppey, check-in to houseboat",
        "Day 5: Backwaters Cruise - Houseboat cruise, sunset on the backwaters",
        "Day 6: Beach Relaxation - Drive to Marari Beach, relax and enjoy coastal charm",
        "Day 7: Departure - Transfer to Kochi for departure"
      ],
      itinerary: [
        { day: "Day 1", title: "Arrival in Kochi", description: "Transfer to Munnar and check-in." },
        { day: "Day 2", title: "Munnar Romance", description: "Tea estates, Mattupetty Dam, Echo Point." },
        { day: "Day 3", title: "Scenic Ride to Thekkady", description: "Enjoy scenic ride and spice garden visit." },
        { day: "Day 4", title: "Houseboat Experience", description: "Thekkady to Alleppey, check-in to houseboat." },
        { day: "Day 5", title: "Backwaters Cruise", description: "Houseboat cruise, sunset on the backwaters." },
        { day: "Day 6", title: "Beach Relaxation", description: "Drive to Marari Beach, relax and enjoy coastal charm." },
        { day: "Day 7", title: "Departure", description: "Transfer to Kochi for departure." }
      ],
      inclusions: ["Romantic stays", "Candlelight dinners", "Meals", "Transfers", "Houseboat Stay"],
      exclusions: ["Flights", "Personal expenses", "Travel insurance"]
    },
    {
      id: "spiritual-retreat",
      name: "Spiritual Retreat in Kerala",
      duration: "07 Nights / 08 Days",
      destination: "Kochi, Munnar, Thekkady, Alleppey, Kovalam, Trivandrum",
      places: ["Kochi", "Munnar", "Thekkady", "Alleppey", "Kovalam", "Trivandrum"],
      bestSeason: "Year Round",
      price: 24999,
      originalPrice: 28999,
      discount: "14% Off",
      rating: 4.8,
      reviews: 100,
      image: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759489125/Guruvayoor_Temple_1_ofddy3.jpg",
      images: [
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759489125/Guruvayoor_Temple_1_ofddy3.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759489126/Guruvayoor_Temple_2_yf2hsn.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759489126/Guruvayoor_Temple_3_snxhvj.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488068/padmanabha-swamy1_kebsa2.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488539/ambalapuzha-1_nsjzfe.jpg"
      ],
      description: "A spiritual journey through Kerala's sacred sites and serene landscapes.",
      highlights: [
        "Day 1: Arrival in Kochi - Transfer to hotel and acclimatization",
        "Day 2: Kochi Local Sightseeing - Fort Kochi, Mattancherry Palace, Chinese fishing nets",
        "Day 3: Kochi to Munnar - Visit waterfalls en route",
        "Day 4: Munnar Sightseeing - Tea Gardens, Eravikulam National Park",
        "Day 5: Munnar to Thekkady - Periyar Wildlife Sanctuary visit",
        "Day 6: Thekkady to Alleppey - Houseboat stay in backwaters",
        "Day 7: Alleppey to Kovalam - Leisure at beach",
        "Day 8: Departure - Transfer to Trivandrum for departure"
      ],
      itinerary: [
        { day: "Day 1", title: "Arrival in Kochi", description: "Transfer to hotel and acclimatization." },
        { day: "Day 2", title: "Kochi Local Sightseeing", description: "Fort Kochi, Mattancherry Palace, Chinese fishing nets." },
        { day: "Day 3", title: "Kochi to Munnar", description: "Visit waterfalls en route." },
        { day: "Day 4", title: "Munnar Sightseeing", description: "Tea Gardens, Eravikulam National Park." },
        { day: "Day 5", title: "Munnar to Thekkady", description: "Periyar Wildlife Sanctuary visit." },
        { day: "Day 6", title: "Thekkady to Alleppey", description: "Houseboat stay in backwaters." },
        { day: "Day 7", title: "Alleppey to Kovalam", description: "Leisure at beach." },
        { day: "Day 8", title: "Departure", description: "Transfer to Trivandrum for departure." }
      ],
      inclusions: ["Hotels", "Meals", "Transfers", "Sightseeing", "Houseboat Stay"],
      exclusions: ["Flights", "Personal expenses", "Travel insurance"]
    },
    {
      id: "hidden-villages",
      name: "Hidden Villages of Kerala Tour",
      duration: "06 Nights / 07 Days",
      destination: "Kochi, Kumbalangi, Kumarakom, Alleppey, Kovalam, Trivandrum",
      places: ["Kochi", "Kumbalangi", "Kumarakom", "Alleppey", "Kovalam", "Trivandrum"],
      bestSeason: "Sep - May",
      price: 25999,
      originalPrice: 29999,
      discount: "13% Off",
      rating: 4.7,
      reviews: 75,
      image: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488539/ambalapuzha-1_nsjzfe.jpg",
      images: [
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488539/ambalapuzha-1_nsjzfe.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488540/ambalapuzha-2_utnlzm.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759487637/backwater_1_b007co.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759330510/Allappy_1_qziygx.jpg"
      ],
      description: "Explore the authentic village life and hidden gems of Kerala.",
      highlights: [
        "Day 1: Arrival in Kochi - Acclimatization and local markets",
        "Day 2: Kochi Sightseeing - Fort Kochi, Mattancherry Palace, Jewish Synagogue",
        "Day 3: Kochi to Kumbalangi - Explore traditional village life",
        "Day 4: Kumbalangi to Kumarakom - Enjoy backwater serenity",
        "Day 5: Kumarakom to Alleppey - Houseboat cruise through villages",
        "Day 6: Alleppey to Kovalam - En route visit temples and spice plantations",
        "Day 7: Departure - Transfer to Trivandrum for departure"
      ],
      itinerary: [
        { day: "Day 1", title: "Arrival in Kochi", description: "Acclimatization and local markets." },
        { day: "Day 2", title: "Kochi Sightseeing", description: "Fort Kochi, Mattancherry Palace, Jewish Synagogue." },
        { day: "Day 3", title: "Kochi to Kumbalangi", description: "Explore traditional village life." },
        { day: "Day 4", title: "Kumbalangi to Kumarakom", description: "Enjoy backwater serenity." },
        { day: "Day 5", title: "Kumarakom to Alleppey", description: "Houseboat cruise through villages." },
        { day: "Day 6", title: "Alleppey to Kovalam", description: "En route visit temples and spice plantations." },
        { day: "Day 7", title: "Departure", description: "Transfer to Trivandrum for departure." }
      ],
      inclusions: ["Village stays", "Meals", "Transfers", "Sightseeing", "Houseboat Stay"],
      exclusions: ["Flights", "Personal expenses", "Travel insurance"]
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

  // Function to render star ratings
  const renderStars = (rating) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`text-lg ${
              i < rating ? 'text-yellow-400' : 'text-gray-300'
            }`}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="pt-20 min-h-screen">
      <SEOHead 
        title={`${pkg.name} | ${pkg.duration} | Omkar Tour and Travels`}
        description={`${pkg.description} Book ${pkg.name} - ${pkg.duration} starting at ₹${pkg.price}.`}
        keywords={`${pkg.destination}, Kerala tour packages, ${pkg.name}, ${pkg.duration}`}
      />
      
      {/* Package Header */}
      <section className="relative h-96 bg-gray-900 py-8">
        <img
          src={pkg.images ? pkg.images[selectedImage] : pkg.image}
          alt={pkg.name}
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="max-w-7xl mx-auto py-8  md:py-16">
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
      <section className="max-w-7xl mx-auto py-8">
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

      {/* Customer Reviews - Mobile Responsive */}
<div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 mb-6 sm:mb-8">
  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Customer Reviews</h2>
  
  <div className="space-y-4 sm:space-y-6">
    {sampleReviews.map((review) => (
      <div key={review.id} className="border-b border-gray-200 pb-4 sm:pb-6 last:border-b-0">
        <div className="flex items-start space-x-3 sm:space-x-4">
          <img
            src={review.avatar}
            alt={review.name}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            {/* Header - Stack on mobile, row on larger screens */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-1 sm:gap-0">
              <h4 className="font-semibold text-gray-800 text-sm sm:text-base md:text-lg">{review.name}</h4>
              <span className="text-xs sm:text-sm text-gray-500">
                {new Date(review.date).toLocaleDateString('en-IN', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </div>
            
            {/* Star Rating */}
            <div className="mb-2 sm:mb-3">
              {renderStars(review.rating)}
            </div>
            
            {/* Review Comment */}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {review.comment}
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
  
  {/* Review Summary - Responsive */}
  <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gray-50 rounded-lg sm:rounded-xl">
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 text-center sm:text-left">
          {pkg.rating}
        </div>
        <div className="text-center sm:text-left">
          <div className="flex justify-center sm:justify-start mb-1">
            {renderStars(pkg.rating)}
          </div>
          <p className="text-gray-600 text-sm sm:text-base">
            Based on {pkg.reviews} reviews
          </p>
        </div>
      </div>
      
      <div className="text-center sm:text-right">
        <p className="text-gray-600 text-sm sm:text-base mb-1 sm:mb-2">
          ⭐ 5000+ Happy Customers
        </p>
        <p className="text-gray-600 text-sm sm:text-base">
          🏆 Trusted Since 2010
        </p>
      </div>
    </div>
  </div>
</div>
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