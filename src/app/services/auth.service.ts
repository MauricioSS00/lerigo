import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { AppGlobals } from '../core/navbar/appGlobals';
import { TokenService } from './token.service';

export interface DadosAcesso {
  token: string
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  urlLogin = `${environment.urlApi}login`;
  public usuarioLogado = false;

  constructor(
    private http: HttpClient,
    private tokenSvc: TokenService,
    public appGlobals: AppGlobals
  ) { }

  setLogado(status: boolean, token) {
    this.usuarioLogado = status;
    this.appGlobals.logado = status;
    this.tokenSvc.apiToken = token;
  }

  getLogado() {
    return this.usuarioLogado;
  }

  login(email: string, password: string) {
    let acesso = {
      email,
      password
    }
    return this.http.post<any>(`${this.urlLogin}`, acesso)
    .toPromise();
  }

  logout() {
    this.usuarioLogado = false;
    this.tokenSvc.revoke();
  }
}
