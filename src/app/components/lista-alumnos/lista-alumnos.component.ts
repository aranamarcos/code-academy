import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Alumno } from 'src/app/models/alumno';


@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css'],
})
export class ListaAlumnosComponent implements OnInit {

  @Output() eliminaAlumno: EventEmitter<any> = new EventEmitter<any>();

  columnas: string[] = ['nombre', 'apellido', 'email', 'usuario', 'nombreApellido', 'acciones'];
  @Input() alumnos: Alumno[] = [];
  dataSource: MatTableDataSource<Alumno> = new MatTableDataSource<Alumno>(this.alumnos);

  constructor() { }

  refreshTabla() {
      this.dataSource = new MatTableDataSource<Alumno>(this.alumnos);
  }

  ngOnInit(): void {
  }

  eliminarAlumno(index: number) {
    this.eliminaAlumno.emit(index);
  }

}
