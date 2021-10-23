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
import { HomeModule } from './home/home.module';
import { NavbarComponent } from './core/navbar/navbar.component';
import { NavbarModule } from './core/navbar/navbar.module';
import { UsuarioModule } from './usuario/usuario.module';
import { ArtistaModule } from './artista/artista.module';
import { EspacoModule } from './espaco/espaco.module';
import { PaginasModule } from './paginas/paginas.module';
import { BlogModule } from './blog/blog.module';
import { ProdutorModule } from './produtor/produtor.module';
import { EventoModule } from './evento/evento.module';

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
