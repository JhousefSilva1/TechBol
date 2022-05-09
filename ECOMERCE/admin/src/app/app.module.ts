import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { routing } from "./app.routing";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NgbModule,NgbPaginationModule  } from "@ng-bootstrap/ng-bootstrap";
import { NgxTinymceModule } from 'ngx-tinymce';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ConfigComponent } from './components/config/config.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { ProductosComponent } from './components/productos/productos.component';
import { CreateProductoComponent } from './components/productos/create-producto/create-producto.component';
import { EditProductoComponent } from './components/productos/edit-producto/edit-producto.component';
import { GaleriaProductoComponent } from './components/productos/galeria-producto/galeria-producto.component';
import { IndexProductoComponent } from './components/productos/index-producto/index-producto.component';
import { InventarioProductoComponent } from './components/productos/inventario-producto/inventario-producto.component';
import { VariedadesProductoComponent } from './components/productos/variedades-producto/variedades-producto.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { IndexClientesComponent } from './components/clientes/index-clientes/index-clientes.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { CuponesComponent } from './components/cupones/cupones.component';
import { CreateCuponComponent } from './components/cupones/create-cupon/create-cupon.component';
import { EditCuponComponent } from './components/cupones/edit-cupon/edit-cupon.component';
import { IndexCuponComponent } from './components/cupones/index-cupon/index-cupon.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { CreateVentasComponent } from './components/ventas/create-ventas/create-ventas.component';
import { IndexVentasComponent } from './components/ventas/index-ventas/index-ventas.component';
import { ShowVentasComponent } from './components/ventas/show-ventas/show-ventas.component';




@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ConfigComponent,
    SidebarComponent,
    TopnavComponent,
    ProductosComponent,
    CreateProductoComponent,
    EditProductoComponent,
    GaleriaProductoComponent,
    IndexProductoComponent,
    InventarioProductoComponent,
    VariedadesProductoComponent,
    ClientesComponent,
    IndexClientesComponent,
    DashboardComponent,
    LoginComponent,
    CuponesComponent,
    CreateCuponComponent,
    EditCuponComponent,
    IndexCuponComponent,
    VentasComponent,
    CreateVentasComponent,
    IndexVentasComponent,
    ShowVentasComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    FormsModule,
    HttpClientModule,
    NgbPaginationModule,
    NgxTinymceModule.forRoot({
      baseURL: '../../../assets/tinymce/',
    }),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
