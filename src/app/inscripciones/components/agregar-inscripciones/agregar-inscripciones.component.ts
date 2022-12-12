import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectSesionActiva } from 'src/app/core/state/sesion.selectors';
import { AgregarCursosComponent } from 'src/app/cursos/components/agregar-cursos/agregar-cursos.component';
import { Alumno, AlumnoState } from 'src/app/models/alumno';
import { Curso, CursoState } from 'src/app/models/curso';
import { Inscripcion, InscripcionState } from 'src/app/models/inscripcion';
import { Sesion } from 'src/app/models/sesion';
import { Usuario } from 'src/app/models/usuario';
import { agregarInscripcion } from '../../state/inscripciones.actions';
import { selectCursos, selectCursosState } from '../../../cursos/state/cursos.selectors';
import { selectAlumnos } from '../../../alumnos/state/alumnos.selectors';
import { cargarCursos } from 'src/app/cursos/state/cursos.actions';

@Component({
  selector: 'app-agregar-inscripciones',
  templateUrl: './agregar-inscripciones.component.html',
  styleUrls: ['./agregar-inscripciones.component.css']
})
export class AgregarInscripcionesComponent implements OnInit {
  formulario!: FormGroup;
  usuarioActivo: any;
  cursoSeleccionado!: Curso;
  alumnoSeleccionado!: Alumno;
  cursos$!: Observable<Curso[]>;
  alumnos$!: Observable<Alumno[]>;
  sesion$!: Observable<Sesion>

  constructor(
    public dialogRef: MatDialogRef<AgregarCursosComponent>,
    private storeInscripciones: Store<InscripcionState>,
    private storeCursos: Store<CursoState>,
    private storeAlumnos: Store<AlumnoState>,
    private storeSesion: Store<Sesion>
  ) {
    this.formulario = new FormGroup({
      alumno: new FormControl('', [Validators.required]),
      curso: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
    // Dato de sesion para saber si el usuario es admin
    this.sesion$ = this.storeSesion.select(selectSesionActiva);

    this.storeSesion.select(selectSesionActiva).subscribe((sesion: Sesion) => {
      this.usuarioActivo = sesion.usuarioActivo;
    })
    this.cursos$ = this.storeCursos.select(selectCursos)
    this.alumnos$ = this.storeAlumnos.select(selectAlumnos)
  }

  cancelar(){
    this.dialogRef.close()
  }

  agregar(curso: Curso, alumno: Alumno){
    const i: Inscripcion = {
      id: 1,
      alumno: alumno,
      curso: curso || this.usuarioActivo,
      usuario: this.usuarioActivo
    }
    this.storeInscripciones.dispatch(agregarInscripcion({inscripcion: i}));
    this.dialogRef.close();
  }

}

