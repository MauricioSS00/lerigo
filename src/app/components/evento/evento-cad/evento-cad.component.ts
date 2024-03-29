import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { FileUpload } from 'primeng/fileupload';

import { AppGlobals } from 'src/app/core/navbar/appGlobals';
import { ErrorHandlerService } from 'src/app/services/errorHandler.service';
import { GeralService } from 'src/app/services/geral.service';
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
  editando = false;
  igmsEvento = [];

  constructor(
    private eventoService: EventoService,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private artistaService: ArtistaService,
    private espacoService: EspacoService,
    public error: ErrorHandlerService,
    public appGlobals: AppGlobals,
    public geralSvc: GeralService
  ) {
    this.classificacoes = [
      { nome: 'LIVRE PARA TODOS OS PÚBLICOS', code: 'livre', logo: 'assets/imgs/classificacao/l.png' },
      { nome: 'NÃO RECOMENDADO PARA MENORES DE 10 ANOS', code: '10', logo: 'assets/imgs/classificacao/10.png' },
      { nome: 'NÃO RECOMENDADO PARA MENORES DE 12 ANOS', code: '12', logo: 'assets/imgs/classificacao/12.png' },
      { nome: 'NÃO RECOMENDADO PARA MENORES DE 14 ANOS', code: '14', logo: 'assets/imgs/classificacao/14.png' },
      { nome: 'NÃO RECOMENDADO PARA MENORES DE 16 ANOS', code: '16', logo: 'assets/imgs/classificacao/16.png' },
      { nome: 'NÃO RECOMENDADO PARA MENORES DE 18 ANOS', code: '18', logo: 'assets/imgs/classificacao/18.png' },
    ];
  }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.editando = true;
      this.carregarEvento(id);
    }
    this.buscarTipos('');
    this.buscarArtista('');
    this.buscarEspacos('');
  }

  carregarEvento(id) {
    this.eventoService.listarEventoId(id)
    .then(resp => {
      console.log(resp);
      this.evento = resp;
    })
    .catch(error => this.error.errorHandler(error));
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
    if (!this.editando) {
      this.evento.id = '';
      this.evento.usuarioCriador = this.appGlobals.usuario.id;
    }
    this.evento.fotosEvento = this.igmsEvento;

    this.eventoService.gravar(this.evento)
      .then(resp => {
        this.messageService.add({ severity: 'sucess', summary: 'sucess', detail: 'Evento Cadastrodo' });
        this.router.navigate(["evento-list"]);
      })
      .catch(error => this.error.errorHandler(error));
  }

  // BUSCAS //

  buscarArtista(event) {
    this.artistaService.listarResumo()
      .then(art => {
        this.artistas = art;
      })
      .catch(err => this.error.errorHandler(err));
  }

  buscarEspacos(event) {
    this.espacoService.listarResumo()
      .then(esp => {
        this.espacos = esp;
      })
      .catch(err => this.error.errorHandler(err));
  }

  buscarTipos(event) {
    let filtro = event.query != undefined ? event.query : '';
    this.geralSvc.listarTpsEvento(filtro)
      .then(esp => {
        this.tipos = esp;
      })
      .catch(err => this.error.errorHandler(err));
  }

  // UPLOAD //

  async uploadHandlerImgsEvt(imagens: any, uploader: FileUpload) {
    console.log(imagens.files);
    for (const img of imagens.files) {
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
