import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosEditarComponent } from './components/cursos-editar/cursos-editar.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { CursosListaComponent } from './components/cursos-lista/cursos-lista.component';

const routes: Routes = [
  { path: '', component: CursosComponent, children: [
    { path: 'abm', component: CursosEditarComponent },
    { path: 'lista', component: CursosListaComponent }
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
