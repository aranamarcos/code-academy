import { Injectable } from '@angular/core';
import { Curso } from '../../models/curso';

@Injectable()
export class CursosService {

  private cursosAdmin: Curso[] = [
    {curso: 'Angular', profesor: 'Perez', comision: 1368, fechaInicio: new Date(2022, 11, 1), fechaFin: new Date(2023, 2, 20), inscripcionAbierta: true},
    {curso: 'Angular', profesor: 'Lopez', comision: 8469, fechaInicio: new Date(2022, 11, 1), fechaFin: new Date(2023, 2, 20), inscripcionAbierta: true},
    {curso: 'React', profesor: 'Gonzalez', comision: 1045, fechaInicio: new Date(2022, 11, 1), fechaFin: new Date(2023, 2, 20), inscripcionAbierta: false},
    {curso: 'React', profesor: 'Ramirez', comision: 5289, fechaInicio: new Date(2022, 11, 1), fechaFin: new Date(2023, 2, 20), inscripcionAbierta: true},
    {curso: 'Vue', profesor: 'Gonzalez', comision: 1313, fechaInicio: new Date(2022, 11, 1), fechaFin: new Date(2023, 2, 20), inscripcionAbierta: true},
    {curso: 'Vue', profesor: 'Jimenez', comision: 4589, fechaInicio: new Date(2022, 11, 1), fechaFin: new Date(2023, 2, 20), inscripcionAbierta: true}
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
