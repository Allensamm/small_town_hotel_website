export default function ContactPreview() {
  return (
    <section className="section-padding bg-white" id="contact">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="section-label">Get in Touch</span>
            <h3 className="text-4xl font-serif text-navy mb-10">We&apos;re Here For You</h3>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-serif text-navy mb-2">Address</h4>
                <p className="text-charcoal/70 leading-relaxed font-light">The Grand Horizon Hotel<br/>123 Oceanfront Boulevard<br/>Paradise Bay, Coastal Region 00100</p>
              </div>
              
              <div>
                <h4 className="text-lg font-serif text-navy mb-2">Reservations</h4>
                <p className="text-charcoal/70 leading-relaxed font-light"><a href="tel:+18005554726" className="hover:text-gold transition-colors">+1 (800) 555-GRAND (47263)</a></p>
                <p className="text-charcoal/70 leading-relaxed font-light"><a href="mailto:reservations@grandhorizon.com" className="hover:text-gold transition-colors">reservations@grandhorizon.com</a></p>
              </div>
              
              <div>
                <h4 className="text-lg font-serif text-navy mb-2">General Inquiries</h4>
                <p className="text-charcoal/70 leading-relaxed font-light"><a href="tel:+15551234567" className="hover:text-gold transition-colors">+1 (555) 123-4567</a></p>
                <p className="text-charcoal/70 leading-relaxed font-light"><a href="mailto:hello@grandhorizon.com" className="hover:text-gold transition-colors">hello@grandhorizon.com</a></p>
              </div>
            </div>
          </div>

          <div className="bg-cream p-8 md:p-12">
            <h3 className="text-3xl font-serif text-navy mb-8">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs uppercase tracking-widest text-navy/70 font-semibold">Your Name</label>
                  <input type="text" id="name" className="bg-transparent border-b border-navy/20 py-2 focus:outline-none focus:border-gold transition-colors placeholder:text-black/20" placeholder="John Smith" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs uppercase tracking-widest text-navy/70 font-semibold">Your Email</label>
                  <input type="email" id="email" className="bg-transparent border-b border-navy/20 py-2 focus:outline-none focus:border-gold transition-colors placeholder:text-black/20" placeholder="john@example.com" />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-xs uppercase tracking-widest text-navy/70 font-semibold">Subject</label>
                <select id="subject" className="bg-transparent border-b border-navy/20 py-2 focus:outline-none focus:border-gold transition-colors text-charcoal">
                  <option value="">Select a subject</option>
                  <option value="reservations">Reservations</option>
                  <option value="events">Events & Weddings</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs uppercase tracking-widest text-navy/70 font-semibold">Message</label>
                <textarea id="message" rows={4} className="bg-transparent border-b border-navy/20 py-2 focus:outline-none focus:border-gold transition-colors placeholder:text-black/20 resize-none" placeholder="How can we help you?"></textarea>
              </div>

              <button type="submit" className="btn-primary w-full sm:w-auto mt-4">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
