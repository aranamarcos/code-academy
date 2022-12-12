import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { UsuarioState } from 'src/app/models/usuario';
import { EditarUsuariosComponent } from '../editar-usuarios/editar-usuarios.component';
import { Usuario } from '../../../models/usuario';
import { agregarUsuario } from '../../state/usuarios.actions';

@Component({
  selector: 'app-agregar-usuarios',
  templateUrl: './agregar-usuarios.component.html',
  styleUrls: ['./agregar-usuarios.component.css']
})
export class AgregarUsuariosComponent implements OnInit {
  formulario!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditarUsuariosComponent>,
    private storeUsuarios: Store<UsuarioState>
  ) {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.pattern('^(?!.* $)[A-Za-z ]+$')]),
      apellido: new FormControl('', [Validators.required, Validators.pattern('^(?!.* $)[A-Za-z ]+$')]),
      usuario: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.pattern('^[_A-Za-z0-9-]+(.[_A-Za-z0-9-]+)*@[a-z0-9-]+.[a-z]{2,3}$')]),
      contrasena: new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern('^.*[A-Z]+.*$')]),
      admin: new FormControl('')
    })
  }

  ngOnInit(): void {
  }

  cancelar(){
    this.dialogRef.close()
  }

  agregar(){
    const i: Usuario = {
      id: 1,
      nombre: this.formulario.value.nombre,
      apellido: this.formulario.value.apellido,
      usuario: this.formulario.value.usuario,
      email: this.formulario.value.email,
      contrasena: this.formulario.value.contrasena,
      admin: this.formulario.value.admin,
    }
    this.storeUsuarios.dispatch(agregarUsuario({usuario: i}));
    this.dialogRef.close();
  }

}
