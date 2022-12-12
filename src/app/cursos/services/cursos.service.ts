import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/models/curso';
import { environment } from 'src/environments/environment';

@Injectable()
export class CursosService {

  constructor(
    private http: HttpClient
  ) { }

  obtenerCursos(): Observable<Curso[]>{
    return this.http.get<Curso[]>(`${environment.api}/cursos`);
  }

  agregarCurso(curso: Curso): Observable<Curso>{
    return this.http.post<Curso>(`${environment.api}/cursos`, curso);
  }

  editarCurso(curso: Curso): Observable<Curso>{
    return this.http.put<Curso>(`${environment.api}/cursos/${curso.id}`, curso);
  }

  eliminarCurso(curso: Curso): Observable<Curso>{
    return this.http.delete<Curso>(`${environment.api}/cursos/${curso.id}`);
  }
}
