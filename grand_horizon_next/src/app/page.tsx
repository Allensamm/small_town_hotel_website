import Image from "next/image";
import BookingBar from "@/components/BookingBar";
import Introduction from "@/components/Introduction";
import RoomsShowcase from "@/components/RoomsShowcase";
import Amenities from "@/components/Amenities";
import ExperiencesPreview from "@/components/ExperiencesPreview";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import GalleryPreview from "@/components/GalleryPreview";
import Newsletter from "@/components/Newsletter";
import ContactPreview from "@/components/ContactPreview";
import FAQSection from "@/components/FAQSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      {/* HERO SECTION */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden" id="home">
        <Image 
          src="/hotel-hero.png" 
          alt="The Grand Horizon Hotel exterior at twilight" 
          fill
          priority
          className="object-cover z-0"
        />
        <div className="absolute inset-0 bg-navy/40 z-10"></div>
        
        <div className="relative z-20 text-center max-w-4xl px-4 mt-20">
          <p className="text-gold tracking-[0.3em] text-xs uppercase font-semibold mb-6">Since 1987 – Five Star Luxury</p>
          <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-tight mb-6">
            Where Luxury Meets <br /> <em className="font-display italic font-light tracking-wide text-white/90">the Horizon</em>
          </h1>
          <p className="text-white/90 font-sans font-light tracking-wide text-lg md:text-xl max-w-2xl mx-auto mb-10">
            An extraordinary escape where timeless elegance, breathtaking views, and impeccable service converge to create moments that last forever.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#book" className="btn-primary">
              Begin Your Journey
            </a>
            <a href="#rooms" className="btn-outline border-white text-white hover:bg-white hover:text-navy">
              Explore Our Rooms
            </a>
          </div>
        </div>
      </section>

      <BookingBar />
      <Introduction />
      <RoomsShowcase />
      <Amenities />
      <ExperiencesPreview />
      <Stats />
      <Testimonials />
      <GalleryPreview />
      <Newsletter />
      <ContactPreview />
      <FAQSection />
    </div>
  );
}


