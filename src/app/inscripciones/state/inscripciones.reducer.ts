import { createReducer, on } from '@ngrx/store';
import { InscripcionState } from 'src/app/models/inscripcion';
import * as InscripcionesActions from './inscripciones.actions';

export const inscripcionesFeatureKey = 'inscripciones';

export const estadoInicial: InscripcionState = {
  cargando: false,
  inscripciones: []
};

export const reducer = createReducer(
  estadoInicial,
  on(InscripcionesActions.cargarInscripciones, (state) => {
    return {...state, cargando: true }
  }),
  on(InscripcionesActions.inscripcionesCargadas, (state, {inscripciones}) => {
    return {...state, cargando: false, inscripciones:inscripciones}
  }),
  on(InscripcionesActions.agregarInscripcion, (state, {inscripcion}) => {
    return state
  }),
  on(InscripcionesActions.editarInscripcion, (state, {inscripcion}) => {
    return state
  }),
  on(InscripcionesActions.eliminarInscripcion, (state, {inscripcion}) => {
    return state
  })
);
