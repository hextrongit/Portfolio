import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './ImageCarousel.module.css';

function ImageCarousel({ images = [], title, autoAdvance = true, autoAdvanceInterval = 5000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance carousel if enabled
  useEffect(() => {
    if (!images || images.length === 0 || !autoAdvance) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, autoAdvanceInterval);

    return () => clearInterval(interval);
  }, [images, autoAdvance, autoAdvanceInterval]);

  if (!images || images.length === 0) {
    return null;
  }

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className={styles.carousel} aria-label={`${title} screenshots carousel`}>
      <div className={styles.imageContainer}>
        <img
          src={images[currentIndex]}
          alt={`${title} screenshot ${currentIndex + 1}`}
          className={styles.image}
        />
      </div>

      {/* Navigation arrows */}
      {images.length > 1 && (
        <>
          <button
            type="button"
            className={styles.navButton}
            onClick={handlePrevious}
            aria-label="Previous image"
          >
            <ChevronLeft size={20} aria-hidden="true" />
          </button>
          <button
            type="button"
            className={styles.navButton}
            onClick={handleNext}
            aria-label="Next image"
          >
            <ChevronRight size={20} aria-hidden="true" />
          </button>
        </>
      )}

      {/* Dot indicators */}
      {images.length > 1 && (
        <div className={styles.dots}>
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to image ${index + 1}`}
              aria-current={index === currentIndex}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ImageCarousel;
