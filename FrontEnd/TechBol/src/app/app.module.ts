import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
//componentes
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
import { ManagmentCategoriesComponent } from './components/store-managment/managment-categories/managment-categories.component';
import { ManagmentProductsComponent } from './components/store-managment/managment-products/managment-products.component';
import { ManagmentAdminsComponent } from './components/store-managment/managment-admins/managment-admins.component';
import { ManagmentBillsComponent } from './components/store-managment/managment-bills/managment-bills.component';
import { ManagmentSalesComponent } from './components/store-managment/managment-sales/managment-sales.component';
import { ManagmentStockComponent } from './components/store-managment/managment-stock/managment-stock.component';
import { CreateProductComponent } from './components/store-managment/managment-products/create-product/create-product.component';


import { environment } from 'src/environments/environment';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';

import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { providePerformance,getPerformance } from '@angular/fire/performance';
import { provideRemoteConfig,getRemoteConfig } from '@angular/fire/remote-config';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';


import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreManagmentComponent } from './components/store-managment/store-managment.component';
import { CreateCategoryComponent } from './components/store-managment/managment-categories/create-category/create-category.component';



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
    StoreManagmentComponent,
    ManagmentCategoriesComponent,
    ManagmentProductsComponent,
    ManagmentAdminsComponent,
    ManagmentBillsComponent,
    ManagmentSalesComponent,
    ManagmentStockComponent,
    CreateProductComponent,
    CreateCategoryComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    AngularFireAuthModule,
    

    
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    provideMessaging(() => getMessaging()),
    providePerformance(() => getPerformance()),
    provideRemoteConfig(() => getRemoteConfig()),
    provideStorage(() => getStorage()),
  ],
  providers: [
    ScreenTrackingService,UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
