import styles from './ProjectPlaceholder.module.css';
import ImageCarousel from '../ImageCarousel/ImageCarousel.jsx';

function ProjectPlaceholder({ title, images = [] }) {
  // Show carousel if images are available
  if (images && images.length > 0) {
    return <ImageCarousel images={images} title={title} />;
  }

  // Fallback to placeholder if no images
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
