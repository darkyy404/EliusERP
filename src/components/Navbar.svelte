<script>
  import { ArrowLeft } from 'lucide-svelte';
  import { navigate } from 'svelte-routing';

  function goBack() {
    navigate('/');
  }
</script>

<nav class="navbar">
  <button class="back-button" on:click={goBack}>
    <ArrowLeft size={20} />
    <span>Volver al inicio</span>
  </button>
</nav>

<style>
  .navbar {
    background-color: var(--color-background);
    border-bottom: 1px solid var(--color-border);
    padding: 1rem 2rem;
  }

  .back-button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: none;
    border: none;
    color: var(--color-text);
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 0.375rem;
    transition: all 0.2s;
  }

  .back-button:hover {
    background-color: var(--color-border);
  }

  .back-button span {
    font-weight: 500;
  }
</style>