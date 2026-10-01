import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaServer, FaBrain, FaWrench } from 'react-icons/fa6';
import './Skills.css';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <FaCode size={20} />,
      skills: ['JavaScript', 'Python', 'C++'],
    },
    {
      title: 'Frontend',
      icon: <FaLaptopCode size={20} />,
      skills: ['React', 'HTML', 'CSS'],
    },
    {
      title: 'Backend',
      icon: <FaServer size={20} />,
      skills: ['Node.js', 'Express', 'MongoDB'],
    },
    {
      title: 'AI / ML',
      icon: <FaBrain size={20} />,
      skills: ['scikit-learn', 'Pandas', 'NumPy', 'Flask'],
    },
    {
      title: 'Tools',
      icon: <FaWrench size={20} />,
      skills: ['Git', 'GitHub', 'VS Code'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.div 
          className="skills-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="skills-title">Skills & Expertise</h2>
        </motion.div>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              className="skill-category-card"
              variants={cardVariants}
            >
              <div className="category-header">
                <div className="category-icon">{category.icon}</div>
                <h3 className="category-title">{category.title}</h3>
              </div>

              <div className="skills-pills-list">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
