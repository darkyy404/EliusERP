<script>
  import { modules } from '../lib/config/modules';
  import { auth } from '../lib/stores/auth';
  import ModuleCard from './ModuleCard.svelte';
  import { 
    Wallet, Box, Users, BarChart3, FileText
  } from 'lucide-svelte';

  const icons = {
    Wallet,
    Box,
    Users,
    BarChart3,
    FileText
  };

 // Filtra los módulos disponibles según el rol del usuario autenticado.
// Si no hay un usuario (`$auth.user` es `null` o `undefined`), no se muestra ningún módulo.
// Si hay un usuario, solo se incluyen los módulos cuyo `allowedRoles` contenga el rol del usuario.
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