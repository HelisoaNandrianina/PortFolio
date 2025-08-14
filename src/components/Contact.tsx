import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, MapPin, MessageCircle, Instagram, ExternalLink, Phone, Github, Linkedin } from 'lucide-react';

export const Contact: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Vous pouvez modifier ces informations selon vos besoins
  const whatsappNumber = "+261348371251"; 
  const instagramHandle = "soa_kelyy"; 
  const email = "hnradimimanana@gmail.com";
  const number = "+261 32 31 048 64";
  const github = "HelisoaNandrianina";
  const linkdin = "Nandrianina Radimimanana";

  const contactMethods = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "WhatsApp",
      description: "Envoyez-moi un message directement",
      action: "Envoyer un message",
      link: `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=Bonjour, je souhaite discuter d'un projet avec vous.`,
      gradient: "from-green-500 to-green-600",
      hoverGradient: "from-green-600 to-green-700"
    },
    {
      icon: <Instagram className="w-8 h-8" />,
      title: "Instagram",
      description: "Suivez-moi sur Instagram",
      action: "Voir le profil",
      link: `https://instagram.com/${instagramHandle}`,
      gradient: "from-pink-500 to-purple-600",
      hoverGradient: "from-pink-600 to-purple-700"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email",
      description: "Envoyez-moi un email professionnel",
      action: "Envoyer un email",
      link: `mailto:${email}?subject=Demande de collaboration&body=Bonjour, j'aimerais discuter d'un projet avec vous.`,
      gradient: "from-blue-500 to-blue-600",
      hoverGradient: "from-blue-600 to-blue-700"
    }
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: email,
      link: `mailto:${email}`
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Numero Télephone",
      value: number,
      link: null
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      value: "+261 34 83 712 51",
      link: `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}`
    },
    {
      icon: <Github className="w-6 h-6" />,
      title: "Github",
      value: github,
      link: `https://github.com/HelisoaNandrianina`
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "Linkedin",
      value: linkdin,
      link:  `https://www.linkedin.com/in/nandrianina-radimimanana`
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Localisation",
      value: "Madagascar",
      link: null
    },
    
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900/30">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Contact
            </span>
          </h2>

          <div className="max-w-6xl mx-auto">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-12"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Travaillons ensemble</h3>
              <p className="text-gray-400 leading-relaxed max-w-3xl mx-auto">
                Vous avez un projet en tête ? Une idée à développer ? 
                N'hésitez pas à me contacter via l'une des plateformes ci-dessous. 
                Je serais ravie de vous accompagner dans la réalisation de vos projets numériques.
              </p>
            </motion.div>

            {/* Contact Methods */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                  className="group"
                >
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl text-center">
                    <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${method.gradient} rounded-full mb-6 group-hover:shadow-lg transition-all duration-300`}>
                      <div className="text-white">
                        {method.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">{method.title}</h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">{method.description}</p>
                    
                    <a
                      href={method.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center space-x-2 w-full bg-gradient-to-r ${method.gradient} hover:${method.hoverGradient} text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 transform hover:scale-105`}
                    >
                      <span>{method.action}</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/30"
            >
              <h4 className="text-xl font-bold text-white mb-6 text-center">Informations de contact</h4>
              <div className="grid md:grid-cols-3 gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                    className="flex items-center space-x-4 p-4 bg-gray-800/40 rounded-lg hover:bg-gray-800/60 transition-colors duration-300"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <div className="text-white">
                        {info.icon}
                      </div>
                    </div>
                    <div>
                      <h5 className="text-white font-medium">{info.title}</h5>
                      {info.link ? (
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-gray-400 text-sm">{info.value}</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};