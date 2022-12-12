import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumno } from 'src/app/models/alumno';
import { environment } from 'src/environments/environment';

@Injectable()
export class AlumnosService {

  constructor(
    private http: HttpClient
  ) { }

  obtenerAlumnos(): Observable<Alumno[]>{
    return this.http.get<Alumno[]>(`${environment.api}/usuarios`);
  }

  agregarAlumno(alumno: Alumno): Observable<Alumno>{
    return this.http.post<Alumno>(`${environment.api}/usuarios`, alumno);
  }

  editarAlumno(alumno: Alumno): Observable<Alumno>{
    return this.http.put<Alumno>(`${environment.api}/usuarios/${alumno.id}`, alumno);
  }

  eliminarAlumno(alumno: Alumno): Observable<Alumno>{
    return this.http.delete<Alumno>(`${environment.api}/usuarios/${alumno.id}`);
  }
}
