import { Component, OnDestroy, OnInit } from '@angular/core';
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
  prueba: any[] = [];


  constructor(
    private alumnosService: AlumnosService,
    private router: Router,
    private sesionService: SesionService
    ) { }

  ngOnInit(): void {

    this.sesion$ = this.sesionService.obtenerSesion();

    this.alumnos$ = this.alumnosService.obtenerAlumnos();

    this.suscripcion = this.alumnos$.subscribe({
      next: (refAlumnos) => {
        this.dataSource = new MatTableDataSource(refAlumnos),
        console.log(refAlumnos)
      },
    })
  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }

  eliminarAlumno(id: number){
    this.alumnosService.eliminarAlumno(id);
    this.alumnos$ = this.alumnosService.obtenerAlumnos();
    this.alumnos$.subscribe({
      next: (refAlumnos) => {
        this.dataSource = new MatTableDataSource(refAlumnos)
      },
    })
  }

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
};
