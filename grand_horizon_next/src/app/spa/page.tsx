import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Spa & Wellness | The Grand Horizon Hotel",
};

const signatureTreatments = [
  {
    name: "Grand Horizon Journey",
    duration: "180 min",
    price: 450,
    desc: "Our most comprehensive experience begins with a traditional hammam ritual, continues with a full-body massage using warm volcanic stones, and concludes with a rejuvenating facial using marine-based products."
  },
  {
    name: "Ocean Dreams Massage",
    duration: "90 min",
    price: 220,
    desc: "Inspired by the rhythm of the waves, this flowing massage uses long, hypnotic strokes and warm oil infused with marine algae. The ocean's healing power, channeled through expert hands."
  },
  {
    name: "Royal Couple's Retreat",
    duration: "150 min",
    price: 650,
    desc: "Reconnect in our most romantic setting. Private suite, champagne, synchronized massage, facial treatments, and a private bath ritual with rose petals and essential oils."
  },
  {
    name: "Executive Reset",
    duration: "60 min",
    price: 180,
    desc: "Designed for busy professionals, this targeted treatment focuses on tension hotspots—neck, shoulders, lower back, and scalp. Maximum impact, minimum time."
  },
  {
    name: "Balinese Blessing Ritual",
    duration: "120 min",
    price: 320,
    desc: "An authentic Balinese experience: body scrub with indigenous spices, warm coconut oil massage, and a ceremonial hair cream bath. Spiritual cleansing included."
  },
  {
    name: "Anti-Aging Radiance Facial",
    duration: "75 min",
    price: 280,
    desc: "Advanced skincare using marine collagen, vitamin C serums, and LED light therapy. Firming, brightening, and restoring youthful radiance from the very first session."
  }
];

const facilities = [
  { name: "Finnish Sauna", desc: "Traditional dry heat therapy at 85°C for deep detoxification." },
  { name: "Steam Room", desc: "Aromatic steam infused with eucalyptus and peppermint." },
  { name: "Vitality Pool", desc: "Mineral-rich heated pool with hydrotherapy jets." },
  { name: "Cold Plunge", desc: "Invigorating cold water immersion for circulation boost." },
  { name: "Yoga Studio", desc: "Daily classes from sunrise yoga to restorative evening sessions." },
  { name: "Relaxation Lounge", desc: "Ocean-view terrace with heated loungers and herbal teas." },
  { name: "25m Lap Pool", desc: "Temperature-controlled indoor pool for swimming laps." },
  { name: "Private Hammam", desc: "Traditional Turkish bath experience in a private setting." }
];

export default function SpaPage() {
  return (
    <div className="bg-cream min-h-screen">
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image src="/jen-p-_7FriM3D0iw-unsplash.jpg" alt="The Serenity Spa" fill priority className="object-cover z-0" />
        <div className="absolute inset-0 bg-navy/50 z-10"></div>
        <div className="relative z-20 text-center max-w-3xl px-4 mt-20">
          <span className="text-gold tracking-[0.2em] uppercase text-xs font-semibold mb-4 block">Wellness</span>
          <h1 className="text-white text-4xl md:text-6xl font-serif mb-6">The Serenity Spa</h1>
          <p className="text-white/80 font-light text-lg">3,000 square meters dedicated to the ancient art of restoration. Enter stressed. Leave transformed.</p>
        </div>
      </section>

      <div className="bg-white border-b border-navy/10 py-4">
        <div className="container-custom">
          <div className="text-[0.65rem] uppercase tracking-widest text-charcoal/60 font-semibold gap-2 flex items-center">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-navy">Spa & Wellness</span>
          </div>
        </div>
      </div>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] w-full border border-black/5 group overflow-hidden">
               <Image src="/jen-p-_7FriM3D0iw-unsplash.jpg" alt="Spa therapy room" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
            </div>
            <div>
              <span className="section-label">About The Serenity Spa</span>
              <h2 className="text-4xl md:text-5xl font-serif text-navy mb-8">Where Healing Meets Luxury</h2>
              <p className="text-charcoal/80 font-light leading-relaxed mb-6">The Serenity Spa exists at the intersection of ancient wisdom and modern science. Our therapists—trained in traditions from Bali to Bavaria, Thailand to Turkey—don&apos;t simply perform treatments. They read your body, understand your spirit, and craft experiences that address not just muscle tension, but life tension.</p>
              <p className="text-charcoal/80 font-light leading-relaxed mb-10">Flow through our thermal journey—from the warmth of the Finnish sauna to the invigoration of the ice fountain, from the detoxifying steam room to the mineral-rich vitality pool. Then surrender to the healing hands of our master therapists.</p>
              <a href="#treatments" className="inline-flex items-center text-navy text-xs uppercase tracking-widest font-semibold hover:text-gold transition-colors">
                View Treatments <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white" id="treatments">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="section-label">Signature Treatments</span>
            <h2 className="text-4xl md:text-5xl font-serif text-navy">Curated for Your Wellbeing</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {signatureTreatments.map((tr, idx) => (
                <div key={idx} className="bg-cream p-8 border border-black/5 hover:border-gold/30 transition-colors">
                  <h4 className="text-2xl font-serif text-navy mb-4">{tr.name}</h4>
                  <div className="flex justify-between items-center border-b border-black/10 pb-4 mb-4">
                     <span className="text-xs uppercase tracking-widest text-charcoal/60 font-semibold">{tr.duration}</span>
                     <span className="text-lg text-navy font-semibold">${tr.price}</span>
                  </div>
                  <p className="text-charcoal/70 font-light leading-relaxed text-sm">{tr.desc}</p>
                </div>
             ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="section-label">Facilities</span>
            <h2 className="text-4xl md:text-5xl font-serif text-navy">Your Wellness Journey</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
             {facilities.map((fac, idx) => (
               <div key={idx} className="bg-white p-8 border border-black/5 text-center flex flex-col items-center group hover:bg-navy transition-colors duration-300">
                  <div className="w-12 h-12 mb-6 border border-gold/50 rounded-full flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-colors duration-300">
                     <span className="text-xs font-serif italic">{idx + 1}</span>
                  </div>
                  <h4 className="text-xl font-serif text-navy mb-3 group-hover:text-white transition-colors duration-300">{fac.name}</h4>
                  <p className="text-charcoal/60 text-sm font-light leading-relaxed group-hover:text-white/70 transition-colors duration-300">{fac.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy text-center">
        <div className="container-custom max-w-3xl">
          <span className="section-label !text-gold">Spa Etiquette</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">A Sanctuary of Tranquility</h2>
          <p className="text-white/60 text-lg leading-relaxed mb-10 font-light">
            The Serenity Spa is a sanctuary of tranquility. We kindly request that guests speak softly, silence mobile phones, and respect the restorative atmosphere. Arrive 30 minutes before your treatment to enjoy the thermal facilities and begin your relaxation journey.
          </p>
          <Link href="/contact" className="btn-primary">Book a Treatment</Link>
        </div>
      </section>
    </div>
  );
}
