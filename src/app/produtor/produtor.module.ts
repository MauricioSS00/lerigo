import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutorListComponent } from './produtor-list/produtor-list.component';
import { ProdutorCadComponent } from './produtor-cad/produtor-cad.component';
import { ProdutorRoutingModule } from './produtor-routing.module';



@NgModule({
  declarations: [
    ProdutorListComponent,
    ProdutorCadComponent
  ],
  imports: [
    CommonModule,
    ProdutorRoutingModule,
  ]
})
export class ProdutorModule { }
