// components/Navbar.tsx
"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
 import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            {/* Update with exact logo markup/image if available */}
         

<Link href="/" className="flex items-center gap-2">
<Image src="/logo.jpg" alt="Lancer Paints" width={40} height={40} />
  <span className="font-bold text-lg text-gray-800">
    Lancer Paints
  </span>
</Link>  
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            {['Home', 'Products', 'Colors', 'About Us', 'Contact'].map((item) => (
              <Link 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group py-2"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>
          
          <div className="hidden md:flex">
            <button className="bg-gray-900 hover:bg-black text-white px-6 py-2.5 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              Get a Quote
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
