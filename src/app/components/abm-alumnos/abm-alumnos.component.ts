import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-abm-alumnos',
  templateUrl: './abm-alumnos.component.html',
  styleUrls: ['./abm-alumnos.component.css']
})


export class AbmAlumnosComponent implements OnInit {


  @Output() comunicaAlumno: EventEmitter<any> = new EventEmitter<any>();

  hide = true;

  formulario = this.formBuilder.group({
    nombre: ['', [Validators.required, Validators.pattern('^(?!.* $)[A-Za-z ]+$')]],
    apellido: ['', [Validators.required, Validators.pattern('^(?!.* $)[A-Za-z ]+$')]],
    email: ['', [Validators.required, Validators.pattern('^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+.[a-z]{2,3}$')]],
    usuario: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6), Validators.pattern('^.*[A-Z]+.*$')]],
  })


  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  submitForm(): void {
    this.comunicaAlumno.emit(this.formulario.value);
    this.formulario.reset();
  }
}

