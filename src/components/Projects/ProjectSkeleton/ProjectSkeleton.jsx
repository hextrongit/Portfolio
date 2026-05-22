import styles from './ProjectSkeleton.module.css';

function ProjectSkeleton() {
  return (
    <div className={styles.skeleton} aria-hidden="true">
      <span />
      <i />
      <i />
      <i />
    </div>
  );
}

export default ProjectSkeleton;
