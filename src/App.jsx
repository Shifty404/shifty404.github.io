import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Projects from './components/Projects';
import Research from './components/Research';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CatAnimation from './components/CatAnimation';
import Background from './components/Background';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-show');
        }
      });
    }, observerOptions);

    const hiddenElements = document.querySelectorAll('.section, .card, .hero-content');
    hiddenElements.forEach((el) => {
      el.classList.add('fade-in-hidden');
      observer.observe(el);
    });

    // Section observer for cat animation
    const stateObserverOptions = {
      threshold: [0.1, 0.3, 0.5, 0.7, 0.9],
    };

    const sectionRatios = {};

    const stateObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        sectionRatios[entry.target.id] = entry.intersectionRatio;
      });

      let maxRatio = 0;
      let currentActive = activeSection;

      Object.keys(sectionRatios).forEach((sectionId) => {
        if (sectionRatios[sectionId] > maxRatio) {
          maxRatio = sectionRatios[sectionId];
          currentActive = sectionId;
        }
      });

      if (currentActive !== activeSection && maxRatio > 0.1) {
        setActiveSection(currentActive);
      }
    }, stateObserverOptions);

    const sections = ['hero', 'education', 'projects', 'research', 'contact'];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) stateObserver.observe(element);
    });

    return () => {
      observer.disconnect();
      stateObserver.disconnect();
    };
  }, [activeSection]);

  return (
    <div className="min-h-screen text-text font-sans selection:bg-primary/30">
      <Background />
      
      <Navbar activeSection={activeSection} />
      <CatAnimation activeSection={activeSection} />

      <main>
        <Hero />
        <Education />
        <Projects />
        <Research />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
