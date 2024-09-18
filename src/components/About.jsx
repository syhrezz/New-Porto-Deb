// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import SkillIcon1 from '../assets/logo192.png'; // Replace with your skill icon
import SkillIcon2 from '../assets/logo192.png'; // Replace with your skill icon
import SkillIcon3 from '../assets/logo192.png'; // Replace with your skill icon
 // Replace with your skill icon
import CompanyLogo1 from '../assets/logo192.png'; // Replace with company logo
import CompanyLogo2 from '../assets/logo192.png'; // Replace with company logo

const skills = [
  { id: 1, name: 'Product Design', icon: SkillIcon1, alt: 'Product Design Icon' },
  { id: 2, name: 'Business Analysis', icon: SkillIcon2, alt: 'Business Analysis Icon' },
  { id: 3, name: 'UI/UX Design', icon: SkillIcon3, alt: 'UI/UX Design Icon' },
];

const experiences = [
  {
    id: 1,
    company: 'Company One',
    title: 'Product Designer',
    duration: 'June 2021 - Present',
    logo: CompanyLogo1,
    description: 'Designed and developed user interfaces for web and mobile applications. Worked closely with cross-functional teams to create user-centered solutions and enhance user experiences.'
  },
  {
    id: 2,
    company: 'Company Two',
    title: 'Business Analyst',
    duration: 'January 2020 - May 2021',
    logo: CompanyLogo2,
    description: 'Analyzed business requirements, developed detailed reports, and presented findings to stakeholders. Played a key role in driving data-driven decision-making and strategic planning.'
  },
  {
    id: 3,
    company: 'Company Three',
    title: 'UI/UX Designer',
    duration: 'July 2018 - December 2019',
    logo: null,
    description: 'Created intuitive and visually appealing designs for web and mobile applications. Conducted user research and usability testing to ensure optimal user experiences.'
  },
];

const About = () => {
  return (
    <section className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 py-16 px-4 md:px-8" id="about">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-purple-800 mb-4">About Me</h2>
          <p className="text-lg text-gray-700">
            I am a passionate professional with a diverse set of skills in product design, business analysis, and UI/UX. My goal is to deliver exceptional solutions and drive innovation.
          </p>
        </div>

        {/* Skills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center transition-transform transform hover:scale-105"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-24 h-24 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                <img
                  src={skill.icon}
                  alt={skill.alt}
                  className="w-12 h-12"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{skill.name}</h3>
              <p className="text-gray-600 text-center">Expertise in this area</p>
              <div className="w-full bg-gray-200 rounded-full mt-4">
                <div className="bg-purple-500 text-xs font-medium text-white text-center p-0.5 leading-none rounded-full" style={{ width: '80%' }}>80%</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Experience */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-purple-800 mb-6">Experience</h3>
          <div className="relative">
            <div className="absolute left-0 top-0 h-full border-l-2 border-purple-300"></div>
            <div className="space-y-8 pl-8">
              {experiences.map((exp) => (
                <div key={exp.id} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-full text-white flex items-center justify-center">
                    {exp.logo ? (
                      <img src={exp.logo} alt={`Logo of ${exp.company}`} className="w-10 h-10 object-cover" />
                    ) : (
                      <span className="text-lg font-semibold">•</span>
                    )}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">{exp.title}</h4>
                    <h5 className="text-md font-medium text-gray-600 mb-1">{exp.company}</h5>
                    <p className="text-sm text-gray-500 mb-2">{exp.duration}</p>
                    <p className="text-gray-600">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
