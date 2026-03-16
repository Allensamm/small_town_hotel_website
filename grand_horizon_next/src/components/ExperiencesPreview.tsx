import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ExperiencesPreview() {
  const experiences = [
    {
      title: "The Azure Restaurant",
      category: "Fine Dining",
      description: "Two Michelin stars. A 12-course tasting journey. Floor-to-ceiling ocean views.",
      image: "/anna-tukhfatullina-food-photographer-stylist-Mzy-OjtCI70-unsplash.jpg",
      link: "/dining",
      linkText: "Explore Menu"
    },
    {
      title: "The Serenity Spa",
      category: "Wellness",
      description: "3,000 square meters dedicated to the ancient art of restoration. Enter stressed. Leave transformed.",
      image: "/jen-p-_7FriM3D0iw-unsplash.jpg",
      link: "/spa",
      linkText: "View Treatments"
    },
    {
      title: "Beyond the Ordinary",
      category: "Adventures",
      description: "From helicopter island hopping to private chef's table experiences. Your adventure begins here.",
      image: "/devon-janse-van-rensburg-_WEDFTZV0qU-unsplash.jpg",
      link: "/experiences",
      linkText: "Discover More"
    }
  ];

  return (
    <section className="section-padding bg-white" id="dining">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="section-label">Explore</span>
          <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6">A World of Experiences</h2>
          <p className="max-w-2xl mx-auto text-charcoal/80">
            From award-winning cuisine to transformative wellness, discover everything The Grand Horizon has to offer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 h-full">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative h-[450px] md:h-[550px] group overflow-hidden rounded-sm cursor-pointer">
              <Image 
                src={exp.image}
                alt={exp.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-500 group-hover:opacity-90"></div>
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-gold tracking-widest text-[0.65rem] uppercase font-semibold mb-3">{exp.category}</span>
                <h3 className="text-white text-3xl font-serif mb-4">{exp.title}</h3>
                <p className="text-white/80 text-sm font-light leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {exp.description}
                </p>
                <Link href={exp.link} className="inline-flex items-center text-white text-xs uppercase tracking-widest font-semibold hover:text-gold transition-colors w-max">
                  {exp.linkText}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
