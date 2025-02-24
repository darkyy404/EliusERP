<script lang="ts">
  import { navigate } from 'svelte-routing';
  import { auth } from '../lib/stores/auth';

  let email = '';
  let password = '';
  let error = '';

  async function handleSubmit() {
    try {
      // Por ahora, simulamos el login
      if (email === 'admin@example.com' && password === 'admin') {
        auth.setUser({
          id: '1',
          email: 'admin@example.com',
          role: 'admin'
        });
        navigate('/', { replace: true });
      } else if (email === 'user@example.com' && password === 'user') {
        auth.setUser({
          id: '2',
          email: 'user@example.com',
          role: 'standard'
        });
        navigate('/', { replace: true });
      } else {
        error = 'Credenciales inválidas';
      }
    } catch (e) {
      error = 'Error al iniciar sesión';
    }
  }
</script>

<div class="login-container">
  <div class="login-card">
    <h1>Iniciar Sesión</h1>
    
    <form on:submit|preventDefault={handleSubmit}>
      <div class="form-group">
        <label for="email">Correo electrónico</label>
        <input
          type="email"
          id="email"
          bind:value={email}
          placeholder="correo@ejemplo.com"
          required
        />
      </div>

      <div class="form-group">
        <label for="password">Contraseña</label>
        <input
          type="password"
          id="password"
          bind:value={password}
          placeholder="••••••••"
          required
        />
      </div>

      {#if error}
        <div class="error">{error}</div>
      {/if}

      <button type="submit" class="btn btn-primary">
        Iniciar Sesión
      </button>
    </form>

    <div class="demo-credentials">
      <p>Credenciales de prueba:</p>
      <code>admin@example.com / admin</code>
      <code>user@example.com / user</code>
    </div>
  </div>
</div>

<style>
  .login-container {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-background);
  }

  .login-card {
    background-color: var(--color-background);
    padding: 2rem;
    border-radius: 0.5rem;
    box-shadow: var(--shadow-lg);
    width: 100%;
    max-width: 400px;
  }

  h1 {
    color: var(--color-primary);
    margin-bottom: 1.5rem;
    text-align: center;
  }

  .form-group {
    margin-bottom: 1rem;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
    color: var(--color-text);
  }

  input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid var(--color-border);
    border-radius: 0.25rem;
    background-color: var(--color-background);
    color: var(--color-text);
  }

  input:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 2px var(--color-primary-alpha);
  }

  .error {
    color: #ef4444;
    margin-bottom: 1rem;
    font-size: 0.875rem;
  }

  button {
    width: 100%;
  }

  .demo-credentials {
    margin-top: 2rem;
    padding-top: 1rem;
    border-top: 1px solid var(--color-border);
    font-size: 0.875rem;
    color: var(--color-text);
  }

  .demo-credentials p {
    margin-bottom: 0.5rem;
  }

  code {
    display: block;
    padding: 0.5rem;
    background-color: var(--color-border);
    border-radius: 0.25rem;
    margin-bottom: 0.5rem;
    font-family: monospace;
  }
</style>