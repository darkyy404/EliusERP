import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte({
      // Add compiler options to fix the style issues
      compilerOptions: {
        dev: true
      }
    })
  ],
  server: {
    hmr: {
      overlay: false
    }
  }
});