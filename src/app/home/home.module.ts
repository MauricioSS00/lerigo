import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-page/home-routing.module';
import { HomePageComponent } from './home-page/home-page.component';

import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { MessageModule } from 'primeng/message';

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HomeRoutingModule,

    InputTextModule,
    PasswordModule,
    InputTextModule,
    ButtonModule,
    TabViewModule,
    CardModule,
    CarouselModule,
    PasswordModule,
    MessageModule,
  ]
})
export class HomeModule { }
