import { motion } from "motion/react";
import { useState, useEffect } from "react";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    setStatus("Envoi en cours...");

    console.log("Formulaire soumis"); // Ajouter un log pour vérifier le nombre de fois que le script est appelé

    const API_TOKEN = "EyHGW$VPJCLPPM$^7AhkR&Uu57zz58ud"; // à remplacer par le token réel
    const BACKEND_URL = "https://flask.dinnov-it.com/send-mail"; // URL interne K3s

    const data = {
      name: formData.name,
      email: formData.email,
      message: formData.message
    };

    try {
      const response = await fetch(BACKEND_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${API_TOKEN}`
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (result.status === "Email sent") {
        setStatus("✅ Email envoyé avec succès !");
        setFormData({ name: "", email: "", message: "" });
      } else {
        console.error("Erreur complète :", result);
        setStatus("❌ Erreur : " + result.message);
      }
    } catch (err) {
      console.error("Erreur complète :", err);
      setStatus("❌ Erreur de connexion au serveur.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative w-full flex justify-center">
      <div className="max-w-4xl w-full px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#1f2937]/20 backdrop-blur-sm rounded-[32px] p-8 md:p-16 border border-white/5"
        >
          <div className="text-center mb-12">
            <h2 className="text-white text-3xl md:text-4xl font-['Segoe_UI:Bold',sans-serif] font-bold mb-4">
              Contact
            </h2>
            <p className="text-white/80 text-lg font-['Segoe_UI:Regular',sans-serif]">
              Vous souhaitez collaborer ou discuter d’un projet ? Envoyez-moi un message :
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 mb-12">
            <div>
              <input
                type="text"
                placeholder="Nom"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full h-[60px] px-4 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#14b8a6]"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full h-[60px] px-4 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#14b8a6]"
              />
            </div>
            <div>
              <textarea
                placeholder="Message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full p-4 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#14b8a6] resize-none"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className={`w-full h-[48px] bg-[#14b8a6] hover:bg-[#0d9488] text-white font-['Segoe_UI:Regular',sans-serif] text-lg rounded-md transition-colors font-bold shadow-lg ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
            </motion.button>
          </form>

          <div className="text-center space-y-2">
            <p className="text-white font-['Segoe_UI:Regular',sans-serif]">
              Ou contactez-moi directement : <a href="mailto:vincent.brasseur@dinnov-it.com" className="text-[#2dd4bf] hover:underline">vincent.brasseur@dinnov-it.com</a>
            </p>
            <p className="text-white font-['Segoe_UI:Regular',sans-serif]">
              LinkedIn : <a href="https://linkedin.com/in/vincent-brasseur" target="_blank" rel="noopener noreferrer" className="text-[#2dd4bf] hover:underline">linkedin.com/in/vincent-brasseur</a>
            </p>
            <p id="form-status" className="text-white font-['Segoe_UI:Regular',sans-serif]">{status}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}