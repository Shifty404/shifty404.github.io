import React, { useState } from 'react';
import { smoothScrollTo } from '../utils/smoothScroll';

const Navbar = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Research', href: '#research' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    smoothScrollTo(href, 2000);
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Desktop Floating Navbar */}
      <nav className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-[9999] glass rounded-full px-8 py-4 items-center gap-8 shadow-lg shadow-primary/10 border border-white/10 transition-all duration-300 hover:shadow-primary/20">
        <div 
          className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary cursor-pointer hover:scale-105 transition-transform" 
          style={{ fontFamily: "'Press Start 2P', cursive" }} 
          onClick={(e) => handleNavClick(e, '#hero')}
        >
          Shifty's Portfolio
        </div>

        <ul className="flex gap-8 items-center">
          {navLinks.map((link) => (
            <li key={link.name} className="list-none">
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-medium uppercase tracking-wider transition-all duration-300 hover:text-primary relative group ${
                  activeSection === link.href.substring(1) ? 'text-primary' : 'text-text-muted hover:text-text'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${activeSection === link.href.substring(1) ? 'w-full' : ''}`}></span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Navbar (Fixed Top) */}
      <nav className="md:hidden fixed top-0 left-0 w-full z-[9999] glass border-b border-white/10 px-4 py-4 flex justify-between items-center">
        <div 
          className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary" 
          style={{ fontFamily: "'Press Start 2P', cursive" }}
          onClick={(e) => handleNavClick(e, '#hero')}
        >
          Shifty's Portfolio
        </div>
        <div className="text-2xl cursor-pointer text-text" onClick={toggleMenu}>
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`absolute top-full left-0 w-full glass border-b border-white/10 transition-all duration-300 origin-top ${isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}`}>
          <ul className="flex flex-col items-center gap-6 py-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-lg font-medium ${
                    activeSection === link.href.substring(1) ? 'text-primary' : 'text-text'
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
