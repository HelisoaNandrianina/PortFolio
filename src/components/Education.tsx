import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Building, Hourglass } from 'lucide-react';

export const Education: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const education = [
    {
      institution: "Institut Supérieur Polytechnique de Madagascar",
      degree: "Master en Informatique et Télécommunication",
      field: "Parcours : Informatique de Gestion, Génie Logiciel et Intelligence Artificielle",
      period: "2025-Présent",
      location: "Antananarivo, Madagascar",
      type: "En cours",
      skills: ["JavaScript", "PHP", "Base de données", "Gestion de projet"],
      color: "from-green-500 to-yellow-500",
      icon: <Hourglass  className="w-6 h-6" />
    },
    {
      institution: "Institut Supérieur Polytechnique de Madagascar",
      degree: "Licence en Informatique et Télécommunication",
      field: "Parcours : Informatique de Gestion, Génie Logiciel et Intelligence Artificielle",
      period: "2024",
      location: "Antananarivo, Madagascar",
      type: "Diplôme",
      skills: ["JavaScript", "PHP", "Base de données", "Gestion de projet"],
      color: "from-blue-500 to-purple-500",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      institution: "Lycée Nanisana",
      degree: "Baccalauréat Scientifique",
      field: "Serie D",
      period: "2021",
      location: "Madagascar",
      type: "Diplôme",
      skills: ["Mathématiques", "Sciences", "Logique", "Analyse"],
      color: "from-green-500 to-teal-500",
      icon: <BookOpen className="w-6 h-6" />
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
              Education
            </span>
          </h2>

          {/* Education Timeline */}
          <div className="max-w-4xl mx-auto mb-16">
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
                        </div>
                        <div className="flex justify-end">
                          <span className="px-3 py-1 bg-gray-700 rounded-full text-xs text-gray-200 font-medium">
                            {edu.type}
                          </span>
                        </div>
                      </div>
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