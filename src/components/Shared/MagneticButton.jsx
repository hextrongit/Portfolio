import { motion } from 'framer-motion';
import styles from './MagneticButton.module.css';

function MagneticButton({ href, children, variant = 'primary', onClick, download, target, rel, ariaLabel }) {
  const className = `${styles.button} ${styles[variant]}`;
  const common = {
    className,
    'data-magnetic': 'true',
    whileHover: { y: -3, scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { type: 'spring', stiffness: 360, damping: 24 },
    'aria-label': ariaLabel,
  };

  if (href) {
    return (
      <motion.a href={href} download={download} target={target} rel={rel} {...common}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button type="button" onClick={onClick} {...common}>
      {children}
    </motion.button>
  );
}

export default MagneticButton;
