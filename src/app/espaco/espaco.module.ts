import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { EspacoListComponent } from './espaco-list/espaco-list.component';
import { EspacoCadComponent } from './espaco-cad/espaco-cad.component';
import { EspacoRoutingModule } from './espaco-routing.module';

import { InputTextModule } from 'primeng/inputtext';
import {InputMaskModule} from 'primeng/inputmask';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {SelectButtonModule} from 'primeng/selectbutton';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {FileUploadModule} from 'primeng/fileupload';
import {ToastModule} from 'primeng/toast';

@NgModule({
  declarations: [
    EspacoCadComponent,
    EspacoListComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    EspacoRoutingModule,

    PasswordModule,
    FileUploadModule,
    HttpClientModule,
    InputTextareaModule,
    SelectButtonModule,
    InputMaskModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    ToastModule
  ]
})
export class EspacoModule { }
