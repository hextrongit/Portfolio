import { useEffect } from 'react';
import { setActiveSection } from '../store/sectionState.js';

export function useScrollSpy(sectionIds = []) {
  useEffect(() => {
    let frame = 0;

    const updateActiveSection = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const nodes = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
        if (!nodes.length) return;

        const scrollPosition = window.scrollY + 170;
        const pageBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 12;

        if (pageBottom && nodes[nodes.length - 1]?.id) {
          setActiveSection(nodes[nodes.length - 1].id);
          return;
        }

        let current = nodes[0].id;
        nodes.forEach((node) => {
          if (node.offsetTop <= scrollPosition) {
            current = node.id;
          }
        });

        setActiveSection(current);
      });
    };

    updateActiveSection();
    const readyFrame = requestAnimationFrame(updateActiveSection);
    const readyTimer = window.setTimeout(updateActiveSection, 350);

    window.addEventListener('scroll', updateActiveSection, { passive: true });
    document.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);

    return () => {
      cancelAnimationFrame(frame);
      cancelAnimationFrame(readyFrame);
      window.clearTimeout(readyTimer);
      window.removeEventListener('scroll', updateActiveSection);
      document.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, [sectionIds.join('|')]);
}
