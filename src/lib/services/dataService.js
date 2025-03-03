// Importación de datos desde archivos JSON simulados.
// Estos archivos contienen información sobre usuarios, ventas, inventario, recursos humanos, finanzas y facturación.
import usersData from '../data/users.json';
import salesData from '../data/sales.json';
import inventoryData from '../data/inventory.json';
import hrData from '../data/hr.json';
import financeData from '../data/finance.json';
import billingData from '../data/billing.json';

/* ==========================
   AUTENTICACIÓN DE USUARIOS
   ========================== */

// Función para autenticar a un usuario basándose en email y contraseña.
// Devuelve el usuario si las credenciales coinciden o `null` si son incorrectas.
export const authenticateUser = (email, password) => {
  const user = usersData.users.find(
    (u) => u.email === email && u.password === password
  );
  return user ? { ...user, password: undefined } : null; // Se omite la contraseña por seguridad.
};

/* ==========================
   GESTIÓN DE VENTAS
   ========================== */

// Obtiene estadísticas generales de ventas.
export const getSalesStats = () => {
  return salesData.stats;
};

// Obtiene la lista de ventas recientes.
export const getRecentSales = () => {
  return salesData.sales;
};

// Obtiene los productos más vendidos.
export const getTopProducts = () => {
  return salesData.topProducts;
};

/* ==========================
   GESTIÓN DE INVENTARIO
   ========================== */

// Obtiene estadísticas del inventario.
export const getInventoryStats = () => {
  return inventoryData.stats;
};

// Obtiene la lista de productos en inventario.
export const getProducts = () => {
  return inventoryData.products;
};

// Obtiene alertas sobre inventario bajo o productos agotados.
export const getInventoryAlerts = () => {
  return inventoryData.alerts;
};

/* ==========================
   RECURSOS HUMANOS (RRHH)
   ========================== */

// Obtiene estadísticas generales del departamento de RRHH.
export const getHRStats = () => {
  return hrData.stats;
};

// Obtiene la lista de empleados registrados.
export const getEmployees = () => {
  return hrData.employees;
};

// Obtiene eventos o actividades relacionadas con RRHH.
export const getHREvents = () => {
  return hrData.events;
};

/* ==========================
   GESTIÓN FINANCIERA
   ========================== */

// Obtiene estadísticas financieras generales.
export const getFinanceStats = () => {
  return financeData.stats;
};

// Obtiene la lista de transacciones financieras.
export const getTransactions = () => {
  return financeData.transactions;
};

// Obtiene un resumen financiero con balances e ingresos/gastos.
export const getFinancialSummary = () => {
  return financeData.summary;
};

/* ==========================
   GESTIÓN DE FACTURACIÓN
   ========================== */

// Obtiene estadísticas sobre facturación.
export const getBillingStats = () => {
  return billingData.stats;
};

// Obtiene la lista de facturas emitidas.
export const getInvoices = () => {
  return billingData.invoices;
};

// Obtiene un resumen de pagos realizados y pendientes.
export const getPaymentsSummary = () => {
  return billingData.payments;
};
