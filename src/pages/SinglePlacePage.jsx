import React, { useState } from "react";
import { useParams, Link } from 'react-router-dom';
import SEOHead from "../components/common/SEOHead";
import Footer from "../components/common/Footer";

const SinglePlacePage = () => {
  const { placeId } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  
  // Complete places data with all 24 destinations
  const allPlaces = [
    {
      id: "munnar",
      name: "MUNNAR",
      desc: "Arguably the best hill station in South India with tea-clad hill tops and valleys.",
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
      longDescription: "Munnar is a picturesque hill station in Kerala's Idukki district, celebrated for its sprawling tea plantations, mist-covered mountains, pleasant climate, and colonial heritage. It was once the summer resort of the British government and remains a top escape for nature lovers and adventure seekers.",
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
      longDescription: "Alleppey, also known as Alappuzha, is a charming coastal town in Kerala famous for its serene backwaters, sprawling canals, lagoons, and lush green paddy fields. Known as the 'Venice of the East', it offers unmatched houseboat cruise experiences.",
      climate: "Tropical climate with moderate temperatures ranging from 22°C to 35°C",
      attractions: [
        { name: "Houseboat Cruise", description: "Stay overnight in traditional houseboats through backwaters." },
        { name: "Alleppey Beach", description: "Pristine beach with a 150-year-old pier and lighthouse." },
        { name: "Vembanad Lake", description: "Longest lake in India, perfect for sunset views." },
        { name: "Backwaters", description: "Network of canals, lakes, and lagoons parallel to the coast." }
      ]
    },
    {
      id: "kochi",
      name: "KOCHI",
      desc: "The commercial capital of Kerala blending Portuguese, Dutch, and British colonial influences.",
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
      longDescription: "Kochi, also known as Cochin, is a vibrant port city on Kerala's southwest coast, renowned for its unique blend of colonial history, diverse cultures, and natural beauty. Nicknamed the 'Queen of the Arabian Sea'.",
      climate: "Tropical climate with moderate temperatures year-round",
      attractions: [
        { name: "Fort Kochi", description: "Historic area with colonial architecture and cultural sites." },
        { name: "Chinese Fishing Nets", description: "Iconic fishing nets introduced by Chinese traders." },
        { name: "Jewish Synagogue", description: "Oldest active synagogue in Commonwealth nations." },
        { name: "Kathakali Dance", description: "Traditional dance-drama performances." }
      ]
    },
    {
      id: "wayanad",
      name: "WAYANAD",
      desc: "Mystical wilderness and tribal heritage in the northern hills of Kerala.",
      image: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1760193266/wayanad_wj1ce1.jpg",
      images: [
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1760193266/wayanad_wj1ce1.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759476405/tea_1_jrixag.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759476405/tea_2_rmqxfj.jpg"
      ],
      rating: "4.7",
      tours: "9",
      highlights: ["Edakkal Caves", "Banasura Sagar Dam", "Chembra Peak", "Wayanad Wildlife Sanctuary", "Pookode Lake"],
      bestSeason: "October to May",
      distance: "250 km from Kochi",
      packages: ["Wayanad Adventure Tour", "Complete Kerala Experience"],
      longDescription: "Wayanad is a beautiful hill district in northern Kerala, renowned for its lush green forests, misty mountains, spice plantations, waterfalls, and rich tribal culture. Nestled within the Western Ghats.",
      climate: "Pleasant climate with temperatures ranging from 17°C to 30°C",
      attractions: [
        { name: "Edakkal Caves", description: "Ancient rock shelters with prehistoric carvings." },
        { name: "Banasura Sagar Dam", description: "Largest earthen dam in India with scenic views." },
        { name: "Chembra Peak", description: "Popular trekking destination with heart-shaped lake." },
        { name: "Wildlife Sanctuary", description: "Rich biodiversity with elephants, tigers, and deer." }
      ]
    },
    {
      id: "thekkady",
      name: "THEKKADY",
      desc: "Home to Periyar Wildlife Sanctuary, offering thrilling jungle experiences and spice plantations.",
      image: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1760193265/thekkady-tour-01_otzv8q.jpg",
      images: [
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1760193265/thekkady-tour-01_otzv8q.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759487813/periyar_lake_1_flz8vu.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759487815/periyar_lake_3_ojjgtd.jpg"
      ],
      rating: "4.6",
      tours: "9",
      highlights: ["Periyar Wildlife Sanctuary", "Spice Plantations", "Bamboo Rafting", "Elephant Ride", "Boat Cruise"],
      bestSeason: "September to May",
      distance: "110 km from Kochi",
      packages: ["Kerala Wildlife Adventure", "Complete Kerala Experience", "Munnar Tea Plantations Tour"],
      longDescription: "Thekkady is home to the Periyar Wildlife Sanctuary, one of India's most fascinating natural wildlife reserves. Spread across 777 sq km, known for dense evergreen forests and diverse wildlife.",
      climate: "Pleasant climate with temperatures ranging from 15°C to 30°C",
      attractions: [
        { name: "Periyar Wildlife Sanctuary", description: "Famous tiger reserve and elephant sightings." },
        { name: "Spice Plantations", description: "Tour through cardamom, pepper, and coffee plantations." },
        { name: "Bamboo Rafting", description: "Unique rafting experience through the forest." },
        { name: "Elephant Ride", description: "Jungle safari on elephant back through forest trails." }
      ]
    },
    {
      id: "kumarakom",
      name: "KUMARAKOM",
      desc: "A picturesque backwater destination with luxurious resorts and serene Vembanad Lake views.",
      image: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1760193264/Kumarakom-Kumarakom-Bird-Sanctuary-2_tksq4a.jpg",
      images: [
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1760193264/Kumarakom-Kumarakom-Bird-Sanctuary-2_tksq4a.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759490668/Kumarkom_f7plnd.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759487637/backwater_1_b007co.jpg"
      ],
      rating: "4.8",
      tours: "4",
      highlights: ["Vembanad Lake", "Bird Sanctuary", "Luxury Resorts", "Houseboat Stays", "Backwaters"],
      bestSeason: "November to February",
      distance: "65 km from Kochi",
      packages: ["Kerala Backwaters & Beaches", "Luxury Kerala Experience"],
      longDescription: "Kumarakom is a peaceful village situated on the banks of Vembanad Lake, Kerala's largest freshwater lake. Known for its tranquil backwaters, lush greenery, and bird sanctuary.",
      climate: "Tropical climate with moderate temperatures",
      attractions: [
        { name: "Vembanad Lake", description: "Largest lake in Kerala, perfect for houseboat cruises." },
        { name: "Bird Sanctuary", description: "Home to migratory birds and local species." },
        { name: "Luxury Resorts", description: "World-class resorts with backwater views." },
        { name: "Houseboat Stays", description: "Luxurious overnight houseboat experiences." }
      ]
    },
    {
      id: "kovalam",
      name: "KOVALAM",
      desc: "Experience beach life with friendly tides, sun ups and sun downs - the best beach to unwind.",
      image: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1760193263/Kovalam_tkrqfh.jpg",
      images: [
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1760193263/Kovalam_tkrqfh.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488360/kovalam-1_trhrck.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488360/kovalam-2_vutkfm.jpg"
      ],
      rating: "4.7",
      tours: "6",
      highlights: ["Lighthouse Beach", "Hawa Beach", "Water Sports", "Ayurvedic Massage", "Sunset Views"],
      bestSeason: "October to March",
      distance: "200 km from Kochi",
      packages: ["Kerala Backwaters & Beaches", "Complete Kerala Experience", "Kerala Honeymoon Special"],
      longDescription: "Kovalam is a picturesque coastal town near Thiruvananthapuram, famous for its crescent-shaped beaches lined with palm trees and vibrant cultural life. Known as the 'Grove of Coconut Trees'.",
      climate: "Tropical coastal climate with temperatures between 24°C to 32°C",
      attractions: [
        { name: "Lighthouse Beach", description: "Most popular beach with a 35-meter high lighthouse." },
        { name: "Hawa Beach", description: "Known for its strong winds and beach activities." },
        { name: "Water Sports", description: "Enjoy surfing, parasailing, and other water activities." },
        { name: "Ayurvedic Massage", description: "Rejuvenate with traditional Ayurvedic treatments." }
      ]
    },
    {
      id: "vagamon",
      name: "VAGAMON",
      desc: "The Queen of Mist and Tranquility with rolling green meadows and pine forests.",
      image: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1760193267/Vagamon_xgcm4m.jpg",
      images: [
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1760193267/Vagamon_xgcm4m.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759476405/tea_1_jrixag.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759476405/tea_2_rmqxfj.jpg"
      ],
      rating: "4.4",
      tours: "3",
      highlights: ["Pine Forest", "Vagamon Meadows", "Kurisumala Church", "Paragliding", "Thangal Para"],
      bestSeason: "September to March",
      distance: "100 km from Kochi",
      packages: ["Vagamon Hill Retreat", "Adventure Kerala Tour"],
      longDescription: "Vagamon is a tranquil hill station in Idukki district, renowned for rolling green meadows, dense pine forests, tea gardens, and cool climate. Often called the 'Queen of the Mist'.",
      climate: "Cool climate with temperatures ranging from 10°C to 25°C",
      attractions: [
        { name: "Pine Forest", description: "Beautiful pine forests perfect for nature walks." },
        { name: "Vagamon Meadows", description: "Rolling green meadows offering panoramic views." },
        { name: "Kurisumala Church", description: "Famous Christian pilgrimage center." },
        { name: "Paragliding", description: "Adventure sport with stunning valley views." }
      ]
    },
    {
      id: "athirappilly",
      name: "ATHIRAPPILLY",
      desc: "The Niagara of South India - Kerala's largest waterfall in lush tropical forests.",
      image: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1760193263/Athirappilly_Waterfalls__pnmbmo.jpg",
      images: [
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1760193263/Athirappilly_Waterfalls__pnmbmo.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759487813/periyar_lake_1_flz8vu.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759487815/periyar_lake_3_ojjgtd.jpg"
      ],
      rating: "4.6",
      tours: "5",
      highlights: ["Athirappilly Waterfalls", "Vazhachal Waterfalls", "Butterfly Garden", "Sholayar Dam", "Wildlife Spotting"],
      bestSeason: "October to May",
      distance: "78 km from Kochi",
      packages: ["Waterfall Adventure Tour", "Nature & Wildlife Kerala"],
      longDescription: "Athirappilly Waterfalls is the largest waterfall in Kerala, standing at about 80 feet high on the Chalakudy River. A breathtaking natural spectacle often called the 'Niagara of South India'.",
      climate: "Tropical climate with moderate temperatures",
      attractions: [
        { name: "Athirappilly Waterfalls", description: "Majestic 80-feet waterfall in lush forest." },
        { name: "Vazhachal Waterfalls", description: "Beautiful waterfall close to Athirappilly." },
        { name: "Butterfly Garden", description: "Home to numerous butterfly species." },
        { name: "Sholayar Dam", description: "Scenic dam surrounded by dense forests." }
      ]
    },
    {
      id: "varkala",
      name: "VARKALA",
      desc: "Coastal cliffs and spiritual serenity with dramatic red sandstone cliffs overlooking the Arabian Sea.",
      image: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1760193266/varkala_1_zcdenb.jpg",
      images: [
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1760193266/varkala_1_zcdenb.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759490719/Varkala_Beach__Varkala__Kerala_vuiq2z.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488545/Samudra-Beach_1_pq79i9.jpg"
      ],
      rating: "4.5",
      tours: "4",
      highlights: ["Varkala Beach", "Janardhana Swamy Temple", "Varkala Cliff", "Kappil Lake", "Ayurvedic Treatments"],
      bestSeason: "October to March",
      distance: "180 km from Kochi",
      packages: ["Beach & Culture Tour", "Kerala Coastal Experience"],
      longDescription: "Varkala is a charming coastal town known for its dramatic red sandstone cliffs overlooking the Arabian Sea. Combines beautiful beaches with spiritual sites for relaxation and adventure.",
      climate: "Tropical coastal climate",
      attractions: [
        { name: "Varkala Beach", description: "Cliff-lined beach with mineral springs." },
        { name: "Janardhana Swamy Temple", description: "Ancient 2000-year-old temple." },
        { name: "Varkala Cliff", description: "Dramatic red cliffs with ocean views." },
        { name: "Kappil Lake", description: "Serene backwaters perfect for boating." }
      ]
    },
    {
      id: "palakkad",
      name: "PALAKKAD",
      desc: "The Gateway of Kerala's Natural and Cultural Heritage with vast paddy fields and ancient forts.",
      image: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1760193265/Palakkad_kava54.jpg",
      images: [
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1760193265/Palakkad_kava54.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759476405/tea_1_jrixag.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759476405/tea_2_rmqxfj.jpg"
      ],
      rating: "4.3",
      tours: "5",
      highlights: ["Malampuzha Dam", "Palakkad Fort", "Parambikulam Sanctuary", "Silent Valley", "Nelliyampathy Hills"],
      bestSeason: "November to February",
      distance: "100 km from Kochi",
      packages: ["Nature & Heritage Tour", "Complete Kerala Experience"],
      longDescription: "Palakkad, known as the 'Granary of Kerala', combines lush green landscapes, ancient forts, hill stations, and rich biodiversity at the foothills of the Western Ghats.",
      climate: "Pleasant climate with moderate temperatures",
      attractions: [
        { name: "Malampuzha Dam", description: "Large irrigation dam with beautiful gardens." },
        { name: "Palakkad Fort", description: "Well-preserved 18th-century fort." },
        { name: "Parambikulam Sanctuary", description: "Tiger reserve with rich wildlife." },
        { name: "Silent Valley", description: "Pristine tropical evergreen forest." }
      ]
    },
    {
      id: "bekal",
      name: "BEKAL",
      desc: "Historic Fort and Seaside Serenity - Kerala's largest and best-preserved fort by the Arabian Sea.",
      image: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1760193261/bekal3_nq1ce8.jpg",
      images: [
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1760193261/bekal3_nq1ce8.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759487813/periyar_lake_1_flz8vu.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759487815/periyar_lake_3_ojjgtd.jpg"
      ],
      rating: "4.4",
      tours: "3",
      highlights: ["Bekal Fort", "Bekal Beach", "Kappil Beach", "Kodi Cliff", "Theyyam Performances"],
      bestSeason: "October to March",
      distance: "350 km from Kochi",
      packages: ["Historic Kerala Tour", "Coastal Heritage Experience"],
      longDescription: "Bekal is best known for its majestic Bekal Fort - the largest and best-preserved fort in Kerala. The fort rises dramatically by the Arabian Sea, showcasing military architecture and scenic beauty.",
      climate: "Coastal climate with pleasant temperatures",
      attractions: [
        { name: "Bekal Fort", description: "Largest fort in Kerala with sea views." },
        { name: "Bekal Beach", description: "Pristine beach adjacent to the fort." },
        { name: "Kappil Beach", description: "Secluded beach perfect for relaxation." },
        { name: "Theyyam Performances", description: "Traditional ritual dance performances." }
      ]
    },
    {
      id: "thrissur",
      name: "THRISSUR",
      desc: "Kerala's Cultural Capital rich in heritage, festivals, temples, and natural beauty.",
      image: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770796/Thrissur_Pooram_e8qjxs.jpg",
      images: [
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770796/Thrissur_Pooram_e8qjxs.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488068/padmanabha-swamy1_kebsa2.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488067/padmanabha-swamy2_bgsb1c.png"
      ],
      rating: "4.5",
      tours: "6",
      highlights: ["Vadakkunnathan Temple", "Athirappilly Waterfalls", "Guruvayur Temple", "Thrissur Pooram", "Kerala Kalamandalam"],
      bestSeason: "October to March",
      distance: "50 km from Kochi",
      packages: ["Cultural Kerala Tour", "Temple Trail Experience"],
      longDescription: "Thrissur, known as the cultural capital of Kerala, is rich in heritage, festivals, temples, and natural beauty. Famous for its grand religious celebrations and classical arts.",
      climate: "Tropical climate with moderate temperatures",
      attractions: [
        { name: "Vadakkunnathan Temple", description: "Ancient temple with classic architecture." },
        { name: "Thrissur Pooram", description: "Most spectacular temple festival in Kerala." },
        { name: "Guruvayur Temple", description: "Famous Krishna temple with rich history." },
        { name: "Kerala Kalamandalam", description: "Premier institution for Kerala arts." }
      ]
    },
    {
      id: "munroe-island",
      name: "MUNROE ISLAND",
      desc: "Tranquil Backwater Gem - cluster of eight small islands at the confluence of Ashtamudi Lake.",
      image: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1760193264/munroe-island-_j6vwln.jpg",
      images: [
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1760193264/munroe-island-_j6vwln.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759487637/backwater_1_b007co.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759487637/backwater_2_sfyek2.jpg"
      ],
      rating: "4.3",
      tours: "2",
      highlights: ["Backwater Canals", "Coir Making Units", "Village Life", "Dutch Church", "Bird Watching"],
      bestSeason: "October to February",
      distance: "25 km from Kollam",
      packages: ["Backwater Village Experience", "Eco-Tourism Kerala"],
      longDescription: "Munroe Island is a cluster of eight small inland islands at the confluence of Ashtamudi Lake and Kallada River. A picturesque blend of peaceful backwaters, lush greenery, and traditional village life.",
      climate: "Tropical climate with high humidity",
      attractions: [
        { name: "Backwater Canals", description: "Navigate through narrow picturesque canals." },
        { name: "Coir Making Units", description: "See traditional coir rope making process." },
        { name: "Village Life", description: "Experience authentic Kerala village lifestyle." },
        { name: "Bird Watching", description: "Spot various migratory and local bird species." }
      ]
    },
    {
      id: "poovar",
      name: "POOVAR",
      desc: "Where River, Lake, and Sea Meet - golden sandy beaches and tranquil backwaters.",
      image: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1760193264/Poovar_gvqskq.jpg",
      images: [
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1760193264/Poovar_gvqskq.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488545/Samudra-Beach_1_pq79i9.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488545/Samudra-Beach_2_jzvrhh.jpg"
      ],
      rating: "4.4",
      tours: "3",
      highlights: ["Poovar Beach", "Backwaters", "Mangrove Forests", "Poovar Island", "Sunset Cruises"],
      bestSeason: "August to March",
      distance: "35 km from Trivandrum",
      packages: ["Beach & Backwater Tour", "Kerala Coastal Retreat"],
      longDescription: "Poovar is a picturesque fishing village featuring the confluence of Arabian Sea, Neyyar River, and backwaters. Known as the 'Stream of Flowers', it offers golden sandy beaches and mangrove forests.",
      climate: "Tropical coastal climate",
      attractions: [
        { name: "Poovar Beach", description: "Golden sandy beach with backwater views." },
        { name: "Backwaters", description: "Tranquil backwater network for boating." },
        { name: "Mangrove Forests", description: "Dense mangroves with rich biodiversity." },
        { name: "Sunset Cruises", description: "Beautiful sunset views over the estuary." }
      ]
    },
    {
      id: "thiruvananthapuram",
      name: "TRIVANDRUM",
      desc: "Kerala's Capital of Culture and Nature blending ancient traditions with modern infrastructure.",
      image: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1760193265/Thiruvananthapuram_Trivandrum_sgwysg.jpg",
      images: [
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1760193265/Thiruvananthapuram_Trivandrum_sgwysg.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488068/padmanabha-swamy1_kebsa2.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488067/padmanabha-swamy2_bgsb1c.png"
      ],
      rating: "4.5",
      tours: "8",
      highlights: ["Padmanabhaswamy Temple", "Napier Museum", "Kovalam Beach", "Neyyar Sanctuary", "Agasthyarkoodam"],
      bestSeason: "October to March",
      distance: "200 km from Kochi",
      packages: ["Capital City Tour", "Cultural Heritage Experience"],
      longDescription: "Thiruvananthapuram, commonly known as Trivandrum, is Kerala's bustling capital city blending ancient traditions, modern infrastructure, and rich cultural heritage. Gateway to southern Kerala attractions.",
      climate: "Tropical climate with coastal influence",
      attractions: [
        { name: "Padmanabhaswamy Temple", description: "Famous temple with immense historical wealth." },
        { name: "Napier Museum", description: "Indo-Saracenic architecture with art collections." },
        { name: "Kovalam Beach", description: "World-famous beach destination nearby." },
        { name: "Neyyar Sanctuary", description: "Wildlife sanctuary with lion safari park." }
      ]
    },
    {
      id: "kannur",
      name: "KANNUR",
      desc: "The Land of Beaches, Forts, and Culture with pristine beaches and Theyyam festivals.",
      image: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1760193261/Kannur_jy8wax.jpg",
      images: [
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1760193261/Kannur_jy8wax.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488545/Samudra-Beach_1_pq79i9.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759488545/Samudra-Beach_2_jzvrhh.jpg"
      ],
      rating: "4.4",
      tours: "4",
      highlights: ["St. Angelo Fort", "Muzhappilangad Beach", "Arakkal Museum", "Theyyam Festival", "Kavvayi Backwaters"],
      bestSeason: "October to March",
      distance: "250 km from Kochi",
      packages: ["Northern Kerala Tour", "Cultural & Beach Experience"],
      longDescription: "Kannur is renowned for its pristine beaches, historic forts, rich cultural festivals like Theyyam, and lush mangrove forests. Offers a blend of natural beauty and historical significance.",
      climate: "Tropical coastal climate",
      attractions: [
        { name: "St. Angelo Fort", description: "Portuguese fort with sea views." },
        { name: "Muzhappilangad Beach", description: "Longest drive-in beach in Kerala." },
        { name: "Arakkal Museum", description: "Former palace of Arakkal royal family." },
        { name: "Theyyam Festival", description: "Traditional ritual performance art." }
      ]
    },
    {
      id: "kollam",
      name: "KOLLAM",
      desc: "Gateway to Kerala's Backwaters and Heritage with historic sites and Ashtamudi Lake.",
      image: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1760193261/-kollam-_bsqsgx.jpg",
      images: [
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1760193261/-kollam-_bsqsgx.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759487637/backwater_1_b007co.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759487637/backwater_2_sfyek2.jpg"
      ],
      rating: "4.3",
      tours: "5",
      highlights: ["Ashtamudi Lake", "Jatayu Earth Center", "Thangassery Lighthouse", "Palaruvi Waterfalls", "Thenmala Eco-tourism"],
      bestSeason: "October to March",
      distance: "150 km from Kochi",
      packages: ["Backwater Gateway Tour", "Eco-Tourism Experience"],
      longDescription: "Kollam, historically known as Quilon, is recognized for its role in ancient spice trade. Blessed with intricate backwaters like Ashtamudi Lake, it offers natural beauty and historic sites.",
      climate: "Tropical coastal climate",
      attractions: [
        { name: "Ashtamudi Lake", description: "Gateway to Kerala backwaters with houseboats." },
        { name: "Jatayu Earth Center", description: "World's largest bird sculpture and adventure park." },
        { name: "Thangassery Lighthouse", description: "144-feet tall British-era lighthouse." },
        { name: "Palaruvi Waterfalls", description: "Beautiful 300-feet waterfall in forests." }
      ]
    },
    {
      id: "idukki",
      name: "IDUKKI",
      desc: "Kerala's Mountainous Spice Garden and Wildlife Haven with highest peaks and dense forests.",
      image: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1760193263/Idukki_qn2nbg.jpg",
      images: [
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1760193263/Idukki_qn2nbg.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759476405/tea_1_jrixag.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759476405/tea_2_rmqxfj.jpg"
      ],
      rating: "4.6",
      tours: "7",
      highlights: ["Idukki Arch Dam", "Periyar Sanctuary", "Meesapulimala", "Anamudi Peak", "Spice Plantations"],
      bestSeason: "October to May",
      distance: "120 km from Kochi",
      packages: ["Mountain Adventure Tour", "Wildlife & Spice Experience"],
      longDescription: "Idukki is renowned for its mountainous terrain, dense forests, spice plantations, and serene hill stations. Part of Western Ghats with some of the highest peaks in South India.",
      climate: "Cool mountain climate",
      attractions: [
        { name: "Idukki Arch Dam", description: "First arch dam in India with scenic beauty." },
        { name: "Periyar Sanctuary", description: "Famous wildlife sanctuary in Thekkady." },
        { name: "Meesapulimala", description: "Second highest peak in Western Ghats." },
        { name: "Spice Plantations", description: "Tour through cardamom and pepper plantations." }
      ]
    },
    {
      id: "chinnar",
      name: "CHINNAR",
      desc: "Kerala's Unique Dry Forest Reserve with endangered species and diverse wildlife.",
      image: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1760193262/Chinnar_Wildlife_Sanctuary_k2e4bb.jpg",
      images: [
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1760193262/Chinnar_Wildlife_Sanctuary_k2e4bb.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759487813/periyar_lake_1_flz8vu.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759487815/periyar_lake_3_ojjgtd.jpg"
      ],
      rating: "4.2",
      tours: "2",
      highlights: ["Grizzled Giant Squirrel", "Thoovanam Waterfalls", "Wildlife Safaris", "Bird Watching", "Trekking"],
      bestSeason: "October to November",
      distance: "150 km from Kochi",
      packages: ["Wildlife Sanctuary Tour", "Nature & Adventure"],
      longDescription: "Chinnar Wildlife Sanctuary features dry thorn scrub forests in the rain shadow region of Western Ghats. Home to endangered species and unique rehabilitation center for Indian star tortoise.",
      climate: "Dry forest climate",
      attractions: [
        { name: "Grizzled Giant Squirrel", description: "Spot endangered giant squirrel species." },
        { name: "Thoovanam Waterfalls", description: "Beautiful waterfalls within the sanctuary." },
        { name: "Wildlife Safaris", description: "Guided tours to spot diverse wildlife." },
        { name: "Bird Watching", description: "Rich avian diversity with rare species." }
      ]
    },
    {
      id: "kalamassery",
      name: "KALAMASSERY",
      desc: "Industrial and Educational Hub of Kochi with urban infrastructure and academic excellence.",
      image: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1760193263/Kalamassery_ltevtp.jpg",
      images: [
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1760193263/Kalamassery_ltevtp.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759490476/premium_photo-1697729597066-7b3d09b6dab7_oxwkpb.jpg"
      ],
      rating: "4.0",
      tours: "1",
      highlights: ["CUSAT University", "FACT Industries", "Kochi Metro", "Educational Institutions", "Urban Development"],
      bestSeason: "Year Round",
      distance: "9 km from Kochi",
      packages: ["Educational Tour", "Industrial Visit"],
      longDescription: "Kalamassery is a prominent industrial and residential locality in Kochi metropolitan area, known for its blend of urban infrastructure and academic excellence. Hosts major companies and institutions.",
      climate: "Urban tropical climate",
      attractions: [
        { name: "CUSAT University", description: "Premier technological university campus." },
        { name: "FACT Industries", description: "Major fertilizer and chemicals company." },
        { name: "Kochi Metro", description: "Modern metro rail connectivity." },
        { name: "Educational Institutions", description: "Various schools and colleges in area." }
      ]
    },
    {
      id: "kumbalangi",
      name: "KUMBALANGI",
      desc: "India's First Model Fishing Village and Eco-Tourism Haven with sustainable tourism.",
      image: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1760193264/Kumbalangi-_vgkqik.jpg",
      images: [
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1760193264/Kumbalangi-_vgkqik.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759487637/backwater_1_b007co.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759487637/backwater_2_sfyek2.jpg"
      ],
      rating: "4.3",
      tours: "2",
      highlights: ["Chinese Fishing Nets", "Mangrove Forests", "Sea Sparkle", "Crab Catching", "Village Life"],
      bestSeason: "November to February",
      distance: "15 km from Kochi",
      packages: ["Village Tourism", "Eco-Tourism Experience"],
      longDescription: "Kumbalangi is India's first model eco-tourism village, showcasing sustainable tourism alongside traditional fishing lifestyles. Surrounded by tranquil backwaters and lush mangrove forests.",
      climate: "Coastal tropical climate",
      attractions: [
        { name: "Chinese Fishing Nets", description: "Traditional fishing method demonstration." },
        { name: "Mangrove Forests", description: "Boat rides through mangrove ecosystems." },
        { name: "Sea Sparkle", description: "Bioluminescent phenomenon in waters." },
        { name: "Crab Catching", description: "Traditional crab farming and catching." }
      ]
    },
    {
      id: "silent-valley",
      name: "SILENT VALLEY",
      desc: "The Last Undisturbed Rainforest of Kerala with pristine tropical evergreen forests.",
      image: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1760193265/silentvalley-_chdrlb.jpg",
      images: [
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1760193265/silentvalley-_chdrlb.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759476405/tea_1_jrixag.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759476405/tea_2_rmqxfj.jpg"
      ],
      rating: "4.5",
      tours: "2",
      highlights: ["Lion-tailed Macaque", "Watchtower", "Kunthi River", "Evergreen Forests", "Wildlife Safari"],
      bestSeason: "December to April",
      distance: "75 km from Palakkad",
      packages: ["Rainforest Adventure", "Wildlife Conservation Tour"],
      longDescription: "Silent Valley National Park is renowned for its pristine tropical evergreen rainforest, rich biodiversity, and as one of the last substantial tracts of virgin rainforest in Western Ghats.",
      climate: "Rainforest climate",
      attractions: [
        { name: "Lion-tailed Macaque", description: "Endangered primate species found here." },
        { name: "Watchtower", description: "Observation points for wildlife viewing." },
        { name: "Kunthi River", description: "Pristine river flowing through forest." },
        { name: "Evergreen Forests", description: "Virgin rainforest with rich biodiversity." }
      ]
    },
    {
      id: "edakkal-caves",
      name: "EDAKKAL CAVES",
      desc: "Ancient Rock Art and Prehistoric Heritage with carvings dating back over 6,000 years.",
      image: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1760193262/Edakkal_Caves_scfq2n.jpg",
      images: [
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1760193262/Edakkal_Caves_scfq2n.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759476405/tea_1_jrixag.jpg",
        "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759476405/tea_2_rmqxfj.jpg"
      ],
      rating: "4.4",
      tours: "3",
      highlights: ["Prehistoric Carvings", "Rock Shelters", "Ancient Petroglyphs", "Trekking", "Historical Exploration"],
      bestSeason: "October to May",
      distance: "10 km from Sulthan Bathery",
      packages: ["Historical Tour", "Archaeological Experience"],
      longDescription: "Edakkal Caves are natural rock shelters with pictorial writings and carvings dating back over 6,000 years to Neolithic period. Provide earliest evidences of human civilization in Kerala.",
      climate: "Hill station climate",
      attractions: [
        { name: "Prehistoric Carvings", description: "Ancient rock engravings and paintings." },
        { name: "Rock Shelters", description: "Natural caves formed by large boulders." },
        { name: "Ancient Petroglyphs", description: "Stone age carvings and symbols." },
        { name: "Trekking", description: "Scenic trek to reach the cave site." }
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