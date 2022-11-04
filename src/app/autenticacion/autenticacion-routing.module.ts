import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';

  const rutas: Routes = [
    { path: 'login', component: LoginComponent }
  ]

@NgModule({
  imports: [RouterModule.forChild(rutas)],
  exports: [RouterModule]
})
export class AutenticacionRoutingModule{

}
