📘 Elius ERP - Documentación

📌 Descripción General

Enterprise ERP es un sistema ERP desarrollado con Svelte que proporciona una interfaz para gestionar diferentes módulos empresariales, como ventas, inventario, recursos humanos, finanzas y facturación.

Este proyecto está diseñado para ser escalable, modular y fácil de mantener, utilizando tecnologías modernas para garantizar una experiencia ágil y responsiva.

📂 Estructura de Archivos

📁 Archivos de Configuración

index.html: Punto de entrada HTML de la aplicación.

package.json: Configuración del proyecto y gestión de dependencias.

vite.config.js / vite.config.ts: Configuración de Vite para el proyecto.

.env: Variables de entorno (posible integración futura con una base de datos como Supabase).

📁 src/ - Código fuente

🔹 Archivos Principales

main.js: Punto de entrada JavaScript de la aplicación.

App.svelte: Componente principal que configura el enrutamiento.

app.css: Estilos globales de la aplicación.

🔹 components/ - Componentes de UI

Layout.svelte: Estructura principal de la aplicación.

ModuleCard.svelte: Tarjeta para mostrar un módulo en la página principal.

ModuleGrid.svelte: Cuadrícula de módulos disponibles.

Navbar.svelte: Barra de navegación superior.

Sidebar.svelte: Barra lateral con navegación y opciones.

🔹 routes/ - Páginas principales

Login.svelte: Página de inicio de sesión.

modules/: Módulos específicos del ERP:

📊 Sales.svelte: Módulo de ventas.

📦 Inventory.svelte: Módulo de inventario.

👨‍💼 HR.svelte: Módulo de recursos humanos.

💰 Finance.svelte: Módulo de finanzas.

🧾 Billing.svelte: Módulo de facturación.

🔹 lib/ - Lógica de negocio y utilidades

stores/ (Estado global en Svelte)

auth.js: Gestión del estado de autenticación.

theme.js: Gestión del tema claro/oscuro.

config/ (Configuraciones del sistema)

modules.js: Definición de los módulos disponibles.

services/ (Servicios para manejar datos)

dataService.js: Funciones para obtener datos de los diferentes módulos.
