import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Curso } from 'src/app/models/curso';
import { CursosService } from '../../services/cursos.service';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.css']
})
export class CursosListaComponent implements OnInit {

  columnas: string[] = ['curso', 'profesor', 'comision', 'fechaInicio', 'fechaFin', 'inscripcionAbierta','acciones'];
  dataSource: MatTableDataSource<Curso> = new MatTableDataSource<Curso>([]);
  cursos!: Curso[];

  constructor( private cursosService: CursosService ) {

    cursosService.obtenerCursosPromise().then((valor: Curso[]) => {
      this.cursos = valor;
      this.dataSource = new MatTableDataSource(valor)
    }).catch((error: any) => {
      console.error(error);
    });
  };

  ngOnInit(): void {
  }

}
