import { motion } from 'framer-motion';
import { portfolioData } from '../../store/portfolioData.js';
import GlassPanel from '../Shared/GlassPanel.jsx';
import SectionShell from '../Shared/SectionShell.jsx';
import styles from './Experience.module.css';

function Experience() {
  return (
    <SectionShell
      id="experience"
      eyebrow="Work"
      title="Experience built across enterprise systems and production environments."
      intro="A journey through professional roles, highlighting responsibilities, technologies, and contributions across real-world projects."
    >
      <div className={styles.timeline}>
        {portfolioData.experienceItems.map((item, index) => (
          <motion.div
            key={`${item.company}-${item.duration}`}
            className={styles.item}
            initial={{ opacity: 0, x: index % 2 ? 28 : -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.22 }}
            transition={{ duration: 0.55, delay: index * 0.06 }}
          >
            <span className={styles.dot} aria-hidden="true" />
            <GlassPanel className={styles.card}>
              <div className={styles.cardTop}>
                <div>
                  <span>{item.duration}</span>
                  <h3>{item.position}</h3>
                  <p>
                    {item.company} / {item.location}
                  </p>
                </div>
              </div>
              <ul>
                {item.responsibilities.map((responsibility) => (
                  <li key={responsibility}>{responsibility}</li>
                ))}
              </ul>
              <div className={styles.stack}>
                {item.techStack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </GlassPanel>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}

export default Experience;
