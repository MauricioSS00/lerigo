import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UsuarioService } from '../usuario.service';
import { ValidacaoService } from 'src/app/core/validacao.service';

import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-usuario-cad',
  templateUrl: './usuario-cad.component.html',
  styleUrls: ['./usuario-cad.component.scss'],
  providers: [MessageService]
})
export class UsuarioCadComponent implements OnInit {

  user: any = [];
  endereco: any = [];
  cidades = [];
  uf = [];
  genero = [];
  stateOptions: any[];
  tipoPessoa: any;
  selectedValue = ['Física', 'Juridica'];
  maskDoc = '';
  fieldObr = true;
  constructor(
    private messageService: MessageService,
    private userService: UsuarioService,
    private validacaoService: ValidacaoService
  ) {
    this.genero = [
      { name: 'Mulher cis', code: 'MC' },
      { name: 'Homem cis', code: 'HC' },
      { name: 'Mulher Transsexual', code: 'MT' },
      { name: 'Homem Transsexual', code: 'HT' },
      { name: 'Não Binário', code: 'NB' },
      { name: 'Gênero Fluído', code: 'GF' }
    ];
    this.cidades = [
      { name: 'Caçador', code: 'Caçador' },
      { name: 'Rio de Janeiro', code: 'Rio de Janeiro' },
      { name: 'São Paulo', code: 'São Paulo' }
    ];
    this.uf = [
      { name: 'SC', code: 'SC' },
      { name: 'SP', code: 'SP' },
      { name: 'RJ', code: 'RJ' },
      { name: 'DR', code: 'DR' },
      { name: 'RS', code: 'RS' },
      { name: 'AC', code: 'AC' }
    ]
  }

  ngOnInit(): void {
    this.user = this.userService.listarUser();
    this.user.tipoP = 'cpf';
    this.tipoDocumento();
  }

  gravar(ngForm: NgForm) {
    this.user.endereco = this.endereco;
    console.log(this.user);

  }

  tipoDocumento() {
    console.log(this.user.tipoP);
    this.maskDoc = this.user.tipoP == 'cnpj' ? '99.999.999/9999-99' : '999.999.999-99';
  }

  mudarObr() {
    this.fieldObr = this.user.estrangeiro ? false : true;
  }

  validaDoc() {
    let result: any;
    let doc = '';
    if (this.user.tipoP === 'cpf') {
      doc = 'CPF';
      result = this.validacaoService.validaCpf(this.user.doc);
    } else {
      doc = 'CNPJ'
      result = this.validacaoService.validarCnpj(this.user.doc);
    }
    console.log(result);
    if (!result) {
      this.messageService.add({ severity: 'error', summary: 'Aviso', detail: `${doc} inválido, informe um numeto válido!` });
      this.user.doc = '';
    }

  }

  buscaCep() {
    this.userService.buscaCEP(this.endereco.cep)
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

}
