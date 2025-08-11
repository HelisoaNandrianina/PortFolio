import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github, Filter, Smartphone, Globe, Database } from 'lucide-react';

export const Projects: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState('Tous');

  const filters = ['Tous', 'Web', 'Mobile', 'Full-Stack'];

  const projects = [
    {
      title: "Tanàna Clean",
      description: "Plateforme e-commerce dédiée à la vente de produits recyclés, avec un back-office pour la gestion des utilisateurs et des produits.",
      image: "../../assets/image/logfaranytenaizy.png",
      technologies: ["PHP", "JavaScript", "PWA", "MySQL","CSS","HTML"],
      category: ["Web", "PWA"],
      features: ["E-commerce", "Back Office", "Recyclage", "Responsive"],
      color: "from-green-500 to-teal-500"
    },
    {
      title: "M-APP-AHAY",
      description: "Application mobile de révision scolaire avec système de quiz interactifs",
      image: "../../assets/logo/logomappahay.png",
      technologies: ["JavaScript", "PWA", "LocalStorage","HTML","CSS"],
      category: ["Mobile", "PWA"],
      features: ["Quiz interactifs", "Offline"],
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Dôla - Jeux Malgaches",
      description: "Plateforme web dédiée aux jeux traditionnels malgaches (Fanorona, Katro) avec multijoueur en ligne",
      image: "../../assets/logo/logo_dola.jpg",
      technologies: ["JavaScript", "WebSocket", "HTML5", "CSS3"],
      category: ["Web", "Full-Stack"],
      features: ["Multijoueur", "Jeux traditionnels", "Real-time", "Responsive"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "OWAYZZ",
      description: "Réseau social et marketplace touristique pour découvrir et partager les destinations de Madagascar",
      image: "../../assets/logo/logo_orange_horizontale.png",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      category: ["Web", "Full-Stack"],
      features: ["Réseau social", "Marketplace", "Tourisme", "Paiement en ligne"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Madavision Platform",
      description: "Plateforme complète comprenant une inscription, un back-office pour les administrateurs, et un espace exposant pour la gestion des commandes et des paiements.",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      category: ["Web", "Full-Stack"],
      features: [
        "Inscription",
        "Paiement",
        "Dashboard",
        "Admin Panel",
        "Espace Exposant"
      ],
      color: "fr"
    },
    {
      title: "ITM  Platform",
      description: "Plateforme complète comprenant une inscription, un back-office pour les administrateurs, et un espace exposant pour la gestion des commandes et des paiements.",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      category: ["Web", "Full-Stack"],
      features: ["Inscription", "Paiement", "Dashboard", "Admin Panel"],
      color: "from-indigo-500 to-blue-500"
    },

    {
      title: "Vanilla Pay Integration",
      description: "Modules de paiement sécurisés pour e-commerce avec intégration PrestaShop",
      image: "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg",
      technologies: ["PrestaShop", "PHP", "PostgreSQL", "API"],
      category: ["Web", "Full-Stack"],
      features: ["Paiement sécurisé", "E-commerce", "API Integration", "Security"],
      color: "from-teal-500 to-green-500"
    }
  ];

  const filteredProjects = activeFilter === 'Tous' 
    ? projects 
    : projects.filter(project => project.category.includes(activeFilter));

  return (
    <section id="projets" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-gray-600 transition-all duration-300 hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-300">
                      <ExternalLink className="w-4 h-4 text-white" />
                    </button>
                    <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-300">
                      <Github className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 bg-gradient-to-r ${project.color} bg-opacity-20 border border-current rounded-full text-xs font-medium`}
                        style={{ 
                          borderImage: `linear-gradient(to right, var(--tw-gradient-stops)) 1`,
                          color: '#60a5fa' 
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};