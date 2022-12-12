import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map } from 'rxjs/operators';
import { UsuariosService } from '../services/usuarios.service';
import { Usuario } from 'src/app/models/usuario';
import * as UsuariosActions from './usuarios.actions';

@Injectable()
export class UsuariosEffects {
  cargarUsuarios$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UsuariosActions.cargarUsuarios),
      concatMap(() => this.usuarios.obtenerUsuarios().pipe(
        map((i: Usuario[]) => UsuariosActions.usuariosCargados({usuarios: i}))
      ))
    );
  });

  agregarUsuarios$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UsuariosActions.agregarUsuario),
      concatMap(({ usuario }) => this.usuarios.agregarUsuario(usuario).pipe(
        map((i: Usuario) => UsuariosActions.cargarUsuarios())
      ))
    );
  });

  eliminarUsuario$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UsuariosActions.eliminarUsuario),
      concatMap(({ usuario }) => this.usuarios.eliminarUsuario(usuario).pipe(
        map((i: Usuario) => UsuariosActions.cargarUsuarios())
      ))
    );
  });

  editarUsuario$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UsuariosActions.editarUsuario),
      concatMap(({ usuario }) => this.usuarios.editarUsuario(usuario).pipe(
        map((i: Usuario) => UsuariosActions.cargarUsuarios())
      ))
    );
  });

  constructor(
    private actions$: Actions,
    private usuarios: UsuariosService
  ) {}
}
