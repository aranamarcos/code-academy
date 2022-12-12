import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscripcionesRoutingModule } from './inscripciones-routing.module';
import { ListaInscripcionesComponent } from './components/lista-inscripciones/lista-inscripciones.component';
import { SharedModule } from '../shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { InscripcionesEffects } from './state/inscripciones.effects';
import { StoreModule } from '@ngrx/store';
import { inscripcionesFeatureKey, reducer } from './state/inscripciones.reducer';
import { EditarInscripcionesComponent } from './components/editar-inscripciones/editar-inscripciones.component';
import { InscripcionService } from './services/inscripciones.service';
import { AgregarInscripcionesComponent } from './components/agregar-inscripciones/agregar-inscripciones.component';
import { DetalleInscripcionesComponent } from './components/detalle-inscripciones/detalle-inscripciones.component';


@NgModule({
  declarations: [
    ListaInscripcionesComponent,
    EditarInscripcionesComponent,
    EditarInscripcionesComponent,
    AgregarInscripcionesComponent,
    DetalleInscripcionesComponent
  ],
  imports: [
    CommonModule,
    InscripcionesRoutingModule,
    SharedModule,
    StoreModule.forFeature(inscripcionesFeatureKey, reducer),
    EffectsModule.forFeature([InscripcionesEffects])
  ],
  providers: [
    InscripcionService
  ]
})
export class InscripcionesModule { }
