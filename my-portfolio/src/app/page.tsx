import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        {/* Placeholder sections for now */}
        <section id="about" className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
            <p className="text-gray-600 dark:text-gray-400">Coming soon...</p>
          </div>
        </section>
        
        <section id="experience" className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Experience</h2>
            <p className="text-gray-600 dark:text-gray-400">Coming soon...</p>
          </div>
        </section>
        
        <section id="projects" className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Projects</h2>
            <p className="text-gray-600 dark:text-gray-400">Coming soon...</p>
          </div>
        </section>
        
        <section id="skills" className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Skills</h2>
            <p className="text-gray-600 dark:text-gray-400">Coming soon...</p>
          </div>
        </section>
        
        <section id="contact" className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Contact</h2>
            <p className="text-gray-600 dark:text-gray-400">Coming soon...</p>
          </div>
        </section>
      </main>
    </>
  );
}
