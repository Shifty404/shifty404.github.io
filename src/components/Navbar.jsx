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
    smoothScrollTo(href, 2000); // 2000ms duration for slow scroll
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-[9999] bg-background/95 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/10 transition-all duration-300">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo on the Left */}
        <div className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary cursor-pointer" style={{ fontFamily: "'Press Start 2P', cursive" }} onClick={(e) => handleNavClick(e, '#hero')}>
          Shifty's Portfolio
        </div>

        {/* Desktop Menu on the Right */}
        <ul className="hidden md:flex gap-6 lg:gap-8 items-center">
          {navLinks.map((link) => (
            <li key={link.name} className="list-none">
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-lg font-medium transition-colors duration-300 hover:text-primary no-underline ${
                  activeSection === link.href.substring(1) ? 'text-primary' : 'text-text'
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden text-2xl cursor-pointer text-text" onClick={toggleMenu}>
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-full left-0 w-full bg-[#0f172a] bg-opacity-98 backdrop-blur-md flex flex-col items-center gap-6 py-8 border-b border-white/10 shadow-xl shadow-black/20 md:hidden animate-fadeIn">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-xl font-medium transition-colors duration-300 hover:text-primary ${
                  activeSection === link.href.substring(1) ? 'text-primary' : 'text-text'
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
