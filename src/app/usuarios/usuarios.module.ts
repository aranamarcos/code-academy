import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { EditarUsuariosComponent } from './components/editar-usuarios/editar-usuarios.component';
import { AgregarUsuariosComponent } from './components/agregar-usuarios/agregar-usuarios.component';
import { InicioUsuariosComponent } from './components/inicio-usuarios/inicio-usuarios.component';
import { EffectsModule } from '@ngrx/effects';
import { UsuariosEffects } from './state/usuarios.effects';
import { UsuariosRoutingModule } from './usuarios-routing.module';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { reducer, usuariosFeatureKey } from './state/usuarios.reducer';
import { UsuariosService } from './services/usuarios.service';
import { DetalleUsuariosComponent } from './components/detalle-usuarios/detalle-usuarios.component';


@NgModule({
  declarations: [
    ListaUsuariosComponent,
    EditarUsuariosComponent,
    AgregarUsuariosComponent,
    InicioUsuariosComponent,
    DetalleUsuariosComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    SharedModule,
    StoreModule.forFeature(usuariosFeatureKey, reducer),
    EffectsModule.forFeature([UsuariosEffects])
  ],
  providers: [
    UsuariosService
  ]
})
export class UsuariosModule { }
