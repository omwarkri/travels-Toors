import React, { useState } from "react";

const FAQ = ({ id = "faq" }) => {
  const faqs = [
    {
      question: "How much does a Kerala holiday cost?",
      answer:
        "A week in Kerala usually costs between ₹15,000 and ₹25,000 per person, depending on where you stay and the activities chosen. For the most accurate pricing, ask for a personalized quote.",
    },
    {
      question: "Which month is best for Kerala?",
      answer:
        "The best time to explore Kerala is from September to March when the weather is cool and pleasant. During these months, you can enjoy beautiful greenery, vibrant festivals, and comfortable sightseeing. However, if you love the monsoon’s refreshing rains and Ayurvedic therapies, June to August is a good option too. Your choice depends on what kind of experience you prefer.",
    },
    {
      question: "Which travel agent is best in Kerala?",
      answer:
        "Several reliable travel agencies operate in Kerala. To pick the best, check customer reviews, package variety, and pricing. Also, consider their reputation for service quality and trustworthiness. This helps ensure a smooth and enjoyable trip.",
    },
    {
      question: "Which is the best tour company for Kerala?",
      answer:
        "The best Kerala tour company can vary, but focus on those with strong reputations and expertise in Kerala tours. Look for excellent customer service and packages that match your interests and budget for a great experience.",
    },
    {
      question: "Which tour package is the best?",
      answer:
        "The best Kerala tour package depends on your preferences and budget. Some travellers opt for adventure tours, while others prefer cultural or honeymoon packages. Choose a package that fits your interests and includes the destinations and activities you want.",
    },
    {
      question: "How do I choose a tour package?",
      answer:
        "To pick the right Kerala tour package, start by identifying your interests and budget. Consider the trip length and what’s included, like accommodation and activities. Read reviews of tour operators, compare itineraries, and share your preferences to get a package that fits you best. This ensures a personalized and enjoyable journey.",
    },
    {
      question: "What are the 3 main types of package tours?",
      answer:
        "Package tours have three main types. First, Group Tours involve fixed itineraries. You travel with a set group. Next, Private Tours are customized. They offer flexibility for individuals or small groups. Finally, Custom Tours are entirely tailored. You design your itinerary, accommodation, and activities.",
    },
    {
      question: "How is the tour cost calculated?",
      answer:
        "Tour costs are calculated based on several factors such as the length of the trip, type of accommodation, included activities, meals, and transport. Additional services like guide fees, entrance tickets, and insurance also affect the price. Tour operators combine these costs and add a profit margin to set the final package price.",
    },
    {
      question: "Is it cheaper to book a tour?",
      answer:
        "Booking a tour can often be cheaper because group rates and pre-negotiated deals lower costs. It also saves time and hassle by including meals, transport, and activities. However, it's good to compare prices with planning independently to ensure you get the best deal for your budget.",
    },
    {
      question: "What are the must visit tourism places in Kerala?",
      answer:
        "Top must-visit places in Kerala include Munnar’s tea gardens, the backwaters with houseboats, Periyar wildlife sanctuary, and beaches like Kovalam and Varkala. Fort Kochi’s historic charm and Padmanabha Swamy Temple are also popular. For nature lovers, Wayanad and Thekkady spice markets offer greenery and wildlife experiences. These spots capture Kerala’s unique mix of nature, culture, and relaxation.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id={id} className="max-w-6xl mx-auto px-6 py-6 md:py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-gray-800 mb-6 tracking-wider uppercase">
          Frequently Asked Questions
        </h2>
        <p className="text-sm md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
          Everything you need to know about planning your Kerala trip with Omkar
          Tour and Travels
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-2xl overflow-hidden"
          >
            <button
              className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition duration-200 flex justify-between items-center"
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            >
              <span className="font-semibold text-gray-800">
                {faq.question}
              </span>
              <span className="text-emerald-600 text-xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
