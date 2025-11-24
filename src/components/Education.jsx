import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const educationList = [
    {
      degree: 'Bachelor of Science in Computer Science and Engineering',
      institution: 'United International University',
      year: '2021 - 2026',
      icon: 'fa-graduation-cap',
    },
    {
      degree: 'College',
      institution: 'Cambrian College',
      year: '2018 - 2020',
      icon: 'fa-university',
    },
    {
      degree: 'High School',
      institution: 'Bangladesh International School & College',
      year: '2016 - 2018',
      icon: 'fa-school',
    },
    {
      degree: 'Secondary School',
      institution: 'Bangladesh International School & College',
      year: '2013 - 2015',
      icon: 'fa-book-reader',
    },
    {
      degree: 'Primary School',
      institution: 'Bangladesh International School & College',
      year: '2008 - 2012',
      icon: 'fa-child',
    },
  ];

  return (
    <section id="education" className="py-20 px-4 md:px-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold text-center mb-16"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
          Education
        </span>
      </motion.h2>
      <div className="flex flex-col gap-8 max-w-4xl mx-auto">
        {educationList.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card group relative overflow-hidden border border-white/5 hover:border-primary/30 flex flex-col md:flex-row gap-8 items-start p-8"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="text-3xl text-primary bg-primary/10 p-4 rounded-xl min-w-[80px] text-center">
              <i className={`fas ${edu.icon}`}></i>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2 text-text group-hover:text-cyan-300 transition-colors">{edu.degree}</h3>
              <p className="text-primary font-semibold mb-1">{edu.institution}</p>
              <p className="text-muted italic">{edu.year}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
