import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code, Coffee } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
              Nandrianina Radimimanana
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Développeuse Full-Stack passionnée, créant des solutions numériques innovantes à Madagascar
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center space-x-2 text-gray-400 mb-8"
          >
            <span>Fait avec</span>
            <Heart className="w-4 h-4 text-red-400" />
            <span>&</span>
            <Code className="w-4 h-4 text-blue-400" />
            <span>&</span>
            <Coffee className="w-4 h-4 text-yellow-600" />
            <span>à Madagascar</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-gray-800"
          >
            <p className="text-gray-500 text-sm mb-4 sm:mb-0">
              © 2024 Nandrianina Radimimanana. Tous droits réservés.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors duration-300 text-sm">
                Mentions légales
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors duration-300 text-sm">
                Confidentialité
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};