import { motion } from 'framer-motion';
import styles from './GlassPanel.module.css';

function GlassPanel({ as = motion.div, children, className = '', glow = false, ...props }) {
  const Component = as;
  return (
    <Component className={`${styles.panel} ${glow ? styles.glow : ''} ${className}`} {...props}>
      {children}
    </Component>
  );
}

export default GlassPanel;
