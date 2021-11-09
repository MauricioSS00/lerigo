import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';

import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';



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

registerLocaleData(ptBr);
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
    InputTextModule,
    ButtonModule,
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
    AppRoutingModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
