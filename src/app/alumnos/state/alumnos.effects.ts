import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map } from 'rxjs/operators';
import * as AlumnosActions from './alumnos.actions';
import { Alumno } from 'src/app/models/alumno';
import { AlumnosService } from '../services/alumnos.service';

@Injectable()
export class AlumnosEffects {
  cargarAlumnos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AlumnosActions.cargarAlumnos),
      concatMap(() => this.alumnos.obtenerAlumnos().pipe(
        map((i: Alumno[]) => AlumnosActions.alumnosCargados({alumnos: i}))
      ))
    );
  });

  agregarAlumnos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AlumnosActions.agregarAlumno),
      concatMap(({ alumno }) => this.alumnos.agregarAlumno(alumno).pipe(
        map((i: Alumno) => AlumnosActions.cargarAlumnos())
      ))
    );
  });

  eliminarAlumno$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AlumnosActions.eliminarAlumno),
      concatMap(({ alumno }) => this.alumnos.eliminarAlumno(alumno).pipe(
        map((i: Alumno) => AlumnosActions.cargarAlumnos())
      ))
    );
  });

  editarAlumno$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AlumnosActions.editarAlumno),
      concatMap(({ alumno }) => this.alumnos.editarAlumno(alumno).pipe(
        map((i: Alumno) => AlumnosActions.cargarAlumnos())
      ))
    );
  });

  constructor(
    private actions$: Actions,
    private alumnos: AlumnosService
  ) {}
}
