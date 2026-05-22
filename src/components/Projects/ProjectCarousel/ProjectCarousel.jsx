import { useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import ProjectCard from '../ProjectCard/ProjectCard.jsx';
import ProjectSkeleton from '../ProjectSkeleton/ProjectSkeleton.jsx';
import styles from './ProjectCarousel.module.css';

function ProjectCarousel({ projects, onSelectProject }) {
  const [index, setIndex] = useState(0);
  const visibleProjects = useMemo(() => {
    if (!projects.length) return [];
    return [projects[index], projects[(index + 1) % projects.length]].filter(Boolean);
  }, [index, projects]);

  if (!projects.length) {
    return (
      <div className={styles.grid}>
        <ProjectSkeleton />
        <ProjectSkeleton />
      </div>
    );
  }

  const next = () => setIndex((value) => (value + 1) % projects.length);
  const previous = () => setIndex((value) => (value - 1 + projects.length) % projects.length);

  return (
    <div className={styles.carousel}>
      <div className={styles.controls}>
        <button type="button" onClick={previous} aria-label="Previous project">
          <ArrowLeft size={18} aria-hidden="true" />
        </button>
        <span>
          {index + 1} / {projects.length}
        </span>
        <button type="button" onClick={next} aria-label="Next project">
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
