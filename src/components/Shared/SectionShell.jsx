import { motion } from 'framer-motion';
import styles from './SectionShell.module.css';

const reveal = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0 },
};

function SectionShell({ id, eyebrow, title, intro, children, className = '' }) {
  return (
    <motion.section
      id={id}
      className={`${styles.section} ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
      variants={reveal}
    >
      {(eyebrow || title || intro) && (
        <div className={styles.header}>
          {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
          {title && <h2>{title}</h2>}
          {intro && <p>{intro}</p>}
        </div>
      )}
      {children}
    </motion.section>
  );
}

export default SectionShell;
