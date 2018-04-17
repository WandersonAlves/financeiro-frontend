import { Routes } from "@angular/router";
import { AppShellComponent } from "./views/app-shell/app-shell.component";
import { LoginViewComponent } from "./views/login-view/login-view.component";
import { UnidadeViewComponent } from "./views/unidade-view/unidade-view.component";
import { UnidadeCadastroViewComponent } from "./views/unidade-cadastro-view/unidade-cadastro-view.component";
import { UsuarioViewComponent } from "./views/usuario-view/usuario-view.component";
import { BancoCadastroViewComponent } from "./views/banco-cadastro-view/banco-cadastro-view.component";
import { AlunoCadastroViewComponent } from "./views/aluno-cadastro-view/aluno-cadastro-view.component";

export const APP_ROUTES: Routes = [
    { path: 'login', component: LoginViewComponent },
    { 
        path: 'main', 
        component: AppShellComponent, 
        children: [
            { path: 'unidade', component: UnidadeViewComponent },
            { path: 'unidade-cadastro', component: UnidadeCadastroViewComponent },
            { path: 'usuario', component: UsuarioViewComponent },
            { path: 'banco-cadastro',  component: BancoCadastroViewComponent},
            { path: 'aluno-cadastro',  component: AlunoCadastroViewComponent}
        ] 
    },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];