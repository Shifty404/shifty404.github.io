import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 md:px-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold text-center mb-16"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
          Contact Me
        </span>
      </motion.h2>
      <div className="flex justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="glass-card group relative overflow-hidden border border-white/5 hover:border-primary/30 p-12 flex flex-col gap-6 min-w-[300px] md:min-w-[500px]"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="flex items-center gap-4 text-xl">
            <i className="fas fa-envelope text-primary text-2xl w-8"></i>
            <span>Shifty.ishmam@gmail.com</span>
          </div>
          <div className="flex items-center gap-4 text-xl">
            <i className="fab fa-linkedin text-primary text-2xl w-8"></i>
            <span>www.linkedin.com/in/shifty-ishmam</span>
          </div>
          <div className="flex items-center gap-4 text-xl">
            <i className="fab fa-github text-primary text-2xl w-8"></i>
            <span>github.com/Shifty404</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
