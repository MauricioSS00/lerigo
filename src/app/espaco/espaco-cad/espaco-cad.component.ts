import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { MessageService } from 'primeng/api';
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
  uploadedFiles: any[] = [];

  constructor(
    private messageService: MessageService,
    private espacoService: EspacoService
  ) {
    this.cities = [
      { name: 'Moema', code: 'Moema' },
      { name: 'Rio de Janeiro', code: 'Rio de Janeiro' },
      { name: 'São Paulo', code: 'São Paulo' },
      { name: 'Videira', code: 'Videira' },
      { name: 'Caçador', code: 'Caçador' }
    ];
    this.horario = [
      { id: 0, dia: 'Domingo', ini1: '', fim1: '', ini2: '', fim2: '' },
      { id: 1, dia: 'Segunda-Feira', ini1: '', fim1: '', ini2: '', fim2: '' },
      { id: 2, dia: 'Terça-Feira', ini1: '', fim1: '', ini2: '', fim2: '' },
      { id: 3, dia: 'Quarta-Feira', ini1: '', fim1: '', ini2: '', fim2: '' },
      { id: 4, dia: 'Quinta-Feira', ini1: '', fim1: '', ini2: '', fim2: '' },
      { id: 5, dia: 'Sexta-Feira', ini1: '', fim1: '', ini2: '', fim2: '' },
      { id: 6, dia: 'Sábado', ini1: '', fim1: '', ini2: '', fim2: '' }
    ];
    this.uf = [
      { name: 'SC', code: 'SC' },
      { name: 'RJ', code: 'RJ' },
      { name: 'SP', code: 'SP' },
      { name: 'AC', code: 'AC' },
      { name: 'RS', code: 'RS' }
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
  }

  gravar(ngForm: NgForm) {
    this.espaco.endereco = this.endereco;
    this.espaco.horario = this.horario;
    this.espacoService.gravarEspaco(this.espaco);

  }
  onUpload(event) {
    console.log(event);
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }

    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
  }

  onBasicUpload(event) {
    console.log(event);
    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
  }

  onBasicUploadAuto(event) {
    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Auto Mode' });
  }

  buscaCep() {
    this.espacoService.buscaCEP(this.endereco.cep)
      .then(
        data => {
          console.log(data);
          if (!data.erro) {
            this.endereco = data;
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


  myUploader(event) {
    //event.files == files to upload
    console.log(event);
  }
}
