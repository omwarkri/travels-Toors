import React from "react";
import { useParams } from 'react-router-dom';
import SEOHead from '../common/SEOHead';

const SinglePackagePage = () => {
  const { packageId } = useParams();
  
  const allPackages = {
    "kerala-bliss-experience": {
      id: "kerala-bliss-experience",
      name: "Kerala Bliss Experience",
      duration: "06 Nights / 07 Days",
      destination: "Kochi, Munnar, Alleppey",
      bestSeason: "Sep - Mar",
      price: "24,999",
      originalPrice: "29,999",
      discount: "Special 15% Off",
      rating: "4.8",
      reviews: "124",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      highlights: [
        "Airport pickup with traditional welcome",
        "Luxury AC vehicle throughout the tour",
        "Premium houseboat cruise in Alleppey",
        "Tea estate stay in Munnar",
        "24/7 Omkar travel support",
        "Traditional Kathakali dance performance",
        "Spice plantation visit"
      ],
      itinerary: [
        {
          day: "Day 1",
          title: "Arrival in Kochi",
          description: "Arrive at Cochin International Airport, traditional welcome and transfer to hotel. Evening visit to Fort Kochi and Chinese fishing nets."
        },
        {
          day: "Day 2",
          title: "Kochi to Munnar",
          description: "Scenic drive to Munnar through tea plantations. Visit tea museum and enjoy panoramic views of Western Ghats."
        },
        {
          day: "Day 3",
          title: "Munnar Exploration",
          description: "Full day exploring Munnar - Echo Point, Mattupetty Dam, and tea gardens. Evening at leisure."
        }
      ],
      inclusions: [
        "Accommodation in 3-star hotels",
        "Daily breakfast and dinner",
        "AC vehicle for all transfers & sightseeing",
        "Alleppey houseboat cruise with meals",
        "All toll taxes, parking & driver allowances",
        "Tour guide services"
      ],
      exclusions: [
        "Flight tickets",
        "Lunch except on houseboat",
        "Personal expenses",
        "Travel insurance",
        "Anything not mentioned in inclusions"
      ]
    },
    "maharastra-bliss-experience": {
      id: "maharastra-bliss-experience",
      name: "Maharashtra Bliss Experience",
      duration: "06 Nights / 07 Days",
      destination: "Mumbai, Pune, Mahabaleshwar",
      bestSeason: "Oct - Feb",
      price: "30,999",
      originalPrice: "36,499",
      discount: "Special 15% Off",
      rating: "4.8",
      reviews: "124",
      image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1200&q=80",
      highlights: [
        "City tour of Mumbai including Gateway of India",
        "Hill station experience in Mahabaleshwar",
        "Wine tasting in Nashik vineyards",
        "Historical sites in Pune",
        "24/7 Omkar travel support"
      ],
      itinerary: [
        {
          day: "Day 1",
          title: "Arrival in Mumbai",
          description: "Arrive at Mumbai airport, transfer to hotel. Evening visit to Marine Drive and Juhu Beach."
        },
        {
          day: "Day 2",
          title: "Mumbai City Tour",
          description: "Full day exploring Mumbai - Gateway of India, Elephanta Caves, and shopping at Colaba Causeway."
        }
      ],
      inclusions: [
        "Accommodation in 3-star hotels",
        "Daily breakfast",
        "AC vehicle for all transfers & sightseeing",
        "All sightseeing as per itinerary",
        "All toll taxes, parking & driver allowances"
      ],
      exclusions: [
        "Flight tickets",
        "Lunch and dinner",
        "Personal expenses",
        "Travel insurance"
      ]
    }
  };

  // Sample Customer Reviews
  const customerReviews = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Delhi",
      rating: 5,
      date: "2 weeks ago",
      comment: "Amazing experience! The houseboat stay in Alleppey was magical. Omkar Tours took care of everything perfectly. Special thanks to our guide Raj for his excellent service.",
      avatar: "👩"
    },
    {
      id: 2,
      name: "Rahul Verma",
      location: "Mumbai",
      rating: 4.5,
      date: "1 month ago",
      comment: "Great value for money. The tea plantation visit in Munnar was breathtaking. Accommodations were comfortable and the entire trip was well-organized.",
      avatar: "👨"
    },
    {
      id: 3,
      name: "Anita Patel",
      location: "Ahmedabad",
      rating: 5,
      date: "3 weeks ago",
      comment: "Perfect family vacation! Kids loved the Kathakali dance performance. The driver was very professional and knowledgeable. Will definitely book again!",
      avatar: "👩"
    },
    {
      id: 4,
      name: "Sanjay Kumar",
      location: "Bangalore",
      rating: 4.8,
      date: "2 months ago",
      comment: "Smooth booking process and excellent customer support. The spice plantation tour was very informative. Highly recommended for first-time Kerala visitors.",
      avatar: "👨"
    }
  ];

  const pkg = allPackages[packageId] || allPackages["kerala-bliss-experience"];

  // Star rating component
  const StarRating = ({ rating }) => {
    return (
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`text-lg ${
              star <= rating ? 'text-yellow-400' : 'text-gray-300'
            }`}
          >
            ★
          </span>
        ))}
        <span className="text-sm text-gray-600 ml-1">{rating.toFixed(1)}</span>
      </div>
    );
  };

  return (
    <div className="pt-16 sm:pt-20 mt-3 pb-3 bg-black">
      <SEOHead 
        title={`${pkg.name} | ${pkg.duration} | Omkar Tour and Travels`}
        description={`Book ${pkg.name} - ${pkg.duration} starting at ₹${pkg.price}. Includes ${pkg.highlights.slice(0, 3).join(', ')}`}
        keywords={`${pkg.destination}, Kerala tour packages, ${pkg.name}, ${pkg.duration}`}
        canonical={`https://omkartourskerala.com/package/${pkg.id}`}
      />
      
      {/* Package Header */}
      <section className="relative h-64 sm:h-80 md:h-96 bg-gray-900">
        <img
          src={pkg.image}
          alt={`${pkg.name} - ${pkg.destination}`}
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
              <span className="bg-emerald-500 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">🏆 Omkar Exclusive</span>
              <span className="bg-red-500 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">{pkg.discount}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">{pkg.name}</h1>
            <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-2 sm:gap-4 text-sm sm:text-lg">
              <span className="flex items-center">📍 {pkg.destination}</span>
              <span className="flex items-center">⏱️ {pkg.duration}</span>
              <span className="flex items-center">⭐ {pkg.rating} ({pkg.reviews} reviews)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Package Details */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            {/* Highlights */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 md:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Tour Highlights</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {pkg.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700 text-sm sm:text-base">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Itinerary */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 md:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Detailed Itinerary</h2>
              <div className="space-y-4 sm:space-y-6">
                {pkg.itinerary.map((day, index) => (
                  <div key={index} className="flex space-x-3 sm:space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                      <span className="text-emerald-600 font-bold text-sm sm:text-base">{day.day}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">{day.title}</h3>
                      <p className="text-gray-600 text-sm sm:text-base">{day.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Customer Reviews */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 md:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Customer Reviews</h2>
              <div className="space-y-6">
                {customerReviews.map((review) => (
                  <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-emerald-100 rounded-full flex items-center justify-center text-lg sm:text-xl">
                        {review.avatar}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <div>
                            <h3 className="font-semibold text-gray-800">{review.name}</h3>
                            <p className="text-gray-500 text-sm">{review.location} • {review.date}</p>
                          </div>
                          <StarRating rating={review.rating} />
                        </div>
                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{review.comment}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Overall Rating Summary */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-800">Overall Rating</h3>
                    <p className="text-gray-600 text-sm">Based on {pkg.reviews} reviews</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-emerald-600">{pkg.rating}</div>
                    <StarRating rating={parseFloat(pkg.rating)} />
                  </div>
                </div>
              </div>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 md:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">What's Included</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-emerald-600 mb-3 sm:mb-4">✅ Includes</h3>
                  <ul className="space-y-2 sm:space-y-3">
                    {pkg.inclusions.map((item, index) => (
                      <li key={index} className="flex items-start space-x-2 text-sm sm:text-base text-gray-700">
                        <span className="text-emerald-500 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-3 sm:mb-4">❌ Excludes</h3>
                  <ul className="space-y-2 sm:space-y-3">
                    {pkg.exclusions.map((item, index) => (
                      <li key={index} className="flex items-start space-x-2 text-sm sm:text-base text-gray-700">
                        <span className="text-red-500 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 sm:top-24 bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 border border-gray-200">
              <div className="text-center mb-4 sm:mb-6">
                <div className="text-2xl sm:text-3xl font-bold text-gray-800">₹{pkg.price}</div>
                <div className="text-xs sm:text-sm text-gray-500 line-through">₹{pkg.originalPrice}</div>
                <div className="text-emerald-600 font-semibold mt-1 text-sm sm:text-base">{pkg.discount}</div>
                <div className="text-xs sm:text-sm text-gray-500 mt-2">per person</div>
              </div>

              <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                <div className="flex justify-between text-xs sm:text-sm">
                  <span>Duration</span>
                  <span className="font-semibold">{pkg.duration}</span>
                </div>
                <div className="flex justify-between text-xs sm:text-sm">
                  <span>Best Season</span>
                  <span className="font-semibold">{pkg.bestSeason}</span>
                </div>
                <div className="flex justify-between text-xs sm:text-sm">
                  <span>Rating</span>
                  <span className="font-semibold">{pkg.rating} ⭐ ({pkg.reviews})</span>
                </div>
              </div>

              <div className="space-y-3">
                <a
                  href="https://wa.me/919028803309"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-600 text-white py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold hover:bg-green-700 transition duration-300 flex items-center justify-center text-sm sm:text-base"
                >
                  💬 Book on WhatsApp
                </a>
                <a
                  href="tel:+919028803309"
                  className="w-full bg-emerald-500 text-white py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold hover:bg-emerald-600 transition duration-300 flex items-center justify-center text-sm sm:text-base"
                >
                  📞 Call Now
                </a>
              </div>

              {/* Quick Info */}
              <div className="mt-4 sm:mt-6 space-y-3">
                <div className="flex items-center text-xs sm:text-sm text-gray-600">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>
                  ✓ Best Price Guarantee
                </div>
                <div className="flex items-center text-xs sm:text-sm text-gray-600">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>
                  ✓ 24/7 Customer Support
                </div>
                <div className="flex items-center text-xs sm:text-sm text-gray-600">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>
                  ✓ 5000+ Happy Customers
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SinglePackagePage;