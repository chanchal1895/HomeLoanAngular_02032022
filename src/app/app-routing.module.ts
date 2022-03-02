import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { CalculatorComponent } from './Components/calculator/calculator.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { LoanComponent } from './Components/loan/loan.component';

import { HomeLoanComponent } from './Components/home-loan/home-loan.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { Ng5SliderModule } from 'ng5-slider';
import { UserLoginComponent } from './Components/Login/user-login/user-login.component';
import { AdminLoginComponent } from './Components/Login/admin-login/admin-login.component';
import { AfterUserLoginComponent } from './Components/Login/after-user-login/after-user-login.component';
import { AfterAdminLoginComponent } from './Components/Login/after-admin-login/after-admin-login.component';

const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'contactUs', component: ContactUsComponent},
  {path: 'aboutUs', component: AboutUsComponent},
  {path: 'loan', component: LoanComponent},
  {path: 'calculator', component: CalculatorComponent},
  {path: 'homeloan', component:HomeLoanComponent },
  {path: 'registration', component:RegistrationComponent},
  {path: 'userLogin', component:UserLoginComponent},
  {path: 'adminLogin', component:AdminLoginComponent},
  {path: 'afterUserLogin', component:AfterUserLoginComponent},
  {path: 'afterAdminLogin', component:AfterAdminLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
