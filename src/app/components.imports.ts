import { AppShellComponent } from "./views/app-shell/app-shell.component";
import { LoginViewComponent } from "./views/login-view/login-view.component";
import { SidenavBodyComponent } from "./components/sidenav-body/sidenav-body.component";
import { SidenavUserComponent } from "./components/sidenav-user/sidenav-user.component";
import { SidenavBannerComponent } from "./components/sidenav-banner/sidenav-banner.component";
import { SidenavLogoutComponent } from "./components/sidenav-logout/sidenav-logout.component";
import { SidenavMenuComponent } from "./components/sidenav-menu/sidenav-menu.component";

export const COMPONENTS_IMPORTS: Array<any> = [
    AppShellComponent,
    LoginViewComponent,
    SidenavBodyComponent,
    SidenavUserComponent,
    SidenavBannerComponent,
    SidenavLogoutComponent,
    SidenavMenuComponent,
]