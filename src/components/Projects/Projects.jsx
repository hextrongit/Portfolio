import { useMemo, useState } from 'react';
import { portfolioData } from '../../store/portfolioData.js';
import SectionShell from '../Shared/SectionShell.jsx';
import ProjectCarousel from './ProjectCarousel/ProjectCarousel.jsx';
import ProjectModal from './ProjectModal/ProjectModal.jsx';
import styles from './Projects.module.css';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const featured = useMemo(() => portfolioData.projects.filter((project) => project.featured), []);

  return (
    <SectionShell
      id="projects"
      eyebrow="Projects"
      title="Selected projects showcasing real-world applications, scalable systems, and product experiences."
      intro="A collection of projects featuring modern web technologies, business solutions, and full stack development experience."
    >
      <div className={styles.frame}>
        <ProjectCarousel projects={featured} onSelectProject={setSelectedProject} />
      </div>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </SectionShell>
  );
}

export default Projects;
