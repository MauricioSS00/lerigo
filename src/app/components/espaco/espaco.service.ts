import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

import * as rxjs from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EspacoService {

  urlEspaco = `${environment.urlApi}espaco`;
  urlEspacos = `${environment.urlApi}espacos`;
  urlEspacosDrop = `${environment.urlApi}dropdown/espaco`;

  constructor(private http: HttpClient) { }

  gravarEspaco(espaco: any) {
    espaco = Object.assign({}, espaco);
    return this.http.post<any>(this.urlEspaco, espaco)
      .toPromise();
  }

  async listarEspacos() {
    return await this.http.get<any>(this.urlEspacos)
      .toPromise();
  }

  listarResumo() {
    return this.http.get<any>(`${this.urlEspacosDrop}`)
      .toPromise();
  }
}
