// components/Products.tsx
import React from 'react';

// Replace images and text with your exact existing product data
const products = [
  {
    id: 1,
    name: 'Interior Primer',
    category: 'Interior Range',
    description: 'High-quality primer for smooth and durable interior finishes.',
    image: '/primer.jpg',
    gradient: 'from-blue-50 to-indigo-50'
  },
  {
    id: 2,
    name: 'Exterior Primer',
    category: 'Exterior Range',
    description: 'Strong protection against weather and moisture.',
    image: '/primer.jpg',
    gradient: 'from-teal-50 to-emerald-50'
  },
  {
    id: 3,
    name: 'Distemper',
    category: 'Economy Range',
    description: 'Affordable and smooth finish paint suitable for interior walls.',
    image: '/distemper.jpg',
    gradient: 'from-yellow-50 to-orange-50'
  },
  {
    id: 4,
    name: 'Cement Paint',
    category: 'Exterior Coating',
    description: 'Durable coating ideal for exterior surfaces with weather resistance.',
    image: '/cement.jpg',
    gradient: 'from-gray-100 to-gray-300'
  },
  {
    id: 5,
    name: 'Wall Putty',
    category: 'Surface Preparation',
    description: 'Provides smooth base and improves paint adhesion.',
    image: '/putty.jpg',
    gradient: 'from-gray-50 to-gray-200'
  },
  {
    id: 6,
    name: 'Oxide Pigments',
    category: 'Color Additives',
    description: 'High-strength oxide pigments for vibrant and long-lasting colors.',
    image: '/oxide.jpg',
    gradient: 'from-red-50 to-orange-50'
  }
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-3">Our Collection</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Discover Our Products
          </h3>
          <p className="text-lg text-gray-500">
            Engineered for perfection, our paints offer unmatched durability, superior coverage, and a flawless finish for every surface.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="group relative bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col overflow-hidden"
            >
              <div className={`relative h-72 w-full bg-gradient-to-br ${product.gradient} p-8 flex items-center justify-center overflow-hidden`}>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500 z-10"></div>
                
                <div className="relative w-48 h-56 rounded-xl overflow-hidden shadow-xl transform group-hover:scale-110 group-hover:-rotate-2 transition-transform duration-700 z-20">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col bg-white z-30">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
                  {product.category}
                </span>
                <h4 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {product.name}
                </h4>
                <p className="text-gray-600 mb-6 flex-1 leading-relaxed">
                  {product.description}
                </p>
                <div className="mt-auto pt-4 border-t border-gray-50">
                  <button className="inline-flex items-center font-semibold text-gray-900 hover:text-blue-600 transition-colors group/btn">
                    View Details
                    <svg className="w-5 h-5 ml-2 transform group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
