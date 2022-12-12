import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';

import { Usuario, UsuarioState } from 'src/app/models/usuario';
import { editarUsuario } from '../../state/usuarios.actions';

@Component({
  selector: 'app-usuarios-editar',
  templateUrl: './editar-usuarios.component.html',
  styleUrls: ['./editar-usuarios.component.css']
})
export class EditarUsuariosComponent implements OnInit {
  formulario!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditarUsuariosComponent>,
    @Inject(MAT_DIALOG_DATA) public usuario: Usuario,
    private storeUsuarios: Store<UsuarioState>
  ) {
    this.formulario = new FormGroup({
      nombre: new FormControl(this.usuario.nombre, [Validators.required, Validators.pattern('^(?!.* $)[A-Za-z ]+$')]),
      apellido: new FormControl(this.usuario.apellido, [Validators.required, Validators.pattern('^(?!.* $)[A-Za-z ]+$')]),
      usuario: new FormControl(this.usuario.usuario, [Validators.required]),
      email: new FormControl(this.usuario.email, [Validators.required, Validators.pattern('^[_A-Za-z0-9-]+(.[_A-Za-z0-9-]+)*@[a-z0-9-]+.[a-z]{2,3}$')]),
      contrasena: new FormControl(this.usuario.contrasena, [Validators.required, Validators.minLength(6), Validators.pattern('^.*[A-Z]+.*$')]),
      admin: new FormControl(this.usuario.admin)
    })
  }

  ngOnInit(): void { }

  cancelar(){
    this.dialogRef.close()
  }

  editar(){
    const i: Usuario = {
      id: this.usuario.id,
      nombre: this.formulario.value.nombre,
      apellido: this.formulario.value.apellido,
      usuario: this.formulario.value.usuario,
      email: this.formulario.value.email,
      contrasena: this.formulario.value.contrasena,
      admin: this.formulario.value.admin,
    }
    this.storeUsuarios.dispatch(editarUsuario({usuario: i}));
    this.dialogRef.close();
  }
}
