import React from "react";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

gsap.registerPlugin(ScrollTrigger, SplitText);
function App() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <div className="h-dvh bg-black"></div>
    </main>
  );
}

export default App;
