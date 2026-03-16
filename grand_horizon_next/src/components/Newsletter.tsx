export default function Newsletter() {
  return (
    <section className="py-24 md:py-32 bg-cream text-center relative overflow-hidden" id="newsletter">
      <div className="absolute top-0 right-0 w-64 h-64 border border-gold opacity-10 rounded-full translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 border border-gold opacity-10 rounded-full -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container-custom relative z-10 max-w-3xl">
        <span className="text-gold tracking-[0.2em] uppercase text-xs font-semibold mb-4 block">Exclusive Access</span>
        <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6">Join the Inner Circle</h2>
        <p className="text-charcoal/80 mb-10 text-lg leading-relaxed">
          Be the first to receive exclusive offers, insider travel tips, and invitations to members-only events.
        </p>
        
        <form className="flex flex-col sm:flex-row max-w-xl mx-auto border-b border-navy/30 pb-2 focus-within:border-navy transition-colors">
          <input 
            type="email" 
            placeholder="Enter your email address" 
            required 
            aria-label="Email address"
            className="flex-grow bg-transparent border-none outline-none text-navy placeholder:text-charcoal/40 py-3 sm:py-0 px-2"
          />
          <button 
            type="submit" 
            className="text-navy uppercase tracking-widest text-xs font-semibold hover:text-gold transition-colors py-3 sm:py-0 px-4"
          >
            Subscribe
          </button>
        </form>
        <p className="text-[0.65rem] text-charcoal/50 mt-6 uppercase tracking-wider">We respect your privacy. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}
