import React, { useState } from "react";

const FAQ = ({ id = "faq" }) => {
  const faqs = [
    { 
      question: "Why should I choose Omkar Tour and Travels?", 
      answer: "With 13+ years of experience, 5000+ happy customers, and deep local expertise, we provide personalized service, best prices, and 24/7 support throughout your journey." 
    },
    { 
      question: "How much will a Kerala trip cost with Omkar?", 
      answer: "Packages start from ₹12,999 per person for 3 days. We offer budget to luxury options with complete transparency. Contact us for customized quotes with best price guarantee." 
    },
    { 
      question: "Do you provide airport transfers?", 
      answer: "Yes, all our packages include airport pickups and drops. We provide AC vehicles with experienced drivers for all transfers and sightseeing." 
    },
    { 
      question: "Can I customize my Kerala tour package?", 
      answer: "Absolutely! We specialize in tailor-made itineraries. Tell us your preferences, duration, and budget, and we'll create your perfect Kerala experience." 
    },
    { 
      question: "What is your cancellation policy?", 
      answer: "We offer flexible cancellation policies. Full refund if cancelled 30 days before travel. Contact us for detailed policy based on your package." 
    }
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id={id} className="max-w-4xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-600">Everything you need to know about planning your Kerala trip with Omkar</p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden">
            <button
              className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition duration-200 flex justify-between items-center"
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            >
              <span className="font-semibold text-gray-800">{faq.question}</span>
              <span className="text-emerald-600 text-xl">
                {openIndex === index ? '−' : '+'}
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