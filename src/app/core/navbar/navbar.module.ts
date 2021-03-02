import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { InputTextModule } from 'primeng/inputtext';
import {TabViewModule} from 'primeng/tabview';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MenubarModule,
    MenuModule,
    InputTextModule,
    TabViewModule

  ]
})
export class NavbarModule { }
