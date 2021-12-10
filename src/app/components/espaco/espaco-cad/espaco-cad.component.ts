import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MessageService } from 'primeng/api';
import { FileUpload } from 'primeng/fileupload';

import { AppGlobals } from 'src/app/core/navbar/appGlobals';
import { EspacoService } from '../espaco.service';

@Component({
  selector: 'app-espaco-cad',
  templateUrl: './espaco-cad.component.html',
  styleUrls: ['./espaco-cad.component.scss'],
  providers: [MessageService]
})

export class EspacoCadComponent implements OnInit {

  edicao: boolean = false;
  stateOptions: any[];
  espaco: any = {};
  endereco: any = [];
  tipo: any;
  programacao: any;
  horario = [];
  cities = [];
  uf = [];
  fotosEspaco: any = [];

  constructor(
    private messageService: MessageService,
    private espacoService: EspacoService,
    private router: Router,
    public appGlobals: AppGlobals
  ) {

    this.horario = [
      { id: 0, dia: 'Domingo', ini1: '', fim1: '', ini2: '', fim2: '' },
      { id: 1, dia: 'Segunda-Feira', ini1: '', fim1: '', ini2: '', fim2: '' },
      { id: 2, dia: 'Terça-Feira', ini1: '', fim1: '', ini2: '', fim2: '' },
      { id: 3, dia: 'Quarta-Feira', ini1: '', fim1: '', ini2: '', fim2: '' },
      { id: 4, dia: 'Quinta-Feira', ini1: '', fim1: '', ini2: '', fim2: '' },
      { id: 5, dia: 'Sexta-Feira', ini1: '', fim1: '', ini2: '', fim2: '' },
      { id: 6, dia: 'Sábado', ini1: '', fim1: '', ini2: '', fim2: '' }
    ];

    this.stateOptions = [{ label: 'Sim', value: true }, { label: 'Não', value: false }];

    this.tipo = [
      { name: 'Bar', code: 1 },
      { name: 'Lanchonete', code: 2 },
      { name: 'Restaurante', code: 3 },
      { name: 'Danceteria', code: 4 },
    ];
    this.programacao = [
      { name: 'Música ao vivo', code: 1 },
      { name: 'Shows', code: 2 },
      { name: 'Festas', code: 3 },
    ];
  }

  ngOnInit(): void {
    this.espaco.estac = true;
    this.espaco.acess = true;
    this.uf = this.appGlobals.getEstados();
  }

  gravar() {
    this.espaco.endereco = this.endereco;
    this.espaco.horario = this.horario;
    this.espaco.fotosEspaco = this.fotosEspaco;

    this.espacoService.gravarEspaco(this.espaco)
      .then(resp => {
        this.messageService.add({ severity: 'sucess', summary: 'sucess', detail: 'Espaço Cadastrodo' });
        this.router.navigate(["espaco-list"]);
      })
      .catch(error => console.log(error));

  }

  async buscaCep() {
    this.appGlobals.getCEP(this.endereco.cep)
      .then(data => {
        if (!data.erro) {
          console.log(data);
          this.endereco = data;
          this.mudouUF();
        } else {
          this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'CEP não encontrato, verique os dados novamente!' });
        }
      }
      )
      .catch(error => {
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Falha ao buscar o CEP informado!' });
        console.log("Erro:", error)
      });
  }

  async mudouUF() {
    if (this.endereco.uf && this.endereco.uf != "") {
      await this.appGlobals.getCidades(this.endereco.uf)
        .then(value => {
          this.cities = value.map(v => {
            return { name: v.nome, code: v.nome };
          })
        });
    } else {
      this.endereco.localidade = "";
    }
  }

  async uploadHandlerImgsEvt(imagens: any, uploader: FileUpload) {
    for (const img of imagens.files) {
      this.fotosEspaco.push(await this.blobToBase64(img));
      uploader.clear();
    }
  }

  async uploadHandlerPerfil(foto: any, uploader: FileUpload) {
    this.espaco.logo = await this.blobToBase64(foto.files[0]);
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
