import { AppShellComponent } from "./views/app-shell/app-shell.component";
import { LoginViewComponent } from "./views/login-view/login-view.component";
import { SidenavBodyComponent } from "./components/sidenav-body/sidenav-body.component";
import { SidenavUserComponent } from "./components/sidenav-user/sidenav-user.component";
import { SidenavBannerComponent } from "./components/sidenav-banner/sidenav-banner.component";
import { SidenavLogoutComponent } from "./components/sidenav-logout/sidenav-logout.component";
import { SidenavMenuComponent } from "./components/sidenav-menu/sidenav-menu.component";
import { FlatButtonComponent } from "./components/flat-button/flat-button.component";
import { UnidadeViewComponent } from "./views/unidade-view/unidade-view.component";
import { UnidadeCardComponent } from "./components/unidade-card/unidade-card.component";
import { SearchBarComponent } from "./components/search-bar/search-bar.component";
import { FabButtonComponent } from "./components/fab-button/fab-button.component";
import { UnidadeCadastroViewComponent } from "./views/unidade-cadastro-view/unidade-cadastro-view.component";
import { UsuarioViewComponent } from "./views/usuario-view/usuario-view.component";
import { UsuarioCardComponent } from "./components/usuario-card/usuario-card.component";
import { DialogAlertComponent } from "./components/dialog-alert/dialog-alert.component";
import { BancoCadastroViewComponent } from "./views/banco-cadastro-view/banco-cadastro-view.component";
import { BancoViewComponent } from "./views/banco-view/banco-view.component";
import { BancoCardComponent } from "./components/banco-card/banco-card.component";
import { ColaboradorCadastroViewComponent } from "./views/colaborador-cadastro-view/colaborador-cadastro-view.component";
import { ColaboradorViewComponent } from "./views/colaborador-view/colaborador-view.component";
import { UsuarioCadastroViewComponent } from "./views/usuario-cadastro-view/usuario-cadastro-view.component";
import { MovimentoInicialViewComponent } from "./views/movimento-inicial-view/movimento-inicial-view.component";
import { RecebimentosViewComponent } from "./views/recebimentos-view/recebimentos-view.component";
import { RecebimentosAlunosPropriosViewComponent } from "./views/recebimentos-alunos-proprios-view/recebimentos-alunos-proprios-view.component";
import { RecebimentosAlunosFiliadasViewComponent } from "./views/recebimentos-alunos-filiadas-view/recebimentos-alunos-filiadas-view.component";
import { RecebimentosDiversosComponent } from "./views/recebimentos-diversos/recebimentos-diversos.component";

export const VIEWS_IMPORTS: Array<any> = [
    AppShellComponent,
    LoginViewComponent,
    UnidadeViewComponent,
    UnidadeCadastroViewComponent,
    UsuarioViewComponent,
    BancoCadastroViewComponent,
    ColaboradorCadastroViewComponent,
    BancoViewComponent,
    ColaboradorViewComponent,
    UsuarioCadastroViewComponent,
    MovimentoInicialViewComponent,
    RecebimentosViewComponent,
    RecebimentosAlunosPropriosViewComponent,
    RecebimentosAlunosFiliadasViewComponent,
    RecebimentosDiversosComponent,
];

export const COMPONENTS_IMPORTS: Array<any> = [
    SidenavBodyComponent,
    SidenavUserComponent,
    SidenavBannerComponent,
    SidenavLogoutComponent,
    SidenavMenuComponent,
    FlatButtonComponent,
    UnidadeCardComponent,
    SearchBarComponent,
    FabButtonComponent,
    UsuarioCardComponent,
    DialogAlertComponent,
    BancoCardComponent,
    ...VIEWS_IMPORTS,
];
