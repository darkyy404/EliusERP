<script>
  import { onMount } from 'svelte';   // Importamos `onMount` de Svelte, que nos permite ejecutar código cuando el componente se monta en el DOM

  import { auth } from '../lib/stores/auth';
  import { navigate } from 'svelte-routing';
  import Sidebar from './Sidebar.svelte';
  import ModuleGrid from './ModuleGrid.svelte';

    // Cuando el componente se monta, verificamos si el usuario está autenticado
  onMount(() => {
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