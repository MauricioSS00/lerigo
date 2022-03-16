import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArtistaService {

  urlArtista = `${environment.urlApi}usuarios/artista`;
  urlArtistaDrop = `${environment.urlApi}dropdown/artista`;

  constructor(private http: HttpClient) { }

  listarArtistaEmail(email: string) {
    let op = { params: { email } }
    return this.http.get<any>(`${this.urlArtista}`, op)
      .toPromise();
  }

  listarResumo() {
    return this.http.get<any>(`${this.urlArtistaDrop}`)
      .toPromise();
  }

  listarArtistas(filtro = "") {
    let op = { params: { nome: filtro, email: filtro } }
    return this.http.get<any>(`${this.urlArtista}`, op)
      .toPromise();
  }

  listarRelacionados(usuario: number) {
    let op = { params: { usuario } }
    return this.http.get<any>(`${this.urlArtista}`, op)
      .toPromise();
  }

}
