import React, { useState } from 'react';

const coverupItems = [
  {
    id: 1,
    before: "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=400&q=80",
    after: "https://images.unsplash.com/photo-1562962230-16e4623d36e6?w=800&q=80",
    title: "Tribal to Geometric Coverup"
  },
  {
    id: 2,
    before: "https://images.unsplash.com/photo-1590246815117-6ca7632c2b11?w=400&q=80",
    after: "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=800&q=80",
    title: "Old Name to Realistic Rose"
  }
];

export function CoverupTattoos() {
  const [isPaused, setIsPaused] = useState(false);
  const marqueeItems = [...coverupItems, ...coverupItems, ...coverupItems];

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 tracking-tight uppercase italic">
          Coverup <span className="text-green-500">Tattoos</span>
        </h2>
        <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
          Transforming old regrets into new masterpieces.
        </p>
      </div>

      <div 
        className="relative flex whitespace-nowrap overflow-x-auto scrollbar-hide group cursor-grab active:cursor-grabbing"
        onClick={() => setIsPaused(!isPaused)}
      >
        <div className={`flex gap-12 py-4 px-6 ${isPaused ? 'pause-marquee' : 'animate-marquee'}`}>
          {marqueeItems.map((item, index) => (
            <div 
              key={`${item.id}-${index}`} 
              className="w-[350px] sm:w-[600px] flex-shrink-0 bg-white p-6 rounded-[2.5rem] shadow-xl border border-slate-100"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="relative group/media">
                  <div className="absolute top-3 left-3 z-10 bg-black/60 text-white px-3 py-1 rounded-full text-[10px] font-black tracking-widest backdrop-blur-sm">
                    BEFORE
                  </div>
                  <img 
                    src={item.before} 
                    alt="Before" 
                    className="w-full h-[250px] sm:h-[350px] object-cover rounded-3xl grayscale"
                  />
                </div>
                <div className="relative group/media">
                  <div className="absolute top-3 left-3 z-10 bg-green-600 text-white px-3 py-1 rounded-full text-[10px] font-black tracking-widest">
                    AFTER
                  </div>
                  <img 
                    src={item.after} 
                    alt="After" 
                    className="w-full h-[250px] sm:h-[350px] object-cover rounded-3xl shadow-lg"
                  />
                </div>
              </div>
              <div className="text-center mt-6">
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tighter italic">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
