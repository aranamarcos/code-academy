import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map } from 'rxjs/operators';
import { InscripcionService } from '../services/inscripciones.service';
import { Inscripcion } from 'src/app/models/inscripcion';
import * as InscripcionesActions from './inscripciones.actions';

@Injectable()
export class InscripcionesEffects {
  cargarInscripciones$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(InscripcionesActions.cargarInscripciones),
      concatMap(() => this.inscripciones.obtenerInscripciones().pipe(
        map((i: Inscripcion[]) => InscripcionesActions.inscripcionesCargadas({inscripciones: i}))
      ))
    );
  });

  agregarInscripciones$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(InscripcionesActions.agregarInscripcion),
      concatMap(({ inscripcion }) => this.inscripciones.agregarInscripcion(inscripcion).pipe(
        map((i: Inscripcion) => InscripcionesActions.cargarInscripciones())
      ))
    );
  });

  eliminarInscripcion$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(InscripcionesActions.eliminarInscripcion),
      concatMap(({ inscripcion }) => this.inscripciones.eliminarInscripcion(inscripcion).pipe(
        map((i: Inscripcion) => InscripcionesActions.cargarInscripciones())
      ))
    );
  });

  editarInscripcion$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(InscripcionesActions.editarInscripcion),
      concatMap(({ inscripcion }) => this.inscripciones.editarInscripcion(inscripcion).pipe(
        map((i: Inscripcion) => InscripcionesActions.cargarInscripciones())
      ))
    );
  });

  constructor(
    private actions$: Actions,
    private inscripciones: InscripcionService
  ) {}
}
