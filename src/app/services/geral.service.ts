import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class GeralService {

    urlSolic = `${environment.urlApi}permissao/`;
    constructor(
        private http: HttpClient
    ) { }

    lstSolicitacaoesProd(artista) {
        let op = { params: { artista } }
        return this.http.get<any>(`${this.urlSolic}produtor/artista`, op)
            .toPromise();
    }

    lstSolicitacaoesArt(artista) {
        let op = { params: { artista } }
        return this.http.get<any>(`${this.urlSolic}evento/artista`, op)
            .toPromise();
    }

    alterarSolicitacoes(solicitacao) {
        return this.http.put<any>(`${this.urlSolic}status`, solicitacao)
            .toPromise();
    }
}