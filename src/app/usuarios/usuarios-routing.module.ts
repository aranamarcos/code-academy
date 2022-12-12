import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarUsuariosComponent } from './components/editar-usuarios/editar-usuarios.component';
import { InicioUsuariosComponent } from './components/inicio-usuarios/inicio-usuarios.component';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';

const routes: Routes = [
  { path: '', component: InicioUsuariosComponent, children: [
    { path: 'editar', component: EditarUsuariosComponent },
    { path: 'cargar', component: EditarUsuariosComponent },
    { path: 'lista', component: ListaUsuariosComponent }
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
