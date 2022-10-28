import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosRoutingModule } from './alumnos-routing.module';
import { AlumnosListaComponent } from './components/alumnos-lista/alumnos-lista.component';
import { AlumnosAgregarComponent } from './components/alumnos-agregar/alumnos-agregar.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { MaterialModule } from '../shared/modules/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AlumnosService } from './services/alumnos.service';
import { SharedModule } from '../shared/shared.module';
import { AlumnosEditarComponent } from './components/alumnos-editar/alumnos-editar.component';

AlumnosAgregarComponent

@NgModule({
  declarations: [
    AlumnosListaComponent,
    AlumnosAgregarComponent,
    AlumnosComponent,
    AlumnosEditarComponent,
  ],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
    AlumnosService
  ]
})
export class AlumnosModule { }
