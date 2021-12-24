import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { PaginasService } from '../paginas.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  providers: [MessageService]

})
export class AboutComponent implements OnInit {

  equipe: any = [];

  constructor(
    private pagService: PaginasService,
    private messageService: MessageService,

  ) { }

  ngOnInit(): void {
    this.listarColaboladores();
  }

  async listarColaboladores() {
    await this.pagService.listarColaboradores()
      .then(rs => {
        this.equipe = rs;
      })
      .catch(error => this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Não foi possível carregar os dados!' }));

  }

}
