import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaServer, FaBrain, FaWrench } from 'react-icons/fa6';
import { containerVariants, itemVariants } from '../animations';
import './Skills.css';

// 5 Skill categories defined strictly from provided content
const SKILL_CATEGORIES = [
  {
    title: 'Languages',
    icon: <FaCode size={20} aria-hidden="true" />,
    skills: ['JavaScript', 'Python', 'C++'],
  },
  {
    title: 'Frontend',
    icon: <FaLaptopCode size={20} aria-hidden="true" />,
    skills: ['React', 'HTML', 'CSS'],
  },
  {
    title: 'Backend',
    icon: <FaServer size={20} aria-hidden="true" />,
    skills: ['Node.js', 'Express', 'MongoDB'],
  },
  {
    title: 'AI / ML',
    icon: <FaBrain size={20} aria-hidden="true" />,
    skills: ['scikit-learn', 'Pandas', 'NumPy', 'Flask'],
  },
  {
    title: 'Tools',
    icon: <FaWrench size={20} aria-hidden="true" />,
    skills: ['Git', 'GitHub', 'VS Code'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title section-title--light">Skills &amp; Expertise</h2>
          <p className="section-subtitle skills-subtitle">
            Technologies and frameworks I use to build production apps
          </p>
        </div>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {SKILL_CATEGORIES.map((category) => (
            <motion.div
              key={category.title}
              className="skill-category-card"
              variants={itemVariants}
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
