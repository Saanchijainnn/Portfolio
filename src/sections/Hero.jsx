import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaXTwitter, FaLocationDot } from 'react-icons/fa6';
import { containerVariants, itemVariants } from '../animations';
import './Hero.css';

// Rotating role phrases
const ROLES = [
  'Full-Stack Developer',
  'AI/ML Builder',
  'MERN Stack Specialist',
];

// Social links data strictly matching user content
const HERO_SOCIALS = [
  {
    name: 'GitHub',
    url: 'https://github.com/saanchijainnn',
    icon: <FaGithub size={20} aria-hidden="true" />,
    label: 'Saanchi on GitHub',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/saanchijainnn',
    icon: <FaLinkedin size={20} aria-hidden="true" />,
    label: 'Saanchi on LinkedIn',
  },
  {
    name: 'X',
    url: 'https://x.com/saanchijainnn',
    icon: <FaXTwitter size={20} aria-hidden="true" />,
    label: 'Saanchi on X',
  },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [imageError, setImageError] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  // Rotate roles every 3 seconds unless user prefers reduced motion
  useEffect(() => {
    if (prefersReducedMotion) return;
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const projectsElement = document.getElementById('projects');
    if (projectsElement) {
      projectsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section">
      {/* Decorative background grid (CSS gradient shapes, zero images, performance light) */}
      <div className="hero-bg-pattern" aria-hidden="true" />

      <div className="container hero-container">
        <motion.div
          className="hero-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column: Text & CTAs */}
          <div className="hero-text-col">
            {/* Meta Row: Location & Availability Status */}
            <motion.div className="hero-meta-row" variants={itemVariants}>
              <span className="hero-meta-item">
                <FaLocationDot size={14} className="hero-meta-icon" aria-hidden="true" />
                Jaipur, India
              </span>
              <span className="hero-status-pill">
                <span className="hero-status-dot" aria-hidden="true" />
                Open to internships
              </span>
            </motion.div>

            {/* Name Greeting */}
            <motion.span className="hero-greeting" variants={itemVariants}>
              Hi, I'm Saanchi
            </motion.span>

            {/* Main Positioning Line */}
            <motion.h1 className="hero-title" variants={itemVariants}>
              I build full-stack apps with MERN and add AI/ML where it actually helps.
            </motion.h1>

            {/* Animated Rotating Role Subtitle */}
            <motion.div className="hero-role-wrapper" variants={itemVariants}>
              <span className="hero-role-prefix">I am a </span>
              {prefersReducedMotion ? (
                <span className="hero-role-text">{ROLES[0]}</span>
              ) : (
                <AnimatePresence mode="wait">
                  <motion.span
                    key={ROLES[roleIndex]}
                    className="hero-role-text"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    {ROLES[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              )}
            </motion.div>

            {/* Short Role Summary */}
            <motion.p className="hero-bio" variants={itemVariants}>
              CSE (AI &amp; ML) student, JECRC University, Jaipur. Looking for a product-based internship.
            </motion.p>

            {/* Actions & Social Links */}
            <motion.div className="hero-actions-row" variants={itemVariants}>
              <div className="hero-ctas">
                <a
                  href="#projects"
                  onClick={handleScrollToProjects}
                  className="btn btn-primary"
                >
                  View Projects
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline hero-btn-outline"
                >
                  Resume
                </a>
              </div>

              {/* Social Links with 44px min touch target */}
              <div className="hero-socials">
                {HERO_SOCIALS.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-social-link"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Profile Photo or Purely Typographic Visual */}
          <motion.div className="hero-visual-col" variants={itemVariants}>
            {!imageError ? (
              <div className="hero-frame">
                <img
                  src="/profile.jpg"
                  alt="Saanchi - Full-Stack & AI/ML Developer"
                  className="hero-photo"
                  loading="lazy"
                  onError={() => setImageError(true)}
                />
              </div>
            ) : (
              /* Purely typographic hero visual if profile image is absent */
              <div className="hero-typo-card">
                <span className="hero-typo-badge">Full-Stack &amp; AI/ML</span>
                <div className="hero-typo-initials">SJ</div>
                <div className="hero-typo-code">
                  <code>&lt;MERN /&gt; + &lt;AI /&gt;</code>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
