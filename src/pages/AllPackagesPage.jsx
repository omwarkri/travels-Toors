import React from "react";
// import { Link } from 'react-router-dom';
import SEOHead from "../components/common/SEOHead";
import Footer from "../components/common/Footer";
import TourPackageCard from "../components/packages/TourPackageCard";
// import { getAllPackages } from "../data/packagesData";

const AllPackagesPage = () => {
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



  return (
    <div className="pt-20 min-h-screen py-8">
      <SEOHead 
        title="All Kerala Tour Packages | Omkar Tour and Travels - Best Deals 2025"
        description="Browse all Kerala tour packages from Omkar Tour and Travels. Backwaters, beaches, tea plantations, wildlife & cultural tours. Best price guarantee. Book your dream Kerala vacation today!"
        keywords="Kerala tour packages, Kerala backwaters, Alleppey houseboat, Munnar tea estates, Kerala beaches, wildlife tours, cultural packages, honeymoon packages Kerala"
      />
      
      <section className="max-w-7xl mx-auto py-8  md:py-16">
        <div className="text-center mb-8 ">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium mb-4">
            🏆 {allPackages.length}+ Curated Packages
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-gray-800 mb-6 tracking-wider uppercase">Kerala Tour Packages</h1>
         <p className="text-md md:text-xl text-gray-500 max-w-3xl mx-auto">
  Your perfect Kerala awaits. From misty hills to serene backwaters - let us craft your dream vacation.
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
        {/* <div className="flex flex-wrap gap-4 mb-12 justify-center">
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
        </div> */}

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