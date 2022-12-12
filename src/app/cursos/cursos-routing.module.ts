import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarCursosComponent } from './components/editar-cursos/editar-cursos.component';
import { InicioCursosComponent } from './components/inicio-cursos/inicio-cursos.component';
import { ListaCursosComponent } from './components/lista-cursos/lista-cursos.component';

const routes: Routes = [
  { path: '', component: InicioCursosComponent, children: [
    { path: 'editar', component: EditarCursosComponent },
    { path: 'cargar', component: EditarCursosComponent },
    { path: 'lista', component: ListaCursosComponent }
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
