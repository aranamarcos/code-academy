import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InicioComponent } from './core/components/inicio/inicio.component';
import { PaginaNoEncontradaComponent } from './core/components/pagina-no-encontrada/pagina-no-encontrada.component';
import { CursosRoutingModule } from './cursos/cursos-routing.module';
import { AlumnosRoutingModule } from './alumnos/alumnos-routing.module';

const rutas: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: '**', component: PaginaNoEncontradaComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(rutas),
    CursosRoutingModule,
    AlumnosRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule{}
