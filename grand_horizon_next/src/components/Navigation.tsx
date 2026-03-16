'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Dining', path: '/dining' },
    { name: 'Spa', path: '/spa' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-navy/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
        }`}
      >
        <div className="container-custom flex justify-between items-center">
          <Link href="/" className="flex flex-col text-white z-50">
            <span className="font-serif text-2xl leading-none">The Grand Horizon</span>
            <span className="text-[0.65rem] tracking-[0.2em] uppercase text-gold/80 pl-1 mt-1">Hotel & Resort</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.path}
                className={`text-sm font-medium tracking-wide uppercase transition-colors ${
                  pathname === link.path ? 'text-gold' : 'text-white/80 hover:text-gold'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/#book" 
              className="bg-gold text-white px-6 py-2.5 text-xs font-semibold uppercase tracking-widest hover:bg-gold-light transition-colors"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden flex flex-col justify-center items-center w-8 h-8 z-50 group"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'rotate-45 translate-y-[6px]' : '-translate-y-1'}`}></span>
            <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ease-in-out ${isMobileMenuOpen ? '-rotate-45 -translate-y-[6px]' : 'translate-y-1'}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      <div 
        className={`fixed inset-0 bg-navy z-40 flex flex-col justify-center items-center transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col space-y-6 text-center">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.path}
              className={`text-2xl font-serif transition-colors ${
                pathname === link.path ? 'text-gold' : 'text-white hover:text-gold'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/#book" 
            className="text-gold uppercase tracking-widest text-sm font-semibold mt-4"
          >
            Book Now
          </Link>
        </div>
      </div>
    </>
  );
}
