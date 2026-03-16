'use client';
import { useState } from 'react';
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What time is check-in and check-out?",
    a: "Check-in begins at 3:00 PM and check-out is at 12:00 PM. Early check-in and late check-out may be available upon request, subject to availability. Executive Suite guests and above enjoy guaranteed early check-in and late check-out."
  },
  {
    q: "Is airport transfer available?",
    a: "Yes, we offer various transfer options: private sedan ($95), luxury SUV ($150), and helicopter ($1,500). Presidential Suite and Royal Penthouse guests receive complimentary helicopter transfers."
  },
  {
    q: "Is the hotel family-friendly?",
    a: "Absolutely. We welcome families with open arms. Our Little Horizons Kids Club offers complimentary supervised activities for children ages 4-12, and our Family Suites provide connecting rooms for added convenience."
  },
  {
    q: "What is your cancellation policy?",
    a: "Flexible Rate: Free cancellation up to 24 hours before arrival. Non-Refundable Rate: No refunds, but date changes may be accommodated based on availability. Please refer to your confirmation email for specific terms."
  },
  {
    q: "Do you accommodate dietary restrictions?",
    a: "Our culinary team can accommodate virtually any dietary requirement, including vegetarian, vegan, gluten-free, halal, kosher, and allergy-specific needs. Please inform us at the time of booking."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="section-padding bg-cream" id="faq">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-16">
          <span className="section-label">FAQ</span>
          <h2 className="text-4xl md:text-5xl font-serif text-navy">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="border border-navy/10 bg-white"
            >
              <button 
                onClick={() => toggleFaq(idx)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none group"
              >
                <h4 className="font-serif text-lg text-navy pr-8">{faq.q}</h4>
                <div className="text-gold flex-shrink-0 transition-transform duration-300">
                  {openIndex === idx ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5 group-hover:scale-110" />}
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-charcoal/70 leading-relaxed text-sm font-light border-t border-navy/5 mx-6 pb-6">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
