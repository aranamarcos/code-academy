import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Alumno } from 'src/app/models/alumno';
import { AlumnosService } from '../../services/alumnos.service';
import { Subscription, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Sesion } from 'src/app/models/sesion';
import { SesionService } from '../../../core/services/sesion.service';


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


  constructor(
    private alumnosService: AlumnosService,
    private router: Router,
    private sesionService: SesionService,
    ) { }

  ngOnInit(): void {
    this.getAlumnos();
    this.suscripcion = this.alumnosService.refresh$.subscribe(resp => {
      this.getAlumnos();
    })
    this.sesion$ = this.sesionService.obtenerSesion();
    this.alumnos$ = this.alumnosService.obtenerAlumnos();
  }


  // ********* Filtrar *********
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // ********* Mostrar tabla *********
  listaAlumnos$: any;

  getAlumnos() {
    this.alumnosService.obtenerAlumnos().subscribe(resp => {
      this.listaAlumnos$ = resp,
      this.dataSource = new MatTableDataSource(this.listaAlumnos$);
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
