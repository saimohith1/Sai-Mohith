'use client';

import { motion } from 'framer-motion';
import { AcademicCapIcon, BookOpenIcon, CodeBracketIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const Certifications = () => {
  const certifications = [
    {
      title: 'English for Career Development',
      issuer: 'University of Pennsylvania',
      icon: AcademicCapIcon,
    },
    {
      title: 'Elements of AI',
      issuer: 'University of Helsinki',
      icon: BookOpenIcon,
    },
    {
      title: 'AI/ML for Geodata Analysis',
      issuer: 'ISRO',
      icon: ChartBarIcon,
    },
    {
      title: 'SQL (Basic & Intermediate)',
      issuer: 'HackerRank',
      icon: CodeBracketIcon,
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Certifications</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <cert.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{cert.title}</h3>
                <p className="text-gray-600">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications; 