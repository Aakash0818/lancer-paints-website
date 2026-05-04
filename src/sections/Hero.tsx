// components/Hero.tsx
"use client";
import React, { useEffect, useState } from 'react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-50 pt-20">
      {/* Background Gradients & Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-blue-200/50 to-teal-100/50 blur-3xl opacity-70 animate-pulse"></div>
        <div className="absolute top-[20%] -left-[10%] w-[40%] h-[40%] rounded-full bg-gradient-to-tr from-purple-200/40 to-pink-100/40 blur-3xl opacity-60"></div>
        <div className="absolute -bottom-[10%] left-[20%] w-[60%] h-[60%] rounded-full bg-gradient-to-t from-blue-100/60 to-transparent blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1000 transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <span className="inline-block py-1.5 px-4 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold tracking-wider mb-6 uppercase shadow-sm">
            Premium Quality Finishes
          </span>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-8 leading-[1.1]">
            Transform Your Space with <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-teal-500 to-blue-600">
              Lancer Paints
            </span>
          </h1>
          
          <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto mb-10 leading-relaxed">
            Discover a world of vibrant colors and durable finishes for your home and business. Lancer Paints Private Limited brings your vision to life.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold text-lg transition-all duration-300 shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.23)] hover:-translate-y-1">
              Explore Products
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 rounded-full font-bold text-lg transition-all duration-300 border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1">
              View Color Palette
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
