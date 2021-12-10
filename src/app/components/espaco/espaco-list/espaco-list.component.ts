import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MessageService } from 'primeng/api';

import { EspacoService } from '../espaco.service';

@Component({
  selector: 'app-espaco-list',
  templateUrl: './espaco-list.component.html',
  styleUrls: ['./espaco-list.component.scss'],
  providers: [MessageService]
})
export class EspacoListComponent implements OnInit {

  espacos: any = [];
  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];

  constructor(
    public espacoService: EspacoService,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
    this.carregarEspacos();
  }

  async carregarEspacos() {
    await this.espacoService.listarEspacos()
      .then(data => {
        this.espacos = data;
        this.espacos.forEach(e => {
          return e.images = e.fotosEspaco;
        });
      })
      .catch(error => {
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Falha ao carregar a lista de espaços!' });
      });
  }
}
