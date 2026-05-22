import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../store/portfolioData.js';
import GlassPanel from '../Shared/GlassPanel.jsx';
import SectionShell from '../Shared/SectionShell.jsx';
import styles from './Skills.module.css';

function Skills() {
  const categories = useMemo(() => Object.keys(portfolioData.skills), []);
  const [active, setActive] = useState(categories[0]);
  const allSkills = portfolioData.skills[active];

  return (
    <SectionShell
      id="skills"
      eyebrow="Stack"
      title="A practical toolkit for polished interfaces and resilient full stack systems."
      intro="Grouped from the resume into interactive categories so the portfolio can grow without changing component code."
      className={styles.compactSection}
    >
      <div className={styles.layout}>
        <GlassPanel className={styles.tabs}>
          {categories.map((category) => (
            <button
              key={category}
              className={active === category ? styles.active : ''}
              type="button"
              onClick={() => setActive(category)}
            >
              {category}
            </button>
          ))}
        </GlassPanel>

        <div className={styles.skillsGrid}>
          {allSkills.map((skill, index) => (
            <motion.div
              key={skill}
              className={styles.skill}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.035 }}
              whileHover={{ y: -5 }}
            >
              <span>{skill}</span>
              <div aria-hidden="true">
                <i style={{ width: `${72 + ((index * 7) % 23)}%` }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

export default Skills;
