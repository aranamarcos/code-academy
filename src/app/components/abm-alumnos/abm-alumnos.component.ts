import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AlumnosService } from '../../services/alumnos.service';

@Component({
  selector: 'app-abm-alumnos',
  templateUrl: './abm-alumnos.component.html',
  styleUrls: ['./abm-alumnos.component.css']
})


export class AbmAlumnosComponent implements OnInit {

  hide = true;

  formulario = this.formBuilder.group({
    nombre: ['', [Validators.required, Validators.pattern('^(?!.* $)[A-Za-z ]+$')]],
    apellido: ['', [Validators.required, Validators.pattern('^(?!.* $)[A-Za-z ]+$')]],
    email: ['', [Validators.required, Validators.pattern('^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+.[a-z]{2,3}$')]],
    usuario: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6), Validators.pattern('^.*[A-Z]+.*$')]],
  })


  constructor(
    private formBuilder: FormBuilder,
    private alumnosService: AlumnosService,
  ) { }

  ngOnInit(): void {
  }

  submitForm(): void {
    this.alumnosService.agregarAlumno(this.formulario.value);
    this.formulario.reset();
  }
}

