import React from 'react';

export function Artist() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
          
          {/* Artist Photo */}
          <div className="w-full md:w-1/2 relative">
            <div className="absolute -inset-4 bg-green-500/10 rounded-[3rem] rotate-3 blur-2xl" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-2xl border-8 border-slate-50">
              <img 
                src="https://images.unsplash.com/photo-1590246815117-6ca7632c2b11?w=800&q=80" 
                alt="The Artist" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            {/* Decorative Badge */}
            <div className="absolute -bottom-6 -right-6 bg-black text-white p-8 rounded-full shadow-2xl border border-white/10 hidden md:block">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] leading-none">Master</p>
              <p className="text-green-500 text-xl font-black uppercase italic tracking-tighter mt-1">Artist</p>
            </div>
          </div>

          {/* Artist Details */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-6 relative">
            <div className="inline-block px-4 py-1 border border-green-500/30 rounded-full bg-green-500/5">
              <span className="text-green-500 text-xs font-black uppercase tracking-[0.3em]">The Creator</span>
            </div>
            
            <h2 className="text-6xl md:text-8xl font-black text-slate-900 leading-none uppercase tracking-tighter italic">
              VISHAL <br />
              <span className="text-green-500">KUMAR</span>
            </h2>

            <p className="text-xl md:text-2xl text-slate-500 font-medium tracking-wide uppercase italic">
              "Turning skin into a living, <br /> breathing canvas of art."
            </p>

            {/* Loop Video in Circle */}
            <div className="absolute top-0 right-0 -mr-4 md:-mr-12 mt-4 hidden lg:block">
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-green-500/30 shadow-2xl">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/bgvideo.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/20" />
              </div>
            </div>

            <div className="pt-8">
              <div className="w-24 h-1 bg-slate-900 mx-auto md:mx-0" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
