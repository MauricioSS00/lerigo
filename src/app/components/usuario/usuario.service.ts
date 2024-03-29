import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  urlUsuario = `${environment.urlApi}usuario`;
  urlEveUsuario = `${environment.urlApi}eventos/usuario`;
  urlUserRap = `${environment.urlApi}usuario_rapido`;
  usuario = [];

  genero = [
    { name: 'Mulher cis', code: 'MC' },
    { name: 'Homem cis', code: 'HC' },
    { name: 'Mulher Transsexual', code: 'MT' },
    { name: 'Homem Transsexual', code: 'HT' },
    { name: 'Não Binário', code: 'NB' },
    { name: 'Gênero Fluído', code: 'GF' }
  ];

  tpArte = [
    { name: 'autoral', code: 'autoral' },
    { name: 'instrumental', code: 'autoral' },
    { name: 'intérprete', code: 'autoral' },
    { name: 'cover', code: 'autoral' }
  ];

  generoArte = [
    { name: 'axé', code: 'axé' },
    { name: 'blues', code: 'blues' },
    { name: 'country', code: 'country' },
    { name: 'eletrônica', code: 'eletrônica' },
    { name: 'forró', code: 'forró' },
    { name: 'funk', code: 'funk' },
    { name: 'gospel', code: 'gospel' },
    { name: 'hip hop', code: 'hip hop' },
    { name: 'jazz', code: 'jazz' },
    { name: 'mpb', code: 'mpb' },
    { name: 'música clássica', code: 'música clássica' },
    { name: 'pagode', code: 'pagode' },
    { name: 'pop', code: 'pop' },
    { name: 'rap', code: 'rap' },
    { name: 'reggae', code: 'reggae' },
    { name: 'rock', code: 'rock' },
    { name: 'samba', code: 'samba' },
    { name: 'sertanejo', code: 'sertanejo' }
  ];

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  gravar(user): Promise<any> {
    user = Object.assign({}, user);
    return this.http.post<any>(this.urlUsuario, user)
      .toPromise();
  }

  cadRapido(user) {
    return this.http.post<any>(`${this.urlUserRap}`, Object.assign({}, user))
      .toPromise();
  }

  listarUser() {
    return this.usuario;
  }

  carregarUsuarioId(id) {
    return this.http.get<any>(this.urlUsuario + '/' + id)
      .toPromise();
  }

  listarUsuarios(filtro) {
    let op = filtro != '' ? { params: { nome: filtro } } : {};
    return this.http.get<any>(this.urlUsuario + 's', op)
      .toPromise();
  }

  carregarEventos(id) {
    return this.http.get<any>(this.urlEveUsuario + '/' + id)
      .toPromise();
  }
}
