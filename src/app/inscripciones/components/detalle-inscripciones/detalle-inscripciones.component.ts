import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Inscripcion, InscripcionState } from '../../../models/inscripcion';
import { cargarInscripciones } from '../../state/inscripciones.actions';

@Component({
  selector: 'app-detalle-inscripciones',
  templateUrl: './detalle-inscripciones.component.html',
  styleUrls: ['./detalle-inscripciones.component.css']
})
export class DetalleInscripcionesComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DetalleInscripcionesComponent>,
    @Inject(MAT_DIALOG_DATA) public inscripcion: Inscripcion,
    private storeInscripciones: Store<InscripcionState>,
  ) {
    this.storeInscripciones.dispatch(cargarInscripciones());
  }

  ngOnInit(): void {
  }

  cancelar(){
    this.dialogRef.close()
  }
}
