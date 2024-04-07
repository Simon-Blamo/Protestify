import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPromotedRalliesComponent } from './list-promoted-rallies/list-promoted-rallies.component';
import { MyHeaderComponent } from './my-header/my-header.component';

import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { MatButtonModule } from '@angular/material/button'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatChipsModule } from '@angular/material/chips'

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
import { DashboardCardComponent } from './dashboard-card/dashboard-card.component';
import { PromoteYourRallyComponent } from './promote-your-rally/promote-your-rally.component';
import { ListPendingRalliesComponent } from './list-pending-rallies/list-pending-rallies.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MyAdminStatsComponent } from './my-admin-stats/my-admin-stats.component';
import { MyRalliesComponent } from './my-rallies/my-rallies.component';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyRallyMapComponent } from './my-rally-map/my-rally-map.component';
import { MyGetStartedComponent } from './my-get-started/my-get-started.component';



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
    DashboardCardComponent,
    PromoteYourRallyComponent,
    ListPendingRalliesComponent,
    MyAdminStatsComponent,
    MyRalliesComponent,
    MyRallyMapComponent,
    MyGetStartedComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    GooglePlaceModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
