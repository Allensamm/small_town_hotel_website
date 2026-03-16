'use client';

import { useState, useEffect } from 'react';

const testimonials = [
  {
    quote: "We've stayed at luxury hotels around the world, but The Grand Horizon exists in a category of its own. The attention to detail is extraordinary—they remembered my wife's favorite flowers from our last visit three years ago.",
    author: "James & Victoria Richardson",
    location: "London, United Kingdom"
  },
  {
    quote: "I came for a business conference and left having experienced what true hospitality means. The staff doesn't just meet expectations; they anticipate needs you didn't know you had.",
    author: "Akiko Tanaka",
    location: "Tokyo, Japan"
  },
  {
    quote: "Our honeymoon at The Grand Horizon was pure magic. From the private dinner on the beach to the surprise couples' spa treatment, every moment felt like a fairytale.",
    author: "Michael & Sarah Chen",
    location: "San Francisco, USA"
  },
  {
    quote: "As someone who travels 200+ days a year, I've become immune to hotel charm. The Grand Horizon broke through. I've never felt more at home anywhere in the world.",
    author: "Emmanuel Okonkwo",
    location: "Lagos, Nigeria"
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-padding bg-cream" id="testimonials">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-16">
          <span className="section-label">Guest Reviews</span>
          <h2 className="text-4xl md:text-5xl font-serif text-navy">Stories From Our Guests</h2>
        </div>

        <div className="relative min-h-[300px] flex items-center justify-center">
          {testimonials.map((test, idx) => (
            <div 
              key={idx}
              className={`absolute inset-0 flex flex-col items-center text-center transition-all duration-1000 ease-in-out ${
                idx === activeIndex 
                  ? 'opacity-100 translate-x-0 z-10' 
                  : 'opacity-0 translate-x-12 z-0 pointer-events-none'
              }`}
            >
              <div className="flex justify-center space-x-1 mb-8 text-gold">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                ))}
              </div>
              <p className="text-xl md:text-3xl font-display italic text-navy leading-loose mb-10 max-w-3xl">
                &quot;{test.quote}&quot;
              </p>
              <div className="flex flex-col items-center">
                <span className="text-sm font-semibold tracking-widest uppercase text-navy mb-1">{test.author}</span>
                <span className="text-xs text-charcoal/60 lowercase italic">{test.location}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center space-x-3 mt-12">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                idx === activeIndex ? 'bg-gold w-8' : 'bg-black/20 hover:bg-gold/50'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
