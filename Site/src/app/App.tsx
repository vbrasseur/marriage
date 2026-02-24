import { motion } from "motion/react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="bg-[#111827] min-h-screen text-white font-sans overflow-x-hidden selection:bg-[#14b8a6] selection:text-white">
      <Navbar />
      
      <main className="relative">
        {/* Background Decorative Glow (The big teal blob) */}
        {/* Positioned roughly where Projects section is */}
        <div className="absolute top-[1600px] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] pointer-events-none z-0 opacity-50">
           <svg className="w-full h-full" viewBox="0 0 2200 2200" fill="none">
            <g filter="url(#filter0_f_1_176)">
              <circle cx="1100" cy="1100" r="500" fill="#14B8A6" fillOpacity="0.5" />
            </g>
            <defs>
              <filter id="filter0_f_1_176" x="0" y="0" width="2200" height="2200" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="300" result="effect1_foregroundBlur_1_176"/>
              </filter>
            </defs>
          </svg>
        </div>

        <div className="relative z-10 flex flex-col gap-0">
          <Hero />
          <About />
          <Services />
          <Projects />
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
}
