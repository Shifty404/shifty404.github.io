import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 md:px-20 bg-surface/30">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-12 relative after:content-[''] after:block after:w-16 after:h-1 after:bg-accent after:mx-auto after:mt-4 after:rounded-sm"
      >
        Contact Me
      </motion.h2>
      <div className="flex justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="glass-card p-12 flex flex-col gap-6 min-w-[300px] md:min-w-[500px]"
        >
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
