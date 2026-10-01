import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub } from 'react-icons/fa6';
import ProjectCard from '../components/ProjectCard';
import { containerVariants, itemVariants } from '../animations';
import './Projects.css';

// Featured projects data array (max 4, strongest first)
const PROJECTS = [
  {
    id: 'revive',
    title: 'Revive',
    problem: 'Sustainable fashion e-commerce platform promoting circular fashion & reselling.',
    description: 'MERN stack platform featuring user authentication, item listing, search/filter, and reselling workflows.',
    highlight: 'Implemented REST APIs with JWT authentication and optimized MongoDB queries for fast search.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js'],
    github: 'https://github.com/saanchijainnn',
    demo: '',
    image: '', // /public/projects/revive.png if added later
    category: 'Full-Stack',
  },
  {
    id: 'kaleidoscope',
    title: 'Kaleidoscope',
    problem: 'Digital archive documenting endangered and extinct traditional Indian folk art forms.',
    description: 'MERN stack content platform with rich media display, categorization, and article management.',
    highlight: 'Designed relational MongoDB schemas for art forms, regional tags, and media collections.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/saanchijainnn',
    demo: '',
    image: '',
    category: 'Full-Stack',
  },
  {
    id: 'moodbloom',
    title: 'MoodBloom',
    problem: 'AI-powered mental well-being companion app providing sentiment analysis.',
    description: 'Flask + Python ML app analyzing user daily text logs for emotional sentiment trends.',
    highlight: 'Trained scikit-learn NLP models for real-time sentiment scoring and trend visualization.',
    tags: ['Python', 'Flask', 'scikit-learn', 'AI/ML'],
    github: 'https://github.com/saanchijainnn',
    demo: '',
    image: '',
    category: 'AI/ML',
  },
  {
    id: 'careergenie',
    title: 'CareerGenie',
    problem: 'Automated resume analysis and intelligent job matching for campus placements.',
    description: 'React + Python career portal evaluating student resumes against job descriptions.',
    highlight: 'Built TF-IDF keyword extraction algorithm to score resume-to-job relevancy.',
    tags: ['React', 'Python', 'AI/ML', 'scikit-learn'],
    github: 'https://github.com/saanchijainnn',
    demo: '',
    image: '',
    category: 'AI/ML',
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  // Derive available categories dynamically
  const categories = useMemo(() => {
    const cats = Array.from(new Set(PROJECTS.map((p) => p.category)));
    return ['All', ...cats];
  }, []);

  // Filter projects by selected category tag
  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return PROJECTS;
    return PROJECTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        {/* Shared section header with light modifier for dark green section */}
        <div className="section-header">
          <h2 className="section-title section-title--light">Featured Projects</h2>
          <p className="section-subtitle projects-subtitle">
            Real-world applications built with modern web tech and practical AI/ML
          </p>
        </div>

        {/* Tag filter row rendered when 4+ projects with distinct categories exist */}
        {categories.length > 2 && (
          <div className="projects-filter-bar" role="tablist" aria-label="Filter projects by tech category">
            {categories.map((cat) => {
              const isSelected = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  aria-pressed={isSelected}
                  className={`projects-filter-btn ${isSelected ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        )}

        {/* Responsive Grid with Framer Motion Layout animations */}
        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const isFeatured = activeCategory === 'All' && index === 0;
              return (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className={`projects-grid-item ${isFeatured ? 'featured-item' : ''}`}
                >
                  <ProjectCard
                    title={project.title}
                    problem={project.problem}
                    description={project.description}
                    highlight={project.highlight}
                    tags={project.tags}
                    github={project.github}
                    demo={project.demo}
                    image={project.image}
                    category={project.category}
                    isFeatured={isFeatured}
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* More on GitHub external link */}
        <div className="projects-footer">
          <a
            href="https://github.com/saanchijainnn"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline projects-more-btn"
          >
            <span>More on GitHub</span>
            <FaGithub size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
