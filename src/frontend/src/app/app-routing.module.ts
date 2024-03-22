import { MyRegisterComponent } from './my-register/my-register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MyLoginComponent } from './my-login/my-login.component';
import { MyHomepageComponent } from './my-homepage/my-homepage.component';
import { MyCongratulationsComponent } from './my-congratulations/my-congratulations.component';

const routes: Routes = [
  {
    path: '',
    component: MyHomepageComponent
  },
  {
    path: 'login',
    component: MyLoginComponent
  },
  {
    path: 'register',
    component: MyRegisterComponent
  },
  {
    path: 'congrats',
    component: MyCongratulationsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
