import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { FileUpload } from 'primeng/fileupload';
import { AppGlobals } from 'src/app/core/navbar/appGlobals';
import { ValidacaoService } from 'src/app/shared/validacao.service';
import { UsuarioService } from '../usuario.service';

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
  endereco: any = [];
  cidades: any;
  uf: any;
  selectedValue = ['Física', 'Juridica'];
  genero: any = [];
  tpArte: any = [];
  generoArte: any = [];
  bemVindo: string;

  displayProdutor = false;
  displayArtista = false;
  artista: any = {};
  produtor: any = {};
  fotoArtista = [];
  fotoProdutor = [];
  

  constructor(
    private validacaoService: ValidacaoService,
    private messageService: MessageService,
    private router: Router,
    private userService: UsuarioService,
    public appGlobals: AppGlobals

  ) {
    this.genero = this.userService.genero;
    this.tpArte = this.userService.tpArte;
    this.generoArte = this.userService.generoArte;
  }

  ngOnInit(): void {
    this.uf = this.appGlobals.getEstados();
    this.user.tipoP = 'cpf';
    this.user = this.userService.usuario;

    this.carregarBemVindo();
  }

  carregarBemVindo() {
    switch (this.user.genero) {
      case 'MC' || 'MT':
        this.bemVindo = 'Bem vinda à sua conta';
        break;
      case 'NB' || 'GF':
        this.bemVindo = 'Bem vinde à sua conta';
        break;
      default:
        this.bemVindo = 'Bem vindo à sua conta';
        break;
    }
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
    if (tipo === 'espaco') {
      this.router.navigate(['espaco-cad']);
    } else if (tipo === 'atista') {
      this.router.navigate(['usuario-cad']);
    } else if (tipo === 'produtor') {
      this.router.navigate(['usuario-cad']);
    }
  }

  async buscaCep() {
    this.appGlobals.getCEP(this.endereco.cep)
      .then(data => {
        if (!data.erro) {
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
          this.cidades = value.map(v => {
            return { name: v.nome, code: v.nome };
          })
        });
    } else {
      this.endereco.localidade = "";
    }
  }

  async uploadHandlerImgs(imagens: any, uploader: FileUpload, tp: string) {
    for (const img of imagens.files) {
      console.log(img);
      if (tp == 'a') {
        this.fotoArtista.push(await this.blobToBase64(img));
      } else if (tp == 'p') {
        this.fotoProdutor.push(await this.blobToBase64(img));
      }
    }
  }

  blobToBase64(blob: any) {
    return new Promise((resolve, _) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(blob);
    });
  }

    //Ações de artista
    gravarArtista() {
      this.displayArtista = false;
      this.artista.fotos = this.fotoArtista;
      this.user.artista = this.artista;
    }
  
    //Ações de produtor
    gravarProdutor() {
      this.displayProdutor = false;
      this.produtor.fotos = this.fotoProdutor;
      this.user.produtor = this.produtor;
    }
}
