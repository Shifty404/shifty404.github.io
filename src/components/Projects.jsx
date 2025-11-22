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
      link: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 md:px-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-12 relative after:content-[''] after:block after:w-16 after:h-1 after:bg-accent after:mx-auto after:mt-4 after:rounded-sm"
      >
        GitHub Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card bg-surface/50 border border-white/10 rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300"
          >
            <h3 className="text-2xl font-bold mb-4 text-primary">{project.title}</h3>
            <p className="text-muted mb-6">{project.description}</p>
            <div className="flex gap-2 mb-6">
              {project.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-text font-semibold hover:text-accent transition-colors"
            >
              <i className="fab fa-github"></i> View Code
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
