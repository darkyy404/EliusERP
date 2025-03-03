<script>
  import { DollarSign, TrendingUp, PieChart } from 'lucide-svelte';
  import Navbar from '../../components/Navbar.svelte';
  import { getFinanceStats, getTransactions, getFinancialSummary } from '../../lib/services/dataService';

   // Obtenemos datos de estadísticas financieras, transacciones recientes y resumen financiero.
   const stats = getFinanceStats();
  const transactions = getTransactions();
  const summary = getFinancialSummary();
</script>

<!-- Página del módulo de Finanzas -->
<div class="module-page">
  <Navbar /> <!-- Barra de navegación -->

  <div class="module-container">
    <header class="module-header">
      <h1>Finanzas</h1>

      <!-- Tarjetas con métricas clave -->
      <div class="quick-stats">
        <div class="stat-card">
          <DollarSign size={24} />
          <div class="stat-content">
            <span class="stat-value">${stats.monthlyIncome.toLocaleString()}</span>
            <span class="stat-label">Ingresos mensuales</span>
          </div>
        </div>
        <div class="stat-card">
          <TrendingUp size={24} />
          <div class="stat-content">
            <span class="stat-value">+{stats.growth}%</span>
            <span class="stat-label">Crecimiento</span>
          </div>
        </div>
        <div class="stat-card">
          <PieChart size={24} />
          <div class="stat-content">
            <span class="stat-value">{stats.profitMargin}%</span>
            <span class="stat-label">Margen de beneficio</span>
          </div>
        </div>
      </div>
    </header>

    <div class="module-content">
      <div class="content-grid">
        
        <!-- Tabla de transacciones recientes -->
        <div class="grid-item transactions">
          <h2>Últimas Transacciones</h2>
          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th>Descripción</th>
                  <th>Fecha</th>
                  <th>Monto</th>
                  <th>Estado</th>
                </tr>
              </thead>
              <tbody>
                {#each transactions as transaction}
                  <tr>
                    <td>{transaction.description}</td>
                    <td>{transaction.date}</td>
                    <td class={transaction.amount > 0 ? 'positive' : 'negative'}>
                      <!-- Si el monto es positivo, agregamos "+" -->
                      {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toLocaleString()}
                    </td>
                    <td>
                      <!-- Clases dinámicas para estados de transacción -->
                      <span class="status {transaction.status}">
                        {transaction.status === 'completed' ? 'Completado' : 'Pendiente'}
                      </span>
                    </td>
                  </tr>
                {/each}
              </tbody>
            </table>
          </div>
        </div>

        <!-- Resumen financiero -->
        <div class="grid-item financial-summary">
          <h2>Resumen Financiero</h2>
          <div class="summary-list">
            <!-- Ingresos totales -->
            <div class="summary-item">
              <span class="label">Ingresos totales</span>
              <span class="value positive">+${summary.totalIncome.toLocaleString()}</span>
            </div>

            <!-- Gastos totales -->
            <div class="summary-item">
              <span class="label">Gastos totales</span>
              <span class="value negative">-${summary.totalExpenses.toLocaleString()}</span>
            </div>

            <!-- Balance neto -->
            <div class="summary-item total">
              <span class="label">Balance neto</span>
              <span class="value">${summary.netBalance.toLocaleString()}</span>
            </div>
          </div>
        </div> <!-- Fin del resumen financiero -->
        
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

  .summary-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .summary-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border-bottom: 1px solid var(--color-border);
  }

  .summary-item:last-child {
    border-bottom: none;
  }

  .summary-item.total {
    font-weight: 600;
    font-size: 1.125rem;
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 2px solid var(--color-border);
  }

  .label {
    color: var(--color-text);
  }

  .value {
    font-weight: 500;
  }

  .positive {
    color: #10B981;
  }

  .negative {
    color: #EF4444;
  }
</style>