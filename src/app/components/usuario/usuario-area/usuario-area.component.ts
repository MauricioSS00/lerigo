import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MessageService } from 'primeng/api';
import { FileUpload } from 'primeng/fileupload';

import { AppGlobals } from 'src/app/core/navbar/appGlobals';
import { ErrorHandlerService } from 'src/app/services/errorHandler.service';
import { GeralService } from 'src/app/services/geral.service';
import { ValidacaoService } from 'src/app/shared/validacao.service';
import { ArtistaService } from '../../artista/artista.service';
import { EspacoService } from '../../espaco/espaco.service';
import { ProdutorService } from '../../produtor/produtor.service';
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
  genero: any = [];
  tpArte: any = [];
  generoArte: any = [];
  bemVindo: string;

  artista: any = {};
  produtor: any = {};
  fotoArtista = [];
  fotoProdutor = [];

  solicitacoes = [];
  eventosUser = [];
  tabIndex = 0;
  artistaRel = [];
  usuariosCad = [];


  // tab espacos
  userSelTmp: any = [];
  tpPermTmp = 0;
  espacoTmp: any;
  espacoRel = [];


  // displays
  displayProdutor = false;
  displayArtista = false;
  displayRelEspaco = false;

  constructor(
    private validacaoService: ValidacaoService,
    private messageService: MessageService,
    private router: Router,
    private userService: UsuarioService,
    public appGlobals: AppGlobals,
    private artistaSvc: ArtistaService,
    private produtorSvc: ProdutorService,
    private espacoSvc: EspacoService,
    private errorSvc: ErrorHandlerService,
    private geralSvc: GeralService

  ) {
    this.genero = this.userService.genero;
    this.tpArte = this.userService.tpArte;
    this.generoArte = this.userService.generoArte;
  }

  async ngOnInit() {
    this.uf = this.appGlobals.getEstados();
    await this.carregarUsuario();
    this.carregarBemVindo();
  }

  async carregarUsuario() {
    const idUser = this.appGlobals.usuario.id;
    this.user = await this.userService.carregarUsuarioId(idUser);
    console.log(this.user);
    this.user.tipo_pessoa = await this.user.tipo_pessoa == ('F' || 'cpf') ? 'cpf' : 'cnpj';
    this.endereco.localidade = this.user.cidade;
    this.endereco.uf = this.user.uf;
    this.endereco.cep = this.user.cep;
    this.endereco.logradouro = this.user.logradouro;
    this.endereco.bairro = this.user.bairro;
    this.endereco.numero = this.user.numero;
    this.endereco.complmento = this.user.complmento;
    this.mudouUF();
    await this.tipoDocumento();
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

  async tipoDocumento() {
    this.maskDoc = this.user.tipo_pessoa == 'cnpj' ? '99.999.999/9999-99' : '999.999.999-99';
  }

  mudarObr() {
    this.fieldObr = this.user.estrangeiro ? false : true;
  }

  validaDoc() {
    let result: any;
    let doc = '';
    if (this.user.tipo_pessoa === 'cpf') {
      doc = 'CPF';
      result = this.validacaoService.validaCpf(this.user.doc);
    } else {
      doc = 'CNPJ'
      result = this.validacaoService.validarCnpj(this.user.doc);
    }
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
    } else if (tipo === 'evento') {
      this.router.navigate(['evento-cad']);
    }
  }

  editarCad(tipo: String, id: any) {
    if (tipo === 'espaco') {
      this.router.navigate([`espaco-cad/${id}`]);
    } else if (tipo === 'atista') {
      this.router.navigate([`usuario-cad/${id}`]);
    } else if (tipo === 'produtor') {
      this.router.navigate([`usuario-cad/${id}`]);
    } else if (tipo === 'evento') {
      this.router.navigate([`evento-cad/${id}`]);
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

  async uploadHandlerPerfil(foto: any, uploader: FileUpload) {
    this.user.ftPerfil = await this.blobToBase64(foto.files[0]);
    uploader.clear();
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

  carregarArtista() {
    this.artistaSvc.listarArtistaEmail(this.user.email)
      .then(rs => {
        console.log(rs);
      })
      .catch(err => this.errorSvc.errorHandler(err));
  }

  carregarProdutor() {
    this.produtorSvc.listarProdEmail(this.user.email)
      .then(rs => {
        console.log(rs);
      })
      .catch(err => this.errorSvc.errorHandler(err));
  }

  carregarEspacosRelacionados() {
    this.espacoSvc.listarEspacosrelacionados(this.user.id)
      .then(rs => {
        this.espacoRel = rs;
        console.log(this.espacoRel);
      })
      .catch(err => this.errorSvc.errorHandler(err));
  }

  carregarArtistasRelacionados() {
    this.artistaSvc.listarRelacionados(this.user.id)
      .then(rs => {
        console.log(rs);
      })
      .catch(err => this.errorSvc.errorHandler(err));
  }

  carregarProdutoresRelacionados() {
    this.produtorSvc.listarRelacionados(this.user.id)
      .then(rs => {
        console.log(rs);
      })
      .catch(err => this.errorSvc.errorHandler(err));
  }

  async carregarSolicitacoes() {
    this.solicitacoes = await this.geralSvc.lstSolicitacaoesArt(this.user.id);
    this.solicitacoes.push(await this.geralSvc.lstSolicitacaoesProd(this.user.id));
  }

  async carregarEventos() {
    this.eventosUser = await this.userService.carregarEventos(this.user.id);
    console.log(this.eventosUser);
  }
  controlaTabs(tab) {
    this.tabIndex = tab.index;
    switch (this.tabIndex) {
      case 0:
        this.carregarUsuario();
        break;
      case 1:
        this.carregarEspacosRelacionados();
        break;
      case 2:
        this.carregarArtistasRelacionados();
        break;
      case 3:
        this.carregarProdutoresRelacionados();
        break;
      case 4:
        this.carregarEventos();
        break;
      case 5:
        this.carregarSolicitacoes();
        break;
    }
  }

  atualizarSolic(solicitacao) {
    this.geralSvc.alterarSolicitacoes(solicitacao)
      .then(rs => {
        console.log(rs);
      })
      .catch(er => console.log(er));
  }

  async relUserEspaco() {
    let body = {
      id: 0,
      idEspaco: this.espacoTmp,
      idUsuario: this.userSelTmp.id,
      nivel: Number(this.tpPermTmp)
    };

    await this.espacoSvc.gravarAdm(body);

    this.userSelTmp = [];
    this.tpPermTmp = 0;
    this.espacoTmp = [];
    this.displayRelEspaco = false;
  }

  async carregarUsuarios(filtro: any) {
    console.log(filtro.query);
    this.usuariosCad = await this.userService.listarUsuarios(filtro.query);
    this.usuariosCad = this.usuariosCad.filter(u => {
      return u.id != this.appGlobals.usuario.id;
    });
  }
}
