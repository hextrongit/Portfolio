import {
  BadgeCheck,
  BriefcaseBusiness,
  Code2,
  FolderKanban,
  GraduationCap,
  Home,
  Mail,
  Trophy,
  UserRound,
} from 'lucide-react';
import { useState } from 'react';
import { scrollToSection } from '../../utils/scrollToSection.js';
import styles from './SectionIndicator.module.css';

const sectionIcons = {
  home: Home,
  about: UserRound,
  experience: BriefcaseBusiness,
  skills: Code2,
  projects: FolderKanban,
  achievements: Trophy,
  education: GraduationCap,
  certifications: BadgeCheck,
  contact: Mail,
};

function SectionIndicator({ sections, activeSection }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleNavigate = (id, event) => {
    scrollToSection(id);
    setIsExpanded(false);
    event.currentTarget.blur();
  };

  return (
    <aside
      className={`${styles.indicator} ${isExpanded ? styles.expanded : ''}`}
      aria-label="Section navigation"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      onFocus={() => setIsExpanded(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsExpanded(false);
        }
      }}
    >
      {sections.map((section) => {
        const Icon = sectionIcons[section.id] || Home;

        return (
          <button
            key={section.id}
            type="button"
            className={activeSection === section.id ? styles.active : ''}
            onClick={(event) => handleNavigate(section.id, event)}
            aria-label={`Go to ${section.label}`}
            aria-current={activeSection === section.id ? 'page' : undefined}
            title={section.label}
          >
            <span className={styles.icon} aria-hidden="true">
              <Icon size={17} strokeWidth={2.2} />
            </span>
            <strong>{section.label}</strong>
          </button>
        );
      })}
    </aside>
  );
}

export default SectionIndicator;
