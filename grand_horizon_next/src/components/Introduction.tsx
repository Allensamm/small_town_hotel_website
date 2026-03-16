import Link from "next/link";
import Image from "next/image";

export default function Introduction() {
  return (
    <section className="intro-section section-padding" id="about">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[600px] w-full rounded-sm overflow-hidden group">
            <Image 
              src="/about-img-1.jpg" 
              alt="The Grand Horizon Hotel grand lobby"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute top-8 -right-8 w-1/2 h-full border border-gold opacity-50 z-[-1] hidden lg:block"></div>
          </div>
          
          <div className="flex flex-col justify-center">
            <span className="section-label">Welcome to The Grand Horizon</span>
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-8 leading-tight">
              A Legacy of Extraordinary Hospitality
            </h2>
            <p className="text-charcoal/80 font-light leading-relaxed mb-6">
              Nestled along the pristine coastline where azure waters kiss golden sands, The Grand Horizon has been the destination of choice for discerning travelers since 1987. Every corner of our sanctuary has been thoughtfully designed to transport you to a world where time slows down, worries fade away, and every desire is anticipated before it&apos;s spoken.
            </p>
            <p className="text-charcoal/80 font-light leading-relaxed mb-10">
              This isn&apos;t merely a hotel—it&apos;s where your most cherished memories are waiting to be made.
            </p>
            <Link href="/about" className="inline-flex items-center text-gold font-medium uppercase tracking-widest text-xs hover:text-gold-dark transition-colors w-max group">
              Discover Our Story
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-2 transform group-hover:translate-x-1 transition-transform">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
