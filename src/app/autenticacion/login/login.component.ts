import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SesionService } from '../../core/services/sesion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formulario: FormGroup

  constructor(
    private sesionService: SesionService,
    private router: Router
  ) {
    this.formulario = new FormGroup({
      usuario: new FormControl(),
      contrasena: new FormControl(),
      admin: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  login(){
    this.sesionService.login(this.formulario.value.usuario, this.formulario.value.contrasena, this.formulario.value.admin);
    this.router.navigate(['inicio']);
  }

}
