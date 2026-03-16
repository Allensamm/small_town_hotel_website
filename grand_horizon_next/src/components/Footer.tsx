import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-navy text-white pt-24 pb-8 border-t-[6px] border-gold">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="font-serif text-2xl leading-none text-white mb-2">The Grand Horizon</div>
            <p className="text-sm text-white/50 mb-6 font-serif italic">Where Every Moment Becomes a Memory.</p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 border border-white/10 rounded flex justify-center items-center hover:bg-gold hover:border-gold transition-colors text-white">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 border border-white/10 rounded flex justify-center items-center hover:bg-gold hover:border-gold transition-colors text-white">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/></svg>
              </a>
            </div>
          </div>

          <div className="flex flex-col space-y-3">
            <h4 className="text-white text-lg font-serif mb-2">Quick Links</h4>
            <Link href="/rooms" className="text-white/60 hover:text-gold transition-colors text-sm">Rooms & Suites</Link>
            <Link href="/dining" className="text-white/60 hover:text-gold transition-colors text-sm">Dining</Link>
            <Link href="/spa" className="text-white/60 hover:text-gold transition-colors text-sm">Spa & Wellness</Link>
            <Link href="/experiences" className="text-white/60 hover:text-gold transition-colors text-sm">Experiences</Link>
            <Link href="/events" className="text-white/60 hover:text-gold transition-colors text-sm">Events & Weddings</Link>
            <Link href="/gallery" className="text-white/60 hover:text-gold transition-colors text-sm">Gallery</Link>
          </div>

          <div className="flex flex-col space-y-3">
            <h4 className="text-white text-lg font-serif mb-2">Hotel Info</h4>
            <Link href="/about" className="text-white/60 hover:text-gold transition-colors text-sm">About Us</Link>
            <Link href="/journal" className="text-white/60 hover:text-gold transition-colors text-sm">Journal</Link>
            <Link href="/about#sustainability" className="text-white/60 hover:text-gold transition-colors text-sm">Sustainability</Link>
            <Link href="/faq" className="text-white/60 hover:text-gold transition-colors text-sm">FAQs</Link>
            <Link href="/contact" className="text-white/60 hover:text-gold transition-colors text-sm">Contact</Link>
            <Link href="#" className="text-white/60 hover:text-gold transition-colors text-sm">Gift Cards</Link>
          </div>

          <div className="flex flex-col space-y-3">
            <h4 className="text-white text-lg font-serif mb-2">Contact</h4>
            <a href="tel:+18005554726" className="text-white/60 hover:text-gold transition-colors text-sm">+1 (800) 555-GRAND</a>
            <a href="mailto:hello@grandhorizon.com" className="text-white/60 hover:text-gold transition-colors text-sm">hello@grandhorizon.com</a>
            <span className="text-white/60 text-sm mt-2 block">123 Oceanfront Blvd<br/>Paradise Bay</span>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs text-center md:text-left">&copy; {new Date().getFullYear()} The Grand Horizon Hotel. All rights reserved.</p>
          <div className="flex gap-4 md:gap-6 text-xs text-gold uppercase tracking-widest text-center">
            <span>★ Condé Nast Gold List</span>
            <span className="hidden sm:inline">★ Forbes Five-Star</span>
            <span className="hidden md:inline">★ Green Globe Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
