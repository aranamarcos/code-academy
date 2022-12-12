export interface Curso {
  id: number;
  nombre: string;
  comision: number;
  profesor: string;
  fechaInicio: Date;
  fechaFin: Date;
  inscripcionAbierta: boolean;
}

export interface CursoState{
  cargando: boolean;
  cursos: Curso[];
}
