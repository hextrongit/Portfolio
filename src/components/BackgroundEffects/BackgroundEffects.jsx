import { memo, useMemo } from 'react';
import { motion } from 'framer-motion';
import styles from './BackgroundEffects.module.css';

function BackgroundEffects({ activeSection }) {
  const particles = useMemo(
    () =>
      Array.from({ length: 34 }, (_, index) => ({
        id: index,
        left: `${(index * 29) % 100}%`,
        top: `${(index * 47) % 100}%`,
        delay: (index % 8) * 0.55,
        size: 2 + (index % 4),
      })),
    [],
  );

  return (
    <div className={styles.background} data-active-section={activeSection} aria-hidden="true">
      <div className={styles.grid} />
      <motion.div
        className={`${styles.light} ${styles.cyan}`}
        animate={{ x: [0, 26, -16, 0], y: [0, -18, 20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className={`${styles.light} ${styles.pink}`}
        animate={{ x: [0, -24, 18, 0], y: [0, 24, -14, 0] }}
        transition={{ duration: 19, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className={`${styles.light} ${styles.lime}`}
        animate={{ x: [0, 18, 0], y: [0, -28, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className={styles.particles}>
        {particles.map((particle) => (
          <span
            key={particle.id}
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>
      <div className={styles.scan} />
    </div>
  );
}

export default memo(BackgroundEffects);
