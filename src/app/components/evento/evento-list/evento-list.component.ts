import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MessageService } from 'primeng/api';
import { AppGlobals } from 'src/app/core/navbar/appGlobals';
import * as moment from 'moment';

import { EventoService } from '../evento.service';
import { EspacoService } from '../../espaco/espaco.service';

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
    private espacService: EspacoService,
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
  async detalhes(evt) {
    console.log(evt);
    this.eventoService.listarEventoId(evt.id)
      .then(async rs => {
        this.evento = await rs;
        if (this.evento.espaco && this.evento.espaco > 0) {
          this.evento.espaco = await this.espacService.listarEspacoID(this.evento.espaco);
        }
        this.showDetEvento = true;
      })
      .catch();
  }
}
