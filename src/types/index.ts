export type UserRole = 'admin' | 'standard' | 'guest';

export interface User {
  id: string;
  email: string;
  role: UserRole;
}

export interface Module {
  id: string;
  title: string;
  icon: string;
  description: string;
  route: string;
  allowedRoles: UserRole[];
}

export interface Theme {
  primary: string;
  secondary: string;
  background: string;
  text: string;
}