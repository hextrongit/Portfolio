import { GraduationCap } from 'lucide-react';
import { portfolioData } from '../../store/portfolioData.js';
import GlassPanel from '../Shared/GlassPanel.jsx';
import SectionShell from '../Shared/SectionShell.jsx';
import styles from './Education.module.css';

function Education() {
  return (
    <SectionShell
      id="education"
      eyebrow="Education"
      title="Academic foundation supporting analytical thinking and a transition into technology."
      intro="Bachelor’s degree in Physics with a strong foundation in analytical thinking and problem solving, complemented by IT training through the ASAP program completed alongside the degree."
      className={styles.compactSection}
    >
      <div className={styles.grid}>
        {portfolioData.education.map((item) => (
          <GlassPanel key={`${item.degree}-${item.duration}`} className={styles.card} glow>
            <GraduationCap size={30} aria-hidden="true" />
            <div>
              <span>{item.duration}</span>
              <h3>{item.degree}</h3>
              <p>{item.institution}</p>
            </div>
          </GlassPanel>
        ))}
      </div>
    </SectionShell>
  );
}

export default Education;
