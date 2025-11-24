import React from 'react';
import { motion } from 'framer-motion';

const Research = () => {
  const papers = [
    {
      title: 'Bangla Sign Language Detection Using Deep Learning',
      journal: 'ICT for Intelligent Systems, Volumn 11, pp 73–83, 2025',
      abstract: 'Communication is a fundamental human right, yet individuals with hearing or speech impairments face barriers in education, employment, and social services.',
      icon: 'fa-book-open',
      link: 'https://link.springer.com/chapter/10.1007/978-981-96-8796-1_7',
    },
  ];

  return (
    <section id="research" className="py-20 px-4 md:px-20 bg-surface/30">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-12 relative after:content-[''] after:block after:w-16 after:h-1 after:bg-accent after:mx-auto after:mt-4 after:rounded-sm"
      >
        Published Research
      </motion.h2>
      <div className="flex flex-col gap-8 max-w-4xl mx-auto">
        {papers.map((paper, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card group relative overflow-hidden border border-white/5 hover:border-primary/30 flex flex-col md:flex-row gap-8 items-start p-8"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="text-3xl text-accent bg-accent/10 p-4 rounded-xl min-w-[80px] text-center">
              <i className={`fas ${paper.icon}`}></i>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-cyan-300 transition-colors">{paper.title}</h3>
              <p className="text-secondary italic mb-4">{paper.journal}</p>
              <p className="text-muted mb-4">{paper.abstract}</p>
              <a
                href={paper.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 inline-flex items-center gap-2 text-text font-semibold hover:text-primary transition-colors group/link"
              >
                <i className="fas fa-book-open text-xl"></i> 
                <span className="group-hover/link:translate-x-1 transition-transform">Read Paper</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Research;
