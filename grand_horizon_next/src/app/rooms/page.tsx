import Image from "next/image";
import Link from "next/link";
export const metadata = {
  title: "Rooms & Suites | The Grand Horizon Hotel",
  description: "Discover 287 exquisite rooms and suites at The Grand Horizon Hotel.",
};

const rooms = [
  {
    id: 'deluxe',
    name: "Deluxe Room",
    badge: "Most Popular",
    tagline: "Elegant Simplicity, Exceptional Comfort",
    desc1: "Step into 45 square meters of thoughtfully designed space where every detail has been considered. Floor-to-ceiling windows frame either our lush tropical gardens or glimpses of the sparkling ocean beyond. Sink into our signature Cloud Nine bed, wrapped in 400-thread-count Egyptian cotton.",
    size: "45 sqm",
    guests: "2 Guests",
    bed: "King Bed",
    view: "Garden / Ocean View",
    amenities: ["WiFi", "Rain Shower", "Soaking Tub", "Balcony", "Smart TV", "Nespresso", "Minibar"],
    price: 450,
    image: "/room-deluxe.png"
  },
  {
    id: 'premium',
    name: "Premium Suite",
    badge: "",
    tagline: "Space to Breathe, Room to Dream",
    desc1: "The Premium Suite redefines what a hotel room can be. At 70 square meters, enjoy a separate living area where you can unwind, entertain friends over cocktails, or simply spread out and make yourself completely at home.",
    size: "70 sqm",
    guests: "3 Guests",
    bed: "King Bed",
    view: "Panoramic Ocean View",
    amenities: ["Separate Living Area", "Walk-in Closet", "Dual Vanities", "Bose Sound", "Complimentary Minibar"],
    price: 750,
    image: "/room-premium-suite.png"
  },
  {
    id: 'executive',
    name: "Executive Suite",
    badge: "Business Favorite",
    tagline: "Where Business Meets Absolute Pleasure",
    desc1: "Designed for the discerning executive who refuses to compromise. A dedicated workspace with ergonomic seating ensures you can conquer the business world, while separate areas ensure you can leave work behind.",
    size: "95 sqm",
    guests: "4 Guests",
    bed: "King Bed",
    view: "Butler Service",
    amenities: ["Executive Lounge", "Personal Butler", "Work Area", "75\" Smart TV", "Free Laundry", "Airport Transfer"],
    price: 1200,
    image: "/room-executive.png"
  },
  {
    id: 'presidential',
    name: "Presidential Suite",
    badge: "Ultra Luxury",
    tagline: "Uncompromising Excellence in Every Detail",
    desc1: "Reserved for those who accept nothing but the absolute best. Two bedrooms, a formal dining room for up to eight guests, and a private terrace with an infinity plunge pool that seems to merge with the ocean beyond.",
    size: "180 sqm",
    guests: "6 Guests",
    bed: "2 King Beds",
    view: "Private Pool",
    amenities: ["Private Dining Room", "Terrace + Plunge Pool", "Private Chef", "24/7 Butler", "Bang & Olufsen", "Helicopter Transfer"],
    price: 3500,
    image: "/r-architecture-HQCW1gTMjek-unsplash.jpg"
  },
  {
    id: 'penthouse',
    name: "Royal Penthouse",
    badge: "The Crown Jewel",
    tagline: "The Pinnacle of Luxury Living",
    desc1: "Some experiences cannot be described—they can only be lived. The Royal Penthouse occupies the entire top floor, a 400-square-meter duplex where every imaginable luxury has been not just included, but perfected. Floor-to-ceiling windows on every side offer 360-degree views. Three bedrooms, each designed by a different world-renowned interior architect.",
    size: "400 sqm",
    guests: "8 Guests",
    bed: "3 King Beds",
    view: "Full Staff",
    amenities: ["360° Views", "Private Elevator", "Helipad", "Private Gym", "Spa Room", "Cinema", "Pro Kitchen", "Pool & Jacuzzi"],
    price: 12000,
    image: "/collov-home-design-MopQfWaJFiw-unsplash.jpg",
    fullWidth: true
  }
];

export default function RoomsPage() {
  return (
    <div className="bg-cream min-h-screen">
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image src="/room-premium-suite.png" alt="Premium Suite" fill priority className="object-cover z-0" />
        <div className="absolute inset-0 bg-navy/60 z-10"></div>
        <div className="relative z-20 text-center max-w-3xl px-4 mt-20">
          <span className="text-gold tracking-[0.2em] uppercase text-xs font-semibold mb-4 block">Accommodation</span>
          <h1 className="text-white text-4xl md:text-6xl font-serif mb-6">Your Private Sanctuary Awaits</h1>
          <p className="text-white/80 font-light text-lg">287 rooms and suites, each a masterpiece of design, comfort, and breathtaking views.</p>
        </div>
      </section>

      <div className="bg-white border-b border-navy/10 py-4">
        <div className="container-custom">
          <div className="text-[0.65rem] uppercase tracking-widest text-charcoal/60 font-semibold gap-2 flex items-center">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-navy">Rooms & Suites</span>
          </div>
        </div>
      </div>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {rooms.map((room) => (
              <div key={room.id} id={room.id} className={`bg-white border border-black/5 flex flex-col ${room.fullWidth ? 'lg:col-span-2 lg:flex-row' : ''}`}>
                <div className={`relative ${room.fullWidth ? 'lg:w-1/2 h-64 lg:h-auto' : 'h-80 w-full'}`}>
                  <Image src={room.image} alt={room.name} fill className="object-cover" />
                  {room.badge && (
                    <span className="absolute top-4 left-4 bg-navy text-white text-[0.65rem] uppercase tracking-widest px-3 py-1 font-semibold z-10">
                      {room.badge}
                    </span>
                  )}
                </div>
                
                <div className={`p-8 md:p-12 flex flex-col ${room.fullWidth ? 'lg:w-1/2' : ''}`}>
                  <h3 className="text-3xl font-serif text-navy mb-2">{room.name}</h3>
                  <div className="text-gold text-[0.65rem] uppercase tracking-widest font-semibold mb-6">{room.tagline}</div>
                  
                  <p className="text-charcoal/70 font-light text-sm leading-relaxed mb-8">
                    {room.desc1}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-y-4 gap-x-2 text-xs text-charcoal/80 uppercase tracking-wider font-semibold mb-8">
                    <div className="flex items-center gap-2"><div className="w-5 h-5 flex justify-center items-center text-navy/40"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/></svg></div>{room.size}</div>
                    <div className="flex items-center gap-2"><div className="w-5 h-5 flex justify-center items-center text-navy/40"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div>{room.guests}</div>
                    <div className="flex items-center gap-2"><div className="w-5 h-5 flex justify-center items-center text-navy/40"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 7v11a2 2 0 002 2h14a2 2 0 002-2V7"/></svg></div>{room.bed}</div>
                    <div className="flex items-center gap-2"><div className="w-5 h-5 flex justify-center items-center text-navy/40"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/></svg></div>{room.view}</div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-10 border-t border-black/5 pt-8">
                    {room.amenities.map((amenity, idx) => (
                      <span key={idx} className="text-[0.6rem] uppercase tracking-widest text-charcoal/60 bg-cream px-3 py-1.5 font-semibold">
                        {amenity}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center mt-auto border-t border-black/5 pt-6">
                    <div className="text-sm text-charcoal/60 tracking-widest uppercase">
                      From <strong className="text-xl text-navy">${room.price.toLocaleString()}</strong> / night
                    </div>
                    <Link href="/#book" className="btn-primary text-[0.65rem] px-6 py-3">Book Now</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
