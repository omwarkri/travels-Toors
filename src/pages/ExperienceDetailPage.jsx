import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const ExperienceDetailPage = () => {
  const { experienceId } = useParams();
  const navigate = useNavigate();

  // All images categorized properly
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
      }
    ]
  };

  // Detailed content for each category
  const detailedContent = {
    ayurveda: [
      {
        title: "Abhyanga",
        description: "Abhyanga is a traditional Ayurvedic full-body massage using warm, herbal oils applied with gentle, rhythmic strokes. It deeply nourishes the skin, improves blood circulation, and induces a sense of relaxation by calming the nervous system. This massage supports detoxification through lymphatic drainage and helps to balance the body's doshas (bio-energies).",
        benefits: ["Stress relief and muscle relaxation", "Improved blood circulation", "Lymphatic drainage and detoxification", "Dosha balancing and rejuvenation"],
        duration: "60-90 minutes",
        bestFor: "Overall wellness and stress management"
      },
      {
        title: "Shirodhara",
        description: "Shirodhara is a relaxing Ayurvedic therapy where warm herbal oil is gently poured in a steady stream over the forehead, particularly on the 'third eye' area. This treatment calms the mind, relieves stress, anxiety, and insomnia, and promotes mental clarity. It also helps balance the nervous system and enhances overall brain function.",
        benefits: ["Mental relaxation and stress relief", "Improved sleep quality", "Enhanced mental clarity", "Nervous system balance"],
        duration: "45-60 minutes",
        bestFor: "Stress, anxiety, and mental wellness"
      },
      {
        title: "Pizhichil",
        description: "Pizhichil is a unique Kerala Ayurvedic therapy where warm, medicated herbal oil is continuously poured over the entire body while gentle massage is given. This treatment deeply relaxes the muscles, nourishes the skin, and helps relieve joint and nerve pain. Often called the 'oil bath,' Pizhichil is a signature rejuvenation treatment.",
        benefits: ["Muscle and joint pain relief", "Deep tissue nourishment", "Neurological disorder management", "Complete body rejuvenation"],
        duration: "60-90 minutes",
        bestFor: "Arthritis, muscle stiffness, and rejuvenation"
      },
      {
        title: "Udvartana",
        description: "Udvartana is a traditional Ayurvedic massage where the body is vigorously massaged with herbal powders or pastes, using upward strokes. This therapy is known for detoxifying the skin, stimulating the lymphatic system, and improving circulation. Especially recommended for weight loss and cellulite reduction.",
        benefits: ["Weight management", "Skin detoxification", "Improved circulation", "Cellulite reduction"],
        duration: "45-60 minutes",
        bestFor: "Weight loss and skin revitalization"
      },
      {
        title: "Kizhi",
        description: "Kizhi is a traditional Ayurvedic massage therapy that involves the use of warm herbal poultices or bundles. These bundles, filled with medicinal herbs, are heated and gently pressed over the body to relieve pain, inflammation, and muscle stiffness. Different types include Elakizhi and Njavarakizhi.",
        benefits: ["Pain and inflammation relief", "Improved circulation", "Muscle relaxation", "Tissue detoxification"],
        duration: "60-75 minutes",
        bestFor: "Chronic pain and muscular disorders"
      },
      {
        title: "Nasya",
        description: "Nasya is an ancient Ayurvedic therapy that involves administering medicinal oils or herbal extracts through the nostrils. It targets the head, sinuses, and respiratory system by cleansing, purifying, and nourishing these areas. Effective for sinus congestion and neurological issues.",
        benefits: ["Sinus and respiratory health", "Headache and migraine relief", "Mental clarity", "Scalp and hair health"],
        duration: "30-45 minutes",
        bestFor: "Respiratory issues and mental wellness"
      },
      {
        title: "Kati Basti",
        description: "Kati Basti is a specialized Ayurvedic therapy focused on treating the lower back region. It involves creating a dough ring on the lower back, which is filled with warm, medicated herbal oil. Highly effective for chronic lower back pain and spinal conditions.",
        benefits: ["Lower back pain relief", "Spinal health improvement", "Muscle relaxation", "Enhanced flexibility"],
        duration: "45-60 minutes",
        bestFor: "Chronic back pain and spinal issues"
      }
    ],
    artforms: [
      {
        title: "Kathakali",
        description: "Kathakali is a classical dance-drama from Kerala, known for its vibrant costumes, elaborate face makeup, and expressive hand gestures. It combines dance, music, and acting to tell stories from Indian epics like the Ramayana and Mahabharata. Performers use intricate facial expressions and body movements to convey emotions without speaking.",
        features: ["Vibrant costumes and makeup", "Expressive hand gestures", "Traditional percussion music", "Epic mythological stories"],
        duration: "2-4 hours",
        significance: "Cultural symbol of Kerala's temple traditions"
      },
      {
        title: "Theyyam",
        description: "Theyyam is a vibrant ritual art form from North Kerala, blending dance, music, and mysticism. Performers in striking costumes represent gods, goddesses, and legendary heroes, becoming living embodiments of the divine during the ritual. Over 400 types of Theyyam exist, each with unique stories and symbolism.",
        features: ["Divine embodiment", "Elaborate costumes", "Ritualistic performance", "Tribal heritage"],
        duration: "Varies by type",
        significance: "Bridge between human and spiritual worlds"
      },
      {
        title: "Mohiniyattam",
        description: "Mohiniyattam is a classical dance form from Kerala, known as the 'dance of the enchantress.' It features graceful, swaying movements and subtle facial expressions, emphasizing feminine beauty and lasya style. Traditionally performed by women, it tells stories of love and devotion.",
        features: ["Graceful movements", "Feminine expression", "White and gold costumes", "Sopanam music style"],
        duration: "1-2 hours",
        significance: "Elegant representation of Kerala's classical arts"
      },
      {
        title: "Kalaripayattu",
        description: "Kalaripayattu is one of the oldest martial arts in the world, originating in Kerala over 3,000 years ago. It includes strikes, kicks, grappling, weaponry, and healing techniques. Known for graceful, animal-inspired movements and the use of weapons like swords and the flexible Urumi.",
        features: ["Ancient martial techniques", "Weapon training", "Healing methods", "Animal-inspired movements"],
        duration: "Training programs vary",
        significance: "Oldest surviving martial art system"
      },
      {
        title: "Ottamthullal",
        description: "Ottamthullal is a traditional performing art form created in the 18th century by poet Kunchan Nambiar. It combines dance, recitation, and humor to present stories, often satirizing social issues. Known as the 'poor man's Kathakali,' it remains popular at temple festivals.",
        features: ["Social satire", "Solo performance", "Colorful costumes", "Malayalam narration"],
        duration: "30-60 minutes",
        significance: "Social commentary through art"
      },
      {
        title: "Thiruvathirakali",
        description: "Thiruvathirakali, also known as Kaikottikali, is a traditional group dance performed by women in Kerala, especially during Onam. Dancers form a circle around a lit lamp, clapping hands rhythmically with songs praising deities. The dance promotes marital bliss and community bonding.",
        features: ["Circular formation", "Group synchronization", "Traditional attire", "Devotional themes"],
        duration: "1-2 hours",
        significance: "Celebration of feminine grace and energy"
      },
      {
        title: "Pulikali",
        description: "Pulikali, also known as the Tiger Dance, is a vibrant folk art practiced during Onam. Performers paint their bodies with tiger-like stripes and dance to rhythmic beats. The dance symbolizes courage and bravery, reflecting Kerala's cultural heritage.",
        features: ["Tiger body painting", "Energetic movements", "Percussion accompaniment", "Festive celebration"],
        duration: "2-3 hours",
        significance: "Expression of courage and community spirit"
      }
    ],
    events: [
      {
        title: "Onam",
        description: "Onam is Kerala's most celebrated harvest festival marking the legendary homecoming of King Mahabali. The festival spans ten days with colorful activities like boat races, floral arrangements called Pookkalam, traditional dances, and grand feasts (Onam Sadhya). Celebrated with great enthusiasm by all communities.",
        highlights: ["Pookkalam flower carpets", "Snake boat races", "Onam Sadhya feast", "Traditional dances"],
        duration: "10 days",
        time: "August-September"
      },
      {
        title: "Thrissur Pooram",
        description: "Thrissur Pooram is Kerala's grandest temple festival held at Vadakkunnathan Temple. Celebrated in April-May, it features spectacular displays of decorated elephants, lively percussion ensembles, and vibrant Kudamattam ritual. Attracts over a million visitors with its magnificent fireworks display.",
        highlights: ["Decorated elephants", "Percussion ensembles", "Kudamattam ritual", "Fireworks display"],
        duration: "1 day main event",
        time: "April-May"
      },
      {
        title: "Vishu",
        description: "Vishu is Kerala's traditional New Year festival celebrated with hope for prosperity. The highlight is Vishu Kani - an auspicious arrangement seen first thing in the morning. Features Vishu Kaineettam (gifting), grand feast, prayers, and firecrackers.",
        highlights: ["Vishu Kani arrangement", "Vishu Kaineettam", "Traditional feast", "Family gatherings"],
        duration: "1 day",
        time: "April"
      },
      {
        title: "Snake Boat Races",
        description: "Snake Boat Races (Vallam Kali) are traditional boat races held in Kerala's backwaters during Onam season. Featuring Chundan Vallam boats up to 40 meters long with 128 paddlers rowing in unison. Major events include Nehru Trophy and Aranmula races.",
        highlights: ["Chundan Vallam boats", "Synchronized rowing", "Traditional boat songs", "Community participation"],
        duration: "Race day events",
        time: "July-September"
      },
      {
        title: "Attukal Pongala",
        description: "Attukal Pongala is famous for being the largest gathering of women for a religious purpose. Millions cook Pongala sweet dish as offering to goddess Attukalamma. The festival symbolizes feminine power, devotion, and unity across communities.",
        highlights: ["Women's gathering", "Pongala offering", "Community harmony", "Spiritual devotion"],
        duration: "10 days",
        time: "February-March"
      },
      {
        title: "Christmas",
        description: "Christmas in Kerala is celebrated with unique blend of religious and cultural traditions. Homes and churches adorned with stars and lights, midnight Mass, carol singing, and grand feasts featuring appam, stew, and plum cake.",
        highlights: ["Church decorations", "Midnight Mass", "Traditional feast", "Community celebrations"],
        duration: "Christmas week",
        time: "December"
      },
      {
        title: "Makaravilakku",
        description: "Makaravilakku at Sabarimala Ayyappa Temple marks the culmination of 41-day pilgrimage. Famous for the divine Makara Jyothi light and sacred Thiruvabharanam procession. Symbolizes faith and spiritual renewal for millions of devotees.",
        highlights: ["Makara Jyothi", "Pilgrimage completion", "Sacred procession", "Spiritual devotion"],
        duration: "Festival day",
        time: "January"
      }
    ],
    cuisine: [
      {
        title: "Puttu and Kadala Curry",
        description: "Puttu and Kadala Curry is a beloved traditional breakfast in Kerala. Puttu is made by steaming layers of coarsely ground rice flour and grated coconut. Kadala Curry is a spicy, flavorful curry made with black chickpeas cooked in rich blend of spices and coconut.",
        ingredients: ["Rice flour", "Grated coconut", "Black chickpeas", "Kerala spices"],
        serving: "Breakfast",
        taste: "Mild puttu with spicy curry"
      },
      {
        title: "Appam with Stew",
        description: "Appam with Stew is a classic Kerala breakfast loved for its perfect blend. Appam is a soft, lacy pancake from fermented rice batter and coconut milk. The vegetable stew is mildly spiced curry in rich coconut milk base with fragrant spices.",
        ingredients: ["Rice batter", "Coconut milk", "Mixed vegetables", "Mild spices"],
        serving: "Breakfast",
        taste: "Soft appam with creamy stew"
      },
      {
        title: "Karimeen Pollichathu",
        description: "Karimeen Pollichathu is a popular Kerala dish featuring pearl spot fish marinated with spices, wrapped in banana leaves and grilled. The banana leaves infuse unique smoky aroma while keeping the fish tender and flavorful.",
        ingredients: ["Pearl spot fish", "Banana leaves", "Spice blend", "Coconut oil"],
        serving: "Lunch/Dinner",
        taste: "Spicy and aromatic"
      },
      {
        title: "Malabar Parotta with Beef Curry",
        description: "Malabar Parotta with Beef Curry is a beloved Kerala dish from Malabar region. Parotta is flaky, layered flatbread while beef curry is spicy, aromatic preparation with local spices and sometimes coconut milk.",
        ingredients: ["Refined flour", "Beef", "Malabar spices", "Coconut oil"],
        serving: "Lunch/Dinner",
        taste: "Flaky bread with spicy curry"
      },
      {
        title: "Kerala Prawn Curry",
        description: "Kerala Prawn Curry is flavorful, aromatic dish made with fresh prawns in spiced coconut milk gravy. Marinated prawns cooked with traditional spices, tamarind for tanginess, and creamy coconut milk for richness.",
        ingredients: ["Fresh prawns", "Coconut milk", "Tamarind", "Kerala spices"],
        serving: "Lunch/Dinner",
        taste: "Spicy, tangy, and creamy"
      },
      {
        title: "Thalassery Biryani",
        description: "Thalassery Biryani is signature rice dish from Malabar region using Jeerakasala rice with unique aroma. Features mild yet flavorful chicken masala layered and cooked using dum method with cashews and raisins.",
        ingredients: ["Jeerakasala rice", "Chicken", "Malabar spices", "Cashews & raisins"],
        serving: "Lunch/Dinner",
        taste: "Aromatic and flavorful"
      },
      {
        title: "Ada Pradhaman",
        description: "Ada Pradhaman is rich and creamy Kerala dessert made from rice ada, jaggery, and coconut milk. Rice flakes sautéed with nuts, cooked in jaggery syrup and coconut milk, flavored with cardamom.",
        ingredients: ["Rice ada", "Jaggery", "Coconut milk", "Cardamom"],
        serving: "Dessert",
        taste: "Sweet and creamy"
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

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-white border-t border-gray-100">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            Experience Kerala's {experience.title}
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Let our experts craft your perfect journey with authentic local insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/919028803309"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 hover:bg-black text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center"
            >
              <span className="mr-2">💬</span>
              WhatsApp
            </a>
            <a
              href="tel:+919028803309"
              className="border border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center"
            >
              <span className="mr-2">📞</span>
              Call Now
            </a>
          </div>
          <p className="text-gray-500 text-sm mt-6">
            24/7 available for queries
          </p>
        </div>
      </section>
    </div>
  );
};

export default ExperienceDetailPage;