import React from 'react';
import { motion } from 'framer-motion';
import obat from '../assets/obat.jpg';
import lab from '../assets/lab.jpg';
import chem from '../assets/chem.jpg';

const achievements = [
  {
    id: 1,
    title: "Sarjana's Thesis: Virtual Screening of Estrogen Receptor Inhibitor Compounds",
    description: 'Analyzed potential breast cancer inhibitor candidates using a virtual screening-based machine learning approach. The process involved QSAR modeling, ZINC database analysis, clustering with the Butina algorithm, and ADMET analysis.',
    image: obat,
  },
  {
    id: 2,
    title: 'Chemical Analysis Techniques',
    description: 'Developed and optimized chemical analysis techniques, such as spectroscopy (UV-Vis, AAS, FTIR), during laboratory assistantship at the University of Jember.',
    image: lab,
  },
];

const ChemicalScience = () => {
  return (
    <section className="bg-gradient-to-b from-purple-50 to-white py-20 px-4 md:px-8" id="chemical-science">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-purple-800 mb-4">
            Academic Journey
          </h2>
          <div className="w-24 h-1 bg-purple-500 mx-auto mb-8"></div>
        </motion.div>

        {/* Introduction */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col lg:flex-row items-center justify-between mb-20"
        >
          <div className="lg:w-1/3 mb-8 lg:mb-0">
            <motion.img 
              src={chem}
              alt="Chemistry Lab" 
              className="w-full h-auto rounded-lg shadow-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div className="lg:w-2/3 lg:pl-12">
            <h3 className="text-3xl font-bold text-purple-700 mb-6">Chemistry Science - UNEJ</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I graduated with a degree in Chemistry from the University of Jember, where I developed extensive knowledge in chemical reactions, laboratory practices, and data analysis. My coursework and research have equipped me with analytical skills for both practical and research applications.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Additionally, I gained experience in operating advanced instruments such as UV-Vis Spectrophotometers, Atomic Absorption Spectroscopy (AAS), FTIR, and Refractometry.
            </p>
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold text-purple-800 mb-10 text-center">
            Key Achievements
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {achievements.map((achievement, index) => (
              <motion.div 
                key={achievement.id} 
                className="bg-white rounded-lg shadow-xl overflow-hidden transform transition duration-300 hover:shadow-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                whileHover={{ scale: 1.02 }}
              >
                <img src={achievement.image} alt={achievement.title} className="w-full h-64 object-cover" />
                <div className="p-8">
                  <h4 className="text-2xl font-semibold text-purple-700 mb-4">{achievement.title}</h4>
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