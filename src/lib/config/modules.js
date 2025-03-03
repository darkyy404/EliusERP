// Definición de los módulos disponibles en la aplicación.
// Cada módulo contiene:
// - `id`: Identificador único del módulo.
// - `title`: Nombre del módulo que se mostrará en la interfaz.
// - `icon`: Nombre del icono asociado (debe coincidir con las claves en el objeto `icons`).
// - `description`: Breve descripción del módulo.
// - `route`: Ruta a la que se redirige al hacer clic en el módulo.
// - `allowedRoles`: Lista de roles que tienen acceso a este módulo.

export const modules = [
  {
    id: 'ventas',
    title: 'Ventas',
    icon: 'Wallet',
    description: 'Gestión de ventas y clientes',
    route: '/ventas',
    allowedRoles: ['admin', 'standard']
  },
  {
    id: 'inventario',
    title: 'Inventario',
    icon: 'Box',
    description: 'Control de inventario y almacén',
    route: '/inventario',
    allowedRoles: ['admin', 'standard']
  },
  {
    id: 'rrhh',
    title: 'Recursos Humanos',
    icon: 'Users',
    description: 'Gestión de personal y nómina',
    route: '/rrhh',
    allowedRoles: ['admin']
  },
  {
    id: 'finanzas',
    title: 'Finanzas',
    icon: 'BarChart3',
    description: 'Contabilidad y finanzas',
    route: '/finanzas',
    allowedRoles: ['admin']
  },
  {
    id: 'facturacion',
    title: 'Facturación',
    icon: 'FileText',
    description: 'Gestión de facturas y pagos',
    route: '/facturacion',
    allowedRoles: ['admin', 'standard']
  }
];