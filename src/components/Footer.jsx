import React from 'react';
import { motion } from 'framer-motion';

const socialLinks = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/debycalvenianovitasari/' },
  { name: 'Instagram', url: 'https://www.instagram.com/debycalveniaa' },
  // Add more social media links as needed
];

const contactInfo = {
  email: 'debycalveniaa29@gmail.com',
  location: 'Sidoarjo, Indonesia'
};

const Footer = () => {
  return (
    <footer className="bg-purple-900 text-white py-12" id='footer'>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Social Media Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
            <ul className="space-y-2">
              {socialLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-300 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-2">
              <li>Email: {contactInfo.email}</li>
              <li>Location: {contactInfo.location}</li>
            </ul>
          </motion.div>

          {/* Quick Links or Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-purple-300 transition-colors duration-300">Home</a></li>
              <li><a href="#about" className="hover:text-purple-300 transition-colors duration-300">About</a></li>
              <li><a href="#chemical-science" className="hover:text-purple-300 transition-colors duration-300">Projects</a></li>
              <li><a href="#contact" className="hover:text-purple-300 transition-colors duration-300">Contact</a></li>
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 pt-8 border-t border-purple-700 text-center"
        >
          <p>&copy; {new Date().getFullYear()} Deby Calvenia. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;