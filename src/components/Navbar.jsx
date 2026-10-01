import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { FaBars, FaXmark } from 'react-icons/fa6';
import useScrolledPast from '../hooks/useScrolledPast';
import useActiveSection from '../hooks/useActiveSection';
import './Navbar.css';

// Static navLinks array moved outside component to prevent unnecessary re-creations on render
const NAV_LINKS = [
  { name: 'Projects', id: 'projects' },
  { name: 'About', id: 'about' },
  { name: 'Skills', id: 'skills' },
  { name: 'Contact', id: 'contact' },
];

const SECTION_IDS = NAV_LINKS.map((link) => link.id);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const isScrolled = useScrolledPast(20);
  const activeId = useActiveSection(SECTION_IDS);

  const hamburgerRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Framer motion scroll progress indicator calculation
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // Close mobile menu on Escape key press or outside click, and return focus to hamburger button
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        hamburgerRef.current?.focus();
      }
    };

    const handleOutsideClick = (e) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(e.target)
      ) {
        setIsOpen(false);
        hamburgerRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <a 
          href="#hero" 
          onClick={(e) => handleNavClick(e, 'hero')} 
          className="navbar-logo"
        >
          Saanchi
        </a>

        {/* Desktop Navigation */}
        <nav className="navbar-links desktop-only" aria-label="Main Navigation">
          {NAV_LINKS.map((link) => {
            const isActive = activeId === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`nav-link ${isActive ? 'active' : ''}`}
                aria-current={isActive ? 'location' : undefined}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          ref={hamburgerRef}
          className="hamburger-btn mobile-only"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <FaXmark size={24} aria-hidden="true" /> : <FaBars size={24} aria-hidden="true" />}
        </button>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <nav
            ref={mobileMenuRef}
            className="mobile-menu mobile-only"
            aria-label="Mobile Navigation"
          >
            {NAV_LINKS.map((link) => {
              const isActive = activeId === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                  aria-current={isActive ? 'location' : undefined}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>
        )}
      </div>

      {/* Thin scroll progress bar under navbar */}
      <motion.div className="navbar-progress-bar" style={{ scaleX }} />
    </header>
  );
}
