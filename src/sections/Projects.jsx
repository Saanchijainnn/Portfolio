import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

// Project data array defined at top of file for easy editing
const projectsData = [
  {
    id: 'revive',
    title: 'Revive',
    description: 'MERN sustainable fashion e-commerce platform promoting circular fashion, item reselling, and eco-conscious shopping.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js'],
    github: '#', // TODO: Add GitHub repo URL
    demo: '#', // TODO: Add Live Demo URL
  },
  {
    id: 'kaleidoscope',
    title: 'Kaleidoscope',
    description: 'MERN stack digital archive and blog documenting endangered and extinct traditional Indian folk art forms.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: '#', // TODO: Add GitHub repo URL
    demo: '#', // TODO: Add Live Demo URL
  },
  {
    id: 'moodbloom',
    title: 'MoodBloom',
    description: 'AI-powered mental well-being companion app providing sentiment analysis and personalized emotional support.',
    tags: ['Python', 'Flask', 'scikit-learn', 'AI/ML'],
    github: '#', // TODO: Add GitHub repo URL
    demo: '#', // TODO: Add Live Demo URL
  },
  {
    id: 'careergenie',
    title: 'CareerGenie',
    description: 'Campus career platform leveraging AI for automated resume analysis and intelligent job matching for students.',
    tags: ['React', 'Python', 'AI/ML', 'scikit-learn'],
    github: '#', // TODO: Add GitHub repo URL
    demo: '#', // TODO: Add Live Demo URL
  },
  {
    id: 'react-gallery',
    title: 'React Gallery App',
    description: 'Dynamic and responsive media gallery application built with React featuring search, filtering, and smooth transitions.',
    tags: ['React', 'JavaScript', 'CSS3'],
    github: '#', // TODO: Add GitHub repo URL
    demo: '#', // TODO: Add Live Demo URL
  },
  {
    id: 'notes-app',
    title: 'Notes App',
    description: 'Feature-rich React note-taking application supporting instant search, categorization, and local persistence.',
    tags: ['React', 'JavaScript', 'LocalStorage'],
    github: '#', // TODO: Add GitHub repo URL
    demo: '#', // TODO: Add Live Demo URL
  },
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="projects-title">Featured Projects</h2>
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projectsData.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <ProjectCard
                title={project.title}
                description={project.description}
                tags={project.tags}
                github={project.github}
                demo={project.demo}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
