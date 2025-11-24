import React, { useEffect, useState } from 'react';
import { smoothScrollTo } from '../utils/smoothScroll';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const toRotate = ["Game Developer", "Researcher"];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % toRotate.length;
      const fullText = toRotate[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    smoothScrollTo(href, 2000);
  };

  return (
    <header id="hero" className="min-h-screen flex items-center justify-center relative pt-24 md:pt-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -z-10"></div>

      <div className="text-center z-10 px-4">
        <div className="relative w-48 h-48 mx-auto mb-8 group">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
          <div className="relative w-full h-full rounded-full p-1 bg-gradient-to-r from-primary to-secondary">
            <div className="w-full h-full rounded-full overflow-hidden bg-surface">
              <img
                src="/assets/profile.jpg"
                alt="Profile Photo"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent bg-200% animate-gradient">Shifty</span>
        </h1>
        
        <div className="h-10 mb-10">
          <p className="text-2xl md:text-3xl text-primary font-mono">
            {text}<span className="animate-blink">|</span>
          </p>
        </div>

        <div className="flex gap-6 justify-center">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="group relative px-8 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-background font-bold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(34,211,238,0.6)]"
          >
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">Get in Touch</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </a>
          <a
            href="#projects"
            onClick={(e) => handleNavClick(e, '#projects')}
            className="group relative px-8 py-3 rounded-full glass border border-primary/30 text-primary font-bold overflow-hidden transition-all duration-300 hover:scale-105 hover:border-primary hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]"
          >
            <span className="relative z-10 group-hover:text-accent transition-colors duration-300">View Work</span>
            <div className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;
