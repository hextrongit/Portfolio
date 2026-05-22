import styles from './Loader.module.css';

function Loader({ compact = false }) {
  return (
    <div className={`${styles.loader} ${compact ? styles.compact : ''}`} role="status" aria-live="polite">
      <span className={styles.ring} aria-hidden="true" />
      <span className={styles.text}>Loading</span>
    </div>
  );
}

export default Loader;
