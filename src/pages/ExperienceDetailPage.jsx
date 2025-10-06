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
        description: "Herbal powder massage for detoxification"
      },
      {
        url: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770795/shirodhara_t8shj8.jpg",
        title: "Shirodhara Treatment",
        description: "Continuous oil flow for mental relaxation"
      },
      {
        url: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770795/pizhichil_rba8ox.png",
        title: "Pizhichil Therapy",
        description: "Warm oil bath for body rejuvenation"
      }
    ],
    artforms: [
      {
        url: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770809/theyyam_fnnirr.jpg",
        title: "Theyyam Ritual",
        description: "Ancient ritual dance form"
      },
      {
        url: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770799/Theyyam_txgzaj.png",
        title: "Theyyam Performance",
        description: "Traditional folk art performance"
      },
      {
        url: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770798/Thiruvathirakkali_u12e97.jpg",
        title: "Thiruvathirakkali",
        description: "Graceful circular dance by women"
      },
      {
        url: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770795/Pulikali_pzfhy3.jpg",
        title: "Pulikali Tiger Dance",
        description: "Colorful tiger dance during Onam"
      },
      {
        url: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770793/Koodiyattam-featured-image_bnxlci.png",
        title: "Koodiyattam",
        description: "Ancient Sanskrit theatre tradition"
      },
      {
        url: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770793/Margamkali_au4gup.jpg",
        title: "Margamkali",
        description: "Traditional Syrian Christian dance"
      },
      {
        url: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770791/960px-Ottamthullal_kerala_gskyz1.jpg",
        title: "Ottamthullal",
        description: "Satirical solo dance performance"
      }
    ],
    events: [
      {
        url: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770797/vishu-celebration_pj21b6.png",
        title: "Vishu Celebration",
        description: "Kerala's New Year festival"
      },
      {
        url: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770796/Thrissur_Pooram_e8qjxs.jpg",
        title: "Thrissur Pooram",
        description: "Grand temple festival with elephants"
      },
      {
        url: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770795/Snake_Boat_Races_Vallam_Kali_iko5qt.png",
        title: "Snake Boat Race",
        description: "Traditional boat race competition"
      },
      {
        url: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770795/onam_12_n17zjz.png",
        title: "Onam Festival",
        description: "Harvest festival with flower arrangements"
      },
      {
        url: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770793/Makaravilakku_o763yr.png",
        title: "Makaravilakku",
        description: "Sabrimala temple festival"
      },
      {
        url: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770792/Christmas_k7z16s.jpg",
        title: "Christmas Celebration",
        description: "Festive celebrations in Kerala"
      },
      {
        url: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770791/Attukal_Pongala_bws6he.jpg",
        title: "Attukal Pongala",
        description: "Women's festival in Thiruvananthapuram"
      },
      {
        url: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770791/Karkidaka_Vavu_Bali_ndptqb.png",
        title: "Karkidaka Vavu Bali",
        description: "Ritual offering for ancestors"
      },
      {
        url: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770791/arattu_p3rb8i.png",
        title: "Arattu Procession",
        description: "Holy bath ceremony in temples"
      }
    ],
    cuisine: [
    
      {
        url: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770796/Thalassery_Biryani_m0jz6r.jpg",
        title: "Thalassery Biryani",
        description: "Traditional Malabar biryani"
      },
      {
        url: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770794/pepper-delight-ada-pradhaman-2_wkym90.jpg",
        title: "Ada Pradhaman",
        description: "Sweet payasam with rice flakes"
      },
      {
        url: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770795/Puttu_and_Kadala_Curry_frdnyy.jpg",
        title: "Puttu and Kadala Curry",
        description: "Steamed rice cake with chickpea curry"
      },
      {
        url: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770794/malabar-paratha-165616695016x9_lenh3t.jpg",
        title: "Malabar Paratha",
        description: "Flaky layered flatbread"
      },
      {
        url: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770793/Kappa_and_Meen_Curry_pzbfnx.png",
        title: "Kappa and Meen Curry",
        description: "Tapioca with fish curry"
      },
      {
        url: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770792/idli_nm5o8h.jpg",
        title: "Idli",
        description: "Steamed rice cakes"
      },
      {
        url: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770793/keralan_prawn_curry_45390_16x9_fzqql5.jpg",
        title: "Kerala Prawn Curry",
        description: "Spicy prawn preparation"
      },
      {
        url: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770791/Appam_with_Stew_sl4yr6.png",
        title: "Appam with Stew",
        description: "Lacy rice pancakes with vegetable stew"
      },
      {
        url: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770791/Karimeen_Pollichathu_xvrodi.jpg",
        title: "Karimeen Pollichathu",
        description: "Pearl spot fish in banana leaf"
      }
    ],
    "photo-gallery": [
      {
        url: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770795/Snake_Boat_Races_Vallam_Kali_iko5qt.png",
        title: "Snake Boat Race",
        description: "Traditional boat race on backwaters"
      },
      {
        url: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770796/Thrissur_Pooram_e8qjxs.jpg",
        title: "Thrissur Pooram",
        description: "Grand temple festival spectacle"
      },
      {
        url: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770809/theyyam_fnnirr.jpg",
        title: "Theyyam Ritual",
        description: "Ancient ritual performance"
      },
      {
        url: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770795/onam_12_n17zjz.png",
        title: "Onam Pookalam",
        description: "Colorful flower carpet"
      }
    ],
    "e-brochure": [
      {
        url: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770795/onam_12_n17zjz.png",
        title: "Festival Guide",
        description: "Complete festival calendar and information"
      },
      {
        url: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770796/Thrissur_Pooram_e8qjxs.jpg",
        title: "Cultural Events",
        description: "Detailed event schedules and locations"
      },
      {
        url: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770795/Puttu_and_Kadala_Curry_frdnyy.jpg",
        title: "Culinary Guide",
        description: "Traditional recipes and food tours"
      },
      {
        url: "https://res.cloudinary.com/dl2gcscfa/image/upload/v1759770795/shirodhara_t8shj8.jpg",
        title: "Wellness Directory",
        description: "Ayurvedic centers and treatments"
      }
    ]
  };

  const experiencesData = {
    ayurveda: {
      title: "Ayurveda",
      subtitle: "The Ancient Healing Science",
      heroImage: categoryImages.ayurveda[0].url,
      description: "Experience the ancient healing science of Ayurveda in its birthplace - Kerala, where wellness meets tradition",
      overview: "Ayurveda, the 5,000-year-old natural healing system of India, finds its most authentic expression in Kerala. This ancient science of life focuses on holistic wellness through natural treatments, herbal medicines, and lifestyle practices.",
      images: categoryImages.ayurveda,
      treatments: [
        "Abhyangam - Full body massage with medicated oils",
        "Nasyam - Nasal administration of herbal medicines",
        "Virechanam - Purgation therapy for detoxification",
        "Basti - Medicated enema for cleansing",
        "Raktamoksham - Blood purification therapy"
      ],
      benefits: [
        "Stress relief and mental relaxation",
        "Detoxification and body purification",
        "Improved immunity and vitality",
        "Chronic disease management",
        "Anti-aging and rejuvenation"
      ]
    },
    artforms: {
      title: "Artforms",
      subtitle: "Traditional Arts & Performances",
      heroImage: categoryImages.artforms[0].url,
      description: "Discover Kerala's rich tradition of classical and folk arts that have been preserved for centuries",
      overview: "Kerala's cultural landscape is adorned with diverse art forms ranging from majestic classical dances to vibrant folk arts. Each performance tells a story of tradition, devotion, and artistic excellence.",
      images: categoryImages.artforms,
      highlights: [
        "Kathakali - Elaborate dance drama with vibrant makeup",
        "Theyyam - Ritualistic worship through dance",
        "Mohiniyattam - Graceful dance of the enchantress",
        "Ottamthullal - Satirical solo performance"
      ]
    },
    events: {
      title: "Events & Festivals",
      subtitle: "Cultural Celebrations",
      heroImage: categoryImages.events[0].url,
      description: "Immerse yourself in Kerala's vibrant festivals and cultural events throughout the year",
      overview: "Kerala's festival calendar is packed with colorful celebrations that showcase the state's rich cultural heritage and religious harmony. From temple festivals to harvest celebrations, each event is a spectacle of tradition.",
      images: categoryImages.events,
      highlights: [
        "Thrissur Pooram - Grandest temple festival",
        "Onam - Harvest festival with flower carpets",
        "Vishu - Malayali New Year celebration",
        "Snake Boat Races - Traditional water sport"
      ]
    },
    cuisine: {
      title: "Cuisine",
      subtitle: "Authentic Kerala Flavors",
      heroImage: categoryImages.cuisine[0].url,
      description: "Savor the authentic flavors of Kerala's diverse culinary heritage",
      overview: "Kerala cuisine is a delightful blend of flavors influenced by its geography and history. From spicy seafood to vegetarian delicacies, each dish tells a story of the land and its people.",
      images: categoryImages.cuisine,
      highlights: [
        "Sadya - Traditional vegetarian feast",
        "Seafood specialties - Fresh catch from Arabian Sea",
        "Appam and Stew - Breakfast delicacy",
        "Payasam - Traditional sweet desserts"
      ]
    },
    "photo-gallery": {
      title: "Photo Gallery",
      subtitle: "Visual Journey Through Kerala",
      heroImage: categoryImages["photo-gallery"][0].url,
      description: "Capture the breathtaking beauty of Kerala through stunning photography",
      overview: "Kerala's diverse landscapes, vibrant culture, and rich traditions provide endless opportunities for photography. From misty hills to serene backwaters, every frame tells a story.",
      images: categoryImages["photo-gallery"],
      highlights: [
        "Backwaters and houseboats",
        "Tea plantations in Munnar",
        "Traditional art forms",
        "Festivals and celebrations"
      ]
    },
    "e-brochure": {
      title: "E-brochure",
      subtitle: "Digital Travel Companion",
      heroImage: categoryImages["e-brochure"][0].url,
      description: "Access comprehensive digital guides for your perfect Kerala journey",
      overview: "Our digital brochures provide everything you need to plan your Kerala adventure - from detailed itineraries to cultural insights and practical travel information.",
      images: categoryImages["e-brochure"],
      highlights: [
        "Interactive travel guides",
        "Seasonal event calendars",
        "Accommodation recommendations",
        "Transportation information"
      ]
    }
  };

  const experience = experiencesData[experienceId];

  if (!experience) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Experience Not Found</h1>
          <button
            onClick={() => navigate("/experiences")}
            className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition"
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
      <section className="relative h-96 bg-gradient-to-r from-emerald-900 to-teal-800">
        <div className="absolute inset-0">
          <img
            src={experience.heroImage}
            alt={experience.title}
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <button
              onClick={() => navigate("/experiences")}
              className="flex items-center text-emerald-200 hover:text-white mb-6 transition"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Experiences
            </button>
            <h1 className="text-5xl font-bold mb-4">{experience.title}</h1>
            <p className="text-xl text-emerald-100 mb-2">{experience.subtitle}</p>
            <p className="text-lg text-emerald-50 max-w-2xl">{experience.description}</p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">About {experience.title}</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {experience.overview}
              </p>
              {experience.highlights && (
                <div className="bg-emerald-50 rounded-lg p-6">
                  <h3 className="font-semibold text-emerald-800 mb-3">Key Highlights</h3>
                  <ul className="space-y-2">
                    {experience.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-emerald-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="grid grid-cols-2 gap-4">
              {experience.images.slice(0, 2).map((image, index) => (
                <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-800 mb-1">{image.title}</h4>
                    <p className="text-sm text-gray-600">{image.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Explore {experience.title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {experience.images.map((image, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">{image.title}</h3>
                  <p className="text-sm text-gray-600">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Content Sections */}
      {experienceId === 'ayurveda' && (
        <>
          <section className="py-16 bg-emerald-50">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Popular Ayurvedic Treatments</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {experience.treatments.map((treatment, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                      <span className="text-emerald-600 text-lg">🌿</span>
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2">{treatment}</h3>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Health Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {experience.benefits.map((benefit, index) => (
                  <div key={index} className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl">✓</span>
                    </div>
                    <h3 className="font-semibold text-gray-800">{benefit}</h3>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Experience Authentic Kerala {experience.title}
          </h2>
          <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
            Let us help you plan your perfect Kerala experience with authentic local insights and personalized service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919028803309"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition duration-200 flex items-center justify-center"
            >
              💬 Chat on WhatsApp
            </a>
            <a
              href="tel:+919028803309"
              className="bg-white hover:bg-gray-100 text-emerald-600 px-8 py-4 rounded-lg font-semibold transition duration-200 flex items-center justify-center"
            >
              📞 Call for Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExperienceDetailPage;