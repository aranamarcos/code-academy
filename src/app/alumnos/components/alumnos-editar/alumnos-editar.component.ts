import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlumnosService } from '../../services/alumnos.service';
import { Alumno } from '../../../models/alumno';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-alumnos-editar',
  templateUrl: './alumnos-editar.component.html',
  styleUrls: ['./alumnos-editar.component.css']
})
export class AlumnosEditarComponent implements OnInit {
  formulario!: FormGroup;
  // id!: number;
  alumno!: Alumno;

  constructor(
    private alumnosService: AlumnosService,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros) => {

      this.alumno = {
        id: parseInt(parametros.get('id') || '0'),
        nombre: parametros.get('nombre') || '0',
        apellido: parametros.get('apellido') || '0',
        email: parametros.get('email') || '0',
        usuario: parametros.get('usuario') || '0',
        password: parametros.get('password') || '0',
      }

      this.formulario = new FormGroup({
        nombre: new FormControl(this.alumno.nombre, [Validators.required, Validators.pattern('^(?!.* $)[A-Za-z ]+$')]),
        apellido: new FormControl(this.alumno.apellido, [Validators.required, Validators.pattern('^(?!.* $)[A-Za-z ]+$')]),
        email: new FormControl(this.alumno.email, [Validators.required, Validators.pattern('^[_A-Za-z0-9-]+(.[_A-Za-z0-9-]+)*@[a-z0-9-]+.[a-z]{2,3}$')]),
        usuario: new FormControl(this.alumno.usuario, [Validators.required]),
        password: new FormControl(this.alumno.password, [Validators.required, Validators.minLength(6), Validators.pattern('^.*[A-Z]+.*$')]),
      });
    })
  }

  submitForm(): void {
    this.alumnosService.agregarAlumno(this.formulario.value);
    this.formulario.reset();
  }

  editarAlumno(){
    let a: Alumno = {
      id: this.alumno.id,
      nombre: this.formulario.value.nombre,
      apellido: this.formulario.value.apellido,
      email: this.formulario.value.email,
      usuario: this.formulario.value.usuario,
      password: this.formulario.value.password,
    }

    this.alumnosService.editarAlumno(a);
  }
}


