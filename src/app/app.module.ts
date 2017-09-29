import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { GoogleComponentsModule } from './google.module/google.components.module';

import { MenuLateralComponent } from './menu-lateral/menulateral.component';

// import { MdCheckboxModule } from "@angular/material";
// import { MatSidenavModule } from "@angular/material";

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuLateralComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    GoogleComponentsModule
    // MdCheckboxModule,
    // MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
