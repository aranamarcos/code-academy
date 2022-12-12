import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CursoState } from '../../models/curso';
import * as fromCursos from './cursos.reducer';

export const selectCursosState = createFeatureSelector<CursoState>(
  fromCursos.cursosFeatureKey
);

export const selectCursosCargando = createSelector(
  selectCursosState,
  (state: CursoState) => state.cargando
)

export const selectCursos = createSelector(
  selectCursosState,
  (state: CursoState) => state.cursos
)



