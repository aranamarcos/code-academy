import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Usuario, UsuarioState } from 'src/app/models/usuario';
import { cargarUsuarios } from '../../state/usuarios.actions';

@Component({
  selector: 'app-detalle-usuarios',
  templateUrl: './detalle-usuarios.component.html',
  styleUrls: ['./detalle-usuarios.component.css']
})
export class DetalleUsuariosComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DetalleUsuariosComponent>,
    @Inject(MAT_DIALOG_DATA) public usuario: Usuario,
    private storeUsuarios: Store<UsuarioState>,
  ) {
    this.storeUsuarios.dispatch(cargarUsuarios());
  }

  ngOnInit(): void {
  }

  cancelar(){
    this.dialogRef.close()
  }
}
