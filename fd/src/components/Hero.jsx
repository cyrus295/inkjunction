import { useState, useRef, useEffect } from "react";
import { Button } from "../components/ui/button.jsx";
import { ArrowDown, MessageCircle, Phone, MapPin, DollarSign } from "lucide-react";
import { WHATSAPP_NUMBER, CLICKABLE_MAPS_URL } from "../utils/constants.js";

export function Hero() {
  const videoRef = useRef(null);

  // Ensure seamless looping
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleEnded = () => {
        video.currentTime = 0;
        video.play();
      };
      video.addEventListener("ended", handleEnded);
      return () => video.removeEventListener("ended", handleEnded);
    }
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const [showBookingPopup, setShowBookingPopup] = useState(false);

  const openWhatsApp = () => {
    const message = `Hi Ink Junction! I'd like to book a tattoo session. Can you help me with the process?`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
    setShowBookingPopup(false);
  };

  const callNow = () => {
    window.open(`tel:${WHATSAPP_NUMBER}`, "_self");
    setShowBookingPopup(false);
  };

  const openLocation = () => {
    window.open(CLICKABLE_MAPS_URL, "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-slate-900 overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="/bgvideo.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-slate-900/70" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <div className="bg-white/10 backdrop-blur-md border-2 border-white/20 p-4 rounded-full shadow-2xl">
            <img
              src="/logo.jpg"
              alt="Ink Junction Tattoos Logo"
              className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover"
            />
          </div>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
          Ink Junction
          <span className="block text-green-500 mt-2">Tattoo Studio</span>
        </h1>
        
        <p className="text-xl sm:text-2xl md:text-3xl text-slate-300 mb-12 font-light">
          Creating art that lives forever
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap gap-6 justify-center items-center">
          <Button
            onClick={() => scrollToSection("portfolio")}
            size="lg"
            variant="primary"
            className="w-full sm:w-auto shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]"
          >
            <ArrowDown className="mr-3 h-6 w-6 text-slate-900" />
            View Our Portfolio
          </Button>

          <Button
            onClick={() => setShowBookingPopup(true)}
            size="lg"
            variant="green"
            className="w-full sm:w-auto shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)]"
          >
            <MessageCircle className="mr-3 h-6 w-6 text-white" />
            Book Now
          </Button>

          <Button
            onClick={openLocation}
            size="lg"
            variant="red"
            className="w-full sm:w-auto shadow-[0_0_20px_rgba(239,68,68,0.2)] hover:shadow-[0_0_25px_rgba(239,68,68,0.4)]"
          >
            <MapPin className="mr-3 h-6 w-6 text-white" />
            Location
          </Button>
        </div>
      </div>

      {/* Booking Popup Modal */}
      {showBookingPopup && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
            onClick={() => setShowBookingPopup(false)}
          />
          <div className="relative bg-slate-900 border border-white/10 w-full max-w-sm rounded-[2.5rem] overflow-hidden shadow-2xl animate-in zoom-in duration-300">
            <div className="p-8 text-center">
              <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-10 h-10 text-green-500" />
              </div>
              <h3 className="text-2xl font-black text-white uppercase tracking-tighter italic mb-2">Book Your Session</h3>
              <p className="text-slate-400 text-sm font-medium mb-8">Choose your preferred way to connect with our artists.</p>
              
              <div className="space-y-4">
                <button
                  onClick={openWhatsApp}
                  className="w-full flex items-center justify-between p-5 rounded-2xl bg-green-600 hover:bg-green-500 text-white transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <MessageCircle className="w-6 h-6" />
                    <span className="font-bold uppercase tracking-widest text-sm">WhatsApp</span>
                  </div>
                  <ArrowDown className="w-4 h-4 -rotate-90 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={callNow}
                  className="w-full flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <Phone className="w-6 h-6 text-green-500" />
                    <span className="font-bold uppercase tracking-widest text-sm">Phone Call</span>
                  </div>
                  <ArrowDown className="w-4 h-4 -rotate-90 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <button 
                onClick={() => setShowBookingPopup(false)}
                className="mt-8 text-slate-500 hover:text-white text-xs font-black uppercase tracking-[0.2em] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-slate-400" />
      </div>
    </section>
  );
}
