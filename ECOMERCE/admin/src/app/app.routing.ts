import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { AuthGuard } from "../app/guards/auth.guard";

import { IndexProductoComponent } from "./components/productos/index-producto/index-producto.component";
import { CreateProductoComponent } from "./components/productos/create-producto/create-producto.component";
import { EditProductoComponent } from "./components/productos/edit-producto/edit-producto.component";
import { VariedadesProductoComponent } from "./components/productos/variedades-producto/variedades-producto.component";
import { InventarioProductoComponent } from "./components/productos/inventario-producto/inventario-producto.component";
import { GaleriaProductoComponent } from "./components/productos/galeria-producto/galeria-producto.component";

//import { AuthGuard } from "../app/guards/auth.guard";



import { ConfigComponent } from "./components/config/config.component";

const appRoute : Routes = [

    //{path: 'configuraciones', component: ConfigComponent, canActivate:[AuthGuard]},
    {path: '', redirectTo: 'login', pathMatch : 'full'},


    
    
    
    {path: 'productos', component: IndexProductoComponent, canActivate:[AuthGuard]},
    {path: 'productos/create', component: CreateProductoComponent, canActivate:[AuthGuard]},
    {path: 'productos/edit/:id', component: EditProductoComponent, canActivate:[AuthGuard]},
    {path: 'productos/variedades/:id', component: VariedadesProductoComponent, canActivate:[AuthGuard]},
    {path: 'productos/inventario/:id', component: InventarioProductoComponent, canActivate:[AuthGuard]},
    {path: 'productos/galeria/:id', component: GaleriaProductoComponent, canActivate:[AuthGuard]},
    {path: 'configuraciones', component: ConfigComponent, canActivate:[AuthGuard]},
    
]


export const appRoutingProviders : any[] = [];
export const routing : ModuleWithProviders<any> =  RouterModule.forRoot(appRoute);