import { Code2, Layers3, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../../store/portfolioData.js';
import GlassPanel from '../Shared/GlassPanel.jsx';
import SectionShell from '../Shared/SectionShell.jsx';
import styles from './About.module.css';

const focusItems = [
  { icon: Code2, title: 'Modular Frontend', text: 'Reusable React architecture, state strategy, and consistent component standards.' },
  { icon: Layers3, title: 'Full Stack Delivery', text: 'REST APIs, WebSockets, MongoDB, and integrations across Laravel and .NET services.' },
  { icon: ShieldCheck, title: 'Production Quality', text: 'Code reviews, secure auth flows, testing awareness, and performance-focused rendering.' },
];

function About() {
  return (
    <SectionShell
      id="about"
      eyebrow="Profile"
      title="Building scalable applications with a focus on performance, maintainability, and user experience."
      intro={portfolioData.about[0]}
    >
      <div className={styles.grid}>
        <GlassPanel className={styles.copy} glow>
          {portfolioData.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </GlassPanel>

        <div className={styles.focusGrid}>
          {focusItems.map(({ icon: Icon, title, text }) => (
            <GlassPanel key={title} className={styles.focusCard}>
              <Icon size={24} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
            </GlassPanel>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

export default About;
