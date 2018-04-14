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
import { DialogAlertComponent } from "./components/dialog-alert/dialog-alert.component";
import { BancoCadastroViewComponent } from "./views/banco-cadastro-view/banco-cadastro-view.component";

export const VIEWS_IMPORTS: Array<any> = [
    AppShellComponent,
    LoginViewComponent,
    UnidadeViewComponent,
    UnidadeCadastroViewComponent,
    BancoCadastroViewComponent
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
    DialogAlertComponent,
    ...VIEWS_IMPORTS    
];
