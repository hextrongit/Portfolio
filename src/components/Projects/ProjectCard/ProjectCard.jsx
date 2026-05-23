import { ExternalLink, Github, ImagePlus, Maximize2 } from 'lucide-react';
import { motion } from 'framer-motion';
import GlassPanel from '../../Shared/GlassPanel.jsx';
import ProjectPlaceholder from '../ProjectPlaceholder/ProjectPlaceholder.jsx';
import styles from './ProjectCard.module.css';

function ProjectCard({ project, onPreview }) {
  return (
    <GlassPanel
      as={motion.article}
      className={styles.card}
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 260, damping: 24 }}
    >
      <ProjectPlaceholder title={project.title} images={project.images} />
      <div className={styles.body}>
        <span className={styles.category}>{project.category}</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className={styles.stack}>
          {project.techStack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
        <div className={styles.actions}>
          <button type="button" onClick={() => onPreview(project)} aria-label={`Preview ${project.title}`}>
            <Maximize2 size={17} aria-hidden="true" />
          </button>
          <a
            className={!project.github ? styles.disabled : ''}
            href={project.github || undefined}
            target="_blank"
            rel="noreferrer"
            aria-label={`GitHub for ${project.title}`}
            title={project.github ? 'GitHub' : 'TODO: Add GitHub URL'}
            onClick={(event) => {
              if (!project.github) event.preventDefault();
            }}
          >
            <Github size={17} aria-hidden="true" />
          </a>
          <a
            className={!project.demo ? styles.disabled : ''}
            href={project.demo || undefined}
            target="_blank"
            rel="noreferrer"
            aria-label={`Demo for ${project.title}`}
            title={project.demo ? 'Demo' : 'TODO: Add demo URL'}
            onClick={(event) => {
              if (!project.demo) event.preventDefault();
            }}
          >
            <ExternalLink size={17} aria-hidden="true" />
          </a>
          <span title="TODO: Add project screenshots">
            <ImagePlus size={17} aria-hidden="true" />
          </span>
        </div>
      </div>
    </GlassPanel>
  );
}

export default ProjectCard;
