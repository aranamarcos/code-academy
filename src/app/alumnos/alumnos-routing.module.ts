import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosAgregarComponent } from './components/alumnos-agregar/alumnos-agregar.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { AlumnosListaComponent } from './components/alumnos-lista/alumnos-lista.component';
import { AlumnosEditarComponent } from './components/alumnos-editar/alumnos-editar.component';
import { AlumnosDetalleComponent } from './components/alumnos-detalle/alumnos-detalle.component';
import { AdminGuard } from '../core/guards/admin.guard';

const routes: Routes = [
  { path: '', component: AlumnosComponent, children: [
    { path: 'agregar', component: AlumnosAgregarComponent, canActivate: [AdminGuard] },
    { path: 'editar', component: AlumnosEditarComponent, canActivate: [AdminGuard] },
    { path: 'lista', component: AlumnosListaComponent },
    { path: ':id', component: AlumnosDetalleComponent }
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosRoutingModule { }
