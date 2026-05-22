import { ArrowUp } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './BackToTop.module.css';

function BackToTop() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.08], [0, 1]);

  return (
    <motion.button
      className={styles.button}
      style={{ opacity }}
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.94 }}
    >
      <ArrowUp size={18} aria-hidden="true" />
    </motion.button>
  );
}

export default BackToTop;
