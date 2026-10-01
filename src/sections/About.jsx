import React from 'react';
import { motion } from 'framer-motion';
import { FaUserGraduate } from 'react-icons/fa6';
import './About.css';

export default function About() {
  const techStack = [
    'MongoDB',
    'Express',
    'React',
    'Node.js',
    'Python',
    'scikit-learn',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
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
    <section id="about" className="about-section">
      <div className="container">
        <motion.div 
          className="about-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="about-title">About Me</h2>
        </motion.div>

        <motion.div
          className="about-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Avatar / Photo Spot */}
          <motion.div className="about-image-wrapper" variants={itemVariants}>
            {/* TODO: Replace this avatar placeholder div with an actual <img> tag (e.g. <img src="/profile.jpg" alt="Saanchi" className="about-profile-img" />) */}
            <div className="about-avatar-placeholder" title="TODO: Replace with actual photo">
              <div className="avatar-icon-wrapper">
                <FaUserGraduate size={40} />
              </div>
              <span className="avatar-text">Saanchi</span>
              <span className="avatar-subtext">CSE (AI & ML) Student</span>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div className="about-text-content" variants={itemVariants}>
            <h3 className="about-subtitle">
              Passionate about Full-Stack Development & Artificial Intelligence
            </h3>

            <p className="about-paragraph">
              I am a Computer Science & Engineering (AI & ML) student at JECRC University, Jaipur. 
              Driven by curiosity and innovation, I specialize in full-stack web development (MERN) 
              and machine learning—actively building real-world projects and working toward securing an 
              internship at a product-based company.
            </p>

            {/* Tech Stack Pills */}
            <div className="tech-stack-container">
              <h4 className="tech-stack-heading">Core Tech Stack</h4>
              <div className="tech-pills">
                {techStack.map((tech) => (
                  <span key={tech} className="tech-pill">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
