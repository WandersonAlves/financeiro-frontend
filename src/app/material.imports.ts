import { MatButtonModule, MatCheckboxModule, MatSidenavModule, MatIconModule, MatInputModule, MatFormFieldModule, MatDialogModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatSidenavModule, MatIconModule, MatInputModule, MatFormFieldModule, MatDialogModule],
    exports: [MatButtonModule, MatCheckboxModule, MatSidenavModule, MatIconModule, MatInputModule, MatFormFieldModule, MatDialogModule],
})
export class MaterialImports { }