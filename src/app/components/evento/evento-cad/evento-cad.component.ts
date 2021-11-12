import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { FileUpload } from 'primeng/fileupload';

@Component({
  selector: 'app-evento-cad',
  templateUrl: './evento-cad.component.html',
  styleUrls: ['./evento-cad.component.scss']
})
export class EventoCadComponent implements OnInit {

  evento: any = {};
  espacos: any = [];
  artistas: any = [];
  artistaTmp: any;
  arttSelecionado: Array<any> = [];
  classificacoes: any = [];
  tipos: any = [];

  constructor() {
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

  gravar(form: NgForm) {
console.log(this.evento)
  }

  buscarArtista(event) {
    this.artistas = [
      { label: 'Gabriel', tipo: 'Autoral', value: 10 },
      { label: 'Gabriel II', tipo: 'Cover', value: 11 }
    ]
  }

  async uploadHandler(imagem: any, uploader: FileUpload, campo: string) {
    this.evento[campo] = await this.blobToBase64(imagem.files[0]);
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
