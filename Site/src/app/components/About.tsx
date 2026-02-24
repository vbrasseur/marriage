import { motion } from "motion/react";
import imgEllipse2 from "../../assets/6b862674031cedd47d1c1ee1fd1f2b6a8663817f.png";

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 relative w-full flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center"
      >
        {/* Badge Heading */}
        <div className="relative inline-block bg-white/10 px-8 py-4 rounded-full mb-12 backdrop-blur-sm border border-white/5">
          <h2 className="text-white text-2xl md:text-4xl font-['Segoe_UI:Bold',sans-serif] font-bold">
            À propos de Vincent Brasseur
          </h2>
          
          {/* Photo Positioned Top Right */}
          <div className="absolute -top-6 -right-6 md:-top-8 md:-right-8 w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-white/20 shadow-xl rotate-[6deg]">
             <img src={imgEllipse2} alt="Vincent Brasseur" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-6 text-white/90 text-lg md:text-xl font-['Segoe_UI:Regular',sans-serif] leading-relaxed max-w-3xl">
          <p>
            Fort d'une expérience chez L'Oréal et Accor, je me spécialise dans l'architecture Cloud et DevOps, 
            couvrant AWS, Azure, Kubernetes, Terraform, CI/CD et la sécurité des infrastructures.
          </p>
          <p>
            J’ai également dirigé des projets complexes, coordonné des équipes techniques et assuré la livraison 
            de solutions Cloud sécurisées et automatisées. Mon expertise inclut la planification, la gestion des risques, 
            le suivi des indicateurs de performance et l'accompagnement des équipes dans les bonnes pratiques DevOps.
          </p>
          <p>
            Je fonde DInnoV-IT pour accompagner les entreprises dans la transformation numérique, l'automatisation 
            des workflows et l'optimisation de leur infrastructure Cloud.
          </p>
        </div>

        {/* Button */}
        <motion.div 
          className="mt-12"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button className="px-8 py-3 bg-[#14b8a6] hover:bg-[#0d9488] text-[#111827] font-bold rounded-2xl text-lg font-['Segoe_UI:Bold',sans-serif] transition-colors shadow-lg shadow-teal-500/20">
            Télécharger mon CV
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
