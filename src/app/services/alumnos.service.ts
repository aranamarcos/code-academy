import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { Alumno } from 'src/app/models/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  alumnosAdmin: Alumno[] = [
    {nombre: 'Jose', apellido: 'Perez', email: 'jperez@gmail.com', usuario: 'jperez', password: '123Abc'},
    {nombre: 'Maria', apellido: 'Lopez', email: 'mlopez@gmail.com', usuario: 'mlopez', password: '123Abc'},
    {nombre: 'Pedro', apellido: 'Gonzalez', email: 'pgonzalez@gmail.com', usuario: 'pgonzalez', password: '123Abc'},
    {nombre: 'Carlos', apellido: 'Ramirez', email: 'cramirez@gmail.com', usuario: 'cramirez', password: '123Abc'},
    {nombre: 'Lucia', apellido: 'Gonzalez', email: 'lgonzalez@gmail.com', usuario: 'lgonzalez', password: '123Abc'}
  ];

  alumnos$ = new BehaviorSubject<Alumno[]>(this.alumnosAdmin)

  constructor() {  }

  agregarAlumno($event: any): void {
    this.alumnosAdmin.push($event);
    this.alumnos$.next(this.alumnosAdmin);
  }

  eliminarAlumno($event: any): void {
    this.alumnosAdmin.splice($event);
    this.alumnos$.next(this.alumnosAdmin);
  }

  obtenerAlumnos(): any {
    return this.alumnos$;
  }
}
