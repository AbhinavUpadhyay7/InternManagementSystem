import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './account/signup/signup.component';
import { LoginComponent } from './account/login/login.component';
import { HomeComponent } from './HomePage/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { InternComponent } from './internPage/intern/intern.component';
import { DepartmentComponent } from './departmentPage/department/department.component';
import { DisplayComponent } from './internPage/display/display.component';
import { DepartmentdisplayComponent } from './departmentPage/departmentdisplay/departmentdisplay.component';
import { NavbarComponent } from './HomePage/navbar/navbar.component';
import { DetailsComponent } from './HomePage/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    InternComponent,
    DepartmentComponent,
    DisplayComponent,
    DepartmentdisplayComponent,
    NavbarComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
