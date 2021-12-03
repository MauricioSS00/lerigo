import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AppGlobals } from 'src/app/core/navbar/appGlobals';

import { EventoService } from '../evento.service';

@Component({
  selector: 'app-evento-list',
  templateUrl: './evento-list.component.html',
  styleUrls: ['./evento-list.component.scss'],
  providers: [MessageService]
})
export class EventoListComponent implements OnInit {

  eventos: any = [];

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

  async listarEventos(){
    await this.eventoService.listarEventos()
      .then(ev => {
        this.eventos = ev;
      })
      .catch(() => {
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Não foi possível carragar os eventos!' });
      });
  }

}
