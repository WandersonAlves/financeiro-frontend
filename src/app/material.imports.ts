import { MatButtonModule, MatCheckboxModule, MatSidenavModule, MatIconModule, MatInputModule, MatFormFieldModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatSidenavModule, MatIconModule, MatInputModule, MatFormFieldModule],
    exports: [MatButtonModule, MatCheckboxModule, MatSidenavModule, MatIconModule, MatInputModule, MatFormFieldModule],
})
export class MaterialImports { }