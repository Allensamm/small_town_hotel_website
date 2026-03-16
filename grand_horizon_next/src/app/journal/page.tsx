import Image from "next/image";
import Link from "next/link";
export const metadata = {
  title: "Journal | The Grand Horizon Hotel",
};

const posts = [
  {
    category: "Wellness",
    title: "A Season of Renewal: Our New Wellness Program",
    desc: "This spring, The Serenity Spa introduces a transformative wellness program combining ancient healing traditions with cutting-edge science. Discover personalized wellness journeys designed to restore body, mind, and spirit.",
    author: "Dr. Lena Fischer",
    initials: "DL",
    date: "March 12, 2025",
    image: "/blog-img-5.jpg",
    featured: true
  },
  {
    category: "Culinary",
    title: "Behind the Pass: A Night with Chef Moreau",
    desc: "An exclusive look inside The Azure kitchen as Chef Isabella Moreau prepares her new spring tasting menu.",
    author: "Marcus Sterling",
    initials: "MS",
    date: "March 5, 2025",
    image: "/anna-tukhfatullina-food-photographer-stylist-Mzy-OjtCI70-unsplash.jpg",
    featured: false
  },
  {
    category: "Exploration",
    title: "5 Secret Gardens Within Walking Distance",
    desc: "Our concierge reveals hidden botanical gems that most visitors never discover.",
    author: "Amara Koné",
    initials: "AK",
    date: "Feb 28, 2025",
    image: "/chastity-cortijo-M8iGdeTSOkg-unsplash.jpg",
    featured: false
  },
  {
    category: "Architecture",
    title: "The Design Philosophy of The Grand Horizon",
    desc: "How three decades of evolution created one of the world's most admired hotel designs.",
    author: "James Archer",
    initials: "JA",
    date: "Feb 20, 2025",
    image: "/blog-img-1.jpg",
    featured: false
  },
  {
    category: "Lifestyle",
    title: "The Mixology Master Class",
    desc: "Learn to craft the signature cocktails of Horizon Lounge from our head bartender.",
    author: "Ravi Patel",
    initials: "RP",
    date: "Feb 14, 2025",
    image: "/blog-img-4.jpg",
    featured: false
  },
  {
    category: "Sustainability",
    title: "Our Journey to Carbon Neutrality",
    desc: "Progress report: How we're reducing our environmental footprint while enhancing guest experiences.",
    author: "Elena Ashworth",
    initials: "EA",
    date: "Feb 10, 2025",
    image: "/blog-img-3.jpg",
    featured: false
  },
  {
    category: "Travel Guide",
    title: "The Ultimate Sunset Watching Guide",
    desc: "Seven perfect viewpoints for the region's most spectacular sunsets, from rooftop bars to hidden clifftops.",
    author: "Tom Chen",
    initials: "TC",
    date: "Feb 3, 2025",
    image: "/devon-janse-van-rensburg-_WEDFTZV0qU-unsplash.jpg",
    featured: false
  },
  {
    category: "Events",
    title: "Real Wedding: Sarah & James's Beachfront Ceremony",
    desc: "A fairytale celebration where every detail was perfected — from the flower path to the sunset vows.",
    author: "Laura Miller",
    initials: "LM",
    date: "Jan 28, 2025",
    image: "/blog-img-6.jpg",
    featured: false
  }
];

export default function JournalPage() {
  return (
    <div className="bg-cream min-h-screen">
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <Image src="/blog-img-2.jpg" alt="The Grand Horizon Journal" fill priority className="object-cover z-0" />
        <div className="absolute inset-0 bg-navy/60 z-10"></div>
        <div className="relative z-20 text-center max-w-3xl px-4 mt-20">
          <span className="text-gold tracking-[0.2em] uppercase text-xs font-semibold mb-4 block">Stories & Insights</span>
          <h1 className="text-white text-4xl md:text-6xl font-serif mb-6">The Horizon Journal</h1>
          <p className="text-white/80 font-light text-lg">Curated stories, travel guides, and behind-the-scenes moments from our world.</p>
        </div>
      </section>

      <div className="bg-white border-b border-navy/10 py-4">
        <div className="container-custom">
          <div className="text-[0.65rem] uppercase tracking-widest text-charcoal/60 font-semibold gap-2 flex items-center">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-navy">Journal</span>
          </div>
        </div>
      </div>

      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
             {posts.map((post, idx) => (
               <div key={idx} className={`bg-white border border-black/5 flex flex-col group overflow-hidden ${post.featured ? 'md:col-span-2 lg:col-span-2' : ''}`}>
                 <div className={`relative w-full overflow-hidden ${post.featured ? 'h-80 md:h-[450px]' : 'h-64'}`}>
                    <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                 </div>
                 <div className="p-8 flex flex-col flex-grow">
                    <span className="text-gold text-[0.65rem] uppercase tracking-widest font-semibold mb-4 block">{post.category}</span>
                    <h3 className={`font-serif text-navy mb-4 ${post.featured ? 'text-3xl lg:text-4xl' : 'text-xl'} hover:text-gold transition-colors cursor-pointer`}>
                      <Link href="#">{post.title}</Link>
                    </h3>
                    <p className="text-charcoal/70 font-light text-sm leading-relaxed mb-8 flex-grow">
                      {post.desc}
                    </p>
                    <div className="flex justify-between items-center border-t border-black/5 pt-6 mt-auto">
                       <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-cream text-navy/40 flex items-center justify-center text-[0.6rem] font-semibold border border-black/5 uppercase tracking-widest">{post.initials}</div>
                          <span className="text-xs font-semibold text-navy uppercase tracking-widest">{post.author}</span>
                       </div>
                       <span className="text-xs text-charcoal/50 italic font-light">{post.date}</span>
                    </div>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
}
