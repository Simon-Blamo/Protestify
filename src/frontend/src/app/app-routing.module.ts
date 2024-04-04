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
import { PromoteYourRallyComponent } from './promote-your-rally/promote-your-rally.component';
import { AuthGuard } from './auth.guard';
import { ActivistGuard } from './activist.guard';
import { MyRalliesComponent } from './my-rallies/my-rallies.component';

const routes: Routes = [
  {
    path: '',
    component: MyHomepageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: MyLoginComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'register',
    component: MyRegisterComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'congrats',
    component: MyCongratulationsComponent
  },
  {
    path:'dashboard',
    component: DashboardComponent,
    canActivate: [ActivistGuard]
  },
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'logout',
    component: LogoutComponent
  }, 
  {
    path: 'your-rallies',
    component: MyRalliesComponent
  },
  {
    path: 'create',
    component: PromoteYourRallyComponent,
    canActivate: [ActivistGuard]
  },
  {
    path: '**',
    redirectTo: '/dashboard'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
