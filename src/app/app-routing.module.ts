import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRestroComponent } from './add-restro/add-restro.component';
import { ListRestroComponent } from './list-restro/list-restro.component'
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UpdateRestroComponent } from './update-restro/update-restro.component';

const routes: Routes = [
  {
    path:'update/:id',
    component :  UpdateRestroComponent
  },
  {
    path:' ',
    component :  ListRestroComponent
  },
  {
    path:'login',
    component :  LoginComponent
  },
  {
    path:'register',
    component :  RegisterComponent
  },
  {
    path:'add',
    component :AddRestroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
