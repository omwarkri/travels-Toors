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
        title: "Udvartana Massage",
        description: "Herbal powder massage for detoxification and rejuvenation"
      },
      {
        url: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770795/shirodhara_t8shj8.jpg",
        title: "Shirodhara Treatment",
        description: "Continuous oil flow therapy for deep mental relaxation"
      },
      {
        url: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770795/pizhichil_rba8ox.png",
        title: "Pizhichil Therapy",
        description: "Royal treatment with warm oil bath for complete body rejuvenation"
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
      },
      {
        url: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770791/Karkidaka_Vavu_Bali_ndptqb.png",
        title: "Karkidaka Vavu Bali",
        description: "Ritual offerings for ancestors at beaches"
      },
      {
        url: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770791/arattu_p3rb8i.png",
        title: "Arattu Procession",
        description: "Holy bath ceremony in ancient temples"
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
        title: "Idli",
        description: "Soft steamed rice cakes with chutney"
      },
      {
        url: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770793/keralan_prawn_curry_45390_16x9_fzqql5.jpg",
        title: "Kerala Prawn Curry",
        description: "Spicy prawn preparation in coconut gravy"
      },
      {
        url: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770791/Appam_with_Stew_sl4yr6.png",
        title: "Appam with Stew",
        description: "Lacy rice pancakes with vegetable stew"
      },
      {
        url: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770791/Karimeen_Pollichathu_xvrodi.jpg",
        title: "Karimeen Pollichathu",
        description: "Pearl spot fish marinated and grilled in banana leaf"
      }
    ],
    "photo-gallery": [
      {
        url: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770795/Snake_Boat_Races_Vallam_Kali_iko5qt.png",
        title: "Snake Boat Race",
        description: "Traditional boat race on serene backwaters"
      },
      {
        url: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770796/Thrissur_Pooram_e8qjxs.jpg",
        title: "Thrissur Pooram",
        description: "Grand temple festival spectacle"
      },
      {
        url: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770809/theyyam_fnnirr.jpg",
        title: "Theyyam Ritual",
        description: "Ancient ritual performance in vibrant colors"
      },
      {
        url: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770795/onam_12_n17zjz.png",
        title: "Onam Pookalam",
        description: "Colorful flower carpet artistry"
      }
    ],
    "e-brochure": [
      {
        url: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770795/onam_12_n17zjz.png",
        title: "Festival Guide",
        description: "Complete festival calendar with dates and locations"
      },
      {
        url: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770796/Thrissur_Pooram_e8qjxs.jpg",
        title: "Cultural Events",
        description: "Detailed event schedules and cultural insights"
      },
      {
        url: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770795/Puttu_and_Kadala_Curry_frdnyy.jpg",
        title: "Culinary Guide",
        description: "Traditional recipes and food tour recommendations"
      },
      {
        url: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770795/shirodhara_t8shj8.jpg",
        title: "Wellness Directory",
        description: "Authentic Ayurvedic centers and treatment options"
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
      treatments: [
        "Abhyangam - Full body massage with medicated oils",
        "Nasyam - Nasal administration of herbal medicines",
        "Virechanam - Purgation therapy for detoxification",
        "Basti - Medicated enema for internal cleansing",
        "Raktamoksham - Blood purification therapy"
      ],
      benefits: [
        "Stress relief and mental relaxation",
        "Complete body detoxification",
        "Improved immunity and vitality",
        "Chronic disease management",
        "Anti-aging and rejuvenation"
      ],
      duration: "7-21 days recommended for optimal results",
      bestTime: "Monsoon season (June-August) for maximum benefits"
    },
    artforms: {
      title: "Artforms",
      subtitle: "Traditional Arts & Cultural Performances",
      heroImage: categoryImages.artforms[0].url,
      description: "Discover Kerala's rich tradition of classical and folk arts preserved through centuries of cultural heritage",
      overview: "Kerala's cultural landscape is adorned with diverse art forms ranging from majestic classical dances to vibrant folk arts. Each performance tells a story of tradition, devotion, and artistic excellence that has been passed down through generations.",
      images: categoryImages.artforms,
      highlights: [
        "Kathakali - Elaborate dance drama with vibrant makeup and costumes",
        "Theyyam - Ritualistic worship through divine dance forms",
        "Mohiniyattam - Graceful dance of the enchantress",
        "Ottamthullal - Satirical solo performance with social commentary"
      ],
      venues: [
        "Kerala Kalamandalam - Premier institution for arts",
        "Temple festivals and cultural centers",
        "Traditional kalaris and performance spaces"
      ]
    },
    events: {
      title: "Events & Festivals",
      subtitle: "Cultural Celebrations Through the Year",
      heroImage: categoryImages.events[0].url,
      description: "Immerse yourself in Kerala's vibrant festivals and cultural events that showcase the state's rich heritage",
      overview: "Kerala's festival calendar is packed with colorful celebrations that showcase the state's rich cultural heritage and religious harmony. From grand temple festivals to harvest celebrations, each event is a spectacular display of tradition, music, and community spirit.",
      images: categoryImages.events,
      highlights: [
        "Thrissur Pooram - The grandest temple festival with elephant procession",
        "Onam - Harvest festival with flower carpets and traditional feast",
        "Vishu - Malayali New Year celebration with Vishukkani",
        "Snake Boat Races - Traditional water sport competition"
      ],
      calendar: "Year-round celebrations with peak season from September to March"
    },
    cuisine: {
      title: "Cuisine",
      subtitle: "Authentic Kerala Flavors & Culinary Heritage",
      heroImage: categoryImages.cuisine[0].url,
      description: "Savor the authentic flavors of Kerala's diverse culinary heritage influenced by its geography and history",
      overview: "Kerala cuisine is a delightful blend of flavors influenced by its coastal geography, spice trade history, and cultural diversity. From spicy seafood to vegetarian delicacies, each dish tells a story of the land and its people, using fresh local ingredients and traditional cooking methods.",
      images: categoryImages.cuisine,
      highlights: [
        "Sadya - Traditional vegetarian feast served on banana leaf",
        "Seafood specialties - Fresh catch from Arabian Sea",
        "Appam and Stew - Breakfast delicacy loved by all",
        "Payasam - Traditional sweet desserts for celebrations"
      ],
      specialties: [
        "Use of coconut in various forms",
        "Distinct Malabar Muslim cuisine",
        "Syrian Christian culinary traditions",
        "Traditional vegetarian Brahmin recipes"
      ]
    },
    "photo-gallery": {
      title: "Photo Gallery",
      subtitle: "Visual Journey Through God's Own Country",
      heroImage: categoryImages["photo-gallery"][0].url,
      description: "Capture the breathtaking beauty of Kerala through stunning photography that tells a thousand stories",
      overview: "Kerala's diverse landscapes, vibrant culture, and rich traditions provide endless opportunities for photography. From misty hills to serene backwaters, ancient temples to modern cities, every frame captures the essence of this beautiful state.",
      images: categoryImages["photo-gallery"],
      highlights: [
        "Backwaters and traditional houseboats",
        "Tea plantations in misty Munnar hills",
        "Traditional art forms and performances",
        "Festivals and cultural celebrations"
      ],
      bestSpots: [
        "Alleppey backwaters at sunrise",
        "Munnar tea gardens",
        "Fort Kochi heritage sites",
        "Theyyam performances in temples"
      ]
    },
    "e-brochure": {
      title: "E-brochure",
      subtitle: "Your Digital Travel Companion",
      heroImage: categoryImages["e-brochure"][0].url,
      description: "Access comprehensive digital guides for your perfect Kerala journey with detailed information and insights",
      overview: "Our digital brochures provide everything you need to plan your Kerala adventure - from detailed itineraries to cultural insights and practical travel information. These carefully curated guides help you make the most of your visit to God's Own Country.",
      images: categoryImages["e-brochure"],
      highlights: [
        "Interactive travel guides with maps",
        "Seasonal event calendars and festivals",
        "Accommodation and dining recommendations",
        "Transportation and local travel tips"
      ],
      features: [
        "Downloadable PDF formats",
        "Mobile-friendly digital versions",
        "Regular updates and new editions",
        "Expert-curated content"
      ]
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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
  
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-900 via-teal-800 to-blue-900 overflow-hidden">
        <div className="pt-20 pb-16"> {/* Added padding instead of fixed height */}
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
                onClick={() => navigate("/experiences")}
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
              
              {experience.highlights && (
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-100">
                  <h3 className="font-semibold text-emerald-800 mb-4 text-lg flex items-center">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                    Key Highlights
                  </h3>
                  <ul className="space-y-3">
                    {experience.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start group">
                        <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:bg-emerald-600 transition-colors"></span>
                        <span className="text-emerald-700 group-hover:text-emerald-900 transition-colors">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Additional Info */}
              {(experience.duration || experience.bestTime || experience.venues) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {experience.duration && (
                    <div className="bg-gray-50 rounded-xl p-4">
                      <h4 className="font-semibold text-gray-800 mb-1">Recommended Duration</h4>
                      <p className="text-gray-600 text-sm">{experience.duration}</p>
                    </div>
                  )}
                  {experience.bestTime && (
                    <div className="bg-gray-50 rounded-xl p-4">
                      <h4 className="font-semibold text-gray-800 mb-1">Best Time</h4>
                      <p className="text-gray-600 text-sm">{experience.bestTime}</p>
                    </div>
                  )}
                </div>
              )}
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

      {/* Image Gallery Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">
              Discover {experience.title}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore the vibrant visuals that capture the essence of this unique Kerala experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {experience.images.map((image, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-emerald-700 transition-colors">
                    {image.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {image.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Content Sections */}
      {experienceId === 'ayurveda' && (
        <>
          {/* Treatments Section */}
       <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white">
  <div className="max-w-6xl mx-auto px-4">
    <div className="text-center mb-10 md:mb-12">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Ayurvedic Treatments</h2>
      <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
        Experience authentic healing therapies rooted in 5,000 years of traditional wisdom
      </p>
    </div>
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {experience.treatments.map((treatment, index) => (
        <div key={index} className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-sm hover:shadow-lg transition-all duration-300 group border border-gray-100">
          <div className="flex flex-col items-center text-center">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg md:rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-md">
              <span className="text-white text-sm md:text-lg">🌿</span>
            </div>
            <h3 className="font-semibold text-gray-800 group-hover:text-emerald-600 transition-colors text-xs md:text-base mb-2 leading-tight">
              {treatment.split(' - ')[0]}
            </h3>
            <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
              {treatment.split(' - ')[1]}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

          {/* Benefits Section */}
         <section className="py-8 md:py-16 bg-gradient-to-br from-amber-50 to-orange-50">
  <div className="max-w-6xl mx-auto px-4">
    <div className="text-center mb-6 md:mb-12">
      <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-2 md:mb-3">Health Benefits</h2>
      <p className="text-sm md:text-base text-gray-600 max-w-md mx-auto">
        Transform your wellbeing with time-tested Ayurvedic wisdom
      </p>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-6">
      {experience.benefits.map((benefit, index) => (
        <div key={index} className="bg-white rounded-lg p-3 md:p-4 shadow-sm hover:shadow-md transition-all duration-300 group">
          <div className="flex items-center space-x-2 md:space-x-3">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
              <span className="text-white text-xs md:text-sm">✓</span>
            </div>
            <h3 className="font-semibold text-gray-800 group-hover:text-amber-600 transition-colors text-xs md:text-sm leading-tight flex-1">
              {benefit}
            </h3>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
        </>
      )}

      {/* Specialized Sections for Other Categories */}
      {(experienceId === 'artforms' || experienceId === 'events' || experienceId === 'cuisine') && experience.specialties && (
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-3">Unique Features</h2>
              <p className="text-gray-600">What makes this experience truly special</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {experience.specialties.map((specialty, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 transition-colors">
                    <span className="text-emerald-600 text-xl">⭐</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 text-sm">{specialty}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

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