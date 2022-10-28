import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlumnosService } from '../../services/alumnos.service';
import { Alumno } from '../../../models/alumno';

@Component({
  selector: 'app-alumnos-agregar',
  templateUrl: './alumnos-agregar.component.html',
  styleUrls: ['./alumnos-agregar.component.css']
})


export class AlumnosAgregarComponent implements OnInit {
  hide = true;
  formulario: FormGroup;


  constructor(private alumnosService: AlumnosService) {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.pattern('^(?!.* $)[A-Za-z ]+$')]),
      apellido: new FormControl('', [Validators.required, Validators.pattern('^(?!.* $)[A-Za-z ]+$')]),
      email: new FormControl('', [Validators.required, Validators.pattern('^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+.[a-z]{2,3}$')]),
      usuario: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern('^.*[A-Z]+.*$')]),
    })
  }


  ngOnInit(): void {
  }

  submitForm(): void {
    this.alumnosService.agregarAlumno(this.formulario.value);
    this.formulario.reset();
  }

  agregarAlumno(){
    const alumno: Alumno = {
      id: Math.round(Math.random()*1000),
      nombre: this.formulario.value.nombre,
      apellido: this.formulario.value.apellido,
      email: this.formulario.value.email,
      usuario: this.formulario.value.usuario,
      password: this.formulario.value.password,
    }

    this.alumnosService.agregarAlumno(alumno);
  }
}

