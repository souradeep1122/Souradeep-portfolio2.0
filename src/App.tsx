import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Achievements from './components/sections/Achievements';
import Contact from './components/sections/Contact';
import CustomCursor from './components/ui/CustomCursor';

export const App: React.FC = () => {
  return (
    <>
      {/* Accessible skip link */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      {/* Subtle Grain Overlay for Editorial Depth */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Fixed Sticky Header Navigation */}
      <Navbar />

      {/* Semantic Main Landmark */}
      <main id="main-content" tabIndex={-1} style={{ position: 'relative', outline: 'none' }}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
      </main>

      {/* Semantic Footer */}
      <Footer />
    </>
  );
};

export default App;
