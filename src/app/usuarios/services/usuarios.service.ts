import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';
import { environment } from 'src/environments/environment';

@Injectable()
export class UsuariosService {

  constructor(
    private http: HttpClient
  ) { }

  obtenerUsuarios(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`${environment.api}/usuarios`);
  }

  agregarUsuario(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(`${environment.api}/usuarios`, usuario);
  }

  editarUsuario(usuario: Usuario): Observable<Usuario>{
    return this.http.put<Usuario>(`${environment.api}/usuarios/${usuario.id}`, usuario);
  }

  eliminarUsuario(usuario: Usuario): Observable<Usuario>{
    return this.http.delete<Usuario>(`${environment.api}/usuarios/${usuario.id}`);
  }
}
