import { useEffect, useState } from 'react';
import { ArrowDown, Download, Mail, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../store/portfolioData.js';
import { scrollToSection } from '../../utils/scrollToSection.js';
import LazyImage from '../Shared/LazyImage.jsx';
import MagneticButton from '../Shared/MagneticButton.jsx';
import SocialLinks from '../SocialLinks/SocialLinks.jsx';
import styles from './Hero.module.css';

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setRoleIndex((index) => (index + 1) % portfolioData.roleSwitch.length);
    }, 2200);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.orbit} aria-hidden="true" />
      <motion.div
        className={styles.profileFrame}
        initial={{ opacity: 0, x: -32, y: -18 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <LazyImage src={portfolioData.images.hero} alt={`${portfolioData.name} portrait`} imageClassName={styles.profileImage} />
      </motion.div>

      <div className={styles.content}>
        <motion.span
          className={styles.badge}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <Rocket size={16} aria-hidden="true" />
          {portfolioData.experience} full stack experience
        </motion.span>

        <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
          {portfolioData.name}
        </motion.h1>

        <motion.div className={styles.role} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}>
          <span>{portfolioData.designation}</span>
          <strong key={roleIndex}>{portfolioData.roleSwitch[roleIndex]}</strong>
        </motion.div>

        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}>
          I build scalable, maintainable web systems across CRM, ERP, HRM, and Healthcare workflows with React,
          Node.js, Express.js, MongoDB, and production-minded frontend architecture.
        </motion.p>

        <motion.div
          className={styles.metrics}
          aria-label="Profile highlights"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <span>
            <strong>3+</strong>
            Years
          </span>
          <span>
            <strong>5+</strong>
            Team Reviews
          </span>
          <span>
            <strong>MERN</strong>
            Core Stack
          </span>
        </motion.div>

        <motion.div className={styles.actions} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}>
          <MagneticButton href={portfolioData.resumeUrl} download>
            <Download size={18} aria-hidden="true" />
            Download Resume
          </MagneticButton>
          <MagneticButton variant="secondary" onClick={() => scrollToSection('projects')}>
            <ArrowDown size={18} aria-hidden="true" />
            View Projects
          </MagneticButton>
          <MagneticButton variant="ghost" href={`mailto:${portfolioData.email}`}>
            <Mail size={18} aria-hidden="true" />
            Contact
          </MagneticButton>
        </motion.div>

        <SocialLinks />
      </div>
    </section>
  );
}

export default Hero;
