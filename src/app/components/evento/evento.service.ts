import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  urlEvento = `${environment.urlApi}evento`;
  constructor(private http: HttpClient) { }


  gravar(evento: any): Promise<any> {
    evento = Object.assign({}, evento);
    return this.http.post<any>(this.urlEvento, evento)
      .toPromise();
  }

  listarEventos(dataIni = '', dataFim = ''): Promise<any> {
    let op = { header: {}, params: {} };
    dataIni != '' ? op.params['data1'] = dataIni : {};
    dataIni != '' ? op.params['data2'] = dataFim : {};
    return this.http.get<any>(`${this.urlEvento}s`, op)
      .toPromise();
  }

  listarEventoId(id: number): Promise<any> {
    return this.http.get<any>(`${this.urlEvento}/${id}`)
      .toPromise();
  }

}
