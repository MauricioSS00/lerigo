import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';

import * as moment from 'moment';
import { MessageService } from 'primeng/api';

import { UsuarioService } from 'src/app/components/usuario/usuario.service';
import { EventoService } from '../../evento/evento.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  providers: [MessageService],
})
export class HomePageComponent implements OnInit {

  eventos: any = [];
  responsiveOptions = [];
  user: any = [];
  value4: string;

  constructor(
    private router: Router,
    private usuarioService: UsuarioService,
    public msgService: MessageService,
    private eventoService: EventoService
  ) {
    this.responsiveOptions = [
      {
        breakpoint: '1750px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '1086px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '750px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  ngOnInit(): void {
    this.listarEventos();
  }

  gravar(ngForm: NgForm) {
    this.usuarioService.cadRapido(this.user)
      .then(rs => {
        this.user.id = rs;
        this.usuarioService.usuario = this.user;
        this.router.navigate(['usuario-cad']);
      })
      .catch(er => {
        this.msgService.add({ severity: 'error', summary: 'Erro', detail: 'Não foi possível efetuar seu cadastro, tente novamente mais tarde!' });
      });
  }

  async listarEventos() {
    let dataIni = moment().format();
    let dataFim = moment().add(15, 'd').format();

    await this.eventoService.listarEventos(dataIni, dataFim)
      .then(ev => {
        this.eventos = ev;
      })
      .catch(() => {
        this.msgService.add({ severity: 'error', summary: 'Erro', detail: 'Não foi possível carragar os eventos!' });
      });
  }

  linkEvento() {
    this.router.navigate(['evento-list']);
  }

}
