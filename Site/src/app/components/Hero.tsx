import { motion } from "framer-motion";
import notreMariage from "../../assets/notre-mariage.png"; // Remplacez par le chemin de votre illustration

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#f5e6d3] mix-blend-multiply" /> {/* Couleur douce pour le mariage */}
        <img
          alt="Notre Mariage"
          className="w-full h-full object-cover"
          src={notreMariage}
        />
        {/* Overlay pour une meilleure lisibilité du texte */}
        <div className="absolute inset-0 bg-black/20" /> {/* Overlay plus léger */}
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center md:items-start text-center md:text-left"
      >
        <div className="bg-[rgba(255,255,255,0.8)] backdrop-blur-sm p-8 md:p-16 rounded-[32px] border border-white/20 shadow-2xl">
          <h1 className="text-[#8B4513] text-5xl md:text-7xl font-['Great_Vibes',cursive] font-normal mb-6 tracking-wide">
            Vincent & Samia
          </h1>
          <p className="text-[#5D4037] text-lg md:text-2xl font-['Playfair_Display',serif] mb-8 leading-relaxed max-w-2xl">
            Nous avons hâte de célébrer notre amour avec vous, le [date] à [lieu].
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="px-6 py-3 bg-[#B87333] hover:bg-[#A0522D] text-white rounded-2xl text-lg font-['Playfair_Display',serif] transition-colors border border-white/20 shadow-[0_0_20px_rgba(184,115,51,0.3)]"
            >
              Infos pratiques
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-[#E6B8B7] hover:bg-[#D8A499] text-[#5D4037] font-bold rounded-2xl text-lg font-['Playfair_Display',serif] transition-colors shadow-[0_0_20px_rgba(230,184,183,0.3)]"
            >
              Confirmer votre présence
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
