import { motion } from "motion/react";
import svgPaths from "../../imports/svg-9rtvrd9c82";

// Helper for SVG icons
function Icon({ path, color = "#14B8A6" }: { path: string; color?: string }) {
  return (
    <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
      <path d={path} fill={color} />
    </svg>
  );
}

export function Services() {
  const services = [
    {
      title: "Cloud Architecture",
      description: "Conception et déploiement d’infrastructures AWS, Azure et multi-cloud.",
      icon: svgPaths.p3480e700,
    },
    {
      title: "DevOps & CI/CD",
      description: "Automatisation des pipelines CI/CD, gestion des containers et GitOps avec Kubernetes.",
      icon: svgPaths.p346102c0,
    },
    {
      title: "Sécurité & Observabilité",
      description: "Monitoring Prometheus, micro-segmentation, sécurité Cloud et audit des infrastructures.",
      icon: svgPaths.p107ab930,
    },
  ];

  return (
    <section id="services" className="py-20 relative w-full">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-white text-3xl md:text-4xl font-['Segoe_UI:Bold',sans-serif] font-bold">
            Services
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-[#374151]/20 backdrop-blur-sm border border-white/5 rounded-2xl p-8 flex flex-col items-center text-center hover:bg-[#374151]/40 transition-colors"
            >
              <div className="mb-6 p-4 bg-[#1f2937]/50 rounded-full">
                <Icon path={service.icon} />
              </div>
              <h3 className="text-white text-xl md:text-2xl font-['Segoe_UI:Semibold',sans-serif] font-semibold mb-4">
                {service.title}
              </h3>
              <p className="text-white/80 font-['Segoe_UI:Regular',sans-serif] leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
