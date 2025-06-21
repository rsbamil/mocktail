import React from "react";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Cocktails from "./components/Cocktails";

gsap.registerPlugin(ScrollTrigger, SplitText);
function App() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <Cocktails />
    </main>
  );
}

export default App;
