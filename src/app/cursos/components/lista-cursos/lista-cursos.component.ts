
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Curso } from 'src/app/models/curso';
import { CursoState } from 'src/app/models/curso';
import { Subscription, Observable } from 'rxjs';
import { selectCursos, selectCursosCargando } from '../../state/cursos.selectors';
import { EditarCursosComponent } from '../editar-cursos/editar-cursos.component';
import { MatDialog } from '@angular/material/dialog';
import { cargarCursos, eliminarCurso } from '../../state/cursos.actions';
import { Sesion } from 'src/app/models/sesion';
import { selectSesionActiva } from 'src/app/core/state/sesion.selectors';
import { MatPaginator } from '@angular/material/paginator';
import { AgregarCursosComponent } from '../agregar-cursos/agregar-cursos.component';
import { DetalleCursosComponent } from '../detalle-cursos/detalle-cursos.component';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})

export class ListaCursosComponent implements OnInit, OnDestroy {

  columnas: string[] = ['curso', 'profesor', 'comision', 'fechaInicio', 'fechaFin', 'inscripcionAbierta','acciones'];
  dataSource!: MatTableDataSource<Curso>;
  sesion$!: Observable<Sesion>
  cursos$!: Observable<Curso[]>
  cargando$!: Observable<boolean>
  suscripcionCursos!: Subscription;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private storeCursos: Store<CursoState>,
    private storeSesion: Store<Sesion>,
    private dialog: MatDialog
  ) {
    this.storeCursos.dispatch(cargarCursos());
  }

  ngOnInit(): void {
    // Estado de la carga de datos (cargando) para el spinner de espera
    this.cargando$ = this.storeCursos.select(selectCursosCargando);

    // Dato de sesion para saber si el usuario es admin
    this.sesion$ = this.storeSesion.select(selectSesionActiva);

    // Datos para la tabla de cursos
    this.suscripcionCursos = this.storeCursos.select(selectCursos).subscribe((cursos: Curso[]) => {
      this.dataSource = new MatTableDataSource<Curso>(cursos);
      this.dataSource.paginator = this.paginator;
    });
  }

  ngOnDestroy(): void {
    this.suscripcionCursos.unsubscribe;
  }

  // ********* Filtrar *********
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // ********* Crear *********
  crear(){
    this.dialog.open(AgregarCursosComponent, {
      minWidth: '400px'
    })
  }

  // ********* Detalle *********
  detalle(curso: Curso){
    this.dialog.open(DetalleCursosComponent, {
      minWidth: '400px',
      data: curso
    })
  }

  // ********* Editar *********
  editar(curso: Curso){
    this.dialog.open(EditarCursosComponent, {
      minWidth: '400px',
      data: curso
    })
  }

  // ********* Eliminar *********
  eliminar(curso: Curso){
    this.storeCursos.dispatch(eliminarCurso({curso}));
  }

}
