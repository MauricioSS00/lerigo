import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventoCadComponent } from './evento-cad/evento-cad.component';
import { EventoListComponent } from './evento-list/evento-list.component';
import { EventoRoutingModule } from './evento-routing.module';



@NgModule({
  declarations: [
    EventoCadComponent,
    EventoListComponent
  ],
  imports: [
    CommonModule,
    EventoRoutingModule
  ]
})
export class EventoModule { }
