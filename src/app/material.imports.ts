import { MatButtonModule, MatCheckboxModule, MatSidenavModule, MatIconModule, MatRippleModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatSidenavModule, MatIconModule, MatRippleModule],
    exports: [MatButtonModule, MatCheckboxModule, MatSidenavModule, MatIconModule, MatRippleModule],
})
export class MaterialImports { }