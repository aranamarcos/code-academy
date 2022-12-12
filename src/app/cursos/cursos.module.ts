import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { ListaCursosComponent } from './components/lista-cursos/lista-cursos.component';
import { InicioCursosComponent } from './components/inicio-cursos/inicio-cursos.component';
import { EditarCursosComponent } from './components/editar-cursos/editar-cursos.component';
import { CursosService } from './services/cursos.service';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { cursosFeatureKey, reducer } from './state/cursos.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CursosEffects } from './state/cursos.effects';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { AgregarCursosComponent } from './components/agregar-cursos/agregar-cursos.component';
import { DetalleCursosComponent } from './components/detalle-cursos/detalle-cursos.component';


@NgModule({
  declarations: [
    ListaCursosComponent,
    InicioCursosComponent,
    EditarCursosComponent,
    AgregarCursosComponent,
    DetalleCursosComponent,
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    SharedModule,
    StoreModule.forFeature(cursosFeatureKey, reducer),
    EffectsModule.forFeature([CursosEffects])
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'es' },
    CursosService
  ]
})
export class CursosModule { }
