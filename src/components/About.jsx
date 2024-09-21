import React from 'react';
import { motion } from 'framer-motion';
import UniversityLogo from '../assets/unej.jpg'; // Add the actual logo of the university
import BpmFmipaLogo from '../assets/bpm.jpg'; // Add the actual logo for BPM FMIPA

const BeakerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 3h6v4l-3 7.5L15 22H9l3-7.5L9 7V3z"/>
    <path d="M6 10.6V3h12v7.6"/>
  </svg>
);

const DataIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 3v18"/>
    <path d="M18 6v12"/>
    <path d="M15 9v6"/>
    <path d="M12 3v18"/>
    <path d="M9 9v6"/>
    <path d="M6 6v12"/>
    <path d="M3 3v18"/>
  </svg>
);

const MicroscopeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 18h8"/>
    <path d="M3 22h18"/>
    <path d="M14 22a7 7 0 1 0 0-14h-1"/>
    <path d="M9 14h2"/>
    <path d="M13 10V3.5a1.5 1.5 0 0 0-3 0V10"/>
    <path d="M10 13V4"/>
  </svg>
);

const skills = [
  { id: 1, name: 'Chemical Analysis', Icon: BeakerIcon, alt: 'Chemical Analysis Icon', percentage: 80 },
  { id: 2, name: 'Data Science', Icon: DataIcon, alt: 'Data Science Icon', percentage: 70 },
  { id: 3, name: 'Laboratory Techniques', Icon: MicroscopeIcon, alt: 'Laboratory Techniques Icon', percentage: 90 },
];

const experiences = [
  {
    id: 1,
    company: 'Department of Chemistry, University of Jember',
    title: 'Laboratory Assistant',
    duration: '2023 - 2024',
    description: 'Operated chemical instruments such as UV-VIS Spectrophotometer, AAS, FTIR, and XRF. Prepared practical requirements, assisted lecturers in managing activities, and coordinated in evaluating student performance for 80 students.',
    logo: UniversityLogo,
  },
  {
    id: 2,
    company: 'BADAN PERWAKILAN MAHASISWA FMIPA',
    title: 'Head of Commission 1 Aspiration',
    duration: 'Feb 2023 - Dec 2022',
    description: 'Managed work programs related to increasing aspiration absorption within the FMIPA environment. Successfully collected over 100 aspirations from students, contributing to faculty improvement and development.',
    logo: BpmFmipaLogo,
  },
];

const About = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 py-16 px-4 md:px-8" id="about">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-indigo-800 mb-4">About Me</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            As a Chemistry graduate from Universitas JEMBER, I bring a unique blend of analytical skills and scientific knowledge to the world of Chemical and R&D Analysis, with a strong passion for Data Science. My experience spans from hands-on laboratory work to computational chemistry and data analysis. I'm passionate about leveraging technology to solve complex chemical problems and drive innovation in the field.
          </p>
        </div>

        {/* Skills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center transition-all hover:shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-24 h-24 rounded-full bg-indigo-100 flex items-center justify-center mb-4 text-indigo-600">
                <skill.Icon />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{skill.name}</h3>
              <p className="text-gray-600 text-center">Expertise in this area</p>
              <div className="w-full bg-gray-200 rounded-full mt-4">
                <div 
                  className="bg-indigo-500 text-xs font-medium text-white text-center p-0.5 leading-none rounded-full" 
                  style={{ width: `${skill.percentage}%` }}
                >
                  {skill.percentage}%
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Experience */}
        <div>
          <h3 className="text-2xl font-bold text-indigo-800 mb-6">Experience</h3>
          <div className="relative">
            <div className="absolute left-0 top-0 h-full border-l-2 border-indigo-300"></div>
            <div className="space-y-8 pl-8">
              {experiences.map((exp, index) => (
                <motion.div 
                  key={exp.id} 
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 border border-gray-300">
                    <img src={exp.logo} alt={`${exp.company} logo`} className="w-full h-full object-contain p-1" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">{exp.title}</h4>
                    <h5 className="text-md font-medium text-indigo-600 mb-1">{exp.company}</h5>
                    <p className="text-sm text-gray-500 mb-2">{exp.duration}</p>
                    <p className="text-gray-600">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
