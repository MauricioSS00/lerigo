import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  urlUsuario = `${environment.urlApi}usuario`;
  urlLogin = `${environment.urlApi}login`;
  usuario = [];
  constructor(private http: HttpClient) { }

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

  gravar(user): Promise<any> {
    user = Object.assign({}, user); 
    return this.http.post<any>(this.urlUsuario, user)
      .toPromise();
  }

  cadRapido(user) {
    return this.http.post<any>(`${this.urlLogin}`, Object.assign({}, user))
    .toPromise();
  }

  listarUser() {
    return this.usuario;
  }

  login(email: string, password: string) {
    let acesso = {
      email,
      password
    }
    return this.http.post<any>(`${this.urlUsuario}_rapido`, acesso)
    .toPromise();
  }

  logout() {

  }
}
