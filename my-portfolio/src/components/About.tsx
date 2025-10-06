'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Heart, Trophy, Zap, BookOpen, Target } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

  const highlights = [
    {
      icon: <BookOpen className="text-blue-600 dark:text-blue-400" size={24} />,
      title: "Career Pivot",
      description: "Transitioned from pre-med to computer science, bringing analytical thinking and problem-solving skills to software development"
    },
    {
      icon: <Code className="text-purple-600 dark:text-purple-400" size={24} />,
      title: "Tech Enthusiast",
      description: "Always loved tinkering with technology and finding innovative ways to leverage it for solving real-world problems"
    },
    {
      icon: <Trophy className="text-green-600 dark:text-green-400" size={24} />,
      title: "Sports & Competition",
      description: "Passionate about basketball and football, bringing teamwork and competitive spirit to every project"
    },
    {
      icon: <Zap className="text-yellow-600 dark:text-yellow-400" size={24} />,
      title: "Work Ethic",
      description: "Firm believer that hard work beats talent - always ready to go the extra mile to prove myself and deliver results"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
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
              About Me
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-center">
              From medicine to code - a journey driven by passion, curiosity, and an unwavering work ethic
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Main Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <Heart className="text-red-500" size={28} />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">My Journey</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  I&apos;m a current <span className="font-semibold text-blue-600 dark:text-blue-400">computer science student</span> who 
                  was formerly pursuing medicine. While my path changed, the analytical thinking and problem-solving skills I developed 
                  have become invaluable assets in software development.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  I&apos;ve always been passionate about <span className="font-semibold text-purple-600 dark:text-purple-400">tinkering with technology</span> and 
                  finding innovative ways to use it to my advantage. This curiosity drives me to constantly learn and experiment with new tools and frameworks.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  I firmly believe that <span className="font-semibold text-green-600 dark:text-green-400">&quot;hard work beats talent&quot;</span> - 
                  and given the chance, I&apos;m ready to prove myself and make a meaningful impact.
                </p>
              </div>

              {/* Philosophy Card */}
              <motion.div 
                variants={itemVariants}
                className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-blue-900/20 p-8 rounded-2xl border border-blue-100 dark:border-gray-700"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Target className="text-blue-600 dark:text-blue-400" size={24} />
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">My Philosophy</h4>
                </div>
                <blockquote className="text-lg italic text-gray-700 dark:text-gray-300 font-medium">
                  &quot;Success isn&apos;t just about what you accomplish in your life, it&apos;s about what you inspire others to do. 
                  Every line of code is an opportunity to solve problems and create value.&quot;
                </blockquote>
              </motion.div>
            </motion.div>

            {/* Highlights Grid */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center lg:text-left mb-8">
                What Drives Me
              </h3>
              <div className="grid gap-6">
                {highlights.map((highlight) => (
                  <motion.div
                    key={highlight.title}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        {highlight.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          {highlight.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Fun Facts */}
          <motion.div variants={itemVariants} className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
              Beyond the Code
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                <div className="text-3xl mb-3">🏀</div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Basketball</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Love playing and watching basketball - teamwork on and off the court</p>
              </div>
              <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                <div className="text-3xl mb-3">🏈</div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Football</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Strategic thinking and execution - skills that translate to software development</p>
              </div>
              <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                <div className="text-3xl mb-3">💡</div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Innovation</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Always exploring new technologies and creative solutions to complex problems</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;