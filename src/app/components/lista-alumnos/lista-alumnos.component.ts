import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Alumno } from 'src/app/models/alumno';
import { AlumnosService } from '../../services/alumnos.service';
import { Observable, of } from 'rxjs';
import { FormRecord } from '@angular/forms';


@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css'],
})
export class ListaAlumnosComponent implements OnInit, OnDestroy{

  columnas: string[] = ['nombre', 'apellido', 'email', 'usuario', 'nombreApellido', 'acciones'];
  dataSource: MatTableDataSource<Alumno> = new MatTableDataSource<Alumno>([]);
  alumnos$: Observable<Alumno[]> = this.alumnosService.alumnos$;
  suscripcion: any;


  constructor(private alumnosService: AlumnosService) { }

  ngOnInit(): void {
    this.suscripcion = this.alumnos$.subscribe(alumnos => {
      this.dataSource = new MatTableDataSource(alumnos)
    })
  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }

};
