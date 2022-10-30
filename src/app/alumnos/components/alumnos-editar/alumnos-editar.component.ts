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
  id!: number;

  constructor(
    private alumnosService: AlumnosService,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros) => {

      this.id = parseInt(parametros.get('id') || '0');

      this.formulario = new FormGroup({
        nombre: new FormControl(parametros.get('nombre'), [Validators.required, Validators.pattern('^(?!.* $)[A-Za-z ]+$')]),
        apellido: new FormControl(parametros.get('apellido'), [Validators.required, Validators.pattern('^(?!.* $)[A-Za-z ]+$')]),
        email: new FormControl(parametros.get('email'), [Validators.required, Validators.pattern('^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+.[a-z]{2,3}$')]),
        usuario: new FormControl(parametros.get('usuario'), [Validators.required]),
        password: new FormControl(parametros.get('password'), [Validators.required, Validators.minLength(6), Validators.pattern('^.*[A-Z]+.*$')]),
      });
    })
  }

  submitForm(): void {
    this.alumnosService.agregarAlumno(this.formulario.value);
    this.formulario.reset();
  }

  editarAlumno(){
    let a: Alumno = {
      id: this.id,
      nombre: this.formulario.value.nombre,
      apellido: this.formulario.value.apellido,
      email: this.formulario.value.email,
      usuario: this.formulario.value.usuario,
      password: this.formulario.value.password,
    }

    this.alumnosService.editarAlumno(a);
  }
}


