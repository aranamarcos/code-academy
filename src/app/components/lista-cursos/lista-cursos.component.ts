import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { CursosService } from '../../services/cursos.service';


@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent implements OnInit {

  cursos!: Curso[];

  constructor( private cursosService: CursosService ) {

    cursosService.obtenerCursosPromise().then((valor: Curso[]) => {
      this.cursos = valor;
    }).catch((error: any) => {
      console.error(error);
    });
  };

  ngOnInit(): void {
  }

}
