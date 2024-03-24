import { MyRegisterComponent } from './my-register/my-register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MyLoginComponent } from './my-login/my-login.component';
import { MyHomepageComponent } from './my-homepage/my-homepage.component';
import { MyCongratulationsComponent } from './my-congratulations/my-congratulations.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminGuard } from './admin.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogoutComponent } from './logout/logout.component';

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
  },
  {
    path:'dashboard',
    component: DashboardComponent
  },
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'logout',
    component: LogoutComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
