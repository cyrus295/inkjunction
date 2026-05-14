import { useState, useEffect } from "react";
import { portfolioItems } from "../data/portfolio.js";
import { Play, Image as ImageIcon, ZoomIn, X } from "lucide-react";
import { Button } from "../components/ui/button.jsx";

const API_BASE_URL = "http://localhost:5000";

export function Portfolio() {
  const [items, setItems] = useState(portfolioItems);
  const [visibleItems, setVisibleItems] = useState(12);
  const [zoomItem, setZoomItem] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const loadPortfolio = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/portfolio`);
        if (!response.ok) throw new Error("Portfolio API request failed");
        const data = await response.json();

        const normalized = data.map((entry, index) => {
          let src = entry.src;
          if (!src.startsWith("http") && !src.startsWith("data:")) {
            // Handle relative paths from DB
            if (src.startsWith("/img")) {
              src = `${API_BASE_URL}${src}`;
            } else if (src.startsWith("img")) {
              src = `${API_BASE_URL}/${src}`;
            } else {
              src = `${API_BASE_URL}/img/1/${src}`;
            }
          }
          
          return {
            id: entry._id || entry.id || index,
            type: entry.type ?? "image",
            src: src,
            style: entry.style ?? "Custom Design",
            caption: entry.caption ?? "Ink Junction Art",
          };
        });

        setItems(normalized.length > 0 ? normalized : portfolioItems);
      } catch (error) {
        console.warn("Portfolio API fetch failed, using fallback data", error);
        setItems(portfolioItems);
      }
    };

    loadPortfolio();
  }, []);

  const loadMore = () => {
    setVisibleItems((prev) => Math.min(prev + 6, items.length));
  };

  // Double the items for seamless marquee
  const marqueeItems = [...items, ...items];

  return (
    <section id="portfolio" className="py-20 overflow-hidden bg-slate-50">
      <div className="text-center mb-16 px-4">
        <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 uppercase tracking-tighter italic">
          Our <span className="text-green-500">Portfolio</span>
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
          Sliding through art. Use mouse wheel or swipe to explore.
        </p>
      </div>

      <div 
        className="relative flex whitespace-nowrap overflow-x-auto scrollbar-hide group cursor-grab active:cursor-grabbing"
        onClick={() => setIsPaused(!isPaused)}
      >
        <div className={`flex gap-6 py-4 px-6 ${isPaused ? 'pause-marquee' : 'animate-marquee'}`}>
          {marqueeItems.map((item, index) => (
            <div 
              key={`${item.id}-${index}`} 
              className="w-[300px] sm:w-[400px] flex-shrink-0"
            >
              <GalleryItem 
                item={item} 
                onZoom={(e) => {
                  e.stopPropagation();
                  setZoomItem(item);
                }} 
              />
            </div>
          ))}
        </div>
      </div>

      {visibleItems < items.length && (
        <div className="text-center mt-12">
          <Button
            onClick={loadMore}
            variant="outline"
            size="lg"
            className="border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white px-8 py-6 rounded-full font-semibold"
          >
            Load More Work
          </Button>
        </div>
      )}

      {/* Zoom Modal */}
      {zoomItem && (
        <div 
          className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-300"
          onClick={() => setZoomItem(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-green-500 transition-colors"
            onClick={() => setZoomItem(null)}
          >
            <X className="w-10 h-10" />
          </button>
          
          <div className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center">
            {zoomItem.type === "video" ? (
              <video
                src={zoomItem.src}
                autoPlay
                controls
                loop
                className="max-w-full max-h-[80vh] object-contain border border-white/10 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            ) : (
              <img
                src={zoomItem.src}
                alt={zoomItem.caption}
                className="max-w-full max-h-[80vh] object-contain border border-white/10 shadow-2xl cursor-zoom-out"
                onClick={(e) => e.stopPropagation()}
              />
            )}
            <div className="mt-8 text-center" onClick={(e) => e.stopPropagation()}>
              <span className="bg-green-600 text-white text-xs font-black uppercase tracking-[0.3em] px-6 py-2 mb-4 inline-block italic">
                {zoomItem.style}
              </span>
              <p className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter italic">{zoomItem.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function GalleryItem({ item, onZoom }) {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Media Container */}
      <div className="relative aspect-square bg-slate-100 overflow-hidden cursor-zoom-in" onClick={onZoom}>
        {item.type === "video" ? (
          <video
            src={item.src}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        ) : (
          <img
            src={item.src}
            alt={item.caption}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        )}

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="bg-white/90 p-3 rounded-full shadow-lg transform scale-50 group-hover:scale-100 transition-transform duration-300">
            <ZoomIn className="w-6 h-6 text-slate-900" />
          </div>
        </div>

        {/* Style tag */}
        <div className="absolute top-4 left-4">
          <span className="bg-slate-900/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full">
            {item.style}
          </span>
        </div>
      </div>

      {/* Caption */}
      <div className="p-4">
        <p className="text-slate-700 font-medium">{item.caption}</p>
      </div>
    </div>
  );
}
