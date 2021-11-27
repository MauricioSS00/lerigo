import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  urlEvento = `${environment.urlApi}evento`;
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  gravar(evento: any): Promise<any> {
    evento  = Object.assign({}, evento);
    return this.http.post<any>(this.urlEvento, evento, this.httpOptions)
      .toPromise();
  }

  listarEventos(): Promise<any> {
    return this.http.get<any>(`${this.urlEvento}s`, this.httpOptions)
      .toPromise();
  }


}
