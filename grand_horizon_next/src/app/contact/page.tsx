import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata = {
  title: "Contact | The Grand Horizon Hotel",
};

export default function ContactPage() {
  return (
    <div className="bg-cream min-h-screen">
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <Image src="/contact-bg.jpg" alt="Contact The Grand Horizon" fill priority className="object-cover z-0" />
        <div className="absolute inset-0 bg-navy/60 z-10"></div>
        <div className="relative z-20 text-center max-w-3xl px-4 mt-20">
          <span className="text-gold tracking-[0.2em] uppercase text-xs font-semibold mb-4 block">Get In Touch</span>
          <h1 className="text-white text-4xl md:text-6xl font-serif mb-6">Contact Us</h1>
          <p className="text-white/80 font-light text-lg">We&apos;d love to hear from you. Reach out for reservations, inquiries, or simply say hello.</p>
        </div>
      </section>

      <div className="bg-white border-b border-navy/10 py-4">
        <div className="container-custom">
          <div className="text-[0.65rem] uppercase tracking-widest text-charcoal/60 font-semibold gap-2 flex items-center">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-navy">Contact</span>
          </div>
        </div>
      </div>

      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 items-start">
            
            <div>
              <span className="section-label">Reach Us</span>
              <h2 className="text-4xl font-serif text-navy mb-6">We&apos;re Here to Help</h2>
              <p className="text-charcoal/70 font-light leading-relaxed mb-10">Whether you&apos;re planning a getaway, need assistance with reservations, or simply want to learn more about The Grand Horizon—our dedicated team is available around the clock.</p>

              <div className="flex flex-col gap-8 mb-12">
                <div className="flex gap-4 items-start">
                  <MapPin className="text-gold w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-serif text-navy text-lg mb-1">Address</h4>
                    <p className="text-charcoal/70 font-light text-sm">1 Horizon Boulevard<br/>Oceanfront District<br/>Coastal City, CC 10001</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <Phone className="text-gold w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-serif text-navy text-lg mb-1">Phone</h4>
                    <p className="text-charcoal/70 font-light text-sm">Reservations: <a href="tel:+18005554726" className="text-gold hover:text-navy transition-colors">+1 (800) 555-GRAND</a><br/>General: <a href="tel:+18005550100" className="text-gold hover:text-navy transition-colors">+1 (800) 555-0100</a></p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <Mail className="text-gold w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-serif text-navy text-lg mb-1">Email</h4>
                    <p className="text-charcoal/70 font-light text-sm">Reservations: <a href="mailto:reservations@grandhorizon.com" className="text-gold hover:text-navy transition-colors">reservations@grandhorizon.com</a><br/>General: <a href="mailto:hello@grandhorizon.com" className="text-gold hover:text-navy transition-colors">hello@grandhorizon.com</a><br/>Events: <a href="mailto:events@grandhorizon.com" className="text-gold hover:text-navy transition-colors">events@grandhorizon.com</a></p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <Clock className="text-gold w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-serif text-navy text-lg mb-1">Hours</h4>
                    <p className="text-charcoal/70 font-light text-sm">Front Desk: 24/7<br/>Reservations: 8:00 AM – 10:00 PM<br/>Concierge: 24/7</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-serif text-navy text-xl mb-3">Airport Transfers</h4>
                <p className="text-charcoal/70 font-light text-sm mb-2">Complimentary luxury sedan transfer for suite bookings. Our driver will meet you at arrivals with a personalized welcome sign.</p>
                <p className="text-charcoal/70 font-light text-sm font-semibold">Standard transfer: $75 one-way | Helicopter: $950 one-way</p>
              </div>
            </div>

            <div className="bg-white p-8 md:p-12 border border-black/5">
              <h3 className="text-3xl font-serif text-navy mb-4">Send Us a Message</h3>
              <p className="text-charcoal/70 font-light text-sm mb-8">Fill out the form below and our team will respond within 24 hours.</p>
              
              <form className="space-y-6">
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                       <label htmlFor="ctFirstName" className="text-[0.65rem] uppercase tracking-widest text-navy/70 font-semibold">First Name</label>
                       <input type="text" id="ctFirstName" required placeholder="John" className="bg-transparent border-b border-navy/20 py-2 focus:outline-none focus:border-gold transition-colors placeholder:text-black/20" />
                    </div>
                    <div className="flex flex-col gap-2">
                       <label htmlFor="ctLastName" className="text-[0.65rem] uppercase tracking-widest text-navy/70 font-semibold">Last Name</label>
                       <input type="text" id="ctLastName" required placeholder="Smith" className="bg-transparent border-b border-navy/20 py-2 focus:outline-none focus:border-gold transition-colors placeholder:text-black/20" />
                    </div>
                 </div>

                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                       <label htmlFor="ctEmail" className="text-[0.65rem] uppercase tracking-widest text-navy/70 font-semibold">Email</label>
                       <input type="email" id="ctEmail" required placeholder="john@example.com" className="bg-transparent border-b border-navy/20 py-2 focus:outline-none focus:border-gold transition-colors placeholder:text-black/20" />
                    </div>
                    <div className="flex flex-col gap-2">
                       <label htmlFor="ctPhone" className="text-[0.65rem] uppercase tracking-widest text-navy/70 font-semibold">Phone</label>
                       <input type="tel" id="ctPhone" placeholder="+1 (555) 000-0000" className="bg-transparent border-b border-navy/20 py-2 focus:outline-none focus:border-gold transition-colors placeholder:text-black/20" />
                    </div>
                 </div>

                 <div className="flex flex-col gap-2">
                    <label htmlFor="ctSubject" className="text-[0.65rem] uppercase tracking-widest text-navy/70 font-semibold">Subject</label>
                    <select id="ctSubject" className="bg-transparent border-b border-navy/20 py-2 focus:outline-none focus:border-gold transition-colors text-charcoal">
                       <option value="">Select a topic</option>
                       <option value="room">Room Reservation</option>
                       <option value="dining">Dining Reservation</option>
                       <option value="spa">Spa Booking</option>
                       <option value="event">Event Inquiry</option>
                       <option value="wedding">Wedding Inquiry</option>
                       <option value="general">General Question</option>
                       <option value="feedback">Feedback</option>
                    </select>
                 </div>

                 <div className="flex flex-col gap-2">
                    <label htmlFor="ctMessage" className="text-[0.65rem] uppercase tracking-widest text-navy/70 font-semibold">Message</label>
                    <textarea id="ctMessage" rows={5} required placeholder="Tell us how we can help..." className="bg-transparent border-b border-navy/20 py-2 focus:outline-none focus:border-gold transition-colors placeholder:text-black/20 resize-none"></textarea>
                 </div>

                 <button type="submit" className="btn-primary w-full justify-center">
                    Send Message
                 </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      <div className="bg-navy-light py-20 text-center">
         <MapPin className="text-gold w-12 h-12 mx-auto mb-4" />
         <p className="text-white/50 text-sm mb-2 font-light italic">Interactive map would be integrated here via Google Maps API</p>
         <p className="text-gold text-sm uppercase tracking-widest font-semibold">1 Horizon Boulevard, Oceanfront District</p>
      </div>

    </div>
  );
}
