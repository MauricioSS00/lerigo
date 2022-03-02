import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MessageService } from 'primeng/api';
import { AppGlobals } from 'src/app/core/navbar/appGlobals';
import * as moment from 'moment';

import { EventoService } from '../evento.service';

@Component({
  selector: 'app-evento-list',
  templateUrl: './evento-list.component.html',
  styleUrls: ['./evento-list.component.scss'],
  providers: [MessageService]
})
export class EventoListComponent implements OnInit {

  eventos: any = [];
  evento: any;
  showDetEvento = false;
  products: any;

  constructor(
    private router: Router,
    private eventoService: EventoService,
    private messageService: MessageService,
    public appGlobals: AppGlobals
  ) { }

  ngOnInit(): void {
    this.listarEventos();
  }

  novoEvento() {
    this.router.navigate(["evento-cad"]);
  }

  async listarEventos() {
    let dataIni = moment().format();
    let dataFim = moment().add(30, 'y').format();

    await this.eventoService.listarEventos(dataIni, dataFim)
      .then(ev => {
        this.eventos = ev;
      })
      .catch(() => {
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Não foi possível carragar os eventos!' });
      });
  }
  detalhes(evt) {
    this.showDetEvento = true;
    this.evento = evt;
  }
}
