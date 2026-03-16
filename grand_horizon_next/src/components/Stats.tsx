'use client';
import { useEffect, useRef, useState } from 'react';

function AnimatedCounter({ target, suffix = "" }: { target: number, suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        let start = 0;
        const duration = 2000;
        const stepTime = Math.abs(Math.floor(duration / target));
        const timer = setInterval(() => {
          start += 1;
          setCount(start);
          if (start >= target) clearInterval(timer);
        }, stepTime);
        observer.disconnect();
      }
    });
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-5xl md:text-7xl font-serif text-white mb-4">
      {count}<span className="text-gold">{suffix}</span>
    </div>
  );
}

export default function Stats() {
  const stats = [
    { target: 37, suffix: "+", label: "Years of Excellence" },
    { target: 287, suffix: "", label: "Rooms & Suites" },
    { target: 17, suffix: "", label: "Culinary Awards" },
    { target: 98, suffix: "%", label: "Guest Satisfaction" },
  ];

  return (
    <section className="bg-navy section-padding text-center">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <AnimatedCounter target={stat.target} suffix={stat.suffix} />
              <div className="text-white/60 tracking-widest uppercase text-xs font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
