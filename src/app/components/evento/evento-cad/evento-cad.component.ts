import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

import { FileUpload } from 'primeng/fileupload';
import { ArtistaService } from '../../artista/artista.service';
import { EspacoService } from '../../espaco/espaco.service';
import { EventoService } from '../evento.service';

@Component({
  selector: 'app-evento-cad',
  templateUrl: './evento-cad.component.html',
  styleUrls: ['./evento-cad.component.scss'],
  providers: [MessageService]

})
export class EventoCadComponent implements OnInit {

  evento: any = [];
  espacos: any = [];
  artistas: any = [];
  artistaTmp: any;
  arttSelecionado: Array<any> = [];
  classificacoes: any = [];
  tipos: any = [];

  igmsEvento = [];

  constructor(
    private eventoService: EventoService,
    private router: Router,
    private messageService: MessageService,
    private artistaService: ArtistaService,
    private espacoService: EspacoService,

  ) {
    this.classificacoes = [
      { nome: 'LIVRE PARA TODOS OS PÚBLICOS', code: 'livre', logo: 'assets/imgs/classificacao/l.png' },
      { nome: 'NÃO RECOMENDADO PARA MENORES DE 10 ANOS', code: '10', logo: 'assets/imgs/classificacao/10.png' },
      { nome: 'NÃO RECOMENDADO PARA MENORES DE 12 ANOS', code: '12', logo: 'assets/imgs/classificacao/12.png' },
      { nome: 'NÃO RECOMENDADO PARA MENORES DE 14 ANOS', code: '14', logo: 'assets/imgs/classificacao/14.png' },
      { nome: 'NÃO RECOMENDADO PARA MENORES DE 16 ANOS', code: '16', logo: 'assets/imgs/classificacao/16.png' },
      { nome: 'NÃO RECOMENDADO PARA MENORES DE 18 ANOS', code: '18', logo: 'assets/imgs/classificacao/18.png' },
    ];
    this.tipos = [
      { nome: 'Autoral', value: 'autoral' },
      { nome: 'Instrumental', value: 'instrumental' },
      { nome: 'Intérprete', value: 'interprete' },
      { nome: 'Cover', value: 'cover' },
    ];
  }

  ngOnInit(): void {
    this.buscarArtista('');
    this.buscarEspacos('');
  }

  addArtista() {
    this.arttSelecionado.push(this.artistaTmp);
    this.evento.artistas = this.arttSelecionado;
    this.artistaTmp = {};
  }

  removerArt(att) {
    this.arttSelecionado = this.arttSelecionado.filter(art => {
      return art.value != att.value ?? art;
    });
    this.evento.artistas = this.arttSelecionado;
  }

  gravar() {
    this.evento.id = '';
    this.evento.fotosEvento = this.igmsEvento;

    this.eventoService.gravar(this.evento)
      .then(resp => {
        this.messageService.add({ severity: 'sucess', summary: 'sucess', detail: 'Evento Cadastrodo' });
        this.router.navigate(["evento-list"]);
      })
      .catch(error => console.log(error));
  }

  buscarArtista($event) {
    this.artistaService.listarResumo()
      .then(art => {
        this.artistas = art;
      })
      .catch(error => console.log(error));
  }

  buscarEspacos(event) {
    this.espacoService.listarResumo()
      .then(esp => {
        this.espacos = esp;
      })
      .catch(error => console.log(error));
  }

  async uploadHandlerImgsEvt(imagens: any, uploader: FileUpload) {
    console.log(imagens.files);
    for (const img of imagens.files) {
      console.log(img);
      this.igmsEvento.push(await this.blobToBase64(img));
      uploader.clear();
    }
  }

  async uploadHandlerPerfil(foto: any, uploader: FileUpload) {
    this.evento.imagemPerfil = await this.blobToBase64(foto.files[0]);
    uploader.clear();
  }

  blobToBase64(blob: any) {
    return new Promise((resolve, _) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(blob);
    });
  }
}
