import { useState } from 'react';
import styles from './LazyImage.module.css';

function LazyImage({ src, alt, className = '', imageClassName = '', ...props }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <span className={`${styles.wrap} ${loaded ? styles.loaded : ''} ${className}`}>
      {!loaded && <span className={styles.shimmer} aria-hidden="true" />}
      <img
        className={`${styles.image} ${imageClassName}`}
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        {...props}
      />
    </span>
  );
}

export default LazyImage;
