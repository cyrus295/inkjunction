import React, { useState, useEffect } from "react";
import { Menu, X, Instagram, Phone, MessageCircle, ArrowDown, Mail, MessageSquare } from "lucide-react";
import { WHATSAPP_NUMBER } from "../utils/constants.js";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showBookingPopup, setShowBookingPopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "The Studio", href: "#shop" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const openWhatsApp = () => {
    const message = `Hi Ink Junction Tattoo Studio! I'd like to book a session.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
    setShowBookingPopup(false);
  };

  const openSMS = () => {
    const message = `Hi Ink Junction Tattoo Studio! I'd like to book a session.`;
    window.open(`sms:${WHATSAPP_NUMBER}?body=${encodeURIComponent(message)}`, "_self");
    setShowBookingPopup(false);
  };

  const callNow = () => {
    window.open(`tel:${WHATSAPP_NUMBER}`, "_self");
    setShowBookingPopup(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ${
        scrolled ? "bg-black/95 backdrop-blur-2xl py-3 border-b border-white/5 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.5)]" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <div className="relative w-12 h-12 rounded-full border border-white/10 overflow-hidden transition-all duration-500 group-hover:border-green-500/50 group-hover:scale-105 shadow-xl">
            <img src="/logo.jpg" alt="Logo" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-black tracking-[0.25em] text-xs md:text-lg uppercase italic group-hover:text-green-500 transition-all duration-300">
              Ink Junction
            </span>
            <span className="text-green-500/50 font-bold tracking-[0.1em] text-[8px] md:text-[10px] uppercase -mt-1 group-hover:text-green-500 transition-all duration-300">
              Tattoo Studio
            </span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-white/60 hover:text-white text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-300 relative group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-green-500 group-hover:w-full transition-all duration-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
            </a>
          ))}
        </div>

        {/* Right Side Info */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-4">
            <a 
              href="https://instagram.com/inkjunction_tattoos" 
              target="_blank" 
              className="text-white/70 hover:text-green-500 transition-all duration-300 hover:scale-110"
              title="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}`} 
              target="_blank" 
              className="text-white/70 hover:text-green-500 transition-all duration-300 hover:scale-110"
              title="WhatsApp"
            >
              <MessageCircle size={20} />
            </a>
            <a 
              href={`sms:${WHATSAPP_NUMBER}`} 
              className="text-white/70 hover:text-green-500 transition-all duration-300 hover:scale-110"
              title="SMS"
            >
              <MessageSquare size={20} />
            </a>
          </div>
          <div className="h-4 w-[1px] bg-white/20"></div>
          <button 
            onClick={() => setShowBookingPopup(true)}
            className="group relative px-6 py-2 overflow-hidden rounded-full bg-white/5 border border-white/10 hover:border-green-500/50 transition-all duration-500"
          >
            <div className="absolute inset-0 bg-green-500 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500" />
            <span className="relative flex items-center gap-2 text-white font-black text-[10px] tracking-[0.2em] uppercase group-hover:text-black transition-colors duration-500">
              <Phone size={12} />
              Book Now
            </span>
          </button>
        </div>

        {/* Mobile Menu Button (3 lines) */}
        <button 
          className="md:hidden text-white hover:text-green-500 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black z-[99] transition-all duration-700 flex flex-col items-center justify-center gap-8 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="absolute top-8 right-8">
           <button onClick={() => setIsOpen(false)} className="text-white hover:text-green-500">
              <X size={40} />
           </button>
        </div>

        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => scrollToSection(e, link.href)}
            className="text-white text-4xl font-black uppercase tracking-tighter hover:text-green-500 transition-colors italic"
          >
            {link.name}
          </a>
        ))}

        <button 
          onClick={() => {
            setIsOpen(false);
            setShowBookingPopup(true);
          }}
          className="mt-4 bg-green-600 text-white px-8 py-4 rounded-full font-black uppercase tracking-widest text-lg shadow-2xl active:scale-95 transition-transform"
        >
          BOOK NOW
        </button>

        <div className="mt-8 flex gap-8">
           <a href="https://instagram.com/inkjunction_tattoos" target="_blank">
            <Instagram className="text-white w-8 h-8" />
           </a>
           <div className="text-green-500 font-black tracking-widest text-xl uppercase italic">Ink Junction</div>
        </div>
      </div>

      {/* Booking Popup Modal (Shared Black Theme) */}
      {showBookingPopup && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/95 backdrop-blur-xl"
            onClick={() => setShowBookingPopup(false)}
          />
          <div className="relative bg-slate-900 border border-white/10 w-full max-w-sm rounded-[2.5rem] overflow-hidden shadow-2xl animate-in zoom-in duration-300">
            <div className="p-8 text-center">
              <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-10 h-10 text-green-500" />
              </div>
              <h3 className="text-2xl font-black text-white uppercase tracking-tighter italic mb-2">Book Your Session</h3>
              <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-8">Ink Junction Tattoo Studio</p>
              
              <div className="space-y-4">
                <button
                  onClick={openWhatsApp}
                  className="w-full flex items-center justify-between p-5 rounded-2xl bg-green-600 hover:bg-green-500 text-white transition-all group active:scale-95"
                >
                  <div className="flex items-center gap-4">
                    <MessageCircle className="w-6 h-6" />
                    <span className="font-bold uppercase tracking-widest text-sm">WhatsApp</span>
                  </div>
                  <ArrowDown className="w-4 h-4 -rotate-90 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={openSMS}
                  className="w-full flex items-center justify-between p-5 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white transition-all group active:scale-95"
                >
                  <div className="flex items-center gap-4">
                    <MessageSquare className="w-6 h-6" />
                    <span className="font-bold uppercase tracking-widest text-sm">Direct SMS</span>
                  </div>
                  <ArrowDown className="w-4 h-4 -rotate-90 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={callNow}
                  className="w-full flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-all group active:scale-95"
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
                className="mt-8 text-slate-500 hover:text-white text-[10px] font-black uppercase tracking-[0.3em] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
