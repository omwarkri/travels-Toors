import React from "react";
import {
  CheckCircle,
  Phone,
  CreditCard,
  HeartHandshake,
  MapPin,
  BadgeCheck,
  Star,
  ShieldCheck,
} from "lucide-react";

const AboutUsSection = () => {
  return (
    <div id="about" className="pt-20 bg-white text-gray-800">
      {/* Main Section */}
      <section className="max-w-7xl mx-auto py-12 md:py-20 px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-gray-800 mb-4 tracking-wider uppercase">
            About Omkar Tour and Travels
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Your trusted travel partner in Kerala since 2010, crafting
            unforgettable journeys across God’s Own Country.
          </p>
        </div>

        {/* Our Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Since 2010, Omkar Tour and Travels has been dedicated to creating
              memorable travel experiences in Kerala. With over 13 years of
              expertise and 5000+ happy travelers, we’ve built a reputation as
              one of the most reliable travel agencies in the region.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              We combine local insight, strong partnerships with premium hotels,
              and personalized services to ensure your comfort and satisfaction
              every step of the way. For us, travel is not just about reaching a
              destination — it’s about creating stories you’ll cherish forever.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-1">
                  13+
                </div>
                <p className="text-gray-600">Years of Experience</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-1">
                  5000+
                </div>
                <p className="text-gray-600">Happy Customers</p>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=1200&q=80"
              alt="Omkar Tour and Travels team"
              className="rounded-2xl shadow-lg w-full h-96 object-cover"
            />
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-emerald-50 p-8 rounded-2xl border border-emerald-100">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
            <p className="text-gray-700">
              To deliver exceptional travel experiences in Kerala by blending
              local expertise with personalized care, making every journey a
              lifelong memory.
            </p>
          </div>
          <div className="bg-emerald-50 p-8 rounded-2xl border border-emerald-100">
            <div className="text-4xl mb-4">👁️</div>
            <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
            <p className="text-gray-700">
              To become Kerala’s most trusted and preferred travel partner,
              recognized for our integrity, excellence, and customer-first
              approach.
            </p>
          </div>
        </div>

        {/* Why Us Section */}
        <div className="bg-gray-50 py-12 rounded-2xl mb-20">
          <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us</h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
            {[
              {
                icon: BadgeCheck,
                title: "Approved by Tourism Board",
                desc: "Trusted by Government-certified tourism organizations.",
              },
              {
                icon: MapPin,
                title: "Local Expertise",
                desc: "Deep understanding of Kerala’s destinations & culture.",
              },
              {
                icon: HeartHandshake,
                title: "Personalized Service",
                desc: "Custom itineraries & dedicated travel support 24x7.",
              },
              {
                icon: Star,
                title: "Value for Money",
                desc: "Top-quality experiences at the best prices.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 text-center rounded-xl shadow-sm hover:shadow-md transition"
              >
                <item.icon className="mx-auto text-emerald-600 mb-3" size={36} />
                <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Book Online */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-center mb-10">
            Why Book <span className="text-emerald-600">Online</span> With Us
          </h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
            {[
              {
                title: "Save Time",
                desc: "Get instant quotes & packages from verified agents.",
              },
              {
                title: "Multiple Options",
                desc: "Compare itineraries & select what fits your needs.",
              },
              {
                title: "Save Money",
                desc: "Get the best deals directly from trusted providers.",
              },
              {
                title: "Trusted Network",
                desc: "Access 2000+ verified hotels & travel guides.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="border-t-4 border-emerald-600 bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-md"
              >
                <CheckCircle
                  className="mx-auto text-emerald-600 mb-3"
                  size={32}
                />
                <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

     
      </section>
    </div>
  );
};

export default AboutUsSection;
