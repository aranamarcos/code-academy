import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosListaComponent } from './components/cursos-lista/cursos-lista.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { CursosEditarComponent } from './components/cursos-editar/cursos-editar.component';
import { CursosService } from './services/cursos.service';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { cursosFeatureKey, reducer } from './state/cursos.reducer';


@NgModule({
  declarations: [
    CursosListaComponent,
    CursosComponent,
    CursosEditarComponent,
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    SharedModule,
    StoreModule.forFeature(cursosFeatureKey, reducer)
  ],
  providers: [
    CursosService
  ]
})
export class CursosModule { }
