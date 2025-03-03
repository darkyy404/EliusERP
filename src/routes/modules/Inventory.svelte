<script>
  import { Package, AlertTriangle, TrendingUp } from 'lucide-svelte';
  import Navbar from '../../components/Navbar.svelte';
  import { getInventoryStats, getProducts, getInventoryAlerts } from '../../lib/services/dataService';


  // Importamos los datos de inventario desde el servicio
  const stats = getInventoryStats(); // Estadísticas generales del inventario
  const products = getProducts(); // Lista de productos disponibles
  const alerts = getInventoryAlerts(); // Alertas relacionadas con el stock
</script>

<!-- Página del módulo de Inventario -->
<div class="module-page">
  <Navbar /> <!-- Barra de navegación -->

  <div class="module-container">
    <header class="module-header">
      <h1>Inventario</h1>

      <!-- Tarjetas con estadísticas clave del inventario -->
      <div class="quick-stats">
        <div class="stat-card">
          <Package size={24} />
          <div class="stat-content">
            <span class="stat-value">{stats.totalProducts.toLocaleString()}</span>
            <span class="stat-label">Productos en stock</span>
          </div>
        </div>
        <div class="stat-card">
          <AlertTriangle size={24} />
          <div class="stat-content">
            <span class="stat-value">{stats.lowStock}</span>
            <span class="stat-label">Stock bajo</span>
          </div>
        </div>
        <div class="stat-card">
          <TrendingUp size={24} />
          <div class="stat-content">
            <!-- Se divide el valor total entre 1000 para mostrarlo en formato K (miles) -->
            <span class="stat-value">${(stats.totalValue / 1000).toFixed(0)}K</span>
            <span class="stat-label">Valor total</span>
          </div>
        </div>
      </div>
    </header>

    <div class="module-content">
      <div class="content-grid">

        <!-- Tabla de productos en inventario -->
        <div class="grid-item inventory-list">
          <h2>Productos</h2>
          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Categoría</th>
                  <th>Stock</th>
                  <th>Precio</th>
                  <th>Estado</th>
                </tr>
              </thead>
              <tbody>
                {#each products as product}
                  <tr>
                    <td>{product.name}</td>
                    <td>{product.category}</td>
                    <td>{product.stock}</td>
                    <td>${product.price}</td>
                    <td>
                      <!-- Clase dinámica para mostrar el estado del producto -->
                      <span class="status {product.status}">
                        {product.status === 'normal' ? 'Normal' : 
                         product.status === 'low' ? 'Bajo' : 'Exceso'}
                      </span>
                    </td>
                  </tr>
                {/each}
              </tbody>
            </table>
          </div>
        </div>

        <!-- Alertas de inventario -->
        <div class="grid-item alerts">
          <h2>Alertas de Inventario</h2>
          <div class="alert-list">
            {#each alerts as alert}
              <div class="alert-item {alert.type}">
                <!-- Se elige un icono según el tipo de alerta -->
                {#if alert.type === 'warning'}
                  <AlertTriangle size={20} />
                {:else if alert.type === 'info'}
                  <Package size={20} />
                {:else}
                  <TrendingUp size={20} />
                {/if}
                <div class="alert-content">
                  <h3>{alert.title}</h3>
                  <p>{alert.description}</p>
                </div>
              </div>
            {/each}
          </div>
        </div>

      </div>
    </div>
  </div>
</div>


<style>
  .module-page {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .module-container {
    flex: 1;
    padding: 2rem;
    overflow-y: auto;
  }

  .module-header {
    margin-bottom: 2rem;
  }

  h1 {
    font-size: 2rem;
    font-weight: 600;
    color: var(--color-text);
    margin-bottom: 1.5rem;
  }

  .quick-stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
  }

  .stat-card {
    background-color: var(--color-background);
    border: 1px solid var(--color-border);
    border-radius: 0.5rem;
    padding: 1.5rem;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .stat-card :global(svg) {
    color: var(--color-primary);
  }

  .stat-content {
    display: flex;
    flex-direction: column;
  }

  .stat-value {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--color-text);
  }

  .stat-label {
    font-size: 0.875rem;
    color: var(--color-text);
    opacity: 0.8;
  }

  .content-grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2rem;
  }

  .grid-item {
    background-color: var(--color-background);
    border: 1px solid var(--color-border);
    border-radius: 0.5rem;
    padding: 1.5rem;
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--color-text);
    margin-bottom: 1rem;
  }

  .table-container {
    overflow-x: auto;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th, td {
    padding: 0.75rem;
    text-align: left;
    border-bottom: 1px solid var(--color-border);
  }

  th {
    font-weight: 600;
    color: var(--color-text);
    opacity: 0.8;
  }

  .status {
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    font-size: 0.875rem;
  }

  .normal {
    background-color: #10B981;
    color: white;
  }

  .low {
    background-color: #EF4444;
    color: white;
  }

  .excess {
    background-color: #F59E0B;
    color: white;
  }

  .alert-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .alert-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: var(--color-background);
    border: 1px solid var(--color-border);
  }

  .alert-item.warning :global(svg) {
    color: #EF4444;
  }

  .alert-item.info :global(svg) {
    color: #3B82F6;
  }

  .alert-item.success :global(svg) {
    color: #10B981;
  }

  .alert-content h3 {
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 0.25rem;
  }

  .alert-content p {
    font-size: 0.875rem;
    color: var(--color-text);
    opacity: 0.8;
  }
</style>