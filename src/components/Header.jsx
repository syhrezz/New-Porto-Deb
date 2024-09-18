// src/components/Header.js
import React from 'react';
import { motion } from 'framer-motion';
import ProfilePhoto from '../assets/Reza_non frml.png'; // Replace this with your own image

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-100 to-pink-50 text-gray-900 font-poppins">
      {/* Navbar */}
      <nav className="container mx-auto flex justify-between items-center py-6 px-4 md:px-8">
        <div className="text-4xl font-extrabold tracking-tight text-purple-700">Deby Calvenia</div>
        <ul className="hidden md:flex space-x-10 text-lg">
        <li><a href="#about" className="hover:text-purple-500 transition duration-300">Intro</a></li>
          <li><a href="#about" className="hover:text-purple-500 transition duration-300">About</a></li>
          <li><a href="#about" className="hover:text-purple-500 transition duration-300">Skills</a></li>
          <li><a href="#projects" className="hover:text-purple-500 transition duration-300">Projects</a></li>
          <li><a href="#contact" className="hover:text-purple-500 transition duration-300">Contact</a></li>
        </ul>
        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button className="text-purple-700 hover:text-purple-500 focus:outline-none">☰</button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between py-16 px-4 md:px-8">
        {/* Text Section */}
        <motion.div
          className="text-center md:text-left md:w-1/2"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-purple-700">
            Crafting Solutions with Passion
          </h1>

          <p className="text-lg md:text-xl mb-8 text-gray-600 leading-relaxed">
            I’m Syah, a driven product manager and developer with a knack for creating efficient, beautiful solutions. Let’s make an impact together!
          </p>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-purple-600 text-white font-medium px-10 py-4 rounded-full shadow-lg hover:bg-purple-700 transition-all duration-300 focus:ring-4 focus:ring-purple-300"
          >
            Get in Touch
          </motion.a>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="mt-10 md:mt-0 md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <img
            src={ProfilePhoto}
            alt="Deby Calvenia"
            className="rounded-full shadow-2xl w-72 h-72 object-cover border-4 border-purple-300"
          />
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
