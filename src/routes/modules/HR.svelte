<script>
  import { Users, Clock, Award } from 'lucide-svelte';
  import Navbar from '../../components/Navbar.svelte';
  import { getHRStats, getEmployees, getHREvents } from '../../lib/services/dataService';

  // Importamos funciones que obtienen datos de recursos humanos
  const stats = getHRStats(); // Estadísticas generales de RRHH
  const employees = getEmployees(); // Lista de empleados recientes
  const events = getHREvents(); // Lista de próximos eventos
</script>

<!-- Página del módulo de Recursos Humanos -->
<div class="module-page">
  <Navbar /> <!-- Barra de navegación -->

  <div class="module-container">
    <header class="module-header">
      <h1>Recursos Humanos</h1>

      <!-- Tarjetas con estadísticas clave de RRHH -->
      <div class="quick-stats">
        <div class="stat-card">
          <Users size={24} />
          <div class="stat-content">
            <span class="stat-value">{stats.activeEmployees}</span>
            <span class="stat-label">Empleados activos</span>
          </div>
        </div>
        <div class="stat-card">
          <Clock size={24} />
          <div class="stat-content">
            <span class="stat-value">{stats.attendance}%</span>
            <span class="stat-label">Asistencia</span>
          </div>
        </div>
        <div class="stat-card">
          <Award size={24} />
          <div class="stat-content">
            <span class="stat-value">{stats.pendingEvaluations}</span>
            <span class="stat-label">Evaluaciones pendientes</span>
          </div>
        </div>
      </div>
    </header>

    <div class="module-content">
      <div class="content-grid">

        <!-- Tabla de empleados recientes -->
        <div class="grid-item employee-list">
          <h2>Empleados Recientes</h2>
          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Departamento</th>
                  <th>Cargo</th>
                  <th>Estado</th>
                </tr>
              </thead>
              <tbody>
                {#each employees as employee}
                  <tr>
                    <td>{employee.name}</td>
                    <td>{employee.department}</td>
                    <td>{employee.position}</td>
                    <td>
                      <!-- Estado dinámico: Activo o Vacaciones -->
                      <span class="status {employee.status}">
                        {employee.status === 'active' ? 'Activo' : 'Vacaciones'}
                      </span>
                    </td>
                  </tr>
                {/each}
              </tbody>
            </table>
          </div>
        </div>

        <!-- Lista de próximos eventos de RRHH -->
        <div class="grid-item upcoming-events">
          <h2>Próximos Eventos</h2>
          <div class="events-list">
            {#each events as event}
              <div class="event-item">
                <!-- Fecha del evento -->
                <div class="event-date">
                  <span class="day">{event.day}</span>
                  <span class="month">{event.month}</span>
                </div>
                <!-- Detalles del evento -->
                <div class="event-details">
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
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

  .active {
    background-color: #10B981;
    color: white;
  }

  .vacation {
    background-color: #F59E0B;
    color: white;
  }

  .events-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .event-item {
    display: flex;
    gap: 1rem;
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: var(--color-background);
    border: 1px solid var(--color-border);
  }

  .event-date {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 60px;
    padding: 0.5rem;
    background-color: var(--color-primary);
    border-radius: 0.375rem;
    color: white;
  }

  .day {
    font-size: 1.25rem;
    font-weight: 600;
  }

  .month {
    font-size: 0.75rem;
    text-transform: uppercase;
  }

  .event-details h3 {
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 0.25rem;
  }

  .event-details p {
    font-size: 0.875rem;
    color: var(--color-text);
    opacity: 0.8;
  }
</style>