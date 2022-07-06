import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: { title: ':: Time Trax :: Log In' }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: { title: ':: Time Trax :: Register' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {
  static components = [
    LoginComponent,
  ];

}