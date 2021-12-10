import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArtistaService {

  urlArtista = `${environment.urlApi}artista`;
  urlArtistaDrop = `${environment.urlApi}dropdown/artista`;

  constructor(private http: HttpClient) { }


  listarResumo() {
    return this.http.get<any>(`${this.urlArtistaDrop}`)
      .toPromise();
  }

}
