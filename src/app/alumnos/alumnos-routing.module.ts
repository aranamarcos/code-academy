import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosAgregarComponent } from './components/alumnos-agregar/alumnos-agregar.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { AlumnosListaComponent } from './components/alumnos-lista/alumnos-lista.component';

const routes: Routes = [
  { path: 'alumnos', component: AlumnosComponent, children: [
    { path: 'agregar', component: AlumnosAgregarComponent },
    { path: 'editar', component: AlumnosAgregarComponent },
    { path: 'lista', component: AlumnosListaComponent }
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosRoutingModule { }
