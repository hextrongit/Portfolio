import { Mail, Phone, Send } from 'lucide-react';
import { portfolioData } from '../../store/portfolioData.js';
import GlassPanel from '../Shared/GlassPanel.jsx';
import LazyImage from '../Shared/LazyImage.jsx';
import MagneticButton from '../Shared/MagneticButton.jsx';
import SectionShell from '../Shared/SectionShell.jsx';
import SocialLinks from '../SocialLinks/SocialLinks.jsx';
import styles from './Contact.module.css';

function Contact() {
  return (
    <SectionShell id="contact" eyebrow="Contact" title="Let's build something amazing together.">
      <div className={styles.layout}>
        <GlassPanel className={styles.copy} glow>
          <span className={styles.kicker}>Available for meaningful product work</span>
          <h3>Have a frontend, MERN, or full stack product challenge?</h3>
          <p>
            Reach out for scalable React interfaces, REST API integration, component systems, or production-focused
            web application work.
          </p>
          <div className={styles.actions}>
            <MagneticButton href={`mailto:${portfolioData.email}`}>
              <Send size={18} aria-hidden="true" />
              Email me
            </MagneticButton>
            <MagneticButton href={`tel:${portfolioData.phone.replace(/\s/g, '')}`} variant="secondary">
              <Phone size={18} aria-hidden="true" />
              Call
            </MagneticButton>
          </div>
          <div className={styles.contactLines}>
            <span>
              <Mail size={16} aria-hidden="true" />
              {portfolioData.email}
            </span>
            <span>
              <Phone size={16} aria-hidden="true" />
              {portfolioData.phone}
            </span>
          </div>
          <SocialLinks compact />
        </GlassPanel>

        <div className={styles.imagePanel}>
          <LazyImage src={portfolioData.images.connect} alt={`${portfolioData.name} standing portrait`} imageClassName={styles.image} />
          <div className={styles.formPlaceholder}>
            <span>Lets connect to build something great.</span>
            <p>{portfolioData.placeholders.contactForm}</p>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

export default Contact;
