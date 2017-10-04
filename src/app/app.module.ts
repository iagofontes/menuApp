import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { GoogleComponentsModule } from './google.module/google.components.module';

import { MenuLateralComponent } from './menu-lateral/menulateral.component';
import { FormComponent } from './form/form.component';

// import { MdCheckboxModule } from "@angular/material";
// import { MatSidenavModule } from "@angular/material";

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuLateralComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    GoogleComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
