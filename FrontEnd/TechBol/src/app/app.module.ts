import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdminComponent } from './components/admin/admin.component';
import { LogInAdminComponent } from './components/admin/log-in-admin/log-in-admin.component';
import { SignUpAdminComponent } from './components/admin/sign-up-admin/sign-up-admin.component';
import { CustomerComponent } from './components/customer/customer.component';
import { LogInCustomerComponent } from './components/customer/log-in-customer/log-in-customer.component';
import { SignUpCustomerComponent } from './components/customer/sign-up-customer/sign-up-customer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    AdminComponent,
    LogInAdminComponent,
    SignUpAdminComponent,
    CustomerComponent,
    LogInCustomerComponent,
    SignUpCustomerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
