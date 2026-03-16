'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqData = [
  {
    category: "General",
    questions: [
      { q: "What are the check-in and check-out times?", a: "Check-in is from 3:00 PM and check-out is at 12:00 PM (noon). Early check-in from 12:00 PM and late check-out until 3:00 PM are available upon request, subject to availability. Need even more flexibility? Our suites include complimentary early check-in and late check-out." },
      { q: "Is airport transfer available?", a: "Absolutely. Complimentary luxury sedan transfers are included with all suite bookings. Standard transfer service in our Mercedes fleet is available for $75 one-way. For a truly memorable arrival, helicopter transfers can be arranged for $950 one-way — the aerial coastline view is spectacular." },
      { q: "Is parking available?", a: "Yes. Complimentary self-parking is available for all guests in our secured underground garage. Valet parking is offered for $35/day. Electric vehicle charging stations are also available at no additional cost." },
      { q: "What is your cancellation policy?", a: "Standard bookings can be cancelled free of charge up to 48 hours before arrival. Suite and penthouse bookings require 7 days' notice. Holiday and special event periods may have different policies — these will be clearly stated during booking. We always strive to be flexible and understanding." }
    ]
  },
  {
    category: "Rooms & Amenities",
    questions: [
      { q: "What amenities are included in the room?", a: "Every room includes complimentary Wi-Fi, premium toiletries, bathrobes and slippers, in-room safe, 55\" Smart TV, Nespresso machine, daily bottled water, and turndown service. Suite guests additionally enjoy a complimentary minibar (refilled daily), premium sound system, and exclusive Executive Lounge access." },
      { q: "Are pets allowed?", a: "Yes! We welcome pets under 30 lbs in designated pet-friendly rooms. Our \"Paws at The Grand Horizon\" program includes a welcome treat, bed, bowls, and a list of pet-friendly walks nearby. A one-time cleaning fee of $100 applies. Please inform us at booking." },
      { q: "Is the pool open year-round?", a: "Our outdoor infinity pool is open year-round, weather permitting (heated during cooler months). The indoor 25m lap pool at The Serenity Spa is available to all guests daily from 6:00 AM to 10:00 PM." }
    ]
  },
  {
    category: "Dining",
    questions: [
      { q: "Can you accommodate dietary restrictions?", a: "Absolutely. All our restaurants accommodate vegetarian, vegan, gluten-free, halal, kosher, and allergy-specific requirements. Chef Moreau prides herself on creating alternative dishes that are equally extraordinary—never an afterthought. Please note any dietary requirements at booking or at least 24 hours before dining." },
      { q: "Is room service available?", a: "Absolutely — 24/7 in-room dining is available with an extensive menu. Suite guests enjoy express 20-minute delivery. For a special occasion, we can arrange a private in-room seven-course dinner prepared by one of our sous chefs." }
    ]
  },
  {
    category: "Spa & Wellness",
    questions: [
      { q: "Do I need to book spa treatments in advance?", a: "Advance booking is highly recommended, especially for signature treatments and couples' experiences. We suggest booking at least 1 week in advance during peak season. Walk-in availability varies. All hotel guests have complimentary access to the thermal facilities (sauna, steam room, vitality pool)." }
    ]
  },
  {
    category: "Events & Weddings",
    questions: [
      { q: "How far in advance should we book for weddings?", a: "We recommend booking 12-18 months in advance for peak season (May-October) and 6-12 months for off-peak. Weekend dates fill quickly. Our dedicated wedding coordinator will guide you through every step from your first inquiry to your final dance." },
      { q: "Do you have conference facilities?", a: "Yes. We offer a Grand Ballroom (up to 500 guests), 4 breakout rooms (20-50 guests each), an executive boardroom (20 guests), and outdoor venues. All spaces include state-of-the-art AV equipment, high-speed Wi-Fi, and dedicated event support. Corporate packages include catering, accommodation blocks, and team-building experiences." }
    ]
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleFaq = (idx: string) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="bg-cream min-h-screen">
      <section className="relative h-[45vh] min-h-[320px] flex items-center justify-center overflow-hidden">
        <Image src="/about-img-2.jpg" alt="FAQ Background" fill priority className="object-cover z-0" />
        <div className="absolute inset-0 bg-navy/60 z-10"></div>
        <div className="relative z-20 text-center max-w-3xl px-4 mt-20">
          <span className="text-gold tracking-[0.2em] uppercase text-xs font-semibold mb-4 block">Help Center</span>
          <h1 className="text-white text-4xl md:text-6xl font-serif mb-6">Frequently Asked Questions</h1>
          <p className="text-white/80 font-light text-lg">Everything you need to know before, during, and after your stay.</p>
        </div>
      </section>

      <div className="bg-white border-b border-navy/10 py-4">
        <div className="container-custom">
          <div className="text-[0.65rem] uppercase tracking-widest text-charcoal/60 font-semibold gap-2 flex items-center">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-navy">FAQ</span>
          </div>
        </div>
      </div>

      <section className="section-padding bg-cream">
        <div className="container-custom max-w-4xl">
          {faqData.map((category, catIdx) => (
             <div key={catIdx} className="mb-12">
                <h3 className="text-3xl font-serif text-navy mb-6">{category.category}</h3>
                <div className="space-y-4">
                   {category.questions.map((faq, qIdx) => {
                      const idx = `${catIdx}-${qIdx}`;
                      return (
                        <div key={idx} className="border border-navy/10 bg-white">
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
                      );
                   })}
                </div>
             </div>
          ))}

          <div className="mt-20 p-12 md:p-16 bg-navy text-center text-white">
             <h3 className="text-3xl font-serif text-gold mb-4">Still Have Questions?</h3>
             <p className="text-white/60 mb-8 max-w-lg mx-auto font-light">
                Our concierge team is available 24/7 to assist you.
             </p>
             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/contact" className="btn-primary">
                  Contact Us
                </Link>
                <a href="tel:+18005554726" className="btn-outline border-white text-white hover:bg-white hover:text-navy">
                  Call +1 (800) 555-GRAND
                </a>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
