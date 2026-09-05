import React, { useState, useEffect } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { ResumeSection } from './components/ResumeSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { EasterEggTerminal } from './components/EasterEggTerminal';

export const App: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('theme');
    return (saved as 'dark' | 'light') || 'dark';
  });

  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Global Keyboard Shortcut listener (Ctrl+K or Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsTerminalOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative selection:bg-cyan-500/30 selection:text-cyan-300">
      {/* Custom Mouse Cursor */}
      <CustomCursor />

      {/* Navigation Bar */}
      <Navbar
        currentTheme={theme}
        toggleTheme={toggleTheme}
        openTerminal={() => setIsTerminalOpen(true)}
      />

      {/* Main Sections */}
      <main>
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          onNavigate={scrollToSection}
        />
        <About />
        <Skills />
        <Projects onOpenContact={() => scrollToSection('contact')} />
        <Experience />
        <Education />
        <Certifications />
        <ResumeSection
          isOpen={isResumeOpen}
          onOpen={() => setIsResumeOpen(true)}
          onClose={() => setIsResumeOpen(false)}
        />
        <Contact />
      </main>

      {/* Footer */}
      <Footer openTerminal={() => setIsTerminalOpen(true)} />

      {/* CLI Easter Egg Terminal / Control Panel */}
      <EasterEggTerminal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        onOpenResume={() => setIsResumeOpen(true)}
        onNavigate={scrollToSection}
      />
    </div>
  );
};

export default App;
