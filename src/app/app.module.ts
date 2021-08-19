import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { NavbarComponent } from './core/navbar/navbar.component';
import { NavbarModule } from './core/navbar/navbar.module';
import { UsuarioModule } from './usuario/usuario.module';
import { ArtistaModule } from './atista/artista.module';
import { EspacoModule } from './espaco/espaco.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,

    NavbarModule,
    MenubarModule,
    MenuModule,
    InputTextModule,
    ButtonModule,
    TabViewModule,

    HomeModule,
    UsuarioModule,
    ArtistaModule,
    EspacoModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
