import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AlumnoState } from 'src/app/models/alumno';
import * as fromAlumnos from './alumnos.reducer';

export const selectAlumnosState = createFeatureSelector<AlumnoState>(
  fromAlumnos.alumnosFeatureKey
);

export const selectAlumnosCargando = createSelector(
  selectAlumnosState,
  (state: AlumnoState) => state.cargando
)

export const selectAlumnos = createSelector(
  selectAlumnosState,
  (state: AlumnoState) => state.alumnos
)
