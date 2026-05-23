import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../store/portfolioData.js';
import { scrollToSection } from '../../utils/scrollToSection.js';
import styles from './Navbar.module.css';

function Navbar({ sections, activeSection }) {
  const [open, setOpen] = useState(false);

  const handleNavigate = (id) => {
    setOpen(false);
    scrollToSection(id);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Primary navigation">
        <button className={styles.brand} type="button" onClick={() => handleNavigate('home')} aria-label="Go to home">
          <img src="/aswin_anilkumar.jpg" alt="Aswin Anilkumar" className={styles.avatar} />
          <strong>{portfolioData.name}</strong>
        </button>

        <div className={styles.links}>
          {sections.map((section) => (
            <button
              key={section.id}
              className={activeSection === section.id ? styles.active : ''}
              type="button"
              onClick={() => handleNavigate(section.id)}
              aria-current={activeSection === section.id ? 'page' : undefined}
            >
              {section.label}
            </button>
          ))}
        </div>

        <button
          className={styles.menu}
          type="button"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <motion.div
          className={styles.mobilePanel}
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
        >
          {sections.map((section) => (
            <button
              key={section.id}
              className={activeSection === section.id ? styles.active : ''}
              type="button"
              onClick={() => handleNavigate(section.id)}
              aria-current={activeSection === section.id ? 'page' : undefined}
            >
              {section.label}
            </button>
          ))}
        </motion.div>
      )}
    </header>
  );
}

export default Navbar;
