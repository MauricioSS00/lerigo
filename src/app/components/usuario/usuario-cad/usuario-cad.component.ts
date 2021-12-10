import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MessageService } from 'primeng/api';
import { FileUpload } from 'primeng/fileupload';

import { UsuarioService } from '../usuario.service';
import { ValidacaoService } from 'src/app/shared/validacao.service';
import { AppGlobals } from 'src/app/core/navbar/appGlobals';

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
  tpArte: any = [];
  generoArte: any = [];
  artista: any = {};
  produtor: any = {};


  fieldObr = true;
  displayArtista = false;
  fotoArtista = [];

  displayProdutor = false;
  fotoProdutor = [];


  constructor(
    private messageService: MessageService,
    private userService: UsuarioService,
    private validacaoService: ValidacaoService,
    public appGlobals: AppGlobals,
    public router: Router
  ) {
    this.genero = [
      { name: 'Mulher cis', code: 'MC' },
      { name: 'Homem cis', code: 'HC' },
      { name: 'Mulher Transsexual', code: 'MT' },
      { name: 'Homem Transsexual', code: 'HT' },
      { name: 'Não Binário', code: 'NB' },
      { name: 'Gênero Fluído', code: 'GF' }
    ];

    this.tpArte = [
      { name: 'autoral', code: 'autoral' },
      { name: 'instrumental', code: 'autoral' },
      { name: 'intérprete', code: 'autoral' },
      { name: 'cover', code: 'autoral' }

    ];
    this.generoArte = [
      { name: 'axé', code: 'axé' },
      { name: 'blues', code: 'blues' },
      { name: 'country', code: 'country' },
      { name: 'eletrônica', code: 'eletrônica' },
      { name: 'forró', code: 'forró' },
      { name: 'funk', code: 'funk' },
      { name: 'gospel', code: 'gospel' },
      { name: 'hip hop', code: 'hip hop' },
      { name: 'jazz', code: 'jazz' },
      { name: 'mpb', code: 'mpb' },
      { name: 'música clássica', code: 'música clássica' },
      { name: 'pagode', code: 'pagode' },
      { name: 'pop', code: 'pop' },
      { name: 'rap', code: 'rap' },
      { name: 'reggae', code: 'reggae' },
      { name: 'rock', code: 'rock' },
      { name: 'samba', code: 'samba' },
      { name: 'sertanejo', code: 'sertanejo' }
    ];
  }

  ngOnInit(): void {
    this.user = this.userService.listarUser();
    this.user.tipoP = 'cpf';
    this.tipoDocumento();
    this.uf = this.appGlobals.getEstados();
  }

  gravar() {
    this.user.endereco = this.endereco;
    console.log(Object.assign({}, this.user));
    this.userService.gravar(this.user)
      .then(res => {
        this.messageService.add({ severity: 'sucess', summary: 'Sucess', detail: 'Usuário cadastrado!' })
        this.router.navigate(['usuario-area']);
      })
      //TODO
      .catch(error => {
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Não foi possível cadastrar seu usuário!' })
      });
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
