import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ValidacaoService } from 'src/app/shared/validacao.service';

@Component({
  selector: 'app-usuario-area',
  templateUrl: './usuario-area.component.html',
  styleUrls: ['./usuario-area.component.scss'],
  providers: [MessageService]
})
export class UsuarioAreaComponent implements OnInit {

  user: any = [];
  disabledConta = true;
  maskDoc = '';
  fieldObr = true;

  constructor(
    private validacaoService: ValidacaoService,
    private messageService: MessageService,
    private router: Router


  ) { }

  ngOnInit(): void {
  }

  changeConta() {
    if (!this.disabledConta) {
      console.log('Bloquia os campos');
      this.gravarAlterConta();
      this.disabledConta = true;
    } else {
      this.disabledConta = false;
      console.log('Libera os campos');
    }
  }

  gravarAlterConta() {
    console.log('Gravar Dados Conta');
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

  novoCad(tipo: String) {
    console.log(tipo);
    if (tipo === 'espaco') {
      this.router.navigate(['espaco-cad']);
    } else if (tipo === 'atista') {
      this.router.navigate(['usuario-cad']);
    } else if (tipo === 'produtor') {
      this.router.navigate(['usuario-cad']);
    }
  }
}
