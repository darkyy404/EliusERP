import { writable } from 'svelte/store';

export interface User {
  id: string;
  email: string;
  role: 'admin' | 'standard' | 'guest';
}

function createAuthStore() {
  const { subscribe, set } = writable<{
    user: User | null;
    isAuthenticated: boolean;
  }>({
    user: null,
    isAuthenticated: false
  });

  return {
    subscribe,
    setUser: (user: User | null) => {
      set({
        user,
        isAuthenticated: !!user
      });
    },
    logout: () => {
      set({
        user: null,
        isAuthenticated: false
      });
    }
  };
}

export const auth = createAuthStore();