import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa6';
import useScrolledPast from '../hooks/useScrolledPast';
import './ScrollToTop.css';

export default function ScrollToTop() {
  // Shared custom hook checks if scrolled past 300px with passive listener
  const isVisible = useScrolledPast(300);

  const handleScrollToTop = () => {
    // Rely on CSS scroll-padding-top and html scroll-behavior (which respects prefers-reduced-motion)
    window.scrollTo({ top: 0 });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className="scroll-to-top"
          onClick={handleScrollToTop}
          initial={{ opacity: 0, y: 16, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.8 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          /* framer-motion handles hover & tap micro-interactions, avoiding conflicting CSS transforms */
          whileHover={{ y: -4, scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          aria-label="Scroll to top of page"
        >
          <FaArrowUp size={18} aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
