import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const ExperienceDetailPage = () => {
  const { experienceId } = useParams();
  const navigate = useNavigate();

  const experiencesData = {
    ayurveda: {
      title: "Ayurveda",
      img: "https://www.keralatourism.org/_next/image/?url=http%3A%2F%2F127.0.0.1%2Fktadmin%2Fimg%2Fpages%2Flarge-desktop%2Fayurveda-1694598240_fe440a50c0f7683f980c.jpg&w=1920&q=75",
      description: "Experience the ancient healing science of Ayurveda in its birthplace",
      highlights: [
        "Traditional Panchakarma treatments",
        "Authentic Ayurvedic massages",
        "Yoga and meditation sessions",
        "Herbal medicine consultations",
        "Detoxification and rejuvenation programs"
      ],
      bestTime: [
        { period: "September - March", season: "Peak" },
        { period: "April - June", season: "Good" },
        { period: "July - August", season: "Moderate" }
      ],
      locations: [
        { name: "Kottakkal", description: "Renowned Ayurvedic treatment center" },
        { name: "Varkala", description: "Cliffside wellness retreats" },
        { name: "Wayanad", description: "Nature-integrated healing centers" }
      ]
    },
    events: {
      title: "Events",
      img: "https://www.keralatourism.org/_next/image/?url=http%3A%2F%2F127.0.0.1%2Fktadmin%2Fimg%2Fpages%2Fvertical%2Fevents-1723010610_81f769d481fd9baa79ac.webp&w=1920&q=75",
      description: "Immerse yourself in Kerala's vibrant festivals and cultural events",
      highlights: [
        "Traditional temple festivals",
        "Cultural performances and shows",
        "Local fairs and markets",
        "Seasonal celebrations",
        "Art and craft exhibitions"
      ],
      bestTime: [
        { period: "October - April", season: "Peak" },
        { period: "May - September", season: "Good" }
      ],
      locations: [
        { name: "Thrissur", description: "Famous for Pooram festival" },
        { name: "Kochi", description: "Cultural events and art shows" },
        { name: "Kozhikode", description: "Traditional local festivals" }
      ]
    },
    artforms: {
      title: "Artforms",
      img: "https://www.keralatourism.org/_next/image/?url=http%3A%2F%2F127.0.0.1%2Fktadmin%2Fimg%2Fpages%2Fvertical%2Fartforms-1722941328_979aba0cca7b5b49c626.webp&w=1920&q=75",
      description: "Discover Kerala's rich tradition of classical and folk arts",
      highlights: [
        "Kathakali dance performances",
        "Theyyam ritual arts",
        "Traditional music concerts",
        "Handicraft demonstrations",
        "Folk art workshops"
      ],
      bestTime: [
        { period: "October - March", season: "Peak" },
        { period: "April - September", season: "Good" }
      ],
      locations: [
        { name: "Kochi", description: "Cultural center with regular performances" },
        { name: "Thrissur", description: "Hub of traditional arts" },
        { name: "Kollam", description: "Folk art traditions" }
      ]
    },
    "photo-gallery": {
      title: "Photo Gallery",
      img: "https://www.keralatourism.org/_next/image/?url=http%3A%2F%2F127.0.0.1%2Fktadmin%2Fimg%2Fpages%2Fvertical%2Fphoto-gallery-1722942212_09b95872a144f6bc331f.webp&w=1920&q=75",
      description: "Capture the breathtaking beauty of Kerala through your lens",
      highlights: [
        "Stunning landscape photography",
        "Cultural moment captures",
        "Wildlife photography spots",
        "Architectural photography",
        "Sunset and sunrise locations"
      ],
      bestTime: [
        { period: "October - March", season: "Peak" },
        { period: "April - June", season: "Good" },
        { period: "July - September", season: "Moderate" }
      ],
      locations: [
        { name: "Munnar", description: "Tea gardens and misty mountains" },
        { name: "Alleppey", description: "Backwaters and houseboats" },
        { name: "Kovalam", description: "Beaches and lighthouse views" }
      ]
    },
    cuisine: {
      title: "Cuisine",
      img: "https://www.keralatourism.org/_next/image/?url=http%3A%2F%2F127.0.0.1%2Fktadmin%2Fimg%2Fpages%2Fvertical%2Fcuisine-1722941699_b85794f02a319683eb69.webp&w=1920&q=75",
      description: "Savor the authentic flavors of Kerala's diverse culinary heritage",
      highlights: [
        "Traditional Sadya feast",
        "Seafood cooking classes",
        "Spice plantation tours",
        "Local market food walks",
        "Traditional cooking demonstrations"
      ],
      bestTime: [
        { period: "September - March", season: "Peak" },
        { period: "April - August", season: "Good" }
      ],
      locations: [
        { name: "Kochi", description: "Multi-cuisine food capital" },
        { name: "Kozhikode", description: "Famous for Malabar cuisine" },
        { name: "Alleppey", description: "Fresh seafood specialties" }
      ]
    },
    "e-brochure": {
      title: "E-brochure",
      img: "https://www.keralatourism.org/_next/image/?url=http%3A%2F%2F127.0.0.1%2Fktadmin%2Fimg%2Fpages%2Flarge-desktop%2Fe-brochure-1694599797_526286c75b4c39a4fe13.jpg&w=1920&q=75",
      description: "Access comprehensive digital guides for your Kerala journey",
      highlights: [
        "Digital travel guides",
        "Interactive maps and routes",
        "Seasonal event calendars",
        "Accommodation listings",
        "Transportation information"
      ],
      bestTime: [
        { period: "Year-round", season: "Available" }
      ],
      locations: [
        { name: "Online Access", description: "Available digitally anytime" },
        { name: "Tourist Centers", description: "Physical copies available" },
        { name: "Mobile App", description: "Downloadable content" }
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
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Back to Experiences
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Back Button */}
        <button
          onClick={() => navigate("/experiences")}
          className="flex items-center text-blue-600 hover:text-blue-800 mb-6 transition duration-200"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Experiences
        </button>

        {/* Experience Header */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <img
            src={experience.img}
            alt={experience.title}
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="p-6 md:p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {experience.title}
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              {experience.description}
            </p>
          </div>
        </div>

        {/* Experience Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Highlights */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Highlights</h2>
            <ul className="space-y-3">
              {experience.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Best Time to Visit */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Best Time to Visit</h2>
            <div className="space-y-4">
              {experience.bestTime.map((time, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-gray-700 font-medium">{time.period}</span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    time.season === 'Peak' 
                      ? 'bg-green-100 text-green-800'
                      : time.season === 'Good'
                      ? 'bg-blue-100 text-blue-800'
                      : time.season === 'Available'
                      ? 'bg-purple-100 text-purple-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {time.season}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Popular Locations */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:col-span-2">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Popular Locations</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {experience.locations.map((location, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition duration-200">
                  <h3 className="font-semibold text-gray-800 mb-2">{location.name}</h3>
                  <p className="text-sm text-gray-600">{location.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center mt-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Experience {experience.title}?
          </h2>
          <p className="text-blue-100 mb-6 text-lg">
            Contact us to plan your perfect Kerala {experience.title.toLowerCase()} experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919028803309"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition duration-200"
            >
              💬 WhatsApp Us
            </a>
            <a
              href="tel:+919028803309"
              className="bg-white hover:bg-gray-100 text-blue-600 px-6 py-3 rounded-xl font-semibold transition duration-200"
            >
              📞 Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceDetailPage;