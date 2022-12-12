import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { selectSesionActiva } from 'src/app/core/state/sesion.selectors';
import { cargarInscripciones, eliminarInscripcion } from 'src/app/inscripciones/state/inscripciones.actions';
import { selectInscripciones, selectInscripcionesCargando } from 'src/app/inscripciones/state/inscripciones.selectors';
import { Alumno } from 'src/app/models/alumno';
import { Inscripcion, InscripcionState } from 'src/app/models/inscripcion';
import { Sesion } from 'src/app/models/sesion';

@Component({
  selector: 'app-detalle-alumnos',
  templateUrl: './detalle-alumnos.component.html',
  styleUrls: ['./detalle-alumnos.component.css']
})
export class DetalleAlumnosComponent implements OnInit {
  columnas: string[] = ['usuario', 'nombre', 'comision', 'profesor', 'creado', 'acciones'];
  dataSource!: MatTableDataSource<Inscripcion>;
  sesion$!: Observable<Sesion>
  inscripciones$!: Observable<Inscripcion[]>
  cargando$!: Observable<boolean>
  suscripcionInscripciones!: Subscription;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    public dialogRef: MatDialogRef<DetalleAlumnosComponent>,
    @Inject(MAT_DIALOG_DATA) public alumno: Alumno,
    private storeInscripciones: Store<InscripcionState>,
    private storeSesion: Store<Sesion>,
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
      inscripciones = inscripciones.filter(inscripcion => inscripcion.alumno.usuario === this.alumno.usuario)
      this.dataSource = new MatTableDataSource<Inscripcion>(inscripciones);
      this.dataSource.paginator = this.paginator;
    });
  }

  ngOnDestroy(): void {
    this.suscripcionInscripciones.unsubscribe;
  }

  // ********* Eliminar *********
  eliminar(inscripcion: Inscripcion){
    this.storeInscripciones.dispatch(eliminarInscripcion({inscripcion}));
  }

  cancelar(){
    this.dialogRef.close()
  }

}
