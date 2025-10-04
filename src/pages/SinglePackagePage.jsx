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