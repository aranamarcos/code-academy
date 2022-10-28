import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosListaComponent } from './components/cursos-lista/cursos-lista.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { CursosAbmComponent } from './components/cursos-abm/cursos-abm.component';
import { MaterialModule } from '../shared/modules/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CursosService } from './services/cursos.service';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CursosListaComponent,
    CursosComponent,
    CursosAbmComponent,
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [
    CursosService
  ]
})
export class CursosModule { }
