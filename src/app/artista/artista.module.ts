import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistaCadComponent } from './artista-cad/artista-cad.component';
import { ArtistaRoutingModule } from './artista-routing.module';
import { ArtistaListComponent } from './artista-list/artista-list.component';



@NgModule({
  declarations: [
    ArtistaCadComponent,
    ArtistaListComponent
  ],
  imports: [
    CommonModule, ArtistaRoutingModule
    
  ]
})
export class ArtistaModule { }
