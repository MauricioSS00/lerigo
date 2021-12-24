import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaginasService {

  urlColab = `${environment.urlApi}colaborador`;


  constructor(
    private http: HttpClient
  ) { }


  listarColaboradores() {
    let op: any = { header: {}, params: {} };
    op.params['status'] = 0;

    return this.http.get<any>(`${this.urlColab}es`, op)
      .toPromise();
  }
}
