import { useMemo, useState, useEffect, useRef, useCallback } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import ProjectCard from '../ProjectCard/ProjectCard.jsx';
import ProjectSkeleton from '../ProjectSkeleton/ProjectSkeleton.jsx';
import styles from './ProjectCarousel.module.css';

const projectsPerSlide = 2;

function ProjectCarousel({ projects, onSelectProject }) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  const visibleProjects = useMemo(() => {
    if (!projects.length) return [];
    const endIndex = Math.min(index + projectsPerSlide, projects.length);
    return projects.slice(index, endIndex);
  }, [index, projects]);

  if (!projects.length) {
    return (
      <div className={styles.grid}>
        <ProjectSkeleton />
        <ProjectSkeleton />
      </div>
    );
  }

  const totalSlides = Math.ceil(projects.length / projectsPerSlide);
  const currentSlide = Math.floor(index / projectsPerSlide) + 1;

  const next = useCallback(() => {
    setIndex((value) => {
      const nextIndex = value + projectsPerSlide;
      return nextIndex >= projects.length ? 0 : nextIndex;
    });
  }, [projects.length, projectsPerSlide]);

  const previous = useCallback(() => {
    setIndex((value) => {
      const prevIndex = value - projectsPerSlide;
      return prevIndex < 0 ? Math.max(0, projects.length - projectsPerSlide) : prevIndex;
    });
  }, [projects.length, projectsPerSlide]);

  const resetTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(next, 4000);
  }, [next]);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [resetTimer]);

  const handlePrevious = () => {
    previous();
    resetTimer();
  };

  const handleNext = () => {
    next();
    resetTimer();
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.controls}>
        <button type="button" onClick={handlePrevious} aria-label="Previous project">
          <ArrowLeft size={18} aria-hidden="true" />
        </button>
        <span>
          {currentSlide} / {totalSlides}
        </span>
        <button type="button" onClick={handleNext} aria-label="Next project">
          <ArrowRight size={18} aria-hidden="true" />
        </button>
      </div>
      <div className={styles.grid}>
        {visibleProjects.map((project) => (
          <ProjectCard key={project.id} project={project} onPreview={onSelectProject} />
        ))}
      </div>
    </div>
  );
}

export default ProjectCarousel;
