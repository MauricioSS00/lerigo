import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-page/home-routing.module';

import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CardModule,
    InputTextModule,
  ]
})
export class HomeModule { }
