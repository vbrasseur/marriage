import { motion } from "motion/react";
import imgRectangle3 from "../../assets/5eff9b45ac08cb1eb0a3dadae087d37f4d1f186d.png";

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
        <div className="absolute inset-0 bg-[#d9d9d9] mix-blend-multiply" />
        <img 
          alt="Background" 
          className="w-full h-full object-cover" 
          src={imgRectangle3} 
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center md:items-start text-center md:text-left"
      >
        <div className="bg-[rgba(0,0,0,0.4)] backdrop-blur-sm p-8 md:p-16 rounded-[32px] border border-white/10 shadow-2xl">
          <h1 className="text-white text-5xl md:text-7xl font-['Segoe_UI:Black',sans-serif] font-black mb-6 tracking-tight">
            DInnoV-IT
          </h1>
          <p className="text-white text-lg md:text-2xl font-['Segoe_UI:Regular',sans-serif] mb-8 leading-relaxed max-w-2xl">
            Architecture Cloud, DevOps, Sécurité & Management de projets pour les entreprises innovantes
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="px-6 py-3 bg-black hover:bg-gray-900 text-white rounded-2xl text-lg font-['Segoe_UI:Regular',sans-serif] transition-colors border border-white/10"
            >
              Travaillons ensemble
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-[#14b8a6] hover:bg-[#0d9488] text-black font-bold rounded-2xl text-lg font-['Segoe_UI:Bold',sans-serif] transition-colors shadow-[0_0_20px_rgba(20,184,166,0.3)]"
            >
              Télécharger mon CV
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
