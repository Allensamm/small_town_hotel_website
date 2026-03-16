export default function Amenities() {
  const amenities = [
    {
      title: "Infinity Pool",
      description: "Suspended between sky and sea, our 50-meter infinity pool offers the sensation of swimming into the horizon itself.",
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 15c6.667-6 13.333 0 20 0"/><path d="M2 19c6.667-6 13.333 0 20 0"/><circle cx="19" cy="7" r="3"/></svg>
    },
    {
      title: "Michelin-Star Dining",
      description: "Three restaurants, seventeen culinary awards, and one promise: every meal will be unforgettable.",
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
    },
    {
      title: "The Serenity Spa",
      description: "A 3,000 square meter wellness sanctuary offering ancient healing traditions reimagined for the modern soul.",
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22c4-4 8-7.5 8-12a8 8 0 10-16 0c0 4.5 4 8 8 12z"/><circle cx="12" cy="10" r="3"/></svg>
    },
    {
      title: "Fitness & Wellness",
      description: "State-of-the-art equipment, personal trainers, and sunrise yoga sessions overlooking the ocean.",
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8h1a4 4 0 010 8h-1"/><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>
    },
    {
      title: "Rooftop Bar",
      description: "Craft cocktails, live jazz, and sunsets that paint the sky in colors you've never seen.",
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 8l4 4H3l4-4"/><path d="M12 2v6"/><rect x="5" y="12" width="14" height="8" rx="1"/></svg>
    },
    {
      title: "Private Beach",
      description: "500 meters of pristine sand, reserved exclusively for our guests. Your personal paradise awaits.",
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="5" r="3"/><path d="M6.5 8a10.5 10.5 0 0011 0"/><path d="M3 21h18"/><path d="M12 8v13"/></svg>
    },
    {
      title: "24/7 Concierge",
      description: "Your wish is our command. From restaurant reservations to helicopter tours, we make the impossible possible.",
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
    },
    {
      title: "Helipad",
      description: "Arrive in style. Our private helipad offers transfers from the airport in just 12 minutes.",
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 16V9h14v7"/><path d="M12 9V4"/><path d="M8 4h8"/><path d="M2 20h20"/><path d="M15 16v4"/><path d="M9 16v4"/></svg>
    }
  ];

  return (
    <section className="section-padding bg-cream" id="amenities">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="section-label">Hotel Amenities</span>
          <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6">Curated Experiences, Endless Possibilities</h2>
          <p className="max-w-2xl mx-auto text-charcoal/80">
            Every element of The Grand Horizon has been designed to delight, surprise, and rejuvenate.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {amenities.map((item, idx) => (
            <div 
              key={idx} 
              className={`bg-white p-8 rounded-sm text-center border border-black/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl group ${idx === 0 ? 'bg-navy border-none' : ''}`}
            >
              <div className={`w-14 h-14 mx-auto mb-6 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1 ${idx === 0 ? 'text-gold' : 'text-navy'}`}>
                {item.icon}
              </div>
              <h4 className={`text-lg font-serif mb-3 ${idx === 0 ? 'text-white' : 'text-navy'}`}>{item.title}</h4>
              <p className={`text-sm leading-relaxed ${idx === 0 ? 'text-white/70' : 'text-charcoal/70'}`}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
