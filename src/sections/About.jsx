import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaMapMarkerAlt, FaBriefcase, FaCode } from 'react-icons/fa';
import { containerVariants, itemVariants } from '../animations';
import './About.css';

const QUICK_FACTS = [
  {
    icon: <FaMapMarkerAlt size={16} aria-hidden="true" />,
    label: 'Location',
    value: 'Jaipur, Rajasthan, India',
  },
  {
    icon: <FaGraduationCap size={16} aria-hidden="true" />,
    label: 'Education',
    value: 'B.Tech CSE (AI & ML), JECRC University',
  },
  {
    icon: <FaBriefcase size={16} aria-hidden="true" />,
    label: 'Seeking',
    value: 'Product-based Internship',
  },
  {
    icon: <FaCode size={16} aria-hidden="true" />,
    label: 'Core Focus',
    value: 'Full-Stack (MERN) & AI/ML',
  },
];

export default function About() {
  const [hasPhoto, setHasPhoto] = useState(true);

  return (
    <section id="about" className="about-section">
      <div className="container">
        {/* Shared Section Header */}
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
        </div>

        <motion.div
          className={`about-layout ${hasPhoto ? 'about-layout--two-col' : 'about-layout--single-col'}`}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Render photo frame only if image exists and loads cleanly */}
          {hasPhoto && (
            <motion.div className="about-photo-col" variants={itemVariants}>
              <div className="about-photo-frame">
                <img
                  src="/profile.jpg"
                  alt="Saanchi - CSE (AI & ML) Student"
                  className="about-photo"
                  loading="lazy"
                  onError={() => setHasPhoto(false)}
                />
              </div>
            </motion.div>
          )}

          {/* Text Content */}
          <motion.div className="about-text-col" variants={itemVariants}>
            <h3 className="about-heading">
              Building Full-Stack Solutions &amp; Practical Machine Learning
            </h3>

            <p className="about-paragraph">
              I am a Computer Science &amp; Engineering (AI &amp; ML) student at JECRC University, Jaipur. 
              Driven by curiosity and innovation, I specialize in full-stack web development (MERN) 
              and machine learning—actively building real-world projects like Revive and working toward securing 
              an internship at a product-based company.
            </p>

            {/* Quick Facts Card */}
            <div className="about-quick-facts">
              <h4 className="quick-facts-title">Quick Facts</h4>
              <div className="quick-facts-grid">
                {QUICK_FACTS.map((fact) => (
                  <div key={fact.label} className="quick-fact-item">
                    <span className="quick-fact-icon">{fact.icon}</span>
                    <div className="quick-fact-details">
                      <span className="quick-fact-label">{fact.label}</span>
                      <span className="quick-fact-value">{fact.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
