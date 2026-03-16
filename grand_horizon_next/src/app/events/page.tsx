import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

export const metadata = {
  title: "Events & Weddings | The Grand Horizon Hotel",
};

const venues = [
  { image: "/r-architecture-HQCW1gTMjek-unsplash.jpg", title: "Grand Ballroom", cap: "Up to 500 guests", desc: "Gala dinners, award ceremonies, product launches. Whatever your vision, our ballroom transforms to match it." },
  { image: "/chastity-cortijo-M8iGdeTSOkg-unsplash.jpg", title: "Garden Terrace", cap: "Up to 200 guests", desc: "Lush gardens, ocean breezes, and golden sunsets create the perfect backdrop for outdoor celebrations." },
  { image: "/kam-idris-kyt0PkBSCNQ-unsplash.jpg", title: "Executive Boardroom", cap: "Up to 20 guests", desc: "State-of-the-art AV, natural light, all-day refreshments. Where the world's most important deals get done." },
  { image: "/devon-janse-van-rensburg-_WEDFTZV0qU-unsplash.jpg", title: "Beachfront Pavilion", cap: "Up to 150 guests", desc: "Toes in the sand, stars overhead. The most magical venue for those who dare to dream differently." }
];

const packages = [
  {
    name: "Intimate",
    guests: "Up to 30 guests",
    price: "$15,000",
    features: ["Beach or garden ceremony", "Private dining room reception", "Custom 3-course menu", "Wedding cake", "Bridal suite", "Dedicated coordinator"],
    featured: false
  },
  {
    name: "Classic",
    badge: "Most Popular",
    guests: "Up to 100 guests",
    price: "$45,000",
    features: ["Choice of ceremony venue", "Ballroom reception", "Premium bar & 5-course menu", "Live band", "Floral design & photography", "3-night stay included"],
    featured: true
  },
  {
    name: "Grand",
    guests: "Up to 300 guests",
    price: "$120,000",
    features: ["Full venue buyout option", "Celebrity wedding planner", "Unlimited customization", "Multi-day celebration", "Guest accommodation block", "Helicopter departure"],
    featured: false
  }
];

export default function EventsPage() {
  return (
    <div className="bg-cream min-h-screen">
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image src="/about-img-2.jpg" alt="Events at The Grand Horizon" fill priority className="object-cover z-0" />
        <div className="absolute inset-0 bg-navy/60 z-10"></div>
        <div className="relative z-20 text-center max-w-3xl px-4 mt-20">
          <span className="text-gold tracking-[0.2em] uppercase text-xs font-semibold mb-4 block">Celebrations</span>
          <h1 className="text-white text-4xl md:text-6xl font-serif mb-6">Moments That Define a Lifetime</h1>
          <p className="text-white/80 font-light text-lg">Weddings. Celebrations. Corporate gatherings. Whatever brings people together, we make it extraordinary.</p>
        </div>
      </section>

      <div className="bg-white border-b border-navy/10 py-4">
        <div className="container-custom">
          <div className="text-[0.65rem] uppercase tracking-widest text-charcoal/60 font-semibold gap-2 flex items-center">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-navy">Events & Weddings</span>
          </div>
        </div>
      </div>

      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="section-label">Our Venues</span>
            <h2 className="text-4xl md:text-5xl font-serif text-navy">Spaces for Every Occasion</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {venues.map((venue, idx) => (
                <div key={idx} className="relative h-[400px] group overflow-hidden border border-black/5">
                   <Image src={venue.image} alt={venue.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 transition-opacity duration-300"></div>
                   <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-gold text-[0.6rem] uppercase tracking-widest font-semibold mb-3">{venue.cap}</span>
                      <h3 className="text-white text-3xl font-serif mb-4">{venue.title}</h3>
                      <p className="text-white/80 font-light text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        {venue.desc}
                      </p>
                   </div>
                </div>
             ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="section-label">Weddings</span>
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6">Your Perfect Day, Perfectly Realized</h2>
            <p className="text-charcoal/70 font-light leading-relaxed">Our dedicated wedding team becomes an extension of your family, handling every detail so you can be fully present for the most important day of your life.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
             {packages.map((pkg, idx) => (
                <div key={idx} className={`relative p-8 md:p-10 border transition-all duration-300 ${pkg.featured ? 'bg-navy border-navy text-white shadow-2xl scale-100 lg:scale-105 z-10' : 'bg-cream border-black/5 hover:border-gold/30'}`}>
                   {pkg.badge && (
                      <span className="absolute top-0 right-8 -translate-y-1/2 bg-gold text-white text-[0.6rem] uppercase tracking-widest font-semibold px-4 py-1">
                         {pkg.badge}
                      </span>
                   )}
                   <h4 className={`text-2xl font-serif mb-2 ${pkg.featured ? 'text-white' : 'text-navy'}`}>{pkg.name}</h4>
                   <div className={`text-xs uppercase tracking-widest font-semibold mb-8 ${pkg.featured ? 'text-gold' : 'text-navy/60'}`}>{pkg.guests}</div>
                   <div className="mb-10">
                      <div className={`text-4xl font-serif mb-1 ${pkg.featured ? 'text-white' : 'text-navy'}`}>{pkg.price}</div>
                      <div className={`text-xs font-light tracking-wide ${pkg.featured ? 'text-white/60' : 'text-charcoal/50'}`}>starting at</div>
                   </div>
                   
                   <ul className="space-y-4 mb-10 text-sm font-light">
                      {pkg.features.map((feature, fIdx) => (
                         <li key={fIdx} className="flex gap-3 items-start">
                            <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${pkg.featured ? 'text-gold' : 'text-gold'}`} />
                            <span className={pkg.featured ? 'text-white/80' : 'text-charcoal/80'}>{feature}</span>
                         </li>
                      ))}
                   </ul>

                   <Link href="/contact" className={`w-full flex justify-center text-xs uppercase tracking-widest font-semibold px-6 py-4 transition-colors ${pkg.featured ? 'bg-gold text-white hover:bg-cream hover:text-navy border border-transparent' : 'bg-navy text-white hover:bg-gold border border-transparent'}`}>
                      Schedule Consultation
                   </Link>
                </div>
             ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream text-center">
        <div className="container-custom max-w-3xl">
          <span className="section-label !text-gold">Get Started</span>
          <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6">Plan Your Event</h2>
          <p className="text-charcoal/70 font-light mb-12">Tell us about your vision and we&apos;ll make it extraordinary.</p>
          
          <form className="bg-white p-8 md:p-12 border border-black/5 text-left space-y-6">
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                   <label htmlFor="inqName" className="text-[0.65rem] uppercase tracking-widest text-navy/70 font-semibold">Your Name</label>
                   <input type="text" id="inqName" required placeholder="Full Name" className="bg-transparent border-b border-navy/20 py-2 focus:outline-none focus:border-gold transition-colors placeholder:text-black/20" />
                </div>
                <div className="flex flex-col gap-2">
                   <label htmlFor="inqEmail" className="text-[0.65rem] uppercase tracking-widest text-navy/70 font-semibold">Email</label>
                   <input type="email" id="inqEmail" required placeholder="email@example.com" className="bg-transparent border-b border-navy/20 py-2 focus:outline-none focus:border-gold transition-colors placeholder:text-black/20" />
                </div>
             </div>

             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                   <label htmlFor="inqType" className="text-[0.65rem] uppercase tracking-widest text-navy/70 font-semibold">Event Type</label>
                   <select id="inqType" className="bg-transparent border-b border-navy/20 py-2 focus:outline-none focus:border-gold transition-colors text-charcoal">
                      <option value="">Select type</option>
                      <option value="wedding">Wedding</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="private">Private Celebration</option>
                      <option value="conference">Conference</option>
                   </select>
                </div>
                <div className="flex flex-col gap-2">
                   <label htmlFor="inqGuests" className="text-[0.65rem] uppercase tracking-widest text-navy/70 font-semibold">Guest Count</label>
                   <input type="number" id="inqGuests" placeholder="Estimated guests" className="bg-transparent border-b border-navy/20 py-2 focus:outline-none focus:border-gold transition-colors placeholder:text-black/20" />
                </div>
             </div>

             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                   <label htmlFor="inqDate" className="text-[0.65rem] uppercase tracking-widest text-navy/70 font-semibold">Preferred Date</label>
                   <input type="date" id="inqDate" className="bg-transparent border-b border-navy/20 py-2 focus:outline-none focus:border-gold transition-colors text-charcoal" />
                </div>
                <div className="flex flex-col gap-2">
                   <label htmlFor="inqBudget" className="text-[0.65rem] uppercase tracking-widest text-navy/70 font-semibold">Budget Range</label>
                   <select id="inqBudget" className="bg-transparent border-b border-navy/20 py-2 focus:outline-none focus:border-gold transition-colors text-charcoal">
                      <option value="">Select range</option>
                      <option value="10-25">$10,000–$25,000</option>
                      <option value="25-50">$25,000–$50,000</option>
                      <option value="50-100">$50,000–$100,000</option>
                      <option value="100+">$100,000+</option>
                   </select>
                </div>
             </div>

             <div className="flex flex-col gap-2 pb-4">
                <label htmlFor="inqMessage" className="text-[0.65rem] uppercase tracking-widest text-navy/70 font-semibold">Tell Us More</label>
                <textarea id="inqMessage" rows={3} placeholder="Special requirements, vision, inspiration..." className="bg-transparent border-b border-navy/20 py-2 focus:outline-none focus:border-gold transition-colors placeholder:text-black/20 resize-none"></textarea>
             </div>

             <div className="text-center w-full">
                <button type="submit" className="btn-primary w-full sm:w-auto">Submit Inquiry</button>
             </div>
          </form>
        </div>
      </section>

    </div>
  );
}
