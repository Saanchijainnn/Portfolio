import { useState, useEffect } from 'react';

/**
 * Custom hook to track which section is currently active in the viewport using IntersectionObserver.
 * @param {string[]} sectionIds - List of section DOM element IDs to observe (e.g. ['projects', 'about', 'skills', 'contact'])
 * @param {string} rootMargin - Observer margin offset
 * @returns {string} activeId - ID of currently active section
 */
export default function useActiveSection(sectionIds, rootMargin = '-20% 0px -60% 0px') {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    if (!sectionIds || sectionIds.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin }
    );

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [sectionIds, rootMargin]);

  return activeId;
}
