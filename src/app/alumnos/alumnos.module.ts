import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosRoutingModule } from './alumnos-routing.module';
import { InicioAlumnosComponent } from './components/inicio-alumnos/inicio-alumnos.component';
import { AlumnosService } from './services/alumnos.service';
import { SharedModule } from '../shared/shared.module';
import { EditarAlumnosComponent } from './components/editar-alumnos/editar-alumnos.component';
import { DetalleAlumnosComponent } from './components/detalle-alumnos/detalle-alumnos.component';
import { EffectsModule } from '@ngrx/effects';
import { AlumnosEffects } from './state/alumnos.effects';
import { StoreModule } from '@ngrx/store';
import { alumnosFeatureKey, reducer } from './state/alumnos.reducer';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';

@NgModule({
  declarations: [
    ListaAlumnosComponent,
    InicioAlumnosComponent,
    EditarAlumnosComponent,
    DetalleAlumnosComponent,
  ],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    SharedModule,
    StoreModule.forFeature(alumnosFeatureKey, reducer),
    EffectsModule.forFeature([AlumnosEffects])
  ],
  providers: [
    AlumnosService
  ]
})
export class AlumnosModule { }
