import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './account/login/login.component';
import { SignupComponent } from './account/signup/signup.component';
import { DepartmentComponent } from './departmentPage/department/department.component';
import { DepartmentdisplayComponent } from './departmentPage/departmentdisplay/departmentdisplay.component';
import { DetailsComponent } from './HomePage/details/details.component';
import { HomeComponent } from './HomePage/home/home.component';
import { NavbarComponent } from './HomePage/navbar/navbar.component';
import { DisplayComponent } from './internPage/display/display.component';
import { InternComponent } from './internPage/intern/intern.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'HomePage',component:HomeComponent},
  {path:'internPage',component:InternComponent},
  {path:'departmentPage',component:DepartmentComponent},
  {path:'display',component:DisplayComponent},
  {path:'departmentdisplay',component:DepartmentdisplayComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'',redirectTo:'HomePage', pathMatch: 'full' },
  {path: 'Details',component:DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
