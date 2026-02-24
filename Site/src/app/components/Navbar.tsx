import { motion } from "motion/react";
import imgEllipse2 from "../../assets/6b862674031cedd47d1c1ee1fd1f2b6a8663817f.png";
import imglogo from "../../assets/logo.png";


export function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { name: "À propos", id: "about" },
    { name: "Services", id: "services" },
    { name: "Projets", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full bg-[#1f2937]/90 backdrop-blur-md border-b border-white/10"
    >
      <div className="flex flex-row items-center w-full max-w-[1511px] px-6 py-4 justify-between">
        {/* Logo Section */}
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="relative shrink-0 size-[40px] md:size-[60px]">
            <img alt="Logo" className="block max-w-none size-full" src={imglogo} />
          </div>
          <div className="flex flex-col font-['Segoe_UI:Bold',sans-serif] text-white">
            <p className="text-lg md:text-[20px] font-bold leading-tight">DInnoV-IT</p>
          </div>
        </div>

        {/* Links Section */}
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.id)}
              className="text-white hover:text-[#14b8a6] transition-colors text-[16px] font-['Segoe_UI:Regular',sans-serif]"
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Mobile Menu Placeholder (Simple) */}
        <div className="md:hidden">
            {/* You could add a hamburger menu here, but for now we'll keep it simple as requested "sans trop en faire" */}
        </div>
      </div>
    </motion.nav>
  );
}
