import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CursoState } from 'src/app/models/curso';
import { cargarCursos } from '../../state/cursos.actions';

@Component({
  selector: 'app-cursos',
  templateUrl: './inicio-cursos.component.html',
  styleUrls: ['./inicio-cursos.component.css']
})
export class InicioCursosComponent implements OnInit {

  constructor(
    // private store: Store<CursoState>
  ) { }

  ngOnInit(): void {
    // this.store.dispatch(cargarCursos());
  }

}
