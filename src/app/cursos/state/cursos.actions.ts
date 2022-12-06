import { createAction, props } from '@ngrx/store';
import { Curso } from 'src/app/models/curso';

export const loadCursos = createAction(
  '[Cursos] Load Cursos'
);

export const loadCursosSuccess = createAction(
  '[Cursos] Load Cursos Succes',
  props<{ cursos: Curso[] }>()
);

export const loadCursosFailure = createAction(
  '[Cursos] Load Cursos Failure',
  props<{ error: any }>()
);
