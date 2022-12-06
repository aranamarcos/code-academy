import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CursoState } from 'src/app/models/curso.state';
import { loadCursos } from '../../state/cursos.actions';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  constructor(
    private store: Store<CursoState>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(loadCursos());
  }

}
