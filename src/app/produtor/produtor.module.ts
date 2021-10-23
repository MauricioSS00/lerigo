import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutorListComponent } from './produtor-list/produtor-list.component';
import { ProdutorRoutingModule } from './produtor-routing.module';
import { ShareModule } from '../share/share.module';



@NgModule({
  declarations: [
    ProdutorListComponent,
  ],
  imports: [
    CommonModule,
    ProdutorRoutingModule,

    ShareModule
  ]
})
export class ProdutorModule { }
