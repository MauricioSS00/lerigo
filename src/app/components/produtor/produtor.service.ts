import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProdutorService {

  urlProdutor = `${environment.urlApi}produtor`;
  urlProdutorDrop = `${environment.urlApi}dropdown/produtor`;

  constructor(private http: HttpClient) { }


  listarResumo() {
    return this.http.get<any>(`${this.urlProdutorDrop}`)
      .toPromise();
  }
}
