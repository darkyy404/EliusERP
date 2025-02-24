<script lang="ts">
  import { modules } from '../lib/config/modules';
  import { auth } from '../lib/stores/auth';
  import ModuleCard from './ModuleCard.svelte';
  import { 
    Wallet, Box, Users, BarChart3, FileText
  } from 'lucide-svelte';

  // Objeto con los iconos disponibles
  const icons = {
    Wallet,
    Box,
    Users,
    BarChart3,
    FileText
  };

  // Filtrar módulos según el rol del usuario
  $: filteredModules = modules
    .filter(module => $auth.user && module.allowedRoles.includes($auth.user.role));
</script>

<div class="module-grid">
  {#each filteredModules as module (module.id)}
    <ModuleCard 
      module={module}
      icon={icons[module.icon]}
    />
  {/each}
  }
</div>

<style>
  .module-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
    padding: 1.5rem;
    width: 100%;
  }
</style>