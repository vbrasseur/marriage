import { motion } from "motion/react";
import imgImage1 from "../../assets/7a0f549fc3bc080f100097b5b78cd2968d4df5d1.png";
import imgImage2 from "../../assets/bf9ef4a4d809a0f1f6e8b65eb2fa1fa10e250a12.png";
import imgImage3 from "../../assets/3fc392248a1a0b5eac1b0853d73219b5e40f5559.png";
import imgImage4 from "../../assets/99da737a2444224be6af2930f7897c25b1edb41c.png";
import imgImage5 from "../../assets/3f2e68604b012cd62241461eeedf92921574cb9e.png";
import imgImage6 from "../../assets/b22045904b180cdf1cd9263874fd156c2e4f72a5.png";
import imgImage7 from "../../assets/3dcaec536be7dc48fdf4f572028c560e4df01381.png";

const projects = [
  {
    title: "Cluster K3s & Jenkins",
    description: "Déploiement de microservices avec GitOps et CI/CD sur un cluster K3s local.",
    icons: [
      { img: imgImage1, bg: "#FFC284" },
      { img: imgImage2, bg: "#84D8FF" },
    ],
  },
  {
    title: "EKS & ArgoCD",
    description: "Mise en place d’un cluster Kubernetes managé AWS avec déploiement GitOps sécurisé.",
    icons: [
      { img: imgImage3, bg: "#9FFFA8" },
      { img: imgImage4, bg: "#FFFD84" },
    ],
  },
  {
    title: "Terraform & Infrastructure",
    description: "Automatisation complète des environnements Cloud pour des projets multi-tenant.",
    icons: [
      { img: imgImage5, bg: "#FF84E6" },
    ],
  },
  {
    title: "Monitoring & SNMP",
    description: "Configuration Prometheus pour la collecte de métriques SNMP de NAS et Proxmox.",
    icons: [
      { img: imgImage6, bg: "#8490FF" },
    ],
  },
  {
    title: "Vaultwarden & Traefik",
    description: "Sécurisation des mots de passe et déploiement d’Ingress Traefik multi-namespace.",
    icons: [
      { img: imgImage7, bg: "#FF8486" },
    ],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 relative w-full">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-white text-3xl md:text-4xl font-['Segoe_UI:Bold',sans-serif] font-bold">
            Projets récents
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-[#1f2937]/40 backdrop-blur-sm border border-white/5 rounded-2xl p-8 w-full md:w-[calc(33.333%-16px)] min-w-[300px] flex flex-col items-center text-center hover:bg-[#1f2937]/60 transition-colors"
            >
              {/* Icons */}
              <div className="flex items-center justify-center mb-6 pl-3">
                {project.icons.map((icon, i) => (
                  <div 
                    key={i} 
                    className="relative w-10 h-10 rounded-full flex items-center justify-center -ml-3 shadow-md overflow-hidden"
                    style={{ backgroundColor: icon.bg }}
                  >
                    <img src={icon.img} alt="" className="w-2/3 h-2/3 object-contain" />
                  </div>
                ))}
              </div>

              <h3 className="text-white text-xl font-['Segoe_UI:Semibold',sans-serif] font-semibold mb-4">
                {project.title}
              </h3>
              <p className="text-white/80 text-sm font-['Segoe_UI:Regular',sans-serif] leading-relaxed">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
