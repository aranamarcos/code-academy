import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaInscripcionesComponent } from './components/lista-inscripciones/lista-inscripciones.component';
import { EditarInscripcionesComponent } from './components/editar-inscripciones/editar-inscripciones.component';


const routes: Routes = [
  { path: 'lista', component: ListaInscripcionesComponent, children: [
      { path: 'editar', component: EditarInscripcionesComponent },
      { path: 'lista', component: ListaInscripcionesComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InscripcionesRoutingModule { }
