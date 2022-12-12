import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { selectSesionActiva } from 'src/app/core/state/sesion.selectors';
import { selectInscripciones, selectInscripcionesCargando } from 'src/app/inscripciones/state/inscripciones.selectors';
import { Curso, CursoState } from 'src/app/models/curso';
import { Inscripcion, InscripcionState } from 'src/app/models/inscripcion';
import { Sesion } from 'src/app/models/sesion';
import { cargarInscripciones, eliminarInscripcion } from '../../../inscripciones/state/inscripciones.actions';


@Component({
  selector: 'app-detalle-cursos',
  templateUrl: './detalle-cursos.component.html',
  styleUrls: ['./detalle-cursos.component.css']
})
export class DetalleCursosComponent implements OnInit {

  columnas: string[] = ['nombre', 'apellido', 'curso', 'comision', 'creado','acciones'];
  dataSource!: MatTableDataSource<Inscripcion>;
  sesion$!: Observable<Sesion>
  inscripciones$!: Observable<Inscripcion[]>
  cargando$!: Observable<boolean>
  suscripcionInscripciones!: Subscription;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    public dialogRef: MatDialogRef<DetalleCursosComponent>,
    @Inject(MAT_DIALOG_DATA) public curso: Curso,
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
      inscripciones = inscripciones.filter(inscripcion => inscripcion.curso.comision === this.curso.comision)
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

