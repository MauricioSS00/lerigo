import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProdutorService {

  urlProdutor = `${environment.urlApi}usuarios/produtor`;
  urlProdutorDrop = `${environment.urlApi}dropdown/produtor`;

  constructor(private http: HttpClient) { }


  listarResumo() {
    return this.http.get<any>(`${this.urlProdutorDrop}`)
      .toPromise();
  }

  listar(filtro = "") {
    let op = { params: { nome: filtro, email: filtro } }
    return this.http.get<any>(`${this.urlProdutor}`, op)
      .toPromise();
  }

  listarProdEmail(email: string) {
    let op = { params: { email } }
    return this.http.get<any>(`${this.urlProdutor}`, op)
      .toPromise();
  }

  listarRelacionados(usuario: string) {
    let op = { params: { usuario } }
    return this.http.get<any>(`${this.urlProdutor}`, op)
      .toPromise();
  }

}
