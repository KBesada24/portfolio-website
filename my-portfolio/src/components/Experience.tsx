'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, TrendingUp, Zap, Building, Award } from 'lucide-react';
import { experience } from '@/data/portfolio';

const Experience = () => {
  const [selectedType, setSelectedType] = useState('All');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const types = ['All', ...Array.from(new Set(experience.map(exp => exp.type)))];
  const filteredExperience = selectedType === 'All' 
    ? experience 
    : experience.filter(exp => exp.type === selectedType);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16 flex flex-col items-center justify-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Professional Experience
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-center">
              My journey through impactful roles in web development, team leadership, and technical education
            </p>
          </motion.div>

          {/* Type Filter */}
          <motion.div variants={itemVariants} className="flex justify-center mb-12">
            <div className="flex flex-wrap gap-2 p-1 bg-gray-50 dark:bg-gray-900 rounded-full shadow-lg">
              {types.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    selectedType === type
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Experience Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-8"
          >
            {filteredExperience.map((exp) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Experience Header */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Building size={20} className="text-blue-600 dark:text-blue-400" />
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {exp.company}
                        </h3>
                        <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                          exp.type === 'Internship' 
                            ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                            : 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200'
                        }`}>
                          {exp.type}
                        </span>
                      </div>
                      <p className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
                        {exp.position}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                        <div className="flex items-center">
                          <MapPin size={14} className="mr-1" />
                          {exp.location}
                        </div>
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-1" />
                          {exp.duration}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Key Metrics */}
                  {exp.impact && (
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                      {Object.entries(exp.impact).map(([key, value]) => (
                        <div key={key} className="text-center p-3 bg-white dark:bg-gray-800 rounded-lg">
                          <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                            {value}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                      <Zap size={16} className="mr-2 text-blue-600 dark:text-blue-400" />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Achievements */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                      <Award size={16} className="mr-2 text-green-600 dark:text-green-400" />
                      Key Achievements
                    </h4>
                    <ul className="flex flex-col gap-3">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                          <TrendingUp size={14} className="text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Leadership Section */}
          <motion.div variants={itemVariants} className="mt-16">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Leadership Experience
            </h3>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-900/20 rounded-2xl p-8">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-4">
                  <Building size={24} className="text-purple-600 dark:text-purple-400" />
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Virgin Mary St. George Summer Camp
                  </h4>
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm font-medium rounded-full">
                    Leadership
                  </span>
                </div>
                <p className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-2">
                  Camp Leader
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
                  <div className="flex items-center">
                    <MapPin size={14} className="mr-1" />
                    Staten Island, New York
                  </div>
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    June 2020 – August 2020
                  </div>
                </div>
                <ul className="grid md:grid-cols-2 gap-4">
                  <li className="flex items-start text-gray-600 dark:text-gray-400">
                    <TrendingUp size={16} className="text-purple-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Led Bible study sessions for kids, fostering their spiritual growth and understanding</span>
                  </li>
                  <li className="flex items-start text-gray-600 dark:text-gray-400">
                    <TrendingUp size={16} className="text-purple-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Ensured full participation in group activities, promoting teamwork and inclusivity</span>
                  </li>
                  <li className="flex items-start text-gray-600 dark:text-gray-400 md:col-span-2">
                    <TrendingUp size={16} className="text-purple-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Coordinated with other counselors and leaders to plan a new trip every week to make sure that all are included</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
