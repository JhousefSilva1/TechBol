import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmbajadorasComponent } from "./components/static/embajadoras/embajadoras.component";
import { ImpactoComponent } from "./components/static/impacto/impacto.component";
import { NosotrosComponent } from "./components/static/nosotros/nosotros.component";
import { PoliticasEnvioComponent } from "./components/static/politicas-envio/politicas-envio.component";
import { TerminosCondicionesComponent } from "./components/static/terminos-condiciones/terminos-condiciones.component";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
