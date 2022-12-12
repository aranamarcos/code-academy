import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { selectSesionActiva } from 'src/app/core/state/sesion.selectors';
import { cargarInscripciones, eliminarInscripcion } from '../../state/inscripciones.actions';
import { selectInscripciones, selectInscripcionesCargando } from '../../state/inscripciones.selectors';
import { Sesion } from 'src/app/models/sesion';
import { EditarInscripcionesComponent } from '../editar-inscripciones/editar-inscripciones.component';
import { Inscripcion, InscripcionState } from 'src/app/models/inscripcion';
import { MatPaginator } from '@angular/material/paginator';
import { AgregarInscripcionesComponent } from '../agregar-inscripciones/agregar-inscripciones.component';
import { Curso, CursoState } from '../../../models/curso';
import { DetalleInscripcionesComponent } from '../detalle-inscripciones/detalle-inscripciones.component';


@Component({
  selector: 'app-lista-incripciones',
  templateUrl: './lista-inscripciones.component.html',
  styleUrls: ['./lista-inscripciones.component.css']
})
export class ListaInscripcionesComponent implements OnInit, OnDestroy {

  columnas: string[] = ['nombre', 'apellido', 'curso', 'comision', 'usuario','acciones'];
  dataSource!: MatTableDataSource<Inscripcion>;
  sesion$!: Observable<Sesion>
  inscripciones$!: Observable<Inscripcion[]>
  cargando$!: Observable<boolean>
  suscripcionInscripciones!: Subscription;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private storeInscripciones: Store<InscripcionState>,
    private storeSesion: Store<Sesion>,
    private dialog: MatDialog
  ) {
    this.storeInscripciones.dispatch(cargarInscripciones());
  }

  ngOnInit(): void {
    // Estado de la carga de datos (cargando) para el spinner de espera
    this.cargando$ = this.storeInscripciones.select(selectInscripcionesCargando);

    // Dato de sesion para saber si el usuario es admin
    this.sesion$ = this.storeSesion.select(selectSesionActiva);

    // Datos para la tabla de inscripciones
    this.suscripcionInscripciones = this.storeInscripciones.select(selectInscripciones).subscribe((inscripciones: Inscripcion[]) => {
      this.dataSource = new MatTableDataSource<Inscripcion>(inscripciones);
      this.dataSource.paginator = this.paginator;
    });
  }

  ngOnDestroy(): void {
    this.suscripcionInscripciones.unsubscribe;
  }

  // ********* Filtrar *********
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // ********* Crear *********
  crear(){
    this.dialog.open(AgregarInscripcionesComponent, {
      minWidth: '400px'
    })
  }

  // ********* Detalle *********
  detalle(inscripcion: Inscripcion){
    this.dialog.open(DetalleInscripcionesComponent, {
      minWidth: '400px',
      data: inscripcion
    })
  }

  // ********* Editar *********
  editar(inscripcion: Inscripcion){
    this.dialog.open(EditarInscripcionesComponent, {
      minWidth: '400px',
      data: inscripcion
    })
  }

  // ********* Eliminar *********
  eliminar(inscripcion: Inscripcion){
    this.storeInscripciones.dispatch(eliminarInscripcion({inscripcion}));
  }

}
