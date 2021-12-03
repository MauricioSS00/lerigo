import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { InputTextModule } from 'primeng/inputtext';
import {TabViewModule} from 'primeng/tabview';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {ToastModule} from 'primeng/toast';
import { ButtonModule } from 'primeng/button';

import { ShareModule } from 'src/app/shared/share.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MenubarModule,
    MenuModule,
    InputTextModule,
    TabViewModule,
    OverlayPanelModule,
    ToastModule,
    ButtonModule,
    
  ]
})
export class NavbarModule { }
