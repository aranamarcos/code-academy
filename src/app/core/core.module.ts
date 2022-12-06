import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioComponent } from './components/inicio/inicio.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { PaginaNoEncontradaComponent } from './components/pagina-no-encontrada/pagina-no-encontrada.component';

import { MaterialModule } from '../shared/modules/material.module';
import { RouterModule } from '@angular/router';
import { SesionService } from './services/sesion.service';
import { StoreModule } from '@ngrx/store';
import { sesionFeatureKey, reducer } from './state/sesion.reducer';


@NgModule({
  declarations: [
    InicioComponent,
    NavbarComponent,
    ToolbarComponent,
    PaginaNoEncontradaComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    StoreModule.forFeature(sesionFeatureKey, reducer)
  ],
  providers: [
    SesionService
  ],
  exports: [
    ToolbarComponent,
    NavbarComponent
  ]
})
export class CoreModule { }
