import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';

import { Curso, CursoState } from 'src/app/models/curso';
import { editarCurso } from '../../state/cursos.actions';

@Component({
  selector: 'app-cursos-editar',
  templateUrl: './editar-cursos.component.html',
  styleUrls: ['./editar-cursos.component.css']
})
export class EditarCursosComponent implements OnInit {
  formulario!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditarCursosComponent>,
    @Inject(MAT_DIALOG_DATA) public curso: Curso,
    private storeCursos: Store<CursoState>
  ) {
    this.formulario = new FormGroup({
      profesor: new FormControl(this.curso.profesor, [Validators.required, Validators.pattern('^(?!.* $)[A-Za-z ]+$')]),
      fechaInicio: new FormControl(this.curso.fechaInicio),
      fechaFin: new FormControl(this.curso.fechaFin),
      inscripcionAbierta: new FormControl(this.curso.inscripcionAbierta)
    })
  }

  ngOnInit(): void { }

  cancelar(){
    this.dialogRef.close()
  }

  editar(){
    const i: Curso = {
      id: this.curso.id,
      nombre: this.curso.nombre,
      comision: this.curso.comision,
      profesor: this.formulario.value.profesor,
      fechaInicio: this.formulario.value.fechaInicio,
      fechaFin: this.formulario.value.fechaFin,
      inscripcionAbierta: this.formulario.value.inscripcionAbierta,
    }
    this.storeCursos.dispatch(editarCurso({curso: i}));
    this.dialogRef.close();
  }
}
