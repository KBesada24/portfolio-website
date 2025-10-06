import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import { Mail } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        
        <section id="contact" className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
          <div className="text-center max-w-2xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Get In Touch</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              I&apos;m always open to discussing new opportunities and interesting projects.
            </p>
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3">
                <Mail className="text-blue-600 dark:text-blue-400" size={24} />
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="text-lg text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 hover:underline"
                >
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center justify-center gap-3">
                <span className="text-gray-600 dark:text-gray-400">📍</span>
                <span className="text-gray-600 dark:text-gray-400">{personalInfo.location}</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
