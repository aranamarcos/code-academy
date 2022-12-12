import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Alumno, AlumnoState } from 'src/app/models/alumno';
import { Subscription, Observable } from 'rxjs';
import { Sesion } from 'src/app/models/sesion';
import { Store } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';
import { cargarAlumnos, eliminarAlumno } from '../../state/alumnos.actions';
import { selectAlumnos, selectAlumnosCargando } from '../../state/alumnos.selectors';
import { selectSesionActiva } from 'src/app/core/state/sesion.selectors';
import { EditarAlumnosComponent } from '../editar-alumnos/editar-alumnos.component';
import { DetalleAlumnosComponent } from '../detalle-alumnos/detalle-alumnos.component';


@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css'],
})

export class ListaAlumnosComponent implements OnInit, OnDestroy{

  columnas: string[] = ['nombre', 'apellido', 'email', 'usuario', 'acciones'];
  dataSource!: MatTableDataSource<Alumno>;
  sesion$!: Observable<Sesion>
  alumnos$!: Observable<Alumno[]>
  cargando$!: Observable<boolean>
  suscripcionAlumnos!: Subscription;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private storeAlumnos: Store<AlumnoState>,
    private storeSesion: Store<Sesion>,
    private dialog: MatDialog
  ) {
    this.storeAlumnos.dispatch(cargarAlumnos());
  }

  ngOnInit(): void {
    // Estado de la carga de datos (cargando) para el spinner de espera
    this.cargando$ = this.storeAlumnos.select(selectAlumnosCargando);

    // Dato de sesion para saber si el usuario es admin
    this.sesion$ = this.storeSesion.select(selectSesionActiva);

    // Datos para la tabla de alumnos
    this.suscripcionAlumnos = this.storeAlumnos.select(selectAlumnos).subscribe((alumnos: Alumno[]) => {
      this.dataSource = new MatTableDataSource<Alumno>(alumnos);
      this.dataSource.paginator = this.paginator;
    });
  }

  ngOnDestroy(): void {
    this.suscripcionAlumnos.unsubscribe;
  }

  // ********* Filtrar *********
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // ********* Detalle *********
  detalle(alumno: Alumno){
    this.dialog.open(DetalleAlumnosComponent, {
      minWidth: '400px',
      data: alumno
    })
  }

  // ********* Editar *********
  editar(alumno: Alumno){
    this.dialog.open(EditarAlumnosComponent, {
      minWidth: '400px',
      data: alumno
    })
  }

  // ********* Eliminar *********
  eliminar(alumno: Alumno){
    this.storeAlumnos.dispatch(eliminarAlumno({alumno}));
  }

}
