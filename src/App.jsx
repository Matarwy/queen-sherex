// src/App.jsx
import About from "./components/About";
import ContractAddressSection from "./components/ContractAddressSection";
import FaqSection from "./components/FaqSection";
import Features from "./components/Features"; // Rename file if needed
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowToBuySection from "./components/HowToBuySection";
import Join from "./components/Join";
import Navbar from "./components/Navbar";
import PartnersSlider from "./components/PartnersSlider";
import RoadmapSection from "./components/RoadmapSection";
import Tokenomics from "./components/Tokenomics";
import { SpeedInsights } from "@vercel/speed-insights/next"


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <PartnersSlider/>
      <Features />
      <Tokenomics />
      <RoadmapSection />
      <HowToBuySection />
      <ContractAddressSection />
      <Join />
      <FaqSection />
      <Footer />
      <SpeedInsights />
    </>
  );
}

export default App;
