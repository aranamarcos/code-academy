import { createAction, props } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario';


export const cargarUsuarios = createAction(
  '[Usuarios] Cargar Usuarios'
);

export const usuariosCargados = createAction(
  '[Usuarios] Usuarios Cargados',
  props<{ usuarios: Usuario[] }>()
);

export const agregarUsuario = createAction(
  '[Usuarios] Agregar Usuario',
  props<{ usuario: Usuario }>()
);

export const editarUsuario = createAction(
  '[Usuarios] Editar Usuario',
  props<{ usuario: Usuario }>()
);

export const eliminarUsuario = createAction(
  '[Usuarios] Eliminar Usuario',
  props<{ usuario: Usuario }>()
);




