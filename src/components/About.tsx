import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Lightbulb, Users, Target } from 'lucide-react';

export const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const qualities = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Passion",
      description: "Diplômée de l'ISPM, passionnée par le développement et l'innovation technologique"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Curiosité",
      description: "Toujours en quête de nouvelles technologies et méthodes pour créer des solutions optimales"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Esprit d'équipe",
      description: "Collaboration efficace et communication transparente pour des projets réussis"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Autonomie",
      description: "Capacité à mener des projets de bout en bout avec rigueur et professionnalisme"
    }
  ];

  return (
    <section id="apropos" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              À propos
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center p-2">
                  <div className="w-72 h-72 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full overflow-hidden flex items-center justify-center p-2">
                    <img
                      src="../../public/image/photo_CV.jpeg" // Remplacez par le chemin vers votre photo
                      alt="Photo de profil"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                Développeur full-stack passionnée basée à Madagascar, je me spécialise dans la création 
                de solutions numériques innovantes et accessibles. Diplômée de l'ISPM, j'allie expertise 
                technique et créativité pour donner vie à des projets web et mobile de qualité.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Mon approche se base sur l'innovation, l'écoute des besoins utilisateurs et la création 
                d'expériences numériques qui font sens. Je crois fermement au pouvoir de la technologie 
                pour créer un impact positif et humain.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                {['JavaScript', 'React', 'Node.js', 'React Native', 'TypeScript'].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-sm font-medium text-blue-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
          >
            {qualities.map((quality, index) => (
              <motion.div
                key={quality.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-blue-400">
                    {quality.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{quality.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{quality.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};