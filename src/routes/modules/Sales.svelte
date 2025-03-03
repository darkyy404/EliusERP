<script>
  import { BarChart, DollarSign, Users, TrendingUp } from 'lucide-svelte';
  import Navbar from '../../components/Navbar.svelte';
  import { getSalesStats, getRecentSales, getTopProducts } from '../../lib/services/dataService';


  // Importamos las funciones para obtener datos sobre ventas
  const stats = getSalesStats(); // Estadísticas generales de ventas
  const recentSales = getRecentSales(); // Ventas recientes
  const topProducts = getTopProducts(); // Productos más vendidos
</script>

<!-- Página del módulo de Ventas -->
<div class="module-page">
  <Navbar /> <!-- Barra de navegación -->

  <div class="module-container">
    <header class="module-header">
      <h1>Ventas</h1>

      <!-- Tarjetas con estadísticas clave de ventas -->
      <div class="quick-stats">
        <div class="stat-card">
          <DollarSign size={24} />
          <div class="stat-content">
            <span class="stat-value">${stats.monthlySales.toLocaleString()}</span>
            <span class="stat-label">Ventas del mes</span>
          </div>
        </div>
        <div class="stat-card">
          <Users size={24} />
          <div class="stat-content">
            <span class="stat-value">{stats.newCustomers}</span>
            <span class="stat-label">Nuevos clientes</span>
          </div>
        </div>
        <div class="stat-card">
          <TrendingUp size={24} />
          <div class="stat-content">
            <span class="stat-value">+{stats.growth}%</span>
            <span class="stat-label">Crecimiento</span>
          </div>
        </div>
      </div>
    </header>

    <div class="module-content">
      <div class="content-grid">

        <!-- Tabla de ventas recientes -->
        <div class="grid-item sales-list">
          <h2>Ventas Recientes</h2>
          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th>Cliente</th>
                  <th>Producto</th>
                  <th>Fecha</th>
                  <th>Monto</th>
                  <th>Estado</th>
                </tr>
              </thead>
              <tbody>
                {#each recentSales as sale}
                  <tr>
                    <td>{sale.client}</td>
                    <td>{sale.product}</td>
                    <td>{sale.date}</td>
                    <td>${sale.amount.toLocaleString()}</td>
                    <td>
                      <!-- Estado dinámico de la venta -->
                      <span class="status {sale.status}">
                        {sale.status === 'completed' ? 'Completada' : 'En proceso'}
                      </span>
                    </td>
                  </tr>
                {/each}
              </tbody>
            </table>
          </div>
        </div>

        <!-- Lista de los productos más vendidos -->
        <div class="grid-item top-products">
          <h2>Productos Más Vendidos</h2>
          <div class="product-list">
            {#each topProducts as product, index}
              <div class="product-item">
                <!-- Ranking del producto más vendido -->
                <div class="product-rank">{index + 1}</div>
                <div class="product-info">
                  <h3>{product.name}</h3>
                  <p>{product.sales} ventas</p>
                </div>
                <!-- Ingresos generados por el producto -->
                <div class="product-revenue">${product.revenue.toLocaleString()}</div>
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

  .completed {
    background-color: #10B981;
    color: white;
  }

  .pending {
    background-color: #F59E0B;
    color: white;
  }

  .product-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .product-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: var(--color-background);
    border: 1px solid var(--color-border);
  }

  .product-rank {
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-primary);
    color: white;
    border-radius: 50%;
    font-weight: 600;
  }

  .product-info {
    flex: 1;
  }

  .product-info h3 {
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 0.25rem;
  }

  .product-info p {
    font-size: 0.875rem;
    color: var(--color-text);
    opacity: 0.8;
  }

  .product-revenue {
    font-weight: 600;
    color: var(--color-primary);
  }
</style>