import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

export const Experience: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      company: "Vanilla Pay International",
      position: "Développeuse Full-Stack",
      period: "2024 - Présent",
      location: "Madagascar",
      type: "CDI",
      achievements: [
        "Designer UI/UX & création de visuels",
        "Développement de modules de paiement sécurisés",
        "Création d'applications web et mobile avec React et React Native",
        "Intégration avec PrestaShop et bases de données PostgreSQL",
        "Développement des sites ITM & FIA&FIG pour inscription et réservation d'exposants",
      ],
      technologies: ["React", "React Native", "Node.js", "PostgreSQL", "PrestaShop","EJS","Symfony","Figma","Adobe Illustrator","Photoshop","Symfony"],
      color: "from-blue-500 to-purple-500"
    },
    {
      company: "Mibala Tournament",
      position: "Community Manager",
      period: "2023 - 2024",
      location: "Madagascar",
      type: "Freelance",
      achievements: [
        "Gestion des réseaux sociaux et création de contenu engageant",
        "Développement de stratégies de communication digitale",
        "Animation de communautés en ligne",
        "Augmentation significative de l'engagement et de la visibilité"
      ],
      technologies: ["Social Media", "Content Creation", "Digital Marketing","Photoshop"],
      color: "from-green-500 to-teal-500"
    },
    {
      company: "Freelance",
      position: "Rédactrice de fiches techniques",
      period: "2022 - 2023",
      location: "Madagascar",
      type: "Freelance",
      achievements: [
        "Rédaction de documentation technique spécialisée",
        "Création de contenus pédagogiques et informatifs",
        "Collaboration avec diverses équipes techniques",
        "Respect des délais et des standards de qualité"
      ],
      technologies: ["Documentation", "Technical Writing", "Research"],
      color: "from-purple-500 to-pink-500"
    },
    {
      company: "Ascendio",
      position: "Secrétaire de séance",
      period: "2022",
      location: "Madagascar",
      type: "Stage",
      achievements: [
        "Organisation et coordination de réunions importantes",
        "Rédaction de comptes-rendus et procès-verbaux",
        "Gestion administrative et support organisationnel",
        "Développement de compétences en communication professionnelle"
      ],
      technologies: ["Administration", "Organisation", "Communication"],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900/30">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Expérience Professionnelle
            </span>
          </h2>

          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative mb-12 last:mb-0"
              >
                {/* Timeline line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-6 top-20 w-0.5 h-32 bg-gradient-to-b from-gray-600 to-transparent"></div>
                )}

                <div className="flex items-start space-x-6">
                  {/* Timeline dot */}
                  <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${exp.color} rounded-full flex items-center justify-center shadow-lg`}>
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 group">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{exp.position}</h3>
                        <h4 className={`text-xl font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent mb-2`}>
                          {exp.company}
                        </h4>
                      </div>
                      <div className="flex flex-col lg:items-end space-y-2">
                        <div className="flex items-center space-x-2 text-gray-400">
                          <Calendar className="w-4 h-4" />
                          <span className="font-medium">{exp.period}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-400">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                          <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">{exp.type}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="flex items-start space-x-3">
                          <ChevronRight className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 leading-relaxed">{achievement}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-700/50 border border-gray-600/50 rounded-full text-sm text-gray-300 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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