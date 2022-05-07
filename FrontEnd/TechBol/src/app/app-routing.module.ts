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
import { StoreManagmentComponent } from './components/store-managment/store-managment.component';
import { ManagmentCategoriesComponent } from './components/store-managment/managment-categories/managment-categories.component';
import { ManagmentProductsComponent } from './components/store-managment/managment-products/managment-products.component';
import { ManagmentAdminsComponent } from './components/store-managment/managment-admins/managment-admins.component';
import { ManagmentSalesComponent } from './components/store-managment/managment-sales/managment-sales.component';
import { ManagmentStockComponent } from './components/store-managment/managment-stock/managment-stock.component';
import { CreateProductComponent } from './components/store-managment/managment-products/create-product/create-product.component';
import { CreateCategoryComponent } from './components/store-managment/managment-categories/create-category/create-category.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: '*', component: NavbarComponent},
  {path: '@', component: FooterComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'admin/Log-in',component: LogInAdminComponent},
  {path: 'admin/Sign-up', component: SignUpAdminComponent},//crear admin
  {path: 'admin/Sign-up-edit/:id', component: SignUpAdminComponent},//editar admin
  {path: 'customer',component:CustomerComponent},
  {path: 'customer/Log-In',component:LogInCustomerComponent},
  {path: 'customer/Sign-Up',component:SignUpCustomerComponent},
  {path: 'admin/Store-Managment', component: StoreManagmentComponent},
  {path: 'admin/managment-categories',component: ManagmentCategoriesComponent},
  {path: 'admin/managment-products', component: ManagmentProductsComponent},
  {path: 'admin/managment-admins',component: ManagmentAdminsComponent},
  {path: 'admin/managment-bills',component: ManagmentAdminsComponent},
  {path: 'admin/managment-sales', component: ManagmentSalesComponent},
  {path: 'admin/managment-stock', component: ManagmentStockComponent},
  {path: 'admin/managment-products/create-product',component: CreateProductComponent},
  {path: 'admin/managment-products/edit-product/:id',component: CreateProductComponent},
  {path: 'admin/managment-categories/create-category', component: CreateCategoryComponent},
  {path: 'customer/Catalogue',component: CatalogueComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
