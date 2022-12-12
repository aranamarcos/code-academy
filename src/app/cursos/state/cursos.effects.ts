import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map } from 'rxjs/operators';
import { CursosService } from '../services/cursos.service';
import { Curso } from 'src/app/models/curso';
import * as CursosActions from './cursos.actions';

@Injectable()
export class CursosEffects {
  cargarCursos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CursosActions.cargarCursos),
      concatMap(() => this.cursos.obtenerCursos().pipe(
        map((i: Curso[]) => CursosActions.cursosCargados({cursos: i}))
      ))
    );
  });

  agregarCursos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CursosActions.agregarCurso),
      concatMap(({ curso }) => this.cursos.agregarCurso(curso).pipe(
        map((i: Curso) => CursosActions.cargarCursos())
      ))
    );
  });

  eliminarCurso$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CursosActions.eliminarCurso),
      concatMap(({ curso }) => this.cursos.eliminarCurso(curso).pipe(
        map((i: Curso) => CursosActions.cargarCursos())
      ))
    );
  });

  editarCurso$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CursosActions.editarCurso),
      concatMap(({ curso }) => this.cursos.editarCurso(curso).pipe(
        map((i: Curso) => CursosActions.cargarCursos())
      ))
    );
  });

  constructor(
    private actions$: Actions,
    private cursos: CursosService
  ) {}
}
