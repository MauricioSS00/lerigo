import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { NavbarComponent } from './core/navbar/navbar.component';
import { NavbarModule } from './core/navbar/navbar.module';
import { UsuarioModule } from './usuario/usuario.module';
import { ArtistaModule } from './artista/artista.module';
import { EspacoModule } from './espaco/espaco.module';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    NavbarModule,
    MenubarModule,
    MenuModule,
    HomeModule,
    UsuarioModule,
    ArtistaModule,
    EspacoModule,
    AppRoutingModule,
  ],
  providers: [{provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
