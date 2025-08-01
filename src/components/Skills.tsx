import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Palette, Database, Smartphone, Globe, Settings, Wrench } from 'lucide-react';

export const Skills: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Programmation",
      color: "from-blue-500 to-cyan-500",
      skills: ["JavaScript", "TypeScript","PHP"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Developpement Web",
      color: "from-purple-500 to-pink-500",
      skills: ["ReactJS", "Tailwind CSS", "HTML", "CSS" ,"EJS","Symfony"]
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Back-end",
      color: "from-green-500 to-teal-500",
      skills: ["Node.js", "ExpressJS", "Symfony", "API REST"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Developpement Mobile",
      color: "from-orange-500 to-red-500",
      skills: ["React Native", "PWA","Expo", "Mobile-First Design", ]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Bases de données",
      color: "from-indigo-500 to-blue-500",
      skills: ["PostgreSQL", "MongoDB","Sequelize"]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Design",
      color: "from-pink-500 to-rose-500",
      skills: ["Figma", "Photoshop", "Illustrator", "UI/UX", "Prototyping"]
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Outils de développement",
      color: "from-gray-500 to-zinc-500",
      skills: ["Git", "GitLab", "VSCode", "Postman", "PgAdmin"]
    }
  ];

  return (
    <section id="competences" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Compétences Techniques
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-gray-600 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.4, delay: (index * 0.1) + (skillIndex * 0.05) }}
                      className="flex items-center space-x-3"
                    >
                      <div className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full`}></div>
                      <span className="text-gray-300 font-medium">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Soft Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-bold mb-8 text-white">Soft Skills</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['Curiosité', 'Autonomie', 'Esprit d\'équipe', 'Innovation', 'Communication', 'Adaptabilité'].map((skill) => (
                <span
                  key={skill}
                  className="px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 rounded-full text-gray-300 font-medium hover:border-blue-500/50 hover:text-white transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};