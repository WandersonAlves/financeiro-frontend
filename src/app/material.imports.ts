import { MatButtonModule, MatCheckboxModule, MatSidenavModule, MatIconModule, MatInputModule, MatFormFieldModule, MatDialogModule, MatSelectModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatSidenavModule, MatIconModule, MatInputModule, MatFormFieldModule, MatDialogModule, MatSelectModule],
    exports: [MatButtonModule, MatCheckboxModule, MatSidenavModule, MatIconModule, MatInputModule, MatFormFieldModule, MatDialogModule, MatSelectModule],
})
export class MaterialImports { }