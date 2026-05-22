import { lazy, Suspense } from 'react';
import Loader from '../components/Loader/Loader.jsx';

const Hero = lazy(() => import('../components/Hero/Hero.jsx'));
const About = lazy(() => import('../components/About/About.jsx'));
const Experience = lazy(() => import('../components/Experience/Experience.jsx'));
const Skills = lazy(() => import('../components/Skills/Skills.jsx'));
const Projects = lazy(() => import('../components/Projects/Projects.jsx'));
const Achievements = lazy(() => import('../components/Achievements/Achievements.jsx'));
const Education = lazy(() => import('../components/Education/Education.jsx'));
const Certifications = lazy(() => import('../components/Certifications/Certifications.jsx'));
const Contact = lazy(() => import('../components/Contact/Contact.jsx'));

function HomePage() {
  return (
    <Suspense fallback={<Loader compact />}>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Achievements />
      <Education />
      <Certifications />
      <Contact />
    </Suspense>
  );
}

export default HomePage;
