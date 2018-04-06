import { MatButtonModule, MatCheckboxModule, MatSidenavModule, MatIconModule, MatRippleModule, MatInputModule, MatFormFieldModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatSidenavModule, MatIconModule, MatRippleModule, MatInputModule, MatFormFieldModule],
    exports: [MatButtonModule, MatCheckboxModule, MatSidenavModule, MatIconModule, MatRippleModule, MatInputModule, MatFormFieldModule],
})
export class MaterialImports { }