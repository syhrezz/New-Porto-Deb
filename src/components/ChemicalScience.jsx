// src/components/ChemicalScience.jsx
import React from 'react';
import LabImage from '../assets/logo192.png'; // Replace with an image related to chemical science
import ProjectImage1 from '../assets/logo192.png'; // Replace with project images
import ProjectImage2 from '../assets/logo192.png'; // Replace with project images

const achievements = [
  {
    id: 1,
    title: 'Research Project on Organic Chemistry',
    description: 'Conducted in-depth research on organic compounds and their reactions, leading to a published paper in a renowned journal.',
    image: ProjectImage1,
  },
  {
    id: 2,
    title: 'Chemical Analysis Techniques',
    description: 'Developed and optimized various chemical analysis techniques, including spectroscopy and chromatography.',
    image: ProjectImage2,
  },
];

const ChemicalScience = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8" id="chemical-science">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-purple-800 mb-4">Chemical Science Background</h2>
          <p className="text-lg text-gray-700">
            My academic background in Chemical Science has equipped me with a strong foundation in chemistry, laboratory techniques, and research. Here are some highlights of my achievements and projects.
          </p>
        </div>

        {/* Introduction */}
        <div className="flex flex-col md:flex-row items-center mb-12">
          <div className="flex-shrink-0 w-full md:w-1/2">
            <img src={LabImage} alt="Laboratory Work" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
          <div className="md:ml-8 mt-6 md:mt-0">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Academic Background</h3>
            <p className="text-gray-600">
              With a major in Chemical Science, I have gained extensive knowledge in chemical reactions, laboratory practices, and data analysis. My education has provided me with the analytical skills necessary for both practical and research-based applications.
            </p>
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-2xl font-bold text-purple-800 mb-6">Key Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement) => (
              <div key={achievement.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={achievement.image} alt={achievement.title} className="w-full h-40 object-cover" />
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">{achievement.title}</h4>
                  <p className="text-gray-600">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChemicalScience;
