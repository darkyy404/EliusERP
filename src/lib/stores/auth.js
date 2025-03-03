import { writable } from 'svelte/store';

// Un store permite guardar y compartir información entre componentes sin necesidad de pasar datos manualmente (mediante props).

export const auth = createAuthStore();

function createAuthStore() {
  // Creamos el store con el estado inicial de autenticación.
  const { subscribe, set } = writable({
    user: null,
    isAuthenticated: false
  });

  return {
    subscribe, // Permite a otros componentes acceder al estado del usuario.

    setUser: (user) => {
      // Actualiza el usuario y cambia el estado de autenticación.
      set({
        user,
        isAuthenticated: !!user
      });
    },

    logout: () => {
      // Cierra sesión y borra la información del usuario.
      set({
        user: null,
        isAuthenticated: false
      });
    }
  };
}
