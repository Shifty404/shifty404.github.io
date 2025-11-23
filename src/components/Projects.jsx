import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'Terminal RPG',
      description: 'A text-based RPG game featuring turn-based combat and inventory management.',
      tags: ['C#', 'Game Dev'],
      link: 'https://github.com/Shifty404/Terminal_RPG_game_using_C-Sharp',
    },
    {
      title: 'Web CV',
      description: 'This responsive portfolio website built with React and Tailwind CSS.',
      tags: ['React', 'Tailwind CSS', 'JavaScript'],
      link: 'https://github.com/Shifty404/shifty404.github.io',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 md:px-20 relative">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold text-center mb-16"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
          GitHub Projects
        </span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card group relative overflow-hidden border border-white/5 hover:border-primary/30"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <h3 className="text-2xl font-bold mb-4 text-primary group-hover:text-cyan-300 transition-colors">
              {project.title}
            </h3>
            
            <p className="text-text-muted mb-6 leading-relaxed">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary bg-primary/10 rounded-full border border-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 inline-flex items-center gap-2 text-text font-semibold hover:text-primary transition-colors group/link"
            >
              <i className="fab fa-github text-xl"></i> 
              <span className="group-hover/link:translate-x-1 transition-transform">View Code</span>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
