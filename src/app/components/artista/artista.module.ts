import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistaRoutingModule } from './artista-routing.module';
import { ArtistaListComponent } from './artista-list/artista-list.component';
import { ShareModule } from '../../shared/share.module';



@NgModule({
  declarations: [
    ArtistaListComponent
  ],
  imports: [
    CommonModule, 
    ArtistaRoutingModule,
    
    ShareModule
  ]
})
export class ArtistaModule { }
