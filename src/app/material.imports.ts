import { MatButtonModule, MatCheckboxModule, MatSidenavModule, MatIconModule, MatInputModule, 
         MatFormFieldModule, MatDialogModule, MatSelectModule, MatExpansionModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatSidenavModule, MatIconModule, MatInputModule, 
             MatFormFieldModule, MatDialogModule, MatSelectModule, MatExpansionModule],
    exports: [MatButtonModule, MatCheckboxModule, MatSidenavModule, MatIconModule, MatInputModule, 
             MatFormFieldModule, MatDialogModule, MatSelectModule, MatExpansionModule],
})
export class MaterialImports { }