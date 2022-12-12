import { createReducer, on } from '@ngrx/store';
import { UsuarioState } from 'src/app/models/usuario';
import * as UsuariosActions from './usuarios.actions';

export const usuariosFeatureKey = 'usuarios';

export const estadoInicial: UsuarioState = {
  cargando: false,
  usuarios: []
};

export const reducer = createReducer(
  estadoInicial,
  on(UsuariosActions.cargarUsuarios, (state) => {
    return {...state, cargando: true }
  }),
  on(UsuariosActions.usuariosCargados, (state, {usuarios}) => {
    return {...state, cargando: false, usuarios:usuarios}
  }),
  on(UsuariosActions.agregarUsuario, (state, {usuario}) => {
    return state
  }),
  on(UsuariosActions.editarUsuario, (state, {usuario}) => {
    return state
  }),
  on(UsuariosActions.eliminarUsuario, (state, {usuario}) => {
    return state
  })
);
