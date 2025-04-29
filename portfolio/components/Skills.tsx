'use client';

import { motion } from 'framer-motion';

const Skills = () => {
  const technicalSkills = [
    { name: 'Python', level: 'Advanced' },
    { name: 'SQL', level: 'Advanced' },
    { name: 'Data Analysis', level: 'Advanced' },
  ];

  const nonTechnicalSkills = [
    { name: 'Time Management', level: 'Advanced' },
    { name: 'Leadership', level: 'Advanced' },
    { name: 'Effective Communication', level: 'Advanced' },
    { name: 'Critical Thinking', level: 'Advanced' },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Skills</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-blue-50 p-6 rounded-xl shadow-lg"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Skills</h3>
            <div className="space-y-4">
              {technicalSkills.map((skill) => (
                <div key={skill.name} className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-900">{skill.name}</span>
                    <span className="text-sm text-blue-600">{skill.level}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-blue-50 p-6 rounded-xl shadow-lg"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Non-Technical Skills</h3>
            <div className="space-y-4">
              {nonTechnicalSkills.map((skill) => (
                <div key={skill.name} className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-900">{skill.name}</span>
                    <span className="text-sm text-blue-600">{skill.level}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 