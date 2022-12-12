export interface Alumno {
  id: number;
  nombre: string;
  apellido: string;
  email: string;
  usuario: string;
  contrasena: string;
  admin: boolean;
}

export interface AlumnoState{
  cargando: boolean;
  alumnos: Alumno[];
}
