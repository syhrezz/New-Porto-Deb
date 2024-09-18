// src/components/Projects.js
import React from 'react';
import { motion } from 'framer-motion';
import ProjectImage1 from '../assets/Reza_non frml.png'; // Replace with your project image
import ProjectImage2 from '../assets/Reza_non frml.png'; // Replace with your project image
import ProjectImage3 from '../assets/Reza_non frml.png'; // Replace with your project image

const projects = [
  {
    id: 1,
    title: 'Project One',
    description: 'A detailed description of Project One. This project involved working with cutting-edge technologies to deliver a beautiful and efficient solution.',
    image: ProjectImage1,
    link: '#',
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'A detailed description of Project Two. A project focused on providing seamless user experiences and advanced data processing.',
    image: ProjectImage2,
    link: '#',
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'A detailed description of Project Three. This project involved collaborating with multiple teams to create a scalable and efficient system.',
    image: ProjectImage3,
    link: '#',
  },
];

const Projects = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8" id="projects">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-purple-700">My Projects</h2>
          <p className="text-lg text-gray-600 mt-4">
            Here are some of the projects I’ve worked on. Each project showcases my expertise and dedication to delivering top-notch results.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {/* Project Image */}
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover object-top hover:scale-105 transition-transform duration-500"
                whileHover={{ scale: 1.05 }}
              />

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-purple-700 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-6">{project.description}</p>
                <a
                  href={project.link}
                  className="inline-block bg-purple-600 text-white font-medium py-2 px-6 rounded-full hover:bg-purple-700 transition duration-300 focus:ring-4 focus:ring-purple-300"
                >
                  Explore Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
