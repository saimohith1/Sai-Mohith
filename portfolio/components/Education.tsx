'use client';

import { motion } from 'framer-motion';
import { AcademicCapIcon } from '@heroicons/react/24/outline';

const Education = () => {
  const education = [
    {
      degree: 'Class 10 - SSC',
      institution: 'FIITJEE School',
      year: '2020',
      percentage: '100%',
    },
    {
      degree: 'Class 12 - Intermediate',
      institution: 'Narayana Junior College',
      year: '2022',
      percentage: '92%',
    },
    {
      degree: 'BTech - Electrical and Electronics Engineering',
      institution: 'Jawaharlal Nehru Technological University',
      year: '2022-2026',
      percentage: '70%',
    },
    {
      degree: 'BS - Data Science and Applications',
      institution: 'Indian Institute of Technology Madras',
      year: '2022-2027',
      percentage: '79%',
    },
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 top-0 h-full w-1 bg-blue-200"></div>
          
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 mb-8 last:mb-0"
            >
              <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-blue-600 -ml-2"></div>
              <div className="bg-blue-50 p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-2">
                  <AcademicCapIcon className="h-6 w-6 text-blue-600 mr-2" />
                  <h3 className="text-xl font-semibold text-gray-900">{edu.degree}</h3>
                </div>
                <p className="text-gray-600 mb-2">{edu.institution}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{edu.year}</span>
                  <span className="font-medium text-blue-600">{edu.percentage}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education; 