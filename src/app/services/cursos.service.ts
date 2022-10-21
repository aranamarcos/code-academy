import { Injectable } from '@angular/core';
import { Curso } from '../models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  cursosAdmin: Curso[] = [
    {nombre: 'Angular', profesor: 'Perez', comision: 1368},
    {nombre: 'Angular', profesor: 'Lopez', comision: 8469},
    {nombre: 'React', profesor: 'Gonzalez', comision: 1045},
    {nombre: 'React', profesor: 'Ramirez', comision: 5289},
    {nombre: 'Vue', profesor: 'Gonzalez', comision: 1313},
    {nombre: 'Vue', profesor: 'Jimenez', comision: 4589}
  ];

  constructor() { }

  obtenerCursosPromise(): Promise<Curso[] | any>{
    return new Promise((resolve, reject) => {
      if(this.cursosAdmin.length > 0){
        resolve(this.cursosAdmin);
      }else{
        reject({
          mensaje: 'No hay cursos'
        });
      };
    });
  };
};
