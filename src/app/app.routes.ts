import { Routes } from "@angular/router";
import { AppShellComponent } from "./views/app-shell/app-shell.component";

export const APP_ROUTES: Routes = [
    { 
        path: 'main', 
        component: AppShellComponent, 
        children: [
            
        ] 
    },
    { path: '', redirectTo: '/main', pathMatch: 'full' }
];