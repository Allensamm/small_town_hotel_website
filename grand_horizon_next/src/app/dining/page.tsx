import Image from "next/image";
import Link from "next/link";
import { Clock, Scissors, CalendarCheck } from "lucide-react";

export const metadata = {
  title: "Dining | The Grand Horizon Hotel",
};

const venues = [
  {
    name: "The Azure Restaurant",
    type: "Fine Dining • Contemporary European",
    desc1: "Two Michelin stars illuminate The Azure, our flagship restaurant where Executive Chef Isabella Moreau transforms the finest local and imported ingredients into edible masterpieces. Floor-to-ceiling windows frame the ocean as your backdrop while you embark on a 12-course tasting journey that tells the story of the seasons, the sea, and the land.",
    desc2: "Pair your experience with selections from our 15,000-bottle wine cellar, curated by our sommelier from the world's most prestigious vineyards.",
    hours: "Dinner only, 7:00 PM – 11:00 PM (Closed Mondays)",
    dress: "Smart Elegant",
    reservations: "Required, 2 weeks in advance recommended",
    image: "/anna-tukhfatullina-food-photographer-stylist-Mzy-OjtCI70-unsplash.jpg"
  },
  {
    name: "Horizon Lounge",
    type: "Cocktails & Small Plates • International",
    desc1: "Perched on the 25th floor, Horizon Lounge is where the magic of golden hour becomes a daily ritual. Our master mixologists craft cocktails that are as beautiful as the sunsets they accompany—each one a carefully balanced symphony of premium spirits, house-made ingredients, and theatrical presentation.",
    desc2: "Think Wagyu beef sliders with black truffle aioli, tempura soft-shell crab with yuzu kosho, and burrata with heritage tomatoes and aged balsamic.",
    hours: "4:00 PM – 1:00 AM, daily",
    dress: "Smart Casual",
    reservations: "Recommended for sunset seating",
    image: "/jojo-yuen-sharemyfoodd-8GZdxgujdbY-unsplash.jpg"
  },
  {
    name: "Pearl Café",
    type: "All-Day Dining • International Buffet & À La Carte",
    desc1: "From the first cup of morning coffee to a midnight craving, Pearl Café is your constant companion. Our sprawling breakfast buffet takes you on a world tour before 10 AM—freshly baked French pastries, full English breakfast, Japanese miso, Middle Eastern mezze, and live cooking stations.",
    desc2: "The atmosphere is casual yet refined—perfect for families, business travelers, and everyone in between.",
    hours: "6:30 AM – 11:00 PM, daily",
    dress: "Casual",
    reservations: "Not required, walk-ins welcome",
    image: "/blog-img-1.jpg"
  },
  {
    name: "Sakura Japanese Restaurant",
    type: "Fine Dining • Japanese",
    desc1: "Master Chef Hiroshi Tanaka brings 35 years of experience from Tokyo's finest establishments to Sakura. Watch as he transforms the freshest fish—flown in daily from Tsukiji Market—into omakase experiences that honor centuries of tradition.",
    desc2: "Discover private teppanyaki rooms, intimate robatayaki stations, and a sake collection featuring rare bottles you won't find outside Japan. Sakura isn't just a restaurant—it's a portal to Japan.",
    hours: "Lunch 12–2:30 PM | Dinner 6:30–10:30 PM (Closed Tuesdays)",
    dress: "Smart Casual",
    reservations: "Required for omakase and teppanyaki",
    image: "/josh-mclove-85kUBzS2V3g-unsplash.jpg"
  },
  {
    name: "The Rooftop",
    type: "Bar & Grill • Modern American",
    desc1: "There's something primal about fire-kissed food eaten under an open sky. The Rooftop combines sophistication with the casual, convivial spirit of the world's best rooftop bars. Our wood-fired grill produces steaks with perfect char, whole fish infused with aromatic smoke.",
    desc2: "Live music Thursday through Sunday transforms the space into a celebration. Order a bottle from our champagne trolley, settle into a plush daybed, and let the evening unfold naturally.",
    hours: "5:00 PM – 2:00 AM (kitchen closes midnight)",
    dress: "Smart Casual",
    reservations: "Recommended on weekends",
    image: "/devon-janse-van-rensburg-_WEDFTZV0qU-unsplash.jpg"
  }
];

export default function DiningPage() {
  return (
    <div className="bg-cream min-h-screen">
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image src="/anna-tukhfatullina-food-photographer-stylist-Mzy-OjtCI70-unsplash.jpg" alt="Fine dining" fill priority className="object-cover z-0" />
        <div className="absolute inset-0 bg-navy/60 z-10"></div>
        <div className="relative z-20 text-center max-w-3xl px-4 mt-20">
          <span className="text-gold tracking-[0.2em] uppercase text-xs font-semibold mb-4 block">Culinary Excellence</span>
          <h1 className="text-white text-4xl md:text-6xl font-serif mb-6">A Culinary Journey Without Borders</h1>
          <p className="text-white/80 font-light text-lg">Five restaurants. Seventeen awards. Infinite flavors. Every meal at The Grand Horizon is a celebration.</p>
        </div>
      </section>

      <div className="bg-white border-b border-navy/10 py-4">
        <div className="container-custom">
          <div className="text-[0.65rem] uppercase tracking-widest text-charcoal/60 font-semibold gap-2 flex items-center">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-navy">Dining</span>
          </div>
        </div>
      </div>

      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-col gap-24 lg:gap-32">
            {venues.map((venue, idx) => (
              <div key={idx} className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}>
                <div className="w-full lg:w-1/2">
                  <div className="relative h-[400px] md:h-[600px] w-full rounded-sm overflow-hidden border border-black/5 group">
                    <Image src={venue.image} alt={venue.name} fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                  </div>
                </div>
                
                <div className="w-full lg:w-1/2">
                  <span className="text-gold text-[0.65rem] uppercase tracking-widest font-semibold block mb-4">{venue.type}</span>
                  <h3 className="text-4xl font-serif text-navy mb-8">{venue.name}</h3>
                  <p className="text-charcoal/80 font-light leading-relaxed mb-6">{venue.desc1}</p>
                  <p className="text-charcoal/80 font-light leading-relaxed mb-10">{venue.desc2}</p>
                  
                  <div className="flex flex-col gap-4 border-t border-black/10 pt-8 mb-10">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 flex items-center justify-center bg-cream text-navy/40"><Clock className="w-4 h-4" /></div>
                      <div className="text-sm"><strong>Hours:</strong> <span className="text-charcoal/70">{venue.hours}</span></div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 flex items-center justify-center bg-cream text-navy/40"><Scissors className="w-4 h-4" /></div>
                      <div className="text-sm"><strong>Dress Code:</strong> <span className="text-charcoal/70">{venue.dress}</span></div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 flex items-center justify-center bg-cream text-navy/40"><CalendarCheck className="w-4 h-4" /></div>
                      <div className="text-sm"><strong>Reservations:</strong> <span className="text-charcoal/70">{venue.reservations}</span></div>
                    </div>
                  </div>
                  
                  <button className="btn-primary w-full sm:w-auto">Reserve a Table</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
