import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EspacoService {

  espaco: any = [];
  espacos: any = [];

  constructor(private http: HttpClient) {
    this.espacos.push({
      "estac": true,
      "acess": true,
      "nome": "Espaço Teste",
      "razao": "Espaco Teste LTDA",
      "CNPJ": "71.351.037/0001-02",
      "abertura": "2020-09-17T03:00:00.000Z",
      "fone": "(49)3563-7093",
      "celular": "(49)98902-9689",
      "space_whats": "(49)98902-9689",
      "email": "gabriel.dev@gmail.com",
      "site": "site",
      "facebook": "facebook",
      "instagram": "instagram",
      "twitter": "twitter",
      "lotMax": 250,
      "tipo": "Bar",
      "programacao": 1,
      "descricao": "Bar com musica ao vivo",
      "endereco": {
        "cep": "89509-036",
        "logradouro": "Rua Pedro Fernandes de Oliveira",
        "complemento": "2º Andar",
        "bairro": "Bello",
        "localidade": "Caçador",
        "uf": "SC",
        "ibge": "4203006",
        "gia": "",
        "ddd": "49",
        "siafi": "8057",
        "numero": 123
      },
      "images": [
        {
          "previewImageSrc": "assets/imgs/event1.png",
          "thumbnailImageSrc": "assets/imgs/event1.png",
          "alt": "Description for Image 1",
          "title": "Title 1"
        },
        {
          "previewImageSrc": "assets/imgs/event2.png",
          "thumbnailImageSrc": "assets/imgs/event2.png",
          "alt": "Description for Image 2",
          "title": "Title 2"
        },
        {
          "previewImageSrc": "assets/imgs/event3.png",
          "thumbnailImageSrc": "assets/imgs/event3.png",
          "alt": "Description for Image 3",
          "title": "Title 3"
        },
      ],
      "horario": [
        {
          "id": 0,
          "dia": "Domingo",
          "ini1": "15:00",
          "fim1": "17:00",
          "ini2": "18:00",
          "fim2": "20:00"
        },
        {
          "id": 1,
          "dia": "Segunda-Feira",
          "ini1": "",
          "fim1": "",
          "ini2": "",
          "fim2": ""
        },
        {
          "id": 2,
          "dia": "Terça-Feira",
          "ini1": "",
          "fim1": "",
          "ini2": "",
          "fim2": ""
        },
        {
          "id": 3,
          "dia": "Quarta-Feira",
          "ini1": "",
          "fim1": "",
          "ini2": "",
          "fim2": ""
        },
        {
          "id": 4,
          "dia": "Quinta-Feira",
          "ini1": "",
          "fim1": "",
          "ini2": "",
          "fim2": ""
        },
        {
          "id": 5,
          "dia": "Sexta-Feira",
          "ini1": "",
          "fim1": "",
          "ini2": "",
          "fim2": ""
        },
        {
          "id": 6,
          "dia": "Sábado",
          "ini1": "08:30",
          "fim1": "12:00",
          "ini2": "13:00",
          "fim2": "22:00"
        }
      ]
    });
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  async buscaCEP(cep: String) {
    let cepBusca = cep.replace('-', '');
    return this.http.get<any>(`https://viacep.com.br/ws/${cepBusca}/json/unicode/`)
      .toPromise()
      .then(data => {
        return data;
      });
  }

  gravarEspaco(espaco: any) {
    this.espacos.push(espaco);
    console.log(this.espacos);
  }

  listarEspacos() {
    console.log(this.espacos);
    return this.espacos;
  }
}
