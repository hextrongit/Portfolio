import { Award, GitPullRequest, Gauge, PackageCheck } from 'lucide-react';
import { portfolioData } from '../../store/portfolioData.js';
import GlassPanel from '../Shared/GlassPanel.jsx';
import SectionShell from '../Shared/SectionShell.jsx';
import styles from './Achievements.module.css';

const icons = [PackageCheck, Gauge, GitPullRequest, Award];

function Achievements() {
  return (
    <SectionShell
      id="achievements"
      eyebrow="Impact"
      title="Delivering measurable impact through product development, performance optimization, and quality engineering."
      intro="Highlights of contributions across product delivery, system performance, code quality, and team collaboration."
      className={styles.compactSection}
    >
      <div className={styles.grid}>
        {portfolioData.achievements.map((achievement, index) => {
          const Icon = icons[index] || Award;
          return (
            <GlassPanel key={achievement} className={styles.card}>
              <Icon size={24} aria-hidden="true" />
              <p>{achievement}</p>
            </GlassPanel>
          );
        })}
      </div>
    </SectionShell>
  );
}

export default Achievements;
