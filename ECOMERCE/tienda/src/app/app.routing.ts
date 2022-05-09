import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { AuthGuard } from "../app/guards/auth.guard";


import { InicioComponent } from "./components/inicio/inicio.component";
import { LoginComponent } from "./components/login/login.component";





import { EmbajadorasComponent } from "./components/static/embajadoras/embajadoras.component";
import { ImpactoComponent } from "./components/static/impacto/impacto.component";
import { NosotrosComponent } from "./components/static/nosotros/nosotros.component";
import { PoliticasEnvioComponent } from "./components/static/politicas-envio/politicas-envio.component";
import { TerminosCondicionesComponent } from "./components/static/terminos-condiciones/terminos-condiciones.component";
import { ContactoComponent } from "./components/static/contacto/contacto.component";
import { NotfoundComponent } from "./components/notfound/notfound.component";
//import { AuthGuard } from "../app/guards/auth.guard";


const appRoute : Routes = [
    {path: '', component: InicioComponent},
    {path: 'login', component: LoginComponent},










    {path: 'contacto', component: ContactoComponent},
    {path: 'embajadoras', component: EmbajadorasComponent},
    {path: 'impacto-social', component: ImpactoComponent},
    {path: 'nosotros', component: NosotrosComponent},
    {path: 'politicas-envio', component: PoliticasEnvioComponent},
    {path: 'terminos-condiciones', component: TerminosCondicionesComponent},
    {path: '**', component: NotfoundComponent}

]
   

export const appRoutingPorviders : any[]=[];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoute, { onSameUrlNavigation: 'reload' });