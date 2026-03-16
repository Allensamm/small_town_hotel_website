import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Experiences | The Grand Horizon Hotel",
};

const localExcursions = [
  { image: "/blog-img-2.jpg", title: "Heritage Walking Tour", time: "4 hours", price: "$95", desc: "Discover the soul of our city with a local historian. Wind through ancient streets, taste authentic flavors at hidden markets." },
  { image: "/chastity-cortijo-M8iGdeTSOkg-unsplash.jpg", title: "Sunset Sailing", time: "3 hours", price: "$250", desc: "Board a traditional wooden dhow and sail into the sunset. Champagne, canapés, and colors you'll photograph but never quite capture." },
  { image: "/blog-img-3.jpg", title: "Photography Safari", time: "Full day", price: "$180", desc: "Professional photographer as your guide. Chase golden light through dramatic landscapes and return with portfolio-worthy images." }
];

const adventure = [
  { image: "/hotel-hero.png", title: "Helicopter Island Hopping", time: "Half day", price: "$1,500", desc: "See the archipelago from the sky, land on secluded islands, snorkel in untouched reefs, lunch on a private sandbar." },
  { image: "/blog-img-5.jpg", title: "Scuba Discovery", time: "Half day", price: "$220", desc: "First-time divers welcome. Explore vibrant coral reefs and encounter marine life that seems lifted from a documentary." },
  { image: "/blog-img-6.jpg", title: "Mountain Summit Sunrise", time: "Full day", price: "$320", desc: "Hike through the night, reach the summit for sunrise, witness the world wake up beneath you. Challenging and utterly unforgettable." }
];

const culinary = [
  { image: "/anna-tukhfatullina-food-photographer-stylist-Mzy-OjtCI70-unsplash.jpg", title: "Market to Table Cooking Class", time: "5 hours", price: "$180", desc: "Shop with our chef at the local market, learn to cook regional specialties, then feast on your creations." },
  { image: "/jojo-yuen-sharemyfoodd-8GZdxgujdbY-unsplash.jpg", title: "Wine & Dine Experience", time: "4 hours", price: "$350", desc: "Private tasting in our cellar with our sommelier, followed by a paired dinner at The Azure." },
  { image: "/blog-img-4.jpg", title: "Chef's Table Experience", time: "3 hours", price: "$450", desc: "Sit in the kitchen. Watch the magic. Eat what the chef creates just for you. Ten courses of pure inspiration." }
];

const romance = [
  { title: "Proposal Package", meta: "$3,500", desc: "We handle everything: the ring hidden in champagne, the private beach setup, the photographer hiding in the bushes, the violinist appearing at the perfect moment. She will say yes." },
  { title: "Anniversary Celebration", meta: "$1,200", desc: "Private dinner on the beach, personalized menu, live music, fireworks finale. Because love deserves celebration." },
  { title: "Honeymoon Experience", meta: "7 nights | Contact for pricing", desc: "Complete honeymoon curation: romantic suite, couples' spa journey, private excursions, and surprises throughout your stay." }
];

export default function ExperiencesPage() {
  return (
    <div className="bg-cream min-h-screen">
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image src="/devon-janse-van-rensburg-_WEDFTZV0qU-unsplash.jpg" alt="Experiences" fill priority className="object-cover z-0" />
        <div className="absolute inset-0 bg-navy/60 z-10"></div>
        <div className="relative z-20 text-center max-w-3xl px-4 mt-20">
          <span className="text-gold tracking-[0.2em] uppercase text-xs font-semibold mb-4 block">Discover</span>
          <h1 className="text-white text-4xl md:text-6xl font-serif mb-6">Beyond the Ordinary</h1>
          <p className="text-white/80 font-light text-lg">The Grand Horizon isn&apos;t just where you stay—it&apos;s where adventure begins.</p>
        </div>
      </section>

      <div className="bg-white border-b border-navy/10 py-4">
        <div className="container-custom">
          <div className="text-[0.65rem] uppercase tracking-widest text-charcoal/60 font-semibold gap-2 flex items-center">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-navy">Experiences</span>
          </div>
        </div>
      </div>

      <ExperienceSection 
        title="Discover the Culture" 
        label="Local Excursions" 
        subtitle="Immerse yourself in the rich history and vibrant culture of our region."
        items={localExcursions}
      />

      <ExperienceSection 
        title="Push Your Boundaries" 
        label="Adventure" 
        subtitle="Thrilling experiences for the bold and adventurous."
        items={adventure}
      />

      <ExperienceSection 
        title="Taste the World" 
        label="Culinary" 
        subtitle="Intimate food experiences that delight every sense."
        items={culinary}
      />

      <section className="section-padding bg-navy">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="section-label !text-gold">Romance</span>
            <h3 className="text-4xl md:text-5xl font-serif text-white mb-4">Celebrate Love</h3>
            <p className="text-white/60">Create unforgettable moments with the one you love.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {romance.map((item, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors flex flex-col h-full">
                   <h4 className="text-2xl font-serif text-white mb-4">{item.title}</h4>
                   <div className="text-gold text-xs uppercase tracking-widest font-semibold mb-6 pb-6 border-b border-white/10">{item.meta}</div>
                   <p className="text-white/60 font-light leading-relaxed mb-8">{item.desc}</p>
                   <Link href="/contact" className="inline-flex items-center text-white text-xs uppercase tracking-widest font-semibold hover:text-gold transition-colors mt-auto">
                     Inquire Now <ArrowRight className="w-4 h-4 ml-2" />
                   </Link>
                </div>
             ))}
          </div>
        </div>
      </section>

    </div>
  );
}

interface ExperienceItem {
  image: string;
  title: string;
  time: string;
  price: string;
  desc: string;
}

function ExperienceSection({ title, label, subtitle, items }: { title: string, label: string, subtitle: string, items: ExperienceItem[] }) {
  return (
    <section className="section-padding border-b border-black/5 last:border-0 odd:bg-white even:bg-cream">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="section-label">{label}</span>
          <h3 className="text-4xl md:text-5xl font-serif text-navy mb-4">{title}</h3>
          <p className="text-charcoal/70">{subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {items.map((item, idx) => (
              <div key={idx} className="bg-white border border-black/5 group overflow-hidden flex flex-col">
                 <div className="relative h-64 overflow-hidden">
                    <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                 </div>
                 <div className="p-8 flex flex-col flex-grow">
                    <h4 className="text-xl font-serif text-navy mb-4">{item.title}</h4>
                    <div className="flex justify-between items-center text-[0.65rem] uppercase tracking-widest text-charcoal/60 font-semibold mb-6 border-b border-black/5 pb-4">
                       <span>{item.time}</span>
                       <span className="text-gold">{item.price}</span>
                    </div>
                    <p className="text-charcoal/70 font-light text-sm leading-relaxed mb-8 flex-grow">{item.desc}</p>
                    <Link href="/contact" className="inline-flex items-center text-navy text-xs uppercase tracking-widest font-semibold hover:text-gold transition-colors">
                      Book Experience <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                 </div>
              </div>
           ))}
        </div>
      </div>
    </section>
  );
}
