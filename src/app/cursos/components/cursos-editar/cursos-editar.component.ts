import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectStateCursos } from 'src/app/cursos/state/cursos.selectors';
import { editarInscripcion } from 'src/app/inscripciones/state/inscripciones.actions';
import { InscripcionState } from 'src/app/inscripciones/state/inscripciones.reducer';
import { selectInscripciones } from 'src/app/inscripciones/state/inscripciones.selectors';
import { Curso } from 'src/app/models/curso';
import { CursoState } from 'src/app/models/curso.state';
import { Inscripcion } from 'src/app/models/inscripcion';

@Component({
  selector: 'app-cursos-editar',
  templateUrl: './cursos-editar.component.html',
  styleUrls: ['./cursos-editar.component.css']
})
export class CursosEditarComponent implements OnInit {
  columnas: string[] = ['id', 'nombre', 'apellido'];
  dataSource!: MatTableDataSource<Inscripcion>;
  cursos$!: Observable<Curso[]>;
  formulario!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<CursosEditarComponent>,
    private storeInscripciones: Store<InscripcionState>
  ) { }

  ngOnInit(): void {
    this.storeInscripciones.select(selectInscripciones).subscribe((inscripciones: Inscripcion[]) => {
      this.dataSource = new MatTableDataSource<Inscripcion>(inscripciones);
    });
  }

  cancelar(){
  }

  editar(){
  }
}
