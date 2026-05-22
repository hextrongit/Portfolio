import { BadgeCheck, ExternalLink } from 'lucide-react';
import { portfolioData } from '../../store/portfolioData.js';
import GlassPanel from '../Shared/GlassPanel.jsx';
import SectionShell from '../Shared/SectionShell.jsx';
import styles from './Certifications.module.css';

function Certifications() {
  return (
    <SectionShell
      id="certifications"
      eyebrow="Certifications"
      title="Verified training listed in the resume, with credential slots ready for future links."
      className={styles.compactSection}
    >
      <div className={styles.grid}>
        {portfolioData.certifications.map((certification) => (
          <GlassPanel key={certification.name} className={styles.card}>
            <BadgeCheck size={28} aria-hidden="true" />
            <div>
              <span>{certification.duration}</span>
              <h3>{certification.name}</h3>
              <p>{certification.issuer}</p>
            </div>
            <a
              className={!certification.credentialUrl ? styles.disabled : ''}
              href={certification.credentialUrl || undefined}
              target="_blank"
              rel="noreferrer"
              onClick={(event) => {
                if (!certification.credentialUrl) event.preventDefault();
              }}
              title={certification.credentialUrl ? 'Open credential' : 'TODO: Add credential URL'}
              aria-label={`Credential for ${certification.name}`}
            >
              <ExternalLink size={18} aria-hidden="true" />
            </a>
          </GlassPanel>
        ))}
      </div>
    </SectionShell>
  );
}

export default Certifications;
