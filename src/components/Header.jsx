import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProfilePhoto from '../assets/deby.jpg'; // Replace this with your own image
import CV from '../assets/deby_cv.pdf'; // Replace with your CV PDF file path

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-gradient-to-r from-purple-100 to-pink-50 text-gray-900 font-poppins" id='header'>
      {/* Navbar */}
      <nav className="container mx-auto flex justify-between items-center py-4 px-4 md:py-6 md:px-8">
        <div className="text-2xl md:text-4xl font-extrabold tracking-tight text-purple-700">Deby Calvenia</div>
        <ul className="hidden lg:flex space-x-6 xl:space-x-10 text-lg">
          <li><a href="#header" className="hover:text-purple-500 transition duration-300">Intro</a></li>
          <li><a href="#about" className="hover:text-purple-500 transition duration-300">About</a></li>
          <li><a href="#chemical-science" className="hover:text-purple-500 transition duration-300">Projects</a></li>
          <li><a href="#footer" className="hover:text-purple-500 transition duration-300">Contact</a></li>
        </ul>
        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-purple-700 hover:text-purple-500 focus:outline-none">
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white shadow-md"
          >
            <ul className="py-2 px-4">
              <li><a href="#intro" className="block py-2 hover:text-purple-500 transition duration-300">Intro</a></li>
              <li><a href="#about" className="block py-2 hover:text-purple-500 transition duration-300">About</a></li>
              <li><a href="#skills" className="block py-2 hover:text-purple-500 transition duration-300">Skills</a></li>
              <li><a href="#projects" className="block py-2 hover:text-purple-500 transition duration-300">Projects</a></li>
              <li><a href="#contact" className="block py-2 hover:text-purple-500 transition duration-300">Contact</a></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between py-8 md:py-16 px-4 md:px-8">
        {/* Text Section */}
        <motion.div
          className="text-center lg:text-left lg:w-1/2 mt-8 lg:mt-0"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 lg:leading-normal text-purple-700">
            Chemistry Graduate & Aspiring R&D Analyst
          </h1>

          <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 text-gray-600 leading-relaxed">
            With hands-on lab experience and a passion for data science, I'm skilled in operating advanced equipment and using computational chemistry software. Ready to contribute to innovative research and development.
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            {/* Primary Button: Download CV */}
            <motion.a
              href={CV}
              download="Deby_Calvenia_CV.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-purple-600 text-white font-medium px-8 py-3 rounded-full shadow-lg hover:bg-purple-700 transition-all duration-300 focus:ring-4 focus:ring-purple-300 text-center"
            >
              Download CV
            </motion.a>

            {/* Secondary Button: Get in Touch */}
            <motion.a
              href="#footer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-transparent border border-purple-600 text-purple-600 font-medium px-8 py-3 rounded-full shadow-lg hover:bg-purple-600 hover:text-white transition-all duration-300 focus:ring-4 focus:ring-purple-300 text-center"
            >
              Get in Touch
            </motion.a>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <img
            src={ProfilePhoto}
            alt="Deby Calvenia"
            className="rounded-full shadow-2xl w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 object-cover border-4 border-purple-300"
          />
        </motion.div>
      </div>
    </header>
  );
};

export default Header;