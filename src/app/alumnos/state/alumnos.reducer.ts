import { createReducer, on } from '@ngrx/store';
import { AlumnoState } from 'src/app/models/alumno';
import * as AlumnosActions from './alumnos.actions';

export const alumnosFeatureKey = 'alumnos';

export const estadoInicial: AlumnoState = {
  cargando: false,
  alumnos: []
};

export const reducer = createReducer(
  estadoInicial,
  on(AlumnosActions.cargarAlumnos, (state) => {
    return {...state, cargando: true }
  }),
  on(AlumnosActions.alumnosCargados, (state, {alumnos}) => {
    return {...state, cargando: false, alumnos:alumnos}
  }),
  on(AlumnosActions.agregarAlumno, (state, {alumno}) => {
    return state
  }),
  on(AlumnosActions.editarAlumno, (state, {alumno}) => {
    return state
  }),
  on(AlumnosActions.eliminarAlumno, (state, {alumno}) => {
    return state
  })
);
