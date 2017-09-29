import { MdCheckboxModule } from "@angular/material";
import { MatSidenavModule } from "@angular/material";
import { MatListModule } from '@angular/material';
import { MatIconModule } from '@angular/material';

import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [
    MdCheckboxModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule
  ],
  exports:[    
    MdCheckboxModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule
  ],
  providers: [],
})
export class GoogleComponentsModule { }