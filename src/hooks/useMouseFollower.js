import { useEffect, useState } from 'react';

const initialMouse = { x: -100, y: -100, isHovering: false };

export function useMouseFollower(enabled = true) {
  const [mouse, setMouse] = useState(initialMouse);

  useEffect(() => {
    if (!enabled || window.matchMedia('(max-width: 767px)').matches) return undefined;

    let frame = 0;
    const updatePointer = (event) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const target = event.target;
        const interactive = target?.closest?.('a, button, [data-magnetic="true"]');
        setMouse({ x: event.clientX, y: event.clientY, isHovering: Boolean(interactive) });
      });
    };

    window.addEventListener('pointermove', updatePointer, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', updatePointer);
    };
  }, [enabled]);

  return mouse;
}
