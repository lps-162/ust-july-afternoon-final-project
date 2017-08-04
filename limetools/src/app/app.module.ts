import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './erp/home/home.component';
import { AboutComponent } from './erp/about/about.component';
import { NavbarComponent } from './erp/navbar/navbar.component';
import { NotFoundComponent } from './erp/not-found/not-found.component';

import { appRouting } from "./app.routing";
import { EmployeesModule } from "app/erp/employees/employees.module";
import { AlertComponent } from './erp/alert/alert.component';
import { AlertService } from "app/shared/services/alert.service";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    NotFoundComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    appRouting
  ],
  providers: [
    AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
