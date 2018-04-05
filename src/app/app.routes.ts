import { Routes } from "@angular/router";
import { AppShellComponent } from "./views/app-shell/app-shell.component";
import { LoginViewComponent } from "./views/login-view/login-view.component";

export const APP_ROUTES: Routes = [
    { path: 'login', component: LoginViewComponent },
    { 
        path: 'main', 
        component: AppShellComponent, 
        children: [
            
        ] 
    },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];