import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Alumno } from 'src/app/models/alumno';
import { AlumnosService } from '../../services/alumnos.service';
import { Subscription, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Sesion } from 'src/app/models/sesion';
import { Store } from '@ngrx/store';
import { selectSesionActiva } from 'src/app/core/state/sesion.selectors';


@Component({
  selector: 'app-alumnos-lista',
  templateUrl: './alumnos-lista.component.html',
  styleUrls: ['./alumnos-lista.component.css'],
})

export class AlumnosListaComponent implements OnInit, OnDestroy{

  columnas: string[] = ['nombre', 'apellido', 'email', 'usuario', 'acciones'];
  dataSource: MatTableDataSource<Alumno> = new MatTableDataSource<Alumno>([]);
  alumnos$!: Observable<Alumno[]>;
  suscripcion!: Subscription;
  sesion$!: Observable<Sesion>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(
    private alumnosService: AlumnosService,
    private router: Router,
    private store: Store<Sesion>
    ) { }

  ngOnInit(): void {
    this.getAlumnos();
    this.suscripcion = this.alumnosService.refresh$.subscribe(resp => {
      this.getAlumnos();
    })
    this.sesion$ = this.store.select(selectSesionActiva);
    this.alumnos$ = this.alumnosService.obtenerAlumnos();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  // ********* Filtrar *********
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // ********* Mostrar tabla *********
  listaAlumnos: any;

  getAlumnos() {
    this.alumnosService.obtenerAlumnos().subscribe(resp => {
      this.listaAlumnos = resp,
      this.dataSource = new MatTableDataSource(this.listaAlumnos);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  // ********* Eliminar alumno *********
  eliminarAlumno(id: number){
    this.alumnosService.eliminarAlumno(id);
  }

  // ********* Editar alumno *********
  editarAlumno(alumno: Alumno){
    this.router.navigate(['alumnos/editar', {
      id: alumno.id,
      nombre: alumno.nombre,
      apellido: alumno.apellido,
      email: alumno.email,
      usuario: alumno.usuario,
      password: alumno.password,
    }]);
  }

    // ********* Desuscribir OnDestroy *********
    ngOnDestroy(): void {
      this.suscripcion.unsubscribe();
    }
};
