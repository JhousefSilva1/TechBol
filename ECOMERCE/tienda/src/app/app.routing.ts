import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { AuthGuard } from "../app/guards/auth.guard";

const appRoute : Routes = [
    
]
   

export const appRoutingPorviders : any[]=[];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoute, { onSameUrlNavigation: 'reload' });