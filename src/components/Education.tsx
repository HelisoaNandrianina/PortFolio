import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';

export const Education: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const education = [
    {
      institution: "ISPM (Institut Supérieur Polytechnique de Madagascar)",
      degree: "Licence en Informatique",
      field: "Développement Web et Mobile",
      period: "2020 - 2023",
      location: "Antananarivo, Madagascar",
      type: "Diplôme",
      achievements: [
        "Spécialisation en développement full-stack",
        "Projets académiques en React et Node.js",
        "Formation aux méthodologies agiles",
        "Mémoire sur les applications web progressives (PWA)"
      ],
      skills: ["JavaScript", "PHP", "Base de données", "Gestion de projet"],
      color: "from-blue-500 to-purple-500",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      institution: "Lycée Technique",
      degree: "Baccalauréat Scientifique",
      field: "Sciences et Technologies",
      period: "2017 - 2020",
      location: "Madagascar",
      type: "Diplôme",
      achievements: [
        "Mention Bien",
        "Spécialisation en mathématiques et sciences",
        "Initiation à la programmation",
        "Projets techniques et scientifiques"
      ],
      skills: ["Mathématiques", "Sciences", "Logique", "Analyse"],
      color: "from-green-500 to-teal-500",
      icon: <BookOpen className="w-6 h-6" />
    }
  ];

  const certifications = [
    {
      name: "React Development",
      issuer: "Formation en ligne",
      year: "2023",
      color: "from-blue-400 to-cyan-400"
    },
    {
      name: "Node.js & Express",
      issuer: "Formation professionnelle",
      year: "2023",
      color: "from-green-400 to-emerald-400"
    },
    {
      name: "React Native",
      issuer: "Auto-formation",
      year: "2024",
      color: "from-purple-400 to-pink-400"
    },
    {
      name: "UI/UX Design",
      issuer: "Figma & Adobe",
      year: "2022",
      color: "from-orange-400 to-red-400"
    }
  ];

  return (
    <section id="formation" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Formation & Certifications
            </span>
          </h2>

          {/* Education Timeline */}
          <div className="max-w-4xl mx-auto mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Parcours Académique</h3>
            
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative mb-12 last:mb-0"
              >
                {/* Timeline line */}
                {index < education.length - 1 && (
                  <div className="absolute left-6 top-20 w-0.5 h-32 bg-gradient-to-b from-gray-600 to-transparent"></div>
                )}

                <div className="flex items-start space-x-6">
                  {/* Timeline dot */}
                  <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${edu.color} rounded-full flex items-center justify-center shadow-lg`}>
                    {edu.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 group">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h4 className="text-2xl font-bold text-white mb-2">{edu.degree}</h4>
                        <h5 className={`text-xl font-semibold bg-gradient-to-r ${edu.color} bg-clip-text text-transparent mb-2`}>
                          {edu.institution}
                        </h5>
                        <p className="text-gray-400 font-medium">{edu.field}</p>
                      </div>
                      <div className="flex flex-col lg:items-end space-y-2 mt-4 lg:mt-0">
                        <div className="flex items-center space-x-2 text-gray-400">
                          <Calendar className="w-4 h-4" />
                          <span className="font-medium">{edu.period}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-400">
                          <MapPin className="w-4 h-4" />
                          <span>{edu.location}</span>
                          <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">{edu.type}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      {edu.achievements.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="flex items-start space-x-3">
                          <Award className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 leading-relaxed">{achievement}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {edu.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-gray-700/50 border border-gray-600/50 rounded-full text-sm text-gray-300 font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Certifications & Formations Complémentaires</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 group hover:scale-105"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-3 h-3 bg-gradient-to-r ${cert.color} rounded-full`}></div>
                    <span className="text-gray-400 text-sm font-medium">{cert.year}</span>
                  </div>
                  
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300">
                    {cert.name}
                  </h4>
                  
                  <p className="text-gray-400 text-sm">{cert.issuer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};