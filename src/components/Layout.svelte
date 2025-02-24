<script lang="ts">
  import { onMount } from 'svelte';
  import { auth } from '../lib/stores/auth';
  import { navigate } from 'svelte-routing';
  import Sidebar from './Sidebar.svelte';
  import ModuleGrid from './ModuleGrid.svelte';

  onMount(() => {
    // Verificar autenticación
    if (!$auth.isAuthenticated) {
      navigate('/login', { replace: true });
    }
  });
</script>

<div class="layout">
  <Sidebar />
  <main class="main-content">
    <ModuleGrid />
  </main>
</div>

<style>
  .layout {
    display: flex;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }

  .main-content {
    flex: 1;
    overflow-y: auto;
    padding: 2rem;
  }
</style>