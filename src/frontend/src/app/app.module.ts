import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPromotedRalliesComponent } from './list-promoted-rallies/list-promoted-rallies.component';
import { MyHeaderComponent } from './my-header/my-header.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyAboutComponent } from './my-about/my-about.component';
import { MyBodyComponent } from './my-body/my-body.component';
import { MyRegisterComponent } from './my-register/my-register.component';
import { MyLoginComponent } from './my-login/my-login.component';
import { MyHomepageComponent } from './my-homepage/my-homepage.component';
import { MyCongratulationsComponent } from './my-congratulations/my-congratulations.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogoutComponent } from './logout/logout.component';


@NgModule({
  declarations: [
    AppComponent,
    ListPromotedRalliesComponent,
    MyHeaderComponent,
    MyAboutComponent,
    MyBodyComponent,
    MyRegisterComponent,
    MyLoginComponent,
    MyHomepageComponent,
    MyCongratulationsComponent,
    AdminDashboardComponent,
    DashboardComponent,
    LogoutComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
