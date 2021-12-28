import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ArtistaService } from '../artista.service';

@Component({
  selector: 'app-artista-list',
  templateUrl: './artista-list.component.html',
  styleUrls: ['./artista-list.component.scss'],
  providers: [MessageService]
})
export class ArtistaListComponent implements OnInit {

  artistas: any = [];
  constructor(
    public artistaService: ArtistaService,
    public messageService: MessageService,
  ) { }

  ngOnInit(): void {
    this.listarArtistas('');
  }

  async listarArtistas(filtro: string) {
    await this.artistaService.listarArtistas(filtro)
      .then(data => {
        this.artistas = data;
        this.artistas.forEach(e => {
          return e.images = e.fotosEspaco;
        });
      })
      .catch(error => {
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Não foi possível carregar os dados!' });
      });
  }
}
