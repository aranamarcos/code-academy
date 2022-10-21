import { Component, OnInit } from '@angular/core';
// import { Alumno } from 'src/app/models/alumno';

@Component({
  selector: 'app-base-alumnos',
  templateUrl: './base-alumnos.component.html',
  styleUrls: ['./base-alumnos.component.css']
})
export class BaseAlumnosComponent implements OnInit {

  // alumnosAdmin: Alumno[] = [
  //   {nombre: 'Jose', apellido: 'Perez', email: 'jperez@gmail.com', usuario: 'jperez', password: '123Abc'},
  //   {nombre: 'Maria', apellido: 'Lopez', email: 'mlopez@gmail.com', usuario: 'mlopez', password: '123Abc'},
  //   {nombre: 'Pedro', apellido: 'Gonzalez', email: 'pgonzalez@gmail.com', usuario: 'pgonzalez', password: '123Abc'},
  //   {nombre: 'Carlos', apellido: 'Ramirez', email: 'cramirez@gmail.com', usuario: 'cramirez', password: '123Abc'},
  //   {nombre: 'Lucia', apellido: 'Gonzalez', email: 'lgonzalez@gmail.com', usuario: 'lgonzalez', password: '123Abc'}
  // ];

  constructor() { }

  ngOnInit(): void {
  }

  // agregarAlumno($event: any): void {
  //   this.alumnosAdmin.push($event);
  // }

  // eliminarAlumno($event: any): void {
  //   this.alumnosAdmin.splice($event, 1);
  // }
}
