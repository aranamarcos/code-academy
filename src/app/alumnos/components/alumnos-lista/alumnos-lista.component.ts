import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Alumno } from 'src/app/models/alumno';
import { AlumnosService } from '../../services/alumnos.service';
import { Subscription, Observable } from 'rxjs';
import { Router } from '@angular/router';


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
  alumnosLength$!: Observable<number>;


  constructor(
    private alumnosService: AlumnosService,
    private router: Router
    ) { }

  ngOnInit(): void {

    this.alumnos$ = this.alumnosService.obtenerAlumnos();

    this.suscripcion = this.alumnos$.subscribe({
      next: (refAlumnos) => {
        this.dataSource = new MatTableDataSource(refAlumnos)
      },
    })

    this.alumnosLength$ = this.alumnosService.obtenerAlumnosLength();
  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }

  eliminarAlumno(i: number){
    this.alumnosService.eliminarAlumno(i);
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
