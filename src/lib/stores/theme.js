import { writable } from 'svelte/store';

// Store para manejar el tema (oscuro o claro) en la aplicación.
export const isDarkTheme = createThemeStore();

function createThemeStore() {
  // `writable(false)`: El tema por defecto es claro (false).
  const { subscribe, set, update } = writable(false);

  return {
    subscribe, // Permite a los componentes acceder al estado del tema.

    toggleTheme: () => update(isDark => {
      // Cambia el estado del tema.
      const newValue = !isDark;
      // Aplica el tema al `<html>` mediante el atributo `data-theme`.
      document.documentElement.setAttribute('data-theme', newValue ? 'dark' : 'light');
      // Guarda la preferencia en `localStorage` para que se mantenga al recargar.
      localStorage.setItem('theme', newValue ? 'dark' : 'light');
      return newValue;
    }),

    setTheme: (isDark) => {
      // Establece manualmente el tema y lo guarda en `localStorage`.
      document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      set(isDark);
    }
  };
}
