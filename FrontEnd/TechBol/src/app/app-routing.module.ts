import { SignUpAdminComponent } from './components/admin/sign-up-admin/sign-up-admin.component';
import { LogInAdminComponent } from './components/admin/log-in-admin/log-in-admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { NavbarComponent } from './components/navbar/navbar.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: '*', component: NavbarComponent},
  {path: '@', component: FooterComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'adminLogIn',component: LogInAdminComponent},
  {path: 'adminSingUp', component: SignUpAdminComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
