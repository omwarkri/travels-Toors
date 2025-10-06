import React from "react";
import { useNavigate } from "react-router-dom";

const KeralaExperiences = () => {
  const navigate = useNavigate();

  const experiences = [
    {
      id: "ayurveda",
      title: "Ayurveda",
      img: "https://www.keralatourism.org/_next/image/?url=http%3A%2F%2F127.0.0.1%2Fktadmin%2Fimg%2Fpages%2Flarge-desktop%2Fayurveda-1694598240_fe440a50c0f7683f980c.jpg&w=1920&q=75",
      description: "Traditional healing and wellness treatments"
    },
    {
      id: "events",
      title: "Events",
      img: "https://www.keralatourism.org/_next/image/?url=http%3A%2F%2F127.0.0.1%2Fktadmin%2Fimg%2Fpages%2Fvertical%2Fevents-1723010610_81f769d481fd9baa79ac.webp&w=1920&q=75",
      description: "Cultural festivals and celebrations"
    },
    {
      id: "artforms",
      title: "Artforms",
      img: "https://www.keralatourism.org/_next/image/?url=http%3A%2F%2F127.0.0.1%2Fktadmin%2Fimg%2Fpages%2Fvertical%2Fartforms-1722941328_979aba0cca7b5b49c626.webp&w=1920&q=75",
      description: "Traditional arts and performances"
    },
    {
      id: "photo-gallery",
      title: "Photo Gallery",
      img: "https://www.keralatourism.org/_next/image/?url=http%3A%2F%2F127.0.0.1%2Fktadmin%2Fimg%2Fpages%2Fvertical%2Fphoto-gallery-1722942212_09b95872a144f6bc331f.webp&w=1920&q=75",
      description: "Visual journey through Kerala"
    },
    {
      id: "cuisine",
      title: "Cuisine",
      img: "https://www.keralatourism.org/_next/image/?url=http%3A%2F%2F127.0.0.1%2Fktadmin%2Fimg%2Fpages%2Fvertical%2Fcuisine-1722941699_b85794f02a319683eb69.webp&w=1920&q=75",
      description: "Authentic Kerala culinary delights"
    },
    {
      id: "e-brochure",
      title: "E-brochure",
      img: "https://www.keralatourism.org/_next/image/?url=http%3A%2F%2F127.0.0.1%2Fktadmin%2Fimg%2Fpages%2Flarge-desktop%2Fe-brochure-1694599797_526286c75b4c39a4fe13.jpg&w=1920&q=75",
      description: "Digital travel guides and information"
    },
  ];

  const handleExploreClick = (experienceId) => {
    navigate(`/experiences/${experienceId}`);
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-6 md:py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Kerala Experiences
        </h2>
        <p className="text-gray-600">
          Discover the diverse experiences that make Kerala truly unique
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {/* Left Section - Big image on top, two small images below */}
        <div className="space-y-3">
          {/* Big image */}
          <div className="relative group overflow-hidden shadow-md hover:shadow-xl transition duration-300">
            <img
              src={experiences[0].img}
              alt={experiences[0].title}
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-5">
              <h3 className="text-white text-xl font-semibold mb-2">
                {experiences[0].title}
              </h3>
              <button
                onClick={() => handleExploreClick(experiences[0].id)}
                className="inline-flex text-white px-4 py-1 rounded-full text-sm border border-white hover:bg-white hover:text-black transition w-fit"
              >
                Explore →
              </button>
            </div>
          </div>
          
          {/* Two small images below */}
          <div className="grid grid-cols-2 gap-3">
            {experiences.slice(1, 3).map((item, index) => (
              <div
                key={index}
                className="relative group overflow-hidden shadow-md hover:shadow-xl transition duration-300"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-4">
                  <h3 className="text-white text-lg font-semibold mb-2">
                    {item.title}
                  </h3>
                  <button
                    onClick={() => handleExploreClick(item.id)}
                    className="inline-flex bg-white/20 text-white px-3 py-1 rounded-full text-xs border border-white hover:bg-white hover:text-black transition w-fit"
                  >
                    Explore →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Two small images on top, one big image below */}
        <div className="space-y-3">
          {/* Two small images on top */}
          <div className="grid grid-cols-2 gap-3">
            {experiences.slice(3, 5).map((item, index) => (
              <div
                key={index}
                className="relative group overflow-hidden shadow-md hover:shadow-xl transition duration-300"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-4">
                  <h3 className="text-white text-lg font-semibold mb-2">
                    {item.title}
                  </h3>
                  <button
                    onClick={() => handleExploreClick(item.id)}
                    className="inline-flex bg-white/20 text-white px-3 py-1 rounded-full text-xs border border-white hover:bg-white hover:text-black transition w-fit"
                  >
                    Explore →
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Big image at bottom */}
          <div className="relative group overflow-hidden shadow-md hover:shadow-xl transition duration-300">
            <img
              src={experiences[5].img}
              alt={experiences[5].title}
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-5">
              <h3 className="text-white text-xl font-semibold mb-2">
                {experiences[5].title}
              </h3>
              <button
                onClick={() => handleExploreClick(experiences[5].id)}
                className="inline-flex bg-white/20 text-white px-4 py-1 rounded-full text-sm border border-white hover:bg-white hover:text-black transition w-fit"
              >
                Explore →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeralaExperiences;