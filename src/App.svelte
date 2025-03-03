<script>
  // Importamos el Router y los componentes de rutas de Svelte Routing
  import { Router, Link, Route } from "svelte-routing";

  // Importamos `onMount` para ejecutar código al cargar la aplicación
  import { onMount } from 'svelte';

  // Importamos los stores de tema y autenticación
  import { isDarkTheme } from './lib/stores/theme';
  import { auth } from './lib/stores/auth';

  // Importamos los componentes de la aplicación
  import Layout from './components/Layout.svelte';
  import Login from './routes/Login.svelte';
  import Sales from './routes/modules/Sales.svelte';
  import Inventory from './routes/modules/Inventory.svelte';
  import HR from './routes/modules/HR.svelte';
  import Finance from './routes/modules/Finance.svelte';
  import Billing from './routes/modules/Billing.svelte';

  // Propiedad para manejar la URL actual (necesaria para el Router en SSR)
  export let url = "";
  
  // Al cargar la aplicación, recuperamos el tema guardado en `localStorage`
  onMount(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      isDarkTheme.setTheme(savedTheme === 'dark');
    }
  });
</script>

<!-- Configuración del enrutador -->
<Router {url}>
  <main>
    <!-- Definición de rutas y asignación de componentes -->
    <Route path="/login" component={Login} />
    <Route path="/ventas" component={Sales} />
    <Route path="/inventario" component={Inventory} />
    <Route path="/rrhh" component={HR} />
    <Route path="/finanzas" component={Finance} />
    <Route path="/facturacion" component={Billing} />

    <!-- Ruta por defecto: carga el Layout general -->
    <Route path="/*" component={Layout} />
  </main>
</Router>
