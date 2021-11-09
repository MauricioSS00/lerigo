import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



import { ContatoComponent } from './contato/contato.component';
import { AboutComponent } from './about/about.component';
import { PaginasRoutingModule } from './paginas-routing.module';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { OverlayPanelModule } from 'primeng/overlaypanel';



@NgModule({
  declarations: [
    ContatoComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    PaginasRoutingModule,
    FormsModule,

    InputTextModule,
    InputTextareaModule,
    ButtonModule,
    TooltipModule,
    OverlayPanelModule
  ]
})
export class PaginasModule { }
