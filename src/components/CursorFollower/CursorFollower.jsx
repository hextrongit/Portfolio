import { useMouseFollower } from '../../hooks/useMouseFollower.js';
import { useUiState } from '../../store/uiState.js';
import styles from './CursorFollower.module.css';

function CursorFollower() {
  const { reducedMotion } = useUiState();
  const mouse = useMouseFollower(!reducedMotion);

  if (reducedMotion) return null;

  return (
    <>
      <span
        className={`${styles.cursor} ${mouse.isHovering ? styles.hovering : ''}`}
        style={{ transform: `translate3d(${mouse.x}px, ${mouse.y}px, 0)` }}
        aria-hidden="true"
      />
      <span
        className={styles.glow}
        style={{ transform: `translate3d(${mouse.x}px, ${mouse.y}px, 0)` }}
        aria-hidden="true"
      />
    </>
  );
}

export default CursorFollower;
