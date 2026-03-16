'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const rooms = [
  {
    id: 'deluxe',
    name: 'Deluxe Room',
    tag: 'Elegant Simplicity',
    tagline: '45 SQM • Garden / Ocean View',
    description: '45 square meters of refined comfort with garden or partial ocean views. The perfect retreat after a day of exploration.',
    image: '/room-deluxe.png',
    price: 450,
    features: [
      { icon: <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="currentColor"><path d="M3 7v11a2 2 0 002 2h14a2 2 0 002-2V7"/><path d="M21 7H3V5a2 2 0 012-2h14a2 2 0 012 2v2z"/></svg>, text: 'King Bed' },
      { icon: <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="currentColor"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>, text: '2 Guests' },
      { icon: <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="currentColor"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>, text: 'Ocean View' },
    ]
  },
  {
    id: 'premium-suite',
    name: 'Premium Suite',
    tag: 'Elevated Indulgence',
    tagline: '70 SQM • Panoramic Ocean View',
    description: '70 square meters featuring a separate living area, private balcony, and panoramic ocean views that stretch to infinity.',
    image: '/room-premium-suite.png',
    price: 750,
    features: [
      { icon: <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="currentColor"><path d="M3 7v11a2 2 0 002 2h14a2 2 0 002-2V7"/><path d="M21 7H3V5a2 2 0 012-2h14a2 2 0 012 2v2z"/></svg>, text: 'King Bed' },
      { icon: <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="currentColor"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>, text: '3 Guests' },
      { icon: <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="currentColor"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>, text: 'Ocean View' },
    ]
  },
  {
    id: 'executive-suite',
    name: 'Executive Suite',
    tag: 'Business Meets Pleasure',
    tagline: '95 SQM • Ocean View • Butler Service',
    description: '95 square meters of sophisticated space with a dedicated work area, butler service, and exclusive lounge access.',
    image: '/room-executive.png',
    price: 1200,
    features: [
      { icon: <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="currentColor"><path d="M3 7v11a2 2 0 002 2h14a2 2 0 002-2V7"/><path d="M21 7H3V5a2 2 0 012-2h14a2 2 0 012 2v2z"/></svg>, text: 'King Bed' },
      { icon: <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="currentColor"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>, text: '4 Guests' },
      { icon: <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="currentColor"><rect x="2" y="4" width="20" height="16" rx="2"/><line x1="2" y1="10" x2="22" y2="10" /></svg>, text: 'Lounge Access' },
    ]
  },
  {
    id: 'presidential-suite',
    name: 'Presidential Suite',
    tag: 'Uncompromising Excellence',
    tagline: '180 SQM • Private Plunge Pool',
    description: '180 square meters of pure grandeur featuring two bedrooms, a private dining room, and a terrace with infinity plunge pool.',
    image: '/r-architecture-HQCW1gTMjek-unsplash.jpg',
    price: 3500,
    features: [
      { icon: <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="currentColor"><path d="M3 7v11a2 2 0 002 2h14a2 2 0 002-2V7"/><path d="M21 7H3V5a2 2 0 012-2h14a2 2 0 012 2v2z"/></svg>, text: '2 King Beds' },
      { icon: <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="currentColor"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>, text: '6 Guests' },
      { icon: <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="currentColor"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18" /></svg>, text: 'Private Pool' },
    ]
  },
  {
    id: 'penthouse',
    name: 'Royal Penthouse',
    tag: 'The Pinnacle of Luxury',
    tagline: '400 SQM • 360° Views • Private Staff',
    description: 'Our crown jewel. 400 square meters across two levels with 360-degree views, private chef, helicopter transfer, and experiences beyond imagination.',
    image: '/collov-home-design-MopQfWaJFiw-unsplash.jpg',
    price: 12000,
    features: [
      { icon: <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="currentColor"><path d="M3 7v11a2 2 0 002 2h14a2 2 0 002-2V7"/><path d="M21 7H3V5a2 2 0 012-2h14a2 2 0 012 2v2z"/></svg>, text: '3 King Beds' },
      { icon: <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="currentColor"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>, text: '8 Guests' },
      { icon: <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>, text: 'Full Staff' },
    ]
  }
];

export default function RoomsShowcase() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section className="section-padding overflow-hidden bg-white" id="rooms">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="section-label">Accommodation</span>
          <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6">Sanctuaries of Serenity</h2>
          <p className="max-w-2xl mx-auto text-charcoal/80">
            Each of our 287 rooms and suites is a masterpiece of comfort, designed to cocoon you in luxury while framing the breathtaking beauty that surrounds us.
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          ref={scrollRef}
          className="flex space-x-8 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:-mx-12 md:px-12 lg:-mx-20 lg:px-20"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {rooms.map((room) => (
            <div key={room.id} className="min-w-[340px] w-[85vw] md:w-[400px] flex-shrink-0 snap-center bg-cream group hover:-translate-y-2 transition-transform duration-500 rounded-sm overflow-hidden border border-black/5">
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src={room.image} 
                  alt={room.name} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute top-4 left-4 bg-navy text-white text-[0.65rem] uppercase tracking-widest px-3 py-1 font-semibold z-10">
                  {room.tag}
                </span>
              </div>
              
              <div className="p-8">
                <div className="text-[0.65rem] uppercase tracking-widest text-gold mb-3 font-semibold">
                  {room.tagline}
                </div>
                <h3 className="text-2xl font-serif text-navy mb-4">{room.name}</h3>
                <p className="text-charcoal/70 text-sm mb-6 line-clamp-3">
                  {room.description}
                </p>
                
                <div className="flex justify-between border-t border-b border-black/5 py-4 mb-6">
                  {room.features.map((feature, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-2">
                      <div className="w-5 h-5 text-gold flex justify-center items-center">
                        {feature.icon}
                      </div>
                      <span className="text-[0.65rem] uppercase tracking-wide text-charcoal">{feature.text}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-between items-center mt-auto">
                  <div className="text-sm">
                    From <strong className="text-lg text-navy">${room.price.toLocaleString()}</strong> <span className="text-charcoal/50 text-xs">/ night</span>
                  </div>
                  <Link href={`/rooms#${room.id}`} className="text-gold uppercase tracking-widest text-xs font-semibold flex items-center hover:text-gold-dark transition-colors">
                    View
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-1">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Navigation */}
        <div className="flex justify-center gap-4 mt-8">
          <button onClick={scrollLeft} className="w-12 h-12 flex justify-center items-center rounded-full border border-gold text-gold hover:bg-gold hover:text-white transition-colors">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><polyline points="15 18 9 12 15 6" /></svg>
          </button>
          <button onClick={scrollRight} className="w-12 h-12 flex justify-center items-center rounded-full border border-gold text-gold hover:bg-gold hover:text-white transition-colors">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><polyline points="9 18 15 12 9 6" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
