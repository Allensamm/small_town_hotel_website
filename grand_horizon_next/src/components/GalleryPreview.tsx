import Image from "next/image";
import Link from "next/link";
import { Maximize2, ArrowRight } from "lucide-react";

export default function GalleryPreview() {
  const images = [
    { src: "/hotel-hero.png", alt: "Hotel exterior at twilight" },
    { src: "/room-deluxe.png", alt: "Deluxe room interior" },
    { src: "/anna-tukhfatullina-food-photographer-stylist-Mzy-OjtCI70-unsplash.jpg", alt: "Fine dining cuisine" },
    { src: "/jen-p-_7FriM3D0iw-unsplash.jpg", alt: "Spa and wellness" },
    { src: "/chastity-cortijo-M8iGdeTSOkg-unsplash.jpg", alt: "Hotel pool area" }
  ];

  return (
    <section className="section-padding bg-navy" id="gallery">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <span className="section-label">Gallery</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">Capturing the Essence</h2>
          </div>
          <Link href="/gallery" className="inline-flex items-center text-gold text-xs uppercase tracking-widest font-semibold hover:text-white transition-colors">
            View Full Gallery
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>

        <div className="flex overflow-x-auto gap-4 md:gap-6 pb-8 snap-x scrollbar-hide">
          {images.map((img, idx) => (
            <div 
              key={idx} 
              className={`relative flex-none snap-center group overflow-hidden cursor-pointer ${
                idx === 0 ? 'w-[80vw] md:w-[60%]' : 'w-[70vw] md:w-[40%]'
              } h-[400px] md:h-[500px]`}
            >
              <Image 
                src={img.src} 
                alt={img.alt} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-navy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
                <Maximize2 className="text-white w-8 h-8 opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-300 delay-100" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
