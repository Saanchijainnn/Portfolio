import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

export default function Hero() {
  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const projectsElement = document.getElementById('projects');
    if (projectsElement) {
      projectsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className="hero-greeting" variants={itemVariants}>
            Hi, I'm Saanchi
          </motion.h1>

          <motion.p className="hero-tagline" variants={itemVariants}>
            CSE (AI & ML) student building full-stack + AI/ML projects
          </motion.p>

          <motion.div className="hero-ctas" variants={itemVariants}>
            <a
              href="#projects"
              onClick={handleScrollToProjects}
              className="btn btn-primary"
            >
              View Projects
            </a>
            {/* TODO: Replace '#' with the actual resume PDF URL (e.g., '/resume.pdf' or an external link) */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              title="TODO: Attach resume PDF link"
            >
              Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
