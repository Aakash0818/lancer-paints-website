// components/ColorInspiration.tsx
import React from 'react';

const colors = [
  { name: 'Ocean Depths', hex: '#1e3a8a', class: 'bg-blue-900' },
  { name: 'Serene Teal', hex: '#14b8a6', class: 'bg-teal-500' },
  { name: 'Sunset Coral', hex: '#fb7185', class: 'bg-rose-400' },
  { name: 'Golden Harvest', hex: '#fbbf24', class: 'bg-amber-400' },
  { name: 'Sage Green', hex: '#84a98c', class: 'bg-[#84a98c]' },
  { name: 'Lavender Mist', hex: '#c084fc', class: 'bg-purple-400' },
  { name: 'Charcoal Elegance', hex: '#334155', class: 'bg-slate-700' },
  { name: 'Warm Terracotta', hex: '#ea580c', class: 'bg-orange-600' },
];
export default function ColorInspiration() {
  return (
    <section id="colors" className="py-24 bg-gray-50 overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <h2 className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-3">Color Inspiration</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-[1.15] tracking-tight">
              Find the Perfect Shade for Your Space
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Explore our curated palettes designed to bring emotion and life into every room. From calming neutrals to bold statement colors, Lancer Paints has the perfect match for your vision.
            </p>
            <button className="px-8 py-4 bg-gray-900 hover:bg-black text-white rounded-full font-bold text-lg transition-all shadow-md hover:shadow-xl hover:-translate-y-1">
              Explore All Colors
            </button>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {colors.map((color, index) => (
                <div 
                  key={index} 
                  className="group relative aspect-square rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                >
                  <div className={`absolute inset-0 ${color.class}`}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white font-bold text-sm tracking-wide">{color.name}</p>
                    <p className="text-white/80 text-xs font-mono mt-0.5">{color.hex}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 h-32 rounded-3xl bg-gradient-to-r from-blue-600 via-teal-500 to-rose-400 shadow-lg flex items-center justify-center overflow-hidden relative group">
              <div className="absolute inset-0 bg-white/20 group-hover:bg-white/0 transition-colors duration-500"></div>
              <p className="text-white font-bold text-xl tracking-widest uppercase relative z-10 drop-shadow-md">
                Endless Possibilities
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
