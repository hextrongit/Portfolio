import { useSyncExternalStore } from 'react';

let snapshot = {
  activeSection: 'home',
};

const listeners = new Set();

const emit = () => listeners.forEach((listener) => listener());

export const sectionState = {
  subscribe(listener) {
    listeners.add(listener);
    return () => listeners.delete(listener);
  },
  getSnapshot() {
    return snapshot;
  },
  setActiveSection(activeSection) {
    if (snapshot.activeSection === activeSection) return;
    snapshot = { ...snapshot, activeSection };
    emit();
  },
};

export const setActiveSection = sectionState.setActiveSection;

export function useSectionState() {
  return useSyncExternalStore(sectionState.subscribe, sectionState.getSnapshot, sectionState.getSnapshot);
}
