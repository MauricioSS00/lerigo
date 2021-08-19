import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistaCadComponent } from './artista-cad/artista-cad.component';
import { ArtistaRoutingModule } from './artista-routing.module';



@NgModule({
  declarations: [
    ArtistaCadComponent
  ],
  imports: [
    CommonModule, ArtistaRoutingModule
    
  ]
})
export class ArtistaModule { }
