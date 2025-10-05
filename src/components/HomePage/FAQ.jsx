import React, { useState } from "react";

const FAQ = ({ id = "faq" }) => {
  const faqs = [
    // --- Kerala Tour FAQs from image ---
    { question: "How much will a Kerala trip cost?", answer: "The cost depends on the number of days, hotel category, and transportation type. On average, a 4–5 day trip costs between ₹12,000 and ₹25,000 per person." },
    { question: "Which month is best for Kerala?", answer: "The best time to visit Kerala is from September to March when the weather is pleasant and ideal for sightseeing and backwaters." },
    { question: "Which travel agent is the best in Kerala?", answer: "Choose agents with verified reviews, transparent pricing, and 24/7 support. Always compare itineraries before booking." },
    { question: "Which is the best tour company for Kerala?", answer: "Omkar Tour and Travels is known for its personalized Kerala packages, reliable service, and high customer satisfaction." },
    { question: "Which tour package is the best?", answer: "It depends on your interest — Honeymoon, Family, or Backwater packages are among the most popular." },
    { question: "How do I choose a tour package?", answer: "Select based on duration, budget, interests, and destinations. Consult with your tour planner for customization." },
    { question: "What are the 3 main types of package tours?", answer: "The main types include Fixed Departure, Customized, and Group Tour Packages." },
    { question: "How is the tour cost calculated?", answer: "Tour cost depends on accommodation type, transportation, sightseeing inclusions, and number of travelers." },
    { question: "Is it cheaper to book a tour?", answer: "Yes, tour packages usually combine hotel, transport, and activities at discounted rates compared to separate bookings." },
    { question: "Where is Kerala situated?", answer: "Kerala is located in the southwestern region of India, along the Arabian Sea coastline." },
    { question: "Why is Kerala renowned?", answer: "Kerala is famous for its backwaters, houseboats, lush greenery, Ayurveda, and cultural heritage." },
    { question: "What are the must-visit Tourism Places in Kerala?", answer: "Top places include Munnar, Alleppey, Thekkady, Kumarakom, Wayanad, Kochi, and Kovalam." },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id={id} className="max-w-4xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600">
          Everything you need to know about planning your Kerala trip with Omkar
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
