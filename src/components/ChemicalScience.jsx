import React from 'react';
import { motion } from 'framer-motion';

const achievements = [
  {
    id: 1,
    title: "Sarjana's Thesis: Virtual Screening of Estrogen Receptor Inhibitor Compounds",
    description: 'Analyzed potential breast cancer inhibitor candidates using a virtual screening-based machine learning approach. The process involved QSAR modeling, ZINC database analysis, clustering with the Butina algorithm, and ADMET analysis.',
    image: '/api/placeholder/400/300',
  },
  {
    id: 2,
    title: 'Chemical Analysis Techniques',
    description: 'Developed and optimized chemical analysis techniques, such as spectroscopy (UV-Vis, AAS, FTIR), during laboratory assistantship at the University of Jember.',
    image: '/api/placeholder/400/300',
  },
];

const ChemicalScience = () => {
  return (
    <section className="bg-gradient-to-b from-purple-50 to-white py-16 px-4 md:px-8" id="chemical-science">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-purple-800 mb-4">
            Chemical Science Background
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            As a graduate from the University of Jember's Chemistry Department, I have built a solid foundation in chemical sciences, focusing on laboratory techniques, chemical analysis, and research. My experience includes practical applications in advanced chemical instruments and computational chemistry.
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center mb-16"
        >
          <div className="flex-shrink-0 w-full md:w-1/2 mb-8 md:mb-0">
            <motion.img 
              src="/api/placeholder/600/400" 
              alt="Laboratory Work" 
              className="w-full h-auto rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div className="md:ml-12 w-full md:w-1/2">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Academic Background</h3>
            <p className="text-gray-600 leading-relaxed">
              I graduated with a degree in Chemistry from the University of Jember, where I developed extensive knowledge in chemical reactions, laboratory practices, and data analysis. My coursework and research have equipped me with analytical skills for both practical and research applications. Additionally, I gained experience in operating advanced instruments such as UV-Vis Spectrophotometers, Atomic Absorption Spectroscopy (AAS), FTIR, and Refractometry.
            </p>
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-purple-800 mb-8">
            Key Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div 
                key={achievement.id} 
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                whileHover={{ scale: 1.05 }}
              >
                <img src={achievement.image} alt={achievement.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">{achievement.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ChemicalScience;