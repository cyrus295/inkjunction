import React, { useState, useEffect } from "react";
import { LoadingScreen } from "./components/LoadingScreen.jsx";
import { Banner } from "./components/Banner.jsx";
import { Hero } from "./components/Hero.jsx";
import { Portfolio } from "./components/Portfolio.jsx";
import { Contact } from "./components/Contact.jsx";
import { PortraitTattoos } from "./components/PortraitTattoos.jsx";
import { CoverupTattoos } from "./components/CoverupTattoos.jsx";
import { ShopEnvironment } from "./components/ShopEnvironment.jsx";
import { Artist } from "./components/Artist.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { SocialPopup } from "./components/SocialPopup.jsx";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show loading screen for 2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-slate-50 relative font-body animate-in fade-in duration-700">
      <Navbar />
      <Banner />
      <Hero />
      <div id="portfolio">
        <Portfolio />
      </div>
      <PortraitTattoos />
      <CoverupTattoos />
      <ShopEnvironment />
      <Artist />
      <Contact />
      <SocialPopup />
    </div>
  );
}

export default App;
