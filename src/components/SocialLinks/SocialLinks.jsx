import { Facebook, Github, Gitlab, Instagram, Linkedin, Mail, MapPin, TerminalSquare } from 'lucide-react';
import { portfolioData } from '../../store/portfolioData.js';
import { normalizeSocialLinks } from '../../utils/socialLinks.js';
import styles from './SocialLinks.module.css';

const iconMap = {
  github: Github,
  gitlab: Gitlab,
  linkedin: Linkedin,
  leetcode: TerminalSquare,
  instagram: Instagram,
  facebook: Facebook,
  email: Mail,
};

function SocialLinks({ compact = false }) {
  const links = normalizeSocialLinks(portfolioData.socialLinks);

  return (
    <div className={`${styles.socials} ${compact ? styles.compact : ''}`} aria-label="Social links">
      {links.map(({ type, href, isAvailable }) => {
        const Icon = iconMap[type] || TerminalSquare;
        const label = type.charAt(0).toUpperCase() + type.slice(1);
        return (
          <a
            key={type}
            className={!isAvailable ? styles.disabled : ''}
            href={href || undefined}
            target={href?.startsWith('http') ? '_blank' : undefined}
            rel={href?.startsWith('http') ? 'noreferrer' : undefined}
            aria-label={isAvailable ? label : `${label} pending`}
            title={isAvailable ? label : portfolioData.placeholders[type] || 'TODO: Add link.'}
            onClick={(event) => {
              if (!isAvailable) event.preventDefault();
            }}
          >
            <Icon size={18} aria-hidden="true" />
          </a>
        );
      })}
      <a
        className={styles.location}
        href={portfolioData.addressUrl}
        target="_blank"
        rel="noreferrer"
        title="Open address in Google Maps"
        aria-label="Open address in Google Maps"
      >
        <MapPin size={16} aria-hidden="true" />
        {portfolioData.location}
      </a>
    </div>
  );
}

export default SocialLinks;
