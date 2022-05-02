import { SignUpAdminComponent } from './components/admin/sign-up-admin/sign-up-admin.component';
import { LogInAdminComponent } from './components/admin/log-in-admin/log-in-admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CustomerComponent } from './components/customer/customer.component';
import { LogInCustomerComponent } from './components/customer/log-in-customer/log-in-customer.component';
import { SignUpCustomerComponent } from './components/customer/sign-up-customer/sign-up-customer.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: '*', component: NavbarComponent},
  {path: '@', component: FooterComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'admin/Log-in',component: LogInAdminComponent},
  {path: 'admin/Sign-up', component: SignUpAdminComponent},
  {path: 'customer',component:CustomerComponent},
  {path: 'customer/Log-In',component:LogInCustomerComponent},
  {path: 'customer/Sign-Up',component:SignUpCustomerComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
