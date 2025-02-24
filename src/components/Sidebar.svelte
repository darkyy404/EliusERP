<script lang="ts">
  import { Sun, Moon } from 'lucide-svelte';
  import { isDarkTheme } from '../lib/stores/theme';
  import { auth } from '../lib/stores/auth';
  import { navigate } from 'svelte-routing';

  function handleLogout() {
    auth.logout();
    navigate('/login', { replace: true });
  }
</script>

<aside class="sidebar">
  <div class="header">
    <h1>Enterprise ERP</h1>
  </div>

  <nav class="nav">
    <!-- Los items de navegación se agregarán aquí -->
  </nav>

  <div class="footer">
    <button class="icon-button" on:click={() => isDarkTheme.toggleTheme()}>
      {#if $isDarkTheme}
        <Sun size={20} />
      {:else}
        <Moon size={20} />
      {/if}
      }
    </button>
    <button class="btn btn-primary" on:click={handleLogout}>
      Cerrar Sesión
    </button>
  </div>
</aside>

<style>
  .sidebar {
    width: 16rem;
    height: 100%;
    border-right: 1px solid var(--color-border);
    display: flex;
    flex-direction: column;
  }

  .header {
    padding: 1rem;
    border-bottom: 1px solid var(--color-border);
  }

  .header h1 {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--color-primary);
  }

  .nav {
    flex: 1;
    overflow-y: auto;
    padding: 1rem;
  }

  .footer {
    padding: 1rem;
    border-top: 1px solid var(--color-border);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>