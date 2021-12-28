import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ProdutorService } from '../produtor.service';

@Component({
  selector: 'app-produtor-list',
  templateUrl: './produtor-list.component.html',
  styleUrls: ['./produtor-list.component.scss'],
  providers: [MessageService]

})
export class ProdutorListComponent implements OnInit {

  produtores: any = [];

  constructor(
    public prodService: ProdutorService,
    public messageService: MessageService,
  ) { }


  ngOnInit(): void {
    this.listarProdutores('');
  }

  async listarProdutores(filtro: string) {
    await this.prodService.listar(filtro)
      .then(data => {
        this.produtores = data;
        this.produtores.forEach(e => {
          return e.images = e.fotosEspaco;
        });
      })
      .catch(error => {
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Não foi possível carregar os dados!' });
      });
  }

}
