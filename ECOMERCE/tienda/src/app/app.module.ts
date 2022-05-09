import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { routing } from "./app.routing";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { InicioComponent } from './components/inicio/inicio.component';
import { NavComponent } from './components/nav/nav.component';
import { NgbModule,NgbPaginationModule  } from "@ng-bootstrap/ng-bootstrap";

//Translation
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { CuentaComponent } from './components/perfil/cuenta/cuenta.component';
import { DireccionesComponent } from './components/perfil/direcciones/direcciones.component';
import { DpedidosComponent } from './components/perfil/dpedidos/dpedidos.component';
import { RatingModule } from 'ng-starrating';
import { EmbajadorasComponent } from './components/static/embajadoras/embajadoras.component';
import { ImpactoComponent } from './components/static/impacto/impacto.component';
import { NosotrosComponent } from './components/static/nosotros/nosotros.component';
import { PoliticasEnvioComponent } from './components/static/politicas-envio/politicas-envio.component';
import { TerminosCondicionesComponent } from './components/static/terminos-condiciones/terminos-condiciones.component';
import { ContactoComponent } from './components/static/contacto/contacto.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { IndexProductoComponent } from './components/productos/index-producto/index-producto.component';
import { ShowProductoComponent } from './components/productos/show-producto/show-producto.component';
import { EditProductoComponent } from './components/productos/edit-producto/edit-producto.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavComponent,
    FooterComponent,
    LoginComponent,
    CuentaComponent,
    DireccionesComponent,
    DpedidosComponent,
    EmbajadorasComponent,
    ImpactoComponent,
    NosotrosComponent,
    PoliticasEnvioComponent,
    TerminosCondicionesComponent,
    ContactoComponent,
    NotfoundComponent,
   
    IndexProductoComponent,
    ShowProductoComponent,
    EditProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    FormsModule,
    HttpClientModule,
    NgbPaginationModule,
    RatingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [ HttpClient ]
      }
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }