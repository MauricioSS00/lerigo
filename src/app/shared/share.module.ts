import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule } from 'primeng/card';
import { GalleriaModule } from 'primeng/galleria';
import { ButtonModule } from 'primeng/button';

import { ListagemMidiaComponent } from './listagem-midia/listagem-midia.component';


@NgModule({
  declarations: [
    ListagemMidiaComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    GalleriaModule,
    ButtonModule,

  ], 
  exports: [ListagemMidiaComponent]
})
export class ShareModule { }
