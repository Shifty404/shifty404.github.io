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
          Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent animate-gradient">Shifty</span>
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
            className="px-8 py-3 rounded-full bg-primary text-background font-bold hover:bg-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-all duration-300 hover:-translate-y-1"
          >
            Get in Touch
          </a>
          <a
            href="#projects"
            onClick={(e) => handleNavClick(e, '#projects')}
            className="px-8 py-3 rounded-full bg-transparent border border-primary/50 text-primary font-bold hover:bg-primary/10 hover:border-primary hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all duration-300 hover:-translate-y-1"
          >
            View Work
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;
