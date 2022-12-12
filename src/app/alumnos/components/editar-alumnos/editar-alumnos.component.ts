import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';

import { Alumno, AlumnoState } from '../../../models/alumno';
import { editarAlumno } from '../../state/alumnos.actions';

@Component({
  selector: 'app-editar-alumnos',
  templateUrl: './editar-alumnos.component.html',
  styleUrls: ['./editar-alumnos.component.css']
})
export class EditarAlumnosComponent implements OnInit {
  formulario!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditarAlumnosComponent>,
    @Inject(MAT_DIALOG_DATA) public alumno: Alumno,
    private storeAlumnos: Store<AlumnoState>
    ) {
      this.formulario = new FormGroup({
        email: new FormControl(this.alumno.email, [Validators.required, Validators.pattern('^[_A-Za-z0-9-]+(.[_A-Za-z0-9-]+)*@[a-z0-9-]+.[a-z]{2,3}$')]),
        usuario: new FormControl(this.alumno.usuario, [Validators.required]),
      });
    }

  ngOnInit(): void { }

  cancelar(){
    this.dialogRef.close()
  }

  editar(){
    const i: Alumno = {
      id: this.alumno.id,
      nombre: this.alumno.nombre,
      apellido: this.alumno.apellido,
      email: this.formulario.value.email,
      usuario: this.formulario.value.usuario,
      contrasena: this.alumno.contrasena,
      admin: this.alumno.admin,
    }
    this.storeAlumnos.dispatch(editarAlumno({alumno: i}));
    this.dialogRef.close();
  }
}


