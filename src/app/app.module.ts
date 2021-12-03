import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { FormsModule } from '@angular/forms';

import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import {DialogModule} from 'primeng/dialog';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './components/home/home.module';
import { NavbarComponent } from './core/navbar/navbar.component';
import { NavbarModule } from './core/navbar/navbar.module';
import { UsuarioModule } from './components/usuario/usuario.module';
import { ArtistaModule } from './components/artista/artista.module';
import { EspacoModule } from './components/espaco/espaco.module';
import { PaginasModule } from './components/paginas/paginas.module';
import { BlogModule } from './components/blog/blog.module';
import { ProdutorModule } from './components/produtor/produtor.module';
import { EventoModule } from './components/evento/evento.module';
import { PasswordModule } from 'primeng/password';

registerLocaleData(ptBr);
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
    PasswordModule,
    ButtonModule,
    DialogModule,
    OverlayPanelModule,
    TieredMenuModule,
    HomeModule,
    UsuarioModule,
    ArtistaModule,
    EspacoModule,
    ProdutorModule,
    EventoModule,
    PaginasModule,
    BlogModule,
    AppRoutingModule
    
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
