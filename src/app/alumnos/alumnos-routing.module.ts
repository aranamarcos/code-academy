import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioAlumnosComponent } from './components/inicio-alumnos/inicio-alumnos.component';

import { EditarAlumnosComponent } from './components/editar-alumnos/editar-alumnos.component';
import { AdminGuard } from '../core/guards/admin.guard';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';

const routes: Routes = [
  { path: '', component: InicioAlumnosComponent, children: [
    { path: 'editar', component: EditarAlumnosComponent, canActivate: [AdminGuard] },
    { path: 'lista', component: ListaAlumnosComponent }
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosRoutingModule { }
