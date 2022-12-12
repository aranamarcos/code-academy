export interface Usuario{
  id: number;
  nombre: string;
  apellido: string;
  email: string;
  usuario: string;
  contrasena: string;
  admin: boolean;
  // canLoad: boolean;
  // canActivateChild: boolean;
}

export interface UsuarioState{
  cargando: boolean;
  usuarios: Usuario[];
}
