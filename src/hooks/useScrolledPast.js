import { useState, useEffect } from 'react';

/**
 * Custom hook to check if the window has been scrolled past a given pixel threshold.
 * Includes an initial check on mount to ensure accuracy on page refresh mid-scroll.
 * Uses a passive event listener for optimal scroll performance.
 */
export default function useScrolledPast(threshold = 0) {
  const [isPast, setIsPast] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.scrollY > threshold;
    }
    return false;
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsPast(window.scrollY > threshold);
    };

    // Initial sync check on mount
    handleScroll();

    // { passive: true } tells browser that scroll listener won't call preventDefault, boosting FPS
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isPast;
}
