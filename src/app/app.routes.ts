import { Routes } from '@angular/router';
import { AppShellComponent } from './views/app-shell/app-shell.component';
import { LoginViewComponent } from './views/login-view/login-view.component';
import { UnidadeViewComponent } from './views/unidade-view/unidade-view.component';
import { UnidadeCadastroViewComponent } from './views/unidade-cadastro-view/unidade-cadastro-view.component';
import { UsuarioViewComponent } from './views/usuario-view/usuario-view.component';
import { BancoCadastroViewComponent } from './views/banco-cadastro-view/banco-cadastro-view.component';
import { BancoViewComponent } from './views/banco-view/banco-view.component';
import { ColaboradorCadastroViewComponent } from './views/colaborador-cadastro-view/colaborador-cadastro-view.component';
import { ColaboradorViewComponent } from './views/colaborador-view/colaborador-view.component';
import { UsuarioCadastroViewComponent } from './views/usuario-cadastro-view/usuario-cadastro-view.component';
import { MovimentoInicialViewComponent } from './views/movimento-inicial-view/movimento-inicial-view.component';
import { RecebimentosViewComponent } from './views/recebimentos-view/recebimentos-view.component';
import { RecebimentosAlunosPropriosViewComponent } from './views/recebimentos-alunos-proprios-view/recebimentos-alunos-proprios-view.component';
import { RecebimentosAlunosFiliadasViewComponent } from './views/recebimentos-alunos-filiadas-view/recebimentos-alunos-filiadas-view.component';
import { RecebimentosDiversosComponent } from './views/recebimentos-diversos/recebimentos-diversos.component';

export const APP_ROUTES: Routes = [
    { path: 'login', component: LoginViewComponent },
    {
        path: 'main',
        component: AppShellComponent,
        children: [
            { path: 'unidade', component: UnidadeViewComponent },
            { path: 'unidade-cadastro', component: UnidadeCadastroViewComponent },
            { path: 'usuario', component: UsuarioViewComponent },
            { path: 'usuario-cadastro', component: UsuarioCadastroViewComponent },
            { path: 'banco', component: BancoViewComponent },
            { path: 'banco-cadastro', component: BancoCadastroViewComponent },
            { path: 'colaborador', component: ColaboradorViewComponent },
            { path: 'colaborador-cadastro',  component: ColaboradorCadastroViewComponent },
            { path: 'movimento-inicial', component: MovimentoInicialViewComponent },
            {
                path: 'recebimentos',
                component: RecebimentosViewComponent,
                children: [
                    { path: 'aluno-proprio', component: RecebimentosAlunosPropriosViewComponent },
                    { path: 'aluno-filiado', component: RecebimentosAlunosFiliadasViewComponent },
                    { path: 'diversos', component: RecebimentosDiversosComponent },
                ]
            },
        ]
    },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];
