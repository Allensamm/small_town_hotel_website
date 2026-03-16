import Image from "next/image";
import Link from "next/link";
export const metadata = {
  title: "About | The Grand Horizon Hotel",
};

const timeline = [
  { year: "1987", title: "Ground Breaking", desc: "Elena and Marcus Ashworth begin construction on their dream — a world-class oceanfront resort." },
  { year: "1990", title: "Grand Opening", desc: "The Grand Horizon opens its doors with 120 rooms and instant acclaim from travel critics worldwide." },
  { year: "1998", title: "First Michelin Star", desc: "The Azure Restaurant earns its first Michelin star, putting our culinary program on the global map." },
  { year: "2005", title: "The Serenity Spa Opens", desc: "A 3,000 square meter wellness sanctuary is unveiled, becoming the region's premier spa destination." },
  { year: "2012", title: "Major Expansion", desc: "A $200 million renovation adds 167 rooms, the Royal Penthouse, and a second Michelin star for The Azure." },
  { year: "2019", title: "Forbes Five-Star Rating", desc: "The Grand Horizon receives its first Forbes Five-Star designation — maintained every year since." },
  { year: "2025", title: "The Legacy Continues", desc: "37 years of excellence. 287 rooms. 17 culinary awards. One unwavering commitment to extraordinary hospitality." }
];

const awards = [
  { icon: "🏆", title: "Condé Nast Traveler", desc: "Gold List 2019–2025" },
  { icon: "⭐", title: "Forbes Five-Star", desc: "7 Consecutive Years" },
  { icon: "🌍", title: "Travel + Leisure", desc: "World's Best, Top 50" },
  { icon: "🌿", title: "Green Globe", desc: "Certified Sustainable" },
  { icon: "🏨", title: "Leading Hotels", desc: "Of the World Member" }
];

const sustainabilityStats = [
  { number: "60", suffix: "%", label: "Renewable Energy" },
  { number: "80", suffix: "%", label: "Local Ingredients" },
  { number: "0", suffix: "", label: "Single-Use Plastics" },
  { number: "12", suffix: "", label: "Conservation Partners" }
];

export default function AboutPage() {
  return (
    <div className="bg-cream min-h-screen">
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image src="/about-img-2.jpg" alt="The Grand Horizon Hotel" fill priority className="object-cover z-0" />
        <div className="absolute inset-0 bg-navy/60 z-10"></div>
        <div className="relative z-20 text-center max-w-3xl px-4 mt-20">
          <span className="text-gold tracking-[0.2em] uppercase text-xs font-semibold mb-4 block">Est. 1987</span>
          <h1 className="text-white text-4xl md:text-6xl font-serif mb-6">Our Story</h1>
          <p className="text-white/80 font-light text-lg">Since 1987, a sanctuary for those who seek the extraordinary.</p>
        </div>
      </section>

      <div className="bg-white border-b border-navy/10 py-4">
        <div className="container-custom">
          <div className="text-[0.65rem] uppercase tracking-widest text-charcoal/60 font-semibold gap-2 flex items-center">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-navy">About</span>
          </div>
        </div>
      </div>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-label">Our History</span>
              <h2 className="text-4xl md:text-5xl font-serif text-navy mb-8">A Dream Built on the Shore</h2>
              <div className="space-y-6 text-charcoal/80 font-light leading-relaxed">
                <p>The Grand Horizon began as a vision: to create a place where travelers from around the world could experience hospitality at its most genuine—where luxury wasn&apos;t about ostentation, but about thoughtfulness, care, and an unwavering commitment to excellence.</p>
                <p>In 1987, founders Elena and Marcus Ashworth—she, a former prima ballerina; he, a third-generation hotelier—broke ground on what the industry said was an impossible dream: a world-class resort in a location most had overlooked. Three years later, The Grand Horizon opened its doors.</p>
                <p>Three decades on, the impossible dream has become an institution. We&apos;ve welcomed presidents and poets, innovators and artists, families celebrating milestones and individuals seeking solitude. What unites them all is a recognition that The Grand Horizon offers something rare: a place that genuinely cares.</p>
              </div>
            </div>
            <div className="relative h-[600px] w-full border border-black/5 group overflow-hidden">
               <Image src="/about-img-1.jpg" alt="The Grand Horizon Hotel entrance" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy text-center">
        <div className="container-custom max-w-4xl">
           <span className="section-label !text-gold">Our Philosophy</span>
           <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">The Art of Anticipation</h2>
           <div className="space-y-6 text-white/70 font-light leading-relaxed text-lg">
             <p>We believe true luxury isn&apos;t about marble and gold—it&apos;s about feeling understood. Our philosophy centers on what we call &quot;The Art of Anticipation&quot;: knowing what our guests need before they ask, remembering their preferences across years and visits, and constantly finding new ways to surprise and delight.</p>
             <p>Every staff member—from our general manager to our newest housekeeper—is empowered to create moments. No rule book, no rigid protocols, just a simple question: What would make this guest&apos;s experience more extraordinary?</p>
           </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
           <div className="text-center mb-16">
             <span className="section-label">Milestones</span>
             <h2 className="text-4xl md:text-5xl font-serif text-navy">A Journey Through Time</h2>
           </div>
           
           <div className="max-w-4xl mx-auto relative before:absolute before:content-[''] before:left-[15px] md:before:left-1/2 before:top-0 before:bottom-0 before:w-px before:bg-gold/30">
              {timeline.map((item, idx) => (
                 <div key={idx} className={`relative flex flex-col md:flex-row gap-8 mb-12 ${idx % 2 === 0 ? 'md:flex-row-reverse text-left md:text-right' : 'text-left'}`}>
                    <div className="absolute left-[11px] md:left-1/2 top-1 w-2.5 h-2.5 rounded-full bg-gold border-[3px] border-white -translate-x-1/2 z-10 box-content"></div>
                    <div className="pl-12 md:pl-0 w-full md:w-1/2">
                       <span className="text-gold font-serif text-xl italic mb-2 block">{item.year}</span>
                       <h4 className="text-xl font-serif text-navy mb-3">{item.title}</h4>
                       <p className="text-charcoal/70 font-light text-sm leading-relaxed">{item.desc}</p>
                    </div>
                 </div>
              ))}
           </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
           <div className="text-center mb-16">
             <span className="section-label">Recognition</span>
             <h2 className="text-4xl md:text-5xl font-serif text-navy">Awards & Accolades</h2>
           </div>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {awards.map((award, idx) => (
                 <div key={idx} className="bg-white border border-black/5 p-8 text-center flex flex-col items-center hover:border-gold/50 transition-colors">
                    <div className="text-4xl mb-4 grayscale opacity-80">{award.icon}</div>
                    <h4 className="font-serif text-navy mb-2">{award.title}</h4>
                    <p className="text-charcoal/60 text-xs tracking-wider uppercase font-semibold">{award.desc}</p>
                 </div>
              ))}
           </div>
        </div>
      </section>

      <section className="section-padding bg-navy text-white">
        <div className="container-custom">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                 <span className="section-label !text-gold">Sustainability</span>
                 <h2 className="text-4xl md:text-5xl font-serif mb-8">Luxury That Respects Tomorrow</h2>
                 <p className="text-white/70 font-light leading-relaxed mb-6 text-lg">The beauty that surrounds us isn&apos;t ours to exploit—it&apos;s ours to protect. The Grand Horizon operates on 60% renewable energy, has eliminated single-use plastics, sources 80% of restaurant ingredients locally, and partners with marine conservation programs.</p>
                 <p className="text-white/70 font-light leading-relaxed text-lg">We&apos;re not perfect. But we&apos;re committed to continuous improvement, transparency about our footprint, and proving that luxury and responsibility aren&apos;t opposites—they&apos;re partners.</p>
              </div>
              <div className="grid grid-cols-2 gap-8">
                 {sustainabilityStats.map((stat, idx) => (
                    <div key={idx} className="border border-white/10 p-8 text-center">
                       <div className="text-5xl font-serif text-gold mb-2">{stat.number}<span className="text-2xl">{stat.suffix}</span></div>
                       <div className="text-xs uppercase tracking-widest text-white/50 font-semibold">{stat.label}</div>
                    </div>
                 ))}
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
