import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github, Filter, Smartphone, Globe, Database } from 'lucide-react';

export const Projects: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState('Tous');

  const filters = ['Tous', 'Web', 'Mobile'];

  const projects = [
    {
      title: "Tanàna Clean",
      description: "Plateforme e-commerce dédiée à la vente de produits recyclés, avec un back-office pour la gestion des utilisateurs et des produits.",
      image: "/image/logfaranytenaizy.png",
      technologies: ["PHP", "JavaScript", "PWA", "MySQL","CSS","HTML"],
      category: ["Web", "PWA"],
      type: "Projet Académique",
      features: ["E-commerce", "Back Office", "Recyclage", "Responsive"],
      color: "from-green-500 to-teal-500"
    },
    {
      title: "M-APP-AHAY",
      description: "Application mobile de révision scolaire avec système de quiz interactifs",
      image: "/logo/mappahay.png",
      technologies: ["JavaScript", "PWA", "LocalStorage","HTML","CSS"],
      category: ["Mobile", "PWA"],
      type: "Projet Académique",
      features: ["Quiz interactifs", "Offline"],
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Dôla - Jeux Malgaches",
      description: "Plateforme web dédiée aux jeux traditionnels malgaches (Fanorona, Katro) avec multijoueur en ligne",
      image: "/logo/logo_dola.png",
      technologies: ["JavaScript", "WebSocket", "HTML5", "CSS3"],
      category: ["Web", "Full-Stack"],
      type: "Projet Académique",
      features: ["Multijoueur", "Jeux traditionnels", "Real-time", "Responsive"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "OWAYZZ",
      description: "Réseau social et marketplace touristique pour découvrir et partager les destinations de Madagascar",
      image: "/logo/logo_orange_horizontale.png",
      technologies: ["React", "Node.js", "MongoDB","PostgreSQL", "Express"],
      category: ["Mobile"],
      type: "Expérience Professionnel",
      features: ["Réseau social", "Marketplace", "Tourisme", "Paiement en ligne"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "B2B",
      description: "Plateforme B2B (Business to Business) dédiée aux événements professionnels, offrant un agenda interactif pour la prise de rendez-vous entre participants, un système de messagerie instantanée pour faciliter les échanges en ligne.",
      image: "/logo/logoB2B.png",
      technologies: ["React", "Node.js", "PostgreSQL", "Express"],
      category: ["Mobile"],
      type: "Expérience Professionnel",
      features: ["Réseau social", "Marketplace", "Tourisme", "Paiement en ligne"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Madavision Platform",
      description: "Plateforme complète comprenant une inscription, un back-office pour les administrateurs, et un espace exposant pour la gestion des commandes et des paiements.",
      image: "/logo/logo_madavision.png",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      category: ["Web", "Full-Stack"],
      type: "Expérience Professionnel",
      features: [
        "Inscription",
        "Paiement",
        "Dashboard",
        "Admin Panel",
        "Espace Exposant"
      ],
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "ITM Platform",
      description: "Plateforme complète comprenant une inscription, un back-office pour les administrateurs, et un espace exposant pour la gestion des commandes et des paiements.",
      image: "/logo/itm.png",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      category: ["Web", "Full-Stack"],
      type: "Expérience Professionnel",
      features: ["Inscription", "Paiement", "Dashboard", "Admin Panel"],
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "Vanilla Pay Integration",
      description: "Intégration de modules de paiement sécurisés",
      image: "/logo/logo_vpi.png",
      technologies: ["Symfony", "PHP", "API"],
      category: ["Web", "Mobile","Full-Stack"],
      type: "Expérience Professionnel",
      features: ["Paiement sécurisé", "API Integration", "Security"],
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
                {/* Container image optimisé */}
                <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="max-w-full max-h-full object-cover rounded-lg shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl"
                    style={{
                      width: 'auto',
                      height: 'auto',
                      maxWidth: '90%',
                      maxHeight: '90%'
                    }}
                    onError={(e) => {
                      // Fallback en cas d'erreur de chargement
                      e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiM2MzY2ZjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNhODU1ZjciLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iNTAlIiB5PSI0NSUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5Qcm9qZXQ8L3RleHQ+PHRleHQgeD0iNTAlIiB5PSI2MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIG9wYWNpdHk9IjAuOCI+SW1hZ2UgdW5hdmFpbGFibGU8L3RleHQ+PC9zdmc+';
                    }}
                    loading="lazy"
                  />
                  
                  {/* Overlay gradient au hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  
                </div>

                <div className="p-6">
                  {/* Titre avec badge type à côté */}
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300">
                      {project.title}
                    </h3>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full flex-shrink-0 ${
                      project.type === 'Académique' 
                        ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' 
                        : 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                    }`}>
                      {project.type}
                    </span>
                  </div>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.features.slice(0, 3).map((feature) => (
                      <span
                        key={feature}
                        className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                    {project.features.length > 5 && (
                      <span className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-full">
                        +{project.features.length - 5}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 bg-gradient-to-r ${project.color} bg-opacity-10 text-white rounded-full text-xs font-medium border border-white/20 backdrop-blur-sm`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 7 && (
                      <span className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs font-medium border border-gray-600/50">
                        +{project.technologies.length - 7}
                      </span>
                    )}
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