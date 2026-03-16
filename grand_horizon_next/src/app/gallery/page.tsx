'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Maximize2 } from "lucide-react";

const galleryItems = [
  { category: "grounds", src: "/hotel-hero.png", alt: "Hotel exterior at twilight", label: "Exterior", wide: true },
  { category: "rooms", src: "/room-deluxe.png", alt: "Deluxe Room", label: "Deluxe Room" },
  { category: "rooms", src: "/room-premium-suite.png", alt: "Premium Suite", label: "Premium Suite" },
  { category: "dining", src: "/anna-tukhfatullina-food-photographer-stylist-Mzy-OjtCI70-unsplash.jpg", alt: "Fine Dining", label: "The Azure", wide: true },
  { category: "rooms", src: "/room-executive.png", alt: "Executive Suite", label: "Executive Suite" },
  { category: "rooms", src: "/collov-home-design-MopQfWaJFiw-unsplash.jpg", alt: "Design Interior", label: "Interior Design" },
  { category: "rooms", src: "/r-architecture-HQCW1gTMjek-unsplash.jpg", alt: "Architecture", label: "Architecture" },
  { category: "spa", src: "/jen-p-_7FriM3D0iw-unsplash.jpg", alt: "The Serenity Spa", label: "Serenity Spa", wide: true },
  { category: "dining", src: "/jojo-yuen-sharemyfoodd-8GZdxgujdbY-unsplash.jpg", alt: "Dining Experience", label: "Cuisine" },
  { category: "grounds", src: "/chastity-cortijo-M8iGdeTSOkg-unsplash.jpg", alt: "Grounds", label: "Gardens" },
  { category: "grounds", src: "/devon-janse-van-rensburg-_WEDFTZV0qU-unsplash.jpg", alt: "Resort Views", label: "Resort Views" },
  { category: "dining", src: "/josh-mclove-85kUBzS2V3g-unsplash.jpg", alt: "Restaurant Interior", label: "Sakura" },
  { category: "grounds", src: "/kam-idris-kyt0PkBSCNQ-unsplash.jpg", alt: "Pool Area", label: "Pool Terrace" },
  { category: "rooms", src: "/about-img-1.jpg", alt: "Lobby", label: "Grand Lobby" }
];

export default function GalleryPage() {
  const [filter, setFilter] = useState("all");
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const filteredItems = filter === "all" ? galleryItems : galleryItems.filter(item => item.category === filter);

  return (
    <div className="bg-cream min-h-screen">
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image src="/hotel-hero.png" alt="The Grand Horizon Hotel" fill priority className="object-cover z-0" />
        <div className="absolute inset-0 bg-navy/60 z-10"></div>
        <div className="relative z-20 text-center max-w-3xl px-4 mt-20">
          <span className="text-gold tracking-[0.2em] uppercase text-xs font-semibold mb-4 block">Visual Journey</span>
          <h1 className="text-white text-4xl md:text-6xl font-serif mb-6">Gallery</h1>
          <p className="text-white/80 font-light text-lg">Explore The Grand Horizon through the lens. Every image tells a story of luxury, beauty, and unforgettable moments.</p>
        </div>
      </section>

      <div className="bg-white border-b border-navy/10 py-4">
        <div className="container-custom">
          <div className="text-[0.65rem] uppercase tracking-widest text-charcoal/60 font-semibold gap-2 flex items-center">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-navy">Gallery</span>
          </div>
        </div>
      </div>

      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
             {[
               { id: "all", label: "All" },
               { id: "rooms", label: "Rooms & Suites" },
               { id: "dining", label: "Dining" },
               { id: "spa", label: "Spa & Wellness" },
               { id: "grounds", label: "Grounds & Pool" }
             ].map((f) => (
                <button 
                  key={f.id}
                  onClick={() => setFilter(f.id)}
                  className={`px-6 py-2 rounded-full text-xs uppercase tracking-widest font-semibold transition-colors duration-300 ${
                    filter === f.id ? 'bg-navy text-white' : 'bg-white text-charcoal/60 hover:bg-gold hover:text-white border border-black/5'
                  }`}
                >
                  {f.label}
                </button>
             ))}
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
             {filteredItems.map((item, idx) => (
                <div 
                  key={idx} 
                  className="relative group overflow-hidden break-inside-avoid cursor-pointer animate-fade-in-up"
                  onClick={() => setLightboxImg(item.src)}
                >
                   <Image 
                     src={item.src} 
                     alt={item.alt} 
                     width={800} height={item.wide ? 600 : 800} 
                     className="w-full object-cover transition-transform duration-700 group-hover:scale-105" 
                   />
                   <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                      <Maximize2 className="text-white w-8 h-8 mb-4 opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-300 delay-100" />
                      <span className="text-white font-serif text-lg opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">{item.label}</span>
                   </div>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImg && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 md:p-12 animate-fade-in" onClick={() => setLightboxImg(null)}>
           <button 
             onClick={() => setLightboxImg(null)} 
             className="absolute top-6 right-6 text-white text-4xl hover:text-gold transition-colors z-[60]"
           >
              &times;
           </button>
           <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              <Image 
                src={lightboxImg} 
                alt="Enlarged gallery image" 
                fill 
                className="object-contain" 
              />
           </div>
        </div>
      )}
    </div>
  );
}
