<script>
  import { FileText, CreditCard, Receipt } from 'lucide-svelte';
  import Navbar from '../../components/Navbar.svelte';
  import { getBillingStats, getInvoices, getPaymentsSummary } from '../../lib/services/dataService';

    // Obtenemos datos sobre facturación, facturas y resumen de pagos
  const stats = getBillingStats();
  const invoices = getInvoices();
  const payments = getPaymentsSummary();
</script>

<!-- Página del módulo de facturación -->
<div class="module-page">
  <Navbar /> <!-- Barra de navegación -->

  <div class="module-container">
    <header class="module-header">
      <h1>Facturación</h1>

      <!-- Tarjetas con estadísticas clave de facturación -->
      <div class="quick-stats">
        <div class="stat-card">
          <FileText size={24} />
          <div class="stat-content">
            <span class="stat-value">{stats.issuedInvoices}</span>
            <span class="stat-label">Facturas emitidas</span>
          </div>
        </div>
        <div class="stat-card">
          <CreditCard size={24} />
          <div class="stat-content">
            <span class="stat-value">${stats.receivables.toLocaleString()}</span>
            <span class="stat-label">Por cobrar</span>
          </div>
        </div>
        <div class="stat-card">
          <Receipt size={24} />
          <div class="stat-content">
            <span class="stat-value">{stats.collectionRate}%</span>
            <span class="stat-label">Tasa de cobro</span>
          </div>
        </div>
      </div>
    </header>

    <div class="module-content">
      <div class="content-grid">
        
        <!-- Tabla de facturas recientes -->
        <div class="grid-item invoices">
          <h2>Facturas Recientes</h2>
          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th>Nº Factura</th>
                  <th>Cliente</th>
                  <th>Fecha</th>
                  <th>Monto</th>
                  <th>Estado</th>
                </tr>
              </thead>
              <tbody>
                {#each invoices as invoice}
                  <tr>
                    <td>#{invoice.id}</td>
                    <td>{invoice.client}</td>
                    <td>{invoice.date}</td>
                    <td>${invoice.amount.toLocaleString()}</td>
                    <td>
                      <!-- Estado de la factura con clases dinámicas -->
                      <span class="status {invoice.status}">
                        {invoice.status === 'paid' ? 'Pagada' : 
                         invoice.status === 'pending' ? 'Pendiente' : 'Vencida'}
                      </span>
                    </td>
                  </tr>
                {/each}
              </tbody>
            </table>
          </div>
        </div>

        <!-- Resumen de pagos -->
        <div class="grid-item payment-summary">
          <h2>Resumen de Pagos</h2>
          <div class="summary-list">
            
            <!-- Pagos recibidos -->
            <div class="summary-item">
              <div class="summary-icon paid">
                <CreditCard size={20} />
              </div>
              <div class="summary-content">
                <span class="summary-title">Pagos recibidos</span>
                <span class="summary-value">${payments.received.toLocaleString()}</span>
              </div>
            </div>

            <!-- Pagos pendientes -->
            <div class="summary-item">
              <div class="summary-icon pending">
                <FileText size={20} />
              </div>
              <div class="summary-content">
                <span class="summary-title">Pagos pendientes</span>
                <span class="summary-value">${payments.pending.toLocaleString()}</span>
              </div>
            </div>

            <!-- Pagos vencidos -->
            <div class="summary-item">
              <div class="summary-icon overdue">
                <Receipt size={20} />
              </div>
              <div class="summary-content">
                <span class="summary-title">Pagos vencidos</span>
                <span class="summary-value">${payments.overdue.toLocaleString()}</span>
              </div>
            </div>

          </div>
        </div> <!-- Fin del resumen de pagos -->
        
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

  .paid {
    background-color: #10B981;
    color: white;
  }

  .pending {
    background-color: #F59E0B;
    color: white;
  }

  .overdue {
    background-color: #EF4444;
    color: white;
  }

  .summary-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .summary-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: var(--color-background);
    border: 1px solid var(--color-border);
  }

  .summary-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .summary-icon.paid {
    background-color: rgba(16, 185, 129, 0.1);
  }

  .summary-icon.paid :global(svg) {
    color: #10B981;
  }

  .summary-icon.pending {
    background-color: rgba(245, 158, 11, 0.1);
  }

  .summary-icon.pending :global(svg) {
    color: #F59E0B;
  }

  .summary-icon.overdue {
    background-color: rgba(239, 68, 68, 0.1);
  }

  .summary-icon.overdue :global(svg) {
    color: #EF4444;
  }

  .summary-content {
    display: flex;
    flex-direction: column;
  }

  .summary-title {
    font-size: 0.875rem;
    color: var(--color-text);
    opacity: 0.8;
  }

  .summary-value {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--color-text);
  }
</style>
