import React, { useEffect, useState } from 'react';
import { smoothScrollTo } from '../utils/smoothScroll';

const Hero = () => {
  const [text, setText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const fullText = "Developer & Researcher";

  useEffect(() => {
    // Fade in animation
    const fadeTimer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    // Start typing after a brief delay
    const startDelay = setTimeout(() => {
      let index = 0;
      const timer = setInterval(() => {
        if (index <= fullText.length) {
          setText(fullText.substring(0, index));
          index++;
        } else {
          clearInterval(timer);
        }
      }, 150);
    }, 300);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(startDelay);
    };
  }, [fullText]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    smoothScrollTo(href, 2000);
  };

  return (
    <header id="hero" className="min-h-screen flex items-center justify-center relative pt-24 md:pt-20">
      <div className={`text-center z-10 px-4 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="w-40 h-40 mx-auto mb-6 rounded-full p-1 bg-gradient-to-r from-primary to-accent">
          <div className="w-full h-full rounded-full overflow-hidden bg-surface">
            <img
              src="/assets/profile.jpg"
              alt="Profile Photo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Shifty</span>
        </h1>
        <p className="text-2xl md:text-3xl text-muted mb-8 h-8">{text}</p>
        <div className="flex gap-4 justify-center">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="px-8 py-3 rounded-full bg-primary text-background font-bold hover:bg-accent hover:shadow-2xl hover:shadow-accent/50 transition-all duration-300 hover:scale-110 shadow-lg shadow-primary/25 cursor-pointer"
          >
            Get in Touch
          </a>
          <a
            href="#projects"
            onClick={(e) => handleNavClick(e, '#projects')}
            className="px-8 py-3 rounded-full bg-transparent border-2 border-primary text-primary font-bold hover:bg-primary hover:text-background hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-110 cursor-pointer"
          >
            View Work
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;
