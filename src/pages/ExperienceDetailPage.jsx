import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const ExperienceDetailPage = () => {
  const { experienceId } = useParams();
  const navigate = useNavigate();

  // Updated images with proper categorization
  const categoryImages = {
    ayurveda: [
      {
        url: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770797/udvartana_khwlq6.jpg",
        title: "Udvartana",
        description: "Herbal powder massage for detoxification and rejuvenation"
      },
      {
        url: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770795/shirodhara_t8shj8.jpg",
        title: "Shirodhara",
        description: "Continuous oil flow therapy for deep mental relaxation"
      },
      {
        url: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770795/pizhichil_rba8ox.png",
        title: "Pizhichil",
        description: "Royal treatment with warm oil bath for complete body rejuvenation"
      },
      {
        url: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770797/udvartana_khwlq6.jpg",
        title: "Kizhi",
        description: "Warm herbal poultice massage for pain relief and muscle relaxation"
      },
      {
        url: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770795/shirodhara_t8shj8.jpg",
        title: "Nasya",
        description: "Nasal administration of herbal medicines for sinus and respiratory health"
      },
      {
        url: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770795/pizhichil_rba8ox.png",
        title: "Kati Basti",
        description: "Specialized lower back treatment with warm medicated oil"
      },
      {
        url: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770797/udvartana_khwlq6.jpg",
        title: "Marma Massage",
        description: "Energy point stimulation for holistic healing and balance"
      },
      {
        url: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770795/shirodhara_t8shj8.jpg",
        title: "Abhyanga",
        description: "Traditional full-body massage with warm herbal oils"
      }
    ],
    artforms: [
      {
        url: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770809/theyyam_fnnirr.jpg",
        title: "Theyyam Ritual",
        description: "Ancient ritual dance form connecting divine and mortal realms"
      },
      {
        url: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770799/Theyyam_txgzaj.png",
        title: "Theyyam Performance",
        description: "Traditional folk art with elaborate costumes and makeup"
      },
      {
        url: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770798/Thiruvathirakkali_u12e97.jpg",
        title: "Thiruvathirakkali",
        description: "Graceful circular dance celebrating feminine energy"
      },
      {
        url: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770795/Pulikali_pzfhy3.jpg",
        title: "Pulikali Tiger Dance",
        description: "Vibrant tiger dance during Onam celebrations"
      },
      {
        url: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770793/Koodiyattam-featured-image_bnxlci.png",
        title: "Koodiyattam",
        description: "Ancient Sanskrit theatre tradition, UNESCO heritage art"
      },
      {
        url: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770793/Margamkali_au4gup.jpg",
        title: "Margamkali",
        description: "Traditional Syrian Christian dance with lamp"
      },
      {
        url: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770791/960px-Ottamthullal_kerala_gskyz1.jpg",
        title: "Ottamthullal",
        description: "Satirical solo performance with social commentary"
      },
      {
        url: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770793/Koodiyattam-featured-image_bnxlci.png",
        title: "Kutiyattam",
        description: "Ancient Sanskrit theatre, UNESCO heritage art form"
      },
      {
        url: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770795/Pulikali_pzfhy3.jpg",
        title: "Padayani",
        description: "Ritual folk dance with colorful masks and vibrant energy"
      }
    ],
    events: [
      {
        url: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770797/vishu-celebration_pj21b6.png",
        title: "Vishu Celebration",
        description: "Kerala's New Year festival with Vishukkani and fireworks"
      },
      {
        url: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770796/Thrissur_Pooram_e8qjxs.jpg",
        title: "Thrissur Pooram",
        description: "Grand temple festival with decorated elephants and percussion"
      },
      {
        url: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770795/Snake_Boat_Races_Vallam_Kali_iko5qt.png",
        title: "Snake Boat Race",
        description: "Traditional boat race competition on serene backwaters"
      },
      {
        url: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770795/onam_12_n17zjz.png",
        title: "Onam Festival",
        description: "Harvest festival with flower carpets and traditional feast"
      },
      {
        url: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770793/Makaravilakku_o763yr.png",
        title: "Makaravilakku",
        description: "Sacred festival at Sabarimala temple"
      },
      {
        url: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770792/Christmas_k7z16s.jpg",
        title: "Christmas Celebration",
        description: "Festive celebrations across Kerala's churches"
      },
      {
        url: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770791/Attukal_Pongala_bws6he.jpg",
        title: "Attukal Pongala",
        description: "Women's festival creating world's largest gathering"
      },
      {
        url: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770809/theyyam_fnnirr.jpg",
        title: "Theyyam Festival",
        description: "Ritual dance festival in North Kerala temples"
      },
      {
        url: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770796/Thrissur_Pooram_e8qjxs.jpg",
        title: "Arattu Festival",
        description: "Sacred bath festival at major Kerala temples"
      },
      {
        url: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770793/Makaravilakku_o763yr.png",
        title: "Karkidaka Vavu Bali",
        description: "Ancestral ritual during monsoon season"
      }
    ],
    cuisine: [
      {
        url: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770796/Thalassery_Biryani_m0jz6r.jpg",
        title: "Thalassery Biryani",
        description: "Aromatic rice dish with Malabar spices and meat"
      },
      {
        url: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770794/pepper-delight-ada-pradhaman-2_wkym90.jpg",
        title: "Ada Pradhaman",
        description: "Sweet payasam with rice flakes and jaggery"
      },
      {
        url: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770795/Puttu_and_Kadala_Curry_frdnyy.jpg",
        title: "Puttu and Kadala Curry",
        description: "Steamed rice cake with spicy chickpea curry"
      },
      {
        url: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770794/malabar-paratha-165616695016x9_lenh3t.jpg",
        title: "Malabar Paratha",
        description: "Flaky layered flatbread perfect with curries"
      },
      {
        url: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770793/Kappa_and_Meen_Curry_pzbfnx.png",
        title: "Kappa and Meen Curry",
        description: "Tapioca with spicy fish curry - Kerala staple"
      },
      {
        url: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770792/idli_nm5o8h.jpg",
        title: "Idli Sambar",
        description: "Soft steamed rice cakes with lentil stew"
      },
      {
        url: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770793/keralan_prawn_curry_45390_16x9_fzqql5.jpg",
        title: "Kerala Prawn Curry",
        description: "Spicy prawn preparation in coconut gravy"
      },
      {
        url: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770794/pepper-delight-ada-pradhaman-2_wkym90.jpg",
        title: "Erissery",
        description: "Pumpkin and black-eyed peas curry with coconut"
      }
    ]
  };

  // Updated detailed content with all missing information
  const detailedContent = {
    ayurveda: [
      {
        title: "Abhyanga",
        description: "Abhyanga is a traditional Ayurvedic full-body massage using warm, herbal oils applied with gentle, rhythmic strokes. It deeply nourishes the skin, improves blood circulation, and induces a sense of relaxation by calming the nervous system. This massage supports detoxification through lymphatic drainage and helps to balance the body's doshas (bio-energies). Abhyanga is often recommended for stress relief, muscle relaxation, and maintaining overall health and wellness.",
        benefits: ["Stress relief and muscle relaxation", "Improved blood circulation", "Lymphatic drainage and detoxification", "Dosha balancing and rejuvenation", "Enhanced skin health and glow"],
        duration: "60-90 minutes",
        bestFor: "Overall wellness and stress management"
      },
      {
        title: "Shirodhara",
        description: "Shirodhara is a relaxing Ayurvedic therapy where warm herbal oil is gently poured in a steady stream over the forehead, particularly on the 'third eye' area. This treatment calms the mind, relieves stress, anxiety, and insomnia, and promotes mental clarity. It also helps balance the nervous system and enhances overall brain function. Shirodhara is often used in conjunction with other Ayurvedic therapies to support emotional well-being and rejuvenation.",
        benefits: ["Mental relaxation and stress relief", "Improved sleep quality", "Enhanced mental clarity", "Nervous system balance", "Emotional well-being"],
        duration: "45-60 minutes",
        bestFor: "Stress, anxiety, and mental wellness"
      },
      {
        title: "Pizhichil",
        description: "Pizhichil is a unique Kerala Ayurvedic therapy where warm, medicated herbal oil is continuously poured over the entire body while gentle massage is given. This treatment deeply relaxes the muscles, nourishes the skin, and helps relieve joint and nerve pain. Pizhichil is especially effective for conditions like arthritis, muscle stiffness, and neurological disorders. It enhances circulation and aids in detoxifying the body through the skin. Often called the 'oil bath,' Pizhichil is a signature rejuvenation treatment.",
        benefits: ["Muscle and joint pain relief", "Deep tissue nourishment", "Neurological disorder management", "Complete body rejuvenation", "Improved circulation"],
        duration: "60-90 minutes",
        bestFor: "Arthritis, muscle stiffness, and rejuvenation"
      },
      {
        title: "Udvartana",
        description: "Udvartana is a traditional Ayurvedic massage where the body is vigorously massaged with herbal powders or pastes, using upward strokes. This therapy is known for detoxifying the skin, stimulating the lymphatic system, and improving circulation. Udvartana is especially recommended for those seeking weight loss, cellulite reduction, skin exfoliation, and enhanced muscle tone. The procedure helps in removing toxins, revitalizing the senses, and promoting a glowing complexion.",
        benefits: ["Weight management", "Skin detoxification", "Improved circulation", "Cellulite reduction", "Muscle toning"],
        duration: "45-60 minutes",
        bestFor: "Weight loss and skin revitalization"
      },
      {
        title: "Kizhi",
        description: "Kizhi is a traditional Ayurvedic massage therapy from Kerala that involves the use of warm herbal poultices or bundles. These bundles, filled with medicinal herbs, are heated and gently pressed or massaged over the body to relieve pain, inflammation, and muscle stiffness. There are different types of Kizhi, such as Elakizhi (herbal leaves) and Njavarakizhi (medicated rice), each providing unique therapeutic benefits.",
        benefits: ["Pain and inflammation relief", "Improved circulation", "Muscle relaxation", "Tissue detoxification", "Chronic condition management"],
        duration: "60-75 minutes",
        bestFor: "Chronic pain and muscular disorders"
      },
      {
        title: "Nasya",
        description: "Nasya is an ancient Ayurvedic therapy that involves administering medicinal oils or herbal extracts through the nostrils. It targets the head, sinuses, and respiratory system by cleansing, purifying, and nourishing these areas. Nasya is effective in relieving sinus congestion, headaches, migraines, and neurological issues. It also promotes mental clarity, reduces stress and anxiety, and supports healthy hair growth by improving scalp circulation.",
        benefits: ["Sinus and respiratory health", "Headache and migraine relief", "Mental clarity", "Scalp and hair health", "Stress reduction"],
        duration: "30-45 minutes",
        bestFor: "Respiratory issues and mental wellness"
      },
      {
        title: "Kati Basti",
        description: "Kati Basti is a specialized Ayurvedic therapy focused on treating the lower back region. It involves creating a dough ring on the lower back, which is filled with warm, medicated herbal oil. The oil is retained within this ring for 30 to 40 minutes, allowing deep penetration to soothe muscles, reduce pain, and relieve stiffness. This therapy is highly effective in treating chronic lower back pain, muscle spasms, sciatica, and degenerative spinal conditions.",
        benefits: ["Lower back pain relief", "Spinal health improvement", "Muscle relaxation", "Enhanced flexibility", "Nerve soothing"],
        duration: "45-60 minutes",
        bestFor: "Chronic back pain and spinal issues"
      },
      {
        title: "Marma Massage",
        description: "Marma Massage is an ancient Ayurvedic therapy that focuses on stimulating specific vital energy points in the body called Marma points. These 107 points are junctions where muscles, nerves, bones, and vessels converge and are considered crucial for the flow of life energy or prana. By gently massaging these points, Marma Massage helps to unblock energy pathways, promote healing, reduce pain, and restore physical and mental balance.",
        benefits: ["Energy pathway unblocking", "Pain reduction", "Stress relief", "Improved circulation", "Emotional balance"],
        duration: "60-90 minutes",
        bestFor: "Energy balancing and holistic healing"
      }
    ],
    artforms: [
      {
        title: "Kathakali",
        description: "Kathakali is a classical dance-drama from Kerala, known for its vibrant costumes, elaborate face makeup, and expressive hand gestures. It combines dance, music, and acting to tell stories from Indian epics like the Ramayana and Mahabharata. Performers use intricate facial expressions and body movements to convey emotions and narratives without speaking. The dance is traditionally performed by men, even for female roles, with each character's costume and makeup symbolizing their nature.",
        features: ["Vibrant costumes and makeup", "Expressive hand gestures", "Traditional percussion music", "Epic mythological stories", "Male performers only"],
        duration: "2-4 hours",
        significance: "Cultural symbol of Kerala's temple traditions"
      },
      {
        title: "Mohiniyattam",
        description: "Mohiniyattam is a classical dance form from Kerala, known as the 'dance of the enchantress.' It features graceful, swaying movements and subtle facial expressions, emphasizing feminine beauty and lasya style. Traditionally performed by women, it tells stories of love and devotion, often inspired by Hindu mythology. The dancer wears a white costume with golden borders, symbolizing simplicity and elegance.",
        features: ["Graceful movements", "Feminine expression", "White and gold costumes", "Sopanam music style", "Devotional themes"],
        duration: "1-2 hours",
        significance: "Elegant representation of Kerala's classical arts"
      },
      {
        title: "Theyyam",
        description: "Theyyam is a vibrant ritual art form from North Kerala, blending dance, music, and mysticism. Performers in striking costumes and elaborate makeup represent gods, goddesses, and legendary heroes, becoming living embodiments of the divine during the ritual. The performance, accompanied by rhythmic drumming and invocation songs, often takes place in village shrines and sacred groves.",
        features: ["Divine embodiment", "Elaborate costumes", "Ritualistic performance", "Tribal heritage", "Trance states"],
        duration: "Varies by type",
        significance: "Bridge between human and spiritual worlds"
      },
      {
        title: "Kalaripayattu",
        description: "Kalaripayattu is one of the oldest martial arts in the world, originating in Kerala over 3,000 years ago. It is a scientifically structured discipline that includes strikes, kicks, grappling, weaponry, and healing techniques. The word 'Kalari' means training space, and 'Payattu' means fight or practice. According to legend, Sage Parashurama, the creator of Kerala, established Kalaripayattu to help locals defend themselves.",
        features: ["Ancient martial techniques", "Weapon training", "Healing methods", "Animal-inspired movements", "Combat and therapy"],
        duration: "Training programs vary",
        significance: "Oldest surviving martial art system"
      },
      {
        title: "Kutiyattam",
        description: "Kutiyattam is one of the oldest classical Sanskrit theatre forms, originating in Kerala over 2,000 years ago. It combines ancient Sanskrit drama with local theatrical traditions and is recognized by UNESCO as a Masterpiece of the Oral and Intangible Heritage of Humanity. Kutiyattam performances are traditionally held in temple theatres called Koothambalams, featuring elaborately choreographed gestures, facial expressions, and stylized acting.",
        features: ["Sanskrit theatre", "UNESCO heritage", "Temple performances", "Elaborate expressions", "Ancient traditions"],
        duration: "Can last up to 40 days",
        significance: "World's oldest surviving theatre form"
      },
      {
        title: "Ottamthullal",
        description: "Ottamthullal is a traditional performing art form from Kerala, created in the 18th century by the famous poet Kunchan Nambiar. It combines dance, recitation, and humor to present stories, often satirizing social issues and human foibles. The performer wears colorful costumes and green face makeup, similar to Kathakali but simpler and more approachable.",
        features: ["Social satire", "Solo performance", "Colorful costumes", "Malayalam narration", "Humorous commentary"],
        duration: "30-60 minutes",
        significance: "Social commentary through art"
      },
      {
        title: "Padayani",
        description: "Padayani is a traditional ritualistic folk dance form performed in temples of central Kerala, dedicated to Goddess Bhadrakali. It is a vibrant combination of music, dance, theatre, satire, elaborate masks, and paintings. The name Padayani means 'row of warriors,' and the dance is believed to have roots in ancient martial arts, symbolizing a warrior's formation.",
        features: ["Ritual masks", "Warrior symbolism", "Vibrant colors", "Community participation", "Religious devotion"],
        duration: "Evening performances",
        significance: "Purification and community devotion"
      },
      {
        title: "Thiruvathirakali",
        description: "Thiruvathirakali, also known as Kaikottikali, is a traditional group dance performed by women in Kerala, especially during the festival of Onam and the Thiruvathira celebration. Dancers form a circle around a lit lamp, clapping their hands rhythmically in coordination with songs that often praise deities like Lord Shiva, Parvati, Ganesha, and Saraswati.",
        features: ["Circular formation", "Group synchronization", "Traditional attire", "Devotional themes", "Feminine energy"],
        duration: "1-2 hours",
        significance: "Celebration of feminine grace and energy"
      },
      {
        title: "Pulikali",
        description: "Pulikali, also known as the Tiger Dance, is a vibrant folk art form from Kerala practiced mainly during the Onam festival. Performers paint their bodies with tiger-like stripes in shades of yellow, red, and black, creating a striking visual effect. They dance to the rhythmic beats of traditional percussion instruments such as the thakil and chenda.",
        features: ["Tiger body painting", "Energetic movements", "Percussion accompaniment", "Festive celebration", "Community spirit"],
        duration: "2-3 hours",
        significance: "Expression of courage and community spirit"
      },
      {
        title: "Margamkali",
        description: "Margamkali is a traditional Christian folk dance from Kerala, practiced mainly by the Syrian Christian community, especially the Knanaya subgroup. It commemorates the life and missionary work of St. Thomas the Apostle, who is believed to have brought Christianity to Kerala. The dance involves about twelve performers who form a circle around a traditional lamp called Nilavilakku, symbolizing Christ and his disciples.",
        features: ["Christian tradition", "Circular formation", "White attire", "Cymbal accompaniment", "Religious themes"],
        duration: "30-45 minutes",
        significance: "Syrian Christian cultural heritage"
      }
    ],
    events: [
      {
        title: "Onam",
        description: "Onam is Kerala's most celebrated and vibrant harvest festival. It marks the legendary homecoming of King Mahabali, a symbol of prosperity, equality, and cultural unity. The festival spans ten days, filled with colorful activities like boat races, floral arrangements called Pookkalam, traditional dances, and grand feasts (Onam Sadhya). It is celebrated with great enthusiasm by people of all communities, showcasing Kerala's rich cultural heritage.",
        highlights: ["Pookkalam flower carpets", "Snake boat races", "Onam Sadhya feast", "Traditional dances", "Cultural unity"],
        duration: "10 days",
        time: "August-September"
      },
      {
        title: "Thrissur Pooram",
        description: "Thrissur Pooram is Kerala's grandest and most spectacular temple festival, held annually at the Vadakkunnathan Temple in Thrissur. Celebrated in the Malayalam month of Medam (April-May), it brings together ten temples in a magnificent cultural procession. The festival is renowned for its striking display of decorated elephants, lively traditional percussion ensembles like Ilanjithara Melam, and the vibrant Kudamattam ritual.",
        highlights: ["Decorated elephants", "Percussion ensembles", "Kudamattam ritual", "Fireworks display", "Cultural procession"],
        duration: "1 day main event",
        time: "April-May"
      },
      {
        title: "Vishu",
        description: "Vishu is Kerala's traditional New Year festival, celebrated with joy and hope for prosperity. It marks the beginning of the Malayalam month of Medam and the start of the harvest season. The highlight is the Vishu Kani, an auspicious arrangement of items like rice, fruits, gold coins, and the bright yellow Konna flowers, set for the first sight on the festival morning.",
        highlights: ["Vishu Kani arrangement", "Vishu Kaineettam", "Traditional feast", "Family gatherings", "New beginnings"],
        duration: "1 day",
        time: "April"
      },
      {
        title: "Theyyam Festival",
        description: "Theyyam is not just an art form but also a major festival in North Kerala, where various forms of Theyyam are performed in temples and sacred groves. These ritual performances occur between December and April, with each Theyyam having unique stories, costumes, and significance. The festival attracts devotees and tourists alike, offering a glimpse into Kerala's ancient spiritual traditions.",
        highlights: ["Ritual performances", "Divine embodiment", "Traditional costumes", "Spiritual significance", "Cultural heritage"],
        duration: "December to April",
        time: "Winter season"
      },
      {
        title: "Attukal Pongala",
        description: "Attukal Pongala is an annual 10-day festival celebrated at the Attukal Bhagavathi Temple in Thiruvananthapuram, Kerala. It is famous for being the largest gathering of women for a religious purpose in the world. On the ninth day, millions of women from diverse communities cook a special sweet dish called Pongala in earthen pots as an offering to the goddess Attukalamma.",
        highlights: ["Women's gathering", "Pongala offering", "Community harmony", "Spiritual devotion", "World record"],
        duration: "10 days",
        time: "February-March"
      },
      {
        title: "Makaravilakku",
        description: "Makaravilakku is a significant annual festival celebrated at the Sabarimala Ayyappa Temple in Kerala. It coincides with Makara Sankranti and marks the culmination of a 41-day pilgrimage by millions of devotees. The festival is renowned for the divine light called Makara Jyothi, seen thrice on the Ponnambalamedu hill near the temple.",
        highlights: ["Makara Jyothi", "Pilgrimage completion", "Sacred procession", "Spiritual devotion", "Mass gathering"],
        duration: "Festival day",
        time: "January"
      },
      {
        title: "Arattu Festival",
        description: "Arattu Festival is a significant religious festival celebrated in Kerala, especially at the Sree Padmanabhaswamy Temple in Thiruvananthapuram and Janardhan Swami Temple in Varkala. The word 'Arattu' means a holy bath, marking the ceremonial bathing of the deity's idol in a sacred water body like a river or sea. The festival usually lasts for ten days and is held twice a year.",
        highlights: ["Holy bath ritual", "Temple processions", "Cultural performances", "Royal participation", "Religious significance"],
        duration: "10 days",
        time: "March-April & October-November"
      },
      {
        title: "Karkidaka Vavu Bali",
        description: "Karkidaka Vavu Bali is a sacred Hindu ritual observed in Kerala during the new moon day of the Malayalam month Karkidakam (July-August). It is performed to honor and remember deceased ancestors, seeking peace and liberation (moksha) for their souls. Devotees gather at riverbanks, temple ponds, and beaches early in the morning to perform the Bali Tharpanam ritual.",
        highlights: ["Ancestral rituals", "Riverbank ceremonies", "Family traditions", "Spiritual continuity", "Monsoon season"],
        duration: "1 day",
        time: "July-August"
      },
      {
        title: "Snake Boat Races",
        description: "Snake Boat Races (Vallam Kali) are traditional boat races held in Kerala's backwaters, especially during the Onam festival season from July to September. The highlight of Vallam Kali is the race of the Chundan Vallam or snake boats, which are long, slender boats around 30 to 40 meters in length, with up to 128 paddlers rowing in unison.",
        highlights: ["Chundan Vallam boats", "Synchronized rowing", "Traditional boat songs", "Community participation", "Competitive spirit"],
        duration: "Race day events",
        time: "July-September"
      },
      {
        title: "Christmas",
        description: "Christmas in Kerala is a joyous festival celebrated with a unique blend of religious and cultural traditions. Homes, churches, and streets are adorned with bright stars, twinkling lights, and nativity cribs depicting the birth of Jesus Christ. Families gather for midnight Mass, singing carols and participating in festive prayers.",
        highlights: ["Church decorations", "Midnight Mass", "Traditional feast", "Community celebrations", "Cultural blend"],
        duration: "Christmas week",
        time: "December"
      }
    ],
    cuisine: [
          {
        title: "Thalassery Biryani",
        description: "Thalassery Biryani is a signature rice dish from the Malabar region of Kerala, known for its distinct aroma and delicate flavor. It is made using Jeerakasala or Kaima rice, which has a unique aroma and fluffy texture. The biryani incorporates a mild yet flavorful chicken masala cooked with onions, ginger, garlic, green chilies, tomatoes, and a blend of traditional Malabar spices.",
        ingredients: ["Jeerakasala rice", "Chicken", "Malabar spices", "Cashews & raisins", "Yogurt"],
        serving: "Lunch/Dinner",
        taste: "Aromatic and flavorful"
      },
      {
        title: "Appam with Stew",
        description: "Appam with Stew is a classic Kerala breakfast loved for its perfect blend of flavors and textures. Appam is a soft, lacy pancake made from fermented rice batter and coconut milk, featuring a fluffy center and crispy edges. The vegetable stew, also called Ishtu, is a mildly spiced curry cooked in a rich coconut milk base with vegetables like potatoes, carrots, and beans.",
        ingredients: ["Rice batter", "Coconut milk", "Mixed vegetables", "Mild spices", "Cinnamon & cardamom"],
        serving: "Breakfast",
        taste: "Soft appam with creamy stew"
      },
      {
        title: "Karimeen Pollichathu",
        description: "Karimeen Pollichathu is a popular Kerala dish featuring pearl spot fish marinated with a blend of spices. The fish is coated with a masala made from onions, tomatoes, ginger, garlic, and coconut milk, giving it a rich and aromatic flavor. It is then wrapped in banana leaves, which infuse the fish with a unique, smoky aroma during cooking.",
        ingredients: ["Pearl spot fish", "Banana leaves", "Spice blend", "Coconut oil", "Coconut milk"],
        serving: "Lunch/Dinner",
        taste: "Spicy and aromatic"
      },
      {
        title: "Malabar Parotta with Beef Curry",
        description: "Malabar Parotta with Beef Curry is a beloved Kerala dish known for its rich flavors and textures. Malabar Parotta is a flaky, layered flatbread made from refined flour, kneaded to a soft dough, and cooked on a hot griddle until golden and crisp. Beef Curry from Kerala is a spicy, aromatic preparation cooked with a blend of local spices, coconut oil, onions, tomatoes, and sometimes coconut milk.",
        ingredients: ["Refined flour", "Beef", "Malabar spices", "Coconut oil", "Coconut milk"],
        serving: "Lunch/Dinner",
        taste: "Flaky bread with spicy curry"
      },
      {
        title: "Kerala Prawn Curry",
        description: "Kerala Prawn Curry is a flavorful, aromatic dish made with fresh prawns cooked in a spiced coconut milk gravy. The prawns are first marinated with turmeric, garlic, and ginger for enhanced taste. The curry base is prepared by sautéing mustard seeds, curry leaves, onions, and spices like red chili powder and coriander.",
        ingredients: ["Fresh prawns", "Coconut milk", "Tamarind", "Kerala spices", "Coconut oil"],
        serving: "Lunch/Dinner",
        taste: "Spicy, tangy, and creamy"
      },
      
          {
        title: "Puttu and Kadala Curry",
        description: "Puttu and Kadala Curry is a beloved traditional breakfast in Kerala. Puttu is made by steaming layers of coarsely ground rice flour and grated coconut in a cylindrical mold, resulting in soft and aromatic rice cakes. Kadala Curry is a spicy, flavorful curry made with black chickpeas cooked in a rich blend of spices, onions, tomatoes, garlic, and coconut, often tempered with mustard seeds and curry leaves in coconut oil.",
        ingredients: ["Rice flour", "Grated coconut", "Black chickpeas", "Kerala spices", "Coconut oil"],
        serving: "Breakfast",
        taste: "Mild puttu with spicy curry"
      },
      {
        title: "Erissery",
        description: "Erissery is a traditional Kerala dish made with yellow pumpkin, black-eyed peas, coconut, and spices. The pumpkin is peeled, cubed, and cooked with soaked cowpeas until both are soft. A ground coconut mixture with cumin, green chilies, and turmeric is prepared and added to the cooked pumpkin and beans. The dish is seasoned with a tempering of mustard seeds, red chilies, curry leaves, and coconut oil.",
        ingredients: ["Yellow pumpkin", "Black-eyed peas", "Coconut", "Spices", "Coconut oil"],
        serving: "Lunch/Dinner",
        taste: "Mildly spiced and slightly sweet"
      },
      {
        title: "Idli Sambar",
        description: "Idli Sambar is a popular South Indian breakfast combination, especially favored in Kerala. Idli are soft, steamed rice cakes made from fermented rice and urad dal batter. Sambar is a lentil-based vegetable stew flavored with tamarind, mustard seeds, curry leaves, and a special blend of spices called sambar powder.",
        ingredients: ["Rice batter", "Urad dal", "Mixed vegetables", "Sambar spices", "Tamarind"],
        serving: "Breakfast",
        taste: "Soft idli with tangy sambar"
      },
      {
        title: "Ada Pradhaman",
        description: "Ada Pradhaman is a rich and creamy Kerala dessert made from rice ada (rice flakes), jaggery, and coconut milk. The rice ada is soaked, then sautéed in ghee with cashews, raisins, and coconut pieces. Jaggery syrup is added to the cooked ada and simmered until thickened. Coconut milk—both thick and thin—is poured in during cooking to give a silky texture.",
        ingredients: ["Rice ada", "Jaggery", "Coconut milk", "Cardamom", "Cashews & raisins"],
        serving: "Dessert",
        taste: "Sweet and creamy"
      },
      {
        title: "Kappa and Meen Curry",
        description: "Kappa and Meen Curry is a classic Kerala combination of boiled tapioca (kappa) and spicy fish curry (meen curry). Tapioca is peeled, cut, and boiled until soft, then mashed and mixed with grated coconut, turmeric, cumin, and curry leaves for added flavor. The fish curry is made with fresh fish cooked in a tangy and spicy gravy using tamarind, chili powder, mustard seeds, fenugreek, curry leaves, and sometimes coconut milk.",
        ingredients: ["Tapioca", "Fresh fish", "Coconut", "Tamarind", "Kerala spices"],
        serving: "Lunch/Dinner",
        taste: "Starchy tapioca with spicy fish curry"
      }
    ]
  };

  const experiencesData = {
    ayurveda: {
      title: "Ayurveda",
      subtitle: "The Ancient Healing Science",
      heroImage: categoryImages.ayurveda[0].url,
      description: "Experience the ancient healing science of Ayurveda in its birthplace - Kerala, where wellness meets tradition",
      overview: "Ayurveda, the 5,000-year-old natural healing system of India, finds its most authentic expression in Kerala. This ancient science of life focuses on holistic wellness through natural treatments, herbal medicines, and lifestyle practices that harmonize body, mind, and spirit.",
      images: categoryImages.ayurveda,
      detailedContent: detailedContent.ayurveda
    },
    artforms: {
      title: "Artforms",
      subtitle: "Traditional Arts & Cultural Performances",
      heroImage: categoryImages.artforms[0].url,
      description: "Discover Kerala's rich tradition of classical and folk arts preserved through centuries of cultural heritage",
      overview: "Kerala's cultural landscape is adorned with diverse art forms ranging from majestic classical dances to vibrant folk arts. Each performance tells a story of tradition, devotion, and artistic excellence that has been passed down through generations.",
      images: categoryImages.artforms,
      detailedContent: detailedContent.artforms
    },
    events: {
      title: "Events & Festivals",
      subtitle: "Cultural Celebrations Through the Year",
      heroImage: categoryImages.events[0].url,
      description: "Immerse yourself in Kerala's vibrant festivals and cultural events that showcase the state's rich heritage",
      overview: "Kerala's festival calendar is packed with colorful celebrations that showcase the state's rich cultural heritage and religious harmony. From grand temple festivals to harvest celebrations, each event is a spectacular display of tradition, music, and community spirit.",
      images: categoryImages.events,
      detailedContent: detailedContent.events
    },
    cuisine: {
      title: "Cuisine",
      subtitle: "Authentic Kerala Flavors & Culinary Heritage",
      heroImage: categoryImages.cuisine[0].url,
      description: "Savor the authentic flavors of Kerala's diverse culinary heritage influenced by its geography and history",
      overview: "Kerala cuisine is a delightful blend of flavors influenced by its coastal geography, spice trade history, and cultural diversity. From spicy seafood to vegetarian delicacies, each dish tells a story of the land and its people.",
      images: categoryImages.cuisine,
      detailedContent: detailedContent.cuisine
    }
  };

  const experience = experiencesData[experienceId];

  if (!experience) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-emerald-50 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">🔍</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Experience Not Found</h1>
          <p className="text-gray-600 mb-8">The experience you're looking for doesn't exist or has been moved.</p>
          <button
            onClick={() => navigate("/experiences")}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Back to Experiences
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white mt-10 md:mt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-900 via-teal-800 to-blue-900 overflow-hidden">
        <div className="pt-20 pb-16">
          <div className="absolute inset-0">
            <img
              src={experience.heroImage}
              alt={experience.title}
              className="w-full h-full object-cover opacity-30 transform scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
          </div>
          
          <div className="relative max-w-6xl mx-auto px-4 h-full flex items-center">
            <div className="text-white">
              <button
                onClick={() => navigate("/")}
                className="flex items-center text-emerald-200 hover:text-white mb-6 transition-all duration-300 group"
              >
                <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to All Experiences
              </button>
              
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                  {experience.title}
                </h1>
                <div className="w-20 h-1 bg-emerald-400 mb-4"></div>
                <p className="text-xl text-emerald-100 mb-2 font-light">
                  {experience.subtitle}
                </p>
                <p className="text-lg text-emerald-50 opacity-90 leading-relaxed">
                  {experience.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">About {experience.title}</h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {experience.overview}
                </p>
              </div>
            </div>

            {/* Preview Images */}
            <div className="grid grid-cols-2 gap-4">
              {experience.images.slice(0, 4).map((image, index) => (
                <div 
                  key={index} 
                  className={`bg-gray-50 rounded-xl overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    index === 0 ? 'col-span-2' : ''
                  }`}
                >
                  <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-3">
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">{image.title}</h4>
                    <p className="text-xs text-gray-600 line-clamp-2">{image.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Content Section with Alternating Layout */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">
              Discover {experience.title}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore the comprehensive details of each aspect with authentic information and visuals
            </p>
          </div>
          
          <div className="space-y-16">
            {experience.detailedContent.map((item, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 ${
                  index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                } lg:flex`}
              >
                {/* Image Section */}
                <div className="lg:w-1/2">
                  <div className="relative h-64 lg:h-full overflow-hidden">
                    <img
                      src={experience.images[index]?.url || experience.images[0].url}
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/10 hover:bg-black/5 transition-all duration-300"></div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:w-1/2 p-8">
                  <div className="h-full flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{item.description}</p>
                    
                    {/* Dynamic content based on category */}
                    {item.benefits && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-emerald-700 mb-3">Key Benefits:</h4>
                        <ul className="space-y-2">
                          {item.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-center text-gray-600">
                              <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {item.features && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-emerald-700 mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {item.features.map((feature, i) => (
                            <li key={i} className="flex items-center text-gray-600">
                              <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {item.highlights && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-emerald-700 mb-3">Highlights:</h4>
                        <ul className="space-y-2">
                          {item.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-center text-gray-600">
                              <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {item.ingredients && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-emerald-700 mb-3">Main Ingredients:</h4>
                        <ul className="space-y-2">
                          {item.ingredients.map((ingredient, i) => (
                            <li key={i} className="flex items-center text-gray-600">
                              <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                              {ingredient}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Additional Info */}
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                      {item.duration && (
                        <div>
                          <h4 className="font-semibold text-gray-700 text-sm">Duration</h4>
                          <p className="text-gray-600">{item.duration}</p>
                        </div>
                      )}
                      {item.bestFor && (
                        <div>
                          <h4 className="font-semibold text-gray-700 text-sm">Best For</h4>
                          <p className="text-gray-600">{item.bestFor}</p>
                        </div>
                      )}
                      {item.time && (
                        <div>
                          <h4 className="font-semibold text-gray-700 text-sm">Time</h4>
                          <p className="text-gray-600">{item.time}</p>
                        </div>
                      )}
                      {item.serving && (
                        <div>
                          <h4 className="font-semibold text-gray-700 text-sm">Serving</h4>
                          <p className="text-gray-600">{item.serving}</p>
                        </div>
                      )}
                      {item.taste && (
                        <div>
                          <h4 className="font-semibold text-gray-700 text-sm">Taste Profile</h4>
                          <p className="text-gray-600">{item.taste}</p>
                        </div>
                      )}
                      {item.significance && (
                        <div>
                          <h4 className="font-semibold text-gray-700 text-sm">Significance</h4>
                          <p className="text-gray-600">{item.significance}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Updated CTA Section with Multiple Contact Options */}
      <section className="py-12 md:py-16 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            Experience Kerala's {experience.title}
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
            Let our experts craft your perfect journey with authentic local insights. Contact us for personalized experiences and bookings.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-800 mb-3">📞 Call Us</h3>
              <div className="space-y-2">
                <a href="tel:+919028803309" className="block text-blue-600 hover:text-blue-800 font-medium">
                  +91 90288 03309
                </a>
                <a href="tel:+919048403309" className="block text-blue-600 hover:text-blue-800 font-medium">
                  +91 90484 03309
                </a>
              </div>
              <p className="text-sm text-gray-500 mt-3">Available 24/7 for queries and bookings</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-800 mb-3">💬 WhatsApp</h3>
              <p className="text-gray-600 mb-4">Quick responses and instant support</p>
              <a
                href="https://wa.me/919028803309?text=Hi! I'm interested in experiencing Kerala's culture and would like more information."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                <span className="mr-2">WhatsApp Now</span>
              </a>
            </div>
          </div>

          <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-200">
            <h3 className="font-semibold text-emerald-800 mb-2">🌟 Why Choose Us?</h3>
            <p className="text-emerald-700 text-sm">
              Authentic local experiences • Expert guides • Customized itineraries • 24/7 support • Best price guarantee
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExperienceDetailPage;