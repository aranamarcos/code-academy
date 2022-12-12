import { Alumno } from "./alumno";
import { Curso } from "./curso";
import { Usuario } from "./usuario";

export interface Inscripcion{
    id: number;
    alumno: Alumno;
    curso: Curso;
    usuario: Usuario;
}

export interface InscripcionState {
    cargando: boolean;
    inscripciones: Inscripcion[];
  }
