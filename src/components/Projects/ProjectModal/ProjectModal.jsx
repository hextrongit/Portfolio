import { X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import ImageCarousel from '../ImageCarousel/ImageCarousel.jsx';
import styles from './ProjectModal.module.css';

function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} preview`}
        >
          <motion.div
            className={styles.modal}
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
          >
            <button className={styles.close} type="button" onClick={onClose} aria-label="Close project preview">
              <X size={20} aria-hidden="true" />
            </button>
            <span>{project.category}</span>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul>
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            {project.images && project.images.length > 0 && (
              <ImageCarousel images={project.images} title={project.title} autoAdvance={false} />
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ProjectModal;
