import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Curso } from 'src/app/models/curso';
import { CursoState } from 'src/app/models/curso.state';
import { CursosService } from '../../services/cursos.service';
import { loadCursosSuccess, loadCursosFailure } from '../../state/cursos.actions';
import { Subscription, Observable } from 'rxjs';
import { selectStateCursos, selectStateCursosCargando } from '../../state/cursos.selectors';
import { CursosEditarComponent } from '../cursos-editar/cursos-editar.component';
import { Inscripcion } from 'src/app/models/inscripcion';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.css']
})

export class CursosListaComponent implements OnInit, OnDestroy {

  columnas: string[] = ['curso', 'profesor', 'comision', 'fechaInicio', 'fechaFin', 'inscripcionAbierta','acciones'];
  dataSource: MatTableDataSource<Curso> = new MatTableDataSource<Curso>([]);
  cursos!: Curso[];
  suscripcionCursos!: Subscription;

  cursos$!: Observable<Curso[]>
  cargando$!: Observable<boolean>

  constructor(
    private cursosService: CursosService,
    private store: Store<CursoState>,
    private dialog: MatDialog
  ) {
    this.cursos$ = this.store.select(selectStateCursos);
    this.cargando$ = this.store.select(selectStateCursosCargando);
    this.getAlumnos();
  }


  ngOnInit(): void {
    this.suscripcionCursos = this.cursosService.obtenerCursos().subscribe({
      next: (cursos: Curso[]) => {
        this.store.dispatch(loadCursosSuccess({cursos}));
      },
      error: (error:any) => {
        this.store.dispatch(loadCursosFailure(error));
      }
    });
  }

  // ********* Mostrar tabla *********
  listaAlumnos: any;

  getAlumnos() {
    this.cursosService.obtenerCursos().subscribe(resp => {
      this.listaAlumnos = resp,
      this.dataSource = new MatTableDataSource(this.listaAlumnos);
    })
  }

  ngOnDestroy(): void {
    this.suscripcionCursos.unsubscribe;
  }

  editar(curso: Curso){
    this.dialog.open(CursosEditarComponent, {
      width: '300px',
      data: curso
    })
  }

}
