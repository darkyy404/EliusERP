<script lang="ts">
  import type { Module } from '../types';
  import type { SvelteComponent } from 'svelte';

  // Props del componente
  export let module: Module;
  export let icon: typeof SvelteComponent;

  // Manejador de clic
  function handleClick() {
    console.log('Módulo seleccionado:', module.id);
    // Aquí implementaremos la navegación más adelante
  }
</script>

<div 
  class="module"
  on:click={handleClick}
  role="button"
  tabindex="0"
>
  <div class="module-icon">
    <div class="icon-circle">
      <svelte:component this={icon} size={24} />
    </div>
  </div>
  <h3 class="module-title">{module.title}</h3>
  <p class="module-description">{module.description}</p>
</div>

<style>
  .module {
    background-color: var(--color-background);
    border: 1px solid var(--color-border);
    border-radius: 0.75rem;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }

  .module:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }

  .module:focus {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }

  .module-icon {
    margin-bottom: 1rem;
  }

  .icon-circle {
    background-color: var(--color-primary);
    opacity: 0.1;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .icon-circle :global(svg) {
    color: var(--color-primary);
    opacity: 1;
  }

  .module-title {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--color-text);
    margin-bottom: 0.5rem;
    text-align: center;
  }

  .module-description {
    font-size: 0.875rem;
    color: var(--color-text);
    opacity: 0.8;
    text-align: center;
    line-height: 1.4;
  }
</style>