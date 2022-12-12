import { createFeatureSelector, createSelector } from '@ngrx/store';
import { InscripcionState } from 'src/app/models/inscripcion';
import * as fromInscripciones from './inscripciones.reducer';

export const selectInscripcionesState = createFeatureSelector<InscripcionState>(
  fromInscripciones.inscripcionesFeatureKey
);

export const selectInscripcionesCargando = createSelector(
  selectInscripcionesState,
  (state: InscripcionState) => state.cargando
)

export const selectInscripciones = createSelector(
  selectInscripcionesState,
  (state: InscripcionState) => state.inscripciones
)
