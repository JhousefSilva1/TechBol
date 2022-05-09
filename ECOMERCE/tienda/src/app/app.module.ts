import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { routing } from "./app.routing";
import { HttpClientModule } from "@angular/common/http";
import { NgbModule,NgbPaginationModule  } from "@ng-bootstrap/ng-bootstrap";
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
//import { RatingModule } from 'ng-starrating';



import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { LoginComponent } from './components/login/login.component';
import { ContactoComponent } from './components/static/contacto/contacto.component';
import { EmbajadorasComponent } from './components/static/embajadoras/embajadoras.component';
import { ImpactoComponent } from './components/static/impacto/impacto.component';
import { NosotrosComponent } from './components/static/nosotros/nosotros.component';
import { PoliticasEnvioComponent } from './components/static/politicas-envio/politicas-envio.component';
import { TerminosCondicionesComponent } from './components/static/terminos-condiciones/terminos-condiciones.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    InicioComponent,
    NotfoundComponent,
    LoginComponent,
    ContactoComponent,
    EmbajadorasComponent,
    ImpactoComponent,
    NosotrosComponent,
    PoliticasEnvioComponent,
    TerminosCondicionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    FormsModule,
    HttpClientModule,
    NgbPaginationModule,
    //RatingModule,
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