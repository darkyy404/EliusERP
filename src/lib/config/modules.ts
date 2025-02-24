import type { User } from '../stores/auth';

export interface Module {
  id: string;
  title: string;
  icon: string;
  description: string;
  route: string;
  allowedRoles: Array<User['role']>;
}

export const modules: Module[] = [
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