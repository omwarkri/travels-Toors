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
    image: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759487637/backwater_1_b007co.jpg",
    images: [
      "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759487637/backwater_1_b007co.jpg",
      "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759487637/backwater_2_sfyek2.jpg","https://res.cloudinary.com/dl2gcscfa/image/upload/v1759487637/backwater_3_xnhewv.jpg"
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
    image: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759476405/tea_1_jrixag.jpg",
    images: ["https://res.cloudinary.com/dl2gcscfa/image/upload/v1759476405/tea_2_rmqxfj.jpg","https://res.cloudinary.com/dl2gcscfa/image/upload/v1759476405/tea_3_shjd5a.jpg","https://res.cloudinary.com/dl2gcscfa/image/upload/v1759476406/tea_4_soxsj1.jpg","https://res.cloudinary.com/dl2gcscfa/image/upload/v1759476407/tea_5_xlgonr.jpg","https://res.cloudinary.com/dl2gcscfa/image/upload/v1759476406/tea_6_wh8ied.jpg"],
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
    image: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759487813/periyar_lake_1_flz8vu.jpg",
    images: ["https://res.cloudinary.com/dl2gcscfa/image/upload/v1759487813/periyar_lake_1_flz8vu.jpg","https://res.cloudinary.com/dl2gcscfa/image/upload/v1759487815/periyar_lake_3_ojjgtd.jpg","https://res.cloudinary.com/dl2gcscfa/image/upload/v1759487814/periyar_lake_2_ie3uwh.jpg","https://res.cloudinary.com/dl2gcscfa/image/upload/v1759487815/periyar_lake_3_ojjgtd.jpg","https://res.cloudinary.com/dl2gcscfa/image/upload/v1759487815/periyar_lake_4_dkm7qi.jpg","https://res.cloudinary.com/dl2gcscfa/image/upload/v1759487816/periyar_lake_5_h2jvxj.jpg","https://res.cloudinary.com/dl2gcscfa/image/upload/v1759487816/periyar_lake_6_zc1hqa.jpg","https://res.cloudinary.com/dl2gcscfa/image/upload/v1759487817/periyar_lake_7_w0rwap.jpg","https://res.cloudinary.com/dl2gcscfa/image/upload/v1759487821/periyar_lake_8_xfdghv.jpg"],
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
      image: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488540/boat_race_1_zqkzfd.jpg",
  images: [
    "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488540/boat_race_1_zqkzfd.jpg",
    "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488541/boat_race_2_wp6u5y.jpg",
    "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488542/boat_race_3_cmenpt.jpg",
    "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488547/boat_race_4_rgquq4.jpg"
  ],
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
  id: "padmanabhaswamy-temple",
  name: "Padmanabhaswamy Temple",
  duration: "02 Nights / 03 Days",
  destination: "Thiruvananthapuram, Kerala",
  places: ["thiruvananthapuram"],
  bestSeason: "Year Round",
  price: 11999,
  originalPrice: 14999,
  discount: "20% Off",
  rating: 4.6,
  reviews: 28,
  image: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488068/padmanabha-swamy1_kebsa2.jpg",
  images: [
    "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488068/padmanabha-swamy1_kebsa2.jpg",
    "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488067/padmanabha-swamy2_bgsb1c.png",
    "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488071/padmanabha-swamy3_iikmub.jpg"
  ],
  description: "The Padmanabhaswamy Temple in Thiruvananthapuram is one of the richest and most revered temples in India, dedicated to Lord Vishnu in Anantha Shayana (reclining) posture.",
  detailedDescription: "Located in Kerala's capital city, the Padmanabhaswamy Temple is a masterpiece of Dravidian architecture and one of the 108 Divya Desams of Lord Vishnu. The deity is enshrined in the Anantha Shayana posture, reclining on the serpent Adi Shesha. The temple is globally renowned for its immense hidden treasures, intricate stone carvings, and strict traditions. Devotees can witness the grandeur of rituals, majestic gopuram (tower), and experience divine spirituality. The annual Alpashy and Panguni festivals attract thousands of pilgrims, making it a cultural and spiritual hub.",
  highlights: [
    "Dravidian Architecture",
    "Lord Vishnu in Anantha Shayana posture",
    "Richest Temple Treasures",
    "Grand Festivals",
    "Spiritual Rituals"
  ],
  itinerary: [
    { day: "Day 1", title: "Arrival in Thiruvananthapuram", description: "Check-in, evening darshan at the temple." },
    { day: "Day 2", title: "Temple Exploration", description: "Attend morning rituals, explore temple architecture, visit nearby attractions like Napier Museum and Kovalam Beach." },
    { day: "Day 3", title: "Departure", description: "Shopping for souvenirs, transfer to airport or railway station." }
  ],
  inclusions: ["Hotel stay", "Temple guidance", "AC vehicle", "Darshan assistance", "All taxes"],
  exclusions: ["Flights", "Meals", "Personal expenses", "Travel insurance"]
}
,
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
    image: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488360/kovalam-1_trhrck.jpg",
    images: ["https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488360/kovalam-1_trhrck.jpg","https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488360/kovalam-2_vutkfm.jpg","https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488361/kovalam-3_wsmfvc.jpg","https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488361/kovalam-4_kddjkm.jpg"],
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
    image: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759489125/Guruvayoor_Temple_1_ofddy3.jpg",
    images: ["https://res.cloudinary.com/dl2gcscfa/image/upload/v1759489125/Guruvayoor_Temple_1_ofddy3.jpg","https://res.cloudinary.com/dl2gcscfa/image/upload/v1759489126/Guruvayoor_Temple_2_yf2hsn.jpg","https://res.cloudinary.com/dl2gcscfa/image/upload/v1759489126/Guruvayoor_Temple_3_snxhvj.jpg"],
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
    image: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488539/ambalapuzha-1_nsjzfe.jpg",
    images: ["https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488539/ambalapuzha-1_nsjzfe.jpg","https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488540/ambalapuzha-2_utnlzm.jpg",""],
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
  },


   {
  id: "Boat Race",
  name: "Kerala Boat Race Experience",
  duration: "02 Nights / 03 Days",
  destination: "Alappuzha, Kerala",
  places: ["alappuzha"],
  bestSeason: "August (Race Season) / Year Round",
  price: 11999,
  originalPrice: 14999,
  discount: "20% Off",
  rating: 4.6,
  reviews: 28,
  image: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488540/boat_race_1_zqkzfd.jpg",
  images: [
    "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488540/boat_race_1_zqkzfd.jpg",
    "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488541/boat_race_2_wp6u5y.jpg",
    "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488542/boat_race_3_cmenpt.jpg",
    "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488547/boat_race_4_rgquq4.jpg"
  ],
  description: "Experience the thrill of Kerala's famous snake boat races. Witness massive chundan vallams with 100+ oarsmen racing in perfect harmony on Punnamada Lake.",
  detailedDescription: "Immerse yourself in Kerala's most exciting cultural spectacle - the traditional snake boat races. Watch majestic chundan vallams (snake boats), each manned by over 100 oarsmen rowing in perfect rhythm to traditional vanchipattu (boat songs). The Nehru Trophy Boat Race, held annually on Punnamada Lake in Alappuzha, is the most famous of these events. Experience the electric atmosphere as thousands of spectators cheer for their favorite teams. Beyond the races, explore the beautiful backwaters, visit historic temples, and enjoy Kerala's unique water culture. This package offers both race season excitement and year-round cultural experiences.",
  highlights: [
    "Snake Boat Race Viewing", 
    "Traditional Boat Songs", 
    "Backwater Cruise", 
    "Cultural Performances", 
    "Local Cuisine"
  ],
  itinerary: [
    { 
      day: "Day 1", 
      title: "Arrival in Alappuzha", 
      description: "Check into your hotel, orientation about boat race culture, evening backwater cruise." 
    },
    { 
      day: "Day 2", 
      title: "Boat Race Experience", 
      description: "Full day at the boat race event, witness various race categories, enjoy cultural programs and local food." 
    },
    { 
      day: "Day 3", 
      title: "Departure", 
      description: "Visit local boat building yard, learn about traditional boat making, transfer to airport." 
    }
  ],
  inclusions: [
    "Hotel accommodation", 
    "Boat race tickets", 
    "Backwater cruise", 
    "Cultural show", 
    "AC vehicle", 
    "All taxes"
  ],
  exclusions: [
    "Flights", 
    "Meals not mentioned", 
    "Personal expenses", 
    "Travel insurance"
  ]
},
{
  id: "Samudra Beach",
  name: "Samudra Beach Retreat",
  duration: "03 Nights / 04 Days",
  destination: "Kovalam, Thiruvananthapuram",
  places: ["kovalam"],
  bestSeason: "Sep - Mar",
  price: 15999,
  originalPrice: 19999,
  discount: "20% Off",
  rating: 4.7,
  reviews: 48,
  image: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488545/Samudra-Beach_1_pq79i9.jpg",
  images: [
    "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488545/Samudra-Beach_1_pq79i9.jpg",
    "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488545/Samudra-Beach_2_jzvrhh.jpg",
  ],
  description: "Discover the serene beauty of Samudra Beach, the largest and most tranquil of Kovalam's three crescent bays, known for its luxury resorts and peaceful atmosphere.",
  detailedDescription: "Experience the ultimate beach getaway at Samudra Beach, the northernmost and most exclusive of Kovalam's three famous crescent-shaped beaches. Unlike its bustling neighbors, Samudra Beach offers a more tranquil and sophisticated atmosphere, lined with luxury resorts and Ayurvedic centers. Enjoy long, peaceful walks on the golden sands, witness spectacular sunsets over the Arabian Sea, and indulge in rejuvenating Ayurvedic treatments. The beach's calm waters are perfect for swimming and leisurely dips. Explore the nearby fishing village to witness traditional fishing techniques and savor the freshest seafood. Samudra Beach provides the perfect balance of luxury, wellness, and authentic coastal experiences.",
  highlights: [
    "Tranquil Beach Experience",
    "Luxury Beach Resorts", 
    "Ayurvedic Wellness Treatments",
    "Sunset Views",
    "Fresh Seafood Dining"
  ],
  itinerary: [
    { 
      day: "Day 1", 
      title: "Arrival & Beach Relaxation", 
      description: "Check into your beachfront resort, evening stroll along Samudra Beach, witness spectacular sunset." 
    },
    { 
      day: "Day 2", 
      title: "Beach Wellness Day", 
      description: "Morning yoga session, Ayurvedic massage treatment, leisure time at the beach, seafood dinner." 
    },
    { 
      day: "Day 3", 
      title: "Coastal Exploration", 
      description: "Visit Vizhinjam Lighthouse for panoramic views, explore local fishing village, evening cultural show." 
    },
    { 
      day: "Day 4", 
      title: "Departure", 
      description: "Final beach relaxation, check-out and transfer to Thiruvananthapuram airport." 
    }
  ],
  inclusions: [
    "Beachfront resort accommodation",
    "Daily breakfast", 
    "Ayurvedic massage session",
    "Yoga session",
    "AC vehicle for transfers",
    "Lighthouse entry tickets",
    "All taxes"
  ],
  exclusions: [
    "Flights", 
    "Lunch and dinner", 
    "Additional spa treatments",
    "Water sports activities", 
    "Personal expenses", 
    "Travel insurance"
  ]
}

  ];

  // Extended tour packages (6+ days)
  const extendedPackages = [
    {
      id: "kerala-grand-tour",
      name: "Kerala Grand Tour",
      duration: "09 Nights / 10 Days",
      destination: "Cochin, Munnar, Thekkady, Alleppey, Kovalam",
      places: ["cochin", "munnar", "thekkady", "alleppey", "kovalam"],
      bestSeason: "Sep - May",
      price: 45999,
      originalPrice: 54999,
      discount: "16% Off",
      rating: 4.9,
      reviews: 124,
      image: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759490000/kerala-grand-tour_ujkf8s.jpg",
      images: [
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759490000/kerala-grand-tour_ujkf8s.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759490001/kerala-backwaters_ozm2xp.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759490002/kerala-tea-estates_xqjvlr.jpg"
      ],
      description: "Comprehensive Kerala experience covering backwaters, tea estates, wildlife, beaches, and cultural heritage in one unforgettable journey.",
      detailedDescription: "Embark on the ultimate Kerala adventure with our comprehensive 10-day grand tour. This meticulously crafted itinerary takes you through the very best of God's Own Country. Begin in historic Cochin with its colonial heritage, ascend to the misty tea plantations of Munnar, explore the wildlife-rich forests of Thekkady, cruise through the serene backwaters of Alleppey, and conclude with sun-kissed beaches in Kovalam. Experience diverse landscapes, rich cultures, authentic cuisine, and warm hospitality across Kerala's most iconic destinations.",
      highlights: ["Fort Kochi Heritage", "Munnar Tea Gardens", "Periyar Wildlife", "Houseboat Cruise", "Kovalam Beaches", "Cultural Shows", "Spice Plantations", "Ayurvedic Experience"],
      itinerary: [
        { day: "Day 1", title: "Arrival in Cochin", description: "Airport pickup, check-in at hotel, explore Fort Kochi, Chinese fishing nets, evening cultural show." },
        { day: "Day 2", title: "Cochin to Munnar", description: "Scenic drive to Munnar (4 hours), visit spice gardens, check-in at plantation resort." },
        { day: "Day 3", title: "Munnar Exploration", description: "Visit tea plantations, tea museum, Echo Point, Mattupetty Dam, and Kundala Lake." },
        { day: "Day 4", title: "Munnar to Thekkady", description: "Drive to Thekkady (3 hours), afternoon Periyar Lake boat cruise, wildlife spotting." },
        { day: "Day 5", title: "Thekkady Adventures", description: "Morning spice plantation tour, elephant ride, evening Kathakali dance performance." },
        { day: "Day 6", title: "Thekkady to Alleppey", description: "Drive to Alleppey (4 hours), check into traditional houseboat, overnight backwater cruise." },
        { day: "Day 7", title: "Alleppey Backwaters", description: "Morning disembark from houseboat, visit local villages, afternoon beach relaxation." },
        { day: "Day 8", title: "Alleppey to Kovalam", description: "Drive to Kovalam (5 hours), check-in at beach resort, evening lighthouse visit." },
        { day: "Day 9", title: "Kovalam & Trivandrum", description: "Beach relaxation, water sports, visit Padmanabhaswamy Temple, shopping." },
        { day: "Day 10", title: "Departure", description: "Last minute shopping, transfer to Trivandrum airport for departure." }
      ],
      inclusions: ["9 nights accommodation", "Daily breakfast & dinner", "All transfers in AC vehicle", "Houseboat stay with meals", "Boat cruise tickets", "All entry fees", "Cultural show tickets", "Tour guide services", "All taxes"],
      exclusions: ["Flights", "Lunch", "Personal expenses", "Travel insurance", "Water sports activities"]
    },
    {
      id: "kerala-honeymoon-special",
      name: "Kerala Honeymoon Special",
      duration: "07 Nights / 08 Days",
      destination: "Munnar, Thekkady, Kumarakom, Alleppey",
      places: ["munnar", "thekkady", "kumarakom", "alleppey"],
      bestSeason: "Aug - Apr",
      price: 38999,
      originalPrice: 46999,
      discount: "17% Off",
      rating: 4.9,
      reviews: 89,
      image: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759490003/kerala-honeymoon_mmbvqx.jpg",
      images: [
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759490003/kerala-honeymoon_mmbvqx.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759490004/honeymoon-houseboat_tv8fyi.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759490005/honeymoon-tea-gardens_pnzqkl.jpg"
      ],
      description: "Romantic Kerala getaway for couples featuring private houseboats, luxury resorts, candlelight dinners, and intimate experiences.",
      detailedDescription: "Celebrate your love with this exquisite 8-day honeymoon package through Kerala's most romantic destinations. Begin in the misty hills of Munnar with private tea estate walks and cozy mountain resorts. Continue to Thekkady for wildlife adventures and spice-scented romance. Experience ultimate luxury with a private houseboat cruise through Kumarakom's backwaters, followed by serene moments in Alleppey. This package includes special romantic touches like candlelight dinners, flower bed decorations, couple spa treatments, and private tours designed exclusively for honeymooners.",
      highlights: ["Private Houseboat", "Candlelight Dinners", "Couple Spa Treatments", "Tea Estate Walks", "Sunset Cruises", "Flower Bed Decoration", "Romantic Photo Sessions", "Private Guides"],
      itinerary: [
        { day: "Day 1", title: "Arrival in Cochin", description: "Airport pickup with flower greeting, transfer to Munnar, romantic welcome dinner." },
        { day: "Day 2", title: "Munnar Romance", description: "Private tea estate tour, visit Attukal Waterfalls, couple photo session, candlelight dinner." },
        { day: "Day 3", title: "Munnar to Thekkady", description: "Scenic drive, spice plantation visit, evening Kathakali show, couple spa treatment." },
        { day: "Day 4", title: "Thekkady Adventures", description: "Private boat cruise on Periyar Lake, elephant interaction, romantic lakeside dinner." },
        { day: "Day 5", title: "Thekkady to Kumarakom", description: "Drive to Kumarakom, check into luxury resort, private backwater cruise, sunset viewing." },
        { day: "Day 6", title: "Kumarakom Houseboat", description: "Full day private houseboat cruise through Vembanad Lake, traditional Kerala meals onboard." },
        { day: "Day 7", title: "Kumarakom to Alleppey", description: "Morning yoga session, transfer to Alleppey, beach relaxation, farewell romantic dinner." },
        { day: "Day 8", title: "Departure", description: "Last romantic breakfast, transfer to Cochin airport with souvenirs." }
      ],
      inclusions: ["7 nights luxury accommodation", "All meals included", "Private AC vehicle", "Luxury houseboat stay", "Couple spa treatments", "Candlelight dinners", "Flower decorations", "Photo session", "All entry tickets", "Romantic surprises"],
      exclusions: ["Flights", "Personal shopping", "Additional activities", "Travel insurance"]
    },
    {
      id: "kerala-wildlife-adventure",
      name: "Kerala Wildlife Adventure",
      duration: "08 Nights / 09 Days",
      destination: "Wayanad, Bandipur, Thekkady, Parambikulam",
      places: ["wayanad", "bandipur", "thekkady", "parambikulam"],
      bestSeason: "Oct - Jun",
      price: 42999,
      originalPrice: 51999,
      discount: "18% Off",
      rating: 4.7,
      reviews: 67,
      image: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759490006/wildlife-kerala_dqjvlc.jpg",
      images: [
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759490006/wildlife-kerala_dqjvlc.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759490007/elephant-safari_ympqjr.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759490008/bird-watching_tnkjzu.jpg"
      ],
      description: "Comprehensive wildlife tour covering Kerala's premier national parks and tiger reserves with expert naturalists and jungle stays.",
      detailedDescription: "Embark on an extraordinary wildlife expedition through Kerala's most biodiverse regions. This 9-day adventure takes you deep into the Western Ghats, exploring multiple ecosystems and wildlife habitats. Track elephants and tigers in Wayanad's dense forests, experience the rich biodiversity of Bandipur Tiger Reserve, cruise through Periyar's wildlife-rich waters, and explore the pristine Parambikulam Tiger Reserve. With expert naturalists, jungle safaris, bird watching expeditions, and stays in eco-friendly jungle lodges, this package offers an immersive wildlife experience for nature enthusiasts and photographers.",
      highlights: ["Jungle Safaris", "Elephant Tracking", "Bird Watching", "Nature Walks", "Tiger Reserve Visits", "Expert Naturalists", "Jungle Lodges", "Wildlife Photography"],
      itinerary: [
        { day: "Day 1", title: "Arrival in Calicut", description: "Airport pickup, drive to Wayanad, check into jungle resort, evening orientation." },
        { day: "Day 2", title: "Wayanad Wildlife", description: "Morning and evening jungle safaris in Wayanad Wildlife Sanctuary, visit elephant camp." },
        { day: "Day 3", title: "Wayanad Exploration", description: "Trek to Chembra Peak, visit Banasura Sagar Dam, tribal village interaction." },
        { day: "Day 4", title: "Wayanad to Bandipur", description: "Cross-border drive to Bandipur, afternoon safari in Bandipur Tiger Reserve." },
        { day: "Day 5", title: "Bandipur Adventures", description: "Early morning and late afternoon safaris, wildlife photography session, naturalist talk." },
        { day: "Day 6", title: "Bandipur to Thekkady", description: "Drive to Thekkady, evening Periyar Lake boat cruise for wildlife spotting." },
        { day: "Day 7", title: "Thekkady to Parambikulam", description: "Morning spice plantation visit, drive to Parambikulam, evening jungle walk." },
        { day: "Day 8", title: "Parambikulam Safari", description: "Full day wildlife experience with multiple safaris, visit to ancient Kannimara Teak." },
        { day: "Day 9", title: "Departure", description: "Morning bird watching, transfer to Coimbatore airport for departure." }
      ],
      inclusions: ["8 nights jungle accommodation", "All meals", "All safari tickets", "Expert naturalist guides", "AC vehicle transfers", "All entry fees", "Jungle walk permissions", "Wildlife photography assistance"],
      exclusions: ["Flights", "Camera fees", "Personal expenses", "Travel insurance", "Additional activities"]
    },
    {
      id: "kerala-cultural-heritage",
      name: "Kerala Cultural Heritage",
      duration: "10 Nights / 11 Days",
      destination: "Thiruvananthapuram, Kollam, Alappuzha, Kochi, Guruvayur, Palakkad",
      places: ["thiruvananthapuram", "kollam", "alappuzha", "kochi", "guruvayur", "palakkad"],
      bestSeason: "Year Round",
      price: 47999,
      originalPrice: 57999,
      discount: "17% Off",
      rating: 4.8,
      reviews: 92,
      image: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759490009/kerala-cultural_qzvn8h.jpg",
      images: [
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759490009/kerala-cultural_qzvn8h.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759490010/temple-heritage_mmxpvw.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759490011/theyyam-performance_rzwfee.jpg"
      ],
      description: "Deep dive into Kerala's rich cultural heritage featuring ancient temples, traditional art forms, historic sites, and authentic local experiences.",
      detailedDescription: "Immerse yourself in the vibrant cultural tapestry of Kerala with this comprehensive 11-day heritage tour. Explore ancient temples dating back centuries, witness spectacular traditional art forms like Kathakali and Theyyam, visit historic palaces and forts, and experience authentic village life. From the majestic Padmanabhaswamy Temple to the sacred Guruvayur Temple, from the Portuguese influences in Fort Kochi to the traditional Kalaripayattu martial arts demonstrations, this journey offers a profound understanding of Kerala's diverse cultural heritage and living traditions.",
      highlights: ["Ancient Temple Visits", "Kathakali & Theyyam Shows", "Kerala Village Life", "Traditional Crafts", "Historic Palaces", "Martial Arts Demo", "Local Cuisine", "Cultural Workshops"],
      itinerary: [
        { day: "Day 1", title: "Arrival in Trivandrum", description: "Airport pickup, visit Padmanabhaswamy Temple, Napier Museum, check-in at hotel." },
        { day: "Day 2", title: "Trivandrum Heritage", description: "Visit Kuthiramalika Palace, Sri Chitra Art Gallery, evening cultural show with Kathakali." },
        { day: "Day 3", title: "Trivandrum to Kollam", description: "Drive to Kollam, visit Ashtamudi Lake, traditional cashew processing unit, Thangassery Light House." },
        { day: "Day 4", title: "Kollam to Alleppey", description: "Visit Amritapuri Ashram, drive to Alleppey, evening at Alleppey Beach, local market visit." },
        { day: "Day 5", title: "Alleppey Culture", description: "Visit Ambalapuzha Temple, traditional boat building yard, evening backwater village tour." },
        { day: "Day 6", title: "Alleppey to Kochi", description: "Drive to Kochi, visit Jewish Synagogue, St. Francis Church, Chinese fishing nets." },
        { day: "Day 7", title: "Kochi Heritage", description: "Fort Kochi walking tour, visit Dutch Palace, Bolghatty Palace, evening Kalaripayattu show." },
        { day: "Day 8", title: "Kochi to Guruvayur", description: "Drive to Guruvayur, temple darshan, visit Punnathur Kotta Elephant Sanctuary." },
        { day: "Day 9", title: "Guruvayur to Palakkad", description: "Visit Kava Island, drive to Palakkad, visit Palakkad Fort, Malampuzha Gardens." },
        { day: "Day 10", title: "Palakkad Exploration", description: "Visit Silent Valley National Park, traditional Kerala village tour, handicraft workshop." },
        { day: "Day 11", title: "Departure", description: "Morning at leisure, transfer to Coimbatore airport for departure." }
      ],
      inclusions: ["10 nights heritage accommodation", "All meals", "AC vehicle throughout", "All temple entry fees", "Cultural show tickets", "Expert cultural guide", "Workshop participation", "All taxes and charges"],
      exclusions: ["Flights", "Personal shopping", "Camera fees at monuments", "Travel insurance", "Additional rituals at temples"]
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
            <div className="text-2xl font-bold text-emerald-600 mb-2">{allPackages.length + extendedPackages.length}+</div>
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

        {/* Short & Medium Packages (2-5 days) */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Short & Medium Tours</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Perfect getaways from 2-5 days covering specific destinations and experiences
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPackages.map((pkg) => (
              <TourPackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>

        {/* Extended Kerala Tours Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-4">
              🌟 Extended Tours (6+ Days)
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Extended Kerala Tours</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive packages covering multiple destinations for the complete Kerala experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {extendedPackages.map((pkg) => (
              <TourPackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
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
