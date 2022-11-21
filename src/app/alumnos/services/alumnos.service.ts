import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, Observable, ReplaySubject, tap, throwError } from 'rxjs';
import { Alumno } from 'src/app/models/alumno';
import { environment } from 'src/environments/environment';


@Injectable()
export class AlumnosService {

  constructor(
    private http: HttpClient,
    private _snackBar: MatSnackBar
  ) { }

  // ********* Refresh data *********
  private _refresh$: ReplaySubject<void> = new ReplaySubject<void>(1);

  get refresh$(){
    return this._refresh$;
  }

  // ********* Obtener todos los alumnos *********
  obtenerAlumnos(): Observable<Alumno[]> {
    return this.http.get<Alumno[]>(`${environment.api}/alumnos`,{
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejarError),
    )
  }

  // ********* Obtener un alumno *********
  obtenerAlumno(id: number): Observable<Alumno>{
    return this.http.get<Alumno>(`${environment.api}/alumnos/${id}`,{
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejarError)
    );
  }

  // ********* Agregar alumno *********
  agregarAlumno(alumno: Alumno) {
    return this.http.post(`${environment.api}/alumnos/`, alumno, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejarError),
      tap(() => {
        this.refresh$.next();
      })
      ).subscribe(() => {
        this.openSnackBar('Alumno agregado', 'add_circle')
    });
  }

  // ********* Editar alumno *********
  editarAlumno(alumno: Alumno){
    return this.http.put<Alumno>(`${environment.api}/alumnos/${alumno.id}`, alumno, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejarError),
      tap(() => {
        this.refresh$.next();
      })
      ).subscribe(() => {
        this.openSnackBar('Alumno modificado', 'edit')
    });
  }

  // ********* Eliminar alumno *********
  eliminarAlumno(id: number){
    return this.http.delete<Alumno>(`${environment.api}/alumnos/${id}`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejarError),
      tap(() => {
        this.refresh$.next();
      })
      ).subscribe(() => {
        this.openSnackBar('Alumno eliminado', 'delete')
    });
  }

  // ********* Manejo de errores *********
  private manejarError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.warn('Error del lado del cliente', error.error.message);
    }else{
      console.warn('Error del lado del servidor', error.error.message);
    }
    return throwError(() => new Error('Error en la comunicacion HTTP'));
  }

  // ********* Mensaje SnackBar *********
  mensaje_DurationInSeconds = 1.5;

  openSnackBar(msj: string, icon: string) {
    this._snackBar.open(msj, icon, {
      duration: this.mensaje_DurationInSeconds * 1000,
    })
  }

}
