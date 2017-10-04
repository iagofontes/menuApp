import { MdCheckboxModule } from "@angular/material";
import { MatSidenavModule } from "@angular/material";
import { MatListModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';

import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [
    MdCheckboxModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule
  ],
  exports:[    
    MdCheckboxModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
})
export class GoogleComponentsModule { }