import { Module } from '../types';
import {
  BarChart3,
  Box,
  FileText,
  Users,
  Wallet,
  Settings,
  Building2,
  Truck,
  Calendar,
} from 'lucide-react';

export const modules: Module[] = [
  {
    id: 'sales',
    title: 'Ventas',
    icon: 'Wallet',
    description: 'Gestión de ventas y clientes',
    route: '/sales',
    allowedRoles: ['admin', 'standard'],
  },
  {
    id: 'inventory',
    title: 'Inventario',
    icon: 'Box',
    description: 'Control de inventario y almacén',
    route: '/inventory',
    allowedRoles: ['admin', 'standard'],
  },
  {
    id: 'hr',
    title: 'Recursos Humanos',
    icon: 'Users',
    description: 'Gestión de personal y nómina',
    route: '/hr',
    allowedRoles: ['admin'],
  },
  {
    id: 'finance',
    title: 'Finanzas',
    icon: 'BarChart3',
    description: 'Contabilidad y finanzas',
    route: '/finance',
    allowedRoles: ['admin'],
  },
  {
    id: 'billing',
    title: 'Facturación',
    icon: 'FileText',
    description: 'Gestión de facturas y pagos',
    route: '/billing',
    allowedRoles: ['admin', 'standard'],
  },
  {
    id: 'logistics',
    title: 'Logística',
    icon: 'Truck',
    description: 'Gestión de envíos y rutas',
    route: '/logistics',
    allowedRoles: ['admin', 'standard'],
  },
  {
    id: 'projects',
    title: 'Proyectos',
    icon: 'Building2',
    description: 'Gestión de proyectos y tareas',
    route: '/projects',
    allowedRoles: ['admin', 'standard'],
  },
  {
    id: 'calendar',
    title: 'Calendario',
    icon: 'Calendar',
    description: 'Agenda y eventos',
    route: '/calendar',
    allowedRoles: ['admin', 'standard', 'guest'],
  },
  {
    id: 'settings',
    title: 'Configuración',
    icon: 'Settings',
    description: 'Configuración del sistema',
    route: '/settings',
    allowedRoles: ['admin'],
  },
];

export const getIconComponent = (iconName: string) => {
  const icons = {
    Wallet,
    Box,
    Users,
    BarChart3,
    FileText,
    Truck,
    Building2,
    Calendar,
    Settings,
  };
  return icons[iconName as keyof typeof icons];
};