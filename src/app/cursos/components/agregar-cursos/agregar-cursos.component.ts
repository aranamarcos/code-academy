import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Curso, CursoState } from 'src/app/models/curso';
import { agregarCurso } from '../../state/cursos.actions';

@Component({
  selector: 'app-agregar-cursos',
  templateUrl: './agregar-cursos.component.html',
  styleUrls: ['./agregar-cursos.component.css']
})
export class AgregarCursosComponent implements OnInit {
  formulario!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AgregarCursosComponent>,
    private storeCursos: Store<CursoState>
  ) {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.pattern('^(?!.* $)[A-Za-z ]+$')]),
      comision: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{4,12}')]),
      profesor: new FormControl('', [Validators.required, Validators.pattern('^(?!.* $)[A-Za-z ]+$')]),
      fechaInicio: new FormControl('', [Validators.required]),
      fechaFin: new FormControl('', [Validators.required]),
      inscripcionAbierta: new FormControl('')
    })
  }

  ngOnInit(): void {
  }

  cancelar(){
    this.dialogRef.close()
  }

  agregar(){
    const i: Curso = {
      id: 1,
      nombre: this.formulario.value.nombre,
      comision: this.formulario.value.comision,
      profesor: this.formulario.value.profesor,
      fechaInicio: this.formulario.value.fechaInicio,
      fechaFin: this.formulario.value.fechaFin,
      inscripcionAbierta: this.formulario.value.inscripcionAbierta,
    }
    this.storeCursos.dispatch(agregarCurso({curso: i}));
    this.dialogRef.close();
  }

}
