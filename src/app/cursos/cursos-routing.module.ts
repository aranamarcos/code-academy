import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosAbmComponent } from './components/cursos-abm/cursos-abm.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { CursosListaComponent } from './components/cursos-lista/cursos-lista.component';

const routes: Routes = [
  { path: 'cursos', component: CursosComponent, children: [
    { path: 'abm', component: CursosAbmComponent },
    { path: 'lista', component: CursosListaComponent }
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
