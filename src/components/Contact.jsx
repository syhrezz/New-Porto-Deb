// src/components/Contact.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState(''); // To show success or error messages

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    // For demonstration, we are just showing a success message
    setFormStatus('Your message has been sent successfully!');
  };

  return (
    <section className="bg-gray-100 py-16 px-4 md:px-8" id="contact">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-purple-800 mb-4">Contact Me</h2>
          <p className="text-lg text-gray-700">
            Feel free to reach out to me through any of the following methods or send a message using the form below.
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6 flex items-center">
            <FaEnvelope className="text-3xl text-purple-500 mr-4" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Email</h3>
              <p className="text-gray-600">your.email@example.com</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 flex items-center">
            <FaPhoneAlt className="text-3xl text-purple-500 mr-4" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Phone</h3>
              <p className="text-gray-600">+123 456 7890</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 flex items-center">
            <FaLinkedin className="text-3xl text-purple-500 mr-4" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">LinkedIn</h3>
              <p className="text-gray-600">
                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">
                  linkedin.com/in/yourprofile
                </a>
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 flex items-center">
            <FaGithub className="text-3xl text-purple-500 mr-4" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">GitHub</h3>
              <p className="text-gray-600">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">
                  github.com/yourusername
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h3>
          {formStatus && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className={`mb-4 p-4 rounded-lg ${formStatus.includes('success') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
            >
              {formStatus}
            </motion.div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
