import { useSyncExternalStore } from 'react';

let snapshot = {
  isLoading: false,
  theme: 'dark',
  reducedMotion: false,
};

const listeners = new Set();

const emit = () => listeners.forEach((listener) => listener());

export const uiState = {
  subscribe(listener) {
    listeners.add(listener);
    return () => listeners.delete(listener);
  },
  getSnapshot() {
    return snapshot;
  },
  setState(nextState) {
    const nextSnapshot = { ...snapshot, ...nextState };
    if (Object.keys(nextState).every((key) => Object.is(snapshot[key], nextSnapshot[key]))) return;
    snapshot = nextSnapshot;
    emit();
  },
};

export const setLoading = (isLoading) => uiState.setState({ isLoading });
export const setTheme = (theme) => uiState.setState({ theme });
export const setReducedMotion = (reducedMotion) => uiState.setState({ reducedMotion });

export function useUiState() {
  return useSyncExternalStore(uiState.subscribe, uiState.getSnapshot, uiState.getSnapshot);
}
