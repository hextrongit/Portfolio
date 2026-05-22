import { setActiveSection } from '../store/sectionState.js';

export function scrollToSection(id) {
  const node = document.getElementById(id);
  if (!node) return;
  setActiveSection(id);
  node.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
