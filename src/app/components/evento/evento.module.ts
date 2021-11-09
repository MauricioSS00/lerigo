import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CardModule } from 'primeng/card';

import { EventoCadComponent } from './evento-cad/evento-cad.component';
import { EventoListComponent } from './evento-list/evento-list.component';
import { EventoRoutingModule } from './evento-routing.module';
import { ButtonModule } from 'primeng/button';
import {MatButtonModule} from '@angular/material/button';
import {InputTextModule} from 'primeng/inputtext';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {CalendarModule} from 'primeng/calendar';
import { InputMaskModule } from 'primeng/inputmask';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FileUploadModule } from 'primeng/fileupload';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    EventoCadComponent,
    EventoListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    EventoRoutingModule,

    CardModule,
    ButtonModule,
    MatButtonModule,
    InputTextModule,
    InputMaskModule,
    InputTextareaModule,
    AutoCompleteModule,
    CalendarModule,
    DropdownModule,
    FileUploadModule,
    TableModule
  ]
})
export class EventoModule { }
