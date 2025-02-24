import { writable } from 'svelte/store';

function createThemeStore() {
  const { subscribe, set, update } = writable(false);

  return {
    subscribe,
    toggleTheme: () => update(isDark => {
      const newValue = !isDark;
      document.documentElement.setAttribute('data-theme', newValue ? 'dark' : 'light');
      return newValue;
    }),
    setTheme: (isDark: boolean) => {
      document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
      set(isDark);
    }
  };
}

export const isDarkTheme = createThemeStore();