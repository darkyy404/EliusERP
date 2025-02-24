<script lang="ts">
  import { Router, Link, Route } from "svelte-routing";
  import { onMount } from 'svelte';
  import { isDarkTheme } from './lib/stores/theme';
  import { auth } from './lib/stores/auth';
  import Layout from './components/Layout.svelte';
  import Login from './routes/Login.svelte';

  export let url = "";
  
  onMount(() => {
    // Verificar si hay un tema guardado en localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      isDarkTheme.setTheme(savedTheme === 'dark');
    }
  });
</script>

<Router {url}>
  <main>
    <Route path="/login" component={Login} />
    <Route path="/*" component={Layout} />
  </main>
</Router>