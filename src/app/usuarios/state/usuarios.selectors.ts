import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UsuarioState } from '../../models/usuario';
import * as fromUsuarios from './usuarios.reducer';

export const selectUsuariosState = createFeatureSelector<UsuarioState>(
  fromUsuarios.usuariosFeatureKey
);

export const selectUsuariosCargando = createSelector(
  selectUsuariosState,
  (state: UsuarioState) => state.cargando
)

export const selectUsuarios = createSelector(
  selectUsuariosState,
  (state: UsuarioState) => state.usuarios
)
