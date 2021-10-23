import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioCadComponent } from './usuario-cad/usuario-cad.component';
import { UsuarioAreaComponent } from './usuario-area/usuario-area.component';

import { InputTextareaModule } from 'primeng/inputtextarea';
import { SelectButtonModule } from 'primeng/selectbutton';
import { InputMaskModule } from 'primeng/inputmask';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import {RadioButtonModule} from 'primeng/radiobutton';
import {CheckboxModule} from 'primeng/checkbox';
import { ToastModule } from 'primeng/toast';
import {TabViewModule} from 'primeng/tabview';
import {DialogModule} from 'primeng/dialog';
import { FileUploadModule } from 'primeng/fileupload';




@NgModule({
  declarations: [
    UsuarioCadComponent,
    UsuarioAreaComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,

    FormsModule,
    InputTextareaModule,
    SelectButtonModule,
    InputMaskModule,
    DropdownModule,
    InputTextModule,
    CalendarModule,
    RadioButtonModule,
    CheckboxModule,
    ToastModule,
    DialogModule,
    FileUploadModule,


    TabViewModule
  ]
})
export class UsuarioModule { }
