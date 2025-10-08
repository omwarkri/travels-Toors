import React, { useState } from "react";
import { useParams, Link } from 'react-router-dom';
import SEOHead from "../components/common/SEOHead";
import Footer from "../components/common/Footer";

const SinglePackagePage = () => {
  const { packageId } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');
  
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

  // Find package by ID
  const pkg = packageData.find(pkg => pkg.id === packageId);
  
  if (!pkg) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="text-center max-w-md w-full">
          <div className="text-4xl mb-4">😔</div>
          <h1 className="text-xl font-bold text-gray-800 mb-3">Package Not Found</h1>
          <p className="text-gray-600 mb-6 text-sm">The package you're looking for doesn't exist or may have been moved.</p>
          <Link 
            to="/packages"
            className="inline-flex items-center px-5 py-2.5 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-600 transition duration-300 text-sm"
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
            className={`text-xs sm:text-sm ${
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
    <div className="min-h-screen bg-gray-50">
      <SEOHead 
        title={`${pkg.name} | ${pkg.duration} | Omkar Tour and Travels`}
        description={`${pkg.description} Book ${pkg.name} - ${pkg.duration} starting at ₹${pkg.price}.`}
        keywords={`${pkg.destination}, Kerala tour packages, ${pkg.name}, ${pkg.duration}`}
      />
      
      {/* Package Header - Mobile Responsive */}
      <section className="relative bg-gradient-to-r from-emerald-900 to-teal-800 text-white pt-16">
       {/* Package Header with Background Image */}
<section className="relative bg-gradient-to-r from-emerald-900 to-teal-800 text-white pt-16 overflow-hidden">
  {/* Background Image Container */}
  <div className="absolute inset-0">
    <img
      src={pkg.images[0]}
      alt={pkg.name}
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 to-teal-800/80"></div>
  </div>
  
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
    {/* Breadcrumb */}
    <div className="flex items-center space-x-1 text-xs sm:text-sm text-white/80 mb-3 sm:mb-4">
      <Link to="/" className="hover:text-white transition">Home</Link>
      <span>›</span>
      <Link to="/packages" className="hover:text-white transition">Packages</Link>
      <span>›</span>
      <span className="text-white truncate">{pkg.name}</span>
    </div>
    
    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 sm:gap-6">
      <div className="flex-1 min-w-0">
        {/* Badges */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
          <span className="bg-emerald-500 px-2 sm:px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap">Best Seller</span>
          <span className="bg-red-500 px-2 sm:px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap">{pkg.discount}</span>
          <span className="bg-blue-500 px-2 sm:px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap">{pkg.bestSeason}</span>
        </div>
        
        {/* Title */}
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 leading-tight break-words">
          {pkg.name}
        </h1>
        
        {/* Package Info */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm">
          <div className="flex items-center space-x-1 bg-white/20 px-2 py-1 rounded-full backdrop-blur-sm">
            <span className="text-xs">📍</span>
            <span className="truncate max-w-[120px] sm:max-w-none">{pkg.destination}</span>
          </div>
          <div className="flex items-center space-x-1 bg-white/20 px-2 py-1 rounded-full backdrop-blur-sm">
            <span className="text-xs">⏱️</span>
            <span>{pkg.duration}</span>
          </div>
          <div className="flex items-center space-x-1 bg-white/20 px-2 py-1 rounded-full backdrop-blur-sm">
            <span className="text-xs">⭐</span>
            <span>{pkg.rating} ({pkg.reviews})</span>
          </div>
        </div>
      </div>
      
      {/* Price - Mobile Responsive */}
      <div className="text-left lg:text-right mt-4 lg:mt-0">
        <div className="text-xl sm:text-2xl md:text-3xl font-bold">₹{pkg.price}</div>
        <div className="text-xs sm:text-sm text-white/70 line-through">₹{pkg.originalPrice}</div>
        <div className="text-emerald-300 text-xs sm:text-sm font-medium">per person</div>
      </div>
    </div>
  </div>
</section>
      </section>

      {/* Package Details - Mobile Responsive */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            {/* Image Gallery - Mobile Responsive */}
            {pkg.images && pkg.images.length > 1 && (
              <div className="bg-white rounded-lg sm:rounded-xl shadow-sm border border-gray-100 p-3 sm:p-4">
                <div className="flex flex-col space-y-3 sm:space-y-4">
                  {/* Main Image */}
                  <div className="rounded-lg overflow-hidden">
                    <img
                      src={pkg.images[selectedImage]}
                      alt={pkg.name}
                      className="w-full h-48 sm:h-64 md:h-80 object-cover"
                    />
                  </div>
                  
                  {/* Thumbnail Gallery */}
                  <div className="flex space-x-2 overflow-x-auto pb-1">
                    {pkg.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-lg overflow-hidden border transition duration-200 ${
                          selectedImage === index ? 'border-emerald-500 border-2' : 'border-gray-200'
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

            {/* Navigation Tabs - Mobile Responsive */}
            <div className="bg-white rounded-lg sm:rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="flex overflow-x-auto border-b border-gray-100">
                {['overview', 'itinerary', 'inclusions', 'reviews'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 min-w-0 px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-medium transition duration-200 whitespace-nowrap ${
                      activeTab === tab 
                        ? 'text-emerald-600 border-b-2 border-emerald-500 bg-emerald-50' 
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              <div className="p-4 sm:p-6">
                {/* Overview Tab */}
                {activeTab === 'overview' && (
                  <div className="space-y-4 sm:space-y-6">
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">Package Description</h3>
                      <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{pkg.description}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">Tour Highlights</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                        {pkg.highlights.map((highlight, index) => (
                          <div key={index} className="flex items-start space-x-2">
                            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></span>
                            <span className="text-gray-700 text-xs sm:text-sm">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Itinerary Tab */}
                {activeTab === 'itinerary' && (
                  <div className="space-y-3 sm:space-y-4">
                    {pkg.itinerary.map((day, index) => (
                      <div key={index} className="flex space-x-3 sm:space-x-4 p-3 bg-gray-50 rounded-lg">
                        <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                          <span className="text-emerald-600 font-bold text-xs">{day.day}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-gray-900 text-sm sm:text-base mb-1">{day.title}</h4>
                          <p className="text-gray-600 text-xs sm:text-sm">{day.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Inclusions Tab */}
                {activeTab === 'inclusions' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <h4 className="font-semibold text-emerald-600 text-sm sm:text-base mb-2 sm:mb-3 flex items-center">
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-500 rounded-full mr-2"></span>
                        What's Included
                      </h4>
                      <ul className="space-y-1.5 sm:space-y-2">
                        {pkg.inclusions.map((item, index) => (
                          <li key={index} className="flex items-start space-x-2 text-xs sm:text-sm text-gray-700">
                            <span className="text-emerald-500 mt-0.5 text-xs">✓</span>
                            <span className="break-words">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-red-600 text-sm sm:text-base mb-2 sm:mb-3 flex items-center">
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full mr-2"></span>
                        What's Excluded
                      </h4>
                      <ul className="space-y-1.5 sm:space-y-2">
                        {pkg.exclusions.map((item, index) => (
                          <li key={index} className="flex items-start space-x-2 text-xs sm:text-sm text-gray-700">
                            <span className="text-red-500 mt-0.5 text-xs">✗</span>
                            <span className="break-words">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Reviews Tab */}
                {activeTab === 'reviews' && (
                  <div className="space-y-3 sm:space-y-4">
                    {sampleReviews.map((review) => (
                      <div key={review.id} className="border-b border-gray-100 pb-3 sm:pb-4 last:border-b-0">
                        <div className="flex items-start space-x-2 sm:space-x-3">
                          <img
                            src={review.avatar}
                            alt={review.name}
                            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover flex-shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1 gap-1">
                              <h4 className="font-semibold text-gray-800 text-xs sm:text-sm">{review.name}</h4>
                              <span className="text-xs text-gray-500">
                                {new Date(review.date).toLocaleDateString('en-IN')}
                              </span>
                            </div>
                            
                            <div className="mb-1.5 sm:mb-2">
                              {renderStars(review.rating)}
                            </div>
                            
                            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                              {review.comment}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                    
                    {/* Review Summary */}
                    <div className="mt-3 sm:mt-4 p-3 bg-gray-50 rounded-lg">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="text-lg sm:text-xl font-bold text-gray-800">
                            {pkg.rating}
                          </div>
                          <div>
                            <div className="flex mb-1">
                              {renderStars(pkg.rating)}
                            </div>
                            <p className="text-gray-600 text-xs">
                              {pkg.reviews} reviews
                            </p>
                          </div>
                        </div>
                        
                        <div className="text-left sm:text-right">
                          <p className="text-gray-600 text-xs">
                            ⭐ 5000+ Happy Customers
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar - Booking Card - Mobile Responsive */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 bg-white rounded-lg sm:rounded-xl shadow-lg border border-gray-100 p-4 sm:p-6">
              <div className="text-center mb-4 sm:mb-6">
                <div className="text-xl sm:text-2xl font-bold text-gray-800">₹{pkg.price}</div>
                <div className="text-xs sm:text-sm text-gray-500 line-through">₹{pkg.originalPrice}</div>
                <div className="text-emerald-600 font-semibold text-xs sm:text-sm mt-1">{pkg.discount}</div>
                <div className="text-xs text-gray-500 mt-0.5">per person</div>
              </div>

              {/* Package Details */}
              <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600">Duration</span>
                  <span className="font-semibold">{pkg.duration}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600">Best Season</span>
                  <span className="font-semibold">{pkg.bestSeason}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600">Rating</span>
                  <span className="font-semibold">{pkg.rating} ⭐ ({pkg.reviews})</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 sm:space-y-3">
                <a
                  href="https://wa.me/919028803309"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-600 text-white py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300 flex items-center justify-center text-xs sm:text-sm shadow-md hover:shadow-lg"
                >
                  <span className="mr-2">💬</span>
                  Book on WhatsApp
                </a>
                <a
                  href="tel:+919028803309"
                  className="w-full bg-emerald-500 text-white py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-emerald-600 transition duration-300 flex items-center justify-center text-xs sm:text-sm shadow-md hover:shadow-lg"
                >
                  <span className="mr-2">📞</span>
                  Call Now
                </a>
              </div>

              {/* Quick Info */}
              <div className="mt-4 sm:mt-6 space-y-1.5 sm:space-y-2">
                <div className="flex items-center text-xs text-gray-600">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2"></span>
                  5000+ Happy Customers
                </div>
                <div className="flex items-center text-xs text-gray-600">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2"></span>
                  Best Price Guarantee
                </div>
                <div className="flex items-center text-xs text-gray-600">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2"></span>
                  24/7 Support
                </div>
              </div>
            </div>

            {/* Trust Badges - Mobile Responsive */}
            <div className="mt-4 sm:mt-6 bg-white rounded-lg sm:rounded-xl shadow-sm border border-gray-100 p-3 sm:p-4">
              <h4 className="font-semibold text-gray-800 text-sm mb-2 sm:mb-3">Why Choose Us</h4>
              <div className="grid grid-cols-2 gap-2 sm:gap-3 text-center">
                <div className="p-2 bg-gray-50 rounded-lg">
                  <div className="text-emerald-500 text-base sm:text-lg">⭐</div>
                  <div className="text-xs text-gray-600 mt-1">4.8/5 Rating</div>
                </div>
                <div className="p-2 bg-gray-50 rounded-lg">
                  <div className="text-emerald-500 text-base sm:text-lg">🏆</div>
                  <div className="text-xs text-gray-600 mt-1">Best Price</div>
                </div>
                <div className="p-2 bg-gray-50 rounded-lg">
                  <div className="text-emerald-500 text-base sm:text-lg">🔒</div>
                  <div className="text-xs text-gray-600 mt-1">Secure</div>
                </div>
                <div className="p-2 bg-gray-50 rounded-lg">
                  <div className="text-emerald-500 text-base sm:text-lg">💼</div>
                  <div className="text-xs text-gray-600 mt-1">10+ Years</div>
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