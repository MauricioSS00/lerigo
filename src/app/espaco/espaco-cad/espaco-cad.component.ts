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
  espaco = {
    nome: '', razao: '', CNPJ: '', email: '', contato: '', fone: '', celular: '', logo: '', site: '',
    facebook: '', instagram: '', twitter: '', estac: true, acess: true, lotMax: 0, descricao: '',
    dataInicio: ''
  };
  endereco: any = [];
  //{ logradouro: '', cep: '', cidade: '', uf: '', bairro: '', numero: '', complemento: '' }
  cities = [];
  uf = [];
  uploadedFiles: any[] = [];

  constructor(
    private messageService: MessageService,
    private espacoService: EspacoService
  ) {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Caçador', code: 'PRS' }
    ];
    this.uf = [
      { uf: 'SC' },
      { uf: 'SP' },
      { uf: 'RJ' },
      { uf: 'AC' }
    ];
    this.stateOptions = [{ label: 'Sim', value: true }, { label: 'Não', value: false }];
  }

  ngOnInit(): void {
  }

  gravar(ngForm: NgForm) {
    console.log('Gravar');

  }
  onUpload(event) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }

    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
  }

  onBasicUpload(event) {
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
          this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });

          this.endereco = data;
        }
      )
      //this.messageService.add({ severity: 'info', summary: 'Danger', detail: 'Erro ao buscar o CEP informado!' })
      .catch(error => console.log(error));
  }
}
