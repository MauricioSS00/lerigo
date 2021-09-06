import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario = [];
  usuarios = [];
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  async buscaCEP(cep: String) {
    let cepBusca = cep.replace('-','');
      return this.http.get<any>(`https://viacep.com.br/ws/${cepBusca}/json/unicode/`)
        .toPromise()
        .then(data => {
          return data;
        });
  }

  gravar(user){
    this.usuario = user;
  }

  listarUser () {
    return this.usuario;
  }
}
