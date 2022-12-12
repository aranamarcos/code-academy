import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectSesionActiva } from 'src/app/core/state/sesion.selectors';
import { selectCursos } from 'src/app/cursos/state/cursos.selectors';
import { Curso } from 'src/app/models/curso';
import { CursoState } from 'src/app/models/curso';
import { Inscripcion, InscripcionState } from 'src/app/models/inscripcion';
import { Sesion } from 'src/app/models/sesion';
import { Usuario } from 'src/app/models/usuario';
import { editarInscripcion } from '../../state/inscripciones.actions';

@Component({
  selector: 'app-editar-inscripciones',
  templateUrl: './editar-inscripciones.component.html',
  styleUrls: ['./editar-inscripciones.component.css']
})
export class EditarInscripcionesComponent implements OnInit {
  cursos$!: Observable<Curso[]>;
  usuarioActivo?: Usuario;
  formulario!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditarInscripcionesComponent>,
    @Inject(MAT_DIALOG_DATA) public inscripcion: Inscripcion,
    private storeCursos: Store<CursoState>,
    private storeSesion: Store<Sesion>,
    private storeInscripciones: Store<InscripcionState>
  ) {
    this.formulario = new FormGroup({
      curso: new FormControl(this.inscripcion.curso)
    })
  }

  ngOnInit(): void {
    this.cursos$ = this.storeCursos.select(selectCursos);

    // Datos de la sesion para saber el usuario activo
    this.storeSesion.select(selectSesionActiva).subscribe((sesion: Sesion) => {
      this.usuarioActivo = sesion.usuarioActivo;
    })
  }

  cancelar(){
    this.dialogRef.close()
  }

  editar(){
    const i: Inscripcion = {
      id: this.inscripcion.id,
      usuario: this.inscripcion.usuario,
      alumno: this.inscripcion.alumno,
      curso: this.formulario.value.curso,
    }
    this.storeInscripciones.dispatch(editarInscripcion({inscripcion: i}));
    this.dialogRef.close();
  }
}
