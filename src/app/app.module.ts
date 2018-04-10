import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppComponent } from './app.component';
import { MaterialImports } from './material.imports';
import { RouterModule } from '@angular/router';
// Imported because mat-icon uses it to get icons
import { HttpClientModule } from '@angular/common/http';

import { COMPONENTS_IMPORTS } from './components.imports';
import { APP_ROUTES } from './app.routes';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    ...COMPONENTS_IMPORTS,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialImports,
    RouterModule.forRoot(APP_ROUTES),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
