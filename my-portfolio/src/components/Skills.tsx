'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Wrench, Globe, ChevronDown } from 'lucide-react';
import { skills } from '@/data/portfolio';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('frontend');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = {
    frontend: {
      icon: Globe,
      title: 'Frontend',
      color: 'blue',
      skills: skills.frontend,
    },
    backend: {
      icon: Code,
      title: 'Backend',
      color: 'green',
      skills: skills.backend,
    },
    databases: {
      icon: Database,
      title: 'Databases',
      color: 'purple',
      skills: skills.databases,
    },
    tools: {
      icon: Wrench,
      title: 'Tools & DevOps',
      color: 'orange',
      skills: skills.tools,
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const progressVariants = {
    hidden: { width: 0 },
    visible: (proficiency: number) => ({
      width: `${proficiency}%`,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.2,
      },
    }),
  };

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        bg: 'bg-blue-500',
        light: 'bg-blue-100 dark:bg-blue-900',
        text: 'text-blue-600 dark:text-blue-400',
        border: 'border-blue-500',
      },
      green: {
        bg: 'bg-green-500',
        light: 'bg-green-100 dark:bg-green-900',
        text: 'text-green-600 dark:text-green-400',
        border: 'border-green-500',
      },
      purple: {
        bg: 'bg-purple-500',
        light: 'bg-purple-100 dark:bg-purple-900',
        text: 'text-purple-600 dark:text-purple-400',
        border: 'border-purple-500',
      },
      orange: {
        bg: 'bg-orange-500',
        light: 'bg-orange-100 dark:bg-orange-900',
        text: 'text-orange-600 dark:text-orange-400',
        border: 'border-orange-500',
      },
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Technical Skills
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise across frontend, backend, databases, and development tools
            </p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-2 mb-12">
            {Object.entries(skillCategories).map(([key, category]) => {
              const Icon = category.icon;
              const colors = getColorClasses(category.color);
              const isActive = activeTab === key;
              
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all ${
                    isActive
                      ? `${colors.light} ${colors.text} border-2 ${colors.border}`
                      : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white border-2 border-transparent hover:border-gray-200 dark:hover:border-gray-600'
                  }`}
                >
                  <Icon size={20} className="mr-2" />
                  {category.title}
                </button>
              );
            })}
          </motion.div>

          {/* Skills Display */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
          >
            <div className="flex items-center mb-8">
              {(() => {
                const Icon = skillCategories[activeTab as keyof typeof skillCategories].icon;
                const colors = getColorClasses(skillCategories[activeTab as keyof typeof skillCategories].color);
                return (
                  <>
                    <div className={`p-3 ${colors.light} rounded-lg mr-4`}>
                      <Icon size={24} className={colors.text} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {skillCategories[activeTab as keyof typeof skillCategories].title} Skills
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {skillCategories[activeTab as keyof typeof skillCategories].skills.length} technologies
                      </p>
                    </div>
                  </>
                );
              })()}
            </div>

            {/* Skills Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {skillCategories[activeTab as keyof typeof skillCategories].skills.map((skill, index) => {
                const colors = getColorClasses(skillCategories[activeTab as keyof typeof skillCategories].color);
                
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="p-6 bg-gray-50 dark:bg-gray-700 rounded-xl"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {skill.name}
                      </h4>
                      <span className={`text-sm font-medium ${colors.text}`}>
                        {skill.proficiency}%
                      </span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                        <motion.div
                          className={`h-2 rounded-full ${colors.bg}`}
                          initial="hidden"
                          animate={inView ? "visible" : "hidden"}
                          variants={progressVariants}
                          custom={skill.proficiency}
                        />
                      </div>
                    </div>

                    {/* Projects */}
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                        Used in projects:
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {skill.projects.map((project) => (
                          <span
                            key={project}
                            className="px-2 py-1 bg-white dark:bg-gray-600 text-xs text-gray-600 dark:text-gray-300 rounded"
                          >
                            {project}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Category Summary */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 p-6 bg-gray-100 dark:bg-gray-700 rounded-xl"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {skillCategories[activeTab as keyof typeof skillCategories].skills.length}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Technologies</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {Math.round(
                      skillCategories[activeTab as keyof typeof skillCategories].skills.reduce(
                        (acc, skill) => acc + skill.proficiency, 0
                      ) / skillCategories[activeTab as keyof typeof skillCategories].skills.length
                    )}%
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Avg Proficiency</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {skillCategories[activeTab as keyof typeof skillCategories].skills.filter(
                      skill => skill.proficiency >= 85
                    ).length}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Expert Level</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {Array.from(new Set(
                      skillCategories[activeTab as keyof typeof skillCategories].skills.flatMap(
                        skill => skill.projects
                      )
                    )).length}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Projects Used</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;