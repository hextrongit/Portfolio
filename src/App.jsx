import { lazy, Suspense, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import BackgroundEffects from './components/BackgroundEffects/BackgroundEffects.jsx';
import CursorFollower from './components/CursorFollower/CursorFollower.jsx';
import Loader from './components/Loader/Loader.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import SectionIndicator from './components/SectionIndicator/SectionIndicator.jsx';
import ScrollProgress from './components/Shared/ScrollProgress.jsx';
import BackToTop from './components/Shared/BackToTop.jsx';
import { sections } from './constants/sections.js';
import { routes } from './constants/routes.js';
import { useScrollSpy } from './hooks/useScrollSpy.js';
import { useSectionState } from './store/sectionState.js';
import { setReducedMotion } from './store/uiState.js';

const HomePage = lazy(() => import('./pages/HomePage.jsx'));

function App() {
  const prefersReducedMotion = useReducedMotion();
  const { activeSection } = useSectionState();

  useScrollSpy(sections.map((section) => section.id));

  useEffect(() => {
    setReducedMotion(Boolean(prefersReducedMotion));
  }, [prefersReducedMotion]);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Aswin Anilkumar',
    jobTitle: 'Software Engineer',
    url: routes.home,
    sameAs: ['https://www.linkedin.com/in/aswin-anilkumar-2190911b1/'],
    knowsAbout: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'TypeScript'],
  };

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
      <a className="skip-link" href="#home">
        Skip to content
      </a>
      <BackgroundEffects activeSection={activeSection} />
      <ScrollProgress />
      <Navbar sections={sections} activeSection={activeSection} />
      <SectionIndicator sections={sections} activeSection={activeSection} />
      <motion.main
        className="app-shell"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <Suspense fallback={<Loader />}>
          <HomePage />
        </Suspense>
      </motion.main>
      <BackToTop />
      <CursorFollower />
    </>
  );
}

export default App;
