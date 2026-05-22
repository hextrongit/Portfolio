import styles from './ProjectPlaceholder.module.css';

function ProjectPlaceholder({ title }) {
  return (
    <div className={styles.placeholder} aria-label={`${title} screenshot placeholder`}>
      <div className={styles.window}>
        <span />
        <span />
        <span />
      </div>
      <div className={styles.lines}>
        <i />
        <i />
        <i />
      </div>
    </div>
  );
}

export default ProjectPlaceholder;
