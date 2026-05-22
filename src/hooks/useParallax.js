import { useEffect, useState } from 'react';

export function useParallax(strength = 18) {
  const [style, setStyle] = useState({ transform: 'translate3d(0, 0, 0)' });

  useEffect(() => {
    if (window.matchMedia('(max-width: 767px)').matches) return undefined;

    let frame = 0;
    const handleMove = (event) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const x = (event.clientX / window.innerWidth - 0.5) * strength;
        const y = (event.clientY / window.innerHeight - 0.5) * strength;
        setStyle({ transform: `translate3d(${x}px, ${y}px, 0)` });
      });
    };

    window.addEventListener('pointermove', handleMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', handleMove);
    };
  }, [strength]);

  return style;
}
