import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable} from 'rxjs';
import { Alumno } from 'src/app/models/alumno';



@Injectable()
export class AlumnosService {

  private alumnos: Alumno[] = [
    {id: 1001 , nombre: 'Jose', apellido: 'Perez', email: 'jperez@gmail.com', usuario: 'jperez', password: '123Abc'},
    {id: 1002 , nombre: 'Maria', apellido: 'Lopez', email: 'mlopez@gmail.com', usuario: 'mlopez', password: '123Abc'},
    {id: 1003 , nombre: 'Pedro', apellido: 'Gonzalez', email: 'pgonzalez@gmail.com', usuario: 'pgonzalez', password: '123Abc'},
    {id: 1004 , nombre: 'Carlos', apellido: 'Ramirez', email: 'cramirez@gmail.com', usuario: 'cramirez', password: '123Abc'},
    {id: 1005 , nombre: 'Lucia', apellido: 'Gonzalez', email: 'lgonzalez@gmail.com', usuario: 'lgonzalez', password: '123Abc'}
  ];
  private alumnosSubject: BehaviorSubject<Alumno[]>;
  private alumnosLengthSubject: BehaviorSubject<number>;


  constructor() {
    this.alumnosSubject = new BehaviorSubject<Alumno[]>(this.alumnos);
    this.alumnosLengthSubject = new BehaviorSubject<number>(this.alumnos.length)
   }


  obtenerAlumnos(): Observable<Alumno[]> {
    return this.alumnosSubject.asObservable();
  }

  obtenerAlumnosLength(): Observable<number> {
    return this.alumnosLengthSubject.asObservable();
  }

  obtenerAlumno(id: number): Observable<Alumno[]>{
    return this.obtenerAlumnos().pipe(
      map((alumnos: Alumno[]) => alumnos.filter((alumno: Alumno) => alumno.id === id))
    )
  }

  agregarAlumno(alumno: Alumno) {
    this.alumnos.push(alumno);
    this.alumnosSubject.next(this.alumnos);
    this.alumnosLengthSubject.next(this.alumnos.length);
  }

  editarAlumno(alumno: Alumno){

    console.table(alumno);

    let indice = this.alumnos.findIndex((a: Alumno) => a.id === alumno.id);
    console.log(indice);
    if(indice > -1){
      this.alumnos[indice] = alumno;
    }

    this.alumnosSubject.next(this.alumnos);
    this.alumnosLengthSubject.next(this.alumnos.length);
  }

  eliminarAlumno(i: number){
    this.alumnos.splice(i, 1);
    this.alumnosSubject.next(this.alumnos);
    this.alumnosLengthSubject.next(this.alumnos.length);
  }

}
