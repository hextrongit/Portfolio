import { useEffect, useState } from 'react';

const initialMouse = { x: -100, y: -100, isHovering: false };

export function useMouseFollower(enabled = true) {
  const [mouse, setMouse] = useState(initialMouse);

  useEffect(() => {
    if (!enabled || window.matchMedia('(max-width: 767px)').matches) return undefined;

    const updatePointer = (event) => {
      const target = event.target;
      const interactive = target?.closest?.('a, button, [data-magnetic="true"]');
      setMouse({ x: event.clientX, y: event.clientY, isHovering: Boolean(interactive) });
    };

    window.addEventListener('pointermove', updatePointer, { passive: true });
    return () => {
      window.removeEventListener('pointermove', updatePointer);
    };
  }, [enabled]);

  return mouse;
}
