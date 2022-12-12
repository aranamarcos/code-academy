import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioState } from 'src/app/models/usuario';
import { Subscription, Observable } from 'rxjs';
import { selectUsuarios, selectUsuariosCargando } from '../../state/usuarios.selectors';
import { EditarUsuariosComponent } from '../editar-usuarios/editar-usuarios.component';
import { MatDialog } from '@angular/material/dialog';
import { cargarUsuarios, eliminarUsuario } from '../../state/usuarios.actions';
import { Sesion } from 'src/app/models/sesion';
import { selectSesionActiva } from 'src/app/core/state/sesion.selectors';
import { MatPaginator } from '@angular/material/paginator';
import { AgregarUsuariosComponent } from '../agregar-usuarios/agregar-usuarios.component';
import { DetalleUsuariosComponent } from '../detalle-usuarios/detalle-usuarios.component';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})

export class ListaUsuariosComponent implements OnInit, OnDestroy {

  columnas: string[] = ['nombre', 'apellido', 'usuario', 'admin','acciones'];
  dataSource!: MatTableDataSource<Usuario>;
  sesion$!: Observable<Sesion>
  usuarios$!: Observable<Usuario[]>
  cargando$!: Observable<boolean>
  suscripcionUsuarios!: Subscription;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private storeUsuarios: Store<UsuarioState>,
    private storeSesion: Store<Sesion>,
    private dialog: MatDialog
  ) {
    this.storeUsuarios.dispatch(cargarUsuarios());
  }

  ngOnInit(): void {
    // Estado de la carga de datos (cargando) para el spinner de espera
    this.cargando$ = this.storeUsuarios.select(selectUsuariosCargando);

    // Dato de sesion para saber si el usuario es admin
    this.sesion$ = this.storeSesion.select(selectSesionActiva);

    // Datos para la tabla de usuarios
    this.suscripcionUsuarios = this.storeUsuarios.select(selectUsuarios).subscribe((usuarios: Usuario[]) => {
      this.dataSource = new MatTableDataSource<Usuario>(usuarios);
      this.dataSource.paginator = this.paginator;
    });
  }

  ngOnDestroy(): void {
    this.suscripcionUsuarios.unsubscribe;
  }

  // ********* Filtrar *********
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // ********* Crear *********
  crear(){
    this.dialog.open(AgregarUsuariosComponent, {
      minWidth: '400px'
    })
  }

   // ********* Detalle *********
   detalle(usuario: Usuario){
    this.dialog.open(DetalleUsuariosComponent, {
      minWidth: '400px',
      data: usuario
    })
  }

  // ********* Editar *********
  editar(usuario: Usuario){
    this.dialog.open(EditarUsuariosComponent, {
      minWidth: '400px',
      data: usuario
    })
  }

  // ********* Eliminar *********
  eliminar(usuario: Usuario){
    this.storeUsuarios.dispatch(eliminarUsuario({usuario}));
  }

}
