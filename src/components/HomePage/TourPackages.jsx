import React from "react";
import { Link } from 'react-router-dom';
import TourPackageCard from '../packages/TourPackageCard';

const TourPackages = ({ id = "packages" }) => {
  // All package data from the screenshots
const allPackages = [
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
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1760193262/kochi_wr3gbb.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1760193264/munnar_mycc44.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1760193265/thekkady-tour-01_otzv8q.jpg",
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

  const packages = allPackages.slice(0, 6); // Get first 6 packages for the homepage

  return ( 
    <section id={id} className="max-w-7xl mx-auto mt-6 px-4 sm:px-6 py-8 md:py-16">
      <div className="text-center mb-8">
        <div className="inline-flex items-center px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium mb-2 md:mb-4">
          Omkar Exclusive Packages 
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-gray-800 mb-1 md:mb-6 tracking-wider uppercase">
          Curated Kerala Experiences
        </h1>
        <p className="text-sm md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
          Curated Kerala experiences with local insights, premium stays & personalized service.
        </p>
      </div>

      {/* Mobile Horizontal Scroll Container */}
      <div className="lg:hidden">
        <div className="flex overflow-x-auto pb-6 -mx-4 px-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <div className="flex space-x-6">
            {packages.map((pkg, index) => (
              <div 
                key={pkg.id} 
                className="w-80 flex-shrink-0 snap-start h-full"
              >
                <TourPackageCard pkg={pkg} />
              </div>
            ))}
          </div>
        </div>
        
        {/* Scroll Indicator for Mobile */}
        <div className="flex justify-center mt-1 space-x-2 lg:hidden">
          {packages.map((_, index) => (
            <div 
              key={index}
              className="w-2 h-2 rounded-full bg-gray-300 transition-all duration-300"
            />
          ))}
        </div>
      </div>

      {/* Desktop Grid Layout with Equal Height Cards */}
      <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
        {packages.map((pkg, index) => (
          <div key={pkg.id} className="h-full flex">
            <TourPackageCard pkg={pkg} />
          </div>
        ))}
      </div>

      {/* View All Packages CTA */}
      <div className="text-center mt-8">
        <Link 
          to="/packages" 
          className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-emerald-500 text-emerald-600 font-semibold hover:bg-emerald-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl text-sm sm:text-base"
        >
          View All {allPackages.length}+ Packages
          <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </Link>
      </div>

      {/* Trust Indicators */}
      <div className="mt-6 sm:mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 text-center px-4">
        <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm border border-gray-100">
          <div className="w-6 h-6 sm:w-7 sm:h-7  rounded-full flex items-center justify-center mx-auto mb-1 sm:mb-2">
            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
          </div>
          <h3 className="text-xs sm:text-sm font-semibold mb-1">4.8/5 Rating</h3>
          <p className="text-gray-600 text-xs">Rated excellent by 500+ travelers</p>
        </div>
        <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm border border-gray-100">
          <div className="w-6 h-6 sm:w-7 sm:h-7  rounded-full flex items-center justify-center mx-auto mb-1 sm:mb-2">
            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <h3 className="text-xs sm:text-sm font-semibold mb-1">Best Price Guarantee</h3>
          <p className="text-gray-600 text-xs">Get the best value for your money</p>
        </div>
        <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm border border-gray-100 col-span-2 sm:col-span-1">
          <div className="w-6 h-6 sm:w-7 sm:h-7  rounded-full flex items-center justify-center mx-auto mb-1 sm:mb-2">
            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
            </svg>
          </div>
          <h3 className="text-xs sm:text-sm font-semibold mb-1">24/7 Support</h3>
          <p className="text-gray-600 text-xs">Dedicated travel support throughout</p>
        </div>
      </div>
    </section>
  );
};

export default TourPackages;